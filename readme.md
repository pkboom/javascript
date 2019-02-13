## Get the selected radio button’s value

```javascript
[...document.getElementsByName("genders")].find(radio => radio.checked).value
```

## Get the checked checkboxs' values

```javascript
const page = [...document.getElementsByName('links')].filter(checkbox => checkbox.checked);
```
