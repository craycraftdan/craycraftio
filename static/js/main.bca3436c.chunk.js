(this.webpackJsonpcraycraftio=this.webpackJsonpcraycraftio||[]).push([[0],{149:function(n,e,t){},150:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(19),c=t.n(o),i=t(5),u=t(3),l=t(2),s=t(1),f=(t(68),t(20)),p=t.n(f);function d(){var n=Object(l.a)(["\n  cursor: pointer;\n  opacity: 0.7;\n  transition: all 0.5s ease-in-out;\n\n  :hover {\n    opacity: 1;\n    transform: scale(1.05);\n  }\n\n  ",":not(:first-child) {\n    margin-top: 5px;\n  }\n"]);return d=function(){return n},n}function b(){var n=Object(l.a)(["\n  height: 6px;\n  width: 40px;\n  background-color: ",";\n  border-radius: 2px;\n  transform: ",";\n  opacity: ",";\n  transition: all 0.6s ease-in-out;\n"]);return b=function(){return n},n}function m(){var n=Object(l.a)(["\n  width: 100%;\n  height: 60px;\n  padding: 0px 20px 0px 15px;\n  background-color: ",";\n  position: fixed;\n  z-index: 999;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return m=function(){return n},n}var h=s.b.div(m(),(function(n){return n.active?"transparent":function(n,e){var t=p()(n).toRgb(),r=t.r,a=t.g,o=t.b;return"rgba(".concat(r,", ").concat(a,", ").concat(o,", ").concat(e,")")}(n.theme.background,n.opacity)})),v=s.b.div(b(),(function(n){return n.theme.accentColor}),(function(n){return n.active?function(n){switch(n){case"two":return"rotate(45deg)";case"three":return"translateY(-11px) rotate(-45deg)";default:return"translateY(15px) rotate(-45deg)"}}(n.bar):"rotate(0deg)"}),(function(n){return"one"===n.bar&&n.active?0:1})),g=s.b.div(d(),v),y={background:"#14151D",backgroundTwo:"#364156",backgroundThree:"#3C6E71",textLight:"#FFFCF9",textDark:"#14151D",accentColors:{primary:"#258175",secondary:"#D15663",tertiary:"#ACAF1E",quaternary:"#5A83B2",quinary:"#B8770D"},accentColor:"#32B1A0"},O="cubic-bezier(0.175, 0.885, 0.32, 1.275)";function j(){var n=Object(l.a)(["\n  0% {\n    transform: translateY(0px);\n  }\n  15% {\n    transform: translateY(-8px);\n  }\n  30% {\n    transform: translateY(0px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n"]);return j=function(){return n},n}function w(){var n=Object(l.a)(["\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n"]);return w=function(){return n},n}function x(){var n=Object(l.a)(["\n    0% {\n      width: 0ch;\n    }\n    100% {\n      width: 30ch;\n    }\n"]);return x=function(){return n},n}function E(){var n=Object(l.a)(["\n    0%,\n    20%,\n    50%,\n    80%,\n    100% {\n      transform: translateY(0);\n    }\n    40% {\n      transform: translateY(-25px);\n    }\n    60% {\n      transform: translateY(-15px);\n    }\n  "]);return E=function(){return n},n}var C=Object(s.c)(E()),k=Object(s.c)(x()),P=Object(s.c)(w()),S=Object(s.c)(j());function Y(){var n=Object(l.a)(["\n  width: 20%;\n  height: 25px;\n  display: flex;\n  cursor: pointer;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.5s ",";\n\n  :hover "," {\n    animation-play-state: paused;\n    width: 20px;\n    height: 20px;\n    opacity: 1;\n  }\n"]);return Y=function(){return n},n}function _(){var n=Object(l.a)(["\n  width: ",";\n  height: ",";\n  overflow: hidden;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: all 0.5s ",";\n\n  :hover "," {\n    animation-play-state: paused;\n    opacity: 0.7;\n  }\n"]);return _=function(){return n},n}function D(){var n=Object(l.a)(["\n  width: 12px;\n  height: 12px;\n  border-radius: 100%;\n  opacity: 0.5;\n  background-color: ",";\n  cursor: pointer;\n  animation: "," ","s ","\n    ","s infinite;\n  transition: all 0.5s ",";\n"]);return D=function(){return n},n}var z=s.b.div(D(),(function(n){return n.color}),S,(function(n){return n.length}),O,(function(n){return n.delay}),O),A=s.b.div(_(),(function(n){return n.active?"0px":"190px"}),(function(n){return n.active?"0px":"60px"}),O,z),T=s.b.div(Y(),O,z),F=y.accentColors,N=Object.values(F),R=function(n){return a.a.createElement(A,{active:n.active},N.map((function(e,t){return a.a.createElement(T,{key:e},a.a.createElement(z,{delay:(t+.1)/2,length:N.length-1,color:e,onClick:function(){return n.onChange(e)}}))})))},B=function(n){return a.a.createElement(h,{active:n.active,opacity:n.opacity},a.a.createElement(R,{onChange:n.switchAccentColor,active:n.active}),a.a.createElement(g,{onClick:function(){return n.toggleMenu(!n.active)}},a.a.createElement(v,{bar:"one",active:n.active}),a.a.createElement(v,{bar:"two",active:n.active}),a.a.createElement(v,{bar:"three",active:n.active})))},I=t(21);function M(){var n=Object(l.a)(["\n  color: #eeeff7;\n  height: 33%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  transition: all 0.4s ease-in-out;\n  cursor: pointer;\n  font-family: 'Roboto Mono', monospace;\n  letter-spacing: 6px;\n\n  :hover {\n    background-color: ",";\n    color: ",";\n    letter-spacing: 10px;\n  }\n"]);return M=function(){return n},n}function J(){var n=Object(l.a)(["\n  background-color: ",";\n  width: ",";\n  height: ",";\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 998;\n  font-size: 2.1rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-around;\n  opacity: 0;\n  animation: "," 1.5s 0.2s ease 1;\n  animation-fill-mode: forwards;\n"]);return J=function(){return n},n}var L=s.b.div(J(),(function(n){return n.theme.backgroundTwo}),(function(n){return n.active?"100vw":"0px"}),(function(n){return n.active?"100vh":"0px"}),P),U=s.b.div(M(),(function(n){return n.theme.background}),(function(n){return n.theme.accentColor})),q=function(n){return a.a.createElement(L,{active:n.active},["about","projects","contact"].map((function(e){return a.a.createElement(U,{key:e,onClick:function(){return function(e){n.toggleMenu(),I.scroller.scrollTo(e,{duration:900,delay:0,smooth:"easeInOutQuart"})}(e)}},e.toUpperCase())})))},H=t(59),X=t(22),Q=t.n(X),G=t(10),V=t.n(G),K=t(60),W=t.n(K);function Z(){var n=Object(l.a)(["\n  width: 42px;\n  height: 10px;\n  background-color: #eeeff7;\n  transform: ",";\n  transition: all 0.4s ease-in-out;\n"]);return Z=function(){return n},n}function $(){var n=Object(l.a)(["\n  position: absolute;\n  bottom: 25px;\n  width: 6.5rem;\n  height: 4.2rem;\n  cursor: pointer;\n  opacity: ",";\n  animation: "," 3s infinite;\n\n  :hover * {\n    background-color: "," !important;\n    opacity: 1;\n  }\n"]);return $=function(){return n},n}function nn(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n  cursor: pointer;\n  opacity: 0;\n  animation: "," 1.5s 0.2s ease 1;\n  animation-fill-mode: forwards;\n\n  :hover * {\n    color: "," !important;\n    opacity: 1;\n  }\n  :hover "," {\n    letter-spacing: 2.8rem;\n    opacity: 1;\n  }\n  :hover "," {\n    letter-spacing: 0.8rem;\n    opacity: 1;\n  }\n"]);return nn=function(){return n},n}function en(){var n=Object(l.a)(["\n  font-size: 1.6rem;\n  font-weight: 300;\n  letter-spacing: 0.5rem;\n  opacity: 0.7;\n  padding-left: 1rem;\n  overflow: hidden;\n  white-space: nowrap;\n  animation: "," 2s steps(18);\n  transition: all 1.5s ",";\n"]);return en=function(){return n},n}function tn(){var n=Object(l.a)(["\n  font-size: 6.5rem;\n  font-weight: 500;\n  letter-spacing: 2rem;\n  opacity: 0.7;\n  transition: all 1.5s ",";\n"]);return tn=function(){return n},n}function rn(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return rn=function(){return n},n}var an=s.b.div(rn()),on=s.b.div(tn(),O),cn=s.b.div(en(),k,O),un=s.b.div(nn(),P,(function(n){return n.theme.accentColor}),on,cn),ln=s.b.div($(),(function(n){return n.opacity}),C,(function(n){return n.theme.accentColor})),sn=s.b.div(Z(),(function(n){return n.leftSide?"rotate(45deg) translateX(9px) translateY(12px)":"rotate(-45deg) translateX(12px) translateY(18px)"}));function fn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function pn(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?fn(t,!0).forEach((function(e){Object(i.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):fn(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var dn=function(n){var e=n.opacity,t=["JavaScript Aficionado","Video Game Sommelier","Pretentious Title Curator","Professional Computer Nerd"],o=Object(r.useState)(0),c=Object(u.a)(o,2),i=c[0],l=c[1],s=Object(r.useState)(!0),f=Object(u.a)(s,2),d=f[0],b=f[1],m=function(){var e=function(n,e){var t=e.filter((function(e){return e!==n}));return t[V()(0,t.length-1)]}(n.particlesConfig.particles.shape.type,["circle","edge","triangle","polygon","star"]),t=V()(3,10),r=V()(0,360),a=p()("hsl(".concat(r,", 50%, 60%)")).toHexString(),o=V()(4,10),c=Q()({},n.particlesConfig,{particles:{color:{value:a},shape:{type:e},polygon:{nb_sides:t},size:{value:o}}});n.setAccentColor(a),n.setParticlesConfig(c)};return Object(r.useEffect)((function(){var n=setInterval((function(){var n=i+1;l(n>=t.length?0:n),b(!1)}),d?3e3:2500);return function(){return clearInterval(n)}}),[i,t,d,b]),a.a.createElement(an,{id:"header"},a.a.createElement("div",{style:{opacity:e}},a.a.createElement(W.a,{style:pn({},{position:"fixed",color:"red",top:0,left:0,width:"100%",margin:"0",padding:"0",display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat"},{display:"".concat(n.progress>=1?"none":"block")}),params:n.particlesConfig})),a.a.createElement(un,{onClick:function(){return m()}},a.a.createElement(on,null,"CRAYCRAFT"),a.a.createElement(cn,null,t[i])),a.a.createElement(ln,{opacity:e-.3,onClick:function(){I.scroller.scrollTo("about",{duration:2e3,delay:0,smooth:"easeInOutQuart"})}},a.a.createElement(sn,{leftSide:!0}),a.a.createElement(sn,{rightSide:!0})))};function bn(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n"]);return bn=function(){return n},n}var mn=s.b.div(bn(),(function(n){return n.theme.backgroundTwo})),hn=function(n){return a.a.createElement(mn,{id:"about"},"Under Construction")};t(11);function vn(){var n=Object(l.a)(["\n  width: 100%;\n  height: calc(100vh - 60px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n"]);return vn=function(){return n},n}var gn=s.b.div(vn(),(function(n){return n.theme.backgroundTwo}));t(149);var yn=function(n){var e=Object(r.useState)({budget:9500,deadline:6,subject:"Project Request",firstName:"",lastName:"",emailAddress:"",projectDetails:"",confirmOpen:!1}),t=Object(u.a)(e,2);t[0],t[1];return a.a.createElement(gn,{id:"contact"},"Under Construction")};function On(){var n=Object(l.a)(["\n  width: 100%;\n  height: fit-content;\n  color: ",";\n  text-align: center;\n  transition: all 0.6s ",";\n\n  :hover {\n    color: "," !important;\n    cursor: default;\n  }\n"]);return On=function(){return n},n}function jn(){var n=Object(l.a)(["\n  width: 100%;\n  height: 60px;\n  color: ",";\n  height: fit-content;\n  max-width: 800px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin-bottom: 50px;\n\n  "," {\n    :hover {\n      transform: scale(1.3);\n      color: "," !important;\n    }\n  }\n"]);return jn=function(){return n},n}function wn(){var n=Object(l.a)(["\n  width: 60px;\n  height: 60px;\n  color: ",";\n  cursor: pointer;\n  transition: all 0.6s ",";\n"]);return wn=function(){return n},n}function xn(){var n=Object(l.a)(["\n  width: 100%;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  background-color: ",";\n"]);return xn=function(){return n},n}var En=s.b.div(xn(),(function(n){return n.theme.background})),Cn=s.b.i(wn(),(function(n){return n.theme.textLight}),O),kn=s.b.div(jn(),(function(n){return n.theme.white}),Cn,(function(n){return n.theme.accentColor})),Pn=s.b.div(On(),(function(n){return n.theme.white}),O,(function(n){return n.theme.accentColor})),Sn=function(n){return a.a.createElement(En,{id:"footer"},a.a.createElement(kn,{accentColor:n.accentColor},a.a.createElement("a",{href:"https://github.com/craycraftdan",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(Cn,{className:"fab fa-github fa-4x"})),a.a.createElement("a",{href:"https://twitter.com/TheSirFry",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(Cn,{className:"fab fa-twitter fa-4x"})),a.a.createElement("a",{href:"https://codepen.io/craycraftdan/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(Cn,{className:"fab fa-codepen fa-4x"}))),a.a.createElement(Pn,{accentColor:n.accentColor},"Crafted by Craycraft \xa9 2019"))};function Yn(){var n=Object(l.a)(["\n  width: 100%;\n  height: calc(100vh - 60px);\n  display: flex;\n  color: ",";\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  background-color: ",";\n"]);return Yn=function(){return n},n}var _n=s.b.div(Yn(),(function(n){return n.theme.background}),(function(n){return n.theme.accentColor})),Dn=function(){return a.a.createElement(_n,{id:"projects"},"Under Construction")};function zn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function An(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?zn(t,!0).forEach((function(e){Object(i.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):zn(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function Tn(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n"]);return Tn=function(){return n},n}var Fn=s.b.div(Tn(),y.background),Nn=function(){var n=Object(r.useState)(!1),e=Object(u.a)(n,2),t=e[0],o=e[1],c=Object(r.useState)(y.accentColors.primary),i=Object(u.a)(c,2),l=i[0],f=i[1],p=Object(r.useState)(H),d=Object(u.a)(p,2),b=d[0],m=d[1],h=Object(r.useState)(1),v=Object(u.a)(h,2),g=v[0],O=v[1],j=Object(r.useState)(0),w=Object(u.a)(j,2),x=w[0],E=w[1];return Object(r.useEffect)((function(){var n=function(){var n=window.pageYOffset<window.innerHeight?window.pageYOffset/window.innerHeight:1,e=(1-n)*g;E(n),O(e,n)};return window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}}),[]),a.a.createElement(Fn,null,a.a.createElement(s.a,{theme:An({},y,{accentColor:l})},a.a.createElement(B,{opacity:x,active:t,toggleMenu:o,switchAccentColor:function(n){var e=Q()({},b,{particles:{color:{value:n}}});m(e),f(n)}}),a.a.createElement(q,{active:t,toggleMenu:o}),a.a.createElement(dn,{progress:x,particlesConfig:b,setParticlesConfig:m,accentColor:l,opacity:g,setAccentColor:f}),a.a.createElement(hn,null),a.a.createElement(Dn,null),a.a.createElement(yn,null),a.a.createElement(Sn,null)))};c.a.render(a.a.createElement(Nn,null),document.getElementById("root"))},59:function(n){n.exports=JSON.parse('{"particles":{"number":{"value":100,"density":{"enable":true,"value_area":1183.721462448409}},"color":{"value":"#37C2B0"},"shape":{"type":"circle","stroke":{"width":0,"color":"#92cdcf"},"polygon":{"nb_sides":7},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":7,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.2,"sync":false}},"line_linked":{"enable":false,"distance":500,"color":"#ffffff","opacity":0.4,"width":2},"move":{"enable":true,"speed":1.5,"direction":"bottom","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":561.194221302933,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},"bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}')},63:function(n,e,t){n.exports=t(150)},68:function(n,e,t){}},[[63,1,2]]]);
//# sourceMappingURL=main.bca3436c.chunk.js.map