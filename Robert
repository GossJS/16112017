<!DOCTYPE html>
<html><head> <title>Bind 2</title> <meta charset="utf-8"> <link rel="stylesheet" href="/css/board0"></head>
 <body><h1>Bind в листенерах</h1>
    <pre>Т.к. нельзя передать аргумент функции-обработчику события (получится вызов, а не ссылка), 
     его <i>привязывают </i>  и bind возвращает новую функцию</pre><div id="lb"><button>Нажми меня!</button><button>Нажми меня!</button></div>  
   
    <script>{
  
       const f = function(t, e){e.target.textContent = this+t};   /* обратите внимание на порядок и семантику аргументов! */; 
       // измените 2 следующие строки так, чтобы надписи на кнопках менялись при щелчке так, как на гифке ниже 
       document.querySelector('button').addEventListener('click', f('Нажата первая кнопка'));  
       document.querySelector('button').addEventListener('click', f('Нажата вторая кнопка'));  
       document.querySelector('h1').insertAdjacentHTML('afterend', '<h4 id="author" title="GossJS">Alan Turing</h4>');
       // измените предыдущую строку, поставив своё имя и фамилию вместо Alan Turing и уберите обе строки с комментариями
  
    }</script> 
   
 
   <hr><br><img src="/buttonsbind.gif" width="200" />

   </body></html>
