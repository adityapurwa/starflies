# Starflies

![Size](https://img.shields.io/bundlephobia/min/@adityapurwa/starflies)
![Version](https://img.shields.io/npm/v/@adityapurwa/starflies)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@adityapurwa/starflies)
![License](https://img.shields.io/npm/l/@adityapurwa/starflies)

> Add starflies to a website.
 
## Why?

Because starry night is beautiful.

## Demo

<img width="1728" alt="Screenshot 2023-01-30 at 14 00 22" src="https://user-images.githubusercontent.com/6219895/215410386-4265a750-66b6-4a40-b815-6f38fcf3391c.png">


[https://thatskywish.netlify.app](https://thatskywish.netlify.app/)

## Install

```sh
$ npm install --save @adityapurwa/starflies
```

## Usage

```js
const starflies = require('@adityapurwa/starflies');

document.addEventListener('DOMContentLoaded', () => {
    starflies();
});
```

### Parameters

Call the `starflies([stars], [background])` function to attach the starflies effect to the current page.

#### stars

> The stars to be rendered.

**Default**:
```js
[
    ...generateStars(70),
    ...generateStars(100, 2, 0.1, 0.1),
    ...generateStars(400, 1, 0.1, 0.05),
]
```

> By default, it generates three layers of stars with various sizes to simulate a Parallax effect.

The array of stars that will be rendered, you can use the [#generateStars](#generatestars) function to generate the
stars.


#### background

> The background color of the canvas.

**Default**: `#1b1f33`

### API

#### generateStars

Generate stars based on the given parameters.

- `count` - The number of stars to generate.
- `minSize` - The minimum size of the stars.
- `maxSize` - The maximum size of the stars.
- `maxVelocity` - The maximum velocity of the stars.

---

#### starflies

Attach the starflies effect to the current page.

- `stars` - The stars to be rendered.
- `background` - The background color of the canvas.

## License

MIT © [Aditya Purwa](https://adityapurwa.com)
