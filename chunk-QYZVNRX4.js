var e=9007199254740992,i=2097152,a=2048;function l(){let{crypto:n}=globalThis;if(!n){let{node:o}=globalThis.process?.versions;if(o&&parseInt(o.split(".")[0])<19)throw new Error("`node` 19 or above is required for randomization using `random-uint-below`")}return n}function t(){let n=new Uint32Array(2);l().getRandomValues(n);let o=n[0],r=n[1];return Math.floor(o*i)+Math.floor(r/a)}function c(n){if(typeof n!="number"||n<0||Math.floor(n)!==n)throw new Error("randomUIntBelow() not called with a positive integer value.");if(n>e)throw new Error(`Called randomUIntBelow() with max === ${n}, which is larger than JavaScript can handle with integer precision.`)}function s(n){c(n);let o=t(),r=Math.floor(e/n)*n;for(;o>=r;)return o=t();return o%n}function h(n){return n[s(n.length)]}export{s as a,h as b};
//# sourceMappingURL=chunk-QYZVNRX4.js.map