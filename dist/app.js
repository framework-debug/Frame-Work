const BUY_ME_A_COFFEE_URL = 'https://www.buymeacoffee.com/Godsmessage111';
const count = document.querySelector('#count');
const monthly = document.querySelector('#monthly');
const donate = document.querySelector('.donate');
const menu = document.querySelector('#menu');
const more = document.querySelector('#more');
const dialog = document.querySelector('#notice');
function updateAmount() {
  const n = Number(count.value);
  document.querySelectorAll('[data-count]').forEach(button => {
    const selected = Number(button.dataset.count) === n;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  donate.textContent = '✝️ Sow Your Seed For Soulmate';
}
document.querySelectorAll('[data-count]').forEach(button => button.addEventListener('click', () => {count.value = button.dataset.count; updateAmount();}));
count.addEventListener('input', updateAmount);
monthly.addEventListener('change', updateAmount);
function notice(title, text) {document.querySelector('#notice-title').textContent = title; document.querySelector('#notice-text').textContent = text; dialog.showModal();}
document.querySelector('#seed-help').addEventListener('click', () => notice('A little seed of support', 'Each seed is a $10 tip to support my social media work. Choose a number of seeds and leave a message with your support.'));
document.querySelector('#tip-form').addEventListener('submit', event => {event.preventDefault(); if(BUY_ME_A_COFFEE_URL){location.assign(BUY_ME_A_COFFEE_URL);return;}notice('Buy Me a Coffee is coming soon', 'The support link is not connected yet. No payment has been taken, and your message has not been sent.');});
document.querySelectorAll('.close,.dialog-ok').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => {if(event.target === dialog && (event.clientX < dialog.getBoundingClientRect().left || event.clientX > dialog.getBoundingClientRect().right || event.clientY < dialog.getBoundingClientRect().top || event.clientY > dialog.getBoundingClientRect().bottom)) dialog.close();});
function closeMenu(){menu.hidden = true; more.setAttribute('aria-expanded','false');}
more.addEventListener('click', () => {menu.hidden = !menu.hidden; more.setAttribute('aria-expanded', String(!menu.hidden));});
document.addEventListener('click', event => {if (!event.target.closest('.menu-wrap')) closeMenu();});
document.addEventListener('keydown', event => {if(event.key === 'Escape') closeMenu();});
async function copyLink(){closeMenu(); try{await navigator.clipboard.writeText(location.href); const toast = document.querySelector('#toast'); toast.textContent = 'Page link copied'; toast.hidden = false; setTimeout(()=>toast.hidden = true,2500);}catch{notice('Share this page',location.href);}}
document.querySelector('#copy').addEventListener('click',copyLink);
document.querySelector('#share').addEventListener('click',async()=>{closeMenu();if(navigator.share){try{await navigator.share({title:document.title,url:location.href});}catch(error){if(error.name !== 'AbortError') copyLink();}}else copyLink();});
updateAmount();
const embed = document.querySelector('#bmc-embed');
donate.after(embed);
if(embed.querySelector('a')) donate.hidden = true;
document.querySelector('.payment-note').textContent = BUY_ME_A_COFFEE_URL ? 'Choose your final amount and add your message on Buy Me a Coffee.' : 'Buy Me a Coffee link coming soon.';
if(document.modelContext?.registerTool){try{Promise.resolve(document.modelContext.registerTool({name:'configure_tip',description:'Set the seed quantity and monthly option in the tip form. Does not send a payment.',inputSchema:{type:'object',properties:{seeds:{type:'integer',minimum:1,maximum:100},monthly:{type:'boolean'}},required:['seeds','monthly'],additionalProperties:false},execute(input){if(!Number.isInteger(input.seeds)||input.seeds<1||input.seeds>100||typeof input.monthly!=='boolean')throw new Error('Invalid tip options');count.value=String(input.seeds);monthly.checked=input.monthly;updateAmount();return {seeds:input.seeds,amount:input.seeds*10,currency:'USD',monthly:input.monthly,paymentAvailable:false};}})).catch(()=>{});}catch{}}
