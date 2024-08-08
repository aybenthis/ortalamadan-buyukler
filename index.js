function aboveAverage(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  let avg = total / numbers.length;

  let countAboveAvg = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > avg) {
      countAboveAvg++;
    }
  }
  return countAboveAvg;
}
