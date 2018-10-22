### Default RoshiBaseModal:

```js
// Default version

<RoshiBaseModal />
```

```js
// Composing an Error Modal

const RoshiErrorModal = ({ message }) => <RoshiBaseModal variant="error" message={message} />;

<RoshiErrorModal message="OMG" />
```