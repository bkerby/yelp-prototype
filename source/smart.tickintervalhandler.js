
/* Smart HTML Elements v7.3.0 (2020-Apr) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function i(a){if(t[a])return t[a].exports;var l=t[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,i),l.l=!0,l.exports}i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)i.d(a,l,function(t){return e[t]}.bind(null,l));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=92)}({92:function(e,t){Smart.Utilities.Assign("TickIntervalHandler",class{constructor(e,t,i,a,l,n,r){const s=this;s.context=e,s.minLabel=t,s.maxLabel=i,s.labelClass=a,s.dimension=l,s.logarithmic=r,e.customInterval?e.customTicks.length>0?s.labelsSize=s.getCustomTicksLabelSize():s.labelsSize={minLabelSize:0,minLabelOtherSize:0,maxLabelSize:0,maxLabelOtherSize:0}:s.labelsSize=s.getMinAndMaxLabelSize(),n?(s.getNiceInterval=s.getNiceIntervalInteger,s.getPossibleBiggerLabel=s.getPossibleBiggerLabelInteger):(s.getNiceInterval=s.getNiceIntervalFloatingPoint,s.getPossibleBiggerLabel=s.getPossibleBiggerLabelFloatingPoint)}getInterval(e,t,i,a){const l=this.context,n=l._measurements.innerRadius;let r,s,o=1;"radial"===e?(r=Math.max(this.labelsSize.minLabelSize,this.labelsSize.minLabelOtherSize,this.labelsSize.maxLabelSize,this.labelsSize.maxLabelOtherSize),o=1.35):(r=Math.max(this.labelsSize.minLabelSize,this.labelsSize.maxLabelSize),o=1.45),r*=o,s="radial"===e?function(){let e=2*Math.PI*n*(Math.abs(l.startAngle-l.endAngle)/360);return Math.round(e)}():l[this.dimension]-this.labelsSize.minLabelSize/2-this.labelsSize.maxLabelSize/2,s=Math.max(10,s);const m=Math.ceil(s/r),b="radial"===e?4*m:3*m;let c=this.getNiceInterval(t,i,m,!0),h=this.getNiceInterval(t,i,b);if(l._cachedLabelsSize=this.labelsSize,m>2&&!l.customInterval){const n=this.getPossibleBiggerLabel(m,c);if(n.length>Math.max(this.minLabel.length,this.maxLabel.length)){const r=this.minLabel;this.minLabel=n,this.labelsSize=this.getMinAndMaxLabelSize(),l._cachedLabelsSize=this.labelsSize;const s=this.getInterval(e,t,i,a);return this.minLabel=r,this.labelsSize=this.getMinAndMaxLabelSize(),s}}return{major:c,minor:h}}getNiceIntervalFloatingPoint(e,t,i,a){const l=t-e,n=Math.floor(Math.log10(l)-Math.log10(i));let r,s=Math.pow(10,n),o=i*s;r=l<2*o?1:l<3*o?2:l<7*o?5:10;let m=r*s;if(a&&this.context._range/m>i){switch(r){case 5:r=10;break;case 2:r=5;break;case 1:r=2}m=r*s}return this.nearestPowerOfTen=s,this.logarithmic&&a?Math.max(1,m):m}getPossibleBiggerLabelFloatingPoint(e,t){const i=this.context;let a,l,n=parseFloat(i.min-i._numericProcessor.getPreciseModulo(parseFloat(i.min),t)+parseFloat(t)),r=n;this.logarithmic&&(n=Math.pow(10,n)),a=i._formatLabel(n);for(let n=1;n<e&&(r+=t,!(r>=i._drawMax));n++)l=this.logarithmic?Math.pow(10,r):r,l=i._formatLabel(l),l.length>a.length&&(a=l);return a}getNiceIntervalInteger(e,t,i,a){const l=new Smart.Utilities.BigNumber(t).subtract(new Smart.Utilities.BigNumber(e)),n=Math.floor(Math.log10(l.toString())-Math.log10(i)),r=new Smart.Utilities.BigNumber(10).pow(new Smart.Utilities.BigNumber(n)),s=new Smart.Utilities.BigNumber(i).multiply(r);let o;o=-1===l.compare(new Smart.Utilities.BigNumber(2*s))?1:-1===l.compare(new Smart.Utilities.BigNumber(3*s))?2:-1===l.compare(new Smart.Utilities.BigNumber(7*s))?5:10;let m=new Smart.Utilities.BigNumber(o).multiply(r);if(a&&1===new Smart.Utilities.BigNumber(this.context._range).divide(m).compare(i)){switch(o){case 5:o=10;break;case 2:o=5;break;case 1:o=2}m=new Smart.Utilities.BigNumber(o).multiply(r)}return-1===m.compare(1)&&(m=new Smart.Utilities.BigNumber(1)),this.nearestPowerOfTen=r,m}getPossibleBiggerLabelInteger(e,t){const i=this.context,a=new Smart.Utilities.BigNumber(10);let l,n,r=new Smart.Utilities.BigNumber(i.min).subtract(new Smart.Utilities.BigNumber(i.min).mod(t)).add(t),s=r;this.logarithmic&&(r=a.pow(r)),l=i._formatLabel(r);for(let r=1;r<e&&(s=s.add(t),-1===s.compare(i._drawMax));r++)n=this.logarithmic?a.pow(s):s,n=i._formatLabel(n),n.length>l.length&&(l=n);return l}getMinAndMaxLabelSize(){const e=this.context,t=e.$.container,i=document.createElement("span");i.className=this.labelClass,i.style.position="absolute",i.style.visibility="hidden",t.appendChild(i),i.innerHTML=this.minLabel;const a=i[this.dimension],l=i[e._settings.otherSize];i.innerHTML=this.maxLabel;const n=i[this.dimension],r=i[e._settings.otherSize];return t.removeChild(i),{minLabelSize:a,minLabelOtherSize:l,maxLabelSize:n,maxLabelOtherSize:r}}getCustomTicksLabelSize(){const e=this,t=e.context,i=t.$.container,a=document.createElement("span"),l=t.customTicks;a.className=e.labelClass,a.style.position="absolute",a.style.visibility="hidden",i.appendChild(a),a.innerHTML=t._formatLabel(l[0]);let n=a[e.dimension],r=a[t._settings.otherSize];for(let i=1;i<t.customTicks.length;i++){a.innerHTML=t._formatLabel(t.customTicks[i]);const l=a[e.dimension],s=a[t._settings.otherSize];l>n&&(n=l),s>r&&(r=s)}return i.removeChild(a),{minLabelSize:n,minLabelOtherSize:r,maxLabelSize:n,maxLabelOtherSize:r}}})}});