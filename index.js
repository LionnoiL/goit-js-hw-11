import{a as d,S as u,i as g}from"./assets/vendor-BGqwtSVv.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const t of l)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(l){const t={};return l.integrity&&(t.integrity=l.integrity),l.referrerPolicy&&(t.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?t.credentials="include":l.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(l){if(l.ep)return;l.ep=!0;const t=a(l);fetch(l.href,t)}})();const y=r=>d.get("https://pixabay.com/api/",{params:{key:"56531539-5e3b24e94e26e4155d21285b1",q:r,per_page:9,safesearch:!0,orientation:"horizontal",image_type:"photo"}}).then(e=>e.data),i=document.querySelector(".gallery"),c=document.querySelector(".loader-wraper"),f=new u(".gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:250});function p(r){i.innerHTML=r.map(e=>`<li class="gallery-item">
            <a href="${e.largeImageURL}">
                <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
            </a>
            <div class="gallery-item-legend">
              <div class="gallery-legend-values-block">
                <h2 class="gallery-legend-block-title">Likes</h2>
                <p class="gallery-legend-block-value">${e.likes}</p>
              </div>
              <div class="gallery-legend-values-block">
                <h2 class="gallery-legend-block-title">Views</h2>
                <p class="gallery-legend-block-value">${e.views}</p>
              </div>
              <div class="gallery-legend-values-block">
                <h2 class="gallery-legend-block-title">Comments</h2>
                <p class="gallery-legend-block-value">${e.comments}</p>
              </div>
              <div class="gallery-legend-values-block">
                <h2 class="gallery-legend-block-title">Downloads</h2>
                <p class="gallery-legend-block-value">${e.downloads}</p>
              </div>
            </div>
        </li>`).join(""),f.refresh()}function m(){i.innerHTML=""}function h(){c.classList.add("active")}function v(){c.classList.remove("active")}const b=document.querySelector(".form");b.addEventListener("submit",r=>{r.preventDefault(),L(r.currentTarget.elements["search-text"].value.trim())});const L=r=>{if(m(),!r){o("Please enter a valid query.");return}h(),y(r).then(e=>{const a=e.hits;if(a.length===0){o("Sorry, there are no images matching your search query. Please try again!");return}else p(a)}).catch(e=>{console.error(e),o("Error while executing request")}).finally(v)};function o(r){g.error({message:r,position:"topRight",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",animateInside:!1})}
//# sourceMappingURL=index.js.map
