# Node.js Custom Models Guide

Demonstration of loading a custom model in Node.js.

<a href="https://githubbox.com/thekevinscott/upscalerjs/tree/main/examples/nodejs">Open in CodeSandbox</a>.

## Code

If we wish to serve our models from a different point on our file system, _or_ we've brought our own custom model to use in Node.js, we can specify that easily.

:::note

We'll be using the 2x model from `esrgan-slim` for this example.

:::

We can specify the model definition with:

```javascript
const Upscaler = require('upscaler/node')
const upscaler = new Upscaler({
  model: {
    scale: 2,
    path: tf.io.fileSystem('/path/to/model.json'),
  }
})
```

For more information on the `model` option's attributes, [see the section on custom model definitions](../browser/usage/self-hosting-models#model-options).
