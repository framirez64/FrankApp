import clingo
import random

def generate_scheduler_facts(n_people, n_tasks, duration_range):
    facts = []
    for i in range(1, n_people + 1):
        facts.append(f"person(p{i}).")
    for i in range(1, n_tasks + 1):
        dur = random.randint(*duration_range)
        facts.append(f"task(t{i}).")
        facts.append(f"duration(t{i}, {dur}).")
        # For demo, assume all tasks require 15-min granularity:
        facts.append(f"requires(t{i}, 15).")
    return "\n".join(facts)

def generate_valid_slot_facts(start_hour, end_hour):
    return f"""
    % Only slots in working hours are valid
    valid_slot(G, I) :- slot(G, I, H, _), H >= {start_hour}, H < {end_hour}.
    """

def run_scheduler(n_people, n_tasks, duration_range, start_hour, end_hour, constraints=""):
    ctl = clingo.Control()
    ctl.load("base.lp")
    ctl.load("granular_timeslots.lp")
    
    facts = generate_scheduler_facts(n_people, n_tasks, duration_range)
    valid_slots = generate_valid_slot_facts(start_hour, end_hour)
    
    ctl.add("base", [], facts + "\n" + valid_slots + "\n" + constraints)
    ctl.ground([("base", [])])

    def on_model(m):
        print("\nSchedule:")
        for atom in sorted(m.symbols(shown=True)):
            print(f"  {atom}")

    result = ctl.solve(on_model=on_model)
    if result.satisfiable:
        print("✅ Schedule found.")
    else:
        print("❌ No schedule found.")

if __name__ == "__main__":
    print("Scheduler Setup")
    n_people = int(input("Number of people: "))
    n_tasks = int(input("Number of tasks: "))
    min_dur = int(input("Minimum task duration: "))
    max_dur = int(input("Maximum task duration: "))
    
    print("Define your workday hours (24h format):")
    start_hour = int(input("Workday start hour (e.g., 9): "))
    end_hour = int(input("Workday end hour (e.g., 17): "))

    print("\nEnter optional ASP constraints (empty line to finish):")
    constraints = []
    while True:
        line = input("Constraint > ").strip()
        if not line:
            break
        constraints.append(line)

    run_scheduler(
        n_people=n_people,
        n_tasks=n_tasks,
        duration_range=(min_dur, max_dur),
        start_hour=start_hour,
        end_hour=end_hour,
        constraints="\n".join(constraints)
    )
