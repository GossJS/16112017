       const f = function(t, e){e.target.textContent = this+t};   
       document.querySelector('button:first-child').addEventListener('click', f.bind('Нажата', ' первая кнопка'));  
       document.querySelector('button:last-child').addEventListener('click', f.bind('Нажата', ' вторая кнопка'));  
       document.querySelector('h1').insertAdjacentHTML('afterend', '<h4 id="author" title="GossJS">Maria Shibaeva</h4>');
