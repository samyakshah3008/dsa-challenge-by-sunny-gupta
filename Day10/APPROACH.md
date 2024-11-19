## Day 10 Question:

https://leetcode.com/problems/minimum-processing-time/description/

### My approach:

1. Sort the Processors: Sort processorTime in ascending order to use the earliest available processors first.
2. Sort the Tasks: Sort tasks in descending order to assign the largest tasks first, minimizing the overall completion time.
3. Greedy Algo:

- Assign 4 tasks to each processor, starting with the largest task.
- Compute the completion time for each processor as processorTime[i] + tasks[j].
- Track the maximum completion time across all processors.
- Return Result: The maximum completion time is the total time required to finish all tasks.
