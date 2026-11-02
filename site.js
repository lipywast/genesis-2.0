
document.addEventListener('DOMContentLoaded',()=>{
 const current=location.pathname.split('/').pop()||'index.html';
 document.querySelectorAll('.side-nav a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});
 const toc=document.querySelector('#toc-list');
 if(toc){document.querySelectorAll('.article-body h2').forEach((h,i)=>{if(!h.id)h.id='secao-'+(i+1);const li=document.createElement('li');const a=document.createElement('a');a.href='#'+h.id;a.textContent=h.textContent;li.appendChild(a);toc.appendChild(li)})}
 const form=document.querySelector('#quiz');
 if(form){form.addEventListener('submit',e=>{e.preventDefault();let score=0;form.querySelectorAll('.question').forEach(q=>{const chosen=q.querySelector('input:checked');const ok=chosen&&chosen.value===q.dataset.answer;const fb=q.querySelector('.feedback');if(ok){score++;fb.textContent='Correto. Você identificou o conceito.'}else{fb.textContent='Não foi dessa vez. Revise o conteúdo desta questão e tente novamente.'}});document.querySelector('#result').textContent=`Resultado: ${score} de 8 questões.`});form.addEventListener('reset',()=>{form.querySelectorAll('.feedback').forEach(x=>x.textContent='');document.querySelector('#result').textContent=''})}
});
