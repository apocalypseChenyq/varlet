import{_ as A,c as r,r as H,g as R,M as P,s as G,i as F,a as e,m as W,P as J,C as K,R as Q,I as X}from"./IconSfc.29808136.js";import{o as c,c as u,a as N,r as l,g as s,u as Y,b as Z,d as T,e as U,f as I,t as L,h as C,w as f,i as g,v as y,n as ee,F as k,j as w,k as M,l as te,m as S,T as oe,p as $,q as ne,s as _e,x as ae,y as re,z as ie,A as pe,B as se,C as ce}from"./vendor.cfbfc887.js";const me={name:"AppMobile",props:{componentName:{type:String},language:{type:String},replace:{type:String}}},de={class:"varlet-site-mobile var-elevation--3"},he={class:"varlet-site-mobile-content"},ue=["src"];function le(o,_,n,t,m,i){return c(),u("div",de,[N("div",he,[N("iframe",{src:`./mobile.html#/${n.componentName}?language=${n.language}&platform=pc&replace=${n.replace}`},null,8,ue)])])}var Ee=A(me,[["render",le],["__scopeId","data-v-64a53243"]]);const ve={name:"AppHeader",props:{language:{type:String}},setup(){const o=l(s(r,"title")),_=l(s(r,"logo")),n=l(s(r,"pc.header.i18n")),t=l(s(r,"pc.header.github")),m=l(!1),i=Y(),p=Z(()=>H(n.value));return{logo:_,title:o,languages:n,nonEmptyLanguages:p,github:t,isOpenMenu:m,handleLanguageChange:a=>{const{menuName:h}=R();i.replace(`/${a}/${h}`),m.value=!1}}}},Ce={class:"varlet-site-header"},Ne={class:"varlet-site-header__lead"},Te=["src"],be={key:1,class:"varlet-site-header__title"},ze={class:"varlet-site-header__tail"},Ae=["href"];function Ie(o,_,n,t,m,i){const p=T("var-icon"),d=T("var-cell"),a=U("ripple");return c(),u("div",Ce,[N("div",Ne,[t.logo?(c(),u("img",{key:0,class:"varlet-site-header__logo",src:t.logo,alt:"logo"},null,8,Te)):I("v-if",!0),t.title?(c(),u("div",be,L(t.title),1)):I("v-if",!0)]),N("div",ze,[t.languages?(c(),u("div",{key:0,class:"varlet-site-header__language",onMouseenter:_[0]||(_[0]=h=>t.isOpenMenu=!0),onMouseleave:_[1]||(_[1]=h=>t.isOpenMenu=!1)},[C(p,{name:"translate",size:"26px",color:"#666"}),C(p,{name:"chevron-down",color:"#666"}),C(oe,{name:"fade"},{default:f(()=>[g(N("div",{class:"varlet-site-header__language-list var-elevation--5",style:ee({pointerEvents:t.isOpenMenu?"auto":"none"})},[(c(!0),u(k,null,w(t.nonEmptyLanguages,(h,b)=>g((c(),M(d,{key:b,class:S({"varlet-site-header__language-list--active":n.language===b}),onClick:V=>t.handleLanguageChange(b)},{default:f(()=>[te(L(h),1)]),_:2},1032,["class","onClick"])),[[a]])),128))],4),[[y,t.isOpenMenu]])]),_:1})],32)):I("v-if",!0),t.github?(c(),u("a",{key:1,class:"varlet-site-header__link",target:"_blank",href:t.github},[C(p,{name:"github",color:"#666",size:28})],8,Ae)):I("v-if",!0)])])}var Le=A(ve,[["render",Ie],["__scopeId","data-v-15d54e16"]]);const ge={name:"AppSidebar",props:{menu:{type:Array},menuName:{type:String},language:{type:String}},emits:["change"],setup(o,{emit:_}){const n=$(P),t=l(s(r,"themes"));return{menuTypes:n,themes:t,changeRoute:i=>{i.type===P.TITLE||o.menuName===i.doc||_("change",i)}}}},Oe={class:"varlet-site-sidebar var-elevation--3"},Re={key:0,class:"varlet-site-sidebar__item--title"},Pe={key:1,class:"varlet-site-sidebar__item--link"};function fe(o,_,n,t,m,i){const p=T("var-cell"),d=U("ripple");return c(),u("div",Oe,[(c(!0),u(k,null,w(n.menu,(a,h)=>g((c(),M(p,{class:S(["varlet-site-sidebar__item",{"varlet-site-sidebar__item--active":a.doc===n.menuName,"varlet-site-sidebar__link":a.type!==t.menuTypes.TITLE,"varlet-site-sidebar__title":a.type===t.menuTypes.TITLE}]),key:h,onClick:b=>t.changeRoute(a)},{default:f(()=>[a.type===t.menuTypes.TITLE?(c(),u("span",Re,L(a.text[n.language]),1)):(c(),u("span",Pe,L(a.text[n.language]),1))]),_:2},1032,["class","onClick"])),[[d,{touchmoveForbid:!1,disabled:a.type===t.menuTypes.TITLE,color:t.themes["color-side-bar"]}]])),128))])}var Se=A(ge,[["render",fe],["__scopeId","data-v-251bcda4"]]);const De=ne({components:{AppMobile:Ee,AppHeader:Le,AppSidebar:Se},setup(){const o=s(r,"defaultLanguage"),_=l(s(r,"pc.menu",[])),n=l(s(r,"useMobile")),t=s(r,"mobile.redirect"),m=l(""),i=l(null),p=l(""),d=l(null),a=_e(),h=E=>{const v=_.value.find(O=>O.doc===E);return(v==null?void 0:v.type)===P.COMPONENT?E:t.slice(1)},b=()=>{const{language:E,menuName:v}=R();if(F()&&n.value){window.location.href=`./mobile.html#/${v}?language=${E||o}&platform=mobile`;return}ie(()=>{const O=document.querySelector(".varlet-site-sidebar").getElementsByClassName("var-cell"),j=_.value.findIndex(q=>q.doc===v);j!==-1&&O[j].scrollIntoView({block:"center",inline:"start"})})},V=E=>{d.value.scrollTop=0,i.value=h(E.doc),p.value=E.doc};return ae(()=>b()),re(()=>a.path,()=>{const{language:E,menuName:v}=R();!E||!v||(i.value=h(v),p.value=v,m.value=E,document.title=s(r,"pc.title")[E])},{immediate:!0}),G(r),{menu:_,language:m,componentName:i,menuName:p,doc:d,useMobile:n,handleSidebarChange:V}}}),Ve={class:"varlet-site"},je={class:"varlet-site-content"};function Ue(o,_,n,t,m,i){const p=T("app-header"),d=T("app-sidebar"),a=T("router-view"),h=T("app-mobile");return c(),u("div",Ve,[C(p,{language:o.language},null,8,["language"]),N("div",je,[C(d,{language:o.language,menu:o.menu,"menu-name":o.menuName,onChange:o.handleSidebarChange},null,8,["language","menu","menu-name","onChange"]),N("div",{class:S(["varlet-site-doc-container",[!o.useMobile&&"varlet-site-doc-container--pc-only"]]),ref:"doc"},[C(a)],2),g(C(h,{"component-name":o.componentName,language:o.language,replace:o.menuName},null,8,["component-name","language","replace"]),[[y,o.useMobile]])])])}var ye=A(De,[["render",Ue]]),x=[{path:"/en-US/action-sheet",component:()=>e(()=>import("./en-US.29501944.js"),["assets/en-US.29501944.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/action-sheet",component:()=>e(()=>import("./zh-CN.0d875154.js"),["assets/zh-CN.0d875154.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/app-bar",component:()=>e(()=>import("./en-US.5e5d8427.js"),["assets/en-US.5e5d8427.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/app-bar",component:()=>e(()=>import("./zh-CN.b2b96d86.js"),["assets/zh-CN.b2b96d86.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/back-top",component:()=>e(()=>import("./en-US.6318acea.js"),["assets/en-US.6318acea.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/back-top",component:()=>e(()=>import("./zh-CN.d4fb6dc7.js"),["assets/zh-CN.d4fb6dc7.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/badge",component:()=>e(()=>import("./en-US.3e64ae1d.js"),["assets/en-US.3e64ae1d.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/badge",component:()=>e(()=>import("./zh-CN.ec0a3eb4.js"),["assets/zh-CN.ec0a3eb4.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/button",component:()=>e(()=>import("./en-US.c0693080.js"),["assets/en-US.c0693080.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/button",component:()=>e(()=>import("./zh-CN.e40cd6bf.js"),["assets/zh-CN.e40cd6bf.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/card",component:()=>e(()=>import("./en-US.84f5ff9a.js"),["assets/en-US.84f5ff9a.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/card",component:()=>e(()=>import("./zh-CN.605a86b7.js"),["assets/zh-CN.605a86b7.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/cell",component:()=>e(()=>import("./en-US.be1e147b.js"),["assets/en-US.be1e147b.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/cell",component:()=>e(()=>import("./zh-CN.d25d7067.js"),["assets/zh-CN.d25d7067.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/checkbox",component:()=>e(()=>import("./zh-CN.9125f75b.js"),["assets/zh-CN.9125f75b.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/checkbox-group",component:()=>e(()=>import("./en-US.5e82a8a7.js"),["assets/en-US.5e82a8a7.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/checkbox-group",component:()=>e(()=>import("./zh-CN.d7f0305d.js"),["assets/zh-CN.d7f0305d.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/chip",component:()=>e(()=>import("./en-US.7cb92a9a.js"),["assets/en-US.7cb92a9a.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/chip",component:()=>e(()=>import("./zh-CN.306ea757.js"),["assets/zh-CN.306ea757.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/col",component:()=>e(()=>import("./zh-CN.f624509f.js"),["assets/zh-CN.f624509f.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/collapse",component:()=>e(()=>import("./en-US.cded818e.js"),["assets/en-US.cded818e.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/collapse",component:()=>e(()=>import("./zh-CN.1a20b675.js"),["assets/zh-CN.1a20b675.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/collapse-item",component:()=>e(()=>import("./zh-CN.6e7f955e.js"),["assets/zh-CN.6e7f955e.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/countdown",component:()=>e(()=>import("./en-US.d37c254a.js"),["assets/en-US.d37c254a.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/countdown",component:()=>e(()=>import("./zh-CN.28ecd24f.js"),["assets/zh-CN.28ecd24f.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/counter",component:()=>e(()=>import("./en-US.404cdad4.js"),["assets/en-US.404cdad4.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/counter",component:()=>e(()=>import("./zh-CN.1a391c8a.js"),["assets/zh-CN.1a391c8a.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/date-picker",component:()=>e(()=>import("./en-US.455a3dec.js"),["assets/en-US.455a3dec.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/date-picker",component:()=>e(()=>import("./zh-CN.1c0e61ab.js"),["assets/zh-CN.1c0e61ab.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/dialog",component:()=>e(()=>import("./en-US.189a5bab.js"),["assets/en-US.189a5bab.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/dialog",component:()=>e(()=>import("./zh-CN.650a570c.js"),["assets/zh-CN.650a570c.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/divider",component:()=>e(()=>import("./en-US.6ba63b66.js"),["assets/en-US.6ba63b66.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/divider",component:()=>e(()=>import("./zh-CN.62196105.js"),["assets/zh-CN.62196105.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/form",component:()=>e(()=>import("./en-US.3f531cd4.js"),["assets/en-US.3f531cd4.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/form",component:()=>e(()=>import("./zh-CN.f38ee34f.js"),["assets/zh-CN.f38ee34f.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/form-details",component:()=>e(()=>import("./en-US.a8029e8c.js"),["assets/en-US.a8029e8c.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/form-details",component:()=>e(()=>import("./zh-CN.28c54eb4.js"),["assets/zh-CN.28c54eb4.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/icon",component:()=>e(()=>import("./en-US.b1203be8.js"),["assets/en-US.b1203be8.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/icon",component:()=>e(()=>import("./zh-CN.6bd498ca.js"),["assets/zh-CN.6bd498ca.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/image",component:()=>e(()=>import("./en-US.422dbf09.js"),["assets/en-US.422dbf09.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/image",component:()=>e(()=>import("./zh-CN.d0f896f3.js"),["assets/zh-CN.d0f896f3.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/image-preview",component:()=>e(()=>import("./en-US.fe48d4a6.js"),["assets/en-US.fe48d4a6.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/image-preview",component:()=>e(()=>import("./zh-CN.c041b9f3.js"),["assets/zh-CN.c041b9f3.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/index-anchor",component:()=>e(()=>import("./zh-CN.ac17d7b3.js"),["assets/zh-CN.ac17d7b3.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/index-bar",component:()=>e(()=>import("./en-US.94dd6808.js"),["assets/en-US.94dd6808.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/index-bar",component:()=>e(()=>import("./zh-CN.f972e157.js"),["assets/zh-CN.f972e157.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/input",component:()=>e(()=>import("./en-US.cb73c6ec.js"),["assets/en-US.cb73c6ec.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/input",component:()=>e(()=>import("./zh-CN.a45a9d0b.js"),["assets/zh-CN.a45a9d0b.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/lazy",component:()=>e(()=>import("./en-US.e046d0f2.js"),["assets/en-US.e046d0f2.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/lazy",component:()=>e(()=>import("./zh-CN.47f12075.js"),["assets/zh-CN.47f12075.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/list",component:()=>e(()=>import("./en-US.2dfd4fe0.js"),["assets/en-US.2dfd4fe0.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/list",component:()=>e(()=>import("./zh-CN.bc66810f.js"),["assets/zh-CN.bc66810f.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/loading",component:()=>e(()=>import("./en-US.39defeb6.js"),["assets/en-US.39defeb6.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/loading",component:()=>e(()=>import("./zh-CN.a6c333a5.js"),["assets/zh-CN.a6c333a5.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/locale",component:()=>e(()=>import("./en-US.f5dbe4d9.js"),["assets/en-US.f5dbe4d9.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/locale",component:()=>e(()=>import("./zh-CN.47ad8fa3.js"),["assets/zh-CN.47ad8fa3.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/menu",component:()=>e(()=>import("./en-US.c4af2bd0.js"),["assets/en-US.c4af2bd0.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/menu",component:()=>e(()=>import("./zh-CN.2fa2483f.js"),["assets/zh-CN.2fa2483f.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/option",component:()=>e(()=>import("./zh-CN.20d87648.js"),["assets/zh-CN.20d87648.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/pagination",component:()=>e(()=>import("./en-US.496a26e4.js"),["assets/en-US.496a26e4.js","assets/Disabled.c35884b8.js","assets/Disabled.f4d0d448.css","assets/index.7a398a1e.js","assets/index.b5f371d1.css","assets/index.d8c43bb8.js","assets/index.e19f596b.css","assets/vendor.cfbfc887.js","assets/elements.0f1b5e0a.js","assets/shared.5973ad73.js","assets/zIndex.a6f89f9c.js","assets/index.20a388b7.js","assets/index.2bc3e789.css","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/index.a43e0611.js","assets/index.2e8ee155.css","assets/index.f6a80b23.js","assets/index.7f4826e2.css","assets/index.8837a509.js","assets/index.2aae158e.css","assets/provide.6a63a4bb.js","assets/provide.0d9a5195.css","assets/components.092cc01a.js","assets/en-US.f8ac739f.js"])},{path:"/zh-CN/pagination",component:()=>e(()=>import("./zh-CN.244b251a.js"),["assets/zh-CN.244b251a.js","assets/Disabled.c35884b8.js","assets/Disabled.f4d0d448.css","assets/index.7a398a1e.js","assets/index.b5f371d1.css","assets/index.d8c43bb8.js","assets/index.e19f596b.css","assets/vendor.cfbfc887.js","assets/elements.0f1b5e0a.js","assets/shared.5973ad73.js","assets/zIndex.a6f89f9c.js","assets/index.20a388b7.js","assets/index.2bc3e789.css","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/index.a43e0611.js","assets/index.2e8ee155.css","assets/index.f6a80b23.js","assets/index.7f4826e2.css","assets/index.8837a509.js","assets/index.2aae158e.css","assets/provide.6a63a4bb.js","assets/provide.0d9a5195.css","assets/components.092cc01a.js","assets/en-US.f8ac739f.js"])},{path:"/en-US/picker",component:()=>e(()=>import("./en-US.2cf2ebed.js"),["assets/en-US.2cf2ebed.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/picker",component:()=>e(()=>import("./zh-CN.fdb5ace2.js"),["assets/zh-CN.fdb5ace2.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/popup",component:()=>e(()=>import("./en-US.f1b8cdb2.js"),["assets/en-US.f1b8cdb2.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/popup",component:()=>e(()=>import("./zh-CN.b4cf42c0.js"),["assets/zh-CN.b4cf42c0.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/progress",component:()=>e(()=>import("./en-US.d575beb7.js"),["assets/en-US.d575beb7.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/progress",component:()=>e(()=>import("./zh-CN.0963019b.js"),["assets/zh-CN.0963019b.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/pull-refresh",component:()=>e(()=>import("./en-US.a5bba33e.js"),["assets/en-US.a5bba33e.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/pull-refresh",component:()=>e(()=>import("./zh-CN.f30d6ee7.js"),["assets/zh-CN.f30d6ee7.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/radio",component:()=>e(()=>import("./zh-CN.bbbaf2a0.js"),["assets/zh-CN.bbbaf2a0.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/radio-group",component:()=>e(()=>import("./en-US.5a9a33e9.js"),["assets/en-US.5a9a33e9.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/radio-group",component:()=>e(()=>import("./zh-CN.51b732d1.js"),["assets/zh-CN.51b732d1.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/rate",component:()=>e(()=>import("./en-US.1db0b1c2.js"),["assets/en-US.1db0b1c2.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/rate",component:()=>e(()=>import("./zh-CN.354fdd29.js"),["assets/zh-CN.354fdd29.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/ripple",component:()=>e(()=>import("./en-US.737c4210.js"),["assets/en-US.737c4210.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/ripple",component:()=>e(()=>import("./zh-CN.256e9d2f.js"),["assets/zh-CN.256e9d2f.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/row",component:()=>e(()=>import("./en-US.3d917bf3.js"),["assets/en-US.3d917bf3.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/row",component:()=>e(()=>import("./zh-CN.21c8487f.js"),["assets/zh-CN.21c8487f.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/select",component:()=>e(()=>import("./en-US.1b787992.js"),["assets/en-US.1b787992.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/select",component:()=>e(()=>import("./zh-CN.3b703526.js"),["assets/zh-CN.3b703526.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/skeleton",component:()=>e(()=>import("./en-US.b4453643.js"),["assets/en-US.b4453643.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/skeleton",component:()=>e(()=>import("./zh-CN.6bc7b55b.js"),["assets/zh-CN.6bc7b55b.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/slider",component:()=>e(()=>import("./en-US.78a7cf0b.js"),["assets/en-US.78a7cf0b.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/slider",component:()=>e(()=>import("./zh-CN.e603632f.js"),["assets/zh-CN.e603632f.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/snackbar",component:()=>e(()=>import("./en-US.55ff05dd.js"),["assets/en-US.55ff05dd.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/snackbar",component:()=>e(()=>import("./zh-CN.83d18547.js"),["assets/zh-CN.83d18547.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/step",component:()=>e(()=>import("./zh-CN.8a0bf906.js"),["assets/zh-CN.8a0bf906.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/steps",component:()=>e(()=>import("./en-US.ac21fd18.js"),["assets/en-US.ac21fd18.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/steps",component:()=>e(()=>import("./zh-CN.179441e4.js"),["assets/zh-CN.179441e4.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/sticky",component:()=>e(()=>import("./en-US.4fdf6fb6.js"),["assets/en-US.4fdf6fb6.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/sticky",component:()=>e(()=>import("./zh-CN.4e20de33.js"),["assets/zh-CN.4e20de33.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/style-provider",component:()=>e(()=>import("./en-US.5bc2fa8b.js"),["assets/en-US.5bc2fa8b.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/style-provider",component:()=>e(()=>import("./zh-CN.72ca4ed7.js"),["assets/zh-CN.72ca4ed7.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/styles",component:()=>e(()=>import("./en-US.cad236b5.js"),["assets/en-US.cad236b5.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/styles",component:()=>e(()=>import("./zh-CN.64ce1bfb.js"),["assets/zh-CN.64ce1bfb.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/swipe",component:()=>e(()=>import("./en-US.dc0c57b6.js"),["assets/en-US.dc0c57b6.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/swipe",component:()=>e(()=>import("./zh-CN.d608c919.js"),["assets/zh-CN.d608c919.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/swipe-item",component:()=>e(()=>import("./zh-CN.0a774dae.js"),["assets/zh-CN.0a774dae.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/switch",component:()=>e(()=>import("./en-US.84b64d2c.js"),["assets/en-US.84b64d2c.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/switch",component:()=>e(()=>import("./zh-CN.59cd3d6e.js"),["assets/zh-CN.59cd3d6e.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/tab",component:()=>e(()=>import("./zh-CN.68e80ebc.js"),["assets/zh-CN.68e80ebc.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/tab-item",component:()=>e(()=>import("./zh-CN.cff566ed.js"),["assets/zh-CN.cff566ed.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/table",component:()=>e(()=>import("./en-US.81e3d611.js"),["assets/en-US.81e3d611.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/table",component:()=>e(()=>import("./zh-CN.3a162b7f.js"),["assets/zh-CN.3a162b7f.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/tabs",component:()=>e(()=>import("./en-US.b3996fc7.js"),["assets/en-US.b3996fc7.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/tabs",component:()=>e(()=>import("./zh-CN.59342501.js"),["assets/zh-CN.59342501.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/tabs-items",component:()=>e(()=>import("./zh-CN.ebe8bd8b.js"),["assets/zh-CN.ebe8bd8b.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/time-picker",component:()=>e(()=>import("./en-US.681462a5.js"),["assets/en-US.681462a5.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/time-picker",component:()=>e(()=>import("./zh-CN.28722e0a.js"),["assets/zh-CN.28722e0a.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/uploader",component:()=>e(()=>import("./en-US.673f25d7.js"),["assets/en-US.673f25d7.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/uploader",component:()=>e(()=>import("./zh-CN.1f02daa4.js"),["assets/zh-CN.1f02daa4.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/browserAdaptation",component:()=>e(()=>import("./browserAdaptation.en-US.c072c5d6.js"),["assets/browserAdaptation.en-US.c072c5d6.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/browserAdaptation",component:()=>e(()=>import("./browserAdaptation.zh-CN.bd210587.js"),["assets/browserAdaptation.zh-CN.bd210587.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/cli",component:()=>e(()=>import("./cli.en-US.4edf9758.js"),["assets/cli.en-US.4edf9758.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/cli",component:()=>e(()=>import("./cli.zh-CN.68d899ac.js"),["assets/cli.zh-CN.68d899ac.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/customTheme",component:()=>e(()=>import("./customTheme.en-US.9716b7c5.js"),["assets/customTheme.en-US.9716b7c5.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/customTheme",component:()=>e(()=>import("./customTheme.zh-CN.6c0a5681.js"),["assets/customTheme.zh-CN.6c0a5681.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/home",component:()=>e(()=>import("./home.en-US.bef0b094.js"),["assets/home.en-US.bef0b094.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/home",component:()=>e(()=>import("./home.zh-CN.a5672d55.js"),["assets/home.zh-CN.a5672d55.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/ide",component:()=>e(()=>import("./ide.en-US.47c58d25.js"),["assets/ide.en-US.47c58d25.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/ide",component:()=>e(()=>import("./ide.zh-CN.f0838be8.js"),["assets/ide.zh-CN.f0838be8.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/importOnDemand",component:()=>e(()=>import("./importOnDemand.en-US.8925583f.js"),["assets/importOnDemand.en-US.8925583f.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/importOnDemand",component:()=>e(()=>import("./importOnDemand.zh-CN.3004a061.js"),["assets/importOnDemand.zh-CN.3004a061.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/openSourceGuide",component:()=>e(()=>import("./openSourceGuide.en-US.618c105b.js"),["assets/openSourceGuide.en-US.618c105b.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/openSourceGuide",component:()=>e(()=>import("./openSourceGuide.zh-CN.46cadb6f.js"),["assets/openSourceGuide.zh-CN.46cadb6f.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/en-US/quickstart",component:()=>e(()=>import("./quickstart.en-US.79478a07.js"),["assets/quickstart.en-US.79478a07.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])},{path:"/zh-CN/quickstart",component:()=>e(()=>import("./quickstart.zh-CN.06862a03.js"),["assets/quickstart.zh-CN.06862a03.js","assets/IconSfc.29808136.js","assets/IconSfc.f6c0a94d.css","assets/vendor.cfbfc887.js"])}];function ke(){let o;const _=s(r,"themes.color-progress-track"),n=s(r,"themes.color-progress"),t=$({style:{position:"fixed",width:"100%",left:0,top:0,zIndex:10086},trackColor:_,color:n,lineWidth:3,value:0}),m=()=>{o=window.setTimeout(()=>{if(t.value>=95)return;let d=Math.random();t.value<70&&(d=Math.round(5*Math.random())),t.value+=d,m()},200)},i=()=>{t.value=0,setTimeout(()=>t.color=n,200),m()},p=()=>{t.value=100,setTimeout(()=>t.color=_,300),window.clearTimeout(o)};return W(J,t),{start:i,end:p}}const we=s(r,"defaultLanguage"),B=s(r,"pc.redirect"),Me=s(r,"mobile.redirect");B&&x.push({path:"/:pathMatch(.*)*",redirect:`/${we}${B}`});const z=pe({history:se(),routes:x});let D=!0;const{start:$e,end:xe}=ke();z.beforeEach((o,_)=>{if(o.path===_.path)return!1;D=!1,setTimeout(()=>!D&&$e(),200),window._hmt&&o.path&&window._hmt.push(["_trackPageview",`/#${o.fullPath}`])});z.afterEach(()=>{D=!0,xe()});Object.defineProperty(window,"onMobileRouteChange",{value:(o,_,n)=>{if(o===Me){z.replace(`/${_}/${n}`);return}z.replace(`/${_}${o}`)}});ce(ye).use(z).use(K).use(Q).use(X).mount("#app");
