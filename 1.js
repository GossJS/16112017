const f = function(t, e){e.target.textContent = this+t};   
document.querySelector('button').addEventListener('click', f('������ ������ ������'));  
document.querySelector('button').addEventListener('click', f('������ ������ ������'));  
document.querySelector('h1').insertAdjacentHTML('afterend', '<h4 id="author" title="GossJS">Alan Turing</h4>');
       