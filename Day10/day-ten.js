function minProcessingTime(processorTime, tasks) {
  processorTime.sort((a, b) => a - b);

  tasks.sort((a, b) => b - a);

  let ans = 0;

  for (let i = 0, j = 0; j < tasks.length; i += 1, j += 4) {
    ans = Math.max(ans, processorTime[i] + tasks[j]);
  }

  return ans;
}
