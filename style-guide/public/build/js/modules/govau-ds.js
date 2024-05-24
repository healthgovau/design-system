/*! @health.gov.au/health-design-system v2.0.0-beta.5 */
/* PANCAKE v2.0.0 PANCAKE-JS v2.0.0 */!function(c){var e={};function s(e,t,n){"closing"===n?e.setAttribute("aria-expanded",!1):e.setAttribute("aria-expanded",!0)}function u(e,t,n,o){if("opening"===t||"open"===t)var a=n||"au-accordion--closed",i=o||"au-accordion--open";else a=o||"au-accordion--open",i=n||"au-accordion--closed";var l,r,c,s;s=a,(c=e).classList?c.classList.remove(s):c.className=c.className.replace(new RegExp("(^|\\b)"+s.split(" ").join("|")+"(\\b|$)","gi")," "),r=i,(l=e).classList?l.classList.add(r):l.className=l.className+" "+r}e.Toggle=function(e,t,o){try{window.event.cancelBubble=!0,event.stopPropagation()}catch(r){}e.length===undefined&&(e=[e]),"object"!=typeof o&&(o={});for(var n=0;n<e.length;n++){var a=e[n],i=a.getAttribute("aria-controls"),l=document.getElementById(i);if(null==l)throw new Error("AU.accordion.Toggle cannot find the target to be toggled from inside aria-controls.\nMake sure the first argument you give AU.accordion.Toggle is the DOM element (a button or a link) that has an aria-controls attribute that points to a div that you want to toggle.");l.style.display="block",function(n){c.animate.Toggle({element:l,property:"height",speed:t||250,prefunction:function(e,t){"opening"===t?(e.style.display="block","function"==typeof o.onOpen&&o.onOpen()):"function"==typeof o.onClose&&o.onClose(),s(n,0,t),u(n,t)},postfunction:function(e,t){"closed"===t?(e.style.display="",e.style.height="","function"==typeof o.afterClose&&o.afterClose()):(e.style.display="",e.style.height="","function"==typeof o.afterOpen&&o.afterOpen()),u(e,t)}})}(a)}return!1},e.Open=function(e,t){try{window.event.cancelBubble=!0,event.stopPropagation()}catch(r){}e.length===undefined&&(e=[e]);for(var n=0;n<e.length;n++){var o,a=e[n],i=a.getAttribute("aria-controls"),l=document.getElementById(i);o="undefined"!=typeof getComputedStyle?window.getComputedStyle(l).height:l.currentStyle.height,0===parseInt(o)&&(l.style.height="0px"),l.style.display="",u(l,"opening"),u(a,"opening"),s(a,0,"opening"),function(e,t,n){c.animate.Run({element:e,property:"height",endSize:"auto",speed:t||250,callback:function(){u(n,"opening")}})}(l,t,a)}},e.Close=function(e,t){try{window.event.cancelBubble=!0,event.stopPropagation()}catch(l){}e.length===undefined&&(e=[e]);for(var n=0;n<e.length;n++){var o=e[n],a=o.getAttribute("aria-controls"),i=document.getElementById(a);u(o,"closing"),s(o,0,"closing"),function(e,t){c.animate.Run({element:e,property:"height",endSize:0,speed:t||250,callback:function(){e.style.display="",u(e,"close")}})}(i,t)}},c.accordion=e}(AU=AU||{}),"undefined"!=typeof module&&(module.exports=AU),function(f){var e={};function s(e,t,n){if(e===t)return{stepSize:0,steps:0,intervalTime:0};var o=t-e,a=n/o,i=o<0?-1:1,l=Math.abs(o/i);return a=n/l,Math.abs(a)<1e3/60&&(a=1e3/60,i=o/(l=Math.ceil(Math.abs(n/a)))),{stepSize:i,steps:l-1,intervalTime:a}}"undefined"!=typeof module&&(e.CalculateAnimationSpecs=s),e.GetCSSPropertyBecauseIE=function(e,t){if("undefined"!=typeof getComputedStyle)return window.getComputedStyle(e)[t];var n=e.currentStyle[t];return"auto"===n&&(n=f.animate.CalculateAuto(e,t)),n},e.CalculateAuto=function(e,t){var n,o;return e.style[t]=(o="height"===t?(n=e.clientHeight,e.style[t]="auto",e.clientHeight):(n=e.clientWidth,e.style[t]="auto",e.clientWidth),n+"px"),parseInt(o)},e.Stop=function(e){clearInterval(e.AUanimation)},e.Run=function(i){var l=i.element,e=i.speed||250;l.length===undefined&&(l=[l]),"function"!=typeof i.callback&&(i.callback=function(){}),l[0].AUinteration=0,l[0].AUinterations=l.length;for(var t=0;t<l.length;t++){var n=l[t];f.animate.Stop(n);var o=parseInt(f.animate.GetCSSPropertyBecauseIE(n,i.property)),a=i.endSize;"auto"===i.endSize&&(a=f.animate.CalculateAuto(n,i.property));var r=s(o,a,e),c=o;r.stepSize<0?n.AUtoggleState="closing":0<r.stepSize&&(n.AUtoggleState="opening"),function(e,t,n,o,a){e.AUanimation=setInterval(function(){if(t===a||0===o.steps){if(f.animate.Stop(e),e.style[i.property]=a+"px",e.AUtoggleState="",l[0].AUinteration++,"auto"===i.endSize&&(e.style[i.property]=""),l[0].AUinteration>=l[0].AUinterations)return i.callback()}else n+=o.stepSize,e.style[i.property]=n+"px",o.steps--},Math.abs(o.intervalTime))}(n,o,c,r,a)}},e.Toggle=function(t){var n=t.element,e=t.property||"height",o=t.speed||250,a=t.closeSize===undefined?0:t.closeSize,i=t.openSize===undefined?"auto":t.openSize;n.length===undefined&&(n=[n]),"function"!=typeof t.prefunction&&(t.prefunction=function(){}),"function"!=typeof t.postfunction&&(t.postfunction=function(){}),"function"!=typeof t.callback&&(t.callback=function(){}),n[0].AUtoggleInteration=0,n[0].AUtoggleInterations=n.length;for(var l=0;l<n.length;l++){var r,c=n[l];f.animate.Stop(c);var s="",u="",p=parseInt(f.animate.GetCSSPropertyBecauseIE(c,t.property));if(p===a||"closing"===c.AUtoggleState)r=i,s="opening",u="open";else{if(p===a&&"opening"!==c.AUtoggleState)throw new Error("AU.animate.Toggle cannot determine state of element");r=a,s="closing",u="closed"}t.prefunction(c,s),f.animate.Run({element:c,endSize:r,property:e,speed:o,callback:function(){if(n[0].AUtoggleInteration++,n[0].AUtoggleInteration===n[0].AUinterations){var e=t.callback(c,u);return t.postfunction(c,u),e}t.postfunction(c,u)}})}},f.animate=e}(AU=AU||{}),"undefined"!=typeof module&&(module.exports=AU),"undefined"!=typeof exports&&(Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=AU),function(h){var b={},A={},S=!1;function U(e,t,n,o){if("opening"===t||"open"===t)var a=n||"au-main-nav__content--closed",i=o||"au-main-nav__content--open";else a=o||"au-main-nav__content--open",i=n||"au-main-nav__content--closed";var l,r,c,s;s=a,(c=e).classList?c.classList.remove(s):c.className=c.className.replace(new RegExp("(^|\\b)"+s.split(" ").join("|")+"(\\b|$)","gi")," "),r=i,(l=e).classList?l.classList.add(r):l.className=l.className+" "+r}function _(t,e,n){function o(e){var t=n.apply(this,arguments);return!1===t&&(e.stopPropagation(),e.preventDefault()),t}function a(){var e=n.call(t,window.event);return!1===e&&(window.event.returnValue=!1,window.event.cancelBubble=!0),e}return t.addEventListener?(t.addEventListener(e,o,!1),{element:t,handler:o,event:e}):(t.attachEvent("on"+e,a),{element:t,handler:a,event:e})}function w(e){e.element.removeEventListener?e.element.removeEventListener(e.event,e.handler):e.element.detachEvent("on"+e.event,e.handler)}b.Toggle=function(a,e,i){if(!S){S=!0;try{window.event.cancelBubble=!0,event.stopPropagation()}catch(v){}"object"!=typeof i&&(i={});var t,l,n=a.getAttribute("aria-controls"),o=document.getElementById(n),r=o.querySelector(".au-main-nav__menu"),c=o.querySelector(".au-main-nav__overlay"),s=o.querySelector(".au-main-nav__toggle--close"),u=o.querySelector(".au-main-nav__toggle--open"),p=o.querySelector(".au-main-nav__focus-trap-top"),f=o.querySelector(".au-main-nav__focus-trap-bottom"),d=r.querySelectorAll("a, .au-main-nav__toggle"),g=-1===o.className.indexOf("au-main-nav__content--open"),y=r.offsetWidth,m=g?"opening":"";c.style.display="block",t=o,l=e,h.animate.Toggle({element:r,property:"left",openSize:0,closeSize:-1*y,speed:l||250,prefunction:function(){"opening"===m?(r.style.display="block",c.style.left=0,c.style.opacity=.5,"function"==typeof i.onOpen&&i.onOpen()):(c.style.opacity="0","function"==typeof i.onClose&&i.onClose())},postfunction:function(){"opening"===m?(s.focus(),u.setAttribute("aria-expanded",!0),s.setAttribute("aria-expanded",!0),p.setAttribute("tabindex",0),f.setAttribute("tabindex",0),A.focusTop=_(p,"focus",function(){d[d.length-1].focus()}),A.focusBottom=_(f,"focus",function(){d[0].focus()}),A.escKey=_(document,"keyup",function(){var e,t,n=n||window.event,o=(e=c,t="display",("undefined"!=typeof getComputedStyle?getComputedStyle(e,null):e.currentStyle)[t]);27===n.keyCode&&"block"===o&&b.Toggle(a,l,i)}),"function"==typeof i.afterOpen&&i.afterOpen()):(u.focus(),u.setAttribute("aria-expanded",!1),s.setAttribute("aria-expanded",!1),p.removeAttribute("tabindex"),f.removeAttribute("tabindex"),w(A.focusTop),w(A.focusBottom),w(A.escKey),"function"==typeof i.afterClose&&i.afterClose()),U(t,m),U(document.body,m,"au-main-nav__scroll--unlocked","au-main-nav__scroll--locked"),r.style.display="",r.style.left="",c.style.display="",c.style.left="",c.style.opacity="",S=!1}})}},h.mainNav=b}(AU=AU||{}),"undefined"!=typeof module&&(module.exports=AU);var AU=AU||{};"undefined"!=typeof module&&(module.exports=AU);
