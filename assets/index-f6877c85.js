(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function d(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(e){if(e.ep)return;e.ep=!0;const n=d(e);fetch(e.href,n)}})();(()=>{const o={openMenuBtn:document.querySelector("[mobile-menu-open]"),closeMenuBtn:document.querySelector("[mobile-menu-close]"),menu:document.querySelector("[mobile-modal]")};o.openMenuBtn.addEventListener("click",t),o.closeMenuBtn.addEventListener("click",t);function t(){o.menu.classList.toggle("is-hidden")}})();(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),menu:document.querySelector("[data-sidebar]"),additionalOpenModalBtn:document.querySelector(".vege-btn-order"),additionalOpenModalBtn2:document.querySelector(".hero-btn")};o.openModalBtn.addEventListener("click",t),o.closeModalBtn.addEventListener("click",t),o.additionalOpenModalBtn.addEventListener("click",t),o.additionalOpenModalBtn2.addEventListener("click",t);function t(){o.modal.classList.toggle("is-hidden")}o.menu.querySelector("[data-modal-open]").addEventListener("click",t)})();
