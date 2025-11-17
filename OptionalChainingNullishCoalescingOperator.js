const user = { name: "wahed" };

// Optional Chaining; it returns undefined
console.log(user.address?.city);

// NullishCoalescing Operator. It is some how like || short circuiting
let value = 0;
let resutl = value ?? "default value";
console.log(resutl);

console.log(user.address?.city ?? "Defaule Value");
