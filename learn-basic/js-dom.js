
获取DOM对象
var app = document.getElementById('app');
var app = document.getElementsByName('app');
var app = document.getElementsByClassName('app')
var app = document.getElementsByTagName('span')


添加事件
app.addEventListener('click', function(){
}, false)
第三个参数 useCapture ,如果为true的话，事件在捕获阶段执行，否则在冒泡阶段执行
默认为false







