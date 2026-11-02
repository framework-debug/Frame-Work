const products = [
  {name:'Essential UI Kit',category:'UI Components',price:11,type:'COMPONENTS',visual:'ui',desc:'A clean starting point for crisp interfaces.'},
  {name:'Launch Blocks',category:'Code Libraries',price:22,type:'CODE LIBRARY',visual:'code',desc:'The little pieces that get a project moving.'},
  {name:'Mono Icon Set',category:'Design Resources',price:33,type:'ASSET PACK',visual:'icons',desc:'A considered set of marks for digital products.'},
  {name:'Studio Landing Kit',category:'UI Components',price:44,type:'COMPONENTS',visual:'landing',desc:'A flexible layout for your next big idea.'},
  {name:'Motion Primitives',category:'Code Libraries',price:55,type:'CODE LIBRARY',visual:'motion',desc:'Quietly useful motion, ready to make your own.'},
  {name:'Wireframe Library',category:'Design Resources',price:66,type:'FIGMA RESOURCE',visual:'wire',desc:'Move from rough idea to clear direction.'},
  {name:'Dashboard System',category:'UI Components',price:77,type:'COMPONENTS',visual:'dash',desc:'A versatile foundation for data-rich products.'},
  {name:'Type Pairing Guide',category:'Design Resources',price:88,type:'FIELD GUIDE',visual:'type',desc:'A practical guide to getting type just right.'},
  {name:'Form Field Kit',category:'UI Components',price:99,type:'COMPONENTS',visual:'form',desc:'Polished input patterns for everyday flows.'},
  {name:'API Starter',category:'Code Libraries',price:110,type:'CODE LIBRARY',visual:'api',desc:'A tidy, dependable start for your next API.'},
  {name:'Texture Studies',category:'Design Resources',price:121,type:'ASSET PACK',visual:'texture',desc:'Subtle monochrome textures for digital work.'},
  {name:'Navigation Patterns',category:'UI Components',price:132,type:'COMPONENTS',visual:'nav',desc:'Clear paths through even complex products.'},
  {name:'Data Viz Toolkit',category:'Code Libraries',price:143,type:'CODE LIBRARY',visual:'data',desc:'Make information easier to see and use.'},
  {name:'Portfolio Framework',category:'UI Components',price:154,type:'COMPONENTS',visual:'portfolio',desc:'A flexible canvas for the work you want seen.'},
  {name:'Creative Coding Notes',category:'Design Resources',price:165,type:'FIELD GUIDE',visual:'notes',desc:'Prompts and patterns for a more playful process.'},
  {name:'The Complete Bundle',category:'Code Libraries',price:176,type:'STUDIO BUNDLE',visual:'bundle',desc:'A little bit of everything for your next build.'},
  {name:'Commerce Interface Suite',category:'UI Components',price:187,type:'COMPONENTS',visual:'commerce',desc:'A full storefront system from discovery to checkout.'},
  {name:'Design Token Engine',category:'Code Libraries',price:198,type:'CODE LIBRARY',visual:'tokens',desc:'Keep color, type, and spacing in sync everywhere.'},
  {name:'Editorial Layout Collection',category:'Design Resources',price:209,type:'FIGMA RESOURCE',visual:'editorial',desc:'Expressive page structures for stories and ideas.'},
  {name:'SaaS Workspace Kit',category:'UI Components',price:220,type:'COMPONENTS',visual:'workspace',desc:'A cohesive interface system for software teams.'},
  {name:'Type Scale Generator',category:'Code Libraries',price:231,type:'CODE LIBRARY',visual:'scale',desc:'Build readable, responsive type systems in minutes.'},
  {name:'Product Illustration Set',category:'Design Resources',price:242,type:'ASSET PACK',visual:'illustration',desc:'Modular monochrome artwork for product stories.'},
  {name:'Accessibility Patterns',category:'UI Components',price:253,type:'COMPONENTS',visual:'access',desc:'Accessible interaction patterns for everyday UI.'},
  {name:'Realtime Sync Toolkit',category:'Code Libraries',price:264,type:'CODE LIBRARY',visual:'sync',desc:'Practical foundations for collaborative products.'},
  {name:'Grid & Layout Atlas',category:'Design Resources',price:275,type:'FIELD GUIDE',visual:'grid',desc:'A visual guide to stronger digital compositions.'},
  {name:'Commerce Operations Kit',category:'UI Components',price:286,type:'COMPONENTS',visual:'operations',desc:'Orders, inventory, and customer views in one system.'},
  {name:'Workflow Automation Pack',category:'Code Libraries',price:297,type:'CODE LIBRARY',visual:'workflow',desc:'Composable building blocks for repetitive work.'},
  {name:'Brand Identity Starter',category:'Design Resources',price:308,type:'FIGMA RESOURCE',visual:'identity',desc:'A flexible identity toolkit for a new venture.'},
  {name:'Analytics Console',category:'UI Components',price:319,type:'COMPONENTS',visual:'analytics',desc:'A refined command center for product signals.'},
  {name:'Search & Discovery Kit',category:'Code Libraries',price:330,type:'CODE LIBRARY',visual:'search',desc:'Make large collections feel clear and findable.'},
  {name:'Interface Texture Library',category:'Design Resources',price:341,type:'ASSET PACK',visual:'surfaces',desc:'A broad set of subtle surfaces and graphic details.'},
  {name:'Mobile App Foundations',category:'UI Components',price:352,type:'COMPONENTS',visual:'mobile',desc:'Core mobile screens and patterns for a polished start.'},
  {name:'Headless Content Toolkit',category:'Code Libraries',price:363,type:'CODE LIBRARY',visual:'content',desc:'Flexible content structures for modern publishing.'},
  {name:'The Independent Studio Pack',category:'Design Resources',price:374,type:'STUDIO BUNDLE',visual:'studio',desc:'A complete creative toolkit for independent makers.'},
  {name:'FrameWork Complete Collection',category:'UI Components',price:385,type:'COMPLETE BUNDLE',visual:'complete',desc:'The full FrameWork catalog in one considered bundle.'},
  {name:'Commerce Pro Suite',category:'UI Components',price:396,type:'COMPONENTS',visual:'commercepro',desc:'Advanced storefront patterns for growing catalogs.'},
  {name:'Interface State Machine',category:'Code Libraries',price:407,type:'CODE LIBRARY',visual:'states',desc:'Model complex interface states with confidence.'},
  {name:'Motion & Transition Atlas',category:'Design Resources',price:418,type:'FIELD GUIDE',visual:'transitions',desc:'A complete reference for movement and timing.'},
  {name:'Product Team Workspace',category:'UI Components',price:429,type:'COMPONENTS',visual:'team',desc:'A shared home for roadmaps, work, and decisions.'},
  {name:'FrameWork Studio Max',category:'Code Libraries',price:440,type:'ULTIMATE BUNDLE',visual:'max',desc:'The complete toolkit for ambitious digital work.'}
];

