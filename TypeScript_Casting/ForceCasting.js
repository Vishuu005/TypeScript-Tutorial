// Force casting
// To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
var x = 'Vishal';
console.log(x.length); // x is not actually a number so this will return undefined
