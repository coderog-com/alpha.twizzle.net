import{b as j,c as he,d as b,e as c,f as P,g as d,h as I,j as hr,l as fr,m as Et,n as w,o as T,p as M,q as yr,s as wr,u as Nt,v as vr,w as D}from"./chunk-WVZWHAHI.js";import{a as cr,b as dr,c as gr}from"./chunk-YEU3QODT.js";import{e as sr,f as lr,k as pr,l as mr,n as ur,o as ge}from"./chunk-6QGFZL3G.js";import{a as St,b as It,c as Dt,e as Lt,h as kt,j as u,k as q,l as H,m as N,n as R,o as Ct,p as ar,r as y}from"./chunk-Q4G5UL72.js";function ji(n,e){let t=lr[n]?.groups;return t?t[e]??"Stickering":"Stickering"}var fe=class extends c{getDefaultValue(){return null}};function X(n,e){if(n===e)return!0;if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e,t){if(n===e)return!0;if(n.length!==e.length)return!1;for(let r=0;r<n.length;r++)if(!t(n[r],e[r]))return!1;return!0}function J(n,e,t){return Ct(n,t-e,e)}var Ot=class{constructor(e){this.model=e;e.tempoScale.addFreshListener(t=>{this.tempoScale=t})}catchingUp=!1;pendingFrame=!1;tempoScale;scheduler=new j(this.animFrame.bind(this));start(){this.catchingUp||(this.lastTimestamp=performance.now()),this.catchingUp=!0,this.pendingFrame=!0,this.scheduler.requestAnimFrame()}stop(){this.catchingUp=!1,this.scheduler.cancelAnimFrame()}catchUpMs=500;lastTimestamp=0;animFrame(e){this.scheduler.requestAnimFrame();let t=this.tempoScale*(e-this.lastTimestamp)/this.catchUpMs;this.lastTimestamp=e,this.model.catchUpMove.set((async()=>{let r=await this.model.catchUpMove.get();if(r.move===null)return r;let i=r.amount+t;return i>=1?(this.pendingFrame=!0,this.stop(),this.model.timestampRequest.set("end"),{move:null,amount:0}):(this.pendingFrame=!1,{move:r.move,amount:i})})())}},ye=class{constructor(e,t){this.delegate=t;this.model=e,this.lastTimestampPromise=this.#e(),this.model.playingInfo.addFreshListener(this.onPlayingProp.bind(this)),this.catchUpHelper=new Ot(this.model),this.model.catchUpMove.addFreshListener(this.onCatchUpMoveProp.bind(this))}playing=!1;direction=1;catchUpHelper;model;lastDatestamp=0;lastTimestampPromise;scheduler=new j(this.animFrame.bind(this));async onPlayingProp(e){e.playing!==this.playing&&(e.playing?this.play(e):this.pause())}async onCatchUpMoveProp(e){let t=e.move!==null;t!==this.catchUpHelper.catchingUp&&(t?this.catchUpHelper.start():this.catchUpHelper.stop()),this.scheduler.requestAnimFrame()}async#e(){return(await this.model.detailedTimelineInfo.get()).timestamp}jumpToStart(e){this.model.timestampRequest.set("start"),this.pause(),e?.flash&&this.delegate.flash()}jumpToEnd(e){this.model.timestampRequest.set("end"),this.pause(),e?.flash&&this.delegate.flash()}playPause(){this.playing?this.pause():this.play()}async play(e){let t=e?.direction??1,r=await this.model.coarseTimelineInfo.get();(e?.autoSkipToOtherEndIfStartingAtBoundary??!0)&&(t===1&&r.atEnd&&(this.model.timestampRequest.set("start"),this.delegate.flash()),t===-1&&r.atStart&&(this.model.timestampRequest.set("end"),this.delegate.flash())),this.model.playingInfo.set({playing:!0,direction:t,untilBoundary:e?.untilBoundary??"entire-timeline",loop:e?.loop??!1}),this.playing=!0,this.lastDatestamp=performance.now(),this.lastTimestampPromise=this.#e(),this.scheduler.requestAnimFrame()}pause(){this.playing=!1,this.scheduler.cancelAnimFrame(),this.model.playingInfo.set({playing:!1,untilBoundary:"entire-timeline"})}#t=new he;async animFrame(e){this.playing&&this.scheduler.requestAnimFrame();let t=this.lastDatestamp,r=await this.#t.queue(Promise.all([this.model.playingInfo.get(),this.lastTimestampPromise,this.model.timeRange.get(),this.model.tempoScale.get(),this.model.currentMoveInfo.get()])),[i,o,a,s,l]=r;if(!i.playing){this.playing=!1;return}let m=l.earliestEnd;(l.currentMoves.length===0||i.untilBoundary==="entire-timeline")&&(m=a.end);let p=l.latestStart;(l.currentMoves.length===0||i.untilBoundary==="entire-timeline")&&(p=a.start);let h=(e-t)*this.direction*s;h=Math.max(h,1),h*=i.direction;let f=o+h,z=null;f>=m?i.loop?f=J(f,a.start,a.end):(f===a.end?z="end":f=m,this.playing=!1,this.model.playingInfo.set({playing:!1})):f<=p&&(i.loop?f=J(f,a.start,a.end):(f===a.start?z="start":f=p,this.playing=!1,this.model.playingInfo.set({playing:!1}))),this.lastDatestamp=e,this.lastTimestampPromise=Promise.resolve(f),this.model.timestampRequest.set(z??f)}};var we=class{constructor(e,t){this.model=e;this.animationController=new ye(e,t)}animationController;jumpToStart(e){this.animationController.jumpToStart(e)}jumpToEnd(e){this.animationController.jumpToEnd(e)}togglePlay(e){typeof e>"u"&&this.animationController.playPause(),e?this.animationController.play():this.animationController.pause()}async visitTwizzleLink(){let e=document.createElement("a");e.href=await this.model.twizzleLink(),e.target="_blank",e.click()}};var Mr={"bottom-row":!0,none:!0},ve=class extends c{getDefaultValue(){return"auto"}};var xe=new T(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
}

.wrapper > * {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.wrapper.back-view-side-by-side {
  grid-template-columns: 1fr 1fr;
}

.wrapper.back-view-top-right {
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 3fr;
}

.wrapper.back-view-top-right > :nth-child(1) {
  grid-row: 1 / 3;
  grid-column: 1 / 3;
}

.wrapper.back-view-top-right > :nth-child(2) {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
}
`);var Me="http://www.w3.org/2000/svg",zr="data-copy-id",Tr=0;function oi(){return Tr+=1,`svg${Tr.toString()}`}var ai={dim:{white:"#dddddd",orange:"#884400",limegreen:"#008800",red:"#660000","rgb(34, 102, 255)":"#000088",yellow:"#888800","rgb(102, 0, 153)":"rgb(50, 0, 76)",purple:"#3f003f"},oriented:"#44ddcc",ignored:"#555555",invisible:"#00000000"},ee=class{constructor(e,t,r,i=!1){this.kpuzzle=e;this.showUnknownOrientations=i;if(!t)throw new Error(`No SVG definition for puzzle type: ${e.name()}`);this.svgID=oi(),this.wrapperElement=document.createElement("div"),this.wrapperElement.classList.add("svg-wrapper"),this.wrapperElement.innerHTML=t;let o=this.wrapperElement.querySelector("svg");if(!o)throw new Error("Could not get SVG element");if(this.svgElement=o,Me!==o.namespaceURI)throw new Error("Unexpected XML namespace");o.style.maxWidth="100%",o.style.maxHeight="100%",this.gradientDefs=document.createElementNS(Me,"defs"),o.insertBefore(this.gradientDefs,o.firstChild);for(let a of e.definition.orbits)for(let s=0;s<a.numPieces;s++)for(let l=0;l<a.numOrientations;l++){let m=this.elementID(a.orbitName,s,l),p=this.elementByID(m),h=p?.style.fill;r?(()=>{let f=r.orbits;if(!f)return;let z=f[a.orbitName];if(!z)return;let x=z.pieces[s];if(!x)return;let F=x.facelets[l];if(!F)return;let B=typeof F=="string"?F:F?.mask,A=ai[B];typeof A=="string"?h=A:A&&(h=A[h])})():h=p?.style.fill,this.originalColors[m]=h,this.gradients[m]=this.newGradient(m,h),this.gradientDefs.appendChild(this.gradients[m]),p?.setAttribute("style",`fill: url(#grad-${this.svgID}-${m})`)}for(let a of Array.from(o.querySelectorAll(`[${zr}]`))){let s=a.getAttribute(zr);a.setAttribute("style",`fill: url(#grad-${this.svgID}-${s})`)}this.showUnknownOrientations&&this.drawPattern(this.kpuzzle.defaultPattern())}wrapperElement;svgElement;gradientDefs;originalColors={};gradients={};svgID;drawPattern(e,t,r){this.draw(e,t,r)}draw(e,t,r){let i=t?.experimentalToTransformation();if(!e)throw new Error("Distinguishable pieces are not handled for SVG yet!");for(let o of e.kpuzzle.definition.orbits){let a=e.patternData[o.orbitName],s=i?i.transformationData[o.orbitName]:null;for(let l=0;l<o.numPieces;l++)for(let m=0;m<o.numOrientations;m++){let p=this.elementID(o.orbitName,l,m),h=this.elementID(o.orbitName,a.pieces[l],(o.numOrientations-a.orientation[l]+m)%o.numOrientations),f=!1;if(s){let z=this.elementID(o.orbitName,s.permutation[l],(o.numOrientations-s.orientationDelta[l]+m)%o.numOrientations);h===z&&(f=!0),r=r||0;let x=100*(1-r*r*(2-r*r));this.gradients[p].children[0].setAttribute("stop-color",this.originalColors[h]),this.gradients[p].children[0].setAttribute("offset",`${Math.max(x-5,0)}%`),this.gradients[p].children[1].setAttribute("offset",`${Math.max(x-5,0)}%`),this.gradients[p].children[2].setAttribute("offset",`${x}%`),this.gradients[p].children[3].setAttribute("offset",`${x}%`),this.gradients[p].children[3].setAttribute("stop-color",this.originalColors[z])}else f=!0;f&&(this.showUnknownOrientations&&a.orientationMod?.[l]===1?(this.gradients[p].children[0].setAttribute("stop-color","#000"),this.gradients[p].children[0].setAttribute("offset","5%"),this.gradients[p].children[1].setAttribute("offset","5%"),this.gradients[p].children[2].setAttribute("offset","20%"),this.gradients[p].children[3].setAttribute("offset","20%"),this.gradients[p].children[3].setAttribute("stop-color",this.originalColors[h])):(this.gradients[p].children[0].setAttribute("stop-color",this.originalColors[h]),this.gradients[p].children[0].setAttribute("offset","100%"),this.gradients[p].children[1].setAttribute("offset","100%"),this.gradients[p].children[2].setAttribute("offset","100%"),this.gradients[p].children[3].setAttribute("offset","100%")))}}}newGradient(e,t){let r=document.createElementNS(Me,"radialGradient");r.setAttribute("id",`grad-${this.svgID}-${e}`),r.setAttribute("r","70.7107%");let i=[{offset:0,color:t},{offset:0,color:"black"},{offset:0,color:"black"},{offset:0,color:t}];for(let o of i){let a=document.createElementNS(Me,"stop");a.setAttribute("offset",`${o.offset}%`),a.setAttribute("stop-color",o.color),a.setAttribute("stop-opacity","1"),r.appendChild(a)}return r}elementID(e,t,r){return`${e}-l${t}-o${r}`}elementByID(e){return this.wrapperElement.querySelector(`#${e}`)}};var Pr=new T(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
}

.svg-wrapper,
twisty-2d-svg,
svg {
  width: 100%;
  height: 100%;
  display: grid;
  min-height: 0;
}

svg {
  animation: fade-in 0.25s ease-in;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
`);var te=class extends M{constructor(t,r,i,o,a){super();this.model=t;this.kpuzzle=r;this.svgSource=i;this.options=o;this.puzzleLoader=a;this.addCSS(Pr),this.resetSVG(),this.#t.addListener(this.model.puzzleID,s=>{a?.id!==s&&this.disconnect()}),this.#t.addListener(this.model.legacyPosition,this.onPositionChange.bind(this)),this.options?.experimentalStickeringMask&&this.experimentalSetStickeringMask(this.options.experimentalStickeringMask)}svgWrapper;scheduler=new j(this.render.bind(this));#e=null;#t=new I;disconnect(){this.#t.disconnect()}onPositionChange(t){try{if(t.movesInProgress.length>0){let r=t.movesInProgress[0].move,i=r;t.movesInProgress[0].direction===-1&&(i=r.invert());let o=t.pattern.applyMove(i);this.svgWrapper.draw(t.pattern,o,t.movesInProgress[0].fraction)}else this.svgWrapper.draw(t.pattern),this.#e=t}catch(r){console.warn("Bad position (this doesn't necessarily mean something is wrong). Pre-emptively disconnecting:",this.puzzleLoader?.id,r),this.disconnect()}}scheduleRender(){this.scheduler.requestAnimFrame()}experimentalSetStickeringMask(t){this.resetSVG(t)}resetSVG(t){this.svgWrapper&&this.removeElement(this.svgWrapper.wrapperElement),this.kpuzzle&&(this.svgWrapper=new ee(this.kpuzzle,this.svgSource,t),this.addElement(this.svgWrapper.wrapperElement),this.#e&&this.onPositionChange(this.#e))}render(){}};w.define("twisty-2d-puzzle",te);var ze=class{constructor(e,t,r,i){this.model=e;this.schedulable=t;this.puzzleLoader=r;this.effectiveVisualization=i;this.twisty2DPuzzle(),this.#e.addListener(this.model.twistySceneModel.stickeringMask,async o=>{(await this.twisty2DPuzzle()).experimentalSetStickeringMask(o)})}#e=new I;disconnect(){this.#e.disconnect()}scheduleRender(){}#t=null;async twisty2DPuzzle(){return this.#t??=(async()=>{let e=this.effectiveVisualization==="experimental-2D-LL"?this.puzzleLoader.llSVG():this.puzzleLoader.svg();return new te(this.model,await this.puzzleLoader.kpuzzle(),await e,{},this.puzzleLoader)})()}};var re=class extends M{constructor(t,r){super();this.model=t;this.effectiveVisualization=r}#e=new I;disconnect(){this.#e.disconnect()}async connectedCallback(){this.addCSS(xe),this.model&&this.#e.addListener(this.model.twistyPlayerModel.puzzleLoader,this.onPuzzleLoader.bind(this))}#t;async scene(){return this.#t??=(async()=>new(await D).Scene)()}scheduleRender(){this.#r?.scheduleRender()}#r=null;currentTwisty2DPuzzleWrapper(){return this.#r}async setCurrentTwisty2DPuzzleWrapper(t){let r=this.#r;this.#r=t,r?.disconnect();let i=t.twisty2DPuzzle();this.contentWrapper.textContent="",this.addElement(await i)}async onPuzzleLoader(t){this.#r?.disconnect();let r=new ze(this.model.twistyPlayerModel,this,t,this.effectiveVisualization);this.setCurrentTwisty2DPuzzleWrapper(r)}};w.define("twisty-2d-scene-wrapper",re);var L=class{constructor(e,t,r){this.elem=e;this.prefix=t;this.validSuffixes=r}#e=null;clearValue(){this.#e&&this.elem.contentWrapper.classList.remove(this.#e),this.#e=null}setValue(e){if(!this.validSuffixes.includes(e))throw new Error(`Invalid suffix: ${e}`);let t=`${this.prefix}${e}`,r=this.#e!==t;return r&&(this.clearValue(),this.elem.contentWrapper.classList.add(t),this.#e=t),r}};var G=class{#e;reject;promise=new Promise((e,t)=>{this.#e=e,this.reject=t});handleNewValue(e){this.#e(e)}};var K=class extends EventTarget{constructor(t,r,i,o){super();this.model=t;this.schedulable=r;this.puzzleLoader=i;this.visualizationStrategy=o;this.twisty3DPuzzle(),this.#e.addListener(this.model.puzzleLoader,a=>{this.puzzleLoader.id!==a.id&&this.disconnect()}),this.#e.addListener(this.model.legacyPosition,async a=>{try{(await this.twisty3DPuzzle()).onPositionChange(a),this.scheduleRender()}catch{this.disconnect()}}),this.#e.addListener(this.model.twistySceneModel.hintFacelet,async a=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({hintFacelets:a==="auto"?"floating":a}),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.foundationDisplay,async a=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({showFoundation:a!=="none"}),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.stickeringMask,async a=>{(await this.twisty3DPuzzle()).setStickeringMask(a),this.scheduleRender()}),this.#e.addListener(this.model.twistySceneModel.faceletScale,async a=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({faceletScale:a}),this.scheduleRender()}),this.#e.addMultiListener3([this.model.twistySceneModel.stickeringMask,this.model.twistySceneModel.foundationStickerSprite,this.model.twistySceneModel.hintStickerSprite],async a=>{"experimentalUpdateTexture"in await this.twisty3DPuzzle()&&((await this.twisty3DPuzzle()).experimentalUpdateTexture(a[0].specialBehaviour==="picture",a[1],a[2]),this.scheduleRender())})}#e=new I;disconnect(){this.#e.disconnect()}scheduleRender(){this.schedulable.scheduleRender(),this.dispatchEvent(new CustomEvent("render-scheduled"))}#t=null;async twisty3DPuzzle(){return this.#t??=(async()=>{let t=vr();if(this.puzzleLoader.id==="3x3x3"&&this.visualizationStrategy==="Cube3D"){let[r,i,o,a]=await Promise.all([this.model.twistySceneModel.foundationStickerSprite.get(),this.model.twistySceneModel.hintStickerSprite.get(),this.model.twistySceneModel.stickeringMask.get(),this.model.twistySceneModel.initialHintFaceletsAnimation.get()]);return(await t).cube3DShim(()=>this.schedulable.scheduleRender(),{foundationSprite:r,hintSprite:i,experimentalStickeringMask:o,initialHintFaceletsAnimation:a})}else{let[r,i,o,a]=await Promise.all([this.model.twistySceneModel.hintFacelet.get(),this.model.twistySceneModel.foundationStickerSprite.get(),this.model.twistySceneModel.hintStickerSprite.get(),this.model.twistySceneModel.faceletScale.get()]),s=(await t).pg3dShim(()=>this.schedulable.scheduleRender(),this.puzzleLoader,r==="auto"?"floating":r,a,this.puzzleLoader.id==="kilominx");return s.then(l=>l.experimentalUpdateTexture(!0,i??void 0,o??void 0)),s}})()}async raycastMove(t,r){let i=await this.twisty3DPuzzle();if(!("experimentalGetControlTargets"in i)){console.info("not PG3D! skipping raycast");return}let o=i.experimentalGetControlTargets(),[a,s]=await Promise.all([t,this.model.twistySceneModel.movePressCancelOptions.get()]),l=a.intersectObjects(o);if(l.length>0){let m=i.getClosestMoveToAxis(l[0].point,r);m?this.model.experimentalAddMove(m.move,{cancel:s}):console.info("Skipping move!")}}};var Y=class extends M{constructor(t){super();this.model=t}#e=new L(this,"back-view-",["auto","none","side-by-side","top-right"]);#t=new I;disconnect(){this.#t.disconnect()}async connectedCallback(){this.addCSS(xe);let t=new Nt(this.model,this);this.addVantage(t),this.model&&(this.#t.addMultiListener([this.model.puzzleLoader,this.model.visualizationStrategy],this.onPuzzle.bind(this)),this.#t.addListener(this.model.backView,this.onBackView.bind(this))),this.scheduleRender()}#r=null;setBackView(t){let r=["side-by-side","top-right"].includes(t),i=this.#r!==null;this.#e.setValue(t),r?i||(this.#r=new Nt(this.model,this,{backView:!0}),this.addVantage(this.#r),this.scheduleRender()):this.#r&&(this.removeVantage(this.#r),this.#r=null)}onBackView(t){this.setBackView(t)}async onPress(t){let r=this.#o;if(!r){console.info("no wrapper; skipping scene wrapper press!");return}let i=(async()=>{let[o,a]=await Promise.all([t.detail.cameraPromise,D]),s=new a.Raycaster,l=new(await D).Vector2(t.detail.pressInfo.normalizedX,t.detail.pressInfo.normalizedY);return s.setFromCamera(l,o),s})();r.raycastMove(i,{invert:!t.detail.pressInfo.rightClick,depth:t.detail.pressInfo.keys.ctrlOrMetaKey?"rotation":t.detail.pressInfo.keys.shiftKey?"secondSlice":"none"})}#i;async scene(){return this.#i??=(async()=>new(await D).Scene)()}#n=new Set;addVantage(t){t.addEventListener("press",this.onPress.bind(this)),this.#n.add(t),this.contentWrapper.appendChild(t)}removeVantage(t){this.#n.delete(t),t.remove(),t.disconnect(),this.#o?.disconnect()}experimentalVantages(){return this.#n.values()}scheduleRender(){for(let t of this.#n)t.scheduleRender()}#o=null;async setCurrentTwisty3DPuzzleWrapper(t,r){let i=this.#o;try{this.#o=r,i?.disconnect(),t.add(await r.twisty3DPuzzle())}finally{i&&t.remove(await i.twisty3DPuzzle())}this.#a.handleNewValue(r)}#a=new G;async experimentalTwisty3DPuzzleWrapper(){return this.#o||this.#a.promise}#s=new he;async onPuzzle(t){if(t[1]==="2D")return;this.#o?.disconnect();let[r,i]=await this.#s.queue(Promise.all([this.scene(),new K(this.model,this,t[0],t[1])]));this.setCurrentTwisty3DPuzzleWrapper(r,i)}};w.define("twisty-3d-scene-wrapper",Y);var br=new T(`
:host {
  width: 384px;
  height: 24px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.wrapper {
  grid-auto-flow: column;
}

.viewer-link-none .twizzle-link-button {
  display: none;
}

.wrapper twisty-button,
.wrapper twisty-control-button {
  width: inherit;
  height: inherit;
}
`),Ar=new T(`
:host:not([hidden]) {
  display: grid;
}

:host {
  width: 48px;
  height: 24px;
}

.wrapper {
  width: 100%;
  height: 100%;
}

button {
  width: 100%;
  height: 100%;
  border: none;
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  background-color: rgba(196, 196, 196, 0.75);
}

button:enabled {
  background-color: rgba(196, 196, 196, 0.75)
}

.dark-mode button:enabled {
  background-color: #88888888;
}

button:disabled {
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0.25;
  pointer-events: none;
}

.dark-mode button:disabled {
  background-color: #ffffff44;
}

button:enabled:hover {
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

/* TODO: fullscreen icons have too much padding?? */
.svg-skip-to-start button,
button.svg-skip-to-start {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjQzIDEwMzdxMTktMTkgMzItMTN0MTMgMzJ2MTQ3MnEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtOS05LTEzLTE5djcxMHEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtOS05LTEzLTE5djY3OHEwIDI2LTE5IDQ1dC00NSAxOUg5NjBxLTI2IDAtNDUtMTl0LTE5LTQ1VjEwODhxMC0yNiAxOS00NXQ0NS0xOWgxMjhxMjYgMCA0NSAxOXQxOSA0NXY2NzhxNC0xMSAxMy0xOWw3MTAtNzEwcTE5LTE5IDMyLTEzdDEzIDMydjcxMHE0LTExIDEzLTE5eiIvPjwvc3ZnPg==");
}

.svg-skip-to-end button,
button.svg-skip-to-end {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik05NDEgMjU0N3EtMTkgMTktMzIgMTN0LTEzLTMyVjEwNTZxMC0yNiAxMy0zMnQzMiAxM2w3MTAgNzEwcTggOCAxMyAxOXYtNzEwcTAtMjYgMTMtMzJ0MzIgMTNsNzEwIDcxMHE4IDggMTMgMTl2LTY3OHEwLTI2IDE5LTQ1dDQ1LTE5aDEyOHEyNiAwIDQ1IDE5dDE5IDQ1djE0MDhxMCAyNi0xOSA0NXQtNDUgMTloLTEyOHEtMjYgMC00NS0xOXQtMTktNDV2LTY3OHEtNSAxMC0xMyAxOWwtNzEwIDcxMHEtMTkgMTktMzIgMTN0LTEzLTMydi03MTBxLTUgMTAtMTMgMTl6Ii8+PC9zdmc+");
}

.svg-step-forward button,
button.svg-step-forward {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjg4IDE1NjhxMCAyNi0xOSA0NWwtNTEyIDUxMnEtMTkgMTktNDUgMTl0LTQ1LTE5cS0xOS0xOS0xOS00NXYtMjU2aC0yMjRxLTk4IDAtMTc1LjUgNnQtMTU0IDIxLjVxLTc2LjUgMTUuNS0xMzMgNDIuNXQtMTA1LjUgNjkuNXEtNDkgNDIuNS04MCAxMDF0LTQ4LjUgMTM4LjVxLTE3LjUgODAtMTcuNSAxODEgMCA1NSA1IDEyMyAwIDYgMi41IDIzLjV0Mi41IDI2LjVxMCAxNS04LjUgMjV0LTIzLjUgMTBxLTE2IDAtMjgtMTctNy05LTEzLTIydC0xMy41LTMwcS03LjUtMTctMTAuNS0yNC0xMjctMjg1LTEyNy00NTEgMC0xOTkgNTMtMzMzIDE2Mi00MDMgODc1LTQwM2gyMjR2LTI1NnEwLTI2IDE5LTQ1dDQ1LTE5cTI2IDAgNDUgMTlsNTEyIDUxMnExOSAxOSAxOSA0NXoiLz48L3N2Zz4=");
}

.svg-step-backward button,
button.svg-step-backward {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjg4IDIwNDhxMCAxNjYtMTI3IDQ1MS0zIDctMTAuNSAyNHQtMTMuNSAzMHEtNiAxMy0xMyAyMi0xMiAxNy0yOCAxNy0xNSAwLTIzLjUtMTB0LTguNS0yNXEwLTkgMi41LTI2LjV0Mi41LTIzLjVxNS02OCA1LTEyMyAwLTEwMS0xNy41LTE4MXQtNDguNS0xMzguNXEtMzEtNTguNS04MC0xMDF0LTEwNS41LTY5LjVxLTU2LjUtMjctMTMzLTQyLjV0LTE1NC0yMS41cS03Ny41LTYtMTc1LjUtNmgtMjI0djI1NnEwIDI2LTE5IDQ1dC00NSAxOXEtMjYgMC00NS0xOWwtNTEyLTUxMnEtMTktMTktMTktNDV0MTktNDVsNTEyLTUxMnExOS0xOSA0NS0xOXQ0NSAxOXExOSAxOSAxOSA0NXYyNTZoMjI0cTcxMyAwIDg3NSA0MDMgNTMgMTM0IDUzIDMzM3oiLz48L3N2Zz4=");
}

.svg-pause button,
button.svg-pause {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNTYwIDEwODh2MTQwOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NVYxMDg4cTAtMjYgMTktNDV0NDUtMTloNTEycTI2IDAgNDUgMTl0MTkgNDV6bS04OTYgMHYxNDA4cTAgMjYtMTkgNDV0LTQ1IDE5aC01MTJxLTI2IDAtNDUtMTl0LTE5LTQ1VjEwODhxMC0yNiAxOS00NXQ0NS0xOWg1MTJxMjYgMCA0NSAxOXQxOSA0NXoiLz48L3N2Zz4=");
}

.svg-play button,
button.svg-play {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNDcyLjUgMTgyM2wtMTMyOCA3MzhxLTIzIDEzLTM5LjUgM3QtMTYuNS0zNlYxMDU2cTAtMjYgMTYuNS0zNnQzOS41IDNsMTMyOCA3MzhxMjMgMTMgMjMgMzF0LTIzIDMxeiIvPjwvc3ZnPg==");
}

.svg-enter-fullscreen button,
button.svg-enter-fullscreen {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgd2lkdGg9IjI4Ij48cGF0aCBkPSJNMiAyaDI0djI0SDJ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTkgMTZIN3Y1aDV2LTJIOXYtM3ptLTItNGgyVjloM1Y3SDd2NXptMTIgN2gtM3YyaDV2LTVoLTJ2M3pNMTYgN3YyaDN2M2gyVjdoLTV6Ii8+PC9zdmc+");
}

.svg-exit-fullscreen button,
button.svg-exit-fullscreen {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgd2lkdGg9IjI4Ij48cGF0aCBkPSJNMiAyaDI0djI0SDJ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTcgMThoM3YzaDJ2LTVIN3Yyem0zLThIN3YyaDVWN2gtMnYzem02IDExaDJ2LTNoM3YtMmgtNXY1em0yLTExVjdoLTJ2NWg1di0yaC0zeiIvPjwvc3ZnPg==");
}

.svg-twizzle-tw button,
button.svg-twizzle-tw {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODY0IiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzk3LjU4MSAxNTEuMTh2NTcuMDg0aC04OS43MDN2MjQwLjM1MmgtNjYuOTU1VjIwOC4yNjRIMTUxLjIydi01Ny4wODNoMjQ2LjM2MXptNTQuMzEgNzEuNjc3bDcuNTEyIDMzLjY5MmMyLjcxOCAxMi4xNiA1LjU4IDI0LjY4IDguNTg0IDM3LjU1NWEyMTgwLjc3NSAyMTgwLjc3NSAwIDAwOS40NDIgMzguODQzIDEyNjYuMyAxMjY2LjMgMCAwMDEwLjA4NiAzNy41NTVjMy43Mi0xMi41OSA3LjM2OC0yNS40NjYgMTAuOTQ1LTM4LjYyOCAzLjU3Ni0xMy4xNjIgNy4wMS0yNi4xMSAxMC4zLTM4Ljg0M2w1Ljc2OS0yMi40NTZjMS4yNDgtNC44ODcgMi40NzItOS43MDUgMy42NzQtMTQuNDU1IDMuMDA0LTExLjg3NSA1LjY1MS0yMi45NjIgNy45NC0zMy4yNjNoNDYuMzU0bDIuMzg0IDEwLjU2M2EyMDAwLjc3IDIwMDAuNzcgMCAwMDMuOTM1IDE2LjgyOGw2LjcxMSAyNy43MWMxLjIxMyA0Ljk1NiAyLjQ1IDkuOTggMy43MDkgMTUuMDczYTMxMTkuNzc3IDMxMTkuNzc3IDAgMDA5Ljg3MSAzOC44NDMgMTI0OS4yMjcgMTI0OS4yMjcgMCAwMDEwLjczIDM4LjYyOCAxOTA3LjYwNSAxOTA3LjYwNSAwIDAwMTAuMzAxLTM3LjU1NSAxMzk3Ljk0IDEzOTcuOTQgMCAwMDkuNjU3LTM4Ljg0M2w0LjQtMTkuMDQ2Yy43MTUtMy4xMyAxLjQyMS02LjIzNiAyLjExOC05LjMyMWw5LjU3Ny00Mi44OGg2Ni41MjZhMjk4OC43MTggMjk4OC43MTggMCAwMS0xOS41MjkgNjYuMzExbC01LjcyOCAxOC40ODJhMzIzNy40NiAzMjM3LjQ2IDAgMDEtMTQuMDE1IDQzLjc1MmMtNi40MzggMTkuNi0xMi43MzMgMzcuNjk4LTE4Ljg4NSA1NC4yOTRsLTMuMzA2IDguODI1Yy00Ljg4NCAxMi44OTgtOS40MzMgMjQuMjYzLTEzLjY0NyAzNC4wOTVoLTQ5Ljc4N2E4NDE3LjI4OSA4NDE3LjI4OSAwIDAxLTIxLjAzMS02NC44MDkgMTI4OC42ODYgMTI4OC42ODYgMCAwMS0xOC44ODUtNjQuODEgMTk3Mi40NDQgMTk3Mi40NDQgMCAwMS0xOC4yNCA2NC44MSAyNTc5LjQxMiAyNTc5LjQxMiAwIDAxLTIwLjM4OCA2NC44MWgtNDkuNzg3Yy00LjY4Mi0xMC45MjYtOS43Mi0yMy43NDMtMTUuMTEtMzguNDUxbC0xLjYyOS00LjQ3Yy01LjI1OC0xNC41MjEtMTAuNjgtMzAuMTkyLTE2LjI2Ni00Ny4wMTRsLTIuNDA0LTcuMjhjLTYuNDM4LTE5LjYtMTMuMDItNDAuMzQ0LTE5Ljc0My02Mi4yMzRhMjk4OC43MDcgMjk4OC43MDcgMCAwMS0xOS41MjktNjYuMzExaDY3LjM4NXoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==");
}
`);var S=typeof document>"u"?null:document;var Sr=S?.fullscreenEnabled||!!S?.webkitFullscreenEnabled;function Ir(){return document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen()}function Vt(){return document.fullscreenElement?document.fullscreenElement:document.webkitFullscreenElement??null}function Dr(n){return n.requestFullscreen?n.requestFullscreen():n.webkitRequestFullscreen()}var Lr=["skip-to-start","skip-to-end","step-forward","step-backward","pause","play","enter-fullscreen","exit-fullscreen","twizzle-tw"],Te=class extends d{derive(e){return{fullscreen:{enabled:Sr,icon:document.fullscreenElement===null?"enter-fullscreen":"exit-fullscreen",title:"Enter fullscreen"},"jump-to-start":{enabled:!e.coarseTimelineInfo.atStart,icon:"skip-to-start",title:"Restart"},"play-step-backwards":{enabled:!e.coarseTimelineInfo.atStart,icon:"step-backward",title:"Step backward"},"play-pause":{enabled:!(e.coarseTimelineInfo.atStart&&e.coarseTimelineInfo.atEnd),icon:e.coarseTimelineInfo.playing?"pause":"play",title:e.coarseTimelineInfo.playing?"Pause":"Play"},"play-step":{enabled:!e.coarseTimelineInfo.atEnd,icon:"step-forward",title:"Step forward"},"jump-to-end":{enabled:!e.coarseTimelineInfo.atEnd,icon:"skip-to-end",title:"Skip to End"},"twizzle-link":{enabled:!0,icon:"twizzle-tw",title:"View at Twizzle",hidden:e.viewerLink==="none"}}}};var kr={fullscreen:!0,"jump-to-start":!0,"play-step-backwards":!0,"play-pause":!0,"play-step":!0,"jump-to-end":!0,"twizzle-link":!0},ie=class extends M{constructor(t,r,i){super();this.model=t;this.controller=r;this.defaultFullscreenElement=i}buttons=null;connectedCallback(){this.addCSS(br);let t={};for(let r in kr){let i=new Pe;t[r]=i,i.htmlButton.addEventListener("click",()=>this.#e(r)),this.addElement(i)}this.buttons=t,this.model?.buttonAppearance.addFreshListener(this.update.bind(this)),this.model?.twistySceneModel.colorScheme.addFreshListener(this.updateColorScheme.bind(this))}#e(t){switch(t){case"fullscreen":{this.onFullscreenButton();break}case"jump-to-start":{this.controller?.jumpToStart({flash:!0});break}case"play-step-backwards":{this.controller?.animationController.play({direction:-1,untilBoundary:"move"});break}case"play-pause":{this.controller?.togglePlay();break}case"play-step":{this.controller?.animationController.play({direction:1,untilBoundary:"move"});break}case"jump-to-end":{this.controller?.jumpToEnd({flash:!0});break}case"twizzle-link":{this.controller?.visitTwizzleLink();break}default:throw new Error("Missing command")}}async onFullscreenButton(){if(!this.defaultFullscreenElement)throw new Error("Attempted to go fullscreen without an element.");if(Vt()===this.defaultFullscreenElement)Ir();else{this.buttons?.fullscreen.setIcon("exit-fullscreen"),Dr(await this.model?.twistySceneModel.fullscreenElement.get()??this.defaultFullscreenElement);let t=()=>{Vt()!==this.defaultFullscreenElement&&(this.buttons?.fullscreen.setIcon("enter-fullscreen"),window.removeEventListener("fullscreenchange",t))};window.addEventListener("fullscreenchange",t)}}async update(t){for(let r in kr){let i=this.buttons[r],o=t[r];i.htmlButton.disabled=!o.enabled,i.htmlButton.title=o.title,i.setIcon(o.icon),i.hidden=!!o.hidden}}updateColorScheme(t){for(let r of Object.values(this.buttons??{}))r.updateColorScheme(t)}};w.define("twisty-buttons",ie);var Pe=class extends M{htmlButton=document.createElement("button");updateColorScheme(e){this.contentWrapper.classList.toggle("dark-mode",e==="dark")}connectedCallback(){this.addCSS(Ar),this.addElement(this.htmlButton)}#e=new L(this,"svg-",Lr);setIcon(e){this.#e.setValue(e)}};w.define("twisty-button",Pe);var Cr=new T(`
:host {
  width: 384px;
  height: 16px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  background: rgba(196, 196, 196, 0.75);
}

input:not(:disabled) {
  cursor: ew-resize;
}

.wrapper.dark-mode {
  background: #666666;
}
`);var si=!1,Ae=!1;S?.addEventListener("mousedown",function(n){n.which&&(Ae=!0)},!0);S?.addEventListener("mouseup",function(n){n.which&&(Ae=!1)},!0);var Ut=0,be=0;S?.addEventListener("mousedown",()=>{be++},!1);S?.addEventListener("mousemove",Rr,!1);S?.addEventListener("mouseenter",Rr,!1);function Rr(n){Ut=n.pageY}var Er=0,Nr=0,Ft=!1,jt=0,ne=class extends M{constructor(t,r){super();this.model=t;this.controller=r}async onDetailedTimelineInfo(t){let r=await this.inputElem();r.min=t.timeRange.start.toString(),r.max=t.timeRange.end.toString(),r.disabled=r.min===r.max,r.value=t.timestamp.toString()}async connectedCallback(){this.addCSS(Cr),this.addElement(await this.inputElem()),this.model?.twistySceneModel.colorScheme.addFreshListener(this.updateColorScheme.bind(this))}updateColorScheme(t){this.contentWrapper.classList.toggle("dark-mode",t==="dark")}#e=null;async inputElem(){return this.#e??=(async()=>{let t=document.createElement("input");return t.type="range",t.disabled=!0,this.model?.detailedTimelineInfo.addFreshListener(this.onDetailedTimelineInfo.bind(this)),t.addEventListener("input",this.onInput.bind(this)),t.addEventListener("keydown",this.onKeypress.bind(this)),t})()}async onInput(t){if(Ft)return;let r=await this.inputElem();await this.slowDown(t,r);let i=parseInt(r.value);this.model?.playingInfo.set({playing:!1}),this.model?.timestampRequest.set(i)}onKeypress(t){switch(t.key){case"ArrowLeft":case"ArrowRight":{this.controller?.animationController.play({direction:t.key==="ArrowLeft"?-1:1,untilBoundary:"move"}),t.preventDefault();break}case" ":{this.controller?.togglePlay(),t.preventDefault();break}}}async slowDown(t,r){if(si&&Ae){let i=r.getBoundingClientRect(),o=i.top+i.height/2;console.log(o,t,Ut,Ae);let a=Math.abs(o-Ut),s=1;a>64&&(s=Math.max(2**(-(a-64)/64),1/32));let l=parseInt(r.value);if(console.log("cl",jt,be,l),jt===be){let m=(l-Nr)*s;console.log("delta",m,a),Ft=!0;let p=l;p=Er+m*s+(l-Er)*Math.min(1,(1/2)**(a*a/64)),r.value=p.toString(),console.log(s),Ft=!1,this.contentWrapper.style.opacity=s.toString()}else jt=be;Nr=l}}};w.define("twisty-scrubber",ne);var li=null;async function Bt(n,e){let[{PerspectiveCamera:t,Scene:r},i,o,a,s,l,m]=await Promise.all([D,await n.puzzleLoader.get(),await n.visualizationStrategy.get(),await n.twistySceneModel.stickeringRequest.get(),await n.twistySceneModel.stickeringMaskRequest.get(),await n.legacyPosition.get(),await n.twistySceneModel.orbitCoordinates.get()]),p=e?.width??2048,h=e?.height??2048,f=p/h,z=li??=await(async()=>new t(20,f,.1,20))(),x=new r,F=new K(n,{scheduleRender:()=>{}},i,o);x.add(await F.twisty3DPuzzle()),await wr(z,m);let A=(await yr(p,h,x,z)).toDataURL(),ce=await qt(n);return{dataURL:A,download:async de=>{Ht(A,de??ce)}}}async function qt(n){let[e,t]=await Promise.all([n.puzzleID.get(),n.alg.get()]);return`[${e}]${t.alg.experimentalNumChildAlgNodes()===0?"":` ${t.alg.toString()}`}`}function Ht(n,e,t="png"){let r=document.createElement("a");r.href=n,r.download=`${e}.${t}`,r.click()}var Or=new T(`
:host {
  width: 384px;
  height: 256px;
  display: grid;

  -webkit-user-select: none;
  user-select: none;
}

.wrapper {
  display: grid;
  overflow: hidden;
  contain: size;
  grid-template-rows: 7fr minmax(1.5em, 0.5fr) minmax(2em, 1fr);
}

.wrapper > * {
  width: inherit;
  height: inherit;
  overflow: hidden;
}

.wrapper.controls-none {
  grid-template-rows: 7fr;
}

.wrapper.controls-none twisty-scrubber,
.wrapper.controls-none twisty-control-button-panel ,
.wrapper.controls-none twisty-scrubber,
.wrapper.controls-none twisty-buttons {
  display: none;
}

twisty-scrubber {
  background: rgba(196, 196, 196, 0.5);
}

.wrapper.checkered,
.wrapper.checkered-transparent {
  background-color: #EAEAEA;
  background-image: linear-gradient(45deg, #DDD 25%, transparent 25%, transparent 75%, #DDD 75%, #DDD),
    linear-gradient(45deg, #DDD 25%, transparent 25%, transparent 75%, #DDD 75%, #DDD);
  background-size: 32px 32px;
  background-position: 0 0, 16px 16px;
}

.wrapper.checkered-transparent {
  background-color: #F4F4F4;
  background-image: linear-gradient(45deg, #DDDDDD88 25%, transparent 25%, transparent 75%, #DDDDDD88 75%, #DDDDDD88),
    linear-gradient(45deg, #DDDDDD88 25%, transparent 25%, transparent 75%, #DDDDDD88 75%, #DDDDDD88);
}

.wrapper.dark-mode {
  background-color: #444;
  background-image: linear-gradient(45deg, #DDDDDD0b 25%, transparent 25%, transparent 75%, #DDDDDD0b 75%, #DDDDDD0b),
    linear-gradient(45deg, #DDDDDD0b 25%, transparent 25%, transparent 75%, #DDDDDD0b 75%, #DDDDDD0b);
}

.visualization-wrapper > * {
  width: 100%;
  height: 100%;
}

.error-elem {
  width: 100%;
  height: 100%;
  display: none;
  place-content: center;
  font-family: sans-serif;
  box-shadow: inset 0 0 2em rgb(255, 0, 0);
  color: red;
  text-shadow: 0 0 0.2em white;
  background: rgba(255, 255, 255, 0.25);
}

.wrapper.error .visualization-wrapper {
  display: none;
}

.wrapper.error .error-elem {
  display: grid;
}
`);var oe=class extends c{getDefaultValue(){return null}};var U=class extends b{getDefaultValue(){return null}derive(e){return typeof e=="string"?new URL(e,location.href):e}};var O=class n{warnings;errors;constructor(e){this.warnings=Object.freeze(e?.warnings??[]),this.errors=Object.freeze(e?.errors??[]),Object.freeze(this)}add(e){return new n({warnings:this.warnings.concat(e?.warnings??[]),errors:this.errors.concat(e?.errors??[])})}log(){this.errors.length>0?console.error(`\u{1F6A8} ${this.errors[0]}`):this.warnings.length>0?console.warn(`\u26A0\uFE0F ${this.warnings[0]}`):console.info("\u{1F60E} No issues!")}};function Qt(n){try{let e=y.fromString(n),t=[];return e.toString()!==n&&t.push("Alg is non-canonical!"),{alg:e,issues:new O({warnings:t})}}catch(e){return{alg:new y,issues:new O({errors:[`Malformed alg: ${e.toString()}`]})}}}function pi(n,e){return n.alg.isIdentical(e.alg)&&X(n.issues.warnings,e.issues.warnings)&&X(n.issues.errors,e.issues.errors)}var ae=class extends b{getDefaultValue(){return{alg:new y,issues:new O}}canReuseValue(e,t){return pi(e,t)}async derive(e){return typeof e=="string"?Qt(e):{alg:e,issues:new O}}};var Se=class extends d{derive(e){return e.kpuzzle.algToTransformation(e.setupAlg.alg)}};var Ie=class extends d{derive(e){if(e.setupTransformation)return e.setupTransformation;switch(e.setupAnchor){case"start":return e.setupAlgTransformation;case"end":{let r=e.indexer.transformationAtIndex(e.indexer.numAnimatedLeaves()).invert();return e.setupAlgTransformation.applyTransformation(r)}default:throw new Error("Unimplemented!")}}};var De=class extends c{getDefaultValue(){return{move:null,amount:0}}canReuseValue(e,t){return e.move===t.move&&e.amount===t.amount}};var Le=class extends d{derive(e){return{patternIndex:e.currentMoveInfo.patternIndex,movesFinishing:e.currentMoveInfo.movesFinishing.map(t=>t.move),movesFinished:e.currentMoveInfo.movesFinished.map(t=>t.move)}}canReuseValue(e,t){return e.patternIndex===t.patternIndex&&Rt(e.movesFinishing,t.movesFinishing,(r,i)=>r.isIdentical(i))&&Rt(e.movesFinished,t.movesFinished,(r,i)=>r.isIdentical(i))}};var ke=class extends d{derive(e){function t(r){return e.detailedTimelineInfo.atEnd&&e.catchUpMove.move!==null&&r.currentMoves.push({move:e.catchUpMove.move,direction:-1,fraction:1-e.catchUpMove.amount,startTimestamp:-1,endTimestamp:-1}),r}if(e.indexer.currentMoveInfo)return t(e.indexer.currentMoveInfo(e.detailedTimelineInfo.timestamp));{let r=e.indexer.timestampToIndex(e.detailedTimelineInfo.timestamp),i={patternIndex:r,currentMoves:[],movesFinishing:[],movesFinished:[],movesStarting:[],latestStart:-1/0,earliestEnd:1/0};if(e.indexer.numAnimatedLeaves()>0){let o=e.indexer.getAnimLeaf(r)?.as(u);if(!o)return t(i);let a=e.indexer.indexToMoveStartTimestamp(r),s=e.indexer.moveDuration(r),l=s?(e.detailedTimelineInfo.timestamp-a)/s:0,m=a+s,p={move:o,direction:1,fraction:l,startTimestamp:a,endTimestamp:m};l===0?i.movesStarting.push(p):l===1?i.movesFinishing.push(p):(i.currentMoves.push(p),i.latestStart=Math.max(i.latestStart,a),i.earliestEnd=Math.min(i.earliestEnd,m))}return t(i)}}};var Ce=class extends d{derive(e){let t=e.indexer.transformationAtIndex(e.currentLeavesSimplified.patternIndex);t=e.anchoredStart.applyTransformation(t);for(let r of e.currentLeavesSimplified.movesFinishing)t=t.applyMove(r);for(let r of e.currentLeavesSimplified.movesFinished)t=t.applyMove(r);return t.toKPattern()}};function k(n){switch(Math.abs(n)){case 0:return 0;case 1:return 1e3;case 2:return 1500;default:return 2e3}}var _=class extends N{constructor(t=k){super();this.durationForAmount=t}traverseAlg(t){let r=0;for(let i of t.childAlgNodes())r+=this.traverseAlgNode(i);return r}traverseGrouping(t){return t.amount*this.traverseAlg(t.alg)}traverseMove(t){return this.durationForAmount(t.amount)}traverseCommutator(t){return 2*(this.traverseAlg(t.A)+this.traverseAlg(t.B))}traverseConjugate(t){return 2*this.traverseAlg(t.A)+this.traverseAlg(t.B)}traversePause(t){return this.durationForAmount(1)}traverseNewline(t){return this.durationForAmount(1)}traverseLineComment(t){return this.durationForAmount(0)}};var se=class{constructor(e,t){this.kpuzzle=e;this.moves=new y(t.experimentalExpand())}moves;durationFn=new _(k);getAnimLeaf(e){return Array.from(this.moves.childAlgNodes())[e]}indexToMoveStartTimestamp(e){let t=new y(Array.from(this.moves.childAlgNodes()).slice(0,e));return this.durationFn.traverseAlg(t)}timestampToIndex(e){let t=0,r;for(r=0;r<this.numAnimatedLeaves();r++)if(t+=this.durationFn.traverseMove(this.getAnimLeaf(r)),t>=e)return r;return r}patternAtIndex(e){return this.kpuzzle.defaultPattern().applyTransformation(this.transformationAtIndex(e))}transformationAtIndex(e){let t=this.kpuzzle.identityTransformation();for(let r of Array.from(this.moves.childAlgNodes()).slice(0,e))t=t.applyMove(r);return t}algDuration(){return this.durationFn.traverseAlg(this.moves)}numAnimatedLeaves(){return gr(this.moves)}moveDuration(e){return this.durationFn.traverseMove(this.getAnimLeaf(e))}};var Wr={u:"y",l:"x",f:"z",r:"x",b:"z",d:"y",m:"x",e:"y",s:"z",x:"x",y:"y",z:"z"};function mi(n,e){return Wr[n.family[0].toLowerCase()]===Wr[e.family[0].toLowerCase()]}var Gt=class extends N{traverseAlg(e){let t=[];for(let r of e.childAlgNodes())t.push(this.traverseAlgNode(r));return Array.prototype.concat(...t)}traverseGroupingOnce(e){if(e.experimentalIsEmpty())return[];for(let o of e.childAlgNodes())if(!o.is(u))return this.traverseAlg(e);let t=Array.from(e.childAlgNodes()),r=k(t[0].amount);for(let o=0;o<t.length-1;o++){for(let a=1;a<t.length;a++)if(!mi(t[o],t[a]))return this.traverseAlg(e);r=Math.max(r,k(t[o].amount))}let i=t.map(o=>({animLeafAlgNode:o,msUntilNext:0,duration:r}));return i[i.length-1].msUntilNext=r,i}traverseGrouping(e){let t=[],r=e.amount>0?e.alg:e.alg.invert();for(let i=0;i<Math.abs(e.amount);i++)t.push(this.traverseGroupingOnce(r));return Array.prototype.concat(...t)}traverseMove(e){let t=k(e.amount);return[{animLeafAlgNode:e,msUntilNext:t,duration:t}]}traverseCommutator(e){let t=[],r=[e.A,e.B,e.A.invert(),e.B.invert()];for(let i of r)t.push(this.traverseGroupingOnce(i));return Array.prototype.concat(...t)}traverseConjugate(e){let t=[],r=[e.A,e.B,e.A.invert()];for(let i of r)t.push(this.traverseGroupingOnce(i));return Array.prototype.concat(...t)}traversePause(e){if(e.experimentalNISSGrouping)return[];let t=k(1);return[{animLeafAlgNode:e,msUntilNext:t,duration:t}]}traverseNewline(e){return[]}traverseLineComment(e){return[]}},ui=R(Gt);function Vr(n){let e=0;return ui(n).map(r=>{let i={animLeaf:r.animLeafAlgNode,start:e,end:e+r.duration};return e+=r.msUntilNext,i})}var ci={"y' y' U' E D R2 r2 F2 B2 U E D' R2 L2' z2 S2 U U D D S2 F2' B2":[{animLeaf:new u("y",-1),start:0,end:1e3},{animLeaf:new u("y",-1),start:1e3,end:2e3},{animLeaf:new u("U",-1),start:1e3,end:1600},{animLeaf:new u("E",1),start:1200,end:1800},{animLeaf:new u("D"),start:1400,end:2e3},{animLeaf:new u("R",2),start:2e3,end:3500},{animLeaf:new u("r",2),start:2e3,end:3500},{animLeaf:new u("F",2),start:3500,end:4200},{animLeaf:new u("B",2),start:3800,end:4500},{animLeaf:new u("U",1),start:4500,end:5500},{animLeaf:new u("E",1),start:4500,end:5500},{animLeaf:new u("D",-1),start:4500,end:5500},{animLeaf:new u("R",2),start:5500,end:6500},{animLeaf:new u("L",-2),start:5500,end:6500},{animLeaf:new u("z",2),start:5500,end:6500},{animLeaf:new u("S",2),start:6500,end:7500},{animLeaf:new u("U"),start:7500,end:8e3},{animLeaf:new u("D"),start:7750,end:8250},{animLeaf:new u("U"),start:8e3,end:8500},{animLeaf:new u("D"),start:8250,end:8750},{animLeaf:new u("S",2),start:8750,end:9250},{animLeaf:new u("F",-2),start:8750,end:1e4},{animLeaf:new u("B",2),start:8750,end:1e4}],"M' R' U' D' M R":[{animLeaf:new u("M",-1),start:0,end:1e3},{animLeaf:new u("R",-1),start:0,end:1e3},{animLeaf:new u("U",-1),start:1e3,end:2e3},{animLeaf:new u("D",-1),start:1e3,end:2e3},{animLeaf:new u("M"),start:2e3,end:3e3},{animLeaf:new u("R"),start:2e3,end:3e3}],"U' E' r E r2' E r U E":[{animLeaf:new u("U",-1),start:0,end:1e3},{animLeaf:new u("E",-1),start:0,end:1e3},{animLeaf:new u("r"),start:1e3,end:2500},{animLeaf:new u("E"),start:2500,end:3500},{animLeaf:new u("r",-2),start:3500,end:5e3},{animLeaf:new u("E"),start:5e3,end:6e3},{animLeaf:new u("r"),start:6e3,end:7e3},{animLeaf:new u("U"),start:7e3,end:8e3},{animLeaf:new u("E"),start:7e3,end:8e3}]},le=class{constructor(e,t){this.kpuzzle=e;this.animLeaves=ci[t.toString()]??Vr(t)}animLeaves;getAnimLeaf(e){return this.animLeaves[Math.min(e,this.animLeaves.length-1)]?.animLeaf??null}getAnimLeafWithRange(e){return this.animLeaves[Math.min(e,this.animLeaves.length-1)]}indexToMoveStartTimestamp(e){let t=0;return this.animLeaves.length>0&&(t=this.animLeaves[Math.min(e,this.animLeaves.length-1)].start),t}timestampToIndex(e){let t=0;for(t=0;t<this.animLeaves.length;t++)if(this.animLeaves[t].start>=e)return Math.max(0,t-1);return Math.max(0,t-1)}timestampToPosition(e,t){let r=this.currentMoveInfo(e),i=t??this.kpuzzle.identityTransformation().toKPattern();for(let o of this.animLeaves.slice(0,r.patternIndex)){let a=o.animLeaf.as(u);a!==null&&(i=i.applyMove(a))}return{pattern:i,movesInProgress:r.currentMoves}}currentMoveInfo(e){let t=1/0;for(let p of this.animLeaves)if(p.start<=e&&p.end>=e)t=Math.min(t,p.start);else if(p.start>e)break;let r=[],i=[],o=[],a=[],s=-1/0,l=1/0,m=0;for(let p of this.animLeaves)if(p.end<=t)m++;else{if(p.start>e)break;{let h=p.animLeaf.as(u);if(h!==null){let f=(e-p.start)/(p.end-p.start),z=!1;f>1&&(f=1,z=!0);let x={move:h,direction:1,fraction:f,startTimestamp:p.start,endTimestamp:p.end};switch(f){case 0:{i.push(x);break}case 1:{z?a.push(x):o.push(x);break}default:r.push(x),s=Math.max(s,p.start),l=Math.min(l,p.end)}}}}return{patternIndex:m,currentMoves:r,latestStart:s,earliestEnd:l,movesStarting:i,movesFinishing:o,movesFinished:a}}patternAtIndex(e,t){let r=t??this.kpuzzle.defaultPattern();for(let i=0;i<this.animLeaves.length&&i<e;i++){let a=this.animLeaves[i].animLeaf.as(u);a!==null&&(r=r.applyMove(a))}return r}transformationAtIndex(e){let t=this.kpuzzle.identityTransformation();for(let r of this.animLeaves.slice(0,e)){let i=r.animLeaf.as(u);i!==null&&(t=t.applyMove(i))}return t}algDuration(){let e=0;for(let t of this.animLeaves)e=Math.max(e,t.end);return e}numAnimatedLeaves(){return this.animLeaves.length}moveDuration(e){let t=this.getAnimLeafWithRange(e);return t.end-t.start}};var E=class{constructor(e,t,r,i,o=[]){this.moveCount=e;this.duration=t;this.forward=r;this.backward=i;this.children=o}},Ee=class extends N{constructor(t){super();this.kpuzzle=t;this.identity=t.identityTransformation(),this.dummyLeaf=new E(0,0,this.identity,this.identity,[])}identity;dummyLeaf;durationFn=new _(k);cache={};traverseAlg(t){let r=0,i=0,o=this.identity,a=[];for(let s of t.childAlgNodes()){let l=this.traverseAlgNode(s);r+=l.moveCount,i+=l.duration,o===this.identity?o=l.forward:o=o.applyTransformation(l.forward),a.push(l)}return new E(r,i,o,o.invert(),a)}traverseGrouping(t){let r=this.traverseAlg(t.alg);return this.mult(r,t.amount,[r])}traverseMove(t){let r=t.toString(),i=this.cache[r];if(i)return i;let o=this.kpuzzle.moveToTransformation(t);return i=new E(1,this.durationFn.traverseAlgNode(t),o,o.invert()),this.cache[r]=i,i}traverseCommutator(t){let r=this.traverseAlg(t.A),i=this.traverseAlg(t.B),o=r.forward.applyTransformation(i.forward),a=r.backward.applyTransformation(i.backward),s=o.applyTransformation(a),l=new E(2*(r.moveCount+i.moveCount),2*(r.duration+i.duration),s,s.invert(),[r,i]);return this.mult(l,1,[l,r,i])}traverseConjugate(t){let r=this.traverseAlg(t.A),i=this.traverseAlg(t.B),a=r.forward.applyTransformation(i.forward).applyTransformation(r.backward),s=new E(2*r.moveCount+i.moveCount,2*r.duration+i.duration,a,a.invert(),[r,i]);return this.mult(s,1,[s,r,i])}traversePause(t){return t.experimentalNISSGrouping?this.dummyLeaf:new E(1,this.durationFn.traverseAlgNode(t),this.identity,this.identity)}traverseNewline(t){return this.dummyLeaf}traverseLineComment(t){return this.dummyLeaf}mult(t,r,i){let o=Math.abs(r),a=t.forward.selfMultiply(r);return new E(t.moveCount*o,t.duration*o,a,a.invert(),i)}},v=class{constructor(e,t){this.apd=e;this.back=t}},Ne=class extends H{constructor(t,r,i){super();this.kpuzzle=t;this.algOrAlgNode=r;this.apd=i;this.i=-1,this.dur=-1,this.goali=-1,this.goaldur=-1,this.move=void 0,this.back=!1,this.moveDuration=0,this.st=this.kpuzzle.identityTransformation(),this.root=new v(this.apd,!1)}move;moveDuration;back;st;root;i;dur;goali;goaldur;moveByIndex(t){return this.i>=0&&this.i===t?this.move!==void 0:this.dosearch(t,1/0)}moveByDuration(t){return this.dur>=0&&this.dur<t&&this.dur+this.moveDuration>=t?this.move!==void 0:this.dosearch(1/0,t)}dosearch(t,r){return this.goali=t,this.goaldur=r,this.i=0,this.dur=0,this.move=void 0,this.moveDuration=0,this.back=!1,this.st=this.kpuzzle.identityTransformation(),this.algOrAlgNode.is(y)?this.traverseAlg(this.algOrAlgNode,this.root):this.traverseAlgNode(this.algOrAlgNode,this.root)}traverseAlg(t,r){if(!this.firstcheck(r))return!1;let i=r.back?t.experimentalNumChildAlgNodes()-1:0;for(let o of It(t.childAlgNodes(),r.back?-1:1)){if(this.traverseAlgNode(o,new v(r.apd.children[i],r.back)))return!0;i+=r.back?-1:1}return!1}traverseGrouping(t,r){if(!this.firstcheck(r))return!1;let i=this.domult(r,t.amount);return this.traverseAlg(t.alg,new v(r.apd.children[0],i))}traverseMove(t,r){return this.firstcheck(r)?(this.move=t,this.moveDuration=r.apd.duration,this.back=r.back,!0):!1}traverseCommutator(t,r){if(!this.firstcheck(r))return!1;let i=this.domult(r,1);return i?this.traverseAlg(t.B,new v(r.apd.children[2],!i))||this.traverseAlg(t.A,new v(r.apd.children[1],!i))||this.traverseAlg(t.B,new v(r.apd.children[2],i))||this.traverseAlg(t.A,new v(r.apd.children[1],i)):this.traverseAlg(t.A,new v(r.apd.children[1],i))||this.traverseAlg(t.B,new v(r.apd.children[2],i))||this.traverseAlg(t.A,new v(r.apd.children[1],!i))||this.traverseAlg(t.B,new v(r.apd.children[2],!i))}traverseConjugate(t,r){if(!this.firstcheck(r))return!1;let i=this.domult(r,1);return i?this.traverseAlg(t.A,new v(r.apd.children[1],!i))||this.traverseAlg(t.B,new v(r.apd.children[2],i))||this.traverseAlg(t.A,new v(r.apd.children[1],i)):this.traverseAlg(t.A,new v(r.apd.children[1],i))||this.traverseAlg(t.B,new v(r.apd.children[2],i))||this.traverseAlg(t.A,new v(r.apd.children[1],!i))}traversePause(t,r){return this.firstcheck(r)?(this.move=t,this.moveDuration=r.apd.duration,this.back=r.back,!0):!1}traverseNewline(t,r){return!1}traverseLineComment(t,r){return!1}firstcheck(t){return t.apd.moveCount+this.i<=this.goali&&t.apd.duration+this.dur<this.goaldur?this.keepgoing(t):!0}domult(t,r){let i=t.back;if(r===0)return i;r<0&&(i=!i,r=-r);let o=t.apd.children[0],a=Math.min(Math.floor((this.goali-this.i)/o.moveCount),Math.ceil((this.goaldur-this.dur)/o.duration-1));return a>0&&this.keepgoing(new v(o,i),a),i}keepgoing(t,r=1){return this.i+=r*t.apd.moveCount,this.dur+=r*t.apd.duration,r!==1?t.back?this.st=this.st.applyTransformation(t.apd.backward.selfMultiply(r)):this.st=this.st.applyTransformation(t.apd.forward.selfMultiply(r)):t.back?this.st=this.st.applyTransformation(t.apd.backward):this.st=this.st.applyTransformation(t.apd.forward),!1}};var di=16;function gi(n,e){let t=new Dt,r=new Dt;for(let i of n.childAlgNodes())r.push(i),r.experimentalNumAlgNodes()>=e&&(t.push(new q(r.toAlg())),r.reset());return t.push(new q(r.toAlg())),t.toAlg()}var Kt=class extends N{traverseAlg(e){let t=e.experimentalNumChildAlgNodes();return t<di?e:gi(e,Math.ceil(Math.sqrt(t)))}traverseGrouping(e){return new q(this.traverseAlg(e.alg),e.amount)}traverseMove(e){return e}traverseCommutator(e){return new Lt(this.traverseAlg(e.A),this.traverseAlg(e.B))}traverseConjugate(e){return new Lt(this.traverseAlg(e.A),this.traverseAlg(e.B))}traversePause(e){return e}traverseNewline(e){return e}traverseLineComment(e){return e}},Fr=R(Kt);var Z=class{constructor(e,t){this.kpuzzle=e;let r=new Ee(this.kpuzzle),i=Fr(t);this.decoration=r.traverseAlg(i),this.walker=new Ne(this.kpuzzle,i,this.decoration)}decoration;walker;getAnimLeaf(e){if(this.walker.moveByIndex(e)){if(!this.walker.move)throw new Error("`this.walker.mv` missing");let t=this.walker.move;return this.walker.back?t.invert():t}return null}indexToMoveStartTimestamp(e){if(this.walker.moveByIndex(e)||this.walker.i===e)return this.walker.dur;throw new Error(`Out of algorithm: index ${e}`)}indexToMovesInProgress(e){if(this.walker.moveByIndex(e)||this.walker.i===e)return this.walker.dur;throw new Error(`Out of algorithm: index ${e}`)}patternAtIndex(e,t){return this.walker.moveByIndex(e),(t??this.kpuzzle.defaultPattern()).applyTransformation(this.walker.st)}transformationAtIndex(e){return this.walker.moveByIndex(e),this.walker.st}numAnimatedLeaves(){return this.decoration.moveCount}timestampToIndex(e){return this.walker.moveByDuration(e),this.walker.i}algDuration(){return this.decoration.duration}moveDuration(e){return this.walker.moveByIndex(e),this.walker.moveDuration}};var Re=class extends d{derive(e){switch(e.indexerConstructorRequest){case"auto":return cr(e.alg.alg)<100&&e.puzzle==="3x3x3"&&e.visualizationStrategy==="Cube3D"?le:Z;case"tree":return Z;case"simple":return se;case"simultaneous":return le;default:throw new Error("Invalid indexer request!")}}};var Oe=class extends c{getDefaultValue(){return"auto"}};var We=class extends d{derive(e){return new e.indexerConstructor(e.kpuzzle,e.algWithIssues.alg)}};var Ve=class extends d{derive(e){return{pattern:e.currentPattern,movesInProgress:e.currentMoveInfo.currentMoves}}};var hi=!0;var pe=class extends d{async derive(e){try{return hi&&e.kpuzzle.algToTransformation(e.algWithIssues.alg),e.algWithIssues}catch(t){return{alg:new y,issues:new O({errors:[`Invalid alg for puzzle: ${t.toString()}`]})}}}};var Fe=class extends c{getDefaultValue(){return"start"}};var je=class extends c{getDefaultValue(){return null}};var Ue=class extends d{async derive(e){return e.puzzleLoader.kpuzzle()}};var Be=class extends c{getDefaultValue(){return P}};var qe=class extends d{async derive(e){return e.puzzleLoader.id}};var He=class extends c{getDefaultValue(){return P}};var Qe=class extends d{derive(e){if(e.puzzleIDRequest&&e.puzzleIDRequest!==P){let t=ge[e.puzzleIDRequest];return t||this.userVisibleErrorTracker.set({errors:[`Invalid puzzle ID: ${e.puzzleIDRequest}`]}),t}return e.puzzleDescriptionRequest&&e.puzzleDescriptionRequest!==P?mr(e.puzzleDescriptionRequest):ur}};var Ge=class extends d{derive(e){return{playing:e.playingInfo.playing,atStart:e.detailedTimelineInfo.atStart,atEnd:e.detailedTimelineInfo.atEnd}}canReuseValue(e,t){return e.playing===t.playing&&e.atStart===t.atStart&&e.atEnd===t.atEnd}};var Ke=class extends d{derive(e){let t=this.#e(e),r=!1,i=!1;return t>=e.timeRange.end&&(i=!0,t=Math.min(e.timeRange.end,t)),t<=e.timeRange.start&&(r=!0,t=Math.max(e.timeRange.start,t)),{timestamp:t,timeRange:e.timeRange,atStart:r,atEnd:i}}#e(e){switch(e.timestampRequest){case"auto":return e.setupAnchor==="start"&&e.setupAlg.alg.experimentalIsEmpty()?e.timeRange.end:e.timeRange.start;case"start":return e.timeRange.start;case"end":return e.timeRange.end;case"anchor":return e.setupAnchor==="start"?e.timeRange.start:e.timeRange.end;case"opposite-anchor":return e.setupAnchor==="start"?e.timeRange.end:e.timeRange.start;default:return e.timestampRequest}}canReuseValue(e,t){return e.timestamp===t.timestamp&&e.timeRange.start===t.timeRange.start&&e.timeRange.end===t.timeRange.end&&e.atStart===t.atStart&&e.atEnd===t.atEnd}};var Ye=class extends b{async getDefaultValue(){return{direction:1,playing:!1,untilBoundary:"entire-timeline",loop:!1}}async derive(e,t){let r=await t,i=Object.assign({},r);return Object.assign(i,e),i}canReuseValue(e,t){return e.direction===t.direction&&e.playing===t.playing&&e.untilBoundary===t.untilBoundary&&e.loop===t.loop}};var _e=class extends b{getDefaultValue(){return 1}derive(e){return e<0?1:e}};var fi={auto:!0,start:!0,end:!0,anchor:!0,"opposite-anchor":!0},Ze=class extends c{getDefaultValue(){return"auto"}set(e){let t=this.get();super.set((async()=>this.validInput(await e)?e:t)())}validInput(e){return!!(typeof e=="number"||fi[e])}};var $e=class extends c{getDefaultValue(){return"auto"}};var Xe=class extends d{derive(e){return{start:0,end:e.indexer.algDuration()}}};var Je=class extends c{getDefaultValue(){return"auto"}};var et=class extends c{getDefaultValue(){return"auto"}};var tt=class extends d{derive(e){switch(e.puzzleID){case"clock":case"square1":case"redi_cube":case"melindas2x2x2x2":return"2D";case"3x3x3":switch(e.visualizationRequest){case"auto":case"3D":return"Cube3D";default:return e.visualizationRequest}default:switch(e.visualizationRequest){case"auto":case"3D":return"PG3D";case"experimental-2D-LL":return["2x2x2","4x4x4","megaminx"].includes(e.puzzleID)?"experimental-2D-LL":"2D";default:return e.visualizationRequest}}}};var rt=class extends c{getDefaultValue(){return"auto"}};var it=class extends c{getDefaultValue(){return"auto"}};var nt=class extends c{getDefaultValue(){return"auto"}};var yi=null;async function wi(){return yi??=new(await D).TextureLoader}var me=class extends d{async derive(e){let{spriteURL:t}=e;return t===null?null:new Promise(async(r,i)=>{let o=()=>{console.warn("Could not load sprite:",t.toString()),r(null)};try{(await wi()).load(t.toString(),r,o,o)}catch{o()}})}};var vi={facelets:["regular","regular","regular","regular","regular"]};async function xi(n){let{definition:e}=await n.kpuzzle(),t={orbits:{}};for(let r of e.orbits)t.orbits[r.orbitName]={pieces:new Array(r.numPieces).fill(vi)};return t}var ot=class extends d{getDefaultValue(){return{orbits:{}}}async derive(e){return e.stickeringMaskRequest?e.stickeringMaskRequest:e.stickeringRequest==="picture"?{specialBehaviour:"picture",orbits:{}}:e.puzzleLoader.stickeringMask?.(e.stickeringRequest??"full")??xi(e.puzzleLoader)}};var Mi={"-":"Regular",D:"Dim",I:"Ignored",X:"Invisible",O:"IgnoreNonPrimary",P:"PermuteNonPrimary",o:"Ignoriented","?":"OrientationWithoutPermutation","@":"Regular"};function jr(n){let e={orbits:{}},t=n.split(",");for(let r of t){let[i,o,...a]=r.split(":");if(a.length>0)throw new Error(`Invalid serialized orbit stickering mask (too many colons): \`${r}\``);let s=[];e.orbits[i]={pieces:s};for(let l of o){let m=Mi[l];s.push(sr(m))}}return e}var at=class extends b{getDefaultValue(){return null}derive(e){return e===null?null:typeof e=="string"?jr(e):e}};var st=class extends c{getDefaultValue(){return"auto"}};var lt=class extends c{getDefaultValue(){return{}}};var pt=class extends c{getDefaultValue(){return"auto"}};var mt=class extends c{getDefaultValue(){return"auto"}};var ut=class extends d{derive(e){return e.colorSchemeRequest==="dark"?"dark":"light"}};var ct=class extends c{getDefaultValue(){return"auto"}};var dt=class extends c{getDefaultValue(){return null}};var zi=35,gt=class extends c{getDefaultValue(){return zi}};function Yt(n,e){return n.latitude===e.latitude&&n.longitude===e.longitude&&n.distance===e.distance}var ht=class extends b{getDefaultValue(){return"auto"}canReuseValue(e,t){return e===t||Yt(e,t)}async derive(e,t){if(e==="auto")return"auto";let r=await t;r==="auto"&&(r={});let i=Object.assign({},r);return Object.assign(i,e),typeof i.latitude<"u"&&(i.latitude=Math.min(Math.max(i.latitude,-90),90)),typeof i.longitude<"u"&&(i.longitude=J(i.longitude,180,-180)),i}};var ft=class extends d{canReuseValue(e,t){return Yt(e,t)}async derive(e){if(e.orbitCoordinatesRequest==="auto")return Br(e.puzzleID,e.strategy);let t=Object.assign(Object.assign({},Br(e.puzzleID,e.strategy),e.orbitCoordinatesRequest));if(Math.abs(t.latitude)<=e.latitudeLimit)return t;{let{latitude:r,longitude:i,distance:o}=t;return{latitude:e.latitudeLimit*Math.sign(r),longitude:i,distance:o}}}},Ti={latitude:31.717474411461005,longitude:0,distance:5.877852522924731},Pi={latitude:35,longitude:30,distance:6},Ur={latitude:35,longitude:30,distance:6.25},bi={latitude:Math.atan(1/2)*fr,longitude:0,distance:6.7},Ai={latitude:26.56505117707799,longitude:0,distance:6};function Br(n,e){if(n[1]==="x")return e==="Cube3D"?Pi:Ur;switch(n){case"megaminx":case"gigaminx":return bi;case"pyraminx":case"master_tetraminx":return Ai;case"skewb":return Ur;default:return Ti}}var yt=class{constructor(e){this.twistyPlayerModel=e;this.orbitCoordinates=new ft({orbitCoordinatesRequest:this.orbitCoordinatesRequest,latitudeLimit:this.latitudeLimit,puzzleID:e.puzzleID,strategy:e.visualizationStrategy}),this.stickeringMask=new ot({stickeringMaskRequest:this.stickeringMaskRequest,stickeringRequest:this.stickeringRequest,puzzleLoader:e.puzzleLoader})}background=new mt;colorSchemeRequest=new ct;dragInput=new st;foundationDisplay=new it;foundationStickerSpriteURL=new U;fullscreenElement=new dt;hintFacelet=new hr;hintStickerSpriteURL=new U;initialHintFaceletsAnimation=new nt;latitudeLimit=new gt;movePressInput=new pt;movePressCancelOptions=new lt;orbitCoordinatesRequest=new ht;stickeringMaskRequest=new at;stickeringRequest=new fe;faceletScale=new rt;colorScheme=new ut({colorSchemeRequest:this.colorSchemeRequest});foundationStickerSprite=new me({spriteURL:this.foundationStickerSpriteURL});hintStickerSprite=new me({spriteURL:this.hintStickerSpriteURL});orbitCoordinates;stickeringMask};var Si={errors:[]},wt=class extends c{getDefaultValue(){return Si}reset(){this.set(this.getDefaultValue())}canReuseValue(e,t){return X(e.errors,t.errors)}};var vt=class{userVisibleErrorTracker=new wt;alg=new ae;backView=new $e;controlPanel=new ve;catchUpMove=new De;indexerConstructorRequest=new Oe;playingInfo=new Ye;puzzleDescriptionRequest=new Be;puzzleIDRequest=new He;setupAnchor=new Fe;setupAlg=new ae;setupTransformation=new je;tempoScale=new _e;timestampRequest=new Ze;viewerLink=new Je;visualizationFormat=new et;title=new oe;videoURL=new U;competitionID=new oe;puzzleLoader=new Qe({puzzleIDRequest:this.puzzleIDRequest,puzzleDescriptionRequest:this.puzzleDescriptionRequest},this.userVisibleErrorTracker);kpuzzle=new Ue({puzzleLoader:this.puzzleLoader});puzzleID=new qe({puzzleLoader:this.puzzleLoader});puzzleAlg=new pe({algWithIssues:this.alg,kpuzzle:this.kpuzzle});puzzleSetupAlg=new pe({algWithIssues:this.setupAlg,kpuzzle:this.kpuzzle});visualizationStrategy=new tt({visualizationRequest:this.visualizationFormat,puzzleID:this.puzzleID});indexerConstructor=new Re({alg:this.alg,puzzle:this.puzzleID,visualizationStrategy:this.visualizationStrategy,indexerConstructorRequest:this.indexerConstructorRequest});setupAlgTransformation=new Se({setupAlg:this.puzzleSetupAlg,kpuzzle:this.kpuzzle});indexer=new We({indexerConstructor:this.indexerConstructor,algWithIssues:this.puzzleAlg,kpuzzle:this.kpuzzle});anchorTransformation=new Ie({setupTransformation:this.setupTransformation,setupAnchor:this.setupAnchor,setupAlgTransformation:this.setupAlgTransformation,indexer:this.indexer});timeRange=new Xe({indexer:this.indexer});detailedTimelineInfo=new Ke({timestampRequest:this.timestampRequest,timeRange:this.timeRange,setupAnchor:this.setupAnchor,setupAlg:this.setupAlg});coarseTimelineInfo=new Ge({detailedTimelineInfo:this.detailedTimelineInfo,playingInfo:this.playingInfo});currentMoveInfo=new ke({indexer:this.indexer,detailedTimelineInfo:this.detailedTimelineInfo,catchUpMove:this.catchUpMove});buttonAppearance=new Te({coarseTimelineInfo:this.coarseTimelineInfo,viewerLink:this.viewerLink});currentLeavesSimplified=new Le({currentMoveInfo:this.currentMoveInfo});currentPattern=new Ce({anchoredStart:this.anchorTransformation,currentLeavesSimplified:this.currentLeavesSimplified,indexer:this.indexer});legacyPosition=new Ve({currentMoveInfo:this.currentMoveInfo,currentPattern:this.currentPattern});twistySceneModel=new yt(this);async twizzleLink(){let[e,t,r,i,o,a,s,l]=await Promise.all([this.viewerLink.get(),this.puzzleID.get(),this.puzzleDescriptionRequest.get(),this.alg.get(),this.setupAlg.get(),this.setupAnchor.get(),this.twistySceneModel.stickeringRequest.get(),this.twistySceneModel.twistyPlayerModel.title.get()]),m=e==="experimental-twizzle-explorer",p=new URL(`https://alpha.twizzle.net/${m?"explore":"edit"}/`);return i.alg.experimentalIsEmpty()||p.searchParams.set("alg",i.alg.toString()),o.alg.experimentalIsEmpty()||p.searchParams.set("setup-alg",o.alg.toString()),a!=="start"&&p.searchParams.set("setup-anchor",a),s!=="full"&&s!==null&&p.searchParams.set("experimental-stickering",s),m&&r!==P?p.searchParams.set("puzzle-description",r):t!=="3x3x3"&&p.searchParams.set("puzzle",t),l&&p.searchParams.set("title",l),p.toString()}experimentalAddAlgLeaf(e,t){let r=e.as(u);r?this.experimentalAddMove(r,t):this.alg.set((async()=>{let o=(await this.alg.get()).alg.concat(new y([e]));return this.timestampRequest.set("end"),o})())}experimentalAddMove(e,t){let r=typeof e=="string"?new u(e):e;this.alg.set((async()=>{let[{alg:i},o]=await Promise.all([this.alg.get(),this.puzzleLoader.get()]),a=ar(i,r,{...t,...await pr(o)});return this.timestampRequest.set("end"),this.catchUpMove.set({move:r,amount:0}),a})())}experimentalRemoveFinalChild(){this.alg.set((async()=>{let e=(await this.alg.get()).alg,t=Array.from(e.childAlgNodes()),[r]=t.splice(-1);if(!r)return e;this.timestampRequest.set("end");let i=r.as(u);return i&&this.catchUpMove.set({move:i.invert(),amount:0}),new y(t)})())}};function g(n){return new Error(`Cannot get \`.${n}\` directly from a \`TwistyPlayer\`.`)}var xt=class extends M{experimentalModel=new vt;set alg(e){this.experimentalModel.alg.set(e)}get alg(){throw g("alg")}set experimentalSetupAlg(e){this.experimentalModel.setupAlg.set(e)}get experimentalSetupAlg(){throw g("setup")}set experimentalSetupAnchor(e){this.experimentalModel.setupAnchor.set(e)}get experimentalSetupAnchor(){throw g("anchor")}set puzzle(e){this.experimentalModel.puzzleIDRequest.set(e)}get puzzle(){throw g("puzzle")}set experimentalPuzzleDescription(e){this.experimentalModel.puzzleDescriptionRequest.set(e)}get experimentalPuzzleDescription(){throw g("experimentalPuzzleDescription")}set timestamp(e){this.experimentalModel.timestampRequest.set(e)}get timestamp(){throw g("timestamp")}set hintFacelets(e){this.experimentalModel.twistySceneModel.hintFacelet.set(e)}get hintFacelets(){throw g("hintFacelets")}set experimentalStickering(e){this.experimentalModel.twistySceneModel.stickeringRequest.set(e)}get experimentalStickering(){throw g("experimentalStickering")}set experimentalStickeringMaskOrbits(e){this.experimentalModel.twistySceneModel.stickeringMaskRequest.set(e)}get experimentalStickeringMaskOrbits(){throw g("experimentalStickeringMaskOrbits")}set experimentalFaceletScale(e){this.experimentalModel.twistySceneModel.faceletScale.set(e)}get experimentalFaceletScale(){throw g("experimentalFaceletScale")}set backView(e){this.experimentalModel.backView.set(e)}get backView(){throw g("backView")}set background(e){this.experimentalModel.twistySceneModel.background.set(e)}get background(){throw g("background")}set colorScheme(e){this.experimentalModel.twistySceneModel.colorSchemeRequest.set(e)}get colorScheme(){throw g("colorScheme")}set controlPanel(e){this.experimentalModel.controlPanel.set(e)}get controlPanel(){throw g("controlPanel")}set visualization(e){this.experimentalModel.visualizationFormat.set(e)}get visualization(){throw g("visualization")}set experimentalTitle(e){this.experimentalModel.title.set(e)}get experimentalTitle(){throw g("experimentalTitle")}set experimentalVideoURL(e){this.experimentalModel.videoURL.set(e)}get experimentalVideoURL(){throw g("experimentalVideoURL")}set experimentalCompetitionID(e){this.experimentalModel.competitionID.set(e)}get experimentalCompetitionID(){throw g("experimentalCompetitionID")}set viewerLink(e){this.experimentalModel.viewerLink.set(e)}get viewerLink(){throw g("viewerLink")}set experimentalMovePressInput(e){this.experimentalModel.twistySceneModel.movePressInput.set(e)}get experimentalMovePressInput(){throw g("experimentalMovePressInput")}set experimentalMovePressCancelOptions(e){this.experimentalModel.twistySceneModel.movePressCancelOptions.set(e)}get experimentalMovePressCancelOptions(){throw g("experimentalMovePressCancelOptions")}set cameraLatitude(e){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({latitude:e})}get cameraLatitude(){throw g("cameraLatitude")}set cameraLongitude(e){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({longitude:e})}get cameraLongitude(){throw g("cameraLongitude")}set cameraDistance(e){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({distance:e})}get cameraDistance(){throw g("cameraDistance")}set cameraLatitudeLimit(e){this.experimentalModel.twistySceneModel.latitudeLimit.set(e)}get cameraLatitudeLimit(){throw g("cameraLatitudeLimit")}set indexer(e){this.experimentalModel.indexerConstructorRequest.set(e)}get indexer(){throw g("indexer")}set tempoScale(e){this.experimentalModel.tempoScale.set(e)}get tempoScale(){throw g("tempoScale")}set experimentalSprite(e){this.experimentalModel.twistySceneModel.foundationStickerSpriteURL.set(e)}get experimentalSprite(){throw g("experimentalSprite")}set experimentalHintSprite(e){this.experimentalModel.twistySceneModel.hintStickerSpriteURL.set(e)}get experimentalHintSprite(){throw g("experimentalHintSprite")}set fullscreenElement(e){this.experimentalModel.twistySceneModel.fullscreenElement.set(e)}get fullscreenElement(){throw g("fullscreenElement")}set experimentalInitialHintFaceletsAnimation(e){this.experimentalModel.twistySceneModel.initialHintFaceletsAnimation.set(e)}get experimentalInitialHintFaceletsAnimation(){throw g("experimentalInitialHintFaceletsAnimation")}set experimentalDragInput(e){this.experimentalModel.twistySceneModel.dragInput.set(e)}get experimentalDragInput(){throw g("experimentalDragInput")}experimentalGet=new _t(this.experimentalModel)},_t=class{constructor(e){this.model=e}async alg(){return(await this.model.alg.get()).alg}async setupAlg(){return(await this.model.setupAlg.get()).alg}puzzleID(){return this.model.puzzleID.get()}async timestamp(){return(await this.model.detailedTimelineInfo.get()).timestamp}};var Zt="data-",ue={alg:"alg","experimental-setup-alg":"experimentalSetupAlg","experimental-setup-anchor":"experimentalSetupAnchor",puzzle:"puzzle","experimental-puzzle-description":"experimentalPuzzleDescription",visualization:"visualization","hint-facelets":"hintFacelets","experimental-stickering":"experimentalStickering","experimental-stickering-mask-orbits":"experimentalStickeringMaskOrbits",background:"background","color-scheme":"colorScheme","control-panel":"controlPanel","back-view":"backView","experimental-initial-hint-facelets-animation":"experimentalInitialHintFaceletsAnimation","viewer-link":"viewerLink","experimental-move-press-input":"experimentalMovePressInput","experimental-drag-input":"experimentalDragInput","experimental-title":"experimentalTitle","experimental-video-url":"experimentalVideoURL","experimental-competition-id":"experimentalCompetitionID","camera-latitude":"cameraLatitude","camera-longitude":"cameraLongitude","camera-distance":"cameraDistance","camera-latitude-limit":"cameraLatitudeLimit","tempo-scale":"tempoScale","experimental-sprite":"experimentalSprite","experimental-hint-sprite":"experimentalHintSprite"},Ii=Object.fromEntries(Object.values(ue).map(n=>[n,!0])),Di={experimentalMovePressCancelOptions:!0},C=class extends xt{controller=new we(this.experimentalModel,this);buttons;experimentalCanvasClickCallback=()=>{};constructor(e={}){super();for(let[t,r]of Object.entries(e)){if(!(Ii[t]||Di[t])){console.warn(`Invalid config passed to TwistyPlayer: ${t}`);break}this[t]=r}}#e=new L(this,"controls-",["auto"].concat(Object.keys(Mr)));#t=document.createElement("div");#r=document.createElement("div");#i=!1;async connectedCallback(){if(this.#i)return;this.#i=!0,this.addCSS(Or),this.addElement(this.#t).classList.add("visualization-wrapper"),this.addElement(this.#r).classList.add("error-elem"),this.#r.textContent="Error",this.experimentalModel.userVisibleErrorTracker.addFreshListener(t=>{let r=t.errors[0]??null;this.contentWrapper.classList.toggle("error",!!r),r&&(this.#r.textContent=r)});let e=new ne(this.experimentalModel,this.controller);this.contentWrapper.appendChild(e),this.buttons=new ie(this.experimentalModel,this.controller,this),this.contentWrapper.appendChild(this.buttons),this.experimentalModel.twistySceneModel.background.addFreshListener(t=>{this.contentWrapper.classList.toggle("checkered",["auto","checkered"].includes(t)),this.contentWrapper.classList.toggle("checkered-transparent",t==="checkered-transparent")}),this.experimentalModel.twistySceneModel.colorScheme.addFreshListener(t=>{this.contentWrapper.classList.toggle("dark-mode",["dark"].includes(t))}),this.experimentalModel.controlPanel.addFreshListener(t=>{this.#e.setValue(t)}),this.experimentalModel.visualizationStrategy.addFreshListener(this.#l.bind(this)),this.experimentalModel.puzzleID.addFreshListener(this.flash.bind(this))}#n="auto";experimentalSetFlashLevel(e){this.#n=e}flash(){this.#n==="auto"&&this.#o?.animate([{opacity:.25},{opacity:1}],{duration:250,easing:"ease-out"})}#o=null;#a=new G;#s=null;#l(e){if(e!==this.#s){this.#o?.remove(),this.#o?.disconnect();let t;switch(e){case"2D":case"experimental-2D-LL":{t=new re(this.experimentalModel.twistySceneModel,e);break}case"Cube3D":case"PG3D":{t=new Y(this.experimentalModel),this.#a.handleNewValue(t);break}default:throw new Error("Invalid visualization")}this.#t.appendChild(t),this.#o=t,this.#s=e}}async experimentalCurrentVantages(){this.connectedCallback();let e=this.#o;return e instanceof Y?e.experimentalVantages():[]}async experimentalCurrentCanvases(){let e=await this.experimentalCurrentVantages(),t=[];for(let r of e)t.push((await r.canvasInfo()).canvas);return t}async experimentalCurrentThreeJSPuzzleObject(e){this.connectedCallback();let r=await(await this.#a.promise).experimentalTwisty3DPuzzleWrapper(),i=r.twisty3DPuzzle(),o=(async()=>{await i,await new Promise(a=>setTimeout(a,0))})();if(e){let a=new j(async()=>{});r.addEventListener("render-scheduled",async()=>{a.requestIsPending()||(a.requestAnimFrame(),await o,e())})}return i}jumpToStart(e){this.controller.jumpToStart(e)}jumpToEnd(e){this.controller.jumpToEnd(e)}play(){this.controller.togglePlay(!0)}pause(){this.controller.togglePlay(!1)}togglePlay(e){this.controller.togglePlay(e)}experimentalAddMove(e,t){this.experimentalModel.experimentalAddMove(e,t)}experimentalAddAlgLeaf(e,t){this.experimentalModel.experimentalAddAlgLeaf(e,t)}static get observedAttributes(){let e=[];for(let t of Object.keys(ue))e.push(t,Zt+t);return e}experimentalRemoveFinalChild(){this.experimentalModel.experimentalRemoveFinalChild()}attributeChangedCallback(e,t,r){e.startsWith(Zt)&&(e=e.slice(Zt.length));let i=ue[e];i&&(this[i]=r)}async experimentalScreenshot(e){return(await Bt(this.experimentalModel,e)).dataURL}async experimentalDownloadScreenshot(e){if(["2D","experimental-2D-LL"].includes(await this.experimentalModel.visualizationStrategy.get())){let r=await this.#o.currentTwisty2DPuzzleWrapper().twisty2DPuzzle(),i=new XMLSerializer().serializeToString(r.svgWrapper.svgElement),o=URL.createObjectURL(new Blob([i]));Ht(o,e??await qt(this.experimentalModel),"svg")}else await(await Bt(this.experimentalModel)).download(e)}};w.define("twisty-player",C);var qr=new T(`
:host {
  display: inline;
}

.wrapper {
  display: inline;
}

a:not(:hover) {
  color: inherit;
  text-decoration: none;
}

twisty-alg-leaf-elem.twisty-alg-comment {
  color: rgba(0, 0, 0, 0.4);
}

.wrapper.current-move {
  background: rgba(66, 133, 244, 0.3);
  margin-left: -0.1em;
  margin-right: -0.1em;
  padding-left: 0.1em;
  padding-right: 0.1em;
  border-radius: 0.1em;
}
`);async function Hr(n){return new Promise((e,t)=>{let r=document.getElementById(n);r&&e(r);let i=new MutationObserver(o=>{for(let a of o)a.attributeName==="id"&&a.target instanceof Element&&a.target.getAttribute("id")===n&&(e(a.target),i.disconnect())});i.observe(document.body,{attributeFilter:["id"],subtree:!0})})}var Li=250;var W=class extends M{constructor(t,r,i,o,a,s){super({mode:"open"});this.algOrAlgNode=o;if(this.classList.add(t),this.addCSS(qr),s){let l=this.contentWrapper.appendChild(document.createElement("a"));l.href="#",l.textContent=r,l.addEventListener("click",m=>{m.preventDefault(),i.twistyAlgViewer.jumpToIndex(i.earliestMoveIndex,a)})}else this.contentWrapper.appendChild(document.createElement("span")).textContent=r}pathToIndex(t){return[]}setCurrentMove(t){this.contentWrapper.classList.toggle("current-move",t)}};w.define("twisty-alg-leaf-elem",W);var V=class extends Et{constructor(t,r){super();this.algOrAlgNode=r;this.classList.add(t)}queue=[];addString(t){this.queue.push(document.createTextNode(t))}addElem(t){return this.queue.push(t.element),t.moveCount}flushQueue(t=1){for(let r of Qr(this.queue,t))this.append(r);this.queue=[]}pathToIndex(t){return[]}};w.define("twisty-alg-wrapper-elem",V);function ki(n){return n===1?-1:1}function Ci(n,e){return e<0?ki(n):n}function Qr(n,e){if(e===1)return n;let t=Array.from(n);return t.reverse(),t}var $t=class extends H{traverseAlg(e,t){let r=0,i=new V("twisty-alg-alg",e),o=!0;for(let a of St(e.childAlgNodes(),t.direction))o||i.addString(" "),o=!1,a.as(kt)?.experimentalNISSGrouping&&i.addString("^("),a.as(q)?.experimentalNISSPlaceholder||(r+=i.addElem(this.traverseAlgNode(a,{earliestMoveIndex:t.earliestMoveIndex+r,twistyAlgViewer:t.twistyAlgViewer,direction:t.direction}))),a.as(kt)?.experimentalNISSGrouping&&i.addString(")");return i.flushQueue(t.direction),{moveCount:r,element:i}}traverseGrouping(e,t){let r=e.experimentalAsSquare1Tuple(),i=Ci(t.direction,e.amount),o=0,a=new V("twisty-alg-grouping",e);return a.addString("("),r?(o+=a.addElem({moveCount:1,element:new W("twisty-alg-move",r[0].amount.toString(),t,r[0],!0,!0)}),a.addString(", "),o+=a.addElem({moveCount:1,element:new W("twisty-alg-move",r[1].amount.toString(),t,r[1],!0,!0)})):o+=a.addElem(this.traverseAlg(e.alg,{earliestMoveIndex:t.earliestMoveIndex+o,twistyAlgViewer:t.twistyAlgViewer,direction:i})),a.addString(`)${e.experimentalRepetitionSuffix}`),a.flushQueue(),{moveCount:o*Math.abs(e.amount),element:a}}traverseMove(e,t){let r=new W("twisty-alg-move",e.toString(),t,e,!0,!0);return t.twistyAlgViewer.highlighter.addMove(e.startCharIndex,r),{moveCount:1,element:r}}traverseCommutator(e,t){let r=0,i=new V("twisty-alg-commutator",e);i.addString("["),i.flushQueue();let[o,a]=Qr([e.A,e.B],t.direction);return r+=i.addElem(this.traverseAlg(o,{earliestMoveIndex:t.earliestMoveIndex+r,twistyAlgViewer:t.twistyAlgViewer,direction:t.direction})),i.addString(", "),r+=i.addElem(this.traverseAlg(a,{earliestMoveIndex:t.earliestMoveIndex+r,twistyAlgViewer:t.twistyAlgViewer,direction:t.direction})),i.flushQueue(t.direction),i.addString("]"),i.flushQueue(),{moveCount:r*2,element:i}}traverseConjugate(e,t){let r=0,i=new V("twisty-alg-conjugate",e);i.addString("[");let o=i.addElem(this.traverseAlg(e.A,{earliestMoveIndex:t.earliestMoveIndex+r,twistyAlgViewer:t.twistyAlgViewer,direction:t.direction}));return r+=o,i.addString(": "),r+=i.addElem(this.traverseAlg(e.B,{earliestMoveIndex:t.earliestMoveIndex+r,twistyAlgViewer:t.twistyAlgViewer,direction:t.direction})),i.addString("]"),i.flushQueue(),{moveCount:r+o,element:i}}traversePause(e,t){return e.experimentalNISSGrouping?this.traverseAlg(e.experimentalNISSGrouping.alg,t):{moveCount:1,element:new W("twisty-alg-pause",".",t,e,!0,!0)}}traverseNewline(e,t){let r=new V("twisty-alg-newline",e);return r.append(document.createElement("br")),{moveCount:0,element:r}}traverseLineComment(e,t){return{moveCount:0,element:new W("twisty-alg-line-comment",`//${e.text}`,t,e,!1,!1)}}},Ei=R($t),Xt=class{moveCharIndexMap=new Map;currentElem=null;addMove(e,t){this.moveCharIndexMap.set(e,t)}set(e){let t=e?this.moveCharIndexMap.get(e.startCharIndex)??null:null;this.currentElem!==t&&(this.currentElem?.classList.remove("twisty-alg-current-move"),this.currentElem?.setCurrentMove(!1),t?.classList.add("twisty-alg-current-move"),t?.setCurrentMove(!0),this.currentElem=t)}},$=class extends Et{highlighter=new Xt;#e;#t=null;lastClickTimestamp=null;constructor(e){super(),e?.twistyPlayer&&(this.twistyPlayer=e?.twistyPlayer)}connectedCallback(){}setAlg(e){this.#e=Ei(e,{earliestMoveIndex:0,twistyAlgViewer:this,direction:1}).element,this.textContent="",this.appendChild(this.#e)}get twistyPlayer(){return this.#t}set twistyPlayer(e){this.#r(e)}async#r(e){if(this.#t){console.warn("twisty-player reassignment is not supported");return}if(e===null)throw new Error("clearing twistyPlayer is not supported");this.#t=e,this.#t.experimentalModel.alg.addFreshListener(i=>{this.setAlg(i.alg)});let t=(await this.#t.experimentalModel.alg.get()).alg,r="startCharIndex"in t?t:y.fromString(t.toString());this.setAlg(r),e.experimentalModel.currentMoveInfo.addFreshListener(i=>{let o=i.currentMoves[0];if(o??=i.movesStarting[0],o??=i.movesFinishing[0],!o)this.highlighter.set(null);else{let a=o.move;this.highlighter.set(a)}}),e.experimentalModel.detailedTimelineInfo.addFreshListener(i=>{i.timestamp!==this.lastClickTimestamp&&(this.lastClickTimestamp=null)})}async jumpToIndex(e,t){let r=this.#t;if(r){r.pause();let i=(async()=>{let o=await r.experimentalModel.indexer.get(),a=t?Li:0;return o.indexToMoveStartTimestamp(e)+o.moveDuration(e)-a})();r.experimentalModel.timestampRequest.set(await i),this.lastClickTimestamp===await i?(r.play(),this.lastClickTimestamp=null):this.lastClickTimestamp=await i}}async attributeChangedCallback(e,t,r){if(e==="for"){let i=document.getElementById(r);if(i||console.info("for= elem does not exist, waiting for one"),await customElements.whenDefined("twisty-player"),i=await Hr(r),!(i instanceof C)){console.warn("for= elem is not a twisty-player");return}this.twistyPlayer=i}}static get observedAttributes(){return["for"]}};w.define("twisty-alg-viewer",$);var Jt=class extends H{traverseAlg(e,t){let r=[],i=0;for(let o of e.childAlgNodes()){let a=this.traverseAlgNode(o,{numMovesSofar:t.numMovesSofar+i});r.push(a.tokens),i+=a.numLeavesInside}return{tokens:Array.prototype.concat(...r),numLeavesInside:i}}traverseGrouping(e,t){let r=this.traverseAlg(e.alg,t);return{tokens:r.tokens,numLeavesInside:r.numLeavesInside*e.amount}}traverseMove(e,t){return{tokens:[{leaf:e,idx:t.numMovesSofar}],numLeavesInside:1}}traverseCommutator(e,t){let r=this.traverseAlg(e.A,t),i=this.traverseAlg(e.B,{numMovesSofar:t.numMovesSofar+r.numLeavesInside});return{tokens:r.tokens.concat(i.tokens),numLeavesInside:r.numLeavesInside*2+i.numLeavesInside}}traverseConjugate(e,t){let r=this.traverseAlg(e.A,t),i=this.traverseAlg(e.B,{numMovesSofar:t.numMovesSofar+r.numLeavesInside});return{tokens:r.tokens.concat(i.tokens),numLeavesInside:r.numLeavesInside*2+i.numLeavesInside*2}}traversePause(e,t){return{tokens:[{leaf:e,idx:t.numMovesSofar}],numLeavesInside:1}}traverseNewline(e,t){return{tokens:[],numLeavesInside:0}}traverseLineComment(e,t){return{tokens:[],numLeavesInside:0}}},Gr=R(Jt);var er=class extends c{getDefaultValue(){return""}},tr=class extends d{derive(e){return Qt(e.value)}},rr=class extends b{getDefaultValue(){return{selectionStart:0,selectionEnd:0,endChangedMostRecently:!1}}async derive(e,t){let{selectionStart:r,selectionEnd:i}=e,o=await t,a=e.selectionStart===o.selectionStart&&e.selectionEnd!==(await t).selectionEnd;return{selectionStart:r,selectionEnd:i,endChangedMostRecently:a}}},ir=class extends d{derive(e){return e.selectionInfo.endChangedMostRecently?e.selectionInfo.selectionEnd:e.selectionInfo.selectionStart}},nr=class extends d{derive(e){return Gr(e.algWithIssues.alg,{numMovesSofar:0}).tokens}},or=class extends d{derive(e){function t(i){if(i===null)return null;let o;return e.targetChar<i.leaf.startCharIndex?o="before":e.targetChar===i.leaf.startCharIndex?o="start":e.targetChar<i.leaf.endCharIndex?o="inside":e.targetChar===i.leaf.endCharIndex?o="end":o="after",{leafInfo:i,where:o}}let r=null;for(let i of e.leafTokens){if(e.targetChar<i.leaf.startCharIndex&&r!==null)return t(r);if(e.targetChar<=i.leaf.endCharIndex)return t(i);r=i}return t(r)}},Mt=class{valueProp=new er;selectionProp=new rr;targetCharProp=new ir({selectionInfo:this.selectionProp});algEditorAlgWithIssues=new tr({value:this.valueProp});leafTokensProp=new nr({algWithIssues:this.algEditorAlgWithIssues});leafToHighlight=new or({leafTokens:this.leafTokensProp,targetChar:this.targetCharProp})};var Ni="//";function Ri(n){try{return y.fromString(n)}catch{return null}}function Yr(n,e){let t=n.indexOf(e);return t===-1?[n,""]:[n.slice(0,t),n.slice(t)]}function Kr(n){let e=[];for(let t of n.split(`
`)){let[r,i]=Yr(t,Ni);r=r.replaceAll("\u2019","'"),e.push(r+i)}return e.join(`
`)}function _r(n,e){let{value:t}=n,{selectionStart:r,selectionEnd:i}=n,o=t.slice(0,r),a=t.slice(i);e=e.replaceAll(`\r
`,`
`);let s=o.match(/\/\/[^\n]*$/),l=t[r-1]==="/"&&e[0]==="/",m=s||l,p=e.match(/\/\/[^\n]*$/),h=e;if(m){let[B,A]=Yr(e,`
`);h=B+Kr(A)}else h=Kr(e);let f=!m&&r!==0&&![`
`," "].includes(h[0])&&![`
`," "].includes(t[r-1]),z=!p&&i!==t.length&&![`
`," "].includes(h.at(-1))&&![`
`," "].includes(t[i]);function x(B,A){let ce=B+h+A,de=!!Ri(o+ce+a);return de&&(h=ce),de}f&&z&&x(" "," ")||f&&x(" ","")||z&&x(""," "),S?.execCommand("insertText",!1,h)||n.setRangeText(h,r,i,"end")}var Zr=new T(`
:host {
  width: 384px;
  display: grid;
}

.wrapper {
  /*overflow: hidden;
  resize: horizontal;*/

  background: var(--background, none);
  display: grid;
}

textarea, .carbon-copy {
  grid-area: 1 / 1 / 2 / 2;

  width: 100%;
  font-family: sans-serif;
  line-height: 1.2em;

  font-size: var(--font-size, inherit);
  font-family: var(--font-family, sans-serif);

  box-sizing: border-box;

  padding: var(--padding, 0.5em);
  /* Prevent horizontal growth. */
  overflow-x: hidden;
}

textarea {
  resize: none;
  background: none;
  z-index: 2;
  border: 1px solid var(--border-color, rgba(0, 0, 0, 0.25));
}

.carbon-copy {
  white-space: pre-wrap;
  word-wrap: break-word;
  color: transparent;
  user-select: none;
  pointer-events: none;

  z-index: 1;
}

.carbon-copy .highlight {
  background: var(--highlight-color, rgba(255, 128, 0, 0.5));
  padding: 0.1em 0.2em;
  margin: -0.1em -0.2em;
  border-radius: 0.2em;
}

.wrapper.issue-warning textarea,
.wrapper.valid-for-puzzle-warning textarea {
  outline: none;
  border: 1px solid rgba(200, 200, 0, 0.5);
  background: rgba(255, 255, 0, 0.1);
}

.wrapper.issue-error textarea,
.wrapper.valid-for-puzzle-error textarea {
  outline: none;
  border: 1px solid red;
  background: rgba(255, 0, 0, 0.1);
}
`);var zt="for-twisty-player",$r="placeholder",Xr="twisty-player-prop",Tt=class extends M{model=new Mt;#e=document.createElement("textarea");#t=document.createElement("div");#r=document.createElement("span");#i=document.createElement("span");#n=document.createElement("span");#o=new L(this,"valid-for-puzzle-",["none","warning","error"]);#a=null;#s;get#l(){return this.#a===null?null:this.#a.experimentalModel[this.#s]}debugNeverRequestTimestamp=!1;constructor(e){super(),this.#t.classList.add("carbon-copy"),this.addElement(this.#t),this.#e.rows=1,this.addElement(this.#e),this.#r.classList.add("prefix"),this.#t.appendChild(this.#r),this.#i.classList.add("highlight"),this.#t.appendChild(this.#i),this.#n.classList.add("suffix"),this.#t.appendChild(this.#n),this.#e.placeholder="Alg",this.#e.setAttribute("spellcheck","false"),this.addCSS(Zr),this.#e.addEventListener("input",()=>{this.#p=!0,this.onInput()}),this.#e.addEventListener("blur",()=>this.onBlur()),document.addEventListener("selectionchange",()=>this.onSelectionChange()),e?.twistyPlayer&&(this.twistyPlayer=e.twistyPlayer),this.#s=e?.twistyPlayerProp??"alg",e?.twistyPlayerProp==="alg"&&this.model.leafToHighlight.addFreshListener(t=>{t&&this.highlightLeaf(t.leafInfo.leaf)})}connectedCallback(){this.#e.addEventListener("paste",e=>{let t=e.clipboardData?.getData("text");t&&(_r(this.#e,t),e.preventDefault(),this.onInput())})}set algString(e){this.#e.value=e,this.onInput()}get algString(){return this.#e.value}set placeholder(e){this.#e.placeholder=e}#p=!1;onInput(){this.#i.hidden=!0,this.highlightLeaf(null);let e=this.#e.value.trimEnd();this.model.valueProp.set(e),this.#l?.set(e)}async onSelectionChange(){if(document.activeElement!==this||this.shadow.activeElement!==this.#e||this.#s!=="alg")return;let{selectionStart:e,selectionEnd:t}=this.#e;this.model.selectionProp.set({selectionStart:e,selectionEnd:t})}async onBlur(){}setAlgIssueClassForPuzzle(e){this.#o.setValue(e)}#m(e){return e.endsWith(`
`)?`${e} `:e}#u=null;highlightLeaf(e){if(this.#s==="alg"){if(e===null){this.#r.textContent="",this.#i.textContent="",this.#n.textContent=this.#m(this.#e.value);return}e!==this.#u&&(this.#u=e,this.#r.textContent=this.#e.value.slice(0,e.startCharIndex),this.#i.textContent=this.#e.value.slice(e.startCharIndex,e.endCharIndex),this.#n.textContent=this.#m(this.#e.value.slice(e.endCharIndex)),this.#i.hidden=!1)}}get twistyPlayer(){return this.#a}set twistyPlayer(e){if(this.#a){console.warn("twisty-player reassignment/clearing is not supported");return}this.#a=e,e&&((async()=>this.algString=this.#l?(await this.#l.get()).alg.toString():"")(),this.#s==="alg"&&(this.#a?.experimentalModel.puzzleAlg.addFreshListener(t=>{if(t.issues.errors.length===0){this.setAlgIssueClassForPuzzle(t.issues.warnings.length===0?"none":"warning");let r=t.alg,i=y.fromString(this.algString);r.isIdentical(i)||(this.algString=r.toString(),this.onInput())}else this.setAlgIssueClassForPuzzle("error")}),this.model.leafToHighlight.addFreshListener(async t=>{if(t===null)return;let[r,i]=await Promise.all([await e.experimentalModel.indexer.get(),await e.experimentalModel.timestampRequest.get()]);if(i==="auto"&&!this.#p)return;let o=r.indexToMoveStartTimestamp(t.leafInfo.idx),a=r.moveDuration(t.leafInfo.idx),s;switch(t.where){case"before":{s=o;break}case"start":case"inside":{s=o+a/4;break}case"end":case"after":{s=o+a;break}default:throw console.log("invalid where"),new Error("Invalid where!")}this.debugNeverRequestTimestamp||e.experimentalModel.timestampRequest.set(s)}),e.experimentalModel.currentLeavesSimplified.addFreshListener(async t=>{let i=(await e.experimentalModel.indexer.get()).getAnimLeaf(t.patternIndex);this.highlightLeaf(i)})))}attributeChangedCallback(e,t,r){switch(e){case zt:{let i=document.getElementById(r);if(!i){console.warn(`${zt}= elem does not exist`);return}if(!(i instanceof C)){console.warn(`${zt}=is not a twisty-player`);return}this.twistyPlayer=i;return}case $r:{this.placeholder=r;return}case Xr:{if(this.#a)throw console.log("cannot set prop"),new Error("cannot set prop after twisty player");this.#s=r;return}}}static get observedAttributes(){return[zt,$r,Xr]}};w.define("twisty-alg-editor",Tt);var Jr=new T(`
.wrapper {
  background: rgb(255, 245, 235);
  border: 1px solid rgba(0, 0, 0, 0.25);

  /* Workaround from https://stackoverflow.com/questions/40010597/how-do-i-apply-opacity-to-a-css-color-variable */
  --text-color: 0, 0, 0;
  --heading-background: 255, 230, 210;

  color: rgb(var(--text-color));
}

.setup-alg, twisty-alg-viewer {
  padding: 0.5em 1em;
}

.heading {
  background: rgba(var(--heading-background), 1);
  color: rgba(var(--text-color), 1);
  font-weight: bold;
  padding: 0.25em 0.5em;
  display: grid;
  grid-template-columns: auto 1fr;

  /* For the move count hover elems. */
  position: sticky;
}

.heading.title {
  background: rgb(255, 245, 235);
  font-size: 150%;
  white-space: pre-wrap;
}

.heading .move-count {
  font-weight: initial;
  text-align: right;
  color: rgba(var(--text-color), 0.4);
}

.wrapper.dark-mode .heading .move-count {
  color: rgba(var(--text-color), 0.7);
}

.heading a {
  text-decoration: none;
  color: inherit;
}

twisty-player {
  width: 100%;
  min-height: 128px;
  height: 288px;
  resize: vertical;
  overflow-y: hidden;
}

twisty-player + .heading {
  padding-top: 0.5em;
}

twisty-alg-viewer {
  display: inline-block;
}

.wrapper {
  container-type: inline-size;
}

.scrollable-region {
  border-top: 1px solid rgba(0, 0, 0, 0.25);
}

.scrollable-region {
  max-height: 18em;
  overflow-y: auto;
}

@container (min-width: 512px) {
  .responsive-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  twisty-player {
    height: 320px
  }
  .scrollable-region {
    border-top: none;
    border-left: 1px solid rgba(0, 0, 0, 0.25);
    contain: strict;
    max-height: 100cqh;
  }
}

.wrapper:fullscreen,
.wrapper:fullscreen .responsive-wrapper {
  width: 100%;
  height: 100%;
}

.wrapper:fullscreen twisty-player,
.wrapper:fullscreen .scrollable-region {
  height: 50%;
}

@container (min-width: 512px) {
  .wrapper:fullscreen twisty-player,
  .wrapper:fullscreen .scrollable-region {
    height: 100%;
  }
}

/* TODO: dedup with Twizzle Editor */
.move-count > span:hover:before {
  background-color: rgba(var(--heading-background), 1);
  color: rgba(var(--text-color), 1);
  backdrop-filter: blur(4px);
  z-index: 100;
  position: absolute;
  padding: 0.5em;
  top: 1.5em;
  right: 0;
  content: attr(data-before);
  white-space: pre-wrap;
  text-align: left;
}

.move-count > span:hover {
  color: rgba(var(--text-color), 1);
  cursor: help;
}
`),ei=new T(`
.wrapper {
  background: white;
  --heading-background: 232, 239, 253
}

.wrapper.dark-mode {
  --text-color: 236, 236, 236;
  --heading-background: 29, 29, 29;
}

.scrollable-region {
  overflow-y: auto;
}

.wrapper.dark-mode {
  background: #262626;
  --text-color: 142, 142, 142;
  border-color: #FFFFFF44;
  color-scheme: dark;
}

.wrapper.dark-mode .heading:not(.title) {
  background: #1d1d1d;
}

.heading.title {
  background: none;
}
`);var Pt="outer block moves (e.g. R, Rw, or 4r)",bt="inner block moves (e.g. M or 2-5r)",ti={OBTM:`HTM = OBTM ("Outer Block Turn Metric"):
\u2022 ${bt} count as 2 turns
\u2022 ${Pt} count as 1 turn
\u2022 rotations (e.g. x) count as 0 turns`,OBQTM:`QTM = OBQTM ("Outer Block Quantum Turn Metric"):
\u2022 ${bt} count as 2 turns per quantum (e.g. M2 counts as 4)
\u2022 ${Pt} count as 1 turn per quantum (e.g. R2 counts as 2)
\u2022 rotations (e.g. x) count as 0 turns`,RBTM:`STM = RBTM ("Range Block Turn Metric"):
\u2022 ${bt} count as 1 turn
\u2022 ${Pt} count as 1 turn
\u2022 rotations (e.g. x) count as 0 turns`,RBQTM:`SQTM = RBQTM ("Range Block Quantum Turn Metric"):
\u2022 ${bt} count as 1 turn per quantum (e.g. M2 counts as 2)
\u2022 ${Pt} count as 1 turn per quantum (e.g. R2 counts as 2)
\u2022 rotations (e.g. x) count as 0 turns`,ETM:`ETM ("Execution Turn Metric"):
\u2022 all moves (including rotations) count as 1 turn`},Oi={OBTM:"OB",OBQTM:"OBQ",RBTM:"RB",RBQTM:"RBQ",ETM:"E"},At=class extends M{constructor(t){super({mode:"open"});this.options=t}twistyPlayer=null;a=null;fallback(){if(this.contentWrapper.textContent="",this.a){let t=this.contentWrapper.appendChild(document.createElement("span"));t.textContent="\u2757\uFE0F",t.title="Could not show a player for link",this.addElement(this.a)}this.#e?.remove(),this.#t?.remove()}#e;#t;#r;#i;#n;async connectedCallback(){if(this.#i=this.addElement(document.createElement("div")),this.#i.classList.add("responsive-wrapper"),this.options?.colorScheme==="dark"&&this.contentWrapper.classList.add("dark-mode"),this.#e=this.addCSS(Jr),this.options?.cdnForumTweaks&&this.addCSS(ei),this.a=this.querySelector("a"),!this.a)return;let t=ri("",this.a.href),r=this.a?.href,{hostname:i,pathname:o}=new URL(r);if(i!=="alpha.twizzle.net"){this.fallback();return}if(["/edit/","/explore/"].includes(o)){let a=o==="/explore/";if(t.puzzle&&!(t.puzzle in ge)){let m=(await import("./puzzle-geometry-37DOBR3B.js")).getPuzzleDescriptionString(t.puzzle);delete t.puzzle,t.experimentalPuzzleDescription=m}if(this.twistyPlayer=this.#i.appendChild(new C({background:this.options?.cdnForumTweaks?"checkered-transparent":"checkered",colorScheme:this.options?.colorScheme?"dark":"light",...t,viewerLink:a?"experimental-twizzle-explorer":"auto"})),this.twistyPlayer.fullscreenElement=this.contentWrapper,t.experimentalTitle&&(this.twistyPlayer.experimentalTitle=t.experimentalTitle),this.#r=this.#i.appendChild(document.createElement("div")),this.#r.classList.add("scrollable-region"),t.experimentalTitle&&this.addHeading(t.experimentalTitle).classList.add("title"),t.experimentalSetupAlg){this.addHeading("Setup",async()=>(await this.twistyPlayer?.experimentalModel.setupAlg.get())?.alg.toString()??null);let m=this.#r.appendChild(document.createElement("div"));m.classList.add("setup-alg"),m.textContent=new y(t.experimentalSetupAlg).toString()}let s=this.addHeading("Moves",async()=>(await this.twistyPlayer?.experimentalModel.alg.get())?.alg.toString()??null);this.#n=s.appendChild(Wi(this.twistyPlayer.experimentalModel)),this.#n.classList.add("move-count"),this.#r.appendChild(new $({twistyPlayer:this.twistyPlayer})).part.add("twisty-alg-viewer")}else this.fallback()}addHeading(t,r){let i=this.#r.appendChild(document.createElement("div"));i.classList.add("heading");let o=i.appendChild(document.createElement("span"));if(o.textContent=t,r){o.textContent+=" ";let a=o.appendChild(document.createElement("a"));a.textContent="\u{1F4CB}",a.href="#",a.title="Copy to clipboard";async function s(l){a.textContent=l,await new Promise(m=>setTimeout(m,2e3)),a.textContent===l&&(a.textContent="\u{1F4CB}")}a.addEventListener("click",async l=>{l.preventDefault(),a.textContent="\u2026\u{1F4CB}";let m=await r();if(m)try{await navigator.clipboard.writeText(m),s("\u2705\u{1F4CB}")}catch(p){throw s("\u274C\u{1F4CB}"),p}else s("\u274C\u{1F4CB}")})}return i}};w.define("twizzle-link",At);function Wi(n,e=document.createElement("span")){async function t(){let[r,i]=await Promise.all([n.puzzleAlg.get(),n.puzzleLoader.get()]);if(r.issues.errors.length!==0){e.textContent="";return}let o=!0;function a(s){o?o=!1:e.append(")(");let l=e.appendChild(document.createElement("span")),m=dr(i,s,r.alg);l.append(`${Oi[s]}: `);let p=l.appendChild(document.createElement("span"));p.textContent=m.toString(),p.classList.add("move-number"),l.setAttribute("data-before",ti[s]??""),l.setAttribute("title",ti[s]??"")}e.textContent="(",i.id==="3x3x3"?(a("OBTM"),a("OBQTM"),a("RBTM")):i.pg&&(a("RBTM"),a("RBQTM")),a("ETM"),e.append(")")}return n.puzzleAlg.addFreshListener(t),n.puzzleID.addFreshListener(t),e}function ni(n){window.history.replaceState("","",n.toString())}var ii=class{#e;constructor(e,t){this.#e=t?.prefix??"",this.listenToAlgProp(e.alg,"alg"),this.listenToAlgProp(e.setupAlg,"setup-alg"),this.listenToStringOrNullProp(e.twistySceneModel.stickeringRequest,"stickering","full"),this.listenToStringSourceProp(e.setupAnchor,"setup-anchor"),this.listenToStringOrNullProp(e.title,"title"),this.listenToStringOrNoValueProp(e.puzzleIDRequest,"puzzle",P),this.listenToStringOrNoValueProp(e.puzzleDescriptionRequest,"puzzle-description",P)}setURLParam(e,t,r){let i=this.#e+e,o=new URL(location.href);t===r?o.searchParams.delete(i):o.searchParams.set(i,t),ni(o)}async listenToStringSourceProp(e,t,r){let i=r??await e.getDefaultValue()??"";e.addFreshListener(o=>{this.setURLParam(t,o,i)})}async listenToStringOrNullProp(e,t,r=""){e.addFreshListener(i=>{this.setURLParam(t,i??r,r)})}async listenToStringOrNoValueProp(e,t,r){e.addFreshListener(i=>{i===P&&(i=r),i===P?this.setURLParam(t,"",""):this.setURLParam(t,i,"")})}listenToAlgProp(e,t){e.addFreshListener(r=>{this.setURLParam(t,r.alg.toString(),"")})}};function ri(n="",e=location.href){let t={alg:"alg","setup-alg":"experimental-setup-alg","setup-anchor":"experimental-setup-anchor",puzzle:"puzzle",stickering:"experimental-stickering","puzzle-description":"experimental-puzzle-description",title:"experimental-title","video-url":"experimental-video-url",competition:"experimental-competition-id"},r=new URL(e).searchParams,i={};for(let[o,a]of Object.entries(t)){let s=r.get(n+o);if(s!==null){let l=ue[a];i[l]=s}}return i}function Au(n){let e=new URL(location.href);for(let[t,r]of Object.entries(n)){if(r!==null&&!e.searchParams.has(r)){let i=e.searchParams.get(t);i!==null&&e.searchParams.set(r,i)}e.searchParams.delete(t)}ni(e)}export{ji as a,C as b,ii as c,ri as d,Au as e,Wi as f};
//# sourceMappingURL=chunk-RMRNQ6AZ.js.map
