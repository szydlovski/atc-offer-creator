import{defineModule as e}from"@directus/extensions-sdk";import{defineComponent as t,resolveComponent as r,openBlock as n,createBlock as o,withCtx as a,createElementVNode as i}from"vue";var s=t({}),u=[],c=[];!function(e,t){if(e&&"undefined"!=typeof document){var r,n=!0===t.prepend?"prepend":"append",o=!0===t.singleTag,a="string"==typeof t.container?document.querySelector(t.container):document.getElementsByTagName("head")[0];if(o){var i=u.indexOf(a);-1===i&&(i=u.push(a)-1,c[i]={}),r=c[i]&&c[i][n]?c[i][n]:c[i][n]=s()}else r=s();65279===e.charCodeAt(0)&&(e=e.substring(1)),r.styleSheet?r.styleSheet.cssText+=e:r.appendChild(document.createTextNode(e))}function s(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),t.attributes)for(var r=Object.keys(t.attributes),o=0;o<r.length;o++)e.setAttribute(r[o],t.attributes[r[o]]);var i="prepend"===n?"afterbegin":"beforeend";return a.insertAdjacentElement(i,e),e}}("\n.module-nav {\r\n\tdisplay: none !important;\n}\r\n",{});var d=e({id:"atc-offer-creator",name:"Kreator Ofert",icon:"edit",routes:[{path:"",component:((e,t)=>{const r=e.__vccOpts||e;for(const[e,n]of t)r[e]=n;return r})(s,[["render",function(e,t,s,u,c,d){const l=r("private-view");return n(),o(l,{title:"My Custom Module"},{default:a((()=>t[0]||(t[0]=[i("iframe",{src:"https://preview.airtoursclub.pl/creator",style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,-1)]))),_:1})}],["__file","module.vue"]])}]});export{d as default};
