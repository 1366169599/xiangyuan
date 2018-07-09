jQuery是原生js操作DOM的一次封装，使操作更方便
常用的api：

jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.

jQuery是一个快速 轻量 功能丰富的JavaScript库。
通过更好用的API使比如html文档的遍历、操作、事件处理、动画、和Ajax更简单
支持众多的浏览器。
多功能性和可扩展性。
DOM Traversal and Manipulation: 

```javascript
    $( "button.continue" ).html( "Next Step..." )
```
Event Handling:
```javascript
var hiddenBox = $( "#banner-message" );
$( "#button-container button" ).on( "click", function( event ) {
  hiddenBox.show();
});
```
Ajax:
```javascript
$.ajax({
  url: "/api/getWeather",
  data: {
    zipcode: 97201
  },
  success: function( result ) {
    $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
  }
});
```

[jquery api](https://api.jquery.com/)

