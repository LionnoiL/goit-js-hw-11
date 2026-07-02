import{a as u,S as g,i as f}from"./assets/vendor-BGqwtSVv.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y=r=>u.get("https://pixabay.com/api/",{params:{key:"56531539-5e3b24e94e26e4155d21285b1",q:r,per_page:9,safesearch:!0,orientation:"horizontal"}}),c=document.querySelector(".gallery"),d=document.querySelector(".loader-wraper"),m=new g(".gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:250});function p(r){c.innerHTML=r.map(l=>`<li class="gallery-item">
            <a href="${l.largeImageURL}">
                <img class="gallery-image" src="${l.webformatURL}" alt="${l.name}">
            </a>
            <div class="gallery-item-legend">
              <div class="gallery-legend-values-block">
                <h2 class="gallery-legend-block-title">Likes</h2>
                <p class="gallery-legend-block-value">${l.likes}</p>
              </div>
              <div class="gallery-legend-values-block">
                <h2 class="gallery-legend-block-title">Views</h2>
                <p class="gallery-legend-block-value">${l.views}</p>
              </div>
              <div class="gallery-legend-values-block">
                <h2 class="gallery-legend-block-title">Comments</h2>
                <p class="gallery-legend-block-value">${l.comments}</p>
              </div>
              <div class="gallery-legend-values-block">
                <h2 class="gallery-legend-block-title">Downloads</h2>
                <p class="gallery-legend-block-value">${l.downloads}</p>
              </div>
            </div>
        </li>`).join(""),m.refresh()}function h(){c.innerHTML=""}function v(){d.classList.add("active")}function i(){d.classList.remove("active")}const b=document.querySelector(".form");b.addEventListener("submit",r=>{r.preventDefault(),L(r.currentTarget.elements["search-text"].value.trim())});const L=r=>{if(h(),!r){o("Please enter a valid query.");return}v(),y(r).then(l=>{i();const a=l.data.hits;if(a.length===0){o("Sorry, there are no images matching your search query. Please try again!");return}else p(a)}).catch(l=>{i(),o("Error while executing request")})};function o(r){f.error({message:r,position:"topRight",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",animateInside:!1})}
//# sourceMappingURL=index.js.map
