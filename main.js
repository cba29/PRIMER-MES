// EDITA AQUÍ tu fecha y los mensajes. La fecha inicial corresponde al 20/10/2026,
// suponiendo que el primer mes se celebra el 20/11/2026.
const CONFIG = {
  nombre: 'Edith',
  autor: 'ChristianB.A',
  fechaInicio: '2026-10-20T00:00:00-05:00',
  musica: 'nuestra-cancion.m4a',
  tuCancion: 'tu-cancion.m4a',
  video: 'sucre.mp4',
  momentos: [
    { lugar:'Sucre', titulo:'Donde empezó a cambiar todo', texto:'La primera vez que viniste a Sucre jaja bonintas curvas, despertaste algo más en mí. Todavía no sabía cómo llamarlo, pero hoy sé que fue el comienzo de algo precioso.', tipo:'video', imagen:'juntos.webp' },
    { lugar:'Cangallo', titulo:'La noche en que lo comprendí que te queria en mí día a día', texto:'Aquella noche entendí que lo que sentía por ti ya no era solamente amistad. Mi corazón empezaba a mirarte de otra manera.', imagen:'cangallo.webp' },
    { lugar:'Hualla · Nuestra primera foto juntos', titulo:'Qué bonito fue estar junto a ti', texto:'De esa semana guardo algo que me encanta: una de nuestras primeras fotos juntos. Me gusta mirarla y recordar lo feliz que me sentía a tu lado. Cómo me encantas, mi amor. Son recuerdos que llevo conmigo y que siempre me sacan una sonrisa.', imagen:'juntos.webp' },
    { lugar:'Hualla', titulo:'Una visita que nunca olvidaré', texto:'Llegué hasta ese pueblito por ti, sin imaginar cuántos recuerdos bonitos me llevaría. Gracias a ti, Hualla siempre será especial para mí. Todavía recuerdo tus besos, tu aroma y tus abrazos; quisiera volver a sentirlos cerquita. Te amo, mi amor.', imagen:'hualla.webp' },
    { lugar:'La tarde del mirador', titulo:'Una tarde que guardo conmigo', texto:'Aquella tarde que salimos al mirador quedó guardada entre mis recuerdos favoritos. El paisaje era hermoso, pero tú hacías especial ese momento.', imagen:'mirador.webp' },
    { lugar:'Nuestro día · 20 de octubre', titulo:'El día en que elegimos estar juntos', texto:'Ese día tenía el corazón lleno de nervios y de ilusión. Quería decirte cuánto me importabas y preguntarte si querías compartir esta historia conmigo. Cuando me dijiste que sí, no pude ser más feliz. Desde entonces, el 20 tiene un significado precioso: es nuestro día, mi amor. Y volvería a elegirte mil veces.', imagen:'nuestro-si.webp' }
  ],
  fotos: [
    {imagen:'cangallo.webp', texto:'La noche en que mi corazón entendió lo que sentía.'},
    {imagen:'juntos.webp', texto:'Cada encuentro nos acercó un poquito más.'},
    {imagen:'hualla.webp', texto:'Los lugares también guardan nuestras historias.'},
    {imagen:'mirador.webp', texto:'Una tarde que quisiera volver a vivir.'},
    {imagen:'nuestro-si.webp', texto:'El día en que empezó nuestro nosotros.'},
    {imagen:'foto-6.webp', texto:'Tu sonrisa, uno de mis lugares favoritos.'},
    {imagen:'foto-7.webp', texto:'Momentos pequeños que se vuelven inmensos.'},
    {imagen:'foto-8.webp', texto:'Contigo, cualquier plan es especial.'},
    {imagen:'foto-9.webp', texto:'Me encanta descubrir el mundo a tu lado.'},
    {imagen:'foto-10.webp', texto:'Y seguir coleccionando recuerdos contigo.'},
    {imagen:'foto-11.webp', texto:'Cada fotografía me recuerda lo afortunado que soy.'},
    {imagen:'foto-12.webp', texto:'Ojalá tengamos miles de momentos como este.'}
  ],
  razones: [
    'Por esa sonrisa que me cambia el día.','Porque contigo puedo ser yo mismo.','Por la paz que siento cuando estamos juntos.','Por tu manera de mirar el mundo.','Porque hasta los días normales se vuelven especiales.','Por todas las conversaciones que nunca quiero terminar.','Porque me haces reír sin siquiera intentarlo.','Por aquella semana en Hualla en la que desayunábamos, almorzábamos y cenábamos juntos, y que tanto extraño.','Porque me gusta escucharte hablar de lo que amas.','Porque me encantó compartir contigo aquella última semana de tu internado.','Porque me inspiras a ser mejor persona.','Por cómo se siente caminar a tu lado.','Porque contigo el tiempo pasa demasiado rápido.','Por tu forma tan única de ser.','Porque me emociona volver a verte.','Por la confianza que estamos construyendo.','Porque me haces sentir querido.','Por las aventuras que aún nos esperan.','Porque elegirte se siente bonito y natural.','Porque eres mi enfermera favorita y admiro la dedicación que pones en lo que estudias.'
  ]
};


