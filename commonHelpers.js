import{S as c}from"./assets/vendor-c0264615.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();new c(".swiper",{direction:"horizontal",loop:!0,speed:1e3,autoplay:{delay:2e3,stopOnLastSlide:!1,disableOnInteraction:!0},scrollbar:{el:".swiper-scrollbar",draggable:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},effect:"card",fadeEffect:{crossFade:!0}});const i=document.querySelector(".burger"),l=document.querySelector(".menu");document.querySelector(".wrapper");i.addEventListener("click",()=>{l.classList.toggle("is-open"),document.body.classList.toggle("backdrop")});
//# sourceMappingURL=commonHelpers.js.map
