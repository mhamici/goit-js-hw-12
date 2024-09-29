import{a as S,i as a,S as w}from"./assets/vendor-u8rapaCG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function m(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=m(e);fetch(e.href,t)}})();const g=(s,r)=>S.get("https://pixabay.com/api/",{params:{key:"46086824-2983fdd94aba44351510a0e76",q:s,orientation:"horizontal",safesearch:!0,page:r,per_page:"15"}}),y=s=>s.map(({webformatURL:m,largeImageURL:c,tags:e,likes:t,views:o,comments:L,downloads:b})=>`<li class="search-list-item">
                    <a class="gallery-link" href="${c}">
                    <img class="search-list-img" src="${m}" alt="${e}" />
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
                        <p>${b}</p>
                    </li>
                    </ul>
                </li>`).join(""),h=document.querySelector(".js-search-form"),u=document.querySelector(".js-search-list"),n=document.querySelector(".js-loader"),p=document.querySelector(".js-loader-more"),i=document.querySelector(".js-search-more");let d=1,f=1,l="";h.addEventListener("submit",async s=>{if(s.preventDefault(),l=h.elements.enterForSearsh.value.trim(),!!l){i.classList.contains("is-active")&&i.classList.remove("is-active"),u.innerHTML="",n.classList.add("is-active"),d=1;try{const{data:r}=await g(l,d);if(!r.total){n.classList.remove("is-active"),a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),h.reset();return}u.innerHTML=`${y(r.hits)}`,n.classList.remove("is-active"),i.classList.add("is-active"),r.totalHits<15&&(i.classList.remove("is-active"),a.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),v.refresh()}catch{n.classList.remove("is-active"),a.error({position:"topRight",message:"An error occurred while fetching data. Please try again later."})}}});i.addEventListener("click",async()=>{p.classList.add("is-active-more"),i.classList.remove("is-active");try{const{data:s}=await g(l,++d);u.insertAdjacentHTML("beforeend",`${y(s.hits)}`),p.classList.remove("is-active-more"),i.classList.add("is-active"),v.refresh(),window.scrollBy({top:u.firstChild.getBoundingClientRect().height*2,behavior:"smooth"}),f=Math.ceil(s.totalHits/15),f===d&&(i.classList.remove("is-active"),a.info({position:"bottomCenter",message:"We're sorry, but you've reached the end of search results."}))}catch{p.classList.remove("is-active-more"),a.error({position:"topRight",message:"An error occurred while fetching more data. Please try again later."})}});const v=new w(".gallery-link",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map
