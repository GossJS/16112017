const f = function(t, e){e.target.textContent = this+t};   /* обратите внимание на порядок и семантику аргументов! */; 
       // измените 2 следующие строки так, чтобы надписи на кнопках менялись при щелчке так, как на гифке ниже 
       document.querySelector('button').addEventListener('click', f('Нажата первая кнопка'));  
       document.querySelector('button').addEventListener('click', f('Нажата вторая кнопка'));  
       document.querySelector('h1').insertAdjacentHTML('afterend', '<h4 id="author" title="GossJS">Alan Turing</h4>');
       // измените предыдущую строку, поставив своё имя и фамилию вместо Alan Turing и уберите обе строки с комментариями