const productFiles = {
  'Essential UI Kit': 1297478,
  'Launch Blocks': 1997478,
  'Mono Icon Set': 4997478,
  'Studio Landing Kit': 2997478,
  'Motion Primitives': 3287478,
  'Wireframe Library': 2187478,
  'Dashboard System': 10485760,
  'Type Pairing Guide': 3187478,
  'Form Field Kit': 2267478,
  'API Starter': 1799087,
  'Texture Studies': 8799087,
  'Navigation Patterns': 6543457,
  'Data Viz Toolkit': 4443457,
  'Portfolio Framework': 3246234,
  'Creative Coding Notes': 1243534,
  'Commerce Interface Suite': 3423444,
  'Design Token Engine': 7447627,
  'Editorial Layout Collection': 5447666,
  'SaaS Workspace Kit': 3454098,
  'Type Scale Generator': 1234543
};
function fileSize(bytes){return `${(bytes/1048576).toFixed(2)} MB`}

const countNodes = document.querySelectorAll('[data-cart-count]');
function readCart(){try{return JSON.parse(localStorage.getItem('framework-cart')||'[]')}catch{return []}}
function updateCartCount(){const total=readCart().reduce((sum,item)=>sum+item.qty,0);countNodes.forEach(node=>node.textContent=total)}
updateCartCount();

