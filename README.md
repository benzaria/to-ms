# qms - Convert Time Strings to Milliseconds

## Overview

`qms` is a lightweight TypeScript utility that converts human-readable time strings (e.g., `"5s"`, `"2h"`) into milliseconds. It supports multiple time units, making it easy to work with time-based calculations.

## Installation

You can install `qms` via npm or yarn:

```sh
npm install qms
```

or

```sh
yarn add qms
```

## Usage

### Importing

```typescript
import qms from "qms";
```

### Converting Time Strings to Milliseconds

```typescript
console.log(qms("5s"));   // 5000 (5 seconds in ms)
console.log(qms("2m"));   // 120000 (2 minutes in ms)
console.log(qms("1h"));   // 3600000 (1 hour in ms)
console.log(qms("1d"));   // 86400000 (1 day in ms)
console.log(qms("1M"));   // 2629800000 (1 month in ms, avg 30.44 days)
console.log(qms("1y"));   // 31557600000 (1 year in ms, avg 365.25 days)
```

### Passing Numbers

If a number is passed, the function returns it as-is, but logs a warning:

```typescript
console.log(qms(5000));   // 5000 (Warning: The input was a number, no need for converting)
```

> [!NOTE] NOTE
> `qms` Does Not convert numbers back to human-readable time strings. for that use [ms](https://github.com/vercel/ms)

## Supported Time Units

| Unit  |     Description      | Example |
| :---: | :------------------: | :-----: |
| `ms`  |     Milliseconds     | `500ms` |
|  `s`  |       Seconds        |  `5s`   |
|  `m`  |       Minutes        |  `2m`   |
|  `h`  |        Hours         |  `1h`   |
|  `d`  |         Days         |  `1d`   |
|  `w`  |        Weeks         |  `1w`   |
|  `M`  | Months (≈30.44 days) |  `1M`   |
|  `y`  | Years (≈365.25 days) |  `1y`   |

## TypeScript Support

The function is fully typed for TypeScript. The input type ensures only valid time formats are allowed.

```typescript
qms("5x"); // ❌ TypeScript error - Invalid unit
```

## Error Handling

The function throws errors in the following cases:

- **Invalid Format**: If the input is not a recognized time format.
- **Incorrect Type**: If the input is neither a string nor a number.

```typescript
try {
    qms("invalid");
} catch (error) {
    console.error(error.message); // "Invalid time format, support:[ms,s,m,h,d,w,M,y]"
}
```

## License

[MIT](?tab=MIT-1-ov-file)
