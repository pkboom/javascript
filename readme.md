## outline everything

```javascript
* {
    outline: 1px solid red !important;
}
```

## setTimeout

```javascript
function logThings(a, b, c) {
  console.log(a, b, c);
}

setTimeout(logThings, 1000, "foo", "bar", "baz");
// setTimeout((a, b, c)=> console.log(a, b, c), 1000, 'foo', 'bar', 'baz');
// setInterval((a, b, c)=> console.log(a, b, c), 1000, 'foo', 'bar', 'baz');
```
