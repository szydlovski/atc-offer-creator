import{defineModule as e}from"@directus/extensions-sdk";import{defineComponent as t,resolveComponent as n,openBlock as r,createBlock as o,withCtx as a,createTextVNode as i,createElementVNode as d}from"vue";var s=t({}),u=[],c=[];!function(e,t){if(e&&"undefined"!=typeof document){var n,r=!0===t.prepend?"prepend":"append",o=!0===t.singleTag,a="string"==typeof t.container?document.querySelector(t.container):document.getElementsByTagName("head")[0];if(o){var i=u.indexOf(a);-1===i&&(i=u.push(a)-1,c[i]={}),n=c[i]&&c[i][r]?c[i][r]:c[i][r]=d()}else n=d();65279===e.charCodeAt(0)&&(e=e.substring(1)),n.styleSheet?n.styleSheet.cssText+=e:n.appendChild(document.createTextNode(e))}function d(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),t.attributes)for(var n=Object.keys(t.attributes),o=0;o<n.length;o++)e.setAttribute(n[o],t.attributes[n[o]]);var i="prepend"===r?"afterbegin":"beforeend";return a.insertAdjacentElement(i,e),e}}("\n.module-nav {\r\n\t\tdisplay: none !important;\n}\r\n",{});var l=e({id:"atc-offer-creator",name:"Kreator Ofert",icon:"edit",routes:[{path:"",component:((e,t)=>{const n=e.__vccOpts||e;for(const[e,r]of t)n[e]=r;return n})(s,[["render",function(e,t,s,u,c,l){const f=n("private-view");return r(),o(f,{title:"My Custom Module"},{navigation:a((()=>t[0]||(t[0]=[i("Hello from navigation!")]))),default:a((()=>[t[1]||(t[1]=d("div",{style:{"background-color":"red"}},"Hello world!",-1))])),_:1})}],["__file","module.vue"]])}]});export{l as default};
