import{a as b,i as m,S as $}from"./assets/vendor-u8rapaCG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const y=(s,r)=>b.get("https://pixabay.com/api/",{params:{key:"46086824-2983fdd94aba44351510a0e76",q:s,orientation:"horizontal",safesearch:!0,page:r,per_page:"15"}}),g=s=>s.map(({webformatURL:u,largeImageURL:a,tags:e,likes:t,views:o,comments:L,downloads:S})=>`<li class="search-list-item">
                    <a class="gallery-link" href="${a}">
                    <img class="search-list-img" src="${u}" alt="${e}" />
                    </a>
                    <ul>
                    <li>
                        <h3>Likes</h3>
                        <p>${t}</p>
                    </li>
                    <li>
                        <h3>Views</h3>
                        <p>${o}</p>
                    </li>
                    <li>
                        <h3>Comments</h3>
                        <p>${L}</p>
                    </li>
                    <li>
                        <h3>Downloads</h3>
                        <p>${S}</p>
                    </li>
                    </ul>
                </li>`).join(""),d=document.querySelector(".js-search-form"),l=document.querySelector(".js-search-list"),h=document.querySelector(".js-loader"),p=document.querySelector(".js-loader-more"),i=document.querySelector(".js-search-more");let n=1,f=1,c="";d.addEventListener("submit",async s=>{if(s.preventDefault(),c=d.elements.enterForSearsh.value.trim(),!!c){i.classList.contains("is-active")&&i.classList.remove("is-active"),l.innerHTML="",h.classList.add("is-active"),n=1;try{const{data:r}=await y(c,n);if(!r.total){h.classList.remove("is-active"),m.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),d.reset();return}l.innerHTML=`${g(r.hits)}`,h.classList.remove("is-active"),i.classList.add("is-active"),r.totalHits<15&&(i.classList.remove("is-active"),m.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),v.refresh()}catch(r){console.log(r)}}});i.addEventListener("click",async()=>{p.classList.add("is-active-more"),i.classList.remove("is-active");try{const{data:s}=await y(c,++n);l.insertAdjacentHTML("beforeend",`${g(s.hits)}`),p.classList.remove("is-active-more"),i.classList.add("is-active"),v.refresh(),window.scrollBy({top:l.firstChild.getBoundingClientRect().height*2,behavior:"smooth"}),f=Math.ceil(s.totalHits/15),f===n&&(i.classList.remove("is-active"),m.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch(s){console.log(s)}});const v=new $(".gallery-link",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map
