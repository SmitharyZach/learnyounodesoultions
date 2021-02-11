let arguments = process.argv;

var sum = 0;

for (let i = 2; i < arguments.length; i++) {
  const element = parseInt(arguments[i]);
  sum += element;
}

console.log(sum);
