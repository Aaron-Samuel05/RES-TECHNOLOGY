const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menu?.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(nav.classList.contains('open')))});
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));

document.getElementById('quoteForm')?.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const s=encodeURIComponent(`RES Technologies Quote Enquiry — ${f.get('name')}`);const b=encodeURIComponent(`Name: ${f.get('name')}\nCompany: ${f.get('company')||'Not provided'}\nEmail: ${f.get('email')}\n\nRequirement:\n${f.get('message')}`);location.href=`mailto:ransiga@yahoo.com?subject=${s}&body=${b}`});
document.getElementById('year').textContent=new Date().getFullYear();