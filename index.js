var m=e=>{throw TypeError(e)};var g=(e,t,s)=>t.has(e)||m("Cannot "+s);var a=(e,t,s)=>(g(e,t,"read from private field"),s?s.call(e):t.get(e)),h=(e,t,s)=>t.has(e)?m("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),f=(e,t,s,o)=>(g(e,t,"write to private field"),o?o.call(e,s):t.set(e,s),s);import{a as b,S as w,i as y}from"./assets/vendor-NgjAvfGz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();class S{constructor(){this.gallery=document.querySelector(".gallery")}changeResolution(t){return t.slice(0,-7)+"180.jpg"}renderItems(t){const s=t.data.hits.map(o=>`<li>
        <div clas="img-box">
          <a class="gallery-link" href="${o.largeImageURL}">
            <img
              class="gallery-image"
              src="${this.changeResolution(o.webformatURL)}"
              data-source="${o.largeImageURL}"
              alt="${o.tags}"
            />
          </a>
        </div>
        <ul class="content-box">
          <li class="content-item">
            <div class="content-header">Likes</div>
            <div class="content">${o.likes}</div>
          </li>
          <li class="content-item">
           <div class="content-header">Views</div>
            <div class="content">${o.views}</div>
          </li>
          <li class="content-item">
            <div class="content-header">Comments</div>
            <div class="content">${o.comments}</div>
          </li>
          <li class="content-item">
            <div class="content-header">Downloads</div>
            <div class="content">${o.downloads}</div>
          </li>
        </ul>
      </li>
      `).join("");this.clearGalery(),this.gallery.insertAdjacentHTML("beforeend",s)}clearGalery(){this.gallery.innerHTML=""}loader(){const t='<div class="content-header">Loading images, please wait... <br/><span class="loader"></span></div>';this.clearGalery(),this.gallery.insertAdjacentHTML("beforeend",t)}}var i,l;class x{constructor(){h(this,i);h(this,l);f(this,i,{params:{_method:"get",key:"49061032-8122651df51dcd062279bc436",q:"",orientation:"horizontal",page:1,safesearch:!0,image_type:"photo",per_page:9}}),f(this,l,"https://pixabay.com/api/")}sendQuery(t,s,o){a(this,i).params.q=t,b(a(this,l),a(this,i)).then(r=>s(r)).catch(r=>o(r))}refreshPage(){a(this,i).params.q="",a(this,i).params.page=1}}i=new WeakMap,l=new WeakMap;const q={captionDelay:250,captionsData:"alt"};function I(){T.addEventListener("submit",e=>$(e))}function $(e){e.preventDefault(),O()?(d.loader(),v.sendQuery(L,P,p)):(p("Sorry, input not valid"),G())}function O(){return c.value&&c.value.length<=100?(L=c.value,!0):!1}function P(e){e.data.hits.length>0?(d.renderItems(e),R()):(p(`Sorry, there are no images matching your search query. Please try again!
  `),d.clearGalery())}function R(){M.refresh()}function G(){d.clearGalery(),c.value="",v.refreshPage()}function p(e){e=e.message?e.message:e,console.log(e);let t={message:e,icon:"material-icons-outlined",iconColor:"#fff",iconText:"dangerous",messageColor:"#fff",color:"#ef4040",position:"topRight",timeout:2e3,theme:"dark",maxWidth:"432px"};y.show(t),y.error(e)}const d=new S,v=new x;let M=new w(".gallery-link",q);const T=document.querySelector("#search-form");document.querySelector("#search-btn");const c=document.querySelector("#search-input");let L;I();
//# sourceMappingURL=index.js.map
