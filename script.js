const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if ('IntersectionObserver' in window && !reduced) {
 document.documentElement.classList.add('js');
 const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.06});
 document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
 let queued=false;
 const update=()=>{const offset=Math.min(window.scrollY,800)*.13;document.querySelectorAll('.orb').forEach((orb,i)=>orb.style.transform=`translateY(${offset*(i===2?-.5:1)}px)`);queued=false};
 window.addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(update)}},{passive:true});
}
