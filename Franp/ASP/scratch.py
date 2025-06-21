def generate_slot_facts(granularities):
    total_minutes = 24 * 60
    lines = ["% Supported granularities", "granularity(15..60)."]

    for gran in granularities:
        n_slots = total_minutes // gran
        lines.append(f"% --- {gran}-minute slots")
        lines.append(f"slot({gran}, 1..{n_slots}).")
        for i in range(n_slots):
            h = (i * gran) // 60
            m = (i * gran) % 60
            lines.append(f'slot_time({gran}, {i+1}, "{h:02d}:{m:02d}").')
    
    return "\n".join(lines)


if __name__ == "__main__":
    with open("granular_timeslots.lp", "w") as f:
        f.write(generate_slot_facts([15, 30, 60]))
