### Default image:

```js
<Image />
```

### Image with sizes :

```js
<Image width={200} src='https://bit.ly/2LrxeUV' />

<Image width={100} src='https://bit.ly/2LrxeUV' />
```

### Image with shadow:

```js
<Image width={200} withshadow src='https://bit.ly/2wcSWXD' />
```

### Image with shadow and border radius:

```js
<Image width={200} withshadow withradius="50%" src='https://bit.ly/2wwKsKD' />

<Image width={200} mt={10} withshadow withradius="5px" src='https://bit.ly/2wwKsKD' />
```

### Image with extra styles:

```js
<Image width={200} style={{transform: 'rotate(45deg)'}} />
```