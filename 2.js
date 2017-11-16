const f = function(t, e){e.target.textContent = this+t};   /* обратите внимание на порядок и семантику аргументов! */; 
document.querySelector('div').firstChild .addEventListener('click', f.bind('Нажата', ' первая кнопка'));  
document.querySelector('div').lastChild.addEventListener('click', f.bind('Нажата', ' вторая кнопка'));  
document.querySelector('h1').insertAdjacentHTML('afterend', '<h4 id="author" title="GossJS">PeterS</h4>');