const grid=document.querySelector('#product-grid');
if(grid){
  let activeFilter='all';
  let sortMode='featured';
  const artContent={
    ui:'<span class="mini-window"><i></i><i></i><i></i><b></b><b></b><b></b></span><span class="art-caption">GOOD FORM<br>FOLLOWS FUNCTION</span>',
    code:'<span class="code-stamp">{ }</span><span class="art-caption">SMALL PARTS<br>BIG POSSIBILITIES</span>',
    icons:'<span class="icon-matrix"><i>✳</i><i>◌</i><i>↗</i><i>⌘</i><i>□</i><i>＋</i></span>',
    landing:'<span class="landing-shape"><i></i><i></i><b></b></span><span class="art-caption">A PLACE TO<br>BEGIN</span>',
    motion:'<svg class="cover-vector vector-orbit" viewBox="0 0 240 240" aria-hidden="true"><circle class="vector-guide" cx="120" cy="120" r="76"/><circle class="vector-guide" cx="120" cy="120" r="48"/><circle class="vector-guide" cx="120" cy="120" r="19"/><g class="vector-satellite"><circle cx="120" cy="44" r="8" fill="currentColor"/><circle cx="120" cy="44" r="16" fill="none" stroke="currentColor" opacity=".3"/></g><path d="M120 101v38M101 120h38" class="vector-fine"/></svg><span class="art-caption">MOVE WITH<br>INTENTION</span>',
    wire:'<span class="wire-frame"><i></i><i></i><i></i><i></i><b></b></span>',
    dash:'<span class="dash-frame"><i></i><i></i><i></i><b></b><b></b></span>',
    type:'<span class="type-glyph">Ag</span><span class="art-caption">TYPE HAS<br>A POINT OF VIEW</span>',
    form:'<span class="form-frame"><i></i><i></i><b></b><b></b></span>',
    api:'<span class="api-symbol">&lt;/&gt;</span><span class="art-caption">BUILD A<br>BETTER BACK END</span>',
    texture:'<span class="texture-orb"></span><span class="art-caption">SURFACE<br>STUDIES 01</span>',
    nav:'<span class="nav-frame"><i></i><i></i><i></i><b></b></span>',
    data:'<svg class="cover-vector vector-data" viewBox="0 0 240 240" aria-hidden="true"><path class="vector-guide" d="M39 45v151h162M39 158h162M39 120h162M39 82h162"/><path class="vector-line" d="M47 171 78 145 105 154 132 105 157 113 192 65"/><g class="vector-points"><circle cx="47" cy="171" r="4"/><circle cx="78" cy="145" r="4"/><circle cx="105" cy="154" r="4"/><circle cx="132" cy="105" r="4"/><circle cx="157" cy="113" r="4"/><circle cx="192" cy="65" r="5"/></g></svg><span class="art-caption">FIND THE<br>SHAPE OF IT</span>',
    portfolio:'<span class="portfolio-frame"><b></b><i></i><i></i><i></i></span>',
    notes:'<span class="note-glyph">№<small>01</small></span><span class="art-caption">THINK. MAKE.<br>REPEAT.</span>',
    bundle:'<span class="bundle-stack"><i></i><i></i><i></i><b>FW</b></span><span class="art-caption">THE WHOLE<br>TOOLBOX</span>',
    commerce:'<span class="commerce-layout"><i></i><i></i><b></b><b></b><b></b></span><span class="art-caption">A BETTER WAY<br>TO CHECK OUT</span>',
    tokens:'<span class="token-stack"><i></i><i></i><i></i><b>●</b></span><span class="art-caption">ONE SOURCE<br>OF TRUTH</span>',
    editorial:'<span class="editorial-layout"><b>Read<br>between<br>the lines.</b><i></i><i></i></span>',
    workspace:'<span class="workspace-layout"><i></i><b></b><b></b><b></b></span><span class="art-caption">ROOM TO<br>GET THINGS DONE</span>',
    scale:'<span class="scale-type">Aa<small>01—08</small></span>',
    illustration:'<span class="illustration-shape"><i></i><b></b></span><span class="art-caption">DRAWN TO<br>WORK TOGETHER</span>',
    access:'<span class="access-symbol">◉<small>↗</small></span><span class="art-caption">CLEAR FOR<br>EVERYONE</span>',
    sync:'<svg class="cover-vector vector-sync" viewBox="0 0 240 240" aria-hidden="true"><circle class="vector-guide" cx="120" cy="120" r="72"/><path class="vector-line vector-sync-path" d="M58 121a62 62 0 0 1 104-44l11 10M182 119a62 62 0 0 1-104 44l-11-10"/><path class="vector-arrow" d="m161 69 15 19-25 1M79 171l-15-19 25-1"/><circle cx="120" cy="120" r="18" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="120" cy="120" r="5" fill="currentColor"/></svg><span class="art-caption">IN STEP<br>IN REAL TIME</span>',
    grid:'<span class="atlas-grid"><i></i><i></i><i></i><b></b></span>',
    operations:'<span class="ops-layout"><i></i><b></b><b></b><b></b></span><span class="art-caption">THE VIEW<br>FROM HERE</span>',
    workflow:'<span class="flow-layout"><i></i><i></i><i></i><b>→</b></span>',
    identity:'<span class="identity-mark">F<span>✳</span></span><span class="art-caption">MAKE IT<br>MEAN SOMETHING</span>',
    analytics:'<span class="analytics-layout"><i></i><i></i><b></b><b></b></span><span class="art-caption">SEE THE<br>WHOLE PICTURE</span>',
    search:'<span class="search-symbol"></span><span class="art-caption">FIND YOUR<br>WAY THROUGH</span>',
    surfaces:'<span class="surface-shape"><i></i><i></i></span><span class="art-caption">DETAIL MAKES<br>THE SURFACE</span>',
    mobile:'<span class="mobile-screen"><i></i><b></b><b></b><b></b></span><span class="art-caption">SMALL SCREEN<br>BIG THINKING</span>',
    content:'<span class="content-layout"><i></i><i></i><b></b><i></i></span><span class="art-caption">CONTENT IN<br>GOOD SHAPE</span>',
    studio:'<span class="studio-stack"><i></i><i></i><i></i><b>STUDIO<br>TOOLS</b></span>',
    complete:'<span class="complete-mark">FW<span>✳</span><small>40 DIGITAL GOODS</small></span>',
    commercepro:'<span class="commerce-layout pro"><i></i><i></i><b></b><b></b><b></b></span><span class="art-caption">THE NEXT<br>CHECKOUT LEVEL</span>',
    states:'<svg class="cover-vector vector-states" viewBox="0 0 240 240" aria-hidden="true"><path class="vector-guide" d="M49 120h142M120 49v142"/><circle class="state-node" cx="49" cy="120" r="15"/><circle class="state-node main-node" cx="120" cy="120" r="22"/><circle class="state-node" cx="191" cy="120" r="15"/><circle class="state-node" cx="120" cy="49" r="15"/><circle class="state-node" cx="120" cy="191" r="15"/><circle class="state-pulse" cx="120" cy="120" r="32"/></svg><span class="art-caption">EVERY STATE<br>CONSIDERED</span>',
    transitions:'<svg class="cover-vector vector-transition" viewBox="0 0 240 240" aria-hidden="true"><circle class="vector-guide" cx="120" cy="120" r="70"/><circle class="vector-guide" cx="120" cy="120" r="47"/><circle class="vector-guide" cx="120" cy="120" r="24"/><path class="vector-transition-arc" d="M120 50a70 70 0 0 1 70 70"/><path class="vector-transition-arc arc-two" d="M120 167a47 47 0 0 1-47-47"/><circle cx="120" cy="120" r="7" fill="currentColor"/></svg><span class="art-caption">A STUDY IN<br>GOOD TIMING</span>',
    team:'<span class="team-layout"><i></i><b></b><b></b><b></b><small>TEAM / 08</small></span><span class="art-caption">MAKE ROOM<br>FOR THE TEAM</span>',
    max:'<span class="max-stack"><i></i><i></i><i></i><b>FW</b><small>STUDIO MAX</small></span>'
  };
  function renderProducts(){
    let items=products.filter(p=>activeFilter==='all'||p.category===activeFilter);
    if(sortMode==='low')items.sort((a,b)=>a.price-b.price);
    if(sortMode==='high')items.sort((a,b)=>b.price-a.price);
    grid.querySelectorAll('.product-card').forEach(card=>{window.motionObserver?.unobserve(card);window.productMotionObserver?.unobserve(card)});
    grid.innerHTML=items.map(p=>{
      const index=products.indexOf(p);
      const file=productFiles[p.name];
      const attachment=file?'<span class="product-attachment">PACKAGE INCLUDED</span>':'';
      return `<article class="product-card" data-product-id="${index}"><button class="product-art product-open art-${p.visual}" data-details="${index}" aria-label="Open ${p.name} details"><span class="product-number">FW—${String(index+1).padStart(2,'0')}</span>${artContent[p.visual]}</button><div class="product-info"><div class="product-meta"><span>${p.type}</span><span>${String(index+1).padStart(2,'0')} / 40</span></div><button class="product-title" data-details="${index}">${p.name}</button><p>${p.desc}</p><div class="product-attachment-row">${attachment}</div><div class="product-buy"><span class="product-price">$${p.price}</span><button class="add-button" data-add="${index}" aria-label="Add ${p.name} to cart">ADD <span>+</span></button></div></div></article>`;
    }).join('');
    revealElements(grid.querySelectorAll('.product-card'));
    observeProductMotion(grid.querySelectorAll('.product-card'));
  }
  renderProducts();
  document.querySelectorAll('.filter-button').forEach(button=>button.addEventListener('click',()=>{document.querySelector('.filter-button.active')?.classList.remove('active');button.classList.add('active');activeFilter=button.dataset.filter;renderProducts()}));
  document.querySelector('#sort-products').addEventListener('change',event=>{sortMode=event.target.value;renderProducts()});
  const productDialog=document.querySelector('#product-dialog');
  function showToast(message){const toast=document.querySelector('#cart-toast');toast.textContent=message;toast.hidden=false;clearTimeout(window.cartToastTimer);window.cartToastTimer=setTimeout(()=>toast.hidden=true,2600)}
  function addProduct(index,button){const product=products[index];const cart=readCart();const found=cart.find(item=>item.name===product.name);if(found)found.qty++;else cart.push({name:product.name,price:product.price,qty:1});try{localStorage.setItem('framework-cart',JSON.stringify(cart))}catch{}updateCartCount();if(button){button.innerHTML='ADDED <span>✓</span>';setTimeout(()=>{button.innerHTML='ADD <span>+</span>'},900)}return product}
  function openProduct(index){const product=products[index];const file=productFiles[product.name];document.querySelector('#dialog-product-meta').textContent=`${product.type} · FRAMEWORK / ${String(index+1).padStart(2,'0')}`;document.querySelector('#dialog-product-name').textContent=product.name;document.querySelector('#dialog-product-description').textContent=product.desc;document.querySelector('#dialog-product-price').textContent=`$${product.price}`;const art=document.querySelector('#dialog-product-art');art.className=`dialog-art product-art art-${product.visual}`;art.innerHTML=`<span class="product-number">FW—${String(index+1).padStart(2,'0')}</span>${artContent[product.visual]}`;const filePanel=document.querySelector('#dialog-file');filePanel.hidden=!file;if(file)document.querySelector('#dialog-file-size').textContent=fileSize(file);document.querySelector('#buy-now').dataset.buy=index;productDialog.showModal()}
  grid.addEventListener('click',event=>{const button=event.target.closest('[data-add]');if(button){const product=addProduct(Number(button.dataset.add),button);showToast(`${product.name} added to your bag`);return}const details=event.target.closest('[data-details]');if(details)openProduct(Number(details.dataset.details))});
  document.querySelector('.dialog-close').addEventListener('click',()=>productDialog.close());
  productDialog.addEventListener('click',event=>{if(event.target===productDialog)productDialog.close()});
  document.querySelector('#buy-now').addEventListener('click',event=>{const product=addProduct(Number(event.currentTarget.dataset.buy));productDialog.close();showToast(`${product.name} added to your bag. Checkout is coming soon.`)});
}

function revealElements(elements){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const items=[...elements];
  if(!('IntersectionObserver' in window)){items.forEach(item=>item.classList.add('is-visible'));return;}
  items.forEach((item,index)=>{item.classList.add('motion-reveal');if(!item.style.getPropertyValue('--reveal-delay'))item.style.setProperty('--reveal-delay',`${Math.min(index%4,3)*65}ms`);});
  if(!window.motionObserver)window.motionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');window.motionObserver.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px -30px 0px'});
  items.forEach(item=>window.motionObserver.observe(item));
}

function observeProductMotion(elements){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const cards=[...elements];
  if(!('IntersectionObserver' in window)){cards.forEach(card=>card.classList.add('is-animated'));return;}
  if(!window.productMotionObserver)window.productMotionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('is-animated',entry.isIntersecting)),{rootMargin:'80px 0px 80px 0px'});
  cards.forEach(card=>window.productMotionObserver.observe(card));
}

if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  document.querySelectorAll('.intro,.featured,.closing-cta,.shop-note,.shop-toolbar').forEach(section=>revealElements([section]));
  document.querySelectorAll('.principles article,.feature-card').forEach((item,index)=>{item.style.setProperty('--reveal-delay',`${index*90}ms`);revealElements([item])});
}