const c = CONFIG;
const app=document.querySelector('#app');
const heart='<span aria-hidden="true">♡</span>';
const esc=s=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
app.innerHTML=`<div class="hearts" id="hearts" aria-hidden="true"></div><div class="intro" id="intro"><div class="intro-glow"></div><div class="intro-inner"><div class="intro-small">UNA HISTORIA ESCRITA CON EL CORAZÓN</div><div class="intro-heart">♥</div><h1>¡Feliz primer mes,<br><em>mi amor!</em></h1><p>20 — Un mes de nosotros, un comienzo de para siempre.</p><button id="enter" class="btn primary">Abrir nuestra historia <span>♥</span></button><div class="intro-foot">De Christian B.A, solo para ti, Edith</div></div></div>
<header class="topbar"><a href="#inicio" class="brand">E <span>♥</span> C</a><nav><a href="#historia">Nuestra historia</a><a href="#galeria">Recuerdos</a><a href="#carta">Mi carta</a></nav><div class="music-choices" style="display:flex;align-items:center;gap:8px;flex-wrap:wrap"><button id="music" class="music" aria-label="Reproducir nuestra canción" aria-pressed="false"><span id="musicIcon">♫</span><span id="musicLabel">Nuestra canción</span></button><button id="yourMusic" class="music" aria-label="Reproducir tu canción" aria-pressed="false"><span id="yourMusicIcon">♫</span><span id="yourMusicLabel">Tu canción</span></button></div></header>
<main><section class="hero" id="inicio"><div class="hero-orbit orbit1"></div><div class="hero-orbit orbit2"></div><div class="hero-copy reveal"><div class="eyebrow">20 · NUESTRO PRIMER MES</div><div class="tiny-heart">♥</div><h2>Un mes contigo.<br><em>Mil razones para sonreír.</em></h2><p>Hay historias que llegan sin avisar y terminan convirtiéndose en lo más bonito de nuestros días. Esta es la nuestra, Edith.</p><a href="#historia" class="btn primary">Ven, quiero mostrarte algo <span>↗</span></a><div class="hero-sign">Con todo mi amor, Christian B.A ♡</div></div><div class="hero-photo reveal"><div class="hero-photo-back"></div><img src="nuestras-sombras.webp" alt="Nuestras sombras juntas aquella noche" fetchpriority="high" style="object-fit:cover;object-position:center 58%;"><span class="photo-sticker">mi lugar favorito es contigo ♡</span><span class="photo-spark spark1">✧</span><span class="photo-spark spark2">✧</span></div><div class="scroll-note">DESLIZA PARA DESCUBRIR <span>↓</span></div></section>
<section class="section story" id="historia"><div class="section-head reveal"><div class="eyebrow">CAPÍTULO 01 · EL COMIENZO</div><h2>Y sin buscarlo,<br><em>te encontré a ti.</em></h2><div class="flourish">♥</div><p>Nos conocíamos desde hacía tiempo. Cuando estabas haciendo tu internado de Enfermería en Hualla, fui a verte porque quería pasar tiempo contigo. Me quedé durante tu última semana allí. En esos días desayunábamos, almorzábamos y cenábamos juntos; compartíamos casi todo. Fue una semana preciosa que extraño mucho, y hasta regresamos juntos. Entonces todavía no imaginaba cuánto llegarías a significar para mí.</p><p>También recuerdo tu visita a Sucre, que fue antes de aquella noche en Cangallo y todos esos instantes en los que la amistad se fue convirtiendo en algo más. En apenas un mes como novios me has regalado sonrisas, ilusión y recuerdos que quiero guardar por mucho tiempo. Y aunque nuestra historia apenas comienza, ya tengo muchísimas ganas de descubrir todo lo que viene contigo.</p></div><div class="turquoise-note reveal">🩺 <strong>Un detalle turquesa para mi enfermera favorita:</strong> puse toques de color turquesa en nuestra página porque eres mi enfermera favorita. Me encanta acompañarte y verte crecer en lo que amas. ♡</div><div class="quote reveal">“Si pudiera volver al principio, volvería a elegir cada camino que me llevó hasta ti.”</div></section>
<section class="section timeline-section" id="momentos"><div class="section-head reveal"><div class="eyebrow">CAPÍTULO 02 · NUESTRO CAMINO</div><h2>Antes de ser nosotros,<br><em>ya había una historia.</em></h2><p>Hay lugares que para todos son solo lugares. Para mí, ahora tienen tu nombre.</p></div><div class="timeline">${c.momentos.map((m,i)=>`<article class="moment reveal ${i%2?'reverse':''}"><div class="moment-photo">${m.tipo==='video'?`<div class="video-wrap"><video controls playsinline preload="metadata" poster="${esc(m.imagen)}"><source src="${esc(c.video)}" type="video/mp4">Tu navegador no puede reproducir este video.</video></div>`:`<img src="${esc(m.imagen)}" loading="lazy" alt="${esc(m.lugar)}">`}<span class="moment-index">0${i+1}</span></div><div class="moment-text"><div class="eyebrow">${esc(m.lugar)}</div><h3>${esc(m.titulo)}</h3><p>${esc(m.texto)}</p><span class="moment-heart">♥ ───── ♡</span></div></article>`).join('')}</div></section>
<section class="section gallery-section" id="galeria"><div class="section-head reveal"><div class="eyebrow">CAPÍTULO 03 · INSTANTES QUE QUEDAN</div><h2>Nuestros pequeños<br><em>grandes recuerdos.</em></h2><p>Si algún día olvidamos cómo empezó todo, aquí estarán estas fotos para recordárnoslo.</p></div><div class="gallery">${c.fotos.map((f,i)=>`<button class="gallery-item reveal" data-photo="${i}" aria-label="Ampliar fotografía ${i+1}"><img src="${esc(f.imagen)}" alt="Recuerdo ${i+1}: ${esc(f.texto)}" loading="lazy"><span class="gallery-overlay"><span>♡</span><small>${esc(f.texto)}</small></span></button>`).join('')}</div><p class="gallery-note">Toca una fotografía para verla de cerca ♡</p></section>
<section class="section reasons-section" id="razones"><div class="section-head reveal"><div class="eyebrow">CAPÍTULO 04 · 20 POR EL 20</div><h2>20 razones<br><em>por las que te amo.</em></h2><p>Podría escribir muchas más, pero empecemos por estas veinte. Toca cada corazón para descubrirlas.</p></div><div class="reasons-grid">${c.razones.map((r,i)=>`<button class="reason reveal" aria-expanded="false" data-reason="${i}"><span class="reason-number">${String(i+1).padStart(2,'0')}</span><span class="reason-icon">♡</span><span class="reason-prompt">Toca para descubrir</span><span class="reason-text">${esc(r)}</span></button>`).join('')}</div><div class="reason-progress" id="reasonProgress">0 de 20 corazones descubiertos ♡</div></section>
<section class="section letter-section" id="carta"><div class="section-head reveal"><div class="eyebrow">CAPÍTULO 05 · DESDE MI CORAZÓN</div><h2>Una carta<br><em>solo para ti.</em></h2></div><div class="envelope reveal" id="envelope"><div class="envelope-icon">✉</div><div class="envelope-title">Para Edith, con todo mi cariño</div><button class="btn secondary" id="openLetter">Leer mi carta ♡</button></div><article class="letter-paper" id="letter" hidden><div class="letter-date">Nuestro primer mes · Día 20</div><h3>Mi querida Edith,</h3><p>Feliz primer mes, mi amor. Qué bonito es poder decir que estamos juntos. A veces pienso en cómo nuestra amistad fue convirtiéndose en este cariño tan especial y sonrío al recordar aquella noche en Cangallo, mi viaje para verte a Hualla y, sobre todo, el día en que me dijiste que sí.</p><p>Me encantas demasiado, Edith. Amo tu sonrisa, tu actitud, tu forma de ser y esa manera tan tuya de alegrarme los días. Adoro tus besos, tu cabello, tu piel, tu olor y tus abrazos. Todo en ti me parece bonito y único. Me haces feliz incluso con las cosas más pequeñas.</p><p>Guardo con mucho cariño aquella semana en Hualla: estar cerca de ti, compartir nuestros días y volver juntos. Extraño esos momentos, pero me ilusiona pensar en todos los que todavía nos esperan.</p><p>Quiero seguir conociéndote, cuidándonos y construyendo algo lindo, con paciencia, risas, confianza y mucho amor. Me siento afortunado de tenerte en mi vida. Eres mi enfermera favorita, y me encanta verte perseguir tus sueños.</p><p>Te amo muchísimo, mi niña. Gracias por este primer mes y por ser tú. Si pudiera volver al día en que te pedí que estuviéramos juntos, volvería a hacerlo sin pensarlo.</p><div class="letter-end">Con todo mi amor,<br><strong>Christian Barraza Antezana ♡</strong></div></article></section>
<section class="section counter-section" id="contador"><div class="section-head reveal"><div class="eyebrow">CAPÍTULO 06 · CADA SEGUNDO CONTIGO</div><h2>Desde nuestro<br><em>primer sí.</em></h2><p>El tiempo sigue corriendo, y mi ilusión por compartirlo contigo también.</p></div><div class="counter reveal"><div><strong id="days">00</strong><span>DÍAS</span></div><b>:</b><div><strong id="hours">00</strong><span>HORAS</span></div><b>:</b><div><strong id="minutes">00</strong><span>MINUTOS</span></div><b>:</b><div><strong id="seconds">00</strong><span>SEGUNDOS</span></div></div><p class="counter-since" id="since"></p><div class="counter-decoration">∞</div></section>
<section class="final-section" id="final"><div class="final-inner reveal"><div class="eyebrow">Y AHORA, UNA ÚLTIMA COSITA...</div><div class="final-heart" id="finalHeart">♥</div><h2>Esto apenas<br><em>está comenzando.</em></h2><p>Este es solo nuestro primer mes de muchos más. Te elegiría una y mil veces. Te amo, mi niña. ❤️</p><button id="surprise" class="btn light">Un último detalle para ti ♥</button><div class="surprise-text" id="surpriseText" hidden>Si la vida me regalara mil comienzos, en todos quisiera encontrarte. ♡</div><div class="final-sign">Feliz 20, Edith · Con amor, Christian B.A ♡</div></div></section></main>
<footer>Hecho con todo el corazón por Christian Barraza Antezana ♡ · Nuestro primer mes</footer><audio id="audio" preload="none" src="${esc(c.musica)}"></audio><audio id="yourAudio" preload="none" src="${esc(c.tuCancion)}"></audio><dialog id="lightbox" class="lightbox"><button id="closeLightbox" aria-label="Cerrar foto" class="lightbox-close">×</button><button id="prevPhoto" class="lightbox-nav prev" aria-label="Foto anterior">‹</button><figure><img id="lightboxImg" alt="Fotografía ampliada"><figcaption id="lightboxCaption"></figcaption></figure><button id="nextPhoto" class="lightbox-nav next" aria-label="Foto siguiente">›</button></dialog>`;
const $=s=>document.querySelector(s);
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
function burst(count=30){const layer=$('#hearts');for(let i=0;i<count;i++){const el=document.createElement('span');el.className='floating-heart';el.textContent=['♥','♡','✦'][i%3];el.style.left=Math.random()*100+'%';el.style.animationDuration=(3+Math.random()*4)+'s';el.style.animationDelay=Math.random()*.8+'s';el.style.fontSize=(12+Math.random()*25)+'px';layer.append(el);setTimeout(()=>el.remove(),8000)}}
$('#enter').onclick=()=>{$('#intro').classList.add('gone');document.body.classList.add('entered');burst(40);setTimeout(()=>$('#intro').remove(),1200)};
const audio=$('#audio');
const yourAudio=$('#yourAudio');
const musicTracks=[
  {player:audio,button:$('#music'),icon:$('#musicIcon'),label:$('#musicLabel'),name:'Nuestra canción'},
  {player:yourAudio,button:$('#yourMusic'),icon:$('#yourMusicIcon'),label:$('#yourMusicLabel'),name:'Tu canción'}
];
function refreshMusicButtons(){
  musicTracks.forEach(t=>{const playing=!t.player.paused;t.icon.textContent=playing?'❚❚':'♫';t.label.textContent=playing?'Pausar canción':t.name;t.button.setAttribute('aria-pressed',String(playing))});
}
musicTracks.forEach(t=>{
  t.button.onclick=async()=>{
    try{
      if(!t.player.paused){t.player.pause()}else{
        musicTracks.filter(other=>other!==t).forEach(other=>other.player.pause());
        await t.player.play();
      }
      refreshMusicButtons();
    }catch(e){refreshMusicButtons();t.label.textContent='No se pudo reproducir'}
  };
  t.player.addEventListener('ended',refreshMusicButtons);
  t.player.addEventListener('pause',refreshMusicButtons);
  t.player.addEventListener('play',refreshMusicButtons);
});
let current=0;const dialog=$('#lightbox');function showPhoto(i){current=(i+c.fotos.length)%c.fotos.length;$('#lightboxImg').src=c.fotos[current].imagen;$('#lightboxCaption').textContent=c.fotos[current].texto}document.querySelectorAll('[data-photo]').forEach(el=>el.onclick=()=>{showPhoto(Number(el.dataset.photo));dialog.showModal()});$('#closeLightbox').onclick=()=>dialog.close();$('#prevPhoto').onclick=()=>showPhoto(current-1);$('#nextPhoto').onclick=()=>showPhoto(current+1);dialog.onclick=e=>{if(e.target===dialog)dialog.close()};document.addEventListener('keydown',e=>{if(!dialog.open)return;if(e.key==='ArrowLeft')showPhoto(current-1);if(e.key==='ArrowRight')showPhoto(current+1)});
document.querySelectorAll('.reason').forEach(el=>el.onclick=()=>{el.classList.toggle('flipped');el.setAttribute('aria-expanded',String(el.classList.contains('flipped')));const n=document.querySelectorAll('.reason.flipped').length;$('#reasonProgress').textContent=`${n} de 20 corazones descubiertos ♡`;if(n===20)burst(35)});
$('#openLetter').onclick=()=>{$('#envelope').hidden=true;$('#letter').hidden=false;$('#letter').scrollIntoView({behavior:'smooth',block:'center'});burst(15)};
function updateCounter(){const start=new Date(c.fechaInicio);const now=new Date();const delta=Math.max(0,now-start);const seconds=Math.floor(delta/1000);$('#days').textContent=String(Math.floor(seconds/86400)).padStart(2,'0');$('#hours').textContent=String(Math.floor(seconds%86400/3600)).padStart(2,'0');$('#minutes').textContent=String(Math.floor(seconds%3600/60)).padStart(2,'0');$('#seconds').textContent=String(seconds%60).padStart(2,'0');$('#since').textContent='Desde el '+new Intl.DateTimeFormat('es-PE',{day:'numeric',month:'long',year:'numeric',timeZone:'America/Lima'}).format(start)}updateCounter();setInterval(updateCounter,1000);
$('#surprise').onclick=()=>{$('#surpriseText').hidden=false;$('#surprise').textContent='Te amo, Edith ♥';burst(85)};
const endObs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){burst(24);endObs.disconnect()}}),{threshold:.45});endObs.observe($('#final'));

