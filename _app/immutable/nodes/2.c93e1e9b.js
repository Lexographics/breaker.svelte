import{s as de,n as De,o as Se,b as ve,r as qe,c as Ae,u as Ne,g as Be,d as ze,i as Re,e as Ie}from"../chunks/scheduler.e108d1fd.js";import{S as he,i as _e,s as D,e as Te,c as I,a as k,f as o,g as w,m as te,h as C,j as T,n as ne,k as p,y as E,z as ee,o as Me,l as d,d as N,t as B,r as H,A as me,u as F,v as O,w as G}from"../chunks/index.93bb20df.js";import{w as Ve}from"../chunks/index.0378bb41.js";function Ue(n){let e,t,a,_,i;return{c(){e=w("a"),t=te(n[3]),this.h()},l(s){e=C(s,"A",{class:!0,href:!0,draggable:!0});var c=T(e);t=ne(c,n[3]),c.forEach(o),this.h()},h(){p(e,"class",a="type-"+n[1]+" svelte-161li8y"),p(e,"href",n[0]),p(e,"draggable","false")},m(s,c){k(s,e,c),E(e,t),n[8](e),_||(i=ee(e,"click",n[5]),_=!0)},p(s,c){c&8&&Me(t,s[3]),c&2&&a!==(a="type-"+s[1]+" svelte-161li8y")&&p(e,"class",a),c&1&&p(e,"href",s[0])},d(s){s&&o(e),n[8](null),_=!1,i()}}}function je(n){let e,t,a,_;return{c(){e=w("input"),this.h()},l(i){e=C(i,"INPUT",{class:!0,type:!0}),this.h()},h(){p(e,"class",t="type-"+n[1]+" svelte-161li8y"),p(e,"type","submit"),e.value=n[3]},m(i,s){k(i,e,s),n[7](e),a||(_=[ee(e,"click",n[5]),ee(e,"submit",n[5])],a=!0)},p(i,s){s&2&&t!==(t="type-"+i[1]+" svelte-161li8y")&&p(e,"class",t),s&8&&(e.value=i[3])},d(i){i&&o(e),n[7](null),a=!1,qe(_)}}}function He(n){let e,t;function a(s,c){return s[2]?je:Ue}let _=a(n),i=_(n);return{c(){i.c(),e=D(),t=Te()},l(s){i.l(s),e=I(s),t=Te()},m(s,c){i.m(s,c),k(s,e,c),k(s,t,c)},p(s,[c]){_===(_=a(s))&&i?i.p(s,c):(i.d(1),i=_(s),i&&(i.c(),i.m(e.parentNode,e)))},i:De,o:De,d(s){s&&(o(e),o(t)),i.d(s)}}}function Fe(n,e,t){let{href:a="//:;"}=e,{onclick:_=function(l){}}=e,{type:i="primary"}=e,{submit:s=!1}=e,{value:c=""}=e;function v(l){a==="//:;"&&l.preventDefault(),_(l)}let f=null;Se(async()=>{f==null||f.addEventListener("click",function(l){let m=l.clientX-l.target.offsetLeft,u=l.clientY-l.target.offsetTop,g=document.createElement("span");g.classList.add("ripple"),g.style.left=m+"px",g.style.top=u+"px",this.appendChild(g),setTimeout(()=>{g.remove()},500)})});function b(l){ve[l?"unshift":"push"](()=>{f=l,t(4,f)})}function y(l){ve[l?"unshift":"push"](()=>{f=l,t(4,f)})}return n.$$set=l=>{"href"in l&&t(0,a=l.href),"onclick"in l&&t(6,_=l.onclick),"type"in l&&t(1,i=l.type),"submit"in l&&t(2,s=l.submit),"value"in l&&t(3,c=l.value)},[a,i,s,c,f,v,_,b,y]}class $ extends he{constructor(e){super(),_e(this,e,Fe,He,de,{href:0,onclick:6,type:1,submit:2,value:3})}}function Oe(n){let e,t,a,_,i,s,c,v,f,b;const y=n[5].default,l=Ae(y,n,n[4],null);return{c(){e=w("div"),t=w("label"),a=w("input"),_=D(),i=w("div"),s=D(),c=w("p"),l&&l.c(),this.h()},l(m){e=C(m,"DIV",{class:!0});var u=T(e);t=C(u,"LABEL",{class:!0,for:!0});var g=T(t);a=C(g,"INPUT",{type:!0,id:!0,class:!0}),_=I(g),i=C(g,"DIV",{style:!0,class:!0}),T(i).forEach(o),g.forEach(o),s=I(u),c=C(u,"P",{});var V=T(c);l&&l.l(V),V.forEach(o),u.forEach(o),this.h()},h(){a.checked=n[2],p(a,"type","checkbox"),p(a,"id","checkbox"),p(a,"class","svelte-f5bbqe"),d(i,"--bg-color",n[0]),p(i,"class","slider round svelte-f5bbqe"),p(t,"class","switch svelte-f5bbqe"),p(t,"for","checkbox"),p(e,"class","checkbox blur svelte-f5bbqe")},m(m,u){k(m,e,u),E(e,t),E(t,a),E(t,_),E(t,i),E(e,s),E(e,c),l&&l.m(c,null),n[6](e),v=!0,f||(b=ee(a,"click",function(){Re(n[1])&&n[1].apply(this,arguments)}),f=!0)},p(m,[u]){n=m,(!v||u&4)&&(a.checked=n[2]),(!v||u&1)&&d(i,"--bg-color",n[0]),l&&l.p&&(!v||u&16)&&Ne(l,y,n,n[4],v?ze(y,n[4],u,null):Be(n[4]),null)},i(m){v||(N(l,m),v=!0)},o(m){B(l,m),v=!1},d(m){m&&o(e),l&&l.d(m),n[6](null),f=!1,b()}}}function Ge(n,e,t){let{$$slots:a={},$$scope:_}=e,{backgroundColor:i="#512DA8"}=e,{onClicked:s=function(b){}}=e,{checked:c=!1}=e,v=null;Se(()=>{v.classList.remove("blur")});function f(b){ve[b?"unshift":"push"](()=>{v=b,t(3,v)})}return n.$$set=b=>{"backgroundColor"in b&&t(0,i=b.backgroundColor),"onClicked"in b&&t(1,s=b.onClicked),"checked"in b&&t(2,c=b.checked),"$$scope"in b&&t(4,_=b.$$scope)},[i,s,c,v,_,a,f]}class Je extends he{constructor(e){super(),_e(this,e,Ge,Oe,de,{backgroundColor:0,onClicked:1,checked:2})}}function We(n){let e,t,a,_,i,s,c,v,f,b,y;const l=n[8].default,m=Ae(l,n,n[7],null);return{c(){e=w("div"),t=w("input"),_=D(),i=w("label"),m&&m.c(),s=D(),c=w("div"),v=te(n[4]),this.h()},l(u){e=C(u,"DIV",{class:!0});var g=T(e);t=C(g,"INPUT",{type:!0,placeholder:!0,name:!0,id:!0,draggable:!0,class:!0}),_=I(g),i=C(g,"LABEL",{draggable:!0,for:!0,class:!0});var V=T(i);m&&m.l(V),V.forEach(o),s=I(g),c=C(g,"DIV",{class:!0});var A=T(c);v=ne(A,n[4]),A.forEach(o),g.forEach(o),this.h()},h(){p(t,"type",n[0]),p(t,"placeholder",n[3]),p(t,"name",n[1]),p(t,"id",a=n[2]===""?n[1]:n[2]),p(t,"draggable","false"),p(t,"class","svelte-1nvhy47"),p(i,"draggable","false"),p(i,"for","name"),p(i,"class","svelte-1nvhy47"),p(c,"class","error svelte-1nvhy47"),p(e,"class","text-input svelte-1nvhy47")},m(u,g){k(u,e,g),E(e,t),E(e,_),E(e,i),m&&m.m(i,null),E(e,s),E(e,c),E(c,v),f=!0,b||(y=ee(t,"input",n[5]),b=!0)},p(u,[g]){(!f||g&1)&&p(t,"type",u[0]),(!f||g&8)&&p(t,"placeholder",u[3]),(!f||g&2)&&p(t,"name",u[1]),(!f||g&6&&a!==(a=u[2]===""?u[1]:u[2]))&&p(t,"id",a),m&&m.p&&(!f||g&128)&&Ne(m,l,u,u[7],f?ze(l,u[7],g,null):Be(u[7]),null),(!f||g&16)&&Me(v,u[4])},i(u){f||(N(m,u),f=!0)},o(u){B(m,u),f=!1},d(u){u&&o(e),m&&m.d(u),b=!1,y()}}}function Xe(n,e,t){let{$$slots:a={},$$scope:_}=e,{type:i="input"}=e,{name:s=""}=e,{id:c=""}=e,{placeholder:v=""}=e,{errorText:f=""}=e,{onChange:b=function(l){}}=e;function y(l){b(l)}return n.$$set=l=>{"type"in l&&t(0,i=l.type),"name"in l&&t(1,s=l.name),"id"in l&&t(2,c=l.id),"placeholder"in l&&t(3,v=l.placeholder),"errorText"in l&&t(4,f=l.errorText),"onChange"in l&&t(6,b=l.onChange),"$$scope"in l&&t(7,_=l.$$scope)},[i,s,c,v,f,y,b,_,a]}class Le extends he{constructor(e){super(),_e(this,e,Xe,We,de,{type:0,name:1,id:2,placeholder:3,errorText:4,onChange:6})}}function Pe(n,e){return e?"":n+" cannot be empty"}function Ye(n){return function(e,t){return t&&t.length>=n?"":e+" cannot be less than "+n+" characters"}}function Ke(n){return function(e,t){return t&&t.length<=n?"":e+" cannot be greater than "+n+" characters"}}function Qe(n,e){return function(t,a){return a&&!n.test(a)?"":e}}function Ze(n){let e;return{c(){e=te("Dark Mode")},l(t){e=ne(t,"Dark Mode")},m(t,a){k(t,e,a)},d(t){t&&o(e)}}}function xe(n){let e;return{c(){e=te("Username")},l(t){e=ne(t,"Username")},m(t,a){k(t,e,a)},d(t){t&&o(e)}}}function $e(n){let e;return{c(){e=te("Password")},l(t){e=ne(t,"Password")},m(t,a){k(t,e,a)},d(t){t&&o(e)}}}function et(n){let e,t="breaker.svelte widgets",a,_,i,s,c="buttons",v,f,b,y,l,m,u,g,V,A,X,Y,J,le,re,se,L,ye="switch",ie,z,M,ae,fe,ue,P,ke="text input",oe,q,S,x,ge,R,be,U,pe,W,ce;return y=new $({props:{type:"primary",value:"Primary"}}),u=new $({props:{type:"warning",value:"Warning"}}),A=new $({props:{type:"error",value:"Error"}}),J=new $({props:{type:"success",value:"Success"}}),M=new Je({props:{checked:n[0],onClicked:tt,$$slots:{default:[Ze]},$$scope:{ctx:n}}}),R=new Le({props:{errorText:n[1],onChange:n[6],name:"name",placeholder:"John Doe",type:"tel",$$slots:{default:[xe]},$$scope:{ctx:n}}}),U=new Le({props:{errorText:n[2],onChange:n[6],name:"password",placeholder:"********",type:"password",$$slots:{default:[$e]},$$scope:{ctx:n}}}),W=new $({props:{type:"success",submit:!0,value:"Submit",onclick:n[5]}}),{c(){e=w("h1"),e.textContent=t,a=D(),_=w("br"),i=D(),s=w("h1"),s.textContent=c,v=D(),f=w("div"),b=w("div"),H(y.$$.fragment),l=D(),m=w("div"),H(u.$$.fragment),g=D(),V=w("div"),H(A.$$.fragment),X=D(),Y=w("div"),H(J.$$.fragment),le=D(),re=w("br"),se=D(),L=w("h1"),L.textContent=ye,ie=D(),z=w("div"),H(M.$$.fragment),ae=D(),fe=w("br"),ue=D(),P=w("h1"),P.textContent=ke,oe=D(),q=w("div"),S=w("form"),x=w("span"),ge=D(),H(R.$$.fragment),be=D(),H(U.$$.fragment),pe=D(),H(W.$$.fragment),this.h()},l(r){e=C(r,"H1",{style:!0,"data-svelte-h":!0}),me(e)!=="svelte-n4z7tr"&&(e.textContent=t),a=I(r),_=C(r,"BR",{}),i=I(r),s=C(r,"H1",{style:!0,"data-svelte-h":!0}),me(s)!=="svelte-1h45al6"&&(s.textContent=c),v=I(r),f=C(r,"DIV",{style:!0,id:!0});var h=T(f);b=C(h,"DIV",{style:!0});var K=T(b);F(y.$$.fragment,K),K.forEach(o),l=I(h),m=C(h,"DIV",{style:!0});var Q=T(m);F(u.$$.fragment,Q),Q.forEach(o),g=I(h),V=C(h,"DIV",{style:!0});var Z=T(V);F(A.$$.fragment,Z),Z.forEach(o),X=I(h),Y=C(h,"DIV",{style:!0});var we=T(Y);F(J.$$.fragment,we),we.forEach(o),h.forEach(o),le=I(r),re=C(r,"BR",{}),se=I(r),L=C(r,"H1",{style:!0,"data-svelte-h":!0}),me(L)!=="svelte-1ilc5ar"&&(L.textContent=ye),ie=I(r),z=C(r,"DIV",{style:!0});var Ce=T(z);F(M.$$.fragment,Ce),Ce.forEach(o),ae=I(r),fe=C(r,"BR",{}),ue=I(r),P=C(r,"H1",{style:!0,"data-svelte-h":!0}),me(P)!=="svelte-1b0kw8o"&&(P.textContent=ke),oe=I(r),q=C(r,"DIV",{style:!0});var Ee=T(q);S=C(Ee,"FORM",{action:!0,method:!0});var j=T(S);x=C(j,"SPAN",{id:!0}),T(x).forEach(o),ge=I(j),F(R.$$.fragment,j),be=I(j),F(U.$$.fragment,j),pe=I(j),F(W.$$.fragment,j),j.forEach(o),Ee.forEach(o),this.h()},h(){d(e,"text-align","center"),d(e,"text-transform","uppercase"),d(e,"margin","2rem"),d(e,"color","#b020c9"),d(e,"font-size","3rem"),d(e,"font-weight","500"),d(s,"text-align","center"),d(s,"text-transform","uppercase"),d(s,"margin","2rem"),d(s,"color","#b020c9"),d(s,"font-size","3rem"),d(s,"font-weight","500"),d(b,"padding","1rem"),d(m,"padding","1rem"),d(V,"padding","1rem"),d(Y,"padding","1rem"),d(f,"display","flex"),d(f,"flex-direction","row"),d(f,"align-items","center"),d(f,"justify-content","center"),d(f,"flex-wrap","wrap"),p(f,"id","buttons"),d(L,"text-align","center"),d(L,"text-transform","uppercase"),d(L,"margin","2rem"),d(L,"color","#b020c9"),d(L,"font-size","3rem"),d(L,"font-weight","500"),d(z,"display","flex"),d(z,"justify-content","center"),d(P,"text-align","center"),d(P,"text-transform","uppercase"),d(P,"margin","2rem"),d(P,"color","#b020c9"),d(P,"font-size","3rem"),d(P,"font-weight","500"),p(x,"id","error"),p(S,"action","/breaker.svelte"),p(S,"method","get"),d(q,"width","50%"),d(q,"margin-left","25%")},m(r,h){k(r,e,h),k(r,a,h),k(r,_,h),k(r,i,h),k(r,s,h),k(r,v,h),k(r,f,h),E(f,b),O(y,b,null),E(f,l),E(f,m),O(u,m,null),E(f,g),E(f,V),O(A,V,null),E(f,X),E(f,Y),O(J,Y,null),k(r,le,h),k(r,re,h),k(r,se,h),k(r,L,h),k(r,ie,h),k(r,z,h),O(M,z,null),k(r,ae,h),k(r,fe,h),k(r,ue,h),k(r,P,h),k(r,oe,h),k(r,q,h),E(q,S),E(S,x),E(S,ge),O(R,S,null),E(S,be),O(U,S,null),E(S,pe),O(W,S,null),ce=!0},p(r,[h]){const K={};h&1&&(K.checked=r[0]),h&256&&(K.$$scope={dirty:h,ctx:r}),M.$set(K);const Q={};h&2&&(Q.errorText=r[1]),h&256&&(Q.$$scope={dirty:h,ctx:r}),R.$set(Q);const Z={};h&4&&(Z.errorText=r[2]),h&256&&(Z.$$scope={dirty:h,ctx:r}),U.$set(Z)},i(r){ce||(N(y.$$.fragment,r),N(u.$$.fragment,r),N(A.$$.fragment,r),N(J.$$.fragment,r),N(M.$$.fragment,r),N(R.$$.fragment,r),N(U.$$.fragment,r),N(W.$$.fragment,r),ce=!0)},o(r){B(y.$$.fragment,r),B(u.$$.fragment,r),B(A.$$.fragment,r),B(J.$$.fragment,r),B(M.$$.fragment,r),B(R.$$.fragment,r),B(U.$$.fragment,r),B(W.$$.fragment,r),ce=!1},d(r){r&&(o(e),o(a),o(_),o(i),o(s),o(v),o(f),o(le),o(re),o(se),o(L),o(ie),o(z),o(ae),o(fe),o(ue),o(P),o(oe),o(q)),G(y),G(u),G(A),G(J),G(M),G(R),G(U),G(W)}}}function tt(n){n.target.checked?(document.documentElement.setAttribute("data-theme","dark"),sessionStorage.setItem("theme-preference","dark")):(document.documentElement.setAttribute("data-theme","light"),sessionStorage.removeItem("theme-preference"))}function nt(n,e,t){let a,_,i=!1;i=sessionStorage.getItem("theme-preference")==="dark";let s=Ve("");Ie(n,s,y=>t(1,a=y));let c=Ve("");Ie(n,c,y=>t(2,_=y));function v(y){let l={Name:{err:s,func:[Pe,Qe(/^bobby fischer$/i,"Name cannot be Bobby Fischer")]},Password:{err:c,func:[Pe,Ye(8),Ke(10)]}},m=!0;for(let[u,g]of Object.entries(l)){let V=y.target.form.elements[u.toLowerCase()];if(!V){g.err.set("Element not found"),m=!1;continue}for(let A of g.func){let X=A(u,V.value);if(g.err.set(X),X!==""){m=!1;break}}}return m}function f(y){v(y)&&y.target.form.submit()}function b(y){v(y)}return[i,a,_,s,c,f,b]}class it extends he{constructor(e){super(),_e(this,e,nt,et,de,{})}}export{it as component};
