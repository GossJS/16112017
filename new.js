<!DOCTYPE html>
<html><head> <title>Bind 2</title> <meta charset="utf-8"> <link rel="stylesheet" href="/css/board0"></head>
 <body><h1>Bind в листенерах</h1>
    <pre>Т.к. нельзя передать аргумент функции-обработчику события (получится вызов, а не ссылка), 
     его <i>привязывают </i>  и bind возвращает новую функцию</pre><div id="lb"><button>Нажми меня!</button><button>Нажми меня!</button></div>  
   
    <script>{
  
       const f = function(t, e){e.target.textContent = this+t}; 
  document.querySelector('button:first-child').addEventListener('click', f.bind('Нажата первая кнопка', ''));  
  document.querySelector('button:last-child').addEventListener('click', f.bind('Нажата вторая кнопка', ''));  
       document.querySelector('h1').insertAdjacentHTML('afterend', '<h4 id="author" title="GossJS">Egor Almikeew</h4>');
  
    }</script> 
   
 
   <hr><br><img src="/buttonsbind.gif" width="200" />

   </body></html>