// Detalles turquesa y estetoscopio: estilos adicionales sin cambiar el CSS original.
const turquoiseStyle=document.createElement('style');
turquoiseStyle.textContent=`
:root { --edith-turquesa: #21a9a6; --edith-turquesa-claro: #e5f8f5; }
.turquoise-note { border: 1.5px solid #6bcfca !important; background: linear-gradient(120deg,#e6faf7,#fff9f6) !important; box-shadow: 0 12px 35px rgba(33,169,166,.13); }
.turquoise-note strong { color: #117f7c; }
.story .flourish, .counter-decoration { color: #21a9a6 !important; }
.moment:nth-child(even) .moment-heart, .moment:nth-child(even) .eyebrow { color: #159b98 !important; }
.letter-paper { border-top: 4px solid #50c6c0 !important; }
.nurse-detail { display:flex; align-items:center; justify-content:center; gap:12px; color:#138e8b; font-weight:600; font-size:clamp(13px,2.5vw,17px); margin:22px auto 0; text-align:center; }
.nurse-detail svg { width:38px; height:38px; flex:none; stroke:#1ca5a1; fill:none; stroke-width:1.8; stroke-linecap:round; stroke-linejoin:round; }
.music-choices button:last-child { border-color:#5fcac4 !important; box-shadow:0 3px 16px rgba(33,169,166,.15); }
@media(max-width:640px){.nurse-detail {padding:0 16px}.nurse-detail svg{width:30px;height:30px}}
`;document.head.appendChild(turquoiseStyle);
const nurseNote=document.createElement('div');
nurseNote.className='nurse-detail';
nurseNote.innerHTML=`<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M12 6v16a10 10 0 0 0 20 0V6M8 6h8M28 6h8M22 32v3a9 9 0 0 0 18 0v-7"/><circle cx="40" cy="24" r="4"/></svg><span>Para mi enfermera favorita, con todo mi amor ♡</span>`;
const turquoiseNote=document.querySelector('.turquoise-note');
if(turquoiseNote)turquoiseNote.insertAdjacentElement('afterend',nurseNote);
