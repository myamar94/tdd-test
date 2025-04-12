function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;

  if (numbers.startsWith('//')) {
    const match = numbers.match(/^\/\/(.+)\n/);
    if (match) {
      delimiter = new RegExp(match[1]);
      numbers = numbers.slice(match[0].length);
    }
  }

  const numberArray = numbers
    .split(delimiter)
    .map(n => parseInt(n, 10))
    .filter(n => !isNaN(n));

  const negatives = numberArray.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
  }

  return numberArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };