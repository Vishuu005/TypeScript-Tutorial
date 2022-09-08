// Force casting
// To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.


let x = 'Vishal';
console.log(((x as unknown) as number).length); // x is not actually a number so this will return undefined