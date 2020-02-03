# Targeting elements with jQuery

There are 3 ways to target HTML elements using jQuery:

1. Type

```javascript
$(document).ready(function() {
    $('button').addClass('animated bounce'); // type selector
  });
```

2. addClass

```javascript
$(document).ready(function() {
    $('.button-class').addClass('animated bounce'); // class selector
  });
```
3. ID
```javascript
$(document).ready(function() {
    $('#button-id').addClass('animated bounce'); // id selector
  });
```