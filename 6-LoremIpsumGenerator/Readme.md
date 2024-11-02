`Array.from` creates an array from things that look like arrays or are iterable, like strings or sets. It can also let you change each item as it’s being added to the array.

### Parameters

1. **arrayLike** (required):  
   - The thing you want to turn into an array, like a string or set.

2. **mapFunction** (optional):  
   - A function to change each item in the array as it’s being created (like `.map`).

3. **thisArg** (optional):  
   - Sets `this` for `mapFunction`, if you need a specific context.

### Examples

#### Basic Usage
```javascript
const letters = Array.from("hello"); // ["h", "e", "l", "l", "o"]
const numbers = Array.from(new Set([1, 2, 3])); // [1, 2, 3]
```

#### Using `mapFunction` to Modify Items
```javascript
const doubled = Array.from([1, 2, 3], num => num * 2); // [2, 4, 6]
```

#### Using `thisArg` with `mapFunction`
```javascript
const context = { factor: 2 };
const multiplied = Array.from([1, 2, 3], function (num) {
  return num * this.factor;
}, context); // [2, 4, 6]
```

**In short**: `Array.from` turns "array-like" items into arrays and lets you change each item during that process.