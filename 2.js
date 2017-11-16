const f = function(t, e){e.target.textContent = this+t};   
document.querySelector('button').addEventListener('click', f.bind('Нажата', 'первая кнопка', this));  
document.querySelector('button:nth-child(2)').addEventListener('click', f.bind('Нажата', 'вторая кнопка', this));  
document.querySelector('h1').insertAdjacentHTML('afterend', '<h4 id="author" title="GossJS">Skorobogatov Kirill & Sofia Kunitsyna</h4>');