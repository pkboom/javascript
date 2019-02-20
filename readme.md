## Get the selected radio button’s value

```javascript
let value = [...document.getElementsByName("genders")].find(radio => radio.checked).value
```

## Get the checked checkboxs' values

```javascript
let links = [...document.getElementsByName('links')].filter(checkbox => checkbox.checked);
```

## array tip
```javascript
const isProduction = true;

const plugins = [
    handyPlugin,
    someOtherPlugin,

    isProduction ? optimizationPlugin : null,
    isProduction ? anotherPlugin : null,

    isProduction ? null : develepmentPlugin,
].filter(Boolean);
```

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

setTimeout(logThings, 1000, 'foo', 'bar', 'baz');
// setTimeout((a, b, c)=> console.log(a, b, c), 1000, 'foo', 'bar', 'baz');
// setInterval((a, b, c)=> console.log(a, b, c), 1000, 'foo', 'bar', 'baz');
```

