
document.documentElement.classList.add("js");
(function(){
  var h=document.querySelector(".hdr");
  function onScroll(){var y=window.scrollY;if(h)h.classList.toggle("solid",y>40||document.body.classList.contains("menu-open"));}
  window.addEventListener("scroll",onScroll,{passive:true});onScroll();
  var m=document.querySelector(".mnav"),btn=document.querySelector(".menu-btn");
  function setMenu(open){document.body.classList.toggle("menu-open",open);btn.setAttribute("aria-expanded",String(open));btn.setAttribute("aria-label",open?"Close menu":"Open menu");m.setAttribute("aria-hidden",String(!open));onScroll();if(open){var a=m.querySelector("a");if(a)a.focus({preventScroll:true});}}
  if(m&&btn){btn.addEventListener("click",function(){setMenu(!document.body.classList.contains("menu-open"));});
    document.addEventListener("keydown",function(e){if(e.key==="Escape"&&document.body.classList.contains("menu-open")){setMenu(false);btn.focus();}});
    m.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){setMenu(false);});});
    var sc=document.querySelector(".mscrim");if(sc)sc.addEventListener("click",function(){setMenu(false);});}
  document.querySelectorAll(".idx").forEach(function(ix){ix.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;var row=b.parentElement,open=!row.classList.contains("open");row.classList.toggle("open",open);b.setAttribute("aria-expanded",String(open));});});
  var els=document.querySelectorAll(".rv");
  if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}});},{rootMargin:"0px 0px -8% 0px"});els.forEach(function(el){io.observe(el);});}
  else els.forEach(function(el){el.classList.add("in");});
  document.querySelectorAll("form[data-draft]").forEach(function(f){f.addEventListener("submit",function(e){e.preventDefault();if(f.querySelector(".hp input")&&f.querySelector(".hp input").value)return;var n=f.querySelector(".note");if(n)n.hidden=false;});});
})();
