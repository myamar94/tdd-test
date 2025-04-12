function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;

  const numberArray = numbers
    .split(delimiter)
    .map(n => parseInt(n, 10))
    .filter(n => !isNaN(n));

  return numberArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };