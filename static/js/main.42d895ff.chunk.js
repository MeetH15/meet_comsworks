(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{49:function(e,n,t){e.exports=t(75)},54:function(e,n,t){},61:function(e,n,t){},64:function(e,n,t){},70:function(e,n,t){},71:function(e,n,t){},75:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(30),i=t.n(c),o=(t(54),t(9)),l=t.n(o),u=t(8),s=t(14),p=t(18),d=t(19),m=t(21),f=t(20),b=t(22),h=t(6),v=(t(61),t(7)),g=t(17),E=t(5),O=Object(E.a)([function(e){return e.directory}],function(e){return e.sections}),j=t(1),y=t(2);function x(){var e=Object(j.a)(["\n  font-weight: lighter;\n  font-size: 16px;\n"]);return x=function(){return e},e}function w(){var e=Object(j.a)(["\n  font-weight: bold;\n  margin-bottom: 6px;\n  font-size: 22px;\n  color: #4a4a4a;\n"]);return w=function(){return e},e}function k(){var e=Object(j.a)(["\n  height: 90px;\n  padding: 0 25px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  background-color: white;\n  opacity: 0.7;\n  position: absolute;\n"]);return k=function(){return e},e}function C(){var e=Object(j.a)(["\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-image: ",";\n"]);return C=function(){return e},e}function I(){var e=Object(j.a)(["\n\theight: ",";\n\tmin-width: 30%;\n\toverflow: hidden;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder: 1px solid black;\n\tmargin: 0 7.5px 15px;\n\toverflow: hidden;\n\t&:hover {\n\t\tcursor: pointer;\n\t\t& .background-image {\n\t\t\ttransform: scale(1.1);\n\t\t\ttransition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);\n\t\t}\n\t\t& .content {\n\t\t\topacity: 0.9;\n\t\t}\n\t}\n\t&:first-child {\n    margin-right: 7.5px;\n  }\n  &:last-child {\n    margin-left: 7.5px;\n  }\n"]);return I=function(){return e},e}var L=y.b.div(I(),function(e){return e.size?"380px":"240px"}),N=y.b.div(C(),function(e){var n=e.imageUrl;return"url(".concat(n,")")}),U=y.b.div(k()),S=y.b.span(w()),T=y.b.span(x()),A=Object(v.g)(function(e){var n=e.title,t=e.imageUrl,r=e.size,c=e.history,i=e.linkUrl,o=e.match;return a.a.createElement(L,{size:r,onClick:function(){return c.push("".concat(o.url).concat(i))}},a.a.createElement(N,{className:"background-image",imageUrl:t}),a.a.createElement(U,{className:"content"},a.a.createElement(S,null,n.toUpperCase()),a.a.createElement(T,null,"SHOP NOW")))});function _(){var e=Object(j.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]);return _=function(){return e},e}var R=y.b.div(_()),M=Object(E.b)({sections:O}),P=Object(h.b)(M)(function(e){var n=e.sections;return a.a.createElement(R,null,n.map(function(e){var n=e.id,t=Object(g.a)(e,["id"]);return a.a.createElement(A,Object.assign({key:n},t))}))});function z(){var e=Object(j.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px 40px;\n"]);return z=function(){return e},e}var D=y.b.div(z());function G(e){e.history;return a.a.createElement(D,null,a.a.createElement(P,null))}var q=Object(E.a)([function(e){return e.shop}],function(e){return e.collections}),H=Object(E.a)([q],function(e){return e?Object.keys(e).map(function(n){return e[n]}):[]}),V={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",REMOVE_ITEM:"REMOVE_ITEM"},F=function(){return{type:V.TOGGLE_CART_HIDDEN}},B=function(e){return{type:V.ADD_ITEM,payload:e}};function W(){var e=Object(j.a)(["\nbackground-color: black;\ncolor: white;\n&:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n    transition: all 0.3s ease;\n}\n"]);return W=function(){return e},e}function K(){var e=Object(j.a)(["\n        background-color: #4285f4;\n        color: white;\n\n        &:hover {\n            background-color: white;\n            border: 1px solid #4285f4;\n            color:black;\n        }\n"]);return K=function(){return e},e}function J(){var e=Object(j.a)(["\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n        &:hover {\n            background-color: black;\n            color: white;\n            border: none;\n    }"]);return J=function(){return e},e}function Q(){var e=Object(j.a)(['\n    min-width: 165px;\n    width: auto;\n    height: 50px;\n    letter-spacing: 0.5px;\n    line-height: 50px;\n    padding: 0 35px 0 35px;\n    font-size: 15px;\n    text-transform: uppercase;\n    font-family: "Open Sans Condensed";\n    font-weight: bolder;\n    border: none;\n    cursor: pointer;\n    border-radius: 3px;\n    display: flex;\n    justify-content: center;\n    ',"\n"]);return Q=function(){return e},e}var Z=y.b.button(Q(),function(e){return e.isGoogleSignIn?X:e.inverted?Y:$}),Y=Object(y.a)(J()),X=Object(y.a)(K()),$=Object(y.a)(W());function ee(e){var n=e.children,t=Object(g.a)(e,["children"]);return a.a.createElement(Z,t,n)}function ne(){var e=Object(j.a)(["\n  width: 10%;\n  text-align: right;\n"]);return ne=function(){return e},e}function te(){var e=Object(j.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n"]);return te=function(){return e},e}function re(){var e=Object(j.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"]);return re=function(){return e},e}function ae(){var e=Object(j.a)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"]);return ae=function(){return e},e}function ce(){var e=Object(j.a)(["\n  width: 80%;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n"]);return ce=function(){return e},e}function ie(){var e=Object(j.a)(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n"]);return ie=function(){return e},e}var oe=y.b.div(ie()),le=Object(y.b)(ee)(ce()),ue=y.b.div(ae(),function(e){var n=e.imageUrl;return"url(".concat(n,")")}),se=y.b.div(re()),pe=y.b.span(te()),de=y.b.span(ne()),me=Object(h.b)(null,function(e){return{addItem:function(n){return e(B(n))}}})(function(e){var n=e.item,t=e.addItem,r=n.name,c=n.price,i=n.imageUrl;return a.a.createElement(oe,null,a.a.createElement(ue,{className:"image",imageUrl:i}),a.a.createElement(se,null,a.a.createElement(pe,null,r),a.a.createElement(de,null,c)),a.a.createElement(le,{onClick:function(){return t(n)},inverted:!0},"Add to cart"))});t(64);var fe=Object(h.b)(function(e,n){return{collection:(t=n.match.params.collectionId,Object(E.a)([q],function(e){return e?e[t]:null}))(e)};var t})(function(e){var n=e.match,t=e.collection,r=t.title,c=t.items;return console.log(n.params),a.a.createElement("div",{className:"collection-page"},a.a.createElement("h2",{className:"title"},r),a.a.createElement("div",{className:"items"},c.map(function(e){return a.a.createElement(me,{key:e.id,item:e})})))}),be=t(28),he=t.n(be),ve=(t(65),t(68),function(){var e=Object(s.a)(l.a.mark(function e(n,t){var r,a,c,i;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return r=Ee.doc("users/".concat(n.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return a=n.displayName,c=n.email,i=new Date,e.prev=9,e.next=12,r.set(Object(u.a)({displayName:a,email:c,createdAt:i},t));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}},e,null,[[9,14]])}));return function(n,t){return e.apply(this,arguments)}}());he.a.initializeApp({apiKey:"AIzaSyAfHq_LAVL4gIH8mguL0Dragp1aWFQpWlg",authDomain:"ecom-db-f8713.firebaseapp.com",databaseURL:"https://ecom-db-f8713.firebaseio.com",projectId:"ecom-db-f8713",storageBucket:"ecom-db-f8713.appspot.com",messagingSenderId:"39362193920",appId:"1:39362193920:web:31d9128b6ebb77dc5d86e5",measurementId:"G-E4NJ30JCLD"});var ge=he.a.auth(),Ee=he.a.firestore(),Oe=new he.a.auth.GoogleAuthProvider;Oe.setCustomParameters({prompt:"select_account"});var je=function(){ge.signInWithPopup(Oe)};he.a;function ye(){var e=Object(j.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return ye=function(){return e},e}function xe(){var e=Object(j.a)(["\n  font-size: 28px;\n  margin-bottom: 25px;\n  cursor: pointer;\n  &:hover {\n    color: grey;\n  }\n"]);return xe=function(){return e},e}function we(){var e=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n"]);return we=function(){return e},e}var ke=y.b.div(we()),Ce=y.b.h1(xe()),Ie=y.b.div(ye()),Le=Object(v.g)(function(e){var n=e.title,t=e.items,r=e.history,c=e.match,i=e.routeName;return a.a.createElement(ke,null,a.a.createElement(Ce,{onClick:function(){return r.push("".concat(c.path,"/").concat(i))}},n.toUpperCase()),a.a.createElement(Ie,null,t.filter(function(e,n){return n<4}).map(function(e){return a.a.createElement(me,{key:e.id,item:e})})))});function Ne(){var e=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Ne=function(){return e},e}var Ue=y.b.div(Ne()),Se=Object(E.b)({collections:H}),Te=Object(h.b)(Se)(function(e){var n=e.collections;return a.a.createElement(Ue,null,n.map(function(e){var n=e.id,t=Object(g.a)(e,["id"]);return a.a.createElement(Le,Object.assign({key:n},t))}))}),Ae={UPDATE_COLLECTIONS:"UPDATE_COLLECTIONS"};function _e(){var e=Object(j.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return _e=function(){return e},e}function Re(){var e=Object(j.a)(["\n    font-size: 3rem;\n    color: black;\n    font-weight:500;\n"]);return Re=function(){return e},e}function Me(){var e=Object(j.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction:column;\n"]);return Me=function(){return e},e}var Pe=y.b.div(Me()),ze=y.b.p(Re()),De=y.b.div(_e()),Ge=function(e){return function(n){var t=n.isLoading,r=Object(g.a)(n,["isLoading"]);return t?a.a.createElement(Pe,null,a.a.createElement(ze,null,"Getting the good stuff!!"),a.a.createElement(De,null)):a.a.createElement(e,r)}},qe=Ge(Te),He=Ge(fe),Ve=function(e){function n(){var e,t;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(a)))).state={loading:!0},t.unsubscribeFromSnapshot=null,t}return Object(b.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,n=this.props.updateCollections,t=Ee.collection("collections");this.unsubscribeFromSnapshot=t.onSnapshot(function(){var t=Object(s.a)(l.a.mark(function t(r){var a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=r.docs.map(function(e){var n=e.data(),t=n.title,r=n.items;return{routeName:encodeURI(t.toLowerCase()),id:e.id,title:t,items:r}}).reduce(function(e,n){return e[n.title.toLowerCase()]=n,e},{}),n(a),e.setState({loading:!1});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}},{key:"render",value:function(){var e=this.props.match,n=this.state.loading;return a.a.createElement("div",{className:"shop-page"},a.a.createElement(v.b,{exact:!0,path:"".concat(e.path),render:function(e){return a.a.createElement(qe,Object.assign({isLoading:n},e))}}),a.a.createElement(v.b,{path:"".concat(e.path,"/:collectionId"),render:function(e){return a.a.createElement(He,Object.assign({isLoading:n},e))}}))}}]),n}(a.a.Component),Fe=Object(h.b)(null,function(e){return{updateCollections:function(n){return e({type:Ae.UPDATE_COLLECTIONS,payload:n})}}})(Ve),Be=(t(70),t(27));function We(){var e=Object(j.a)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n  &.shrink {\n    ","\n  }\n"]);return We=function(){return e},e}function Ke(){var e=Object(j.a)(["\n  background: none;\n  background-color: white;\n  color: ",";\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid ",";\n  margin: 25px 0;\n  &:focus {\n    outline: none;\n  }\n  &:focus ~ label {\n    ","\n  }\n"]);return Ke=function(){return e},e}function Je(){var e=Object(j.a)(["\n  position: relative;\n  margin: 45px 0;\n  input[type='password'] {\n    letter-spacing: 0.3em;\n  }\n"]);return Je=function(){return e},e}function Qe(){var e=Object(j.a)(["\n  top: -19px;\n  font-size: 12px;\n  color: ",";\n"]);return Qe=function(){return e},e}var Ze=Object(y.a)(Qe(),"black"),Ye=y.b.div(Je()),Xe=y.b.input(Ke(),"grey","grey",Ze),$e=y.b.label(We(),"grey",Ze),en=function(e){var n=e.handleChange,t=e.label,r=Object(g.a)(e,["handleChange","label"]);return a.a.createElement(Ye,null,a.a.createElement(Xe,Object.assign({onChange:n},r)),t?a.a.createElement($e,{className:r.value.length?"shrink":""},t):null)};function nn(){var e=Object(j.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return nn=function(){return e},e}function tn(){var e=Object(j.a)(["\n  margin: 10px 0;\n"]);return tn=function(){return e},e}function rn(){var e=Object(j.a)(["\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n"]);return rn=function(){return e},e}var an=y.b.div(rn()),cn=y.b.h2(tn()),on=y.b.div(nn()),ln=function(e){function n(e){var t;return Object(p.a)(this,n),(t=Object(m.a)(this,Object(f.a)(n).call(this,e))).handleSubmit=function(){var e=Object(s.a)(l.a.mark(function e(n){var r,a,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=t.state,a=r.email,c=r.password,e.prev=2,e.next=5,ge.signInWithEmailAndPassword(a,c);case 5:t.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[2,8]])}));return function(n){return e.apply(this,arguments)}}(),t.handleChange=function(e){var n=e.target,r=n.value,a=n.name;t.setState(Object(Be.a)({},a,r))},t.state={email:"",password:""},t}return Object(b.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement(an,null,a.a.createElement(cn,null,"I already have an account"),a.a.createElement("span",null,"Sign in with your email and password"),a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement(en,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),a.a.createElement(en,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),a.a.createElement(on,null,a.a.createElement(ee,{type:"submit"}," Sign in "),a.a.createElement(ee,{onClick:je,isGoogleSignIn:!0},"Sign in with Google"))))}}]),n}(a.a.Component);function un(){var e=Object(j.a)(["\n  margin: 10px 0;\n"]);return un=function(){return e},e}function sn(){var e=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n"]);return sn=function(){return e},e}var pn=y.b.div(sn()),dn=y.b.h2(un()),mn=function(e){function n(){var e;return Object(p.a)(this,n),(e=Object(m.a)(this,Object(f.a)(n).call(this))).handleSubmit=function(){var n=Object(s.a)(l.a.mark(function n(t){var r,a,c,i,o,u,s;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),r=e.state,a=r.displayName,c=r.email,i=r.password,o=r.confirmPassword,i===o){n.next=5;break}return alert("passwords don't match"),n.abrupt("return");case 5:return n.prev=5,n.next=8,ge.createUserWithEmailAndPassword(c,i);case 8:return u=n.sent,s=u.user,n.next=12,ve(s,{displayName:a});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(5),console.error(n.t0);case 18:case"end":return n.stop()}},n,null,[[5,15]])}));return function(e){return n.apply(this,arguments)}}(),e.handleChange=function(n){var t=n.target,r=t.name,a=t.value;e.setState(Object(Be.a)({},r,a))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(b.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){var e=this.state,n=e.displayName,t=e.email,r=e.password,c=e.confirmPassword;return a.a.createElement(pn,null,a.a.createElement(dn,null,"I do not have a account"),a.a.createElement("span",null,"Sign up with your email and password"),a.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},a.a.createElement(en,{type:"text",name:"displayName",value:n,onChange:this.handleChange,label:"Display Name",required:!0}),a.a.createElement(en,{type:"email",name:"email",value:t,onChange:this.handleChange,label:"Email",required:!0}),a.a.createElement(en,{type:"password",name:"password",value:r,onChange:this.handleChange,label:"Password",required:!0}),a.a.createElement(en,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),a.a.createElement(ee,{type:"submit"},"SIGN UP")))}}]),n}(a.a.Component);function fn(){return a.a.createElement("div",{className:"sign-in-and-sign-up"},a.a.createElement(ln,null),a.a.createElement(mn,null))}function bn(){var e=Object(j.a)(["\n  padding-left: 12px;\n  cursor: pointer;\n"]);return bn=function(){return e},e}function hn(){var e=Object(j.a)(["\n  display: flex;\n  span {\n    margin: 0 10px;\n  }\n  div {\n    cursor: pointer;\n  }\n"]);return hn=function(){return e},e}function vn(){var e=Object(j.a)(["\n  width: 23%;\n"]);return vn=function(){return e},e}function gn(){var e=Object(j.a)(["\n  width: 23%;\n  padding-right: 15px;\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]);return gn=function(){return e},e}function En(){var e=Object(j.a)(["\n  width: 100%;\n  display: flex;\n  min-height: 100px;\n  border-bottom: 1px solid darkgrey;\n  padding: 15px 0;\n  font-size: 20px;\n  align-items: center;\n"]);return En=function(){return e},e}var On=y.b.div(En()),jn=y.b.div(gn()),yn=y.b.span(vn()),xn=Object(y.b)(yn)(hn()),wn=y.b.div(bn()),kn=Object(h.b)(null,function(e){return{clearItem:function(n){return e(function(e){return{type:V.CLEAR_ITEM_FROM_CART,payload:e}}(n))},addItem:function(n){return e(B(n))},removeItem:function(n){return e(function(e){return{type:V.REMOVE_ITEM,payload:e}}(n))}}})(function(e){var n=e.cartItem,t=e.clearItem,r=e.addItem,c=e.removeItem,i=n.name,o=n.imageUrl,l=n.price,u=n.quantity;return a.a.createElement(On,null,a.a.createElement(jn,null,a.a.createElement("img",{src:o,alt:"item"})),a.a.createElement(yn,null,i),a.a.createElement(xn,null,a.a.createElement("div",{onClick:function(){return c(n)}},"\u276e"),a.a.createElement("span",null,u),a.a.createElement("div",{onClick:function(){return r(n)}},"\u276f")),a.a.createElement(yn,null,l),a.a.createElement(wn,{onClick:function(){return t(n)}},"\u2715"))}),Cn=t(45),In=t.n(Cn);function Ln(e){var n=e.price,t=100*n;return a.a.createElement(In.a,{label:"Pay Now",name:"AK Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/QaG.svg",description:"Your total is ".concat(n),amount:t,panelLabel:"Pay Now",token:function(e){console.log(e),alert("dummy payment successfull")},stripeKey:"pk_test_51Hcr59If3Hn5BLfLNdteyaTLDzz6Sf4g9CMEK21WZm7BHjEXbVLl2uqXNK4b9Gex3GBZrZTiP2aqV5QkncN7uasa001eoP4pJr"})}var Nn=function(e){return e.cart},Un=Object(E.a)([Nn],function(e){return e.cartItems}),Sn=Object(E.a)([Nn],function(e){return e.hidden}),Tn=Object(E.a)([Un],function(e){return e.reduce(function(e,n){return e+n.quantity},0)}),An=Object(E.a)([Un],function(e){return e.reduce(function(e,n){return e+n.quantity*n.price},0)});t(71);var _n=Object(E.b)({cartItems:Un,total:An}),Rn=Object(h.b)(_n)(function(e){var n=e.cartItems,t=e.total;return a.a.createElement("div",{className:"checkout-page"},a.a.createElement("div",{className:"checkout-header"},a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Products")),a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Description")),a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Quantity")),a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Price")),a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Remove"))),n.map(function(e){return a.a.createElement(kn,{key:e.id,cartItem:e})}),a.a.createElement("div",{className:"total"},a.a.createElement("span",null,"Total= $",t)),a.a.createElement("div",{className:"test-warning"},"Please use any data for address and name and email, also use ",a.a.createElement("br",null),"card number: 4242 4242 4242 4242, expiry: 02/22, cvv: 123 for dummy payment"),a.a.createElement(Ln,{price:t}))});function Mn(){return(Mn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Pn(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var zn=a.a.createElement("g",null,a.a.createElement("path",{d:"M144.852,90.67 L144.852,262.862 L127.919,273.211 L110.973,262.807 L110.973,90.803 L67.095,117.819 L67.095,265.074 L127.919,302.291 L189.258,264.809 L189.258,117.725 L144.852,90.67 L144.852,90.67 Z M127.919,0 L0,77.502 L0,224.776 L33.223,244.348 L33.223,97.06 L127.945,39.464 L222.755,96.976 L223.146,97.199 L223.104,244.128 L256,224.776 L256,77.502 L127.919,0 L127.919,0 Z",fill:"black"})),Dn=function(e){var n=e.svgRef,t=Pn(e,["svgRef"]);return a.a.createElement("svg",Mn({width:"50px",height:"39px",viewBox:"0 0 256 303",preserveAspectRatio:"xMidYMid",ref:n},t),zn)},Gn=a.a.forwardRef(function(e,n){return a.a.createElement(Dn,Mn({svgRef:n},e))});t.p;function qn(){return(qn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Hn(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var Vn=a.a.createElement("g",null),Fn=a.a.createElement("g",null),Bn=a.a.createElement("g",null),Wn=a.a.createElement("g",null),Kn=a.a.createElement("g",null),Jn=a.a.createElement("g",null),Qn=a.a.createElement("g",null),Zn=a.a.createElement("g",null),Yn=a.a.createElement("g",null),Xn=a.a.createElement("g",null),$n=a.a.createElement("g",null),et=a.a.createElement("g",null),nt=a.a.createElement("g",null),tt=a.a.createElement("g",null),rt=a.a.createElement("g",null),at=function(e){var n=e.svgRef,t=Hn(e,["svgRef"]);return a.a.createElement("svg",qn({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:n},t),a.a.createElement("g",null,a.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Vn,Fn,Bn,Wn,Kn,Jn,Qn,Zn,Yn,Xn,$n,et,nt,tt,rt)},ct=a.a.forwardRef(function(e,n){return a.a.createElement(at,qn({svgRef:n},e))});t.p;function it(){var e=Object(j.a)(["\nposition: absolute;\n        font-size: 10px;\n        font-weight: bold;\n        bottom: 12px;\n"]);return it=function(){return e},e}function ot(){var e=Object(j.a)(["\n        width: 24px;\n        height: 24px;\n        "]);return ot=function(){return e},e}function lt(){var e=Object(j.a)(["\n    width: 45px;\n    height: 45px;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n"]);return lt=function(){return e},e}var ut=y.b.div(lt()),st=Object(y.b)(ct)(ot()),pt=y.b.span(it());var dt=Object(E.b)({itemCount:Tn}),mt=Object(h.b)(dt,function(e){return{toggleCartHidden:function(){return e(F())}}})(function(e){var n=e.toggleCartHidden,t=e.itemCount;return a.a.createElement(ut,{onClick:n},a.a.createElement(st,null),a.a.createElement(pt,null,t))});function ft(){var e=Object(j.a)([""]);return ft=function(){return e},e}function bt(){var e=Object(j.a)(["font-size: 16px;"]);return bt=function(){return e},e}function ht(){var e=Object(j.a)(["\nwidth: 70%;\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        justify-content: center;\n        padding: 10px 20px;"]);return ht=function(){return e},e}function vt(){var e=Object(j.a)(["\nwidth: 100%;\n    display: flex;\n    height: 80px;\n    margin-bottom: 15px;\n"]);return vt=function(){return e},e}function gt(){var e=Object(j.a)(["\nwidth: 30%;\n\n"]);return gt=function(){return e},e}var Et=y.b.img(gt()),Ot=y.b.div(vt()),jt=y.b.div(ht()),yt=y.b.span(bt()),xt=y.b.span(ft());var wt=function(e){var n=e.item,t=n.imageUrl,r=n.price,c=n.name,i=n.quantity;return a.a.createElement(Ot,null,a.a.createElement(Et,{src:t,alt:c}),a.a.createElement(jt,null,a.a.createElement(yt,null,c),a.a.createElement(xt,null,i,"* $",r)))};function kt(){var e=Object(j.a)(["\nmargin-top: auto;\n"]);return kt=function(){return e},e}function Ct(){var e=Object(j.a)(["\n        font-size: 25px;\n        margin: 50px auto;\n"]);return Ct=function(){return e},e}function It(){var e=Object(j.a)(["\n        width: 100%;\n        height: 240px;\n        display: flex;\n        flex-direction: column;\n        overflow-y: scroll;\n        "]);return It=function(){return e},e}function Lt(){var e=Object(j.a)(["\n    position: absolute;\n    width: 240px;\n    height: 340px;\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    border: 1px solid black;\n    border-radius: 3px;\n    background-color: white;\n    top: 90px;\n    right: 40px;\n    z-index: 1;\n    box-shadow: 0px 7px 16px 7px rgba(0,0,0,0.5);\n"]);return Lt=function(){return e},e}var Nt=y.b.div(Lt()),Ut=y.b.div(It()),St=y.b.span(Ct()),Tt=Object(y.b)(ee)(kt()),At=Object(E.b)({cartItems:Un}),_t=Object(v.g)(Object(h.b)(At)(function(e){var n=e.cartItems,t=e.history,r=e.dispatch;return a.a.createElement(Nt,null,a.a.createElement(Ut,null,n.length?n.map(function(e){return a.a.createElement(wt,{key:e.id,item:e})}):a.a.createElement(St,null,"Your Cart is empty")),a.a.createElement(Tt,{onClick:function(){t.push("/checkout"),r(F())}},"GO TO CHECKOUT"))})),Rt=t(16);function Mt(){var e=Object(j.a)(["\n    padding: 10px 15px;\n    text-decoration: none;\n    cursor: pointer;\n    &:hover {\n        transform: scale(1.1);\n        transition: transform 200ms;\n    }\n"]);return Mt=function(){return e},e}function Pt(){var e=Object(j.a)(["\n    width: 50%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n"]);return Pt=function(){return e},e}function zt(){var e=Object(j.a)(["\n    height: 100%;\n    width: 70px;\n    padding: 25px;\n    &:hover {\n        transform: scale(1.1);\n        transition: transform 200ms;\n"]);return zt=function(){return e},e}function Dt(){var e=Object(j.a)(["\n    height: 70px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 25px;\n"]);return Dt=function(){return e},e}var Gt=y.b.div(Dt()),qt=Object(y.b)(Rt.b)(zt()),Ht=y.b.div(Pt()),Vt=Object(y.b)(Rt.b)(Mt()),Ft=Object(E.a)([function(e){return e.user}],function(e){return e.currentUser});var Bt=Object(E.b)({currentUser:Ft,hidden:Sn}),Wt=Object(h.b)(Bt)(function(e){var n=e.currentUser,t=e.hidden;return a.a.createElement(Gt,{className:"header"},a.a.createElement(qt,{to:"/"},a.a.createElement(Gn,{className:"logo"})),a.a.createElement(Ht,null,a.a.createElement(Vt,{to:"/shop"},"SHOP"),a.a.createElement(Vt,{to:"/shop"},"CONTACT"),n?a.a.createElement(Vt,{as:"div",onClick:function(){return ge.signOut()}},"SIGN OUT"):a.a.createElement(Vt,{to:"/signin"},"SIGN IN"),a.a.createElement(mt,null)),t?null:a.a.createElement(_t,null))}),Kt="SET_CURRENT_USER",Jt=function(e){function n(){var e,t;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(a)))).unsubscribeFromAuth=null,t}return Object(b.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=ge.onAuthStateChanged(function(){var n=Object(s.a)(l.a.mark(function n(t){return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=5;break}return n.next=3,ve(t);case 3:n.sent.onSnapshot(function(n){e({currentUser:Object(u.a)({id:n.id},n.data())})});case 5:e(t);case 6:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement(Wt,null),a.a.createElement(v.d,null,a.a.createElement(v.b,{exact:!0,path:"/",component:G}),a.a.createElement(v.b,{path:"/shop",component:Fe}),a.a.createElement(v.b,{path:"/checkout",component:Rn}),a.a.createElement(v.b,{path:"/signin",render:function(){return e.props.currentUser?a.a.createElement(v.a,{to:"/"}):a.a.createElement(fn,null)}})))}}]),n}(r.Component),Qt=Object(E.b)({currentUser:Ft}),Zt=Object(h.b)(Qt,function(e){return{setCurrentUser:function(n){return e(function(e){return{type:Kt,payload:e}}(n))}}})(Jt),Yt=t(46),Xt=t(15),$t=t(31),er=(t(72),{currentUser:null}),nr=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:er,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Kt:return Object(u.a)({},e,{currentUser:n.payload});default:return e}},tr=t(48),rr=function(e,n){return 1===e.find(function(e){return e.id===n.id}).quantity?e.filter(function(e){return e.id!==n.id}):e.map(function(e){return e.id===n.id?Object(u.a)({},e,{quantity:e.quantity-1}):e})},ar={hidden:!0,cartItems:[]},cr=function(){var e,n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ar,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case V.TOGGLE_CART_HIDDEN:return Object(u.a)({},t,{hidden:!t.hidden});case V.ADD_ITEM:return Object(u.a)({},t,{cartItems:(e=t.cartItems,n=r.payload,e.find(function(e){return e.id===n.id})?e.map(function(e){return e.id===n.id?Object(u.a)({},e,{quantity:e.quantity+1}):e}):[].concat(Object(tr.a)(e),[Object(u.a)({},n,{quantity:1})]))});case V.CLEAR_ITEM_FROM_CART:return Object(u.a)({},t,{cartItems:t.cartItems.filter(function(e){return e.id!==r.payload.id})});case V.REMOVE_ITEM:return Object(u.a)({},t,{cartItems:rr(t.cartItems,r.payload)});default:return t}},ir={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:" mens ",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},or=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ir;return(arguments.length>1?arguments[1]:void 0).type,e},lr={collections:null},ur=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lr,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Ae.UPDATE_COLLECTIONS:return Object(u.a)({},e,{collections:n.payload});default:return e}},sr=t(47),pr={key:"root",storage:t.n(sr).a,whitelist:["cart"]},dr=Object(Xt.c)({user:nr,cart:cr,directory:or,shop:ur}),mr=Object($t.a)(pr,dr);var fr=Object(Xt.d)(mr,Xt.a.apply(void 0,[])),br=Object($t.b)(fr);i.a.render(a.a.createElement(h.a,{store:fr},a.a.createElement(Rt.a,null,a.a.createElement(Yt.a,{persistor:br},a.a.createElement(Zt,null)))),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.42d895ff.chunk.js.map