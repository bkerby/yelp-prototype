
/* Smart HTML Elements v7.3.0 (2020-Apr) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function n(i){if(t[i])return t[i].exports;var l=t[i]={i:i,l:!1,exports:{}};return e[i].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(i,l,function(t){return e[t]}.bind(null,l));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}({2:function(e,t){Smart("smart-array",class extends Smart.BaseElement{static get properties(){return{arrayIndexingMode:{value:"LabVIEW",allowedValues:["LabVIEW","JavaScript"],type:"string"},changeProperty:{value:null,type:"function?"},columns:{value:1,type:"number"},customWidgetDefaultValue:{value:null,type:"any?"},dimensions:{value:1,type:"number"},elementHeight:{value:25,type:"number"},elementTemplate:{value:null,type:"function?"},elementWidth:{value:75,type:"number"},getElementValue:{value:null,type:"function?"},indexerHeight:{value:25,type:"number"},indexerWidth:{value:50,type:"number"},messages:{value:{en:{callbackFunctionRequired:"smart-array: When \"type\" is 'custom', the {{callback}} callback function has to be implemented."}},type:"object",extend:!0},rows:{value:1,type:"number"},setElementValue:{value:null,type:"function?"},showHorizontalScrollbar:{value:!1,type:"boolean"},showIndexDisplay:{value:!1,type:"boolean"},showSelection:{value:!1,type:"boolean"},showVerticalScrollbar:{value:!1,type:"boolean"},type:{value:"none",allowedValues:["none","boolean","numeric","string","custom"],type:"string"},value:{value:null,type:"array?",reflectToAttribute:!1}}}static get listeners(){return{resize:"_resizeHandler","horizontalScrollbar.change":"_scrollbarChangeHandler","horizontalScrollbar.click":"_scrollbarClickHandler","verticalScrollbar.change":"_scrollbarChangeHandler","verticalScrollbar.click":"_scrollbarClickHandler"}}static get requires(){return{"Smart.NumericTextBox":"smart.numerictextbox.js","Smart.ScrollBar":"smart.scrollbar.js","Smart.SwitchButton":"smart.switchbutton.js","Smart.TextBox":"smart.textbox.js"}}template(){return'<div>\n                    <div id="indexerContainer" class="smart-indexer-container smart-hidden"></div>\n                    <div id="bigContainer" class="smart-big-container smart-array-background">\n                        <div id="centralContainer">\n                            <div id="mainContainer" class="smart-main-container"></div>\n                            <div id="horizontalScrollbarContainer" class="smart-scrollbar-container-horizontal smart-hidden">\n                                <smart-scroll-bar id="horizontalScrollbar" animation="[[animation]]" min="0" max="0" value="0" step="1"></smart-scroll-bar>\n                            </div>\n                        </div>\n                        <div id="verticalScrollbarContainer" class="smart-scrollbar-container-vertical smart-hidden">\n                            <smart-scroll-bar id="verticalScrollbar" animation="[[animation]]" orientation="vertical" min="0" max="0" value="0" step="1"></smart-scroll-bar>\n                        </div>\n                    </div>\n                </div>'}render(){const e=this;e._id=e.getAttribute("id")||Math.round(1e4*Math.random()),e._cachedWidth=e.offsetWidth,e._cachedHeight=e.offsetHeight,e._coordinates=[],e._getDefaultCellValue(),e._validateProperties(),e._addInitialDimensions(),"none"!==e.type&&(e._addElementStructure(),e._structureAdded=!0,e._initializeElements(!1)),e._getInitialFill(),e._updateWidgetWidth(),e._updateWidgetHeight(),e._cachedWidth=e.offsetWidth,e._cachedHeight=e.offsetHeight,super.render()}addDimension(e){const t=this;if(!0!==t._suppressDimensionChange&&32===t.dimensions)return;const n=document.createElement("smart-numeric-text-box");n.className="smart-array-indexer",n.style.height=t.indexerHeight+"px",n.inputFormat="integer",n.spinButtons=!0,n.min=0,n.max=4294967295,n.disabled=t.disabled,n.animation=t.animation,n.validation="interaction",n.wordLength="uint64",n.onReady=function(){n.$upButton.addClass("smart-array-indexer-increment"),n.$downButton.addClass("smart-array-indexer-decrement")},t.$.indexerContainer.insertBefore(n,t.$.indexerContainer.children?t.$.indexerContainer.children[0]:null),n.$.listen("change",t._indexerChangeHandler.bind(t)),t._dimensions.push({index:t._dimensions.length,indexer:n}),"LabVIEW"===t.arrayIndexingMode?(t._indexers.unshift(n),t._coordinates.unshift(0)):(t._indexers.push(n),t._coordinates.push(0)),n.dimension=t._indexers.length-1,!0!==t._suppressDimensionChange&&(t.dimensions+=1,t.$.fireEvent("dimensionChange",{type:"add"})),!0!==t._initialDimensions&&!1!==e&&(t._validateValueArrayDimensions(),"LabVIEW"===t.arrayIndexingMode?t._filledUpTo.unshift(0):t._filledUpTo.push(0),!0===t._oneDimensionSpecialCase&&(t._oneDimensionSpecialCase=!1,t.$.verticalScrollbar.value=0,t._scroll())),void 0!==t._absoluteSelectionStart&&("LabVIEW"===t.arrayIndexingMode?t._absoluteSelectionStart.unshift(0):t._absoluteSelectionStart.push(0)),void 0!==t._absoluteSelectionEnd&&("LabVIEW"===t.arrayIndexingMode?t._absoluteSelectionEnd.unshift(0):t._absoluteSelectionEnd.push(0)),t._initialDimensions||t._refreshSelection(),!1===t._suppressDimensionChange&&!0===t.showIndexDisplay&&t.dimensions*(t.indexerHeight+4)-2>t._cachedHeight&&t._updateWidgetHeight("dimensions")}clearSelection(){const e=this;e._absoluteSelectionStart=void 0,e._absoluteSelectionEnd=void 0,e.showSelection&&e._clearSelection()}copyElementValueToClipboard(e,t){const n=this,i=n._getValueInCell(e,t);if(void 0!==i)try{const e=document.createElement("input");e.type="text",e.style.position="absolute",e.value=i,n.appendChild(e),e.focus(),e.setSelectionRange(0,e.value.length),document.execCommand("copy"),n.removeChild(e)}catch(e){}}deleteColumn(e){const t=this,n="LabVIEW"===t.arrayIndexingMode;let i;if(e=Math.max(0,e),i=n?t._filledUpTo[t._filledUpTo.length-1]:t._filledUpTo[0],e>i)return;if(0===i||t._oneDimensionSpecialCase&&0===e)return void t.emptyArray();const l=JSON.stringify(t.value);let a,o;if(n){a=t.dimensions-1,o=e+t._coordinates[a];const n=function(e,t){if(a!==t)for(let i=0;i<e.length;i++)n(e[i],t+1);else e.splice(o,1)};n(t.value,0)}else a=0,o=e+t._coordinates[0],t.value.splice(o,1);JSON.stringify(t.value)!==l&&(t._filledUpTo[a]--,t._scroll(),t.$.fireEvent("change",{value:t.value,oldValue:JSON.parse(l)}),t._setMaxValuesOfScrollBars())}deleteRow(e){const t=this,n=JSON.stringify(t.value),i="LabVIEW"===t.arrayIndexingMode;let l,a,o;if(e=Math.max(0,e),o=i?t._filledUpTo[t._filledUpTo.length-2]:t._filledUpTo[1],!(e>o))if(0!==o){if(1===t.dimensions){if(!t._oneDimensionSpecialCase)return void(0===e&&t.emptyArray());t.value.splice(e+t._coordinates[0],1),t._filledUpTo[0]--}else{if(i){l=t.dimensions-2,a=e+t._coordinates[l];const n=function(e,t){if(l!==t)for(let i=0;i<e.length;i++)n(e[i],t+1);else e.splice(a,1)};n(t.value,0)}else{l=1,a=e+t._coordinates[1];for(let e=0;e<t.value.length;e++){t.value[e].splice(a,1)}}t._filledUpTo[l]--}n!==JSON.stringify(t.value)&&(t._scroll(),t.$.fireEvent("change",{value:t.value,oldValue:JSON.parse(n)}),t._setMaxValuesOfScrollBars())}else t.emptyArray()}emptyArray(){const e=this;if("none"===e.type)return;const t=e._cells,n=e.value;if(e.value=e._returnEmptyArray(),JSON.stringify(n)!==JSON.stringify(e.value)){for(let n=0;n<t.length;n++)for(let i=0;i<t[n].length;i++){const l=t[n][i].widget,a={x:i,y:n},o=e._getDefaultValue();l.classList.add("smart-array-element-empty"),e._areDifferent(e._getElementValue(l,a),o)&&(l.supressChange=!0,e._setElementValue(o,l,a))}e._getInitialFill(),e.clearSelection(),e.$.fireEvent("change",{value:e.value,oldValue:n})}}endSelection(e,t){const n=this;if(void 0===n._absoluteSelectionStart)return;n._absoluteSelectionEnd=n._coordinates.slice(0);const i=n.dimensions;"LabVIEW"===n.arrayIndexingMode?(n._absoluteSelectionEnd[i-1]=Math.min(t,n._filledUpTo[i-1]),i>1&&(n._absoluteSelectionEnd[i-2]=Math.min(e,n._filledUpTo[i-2]))):(n._absoluteSelectionEnd[0]=Math.min(t,n._filledUpTo[0]),i>1&&(n._absoluteSelectionEnd[1]=Math.min(e,n._filledUpTo[1])));let l=!0;for(let e=0;e<i;e++)l=l&&n._absoluteSelectionStart[e]<=n._absoluteSelectionEnd[e];l?n._refreshSelection():(n._absoluteSelectionStart=void 0,n._absoluteSelectionEnd=void 0)}getElement(e,t){const n=this._cells;if(void 0!==n[e]&&void 0!==n[e][t])return n[e][t].widget}getElementSize(){return{width:this.elementWidth,height:this.elementHeight}}getIndexerValue(){const e=this._indexers,t=[];for(let n=0;n<e.length;n++)t.push(e[n].val());return t}hitTest(e,t){const n=this,i=document.elementFromPoint(e,t);if(!n.contains(i))return;const l=i.closest(".smart-array-element"),a=i.closest(".smart-array-indexer");if(null!==l)return{type:"element",htmlElement:l,row:l.row,column:l.col};if(null!==a){let e=a.dimension;return"LabVIEW"===n.arrayIndexingMode&&(e=n.dimensions-e-1),{type:"indexer",htmlElement:a,dimension:e}}return{type:"array",htmlElement:n}}insertColumnBefore(e,t){const n=this,i=JSON.stringify(n.value),l="LabVIEW"===n.arrayIndexingMode;let a;if(l&&!0!==t)n.insertRowBefore(e,!0);else{if(1===n.dimensions){if(l!==n._oneDimensionSpecialCase)return;n.value.splice(e+n._coordinates[0],0,n._getDefaultValue()),n._scroll(),n._filledUpTo[0]++}else{const t=n._filledUpTo.slice(0);if(l){a=e+n._coordinates[n.dimensions-2];const i=n.dimensions-2,l=function(e,t){if(i!==t)for(let n=0;n<e.length;n++)l(e[n],t+1);else e.splice(a,0,[])};l(n.value,0),t[i]++}else a=e+n._coordinates[0],n.value.splice(a,0,n._returnEmptyArray()[0]),t[0]++;n._fillValueArray(t,!0)}n.$.fireEvent("change",{value:n.value,oldValue:JSON.parse(i)}),n._setMaxValuesOfScrollBars()}}insertRowBefore(e,t){const n=this,i=JSON.stringify(n.value),l="LabVIEW"===n.arrayIndexingMode;if(l&&!0!==t)n.insertColumnBefore(e,!0);else{if(1===n.dimensions){if(!(l&&!n._oneDimensionSpecialCase||!l&&n._oneDimensionSpecialCase))return;n.value.splice(e+n._coordinates[0],0,n._getDefaultValue()),n._scroll(),n._filledUpTo[0]++}else{const t=n._filledUpTo.slice(0);let i;if(l){const l=n.dimensions-1;i=e+n._coordinates[l];const a=function(e,t){if(l!==t)for(let n=0;n<e.length;n++)a(e[n],t+1);else e.splice(i,0,n._getDefaultValue())};a(n.value,0),t[l]++}else{i=e+n._coordinates[1];for(let e=0;e<n.value.length;e++){n.value[e].splice(i,0,void 0)}t[1]++}n._fillValueArray(t,!0)}n.$.fireEvent("change",{value:n.value,oldValue:JSON.parse(i)}),n._setMaxValuesOfScrollBars()}}reinitializeArray(){const e=this;if("none"===e.type)return;const t=e.dimensions,n=JSON.stringify(e.value);if(1===e.dimensions)e.value.fill(e._getDefaultValue());else{const n=function(i,l){for(let a=0;a<i.length;a++)l===t?i[a]=e._getDefaultValue():n(i[a],l+1)};n(e.value,1)}n!==JSON.stringify(e.value)&&(e._scroll(),e.$.fireEvent("change",{value:e.value,oldValue:JSON.parse(n)}))}removeDimension(e,t){const n=this,i=n._dimensions.length-1;if(n._dimensions.length<2)return;if(2===n._dimensions.length){const e=n.rows;n.rows=1,n._changeRowsColumns("rows",e,1,void 0,!0)}let l;n.$.indexerContainer.removeChild(n._dimensions[i].indexer),n._dimensions.pop(),"LabVIEW"===n.arrayIndexingMode?(l=n._coordinates[0],n._indexers.splice(0,1),n._coordinates.splice(0,1)):(l=n._coordinates[i],n._indexers.pop(),n._coordinates.pop()),!0!==n._suppressDimensionChange&&(n.dimensions-=1,n.$.fireEvent("dimensionChange",{type:"remove"})),!1!==t&&(n._removeDimensionFromJSArray(),"LabVIEW"===n.arrayIndexingMode?n._filledUpTo.splice(0,1):n._filledUpTo.pop()),void 0!==n._absoluteSelectionStart&&("LabVIEW"===n.arrayIndexingMode?n._absoluteSelectionStart.splice(0,1):n._absoluteSelectionStart.pop()),void 0!==n._absoluteSelectionEnd&&("LabVIEW"===n.arrayIndexingMode?n._absoluteSelectionEnd.splice(0,1):n._absoluteSelectionEnd.pop()),l>0&&n._scroll(),(n.dimensions>1&&!1===n._suppressDimensionChange&&!0===n.showIndexDisplay&&(n.dimensions+1)*(n.indexerHeight+4)-2>=n._cachedHeight||1===n.dimensions&&!0!==e)&&(n._updateWidgetHeight("dimensions"),1===n.dimensions&&n.showVerticalScrollbar&&n._showVerticalScrollbar(!1))}reset(e){const t=this;if("none"===t.type&&!0!==e)return;t.type="none";let n=t.rows;t.rows=1,t._changeRowsColumns("rows",n,1,!0),n=t.columns,t.columns=1,t._changeRowsColumns("columns",n,1);const i=t._cells[0][0];i.widget.$.unlisten("change"),i.widget.$.unlisten("click"),i.td.innerHTML="",t._table.classList.add("smart-hidden"),t._defaultValue=void 0;const l=t.value;t.value=null,t.$.fireEvent("change",{value:t.value,oldValue:l}),t.$.horizontalScrollbar.max=0,t.$.horizontalScrollbar.value=0,t.$.verticalScrollbar.max=0,t.$.verticalScrollbar.value=0}resizeElement(e,t){const n=this;if(e=parseInt(e,10),t=parseInt(t,10),e===n.elementWidth&&t===n.elementHeight)return;if(e===n.elementWidth)return void n.setRowHeight(t);if(t===n.elementHeight)return void n.setColumnWidth(e);const i=n.getElementsByClassName("smart-array-element-"+n._id);if(n.elementWidth=e,n.elementHeight=t,"none"!==n.type){if(n._updateWidgetWidth(),n._updateWidgetHeight(),"custom"!==n.type)for(let n=0;n<i.length;n++)i[n].style.width=e+"px",i[n].style.height=t+"px";else if(n.changeProperty)n.changeProperty("width",e,i),n.changeProperty("height",t,i);else try{n.warn(n.localize("callbackFunctionRequired",{callback:"changeProperty"}))}catch(e){}n.$.fireEvent("sizeChange",{width:e,height:t})}}selectAll(){if("LabVIEW"===this.arrayIndexingMode&&-1===this._filledUpTo[0]||"JavaScript"===this.arrayIndexingMode&&-1===this._filledUpTo[this._filledUpTo.length-1])return;const e=new Array(this.dimensions);e.fill(0),this._absoluteSelectionStart=e,this._absoluteSelectionEnd=this._filledUpTo.slice(0),this._refreshSelection()}selectElement(e,t){this.startSelection(e,t),this.endSelection(e,t)}setColumnWidth(e,t){const n=this;if((e=parseInt(e,10))===n.elementWidth&&!0!==t)return;const i=n.getElementsByClassName("smart-array-element-"+n._id);if(n.elementWidth=e,"none"!==n.type){if("custom"!==n.type)for(let t=0;t<i.length;t++)i[t].style.width=e+"px";else if(n.changeProperty)n.changeProperty("width",e,i);else try{n.warn(n.localize("callbackFunctionRequired",{callback:"changeProperty"}))}catch(e){}n._updateWidgetWidth(),n.$.fireEvent("sizeChange",{width:e,height:n.elementHeight})}}setDefaultValue(e){const t=this;t._areDifferent(e,t._defaultValue)&&(t._defaultValue=e,t._scroll())}setIndexerValue(e){const t=this;let n=!1;for(let i=0;i<e.length;i++){const l=e[i].index,a="LabVIEW"===t.arrayIndexingMode?t.dimensions-l-1:l,o=e[i].value,s=t._indexers[l];void 0!==s&&o!==t._coordinates[l]&&(n=!0,s.val(o),t._coordinates[l]=o,"none"===t.type||0!==a&&1!==a||t._syncScrollbar(a,o))}!0===n&&t._scroll()}setRowHeight(e,t){const n=this;if((e=parseInt(e,10))===n.elementHeight&&!0!==t)return;const i=n.getElementsByClassName("smart-array-element-"+n._id);if(n.elementHeight=e,"none"!==n.type){if("custom"!==n.type)for(let t=0;t<i.length;t++)i[t].style.height=e+"px";else if(n.changeProperty)n.changeProperty("height",e,i);else try{n.warn(n.localize("callbackFunctionRequired",{callback:"changeProperty"}))}catch(e){}n._updateWidgetHeight(),n.$.fireEvent("sizeChange",{width:n.elementWidth,height:e})}}showLastElement(){const e=this,t=[];let n,i;if("none"!==e.type)if(1!==e.dimensions){"LabVIEW"===e.arrayIndexingMode?(n=e.dimensions-1,i=e.dimensions-2):(n=0,i=1);for(let l=0;l<e.dimensions;l++){let a=e._filledUpTo[l];if(l===n){const t=parseFloat(e._indexers[l].value);t+e.columns<a+1||t>a||(a=t)}else if(l===i){const t=parseFloat(e._indexers[l].value);t+e.rows<a+1||t>a||(a=t)}t.push({index:l,value:a})}e.setIndexerValue(t)}else{const t=parseFloat(e._indexers[0].value),n=e._oneDimensionSpecialCase?e.rows:e.columns,i=e._filledUpTo[0];(t+n<i+1||t>i)&&e.setIndexerValue([{index:0,value:i}])}}startSelection(e,t){const n=this;n._absoluteSelectionStart=n._coordinates.slice(0),1===n.dimensions?n._absoluteSelectionStart[0]=t:"LabVIEW"===n.arrayIndexingMode?(n._absoluteSelectionStart[n.dimensions-1]=t,n._absoluteSelectionStart[n.dimensions-2]=e):(n._absoluteSelectionStart[0]=t,n._absoluteSelectionStart[1]=e),n._absoluteSelectionEnd=void 0}toggleElementGap(){const e=this;if("none"===e.type)return;let t;void 0===e._elementGap&&(e._elementGap=!1),e._elementGap?(t="remove",e._elementGap=!1):(t="add",e._elementGap=!0);for(let n=0;n<e.rows;n++)for(let i=0;i<e.columns;i++)e._cells[n][i].td.classList[t]("smart-array-table-data-gap");e._updateWidgetWidth(),e._updateWidgetHeight()}transposeArray(){const e=this;if(2===e.dimensions){const t=e.value[0].map((function(t,n){return e.value.map((function(e){return e[n]}))})),n=JSON.stringify(e.value);e.value=t,e._scroll(),e.$.fireEvent("change",{value:t,oldValue:JSON.parse(n)}),e._filledUpTo.reverse()}}val(e,t){const n=this;let i;if(2===arguments.length){if("none"===n.type)return;i=JSON.stringify(n.value);let l,a=n.value;for(l=0;l<n.dimensions-1;l++){let e=t[l];void 0===e&&(e=0,t[l]=0),void 0===a[e]&&(a[e]=[]),a=a[e]}let o=t[l];void 0===o&&(o=0,t[l]=0),n._areDifferent(a[o],e)&&(a[o]=e,n._fillValueArray(t.slice(0)),n.$.fireEvent("change",{value:n.value,oldValue:JSON.parse(i),dimensionIndexes:t}))}else{if(void 0===e||"object"==typeof e&&0===Object.keys(e).length)return n.value;{if("none"===n.type)return;const t=JSON.stringify(n.value);t!==JSON.stringify(e)&&(i=n.value,n.value=e,n._validateValue(),t!==JSON.stringify(n.value)&&(n._scroll(),n._getInitialFill(),n.$.fireEvent("change",{value:n.value,oldValue:i})))}}}propertyChangedHandler(e,t,n){super.propertyChangedHandler(e,t,n);const i=this;if(n!==t)switch(e){case"arrayIndexingMode":i.arrayIndexingMode=t;break;case"columns":case"rows":i._changeRowsColumns(e,t,n);break;case"customWidgetDefaultValue":"custom"===i.type&&(i._defaultValue=n,i._scroll());break;case"dimensions":i._addRemoveMultipleDimensions(t,n);break;case"animation":case"disabled":for(let t=0;t<i._indexers.length;t++)i._indexers[t][e]=n;if("none"!==i.type){const t=i.getElementsByClassName("smart-array-element-"+i._id);if("custom"!==i.type)for(let i=0;i<t.length;i++)t[i][e]=n;else if(i.changeProperty)i.changeProperty(e,n,t);else try{i.warn(i.localize("callbackFunctionRequired",{callback:"changeProperty"}))}catch(e){}i._scroll()}break;case"elementHeight":i.setRowHeight(n,!0);break;case"elementTemplate":if("none"!==i.type){const e=i.getElementsByClassName("smart-array-element-"+i._id);for(let t=0;t<e.length;t++){let n=e[t];i.elementTemplate(n,{x:n.col,y:n.row})}}break;case"elementWidth":i.setColumnWidth(n,!0);break;case"indexerHeight":for(let e=0;e<i._indexers.length;e++)i._indexers[e].style.height=n+"px";i._updateWidgetHeight();break;case"indexerWidth":i.$.indexerContainer.style.width=n+"px",i._updateWidgetWidth();break;case"showHorizontalScrollbar":if(!0===i._oneDimensionSpecialCase)return void(i.showHorizontalScrollbar=!1);i._showHorizontalScrollbar(n);break;case"showIndexDisplay":n?i.$indexerContainer.removeClass("smart-hidden"):i.$indexerContainer.addClass("smart-hidden"),i._updateWidgetWidth(),i._updateWidgetHeight("showIndexDisplay");break;case"showSelection":n?i._refreshSelection():i._clearSelection();break;case"showVerticalScrollbar":if(1===i.dimensions&&!1===i._oneDimensionSpecialCase)return void(i.showVerticalScrollbar=!1);i._showVerticalScrollbar(n);break;case"type":i._getDefaultCellValue(),"none"!==t&&"none"!==n?(i._initializeElements(!0),i._updateWidgetWidth(),i._updateWidgetHeight()):"none"===t?(i.value=i._returnEmptyArray(),!0===i._structureAdded?(i._initializeElements(!1),i._table.classList.remove("smart-hidden")):(i._addElementStructure(),i._structureAdded=!0,i._initializeElements(!1)),i.$.centralContainer.style.width="",i.$.bigContainer.style.width="",i.$.mainContainer.style.height="",i.$.bigContainer.style.height="",i._updateWidgetWidth(),i._updateWidgetHeight(),i._getInitialFill()):"none"===n&&i.reset(!0);break;case"value":JSON.stringify(t)!==JSON.stringify(n)&&(i._validateValue(),JSON.stringify(t)!==JSON.stringify(i.value)&&(i._scroll(),i._getInitialFill(),i.$.fireEvent("change",{value:i.value,oldValue:t})))}}_addDimensionToJSArray(e){const t=this;if("LabVIEW"===t.arrayIndexingMode)t.value=[t.value];else{void 0===e&&(e=t.dimensions-1);const n=function(t,i){for(let l=0;l<t.length;l++)i!==e?n(t[l],i+1):t[l]=[t[l]]};n(t.value,1)}}_addElementHandlers(e){const t=this;e.$.listen("change",(function(n){if(!0!==e.supressChange||e instanceof Smart.NumericTextBox){e.$.removeClass("smart-array-element-empty");const n=e.col,i=e.row;t._updateValue(i,n,t._getElementValue(e,{x:n,y:i},!0))}else e.supressChange=!1;n.stopPropagation()})),e.$.listen("click",(function(){t.$.fireEvent("elementClick",{element:e})}))}_addElementStructure(){const e=this;e._cells=[],e._table=document.createElement("table"),e._table.className="smart-array-element-gap";const t=document.createElement("tbody"),n=document.createDocumentFragment();for(let t=0;t<e.rows;t++){const i=document.createElement("tr"),l=document.createDocumentFragment();i.classList.add("smart-array-table-row"),e._cells.push([]);for(let n=0;n<e.columns;n++){const n=document.createElement("td");n.classList.add("smart-array-table-data"),e._elementGap&&n.classList.add("smart-array-table-data-gap"),e._cells[t].push({td:n}),l.appendChild(n)}i.appendChild(l),n.appendChild(i)}t.appendChild(n),e._table.appendChild(t),e.$.mainContainer.appendChild(e._table),e._tableBody=t}_addInitialDimensions(){const e=this,t=e.dimensions;e._dimensions=[],e._indexers=[],e._suppressDimensionChange=!0,e._initialDimensions=!0;for(let n=0;n<t;n++)e.addDimension();e._suppressDimensionChange=!1,e._initialDimensions=!1}_addRemoveColumn(e){const t=this;if("add"===e){const e=t._tableBody.children;for(let n=0;n<t._cells.length;n++){const i=t._cells[n],l=document.createElement("td");l.classList.add("smart-array-table-data"),t._elementGap&&l.classList.add("smart-array-table-data-gap"),i.push({td:l}),e[n].appendChild(l),t._initializeWidget(n,i.length-1)}t.columns++,!0!==t._suppressScroll&&t._scroll()}else if("remove"===e&&t.columns>1){for(let e=0;e<t._cells.length;e++){const n=t._cells[e],i=n[n.length-1];i.widget.$.unlisten("change"),i.widget.$.unlisten("click"),i.td.parentElement.removeChild(i.td),n.pop()}t.columns--}}_addRemoveMultipleDimensions(e,t,n){const i=this;if((t<1||t>32)&&(i.dimensions=1,i.dimensions===e))return;let l=i.dimensions-e;if(i._suppressDimensionChange=!0,l>0){do{i.addDimension(n),l-=1}while(l>0);i.$.fireEvent("dimensionChange",{type:"add"})}else{if(!(l<0))return;if(1===t){const n=i.rows;i.rows=1,i.dimensions=e,i._changeRowsColumns("rows",n,1,void 0,!0),i.dimensions=t}do{i.removeDimension(!0,n),l+=1}while(l<0);i.$.fireEvent("dimensionChange",{type:"remove"}),1===t&&i.showVerticalScrollbar&&i._showVerticalScrollbar(!1)}i._suppressDimensionChange=!1,(!0!==i.showIndexDisplay||1!==t&&(t-e>0&&t*(i.indexerHeight+4)-2<i._cachedHeight||t-e<0&&e*(i.indexerHeight+4)-2<i._cachedHeight))&&1!==t||i._updateWidgetHeight("dimensions")}_addRemoveRow(e){const t=this;if("add"===e&&(t.dimensions>1||1===t.dimensions&&1===t.columns)){t._cells.push([]);const e=document.createElement("tr"),n=document.createDocumentFragment(),i=t._cells.length-1,l=[];e.classList.add("smart-array-table-row");for(let e=0;e<t.columns;e++){const e=document.createElement("td");e.classList.add("smart-array-table-data"),t._elementGap&&e.classList.add("smart-array-table-data-gap"),t._cells[i].push({td:e}),l.push(e),n.appendChild(e)}e.appendChild(n),t._tableBody.appendChild(e);for(let e=0;e<l.length;e++)t._initializeWidget(i,e);t.rows++,!0!==t._suppressScroll&&t._scroll()}else if("remove"===e&&t.rows>1){const e=t._tableBody.children[t._tableBody.children.length-1],n=t._cells[t._cells.length-1];for(let e=0;e<n.length;e++)n[e].widget.$.unlisten("change"),n[e].widget.$.unlisten("click");t._tableBody.removeChild(e),t._cells.pop(),t.rows--}}_addSelectionClass(e,t,n,i){const l=this;l.showSelection&&void 0!==l._absoluteSelectionStart&&void 0!==l._absoluteSelectionEnd&&(!1===i&&l._inSelection(e,t)?n.classList.add("smart-array-element-selected"):n.classList.remove("smart-array-element-selected"))}_areDifferent(e,t){if(e instanceof Date){if(t instanceof Date)return e.getTime()!==t.getTime();if("string"==typeof t)try{return e.getTime()!==new Date(t).getTime()}catch(e){}return!0}if(t instanceof Date){if("string"==typeof e)try{return t.getTime()!==new Date(e).getTime()}catch(e){}return!0}return"object"!=typeof e||typeof e!=typeof t?e!==t:JSON.stringify(e)!==JSON.stringify(t)}_changeRowsColumns(e,t,n,i,l){const a=this,o="_addRemove"+e.charAt(0).toUpperCase()+e.slice(1,e.length-1);if(n<1&&(a[e]=1,a[e]===t))return;if(1===a.dimensions)if(!0===a._oneDimensionSpecialCase){if("columns"===e&&a[e]>1){if(a.rows>1)return void(a.columns=1);a._oneDimensionSpecialCase=!1,a.showVerticalScrollbar&&(a._showVerticalScrollbar(!1),a._showHorizontalScrollbar(!0))}}else if("rows"===e){if(a.columns>1)return void(a.rows=1);a.rows>1&&(a._oneDimensionSpecialCase=!0,!0===a.showHorizontalScrollbar&&(a._showHorizontalScrollbar(!1),a._showVerticalScrollbar(!0)))}let s=a[e]-t;if(a[e]=t,s>0){a._suppressScroll=!0;do{a[o]("add"),s-=1}while(s>0);a._suppressScroll=!1,a._scroll()}else if(s<0)do{a[o]("remove"),s+=1}while(s<0);a.$.fireEvent("arraySizeChange",{type:e,number:a[e],oldNumber:t}),"columns"===e?(a._updateWidgetWidth(),a._setMaxValuesOfScrollBars("horizontal")):"rows"===e&&!0!==l&&(a._updateWidgetHeight(!0===i?"dimensions":void 0),a._setMaxValuesOfScrollBars("vertical"))}_clearSelection(){const e=this;for(let t=0;t<e.rows;t++)for(let n=0;n<e.columns;n++)e._cells[t][n].td.classList.remove("smart-array-element-selected")}_cloneValue(e){return"object"!=typeof e?e:e instanceof Date?new Date(e.getTime()):Array.isArray(e)||e instanceof Object?JSON.parse(JSON.stringify(e)):void 0}_fillValueArray(e,t){const n=this,i=n.dimensions;if(void 0!==n._filledUpTo&&!0!==t){let t=!0;for(let i=0;i<e.length;i++)t=t&&n._filledUpTo[i]>=e[i],e[i]=Math.max(e[i],n._filledUpTo[i]);if(!0===t)return void n._scroll()}n._filledUpTo=e.slice(0),function t(l,a){for(let o=0;o<=e[a];o++)a!==i-1?(void 0===l[o]&&(l[o]=[]),t(l[o],a+1)):void 0===l[o]&&(l[o]=n._getDefaultValue())}(n.value,0),n._scroll(),n._setMaxValuesOfScrollBars()}_getDefaultCellValue(){const e=this;switch(e.type){case"custom":e._defaultValue=null!==e.customWidgetDefaultValue?e.customWidgetDefaultValue:void 0;break;case"numeric":e._defaultValue=0;break;case"boolean":e._defaultValue=!1;break;case"string":e._defaultValue=""}}_getDefaultValue(){return this._cloneValue(this._defaultValue)}_getElementValue(e,t,n){const i=this;let l;return l=i.getElementValue?i.getElementValue(e,t):"boolean"===i.type?e.checked:e.value,!0!==n?l:i._cloneValue(l)}_getInitialFill(){const e=this;if(e._filledUpTo=[],"none"!==e.type){let t=e.value;for(let n=0;n<e.dimensions;n++){const i=t.length-1;e._filledUpTo[n]=i,t=t[i]}e._setMaxValuesOfScrollBars()}}_getMaxValuesOfScrollBars(e){const t=this,n=t._filledUpTo.length;let i,l,a,o=0;return"horizontal"===e?(a=t.$.horizontalScrollbar.value,i="LabVIEW"===t.arrayIndexingMode?t._filledUpTo[n-1]:t._filledUpTo[0],l=t.columns):(a=t.$.verticalScrollbar.value,i=t._oneDimensionSpecialCase?"LabVIEW"===t.arrayIndexingMode?t._filledUpTo[n-1]:t._filledUpTo[0]:"LabVIEW"===t.arrayIndexingMode?t._filledUpTo[n-2]:t._filledUpTo[1],l=t.rows),void 0===i?0:(o=i-l+2,Math.max(o,a))}_getValueInCell(e,t){const n=this,i=n.value,l=n._coordinates,a=l.length;let o;if(1===a)o=!1===n._oneDimensionSpecialCase?i[t+l[0]]:i[e+l[0]];else{const s=l.slice(0);"LabVIEW"===n.arrayIndexingMode?(s[a-1]+=t,s[a-2]+=e):(s[0]+=t,s[1]+=e);const r=i[s[0]];if(void 0!==r){const e=r[s[1]];if(void 0!==e&&(o=e,a>2))for(let e=2;e<a&&void 0!==o;e++)o=o[s[e]]}}return o}_indexerChangeHandler(e){const t=this,n=t.context;t.context=t;const i=e.target.dimension,l="LabVIEW"===t.arrayIndexingMode?t.dimensions-i-1:i,a=parseFloat(e.detail.value);t._coordinates[l]=a,t._scroll(),"none"===t.type||0!==i&&1!==i||t._syncScrollbar(i,a),e.stopPropagation(),t.context=n}_initializeElements(e){const t=this,n=t._cells;function i(e){t.elementTemplate&&t.elementTemplate(e,{x:e.col,y:e.row})}if(t._initializeElement=function(){},"custom"!==t.type)switch(t.type){case"numeric":t._initializeElement=function(e,n){e.style.width=t.elementWidth+"px",e.style.height=t.elementHeight+"px",e.disabled=t.disabled,e.animation=t.animation,e.inputFormat="floatingPoint",e.spinButtons=!0,e.value=n,i(e)};break;case"boolean":t._initializeElement=function(e,n){e.style.width=t.elementWidth+"px",e.style.height=t.elementHeight+"px",e.disabled=t.disabled,e.animation=t.animation,e.checked=n,i(e)};break;case"string":t._initializeElement=function(e,n){e.style.width=t.elementWidth+"px",e.style.height=t.elementHeight+"px",e.disabled=t.disabled,e.animation=t.animation,e.value=n,i(e)}}else t._initializeElement=function(e,n){if(t.elementTemplate){const i={x:e.col,y:e.row};t.elementTemplate(e,i),void 0!==n&&t._setElementValue(n,e,i)}else t.error(t.localize("callbackFunctionRequired",{callback:"elementTemplate"}))};for(let i=0;i<n.length;i++)for(let l=0;l<n[i].length;l++){if(!0===e){const e=n[i][l];e.widget.$.unlisten("change"),e.widget.$.unlisten("click"),e.td.innerHTML=""}t._initializeWidget(i,l)}}_initializeWidget(e,t){const n=this._cells[e][t],i=this._getValueInCell(e,t);let l;switch(this.type){case"boolean":l=document.createElement("smart-switch-button");break;case"numeric":l=document.createElement("smart-numeric-text-box"),l.validation="interaction";break;case"string":l=document.createElement("smart-text-box");break;case"custom":l=document.createElement("div"),l.$=Smart.Utilities.Extend(l)}l.row=e,l.col=t,n.widget=l,this._initializeElement(l,void 0===i?this._getDefaultValue():i,n),n.td.appendChild(l),l.classList.add("smart-array-element"),l.classList.add("smart-array-element-"+this._id),void 0===i&&l.classList.add("smart-array-element-empty"),this._addElementHandlers(l)}_inSelection(e,t){const n=this,i=n._coordinates;let l,a,o,s,r=!0;if("LabVIEW"===n.arrayIndexingMode?(l=n.dimensions-1,a=n.dimensions-2):(l=0,a=1),n._oneDimensionSpecialCase?o=t+i[l]:(o=e+i[l],s=t+i[a]),1===n.dimensions)return o>=n._absoluteSelectionStart[l]&&o<=n._absoluteSelectionEnd[l];if(r=o>=n._absoluteSelectionStart[l]&&o<=n._absoluteSelectionEnd[l]&&s>=n._absoluteSelectionStart[a]&&s<=n._absoluteSelectionEnd[a],"LabVIEW"===n.arrayIndexingMode)for(let e=0;e<a;e++)r=r&&i[e]>=n._absoluteSelectionStart[e]&&i[e]<=n._absoluteSelectionEnd[e];else for(let e=2;e<n.dimensions;e++)r=r&&i[e]>=n._absoluteSelectionStart[e]&&i[e]<=n._absoluteSelectionEnd[e];return r}_moveScrollbar(e,t,n,i){if(isNaN(i))return;const l=this,a=l._getMaxValuesOfScrollBars(t),o=e.max;let s;s="LabVIEW"===l.arrayIndexingMode?l.dimensions-n-1:n,l._indexers[s].val(i),l._coordinates[s]=i,i<=a?e.max=a:i<=o&&(e.max=i),l._scroll(),l.$.fireEvent("scroll",{direction:t})}_refreshSelection(){const e=this;if(e.showSelection)for(let t=0;t<e.rows;t++)for(let n=0;n<e.columns;n++){const i=void 0===e._getValueInCell(t,n);e._addSelectionClass(n,t,e._cells[t][n].td,i)}}_removeDimensionFromJSArray(){const e=this;if("LabVIEW"===e.arrayIndexingMode)e.value=e.value[0];else{const t=e.dimensions+1,n=function(i,l,a,o){for(let s=0;s<i.length;s++)l!==t&&i[s].length>0?n(i[s],l+1,i,s):void 0!==a?a[o]=i[0]:e.value=e.value[0]};n(e.value,1)}}_resizeHandler(){const e=this;if(e.offsetWidth!==e._cachedWidth)if("none"!==e.type){const t=e.offsetWidth-e._cachedWidth,n=e.elementWidth;if(Math.abs(t)<n)return void(e.style.width=e._cachedWidth+"px");const i=Math.round(t/n),l=e.columns,a=l+i;e.columns=a,e._changeRowsColumns("columns",l,a)}else e._updateWidgetWidth();if(e._cachedWidth=e.offsetWidth,e.offsetHeight!==e._cachedHeight){if("none"!==e.type)return void(e.style.height=e._cachedHeight+"px");e._updateWidgetHeight()}e._cachedHeight=e.offsetHeight}_returnEmptyArray(){const e=this,t=[];let n=t;if(e.dimensions>1)for(let t=1;t<e.dimensions;t++)n[0]=[],n=n[0];return t}_scroll(){const e=this;if("none"!==e.type)for(let t=0;t<e._cells.length;t++)for(let n=0;n<e._cells[t].length;n++){const i=e._getValueInCell(t,n),l=e._cells[t][n].widget,a={x:n,y:t},o=e._getElementValue(l,a);let s;void 0!==i?(l.classList.remove("smart-array-element-empty"),e._areDifferent(o,i)?(l.supressChange=!0,e._setElementValue(i,l,a)):l.supressChange=!1,s=!1):(l.classList.add("smart-array-element-empty"),e._areDifferent(o,e._defaultValue)?(l.supressChange=!0,e._setElementValue(e._getDefaultValue(),l,a)):l.supressChange=!1,s=!0),e._addSelectionClass(n,t,e._cells[t][n].td,s)}}_scrollbarChangeHandler(e){const t=this;let n,i;e.stopPropagation(),"none"!==t.type&&(e.target===t.$.horizontalScrollbar?(n="horizontal",i=0):(n="vertical",i=t._oneDimensionSpecialCase?0:1),!0!==t._suppressScrollbarEvent?t._moveScrollbar(e.target,n,i,Math.round(e.detail.value)):t._suppressScrollbarEvent=!1,t._clickTriggered||(t._changeTriggered=!0,setTimeout((function(){t._changeTriggered=!1}),50)))}_scrollbarClickHandler(e){const t=e.target.closest(".smart-scroll-button");if(null===t)return;const n=this,i=t.parentElement.parentElement;if(t===i.$.farButton){if(n._changeTriggered)return;n._clickTriggered=!0,setTimeout((function(){n._clickTriggered=!1}),50);const e=i.max;let t=i.value;!0===isNaN(t)&&(t=0),e===t&&(i.max=e+1,i.value=e+1)}}_setElementValue(e,t,n){const i=this;e=i._cloneValue(e),i.setElementValue?(i.setElementValue(e,t,n),!0===t.supressChange&&(t.supressChange=!1)):"boolean"===i.type?t.checked=e:t.value=e}_setMaxValuesOfScrollBars(e){const t=this;!t.showHorizontalScrollbar||void 0!==e&&"horizontal"!==e||(t.$.horizontalScrollbar.max=t._getMaxValuesOfScrollBars("horizontal")),!t.showVerticalScrollbar||void 0!==e&&"vertical"!==e||(t.$.verticalScrollbar.max=t._getMaxValuesOfScrollBars("vertical"))}_showHorizontalScrollbar(e){const t=this;if(t.showHorizontalScrollbar=e,t._updateWidgetHeight("showHorizontalScrollbar"),!0===e){if(t.$horizontalScrollbarContainer.removeClass("smart-hidden"),"none"!==t.type){let e;e="LabVIEW"===t.arrayIndexingMode?t.dimensions-1:0,t._syncScrollbar(0,t._coordinates[e])}}else t.$horizontalScrollbarContainer.addClass("smart-hidden")}_showVerticalScrollbar(e){const t=this;if(t.showVerticalScrollbar=e,t._updateWidgetWidth(!0),!0===e){if(t.$verticalScrollbarContainer.removeClass("smart-hidden"),"none"!==t.type){let e;e=t._oneDimensionSpecialCase?0:"LabVIEW"===t.arrayIndexingMode?t.dimensions-2:1,t._syncScrollbar(1,t._coordinates[e])}}else t.$verticalScrollbarContainer.addClass("smart-hidden")}_syncScrollbar(e,t){const n=this;let i,l;if(0===e&&!1===n._oneDimensionSpecialCase){if(!n.showHorizontalScrollbar)return;i=n._getMaxValuesOfScrollBars("horizontal"),l=n.$.horizontalScrollbar}else{if(!n.showVerticalScrollbar)return;i=n._getMaxValuesOfScrollBars("vertical"),l=n.$.verticalScrollbar}t>i&&(i=t);const a=l.max;a!==i&&(a>i&&(n._suppressScrollbarEvent=!0),l.max=i),l.value!==t&&(n._suppressScrollbarEvent=!0,l.value=t)}_updateValue(e,t,n){const i=this,l=i._getValueInCell(e,t);if(!i._areDifferent(n,l))return;const a=i._coordinates,o=a.slice(0),s=[];"LabVIEW"===i.arrayIndexingMode?(o[o.length-1]+=t,o[o.length-2]+=e):(o[0]+=t,o[1]+=e);for(let t=0;t<i.dimensions;t++)0===t?!1===i._oneDimensionSpecialCase?s.push(o[0]):s.push(e+a[0]):1===t?s.push(o[1]):s.push(o[t]);let r=i.value;for(let e=0;e<s.length;e++)void 0!==r[s[e]]&&r[s[e]]!==l||(e!==s.length-1?r[s[e]]=[]:r[s[e]]=n),r=r[s[e]];i._fillValueArray(s.slice(0)),i.$.fireEvent("change",{value:n,oldValue:l,dimensionIndexes:s})}_updateWidgetHeight(e){const t=this,n=t.showHorizontalScrollbar?20:0;let i,l;if(t.showIndexDisplay){const e=parseInt(window.getComputedStyle(t._indexers[0]).marginBottom,10);l=t.dimensions*(t.indexerHeight+e)-e}else l=0;if("none"!==t.type)i=t.$.mainContainer.offsetHeight+n;else{if("showHorizontalScrollbar"===e){const e=t.$.bigContainer.offsetHeight;i=!0===t.showHorizontalScrollbar?e+20:e-20}else i="showIndexDisplay"===e&&!1===t.showIndexDisplay||"dimensions"===e?t.$.bigContainer.offsetHeight:t.offsetHeight;const l=18+n;i<l&&(i=l),t.$.mainContainer.style.height=i-n+"px"}t.$.verticalScrollbarContainer.style.height=i-n+"px",t.$.bigContainer.style.height=i+"px";const a=window.getComputedStyle(t);t._cachedHeight=Math.max(l,i)+parseInt(a.borderTopWidth,10)+parseInt(a.borderBottomWidth,10),"none"!==t.type&&(t.style.minHeight=t._cachedHeight+"px",t.style.maxHeight=t._cachedHeight+"px"),t.style.height=t._cachedHeight+"px"}_updateWidgetWidth(e){const t=this,n=t.showVerticalScrollbar?20:0,i=t.showIndexDisplay?t.indexerWidth:0,l=parseInt(window.getComputedStyle(t.$.bigContainer).marginLeft,10);let a,o,s;if("none"!==t.type)a=t.$.centralContainer.offsetWidth,o=a+n,s=o+i+l;else{s=t.offsetWidth,!0===e&&(!0===t.showVerticalScrollbar?s+=20:s-=20);const r=i+18+n;s<r&&(s=r),o=s-i-l,a=o-n,t.$.centralContainer.style.width=a+"px"}t.$.bigContainer.style.width=o+"px";const r=window.getComputedStyle(t);s+=parseInt(r.borderLeftWidth,10)+parseInt(r.borderRightWidth,10),t.style.width=s+"px",t._cachedWidth=s}_validateProperties(){const e=this;e._oneDimensionSpecialCase=!1,"none"===e.type?(e.rows=1,e.columns=1):(e.rows<1&&(e.rows=1),e.columns<1&&(e.columns=1)),(e.dimensions<1||e.dimensions>32)&&(e.dimensions=1),1===e.dimensions&&(e.columns>1?(e.rows=1,!0===e.showVerticalScrollbar&&(e.showVerticalScrollbar=!1)):1!==e.rows?(e._oneDimensionSpecialCase=!0,!0===e.showHorizontalScrollbar&&(e.showHorizontalScrollbar=!1)):1===e.columns&&1===e.rows&&!0===e.showVerticalScrollbar&&(e.showVerticalScrollbar=!1)),e._validateValue(),e.showIndexDisplay&&e.$indexerContainer.removeClass("smart-hidden"),e.$.indexerContainer.style.width=e.indexerWidth+"px",e.showHorizontalScrollbar&&e.$horizontalScrollbarContainer.removeClass("smart-hidden"),e.showVerticalScrollbar&&e.$verticalScrollbarContainer.removeClass("smart-hidden")}_validateValue(){const e=this;"none"===e.type?e.value=null:null===e.value||void 0===e.value?e.value=e._returnEmptyArray():e._validateValueArrayDimensions()}_validateValueArrayDimensions(){const e=this;let t=0,n=e.value,i=!1;for(;n.constructor===Array;)if(t++,n=n[0],void 0===n){i=!0;break}if(e.dimensions>t){if(i)return void(e.value=e._returnEmptyArray());for(;e.dimensions>t;)e._addDimensionToJSArray(t),t++}}})}});