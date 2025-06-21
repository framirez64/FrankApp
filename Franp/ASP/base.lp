% Assume these facts come from Python input:
% task(t1). duration(t1, 3). requires(t1, 15). person(p1). etc.

% Task must start exactly once on a valid slot
1 { start(T, G, S) : valid_slot(G, S) } 1 :- task(T), requires(T, G).

% A task is active over its duration on valid slots only
active(T, G, Time) :-start(T, G, S),duration(T, D),slot(G, Time, _, _),Time >= S,Time < S + D,valid_slot(G, Time).

% (Optionally, add constraints to prevent overlapping tasks for the same person, etc.)

% Show output
#show start/3.
#show active/3.
