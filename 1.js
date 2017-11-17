const f = function(t, e){e.target.textContent = this+t};   
document.querySelector('button').addEventListener('click', f('Нажата первая кнопка'));  
document.querySelector('button').addEventListener('click', f('Нажата вторая кнопка'));  
document.querySelector('h1').insertAdjacentHTML('afterend', '<h4 id="author" title="GossJS">Alan Turing</h4>');
       