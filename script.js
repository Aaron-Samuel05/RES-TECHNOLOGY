const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
menu?.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(nav.classList.contains('open')))});
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));

const RES_EMAIL='sales@restech.in';
const TEST_EMAIL='aaronsamuel0205@gmail.com';
const RES_LOGO='data:image/webp;base64,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';

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