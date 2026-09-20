const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
menu?.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(nav.classList.contains('open')))});
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));

const RES_EMAIL='sales@restech.in';
const TEST_EMAIL='aaronsamuel0205@gmail.com';
const RES_LOGO='assets/res-logo-clean.svg'

document.querySelectorAll('.brand-lockup,.footer-brand img').forEach(img=>{img.src=RES_LOGO;img.alt='RES Technologies'});
let favicon=document.querySelector('link[rel~="icon"]');
if(!favicon){favicon=document.createElement('link');favicon.rel='icon';document.head.appendChild(favicon)}
favicon.type='image/webp';favicon.href=RES_LOGO;
document.querySelectorAll('a[href^="mailto:"]').forEach(a=>{a.href=`mailto:${RES_EMAIL}`;if(a.textContent.includes('@'))a.textContent=RES_EMAIL});

document.getElementById('year')&&(document.getElementById('year').textContent=new Date().getFullYear());
document.querySelector('.powerattack-card img')?.setAttribute('src','assets/powerattack-accurate.svg');

const quoteForm=document.getElementById('quoteForm');
if(quoteForm){
 const note=quoteForm.querySelector('.form-note');if(note)note.textContent='Submit your enquiry and our team will receive it directly.';
 const button=quoteForm.querySelector('button[type="submit"]');
 let status=quoteForm.querySelector('.form-status');if(!status){status=document.createElement('p');status.className='form-status';status.setAttribute('aria-live','polite');quoteForm.appendChild(status)}
 quoteForm.addEventListener('submit',async e=>{
  e.preventDefault();const original=button?.textContent||'REQUEST A QUOTE';if(button){button.disabled=true;button.textContent='SENDING...'}status.textContent='';
  const data=new FormData(quoteForm);data.append('_subject','New RES Technologies website enquiry');data.append('_template','table');data.append('_cc',TEST_EMAIL);data.append('_captcha','false');
  try{const r=await fetch(`https://formsubmit.co/ajax/${RES_EMAIL}`,{method:'POST',headers:{Accept:'application/json'},body:data});if(!r.ok)throw new Error('Submission failed');quoteForm.reset();status.textContent='Thank you! Your enquiry has been sent successfully.';status.style.color='#17803d'}catch(err){status.textContent='Sorry, we could not send your enquiry. Please email us directly at '+RES_EMAIL+'.';status.style.color='#c0392b'}finally{if(button){button.disabled=false;button.textContent=original}}
 });
}

// Production UX: scroll reveals + keyboard-safe mobile navigation
const revealTargets=document.querySelectorAll('section:not(.signal-strip), .product-card, .brand-card, .industry-grid>div, .quote-form');
revealTargets.forEach((el,index)=>{el.classList.add('reveal');el.style.transitionDelay=Math.min(index*35,280)+'ms'});
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});revealTargets.forEach(el=>observer.observe(el))}else{revealTargets.forEach(el=>el.classList.add('is-visible'))}
menu?.addEventListener('keydown',e=>{if(e.key==='Escape'){nav?.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus()}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav?.classList.contains('open')){nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}});
