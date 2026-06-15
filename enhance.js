/* Compono Competitor Hub - progressive interactivity.
   Pure enhancement: if JS fails, the page still reads fine. */
(function(){
  function ready(fn){ if(document.readyState!=='loading') fn(); else document.addEventListener('DOMContentLoaded',fn); }
  ready(function(){
    // 1. Scroll reveal for every .section
    var secs = document.querySelectorAll('.section');
    secs.forEach(function(s){ s.classList.add('reveal'); });
    if('IntersectionObserver' in window){
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
      },{threshold:0.08});
      secs.forEach(function(s){ io.observe(s); });
    } else { secs.forEach(function(s){ s.classList.add('in'); }); }

    // 2. Build sticky in-page subnav from the h2 section headings
    var headings = [];
    document.querySelectorAll('.section h2, .section .battlecard h2').forEach(function(h){
      var txt = h.textContent.trim();
      if(!txt) return;
      var id = 'sec-'+txt.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
      var sec = h.closest('.section'); if(!sec) return;
      if(!sec.id) sec.id = id;
      headings.push({id:sec.id, label:txt});
    });
    if(headings.length>2){
      var nav = document.createElement('nav'); nav.className='hub-subnav';
      headings.forEach(function(h){
        var a=document.createElement('a'); a.href='#'+h.id; a.textContent=h.label;
        a.addEventListener('click',function(ev){ ev.preventDefault(); var t=document.getElementById(h.id); if(t) t.scrollIntoView({behavior:'smooth',block:'start'}); });
        nav.appendChild(a);
      });
      var header = document.querySelector('.comp-header');
      if(header && header.parentNode) header.parentNode.insertBefore(nav, header.nextSibling);
      // active state on scroll
      var links = nav.querySelectorAll('a');
      if('IntersectionObserver' in window){
        var io2 = new IntersectionObserver(function(entries){
          entries.forEach(function(e){
            if(e.isIntersecting){
              links.forEach(function(l){ l.classList.toggle('active', l.getAttribute('href')==='#'+e.target.id); });
            }
          });
        },{rootMargin:'-20% 0px -70% 0px'});
        headings.forEach(function(h){ var el=document.getElementById(h.id); if(el) io2.observe(el); });
      }
    }

    // 3. Win/loss balance bar above the wins/losses two-col
    try{
      var wins = document.querySelectorAll('.clean.wins li').length;
      var losses = document.querySelectorAll('.clean.losses li').length;
      if(wins+losses>0){
        var twoCol = document.querySelector('.two-col');
        if(twoCol){
          var bar=document.createElement('div'); bar.className='win-loss-bar';
          var wpct=Math.round(wins/(wins+losses)*100);
          bar.innerHTML='<div class="w" style="width:'+wpct+'%"></div><div class="l" style="width:'+(100-wpct)+'%"></div>';
          twoCol.parentNode.insertBefore(bar, twoCol);
        }
      }
    }catch(e){}
  });
})();
