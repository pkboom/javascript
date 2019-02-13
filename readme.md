## Get the selected radio button’s value

```javascript
let value = [...document.getElementsByName("genders")].find(radio => radio.checked).value
```

## Get the checked checkboxs' values

```javascript
let links = [...document.getElementsByName('links')].filter(checkbox => checkbox.checked);
```
