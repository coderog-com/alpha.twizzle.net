function i(e,t,n,o){let p=document.getElementById(e),s=()=>{t.set(p.checked?n:o)};s(),t.addFreshListener(a=>{p.checked=![o].includes(a)}),p.addEventListener("change",s)}function l(e){let t=document.querySelector("#tempo-scale"),n=document.querySelector("#tempo-scale-display");t.addEventListener("input",()=>{e.set(parseFloat(t.value)),n.textContent=`${t.value}\xD7`}),e.addFreshListener(o=>{t.value=o.toString(),n.textContent=`${o}\xD7`})}function r(e){i("visualization-3D",e.experimentalModel.visualizationFormat,"PG3D","2D"),i("back-view-side-by-side",e.experimentalModel.backView,"side-by-side","top-right"),i("foundation-display-opaque",e.experimentalModel.twistySceneModel.foundationDisplay,"opaque","none"),i("hint-facelets-floating",e.experimentalModel.twistySceneModel.hintFacelet,"floating","none"),l(e.experimentalModel.tempoScale)}export{r as a};
//# sourceMappingURL=chunk-6OEFM3QD.js.map
