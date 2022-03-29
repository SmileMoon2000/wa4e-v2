const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),r=new Map;class n{constructor(t,r){if(this._$cssResult$=!0,r!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=r.get(this.cssText);return t&&void 0===e&&(r.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const a=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let r="";for(const e of t.cssRules)r+=e.cssText;return(t=>new n("string"==typeof t?t:t+"",e))(r)})(t):t;var i;const o=window.reactiveElementPolyfillSupport,s={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},l=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:s,reflect:!1,hasChanged:l};class c extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,r)=>{const n=this._$Eh(r,e);void 0!==n&&(this._$Eu.set(n,r),t.push(n))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,r,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(n){const a=this[t];this[e]=n,this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eh(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const r=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,r)=>{t?e.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):r.forEach((t=>{const r=document.createElement("style"),n=window.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=t.cssText,e.appendChild(r)}))})(r,this.constructor.elementStyles),r}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$Eg(t,e,r=u){var n,a;const i=this.constructor._$Eh(t,r);if(void 0!==i&&!0===r.reflect){const o=(null!==(a=null===(n=r.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==a?a:s.toAttribute)(e,r.type);this._$Ei=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Ei=null}}_$AK(t,e){var r,n,a;const i=this.constructor,o=i._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=i.getPropertyOptions(o),l=t.converter,u=null!==(a=null!==(n=null===(r=l)||void 0===r?void 0:r.fromAttribute)&&void 0!==n?n:"function"==typeof l?l:null)&&void 0!==a?a:s.fromAttribute;this._$Ei=o,this[o]=u(e,t.type),this._$Ei=null}}requestUpdate(t,e,r){let n=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||l)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,r))):n=!1),!this.isUpdatePending&&n&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var h;c.finalized=!0,c.elementProperties=new Map,c.elementStyles=[],c.shadowRootOptions={mode:"open"},null==o||o({ReactiveElement:c}),(null!==(i=globalThis.reactiveElementVersions)&&void 0!==i?i:globalThis.reactiveElementVersions=[]).push("1.0.1");const f=globalThis.trustedTypes,p=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,d=`lit$${(Math.random()+"").slice(9)}$`,m="?"+d,v=`<${m}>`,g=document,y=(t="")=>g.createComment(t),x=t=>null===t||"object"!=typeof t&&"function"!=typeof t,_=Array.isArray,b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,w=/-->/g,M=/>/g,T=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,k=/'/g,A=/"/g,S=/^(?:script|style|textarea)$/i,E=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),C=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),I=new WeakMap,P=g.createTreeWalker(g,129,null,!1),O=(t,e)=>{const r=t.length-1,n=[];let a,i=2===e?"<svg>":"",o=b;for(let e=0;e<r;e++){const r=t[e];let s,l,u=-1,c=0;for(;c<r.length&&(o.lastIndex=c,l=o.exec(r),null!==l);)c=o.lastIndex,o===b?"!--"===l[1]?o=w:void 0!==l[1]?o=M:void 0!==l[2]?(S.test(l[2])&&(a=RegExp("</"+l[2],"g")),o=T):void 0!==l[3]&&(o=T):o===T?">"===l[0]?(o=null!=a?a:b,u=-1):void 0===l[1]?u=-2:(u=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?T:'"'===l[3]?A:k):o===A||o===k?o=T:o===w||o===M?o=b:(o=T,a=void 0);const h=o===T&&t[e+1].startsWith("/>")?" ":"";i+=o===b?r+v:u>=0?(n.push(s),r.slice(0,u)+"$lit$"+r.slice(u)+d+h):r+d+(-2===u?(n.push(void 0),e):h)}const s=i+(t[r]||"<?>")+(2===e?"</svg>":"");return[void 0!==p?p.createHTML(s):s,n]};class z{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let a=0,i=0;const o=t.length-1,s=this.parts,[l,u]=O(t,e);if(this.el=z.createElement(l,r),P.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=P.nextNode())&&s.length<o;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(d)){const r=u[i++];if(t.push(e),void 0!==r){const t=n.getAttribute(r.toLowerCase()+"$lit$").split(d),e=/([.?@])?(.*)/.exec(r);s.push({type:1,index:a,name:e[2],strings:t,ctor:"."===e[1]?B:"?"===e[1]?j:"@"===e[1]?U:N})}else s.push({type:6,index:a})}for(const e of t)n.removeAttribute(e)}if(S.test(n.tagName)){const t=n.textContent.split(d),e=t.length-1;if(e>0){n.textContent=f?f.emptyScript:"";for(let r=0;r<e;r++)n.append(t[r],y()),P.nextNode(),s.push({type:2,index:++a});n.append(t[e],y())}}}else if(8===n.nodeType)if(n.data===m)s.push({type:2,index:a});else{let t=-1;for(;-1!==(t=n.data.indexOf(d,t+1));)s.push({type:7,index:a}),t+=d.length-1}a++}}static createElement(t,e){const r=g.createElement("template");return r.innerHTML=t,r}}function D(t,e,r=t,n){var a,i,o,s;if(e===C)return e;let l=void 0!==n?null===(a=r._$Cl)||void 0===a?void 0:a[n]:r._$Cu;const u=x(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==u&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===u?l=void 0:(l=new u(t),l._$AT(t,r,n)),void 0!==n?(null!==(o=(s=r)._$Cl)&&void 0!==o?o:s._$Cl=[])[n]=l:r._$Cu=l),void 0!==l&&(e=D(t,l._$AS(t,e.values),l,n)),e}class R{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:n}=this._$AD,a=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:g).importNode(r,!0);P.currentNode=a;let i=P.nextNode(),o=0,s=0,l=n[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new F(i,i.nextSibling,this,t):1===l.type?e=new l.ctor(i,l.name,l.strings,this,t):6===l.type&&(e=new V(i,this,t)),this.v.push(e),l=n[++s]}o!==(null==l?void 0:l.index)&&(i=P.nextNode(),o++)}return a}m(t){let e=0;for(const r of this.v)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class F{constructor(t,e,r,n){var a;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cg=null===(a=null==n?void 0:n.isConnected)||void 0===a||a}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),x(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==C&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return _(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==L&&x(this._$AH)?this._$AA.nextSibling.data=t:this.S(g.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:n}=t,a="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=z.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===a)this._$AH.m(r);else{const t=new R(a,this),e=t.p(this.options);t.m(r),this.S(e),this._$AH=t}}_$AC(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new z(t)),e}M(t){_(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const a of t)n===e.length?e.push(r=new F(this.A(y()),this.A(y()),this,this.options)):r=e[n],r._$AI(a),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class N{constructor(t,e,r,n,a){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=a,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,n){const a=this.strings;let i=!1;if(void 0===a)t=D(this,t,e,0),i=!x(t)||t!==this._$AH&&t!==C,i&&(this._$AH=t);else{const n=t;let o,s;for(t=a[0],o=0;o<a.length-1;o++)s=D(this,n[r+o],e,o),s===C&&(s=this._$AH[o]),i||(i=!x(s)||s!==this._$AH[o]),s===L?t=L:t!==L&&(t+=(null!=s?s:"")+a[o+1]),this._$AH[o]=s}i&&!n&&this.k(t)}k(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class B extends N{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===L?void 0:t}}class j extends N{constructor(){super(...arguments),this.type=4}k(t){t&&t!==L?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class U extends N{constructor(t,e,r,n,a){super(t,e,r,n,a),this.type=5}_$AI(t,e=this){var r;if((t=null!==(r=D(this,t,e,0))&&void 0!==r?r:L)===C)return;const n=this._$AH,a=t===L&&n!==L||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==L&&(n===L||a);a&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}}class V{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}}const H=window.litHtmlPolyfillSupport;var q,G;null==H||H(z,F),(null!==(h=globalThis.litHtmlVersions)&&void 0!==h?h:globalThis.litHtmlVersions=[]).push("2.0.1");class Y extends c{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,r)=>{var n,a;const i=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:e;let o=i._$litPart$;if(void 0===o){const t=null!==(a=null==r?void 0:r.renderBefore)&&void 0!==a?a:null;i._$litPart$=o=new F(e.insertBefore(y(),t),t,void 0,null!=r?r:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return C}}Y.finalized=!0,Y._$litElement$=!0,null===(q=globalThis.litElementHydrateSupport)||void 0===q||q.call(globalThis,{LitElement:Y});const W=globalThis.litElementPolyfillSupport;null==W||W({LitElement:Y}),(null!==(G=globalThis.litElementVersions)&&void 0!==G?G:globalThis.litElementVersions=[]).push("3.0.1");class Z extends Y{createRenderRoot(){return this}}let X,$=t=>t;customElements.define("menu-tile",class extends Z{static get properties(){return{appConf:{type:Object,attribute:!1}}}constructor(){super(),this.appConf={}}render(){return this.appPage=`./app_modules/${this.appConf.appName}/index.html`,this.appImg=`./img/${this.appConf.appName}.png`,[super.render(),E(X||(X=$`
        <div
          class="card w-auto text-center text-wrap justify-content-center align-items-center p-3"
          style="background-color: ${0}; aspect-ratio: 0.61;"
        >
          <img
            src=${0}
            class="card-img-top img-fluid"
            style="width: 90%; height: 150px; object-fit: scale-down;"
            alt="${0} icon"
          />
          <div class="card-body">
            <h6 class="card-title">${0}</h6>
            <p class="card-text">${0}</p>
            <a href=${0} class="stretched-link"></a>
          </div>
        </div>
      `),this.appConf.appColour,this.appImg,this.appConf.appName,E([this.appConf.appTitle]),this.appConf.appDescription,this.appPage)]}});let K,J=t=>t;customElements.define("footer-element",class extends Z{constructor(){super(),this.contactEmail="susan.gourvenec@southampton.ac.uk",this.contactEmailLink=this.contactEmail.link(`mailto:${this.contactEmail}`),this.footerText="The author shall not be liable for any direct, consequential or incidental damages arising out of the use of this program. The entire risk as to the quality, performance and application of the program lies with the user. This page was established and is maintained by Professor Susan Gourvenec, University of Southampton, as a teaching tool and to assist research dissemination."}render(){return[super.render(),E(K||(K=J`
        <hr class="width-constrained" id="footer-hr" />
        <div class="container">
          <footer class="footer footer-text">
            <span>
              ${0}
              <a href=${0}>${0}</a>
            </span>
          </footer>
        </div>
      `),this.footerText,this.contactEmailLink,this.contactEmail)]}});let Q,tt=t=>t;customElements.define("header-element",class extends Z{constructor(){super(),this.homePage="https://webappsforengineers.com/wa4e-v2/dist/index.html"}static get properties(){return{pageTitle:{type:String}}}render(){return[super.render(),E(Q||(Q=tt`
        <nav class="navbar navbar-expand-lg" style="background-color: #03a9f4">
          <div class="col-2">
            <a href="${0}"
              ><img
                class="img-fluid mx-auto d-block"
                src="../../img/home.png"
                alt="Home"
            /></a>
          </div>
          <div class="col-6">
            <p class="h3 text-center text-wrap text-white">
              ${0}
            </p>
          </div>
          <div class="col">
            <p class="h6 text-center text-white">Web Apps for Engineers</p>
          </div>
        </nav>
      `),this.homePage,E([this.pageTitle]))]}});let et,rt,nt,at,it,ot,st,lt,ut,ct,ht=t=>t;class ft extends Z{static get properties(){return{appConf:{type:Object},appName:{type:String}}}connectedCallback(){super.connectedCallback(),window.addEventListener("update-children",(()=>this.requestUpdate()))}disconnectedCallback(){window.removeEventListener("update-children",(()=>this.requestUpdate())),super.disconnectedCallback()}updated(t){super.updated(t),this.tileLoaded()}async tileLoaded(){const t=new CustomEvent("loaded",{bubbles:!0,composed:!0});await this.updateComplete,this.dispatchEvent(t)}parseNum(t){return"number"==typeof t?t.toFixed(2):t}makeNestedFields(t){return E(et||(et=ht`${0}`),Object.keys(this.appConf.fields[`${t}`]).map((e=>E(rt||(rt=ht`<div
          class="input-group"
          style="display: ${0};"
        >
          <label
            class="input-group-text text-wrap text-break font-size-sm"
            for="${0}"
            style="width: 30%; text-align: left;"
            >${0}</label
          >
          <input
            class="form-control bg-light"
            disabled
            id="${0}"
            .value="${0}"
          />
          <label
            class="input-group-text text-wrap text-break"
            for="${0}"
            style="min-width: 20%; text-align: left;"
            >${0}</label
          >
        </div>`),this.appConf.fields[t][e][3],e,E([this.appConf.fields[t][e][2]]),e,this.parseNum(this.appConf.fields[t][e][0]),e,E([this.appConf.fields[t][e][1]])))))}makeNestedCallbackFields(t){return E(nt||(nt=ht` ${0}`),Object.keys(this.appConf.fields[`${t}`]).map((e=>E(at||(at=ht`<div
          class="input-group"
          style="display: ${0};"
        >
          <span
            class="input-group-text col-auto text-wrap text-break"
            for="${0}"
            style="width: 25%; text-align: right;"
            >${0}</span
          >
          <input
            class="form-control"
            id="${0}"
            .value="${0}"
            @change=${0}
          />
          <span
            class="input-group-text col-auto text-wrap text-break"
            for="${0}"
            style="width: 20%; text-align: left;"
            >${0}</span
          >
        </div>`),this.appConf.fields[t][e][3],e,E([this.appConf.fields[t][e][2]]),e,this.appConf.fields[t][e][0],(r=>{this.appConf.fields[t][e][0]=Number(r.target.value)}),e,E([this.appConf.fields[t][e][1]])))))}getSubComponents(t,e){const r=[],n=[],a=[];for(const[i,o]of t.entries())o.index===e&&("beforeTitle"===o.position?r.push(i):"afterTitle"===o.position?n.push(i):"afterContent"===o.position&&a.push(i));return[r,n,a]}makeSubComponent(t){const e=this.subComponents[t];return E(it||(it=ht`
      ${0}
    `),"radio-tile"===e.type?E(ot||(ot=ht` <div style="display: ${0};">
            <radio-tile
              .appConf=${0}
              @clear="${0}"
            ></radio-tile>
          </div>`),e.display,e,(()=>{this.clearOutput()})):"table-tile"===e.type?E(st||(st=ht` <div>
            <table-tile .appConf=${0}></table-tile>
          </div>`),e):"input-table"===e.type?E(lt||(lt=ht` <div>
            <input-table .appConf=${0}></input-table>
          </div>`),e):"test-tile"===e.type?E(ut||(ut=ht` <div>
            <test-tile .appConf=${0}></test-tile>
          </div>`),e):E(ct||(ct=ht`<p>Component ${0} Not Recognised</p>`),e.type))}}let pt,dt,mt,vt,gt,yt,xt=t=>t;customElements.define("input-tile",class extends ft{render(){return this.formFields=this.appConf.fields,this.subComponents=this.appConf.subComponents,this.input_fields=this.arrangeFields(),[super.render(),E(pt||(pt=xt`
        <!-- This 'div' defines the tile as a grid item and the style options
      defines the corners of the tile on the grid. -->
        <div>
          <h2>${0}</h2>
          <!-- input form autogenerated fields -->
          <div>${0}</div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-around p-2">
            <!-- buttons -->
            <button
              class="btn btn-primary col-sm-12 col-md-6"
              @click=${0}
            >
              SUBMIT
            </button>
            <button
              class="btn btn-outline-secondary col"
              @click=${0}
            >
              RESET
            </button>
            <button
              class="btn btn-outline-info col"
              @click=${0}
            >
              HELP
            </button>
          </div>
        </div>
      `),E([this.appConf.title]),this.input_fields,(()=>this.appUpdate()),(()=>this.tileReload()),(()=>this.showHelp()))]}arrangeFields(){return E(dt||(dt=xt`${0}`),Object.keys(this.formFields).map(((t,e)=>{const[r,n,a]=this.getSubComponents(this.subComponents,e);return E(mt||(mt=xt`
        <div>
          ${0}
        </div>
        <h3>${0}</h3>
        <div>
          ${0}
        </div>
        <div>${0}</div>
        <div>
          ${0}
        </div>
      `),E(vt||(vt=xt`${0}`),r.map((t=>this.makeSubComponent(t)))),E([t]),E(gt||(gt=xt`${0}`),n.map((t=>this.makeSubComponent(t)))),this.makeNestedCallbackFields(t),E(yt||(yt=xt`${0}`),a.map((t=>this.makeSubComponent(t)))))})))}appUpdate(){const t=new CustomEvent("updated",{bubbles:!0,composed:!0});this.dispatchEvent(t)}tileReload(){const t=new CustomEvent("reset",{bubbles:!0,composed:!0});this.dispatchEvent(t)}showHelp(){window.alert(this.appConf.helpText)}});let _t,bt,wt,Mt,Tt,kt,At=t=>t;customElements.define("derived-input-tile",class extends ft{render(){return this.formFields=this.appConf.fields,this.subComponents=this.appConf.subComponents,this.derivedInputFields=this.arrangeFields(),[super.render(),E(_t||(_t=At`
        <!-- This 'div' defines the tile as a grid item and the style options
      defines the corners of the tile on the grid. -->
        <div>
          <h2>${0}</h2>
          <!-- input form autogenerated fields -->
          ${0}
        </div>
      `),E([this.appConf.title]),this.derivedInputFields)]}arrangeFields(){return E(bt||(bt=At`${0}`),Object.keys(this.formFields).map(((t,e)=>{const[r,n,a]=this.getSubComponents(this.subComponents,e);return E(wt||(wt=At`
        <div>
          ${0}
        </div>
        <h3>${0}</h3>
        <div>
          ${0}
        </div>
        <div>${0}</div>
        <div>
          ${0}
        </div>
      `),E(Mt||(Mt=At`${0}`),r.map((t=>this.makeSubComponent(t)))),E([t]),E(Tt||(Tt=At`${0}`),n.map((t=>this.makeSubComponent(t)))),this.makeNestedFields(t),E(kt||(kt=At`${0}`),a.map((t=>this.makeSubComponent(t)))))})))}});let St,Et=t=>t;customElements.define("image-tile",class extends ft{render(){return[super.render(),E(St||(St=Et`
        <img
          class="img-fluid"
          width=${0}
          height=${0}
          src=${0}
          alt="caisson diagrams"
        />
      `),this.appConf.img_w,this.appConf.img_h,this.appConf.img_pth)]}});let Ct,Lt,It,Pt,Ot,zt,Dt=t=>t;function Rt(){return(Rt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}customElements.define("output-tile",class extends ft{render(){return this.formFields=this.appConf.fields,this.subComponents=this.appConf.subComponents,this.outputFields=this.arrangeFields(),[super.render(),E(Ct||(Ct=Dt`
        <!-- This 'div' defines the tile as a grid item and the style options
      defines the corners of the tile on the grid. -->
        <div>
          <h2>${0}</h2>
          <!-- Here are the forms attributes -->
          <p>${0}</p>
        </div>
      `),E([this.appConf.title]),this.outputFields)]}arrangeFields(){return E(Lt||(Lt=Dt`${0}`),Object.keys(this.formFields).map(((t,e)=>{const[r,n,a]=this.getSubComponents(this.subComponents,e);return E(It||(It=Dt`
        <div>
          ${0}
        </div>
        <h3>${0}</h3>
        <div>
          ${0}
        </div>
        <div>${0}</div>
        <div>
          ${0}
        </div>
      ${0}
    `),Object.entries(this.appConf.plots).map((t=>E(nw||(nw=aw`
            <div class="col py-2">
              <div class="card" style="display: ${0};">
                <div class="responsive-plot" id=${0}></div>
              </div>
            </div>
          `),t[1].display,t[0])))),[super.render(),this.graphHtml]}firstUpdated(t){super.firstUpdated(t),this.renderGraph()}async renderGraph(){await this.updateComplete,Object.entries(this.appConf.plots).map((t=>Wb.newPlot(document.getElementById(t[0]),null,t[1].layout)))}async configGraph(){await this.updateComplete,Object.entries(this.appConf.plots).map((t=>this.updateGraph(t))),this.appConf.updateConf.noNewData=!1,this.appConf.updateConf.clearData=!1}async updateGraph(t){this.appConf.updateConf.clearData&&(this.appConf.plots[t[0]].data=[]),this.appConf.updateConf.noNewData||(t[1].addLines?this.appConf.plots[t[0]].data=this.appConf.plots[t[0]].data.concat(t[1].dataFun.apply(this,Object.entries(t[1].args).map((t=>this.appConf.fields[t[1]])))):this.appConf.plots[t[0]].data=t[1].dataFun.apply(this,Object.entries(t[1].args).map((t=>this.appConf.fields[t[1]])))),Wb.react(document.getElementById(t[0]),this.appConf.plots[t[0]].data,this.appConf.plots[t[0]].layout)}});let iw,ow,sw,lw,uw,cw,hw=t=>t;customElements.define("optimization-tile",class extends ft{render(){return this.checkOptions=this.appConf.options,this.formFields=this.appConf.fields,this.subComponents=this.appConf.subComponents,this.outputFields=this.arrangeFields(),[super.render(),E(iw||(iw=hw`
        <h2>${0}</h2>
        <p>${0}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-around p-2">
          <!-- buttons -->
          <button
            class="btn btn-primary col-sm-12 col-md-6"
            @click=${0}
          >
            OPTIMIZE
          </button>
        </div>
      `),E([this.appConf.title]),this.outputFields,(()=>this.appOptimize()))]}connectedCallback(){super.connectedCallback(),window.addEventListener("clear",(()=>this.requestUpdate()))}disconnectedCallback(){window.removeEventListener("clear",(()=>this.requestUpdate())),super.disconnectedCallback()}appOptimize(){const t=new CustomEvent("optimize",{bubbles:!0,composed:!0});this.clearOutput(),this.dispatchEvent(t)}clearOutput(){this.formFields[""].solution[0]=null}arrangeFields(){return E(ow||(ow=hw`${0}`),Object.keys(this.formFields).map(((t,e)=>{const[r,n,a]=this.getSubComponents(this.subComponents,e);return E(sw||(sw=hw`
        <div>
          ${0}
        </div>
        <h3>${0}</h3>
        <div>
          ${0}
        </div>
        <div>${0}</div>
        <div>
          ${0}
        </div>
      `),E(lw||(lw=hw`${0}`),r.map((t=>this.makeSubComponent(t)))),E([t]),E(uw||(uw=hw`${0}`),n.map((t=>this.makeSubComponent(t)))),this.makeNestedFields(t),E(cw||(cw=hw`${0}`),a.map((t=>this.makeSubComponent(t)))))})))}});let fw,pw,dw,mw,vw,gw,yw=t=>t;customElements.define("text-tile",class extends ft{render(){return this.subComponents=this.appConf.subComponents,this.text=this.appConf.text,this.tileContent=this.arrangeFields(),[super.render(),E(fw||(fw=yw`
        <!-- This 'div' defines the tile as a grid item and the style options
      defines the corners of the tile on the grid. -->
        <div>
          <h2>${0}</h2>
          <!-- Here are the forms attributes -->
          <p>${0}</p>
        </div>
      `),E([this.appConf.title]),this.tileContent)]}arrangeFields(){return E(pw||(pw=yw`${0}`),Object.keys(this.text).map(((t,e)=>{let r,n,a;void 0===this.subComponents?[r,n,a]=[[],[],[]]:[r,n,a]=this.getSubComponents(this.subComponents,e);return E(dw||(dw=yw`
        <div>
          ${0}
        </div>
        <p class="${0}">
          ${0}
        </p>
        <div>
          ${0}
        </div>
        <div>
          ${0}
        </div>
      `),E(mw||(mw=yw`${0}`),r.map((t=>this.makeSubComponent(t)))),this.text[t].format,E([this.text[t].text]),E(vw||(vw=yw`${0}`),n.map((t=>this.makeSubComponent(t)))),E(gw||(gw=yw`${0}`),a.map((t=>this.makeSubComponent(t)))))})))}});var xw="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0;function _w(t,e,r){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){Tw(n.response,e,r)},n.onerror=function(){console.error("could not download file")},n.send()}function bw(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return e.status>=200&&e.status<=299}function ww(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(r){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var Mw=xw.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),Tw=xw.saveAs||("object"!=typeof window||window!==xw?function(){}:"download"in HTMLAnchorElement.prototype&&!Mw?function(t,e,r){var n=xw.URL||xw.webkitURL,a=document.createElement("a");e=e||t.name||"download",a.download=e,a.rel="noopener","string"==typeof t?(a.href=t,a.origin!==location.origin?bw(a.href)?_w(t,e,r):ww(a,a.target="_blank"):ww(a)):(a.href=n.createObjectURL(t),setTimeout((function(){n.revokeObjectURL(a.href)}),4e4),setTimeout((function(){ww(a)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,e,r){if(e=e||t.name||"download","string"==typeof t)if(bw(t))_w(t,e,r);else{var n=document.createElement("a");n.href=t,n.target="_blank",setTimeout((function(){ww(n)}))}else navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}(t,r),e)}:function(t,e,r,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof t)return _w(t,e,r);var a="application/octet-stream"===t.type,i=/constructor/i.test(xw.HTMLElement)||xw.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||a&&i||Mw)&&"undefined"!=typeof FileReader){var s=new FileReader;s.onloadend=function(){var t=s.result;t=o?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=t:location=t,n=null},s.readAsDataURL(t)}else{var l=xw.URL||xw.webkitURL,u=l.createObjectURL(t);n?n.location=u:location.href=u,n=null,setTimeout((function(){l.revokeObjectURL(u)}),4e4)}});xw.saveAs=Tw.saveAs=Tw;var kw="object"==typeof global&&global&&global.Object===Object&&global,Aw="object"==typeof self&&self&&self.Object===Object&&self,Sw=kw||Aw||Function("return this")(),Ew=Sw.Symbol,Cw=Object.prototype,Lw=Cw.hasOwnProperty,Iw=Cw.toString,Pw=Ew?Ew.toStringTag:void 0;var Ow=Object.prototype.toString;var zw=Ew?Ew.toStringTag:void 0;function Dw(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":zw&&zw in Object(t)?function(t){var e=Lw.call(t,Pw),r=t[Pw];try{t[Pw]=void 0;var n=!0}catch(t){}var a=Iw.call(t);return n&&(e?t[Pw]=r:delete t[Pw]),a}(t):function(t){return Ow.call(t)}(t)}function Rw(t){return null!=t&&"object"==typeof t}function Fw(t,e){for(var r=-1,n=null==t?0:t.length,a=Array(n);++r<n;)a[r]=e(t[r],r,t);return a}var Nw=Array.isArray;function Bw(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function jw(t){return t}function Uw(t){if(!Bw(t))return!1;var e=Dw(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}var Vw=Sw["__core-js_shared__"],Hw=function(){var t=/[^.]+$/.exec(Vw&&Vw.keys&&Vw.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();var qw=Function.prototype.toString;function Gw(t){if(null!=t){try{return qw.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var Yw=/^\[object .+?Constructor\]$/,Ww=Function.prototype,Zw=Object.prototype,Xw=Ww.toString,$w=Zw.hasOwnProperty,Kw=RegExp("^"+Xw.call($w).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Jw(t){return!(!Bw(t)||function(t){return!!Hw&&Hw in t}(t))&&(Uw(t)?Kw:Yw).test(Gw(t))}function Qw(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Jw(r)?r:void 0}var tM=Qw(Sw,"WeakMap"),eM=Object.create,rM=function(){function t(){}return function(e){if(!Bw(e))return{};if(eM)return eM(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();function nM(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}var aM=Date.now;var iM=function(){try{var t=Qw(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),oM=function(t){var e=0,r=0;return function(){var n=aM(),a=16-(n-r);if(r=n,a>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(iM?function(t,e){return iM(t,"toString",{configurable:!0,enumerable:!1,value:(r=e,function(){return r}),writable:!0});var r}:jw);var sM=/^(?:0|[1-9]\d*)$/;function lM(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&sM.test(t))&&t>-1&&t%1==0&&t<e}function uM(t,e,r){"__proto__"==e&&iM?iM(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}function cM(t,e){return t===e||t!=t&&e!=e}var hM=Object.prototype.hasOwnProperty;function fM(t,e,r){var n=t[e];hM.call(t,e)&&cM(n,r)&&(void 0!==r||e in t)||uM(t,e,r)}function pM(t,e,r,n){var a=!r;r||(r={});for(var i=-1,o=e.length;++i<o;){var s=e[i],l=n?n(r[s],t[s],s,r,t):void 0;void 0===l&&(l=t[s]),a?uM(r,s,l):fM(r,s,l)}return r}var dM=Math.max;function mM(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function vM(t){return null!=t&&mM(t.length)&&!Uw(t)}var gM=Object.prototype;function yM(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||gM)}function xM(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}function _M(t){return Rw(t)&&"[object Arguments]"==Dw(t)}var bM=Object.prototype,wM=bM.hasOwnProperty,MM=bM.propertyIsEnumerable,TM=_M(function(){return arguments}())?_M:function(t){return Rw(t)&&wM.call(t,"callee")&&!MM.call(t,"callee")};var kM="object"==typeof exports&&exports&&!exports.nodeType&&exports,AM=kM&&"object"==typeof module&&module&&!module.nodeType&&module,SM=AM&&AM.exports===kM?Sw.Buffer:void 0,EM=(SM?SM.isBuffer:void 0)||function(){return!1},CM={};function LM(t){return function(e){return t(e)}}CM["[object Float32Array]"]=CM["[object Float64Array]"]=CM["[object Int8Array]"]=CM["[object Int16Array]"]=CM["[object Int32Array]"]=CM["[object Uint8Array]"]=CM["[object Uint8ClampedArray]"]=CM["[object Uint16Array]"]=CM["[object Uint32Array]"]=!0,CM["[object Arguments]"]=CM["[object Array]"]=CM["[object ArrayBuffer]"]=CM["[object Boolean]"]=CM["[object DataView]"]=CM["[object Date]"]=CM["[object Error]"]=CM["[object Function]"]=CM["[object Map]"]=CM["[object Number]"]=CM["[object Object]"]=CM["[object RegExp]"]=CM["[object Set]"]=CM["[object String]"]=CM["[object WeakMap]"]=!1;var IM="object"==typeof exports&&exports&&!exports.nodeType&&exports,PM=IM&&"object"==typeof module&&module&&!module.nodeType&&module,OM=PM&&PM.exports===IM&&kw.process,zM=function(){try{var t=PM&&PM.require&&PM.require("util").types;return t||OM&&OM.binding&&OM.binding("util")}catch(t){}}(),DM=zM&&zM.isTypedArray,RM=DM?LM(DM):function(t){return Rw(t)&&mM(t.length)&&!!CM[Dw(t)]},FM=Object.prototype.hasOwnProperty;function NM(t,e){var r=Nw(t),n=!r&&TM(t),a=!r&&!n&&EM(t),i=!r&&!n&&!a&&RM(t),o=r||n||a||i,s=o?xM(t.length,String):[],l=s.length;for(var u in t)!e&&!FM.call(t,u)||o&&("length"==u||a&&("offset"==u||"parent"==u)||i&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||lM(u,l))||s.push(u);return s}function BM(t,e){return function(r){return t(e(r))}}var jM=BM(Object.keys,Object),UM=Object.prototype.hasOwnProperty;function VM(t){return vM(t)?NM(t):function(t){if(!yM(t))return jM(t);var e=[];for(var r in Object(t))UM.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}var HM=Object.prototype.hasOwnProperty;function qM(t){if(!Bw(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=yM(t),r=[];for(var n in t)("constructor"!=n||!e&&HM.call(t,n))&&r.push(n);return r}function GM(t){return vM(t)?NM(t,!0):qM(t)}var YM=Qw(Object,"create");var WM=Object.prototype.hasOwnProperty;var ZM=Object.prototype.hasOwnProperty;function XM(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function $M(t,e){for(var r=t.length;r--;)if(cM(t[r][0],e))return r;return-1}XM.prototype.clear=function(){this.__data__=YM?YM(null):{},this.size=0},XM.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},XM.prototype.get=function(t){var e=this.__data__;if(YM){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return WM.call(e,t)?e[t]:void 0},XM.prototype.has=function(t){var e=this.__data__;return YM?void 0!==e[t]:ZM.call(e,t)},XM.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=YM&&void 0===e?"__lodash_hash_undefined__":e,this};var KM=Array.prototype.splice;function JM(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}JM.prototype.clear=function(){this.__data__=[],this.size=0},JM.prototype.delete=function(t){var e=this.__data__,r=$M(e,t);return!(r<0)&&(r==e.length-1?e.pop():KM.call(e,r,1),--this.size,!0)},JM.prototype.get=function(t){var e=this.__data__,r=$M(e,t);return r<0?void 0:e[r][1]},JM.prototype.has=function(t){return $M(this.__data__,t)>-1},JM.prototype.set=function(t,e){var r=this.__data__,n=$M(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};var QM=Qw(Sw,"Map");function tT(t,e){var r,n,a=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?a["string"==typeof e?"string":"hash"]:a.map}function eT(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function rT(t,e){for(var r=-1,n=e.length,a=t.length;++r<n;)t[a+r]=e[r];return t}eT.prototype.clear=function(){this.size=0,this.__data__={hash:new XM,map:new(QM||JM),string:new XM}},eT.prototype.delete=function(t){var e=tT(this,t).delete(t);return this.size-=e?1:0,e},eT.prototype.get=function(t){return tT(this,t).get(t)},eT.prototype.has=function(t){return tT(this,t).has(t)},eT.prototype.set=function(t,e){var r=tT(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};var nT=BM(Object.getPrototypeOf,Object);function aT(t){var e=this.__data__=new JM(t);this.size=e.size}aT.prototype.clear=function(){this.__data__=new JM,this.size=0},aT.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},aT.prototype.get=function(t){return this.__data__.get(t)},aT.prototype.has=function(t){return this.__data__.has(t)},aT.prototype.set=function(t,e){var r=this.__data__;if(r instanceof JM){var n=r.__data__;if(!QM||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new eT(n)}return r.set(t,e),this.size=r.size,this};var iT="object"==typeof exports&&exports&&!exports.nodeType&&exports,oT=iT&&"object"==typeof module&&module&&!module.nodeType&&module,sT=oT&&oT.exports===iT?Sw.Buffer:void 0,lT=sT?sT.allocUnsafe:void 0;function uT(t,e){for(var r=-1,n=null==t?0:t.length,a=0,i=[];++r<n;){var o=t[r];e(o,r,t)&&(i[a++]=o)}return i}function cT(){return[]}var hT=Object.prototype.propertyIsEnumerable,fT=Object.getOwnPropertySymbols,pT=fT?function(t){return null==t?[]:(t=Object(t),uT(fT(t),(function(e){return hT.call(t,e)})))}:cT;var dT=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)rT(e,pT(t)),t=nT(t);return e}:cT;function mT(t,e,r){var n=e(t);return Nw(t)?n:rT(n,r(t))}function vT(t){return mT(t,VM,pT)}function gT(t){return mT(t,GM,dT)}var yT=Qw(Sw,"DataView"),xT=Qw(Sw,"Promise"),_T=Qw(Sw,"Set"),bT=Gw(yT),wT=Gw(QM),MT=Gw(xT),TT=Gw(_T),kT=Gw(tM),AT=Dw;(yT&&"[object DataView]"!=AT(new yT(new ArrayBuffer(1)))||QM&&"[object Map]"!=AT(new QM)||xT&&"[object Promise]"!=AT(xT.resolve())||_T&&"[object Set]"!=AT(new _T)||tM&&"[object WeakMap]"!=AT(new tM))&&(AT=function(t){var e=Dw(t),r="[object Object]"==e?t.constructor:void 0,n=r?Gw(r):"";if(n)switch(n){case bT:return"[object DataView]";case wT:return"[object Map]";case MT:return"[object Promise]";case TT:return"[object Set]";case kT:return"[object WeakMap]"}return e});var ST=AT,ET=Object.prototype.hasOwnProperty;var CT=Sw.Uint8Array;function LT(t){var e=new t.constructor(t.byteLength);return new CT(e).set(new CT(t)),e}var IT=/\w*$/;var PT=Ew?Ew.prototype:void 0,OT=PT?PT.valueOf:void 0;function zT(t,e,r){var n,a=t.constructor;switch(e){case"[object ArrayBuffer]":return LT(t);case"[object Boolean]":case"[object Date]":return new a(+t);case"[object DataView]":return function(t,e){var r=e?LT(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?LT(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,r);case"[object Map]":return new a;case"[object Number]":case"[object String]":return new a(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,IT.exec(t));return e.lastIndex=t.lastIndex,e}(t);case"[object Set]":return new a;case"[object Symbol]":return n=t,OT?Object(OT.call(n)):{}}}var DT=zM&&zM.isMap,RT=DT?LM(DT):function(t){return Rw(t)&&"[object Map]"==ST(t)};var FT=zM&&zM.isSet,NT=FT?LM(FT):function(t){return Rw(t)&&"[object Set]"==ST(t)},BT={};function jT(t,e,r,n,a,i){var o,s=1&e,l=2&e,u=4&e;if(r&&(o=a?r(t,n,a,i):r(t)),void 0!==o)return o;if(!Bw(t))return t;var c=Nw(t);if(c){if(o=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&ET.call(t,"index")&&(r.index=t.index,r.input=t.input),r}(t),!s)return function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}(t,o)}else{var h=ST(t),f="[object Function]"==h||"[object GeneratorFunction]"==h;if(EM(t))return function(t,e){if(e)return t.slice();var r=t.length,n=lT?lT(r):new t.constructor(r);return t.copy(n),n}(t,s);if("[object Object]"==h||"[object Arguments]"==h||f&&!a){if(o=l||f?{}:function(t){return"function"!=typeof t.constructor||yM(t)?{}:rM(nT(t))}(t),!s)return l?function(t,e){return pM(t,dT(t),e)}(t,function(t,e){return t&&pM(e,GM(e),t)}(o,t)):function(t,e){return pM(t,pT(t),e)}(t,function(t,e){return t&&pM(e,VM(e),t)}(o,t))}else{if(!BT[h])return a?t:{};o=zT(t,h,s)}}i||(i=new aT);var p=i.get(t);if(p)return p;i.set(t,o),NT(t)?t.forEach((function(n){o.add(jT(n,e,r,n,t,i))})):RT(t)&&t.forEach((function(n,a){o.set(a,jT(n,e,r,a,t,i))}));var d=c?void 0:(u?l?gT:vT:l?GM:VM)(t);return function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););}(d||t,(function(n,a){d&&(n=t[a=n]),fM(o,a,jT(n,e,r,a,t,i))})),o}BT["[object Arguments]"]=BT["[object Array]"]=BT["[object ArrayBuffer]"]=BT["[object DataView]"]=BT["[object Boolean]"]=BT["[object Date]"]=BT["[object Float32Array]"]=BT["[object Float64Array]"]=BT["[object Int8Array]"]=BT["[object Int16Array]"]=BT["[object Int32Array]"]=BT["[object Map]"]=BT["[object Number]"]=BT["[object Object]"]=BT["[object RegExp]"]=BT["[object Set]"]=BT["[object String]"]=BT["[object Symbol]"]=BT["[object Uint8Array]"]=BT["[object Uint8ClampedArray]"]=BT["[object Uint16Array]"]=BT["[object Uint32Array]"]=!0,BT["[object Error]"]=BT["[object Function]"]=BT["[object WeakMap]"]=!1;var UT=Math.max;var VT=function(t,e){return oM(function(t,e,r){return e=dM(void 0===e?t.length-1:e,0),function(){for(var n=arguments,a=-1,i=dM(n.length-e,0),o=Array(i);++a<i;)o[a]=n[e+a];a=-1;for(var s=Array(e+1);++a<e;)s[a]=n[a];return s[e]=r(o),nM(t,this,s)}}(t,e,jw),t+"")}((function(t){if(!t||!t.length)return[];var e=0;return t=uT(t,(function(t){if(Rw(r=t)&&vM(r))return e=UT(t.length,e),!0;var r})),xM(e,(function(e){return Fw(t,(r=e,function(t){return null==t?void 0:t[r]}));var r}))}));let HT,qT=t=>t;customElements.define("batch-tile",class extends ft{render(){return this.localAppConf=this.appConf.find((t=>"batch-tile"===t.type)),this.formFields=this.appConf.find((t=>"input-tile"===t.type)).fields,this.subComponents=this.appConf.find((t=>"input-tile"===t.type)).subComponents,this.fileData=null,[super.render(),E(HT||(HT=qT`
        <h2>${0}</h2>
        <h4>1. Get the template</h4>
        <button
          class="btn btn-outline-secondary"
          @click=${0}
        >
          Download Template
        </button>
        <h4>2. Fill the template.</h4>
        <p>
          Each column is a single calculation that will be run. Columns must be
          complete. Do not edit the generated fields. Any data that extends
          below the generated fields will not be used.
        </p>
        <h4>3. Upload the file</h4>
        <div class="input-group">
          <input class="form-control" type="file" id="dropbox" accept=".csv" />
          <button
            id="dropbox-button"
            class="btn btn-outline-secondary"
            @click=${0}
          >
            Submit file
          </button>
        </div>
      `),E([this.localAppConf.title]),(()=>this.generateCSV()),(()=>this.runCalc()))]}firstUpdated(t){let e;super.firstUpdated(t),e=document.getElementById("dropbox"),e.addEventListener("change",(t=>this.clickFile(t)),!1),e.addEventListener("dragenter",(t=>this.dragenter(t)),!1),e.addEventListener("dragover",(t=>this.dragover(t)),!1),e.addEventListener("drop",(t=>this.drop(t)),!1)}dragenter(t){t.stopPropagation(),t.preventDefault()}dragover(t){t.stopPropagation(),t.preventDefault()}drop(t){t.stopPropagation(),t.preventDefault();const e=t.dataTransfer,{files:r}=e;1!==r.length?window.alert("Single file upload only. All files removed."):this.handleFile(r[0])}clickFile(t){const{files:e}=t.currentTarget;1!==e.length?window.alert("Single file upload only. All files removed."):this.handleFile(e[0])}async handleFile(t){null!==this.fileData&&window.alert("Single file upload only. Previous file is removed.");t.text().then((t=>{this.fileData=t}),(t=>{window.alert(`file load failed with error ${t}`),this.fileData=null}))}generateCSV(){const t=[];let e,r=0;this.subComponents.forEach(((n,a)=>{"radio-tile"===n.type&&(t[r]=["Radio Choice:",n.title,a].join(","),r+=1,e=1,Object.entries(n.options).forEach((([n,a])=>{t[r]=[e,n,a[0]].join(","),r+=1,e+=1})))})),t[r]=["Main Fields:"].join(","),r+=1,Object.keys(this.formFields).forEach((e=>{Object.entries(this.formFields[e]).forEach((([n,a])=>{t[r]=[e,n,a[0]].join(","),r+=1}))}));const n=t.join("\n"),a=new Blob([n],{type:"text,csv;charset=utf-8;"});Tw(a,`${this.appName}-template.csv`)}runCalc(){let t=this.fileData.split("\n").map((t=>t.split(",").map((t=>t.replace(/(\r\n|\n|\r)/gm,"")))));t=VT(...t);const e=jT(this.appConf,5);const r=[];let n,a,i,o=0,s=!0;e.forEach((t=>{["input-tile","derived-input-tile","output-tile"].includes(t.type)&&(Object.entries(t.subComponents).forEach((([t,e])=>{"radio-tile"===e.type&&(r[o]=["radio choice",e.title,t].join(","),o+=1,n=1,Object.entries(e.options).forEach((([t,e])=>{r[o]=[n,t].join(","),o+=1,n+=1})))})),!0===s&&(r[o]=["Main Fields:"].join(","),o+=1,s=!1),Object.keys(t.fields).forEach((e=>{Object.entries(t.fields[e]).forEach((([t,n])=>{r[o]=[e,t].join(","),o+=1}))})))})),t.slice(2).forEach((n=>{n.forEach(((r,n)=>{var o;"Radio Choice:"===t[0][n]?(a="radio",i=t[2][n]):"Main Fields:"===t[0][n]?a="main":"radio"===a?e.find((t=>"input-tile"===t.type)).subComponents[i].options[t[1][n]][0]=!![1,"1","TRUE","True","true","T","t","y","yes"].includes(o=r)||![0,"0","FALSE","False","false","F","f","n","no",""].includes(o)&&void window.alert(`${o} is not a valid boolean option in input csv`):"main"===a&&(e.find((t=>"input-tile"===t.type)).fields[t[0][n]][t[1][n]][0]=Number(r))})),this.launchCloneCalc(e),o=0,s=!0,e.forEach((t=>{["input-tile","derived-input-tile","output-tile"].includes(t.type)&&(Object.entries(t.subComponents).forEach((([t,e])=>{"radio-tile"===e.type&&(o+=1,Object.entries(e.options).forEach((([t,e])=>{r[o]=[r[o],e[0]].join(","),o+=1})))})),!0===s&&(o+=1,s=!1),Object.keys(t.fields).forEach((e=>{Object.entries(t.fields[e]).forEach((([t,e])=>{r[o]=[r[o],e[0]].join(","),o+=1}))})))}))}));const l=r.join("\n"),u=new Blob([l],{type:"text,csv;charset=utf-8;"});Tw(u,`${this.appName}-output.csv`),document.getElementById("dropbox").value="",this.fileData=null}launchCloneCalc(t){const e=new CustomEvent("cloneCalc",{detail:{appConfClone:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}});export{eT as M,Z as S,ft as T,Ew as a,Dw as b,so as c,Nw as d,Fw as e,mM as f,lM as g,TM as h,Rw as i,Bw as j,fM as k,bg as l,ew as m,Mg as n,Tg as o,E as p,kg as q,Ag as r,Eg as s,Cg as t,Bb as u,jb as v,Ub as w,Hb as x,qb as y,Gb as z};