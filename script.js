const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menu?.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(nav.classList.contains('open')))});
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));

// Use image files already committed to the repository so Vercel never depends on external hotlinked images.
const hero=document.querySelector('.hero');
const dots=[...document.querySelectorAll('.hero-dots > *')];
const images=['assets/hero-bearing.jpg','assets/product-slewing-bearing.jpg','assets/product-slew-drive.jpg','assets/product-powerattack.jpg'];
let index=0,timer;
function show(i){if(!hero)return;index=(i+images.length)%images.length;hero.style.setProperty('--hero-image',`url("${images[index]}")`);dots.forEach((d,n)=>d.classList.toggle('active',n===index))}
function restart(){clearInterval(timer);timer=setInterval(()=>show(index+1),5500)}
dots.forEach((d,i)=>{d.setAttribute('role','button');d.setAttribute('tabindex','0');d.addEventListener('click',()=>{show(i);restart()});d.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();show(i);restart()}})});
show(0);restart();

document.getElementById('quoteForm')?.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const s=encodeURIComponent(`RES Technologies Quote Enquiry — ${f.get('name')}`);const b=encodeURIComponent(`Name: ${f.get('name')}\nCompany: ${f.get('company')||'Not provided'}\nEmail: ${f.get('email')}\n\nRequirement:\n${f.get('message')}`);location.href=`mailto:ransiga@yahoo.com?subject=${s}&body=${b}`});
document.getElementById('year').textContent=new Date().getFullYear();