
/* Smart HTML Elements v7.3.0 (2020-Apr) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=3)}({3:function(e,t){Smart("smart-breadcrumb",class extends Smart.BaseElement{static get properties(){return{addNewItem:{value:!1,type:"boolean"},allowDrag:{value:!1,type:"boolean"},allowDrop:{value:!1,type:"boolean"},closeButtons:{value:!1,type:"boolean"},dataSource:{value:[],type:"array",reflectToAttribute:!1},itemTemplate:{value:null,type:"any"},minimizeWidth:{value:150,type:"number?"}}}static get listeners(){return{move:"_moveHandler",resize:"_resizeHandler","container.click":"_containerClickHandler","container.down":"_containerDownHandler","container.transitionend":"_containerTransitionendHandler","hamburgerIcon.click":"_hamburgerIconClickHandler","document.move":"_documentMoveHandler","document.up":"_documentUpHandler"}}static get styleUrls(){return["smart.breadcrumb.css"]}template(){return'<div id="container" role="presentation">\n                    <div id="minimizedHeader" class="smart-header smart-minimized-header smart-hidden" role="presentation">\n                        <div id="hamburgerIcon" class="smart-hamburger-icon" role="button" aria-label="Toggle" aria-haspopup="dialog" aria-expanded="false">\n                            <div id="hamburgerIconLineTop" class="smart-hamburger-icon-line smart-hamburger-icon-line-top" role="presentation"></div>\n                            <div id="hamburgerIconLineCenter" class="smart-hamburger-icon-line smart-hamburger-icon-line-center" role="presentation"></div>\n                            <div id="hamburgerIconLineBottom" class="smart-hamburger-icon-line smart-hamburger-icon-line-bottom" role="presentation"></div>\n                        </div>\n                    </div>\n                    <template>\n                        <div class="smart-breadcrumb-items" *items={{dataSource}} role="list">\n                            <div class="smart-breadcrumb-item" role="listitem" aria-label={{item.label}}>\n                                <div class="smart-breadcrumb-item-label" inner-H-T-M-L={{item.label}} role="presentation"></div>\n                                <div class="smart-close-button" role="button" aria-label="Close"></div>\n                            </div>\n                        </div>\n                    </template>\n                </div>'}propertyChangedHandler(e,t,i){super.propertyChangedHandler(e,t,i);const n=this;switch(e){case"addNewItem":i?n._appendNewItemButton():(n.$.templateContainer.firstElementChild.removeChild(n._addNewItemButton),delete n._addNewItemButton),n._setIndentation();break;case"animation":case"disabled":case"unfocusable":n.addNewItem&&(n._addNewItemButton[e]=i),"disabled"===e&&n._minimizedDropDownOpened&&n._hamburgerIconClickHandler();break;case"itemTemplate":for(let e=0;e<n._items.length;e++)n._items[e].firstElementChild.innerHTML=n.dataSource[e].label;i&&n._applyTemplate();break;case"minimizeWidth":null!==i&&n.offsetWidth<=i?n.minimize():n.maximize();break;case"closeButtons":n._minimized||n._setIndentation()}}ready(){super.ready();const e=this;e.setAttribute("role","navigation"),e.$.container.children[1].setAttribute("id",e.id+"TemplateContainer"),e.$.container.children[1].setAttribute("role","presentation"),e.$.hamburgerIcon.setAttribute("aria-controls",e.id+"TemplateContainer"),e._edgeMacFF=Smart.Utilities.Core.Browser.Edge||Smart.Utilities.Core.Browser.Firefox&&-1!==navigator.platform.toLowerCase().indexOf("mac"),e.templateContainer=e.$.container.children[1],null!==e.minimizeWidth&&e.offsetWidth<=e.minimizeWidth&&e.minimize()}templateAttached(){this._handleDataSourceRefresh()}addItem(e){const t=this.dataSource.slice(0);!e||"object"!=typeof e||isNaN(e.index)||e.index<0||(t.splice(e.index,0,{label:e.label,value:e.value}),this.dataSource=t)}maximize(){const e=this;e._minimized&&(e.$minimizedHeader.addClass("smart-hidden"),e.templateContainer.classList.remove("smart-visibility-hidden"),e._edgeMacFF&&e.templateContainer.classList.remove("not-in-view"),e.$hamburgerIcon.removeClass("smart-close-button"),e.removeAttribute("minimized"),e.$.container.children[1].setAttribute("role","presentation"),e._minimizedDropDownOpened=!1,e._minimized=!1,e._setIndentation())}minimize(){const e=this;if(e._minimized)return;const t=e.animation,i=e.hasAnimation;i&&(e.animation="none"),e.$minimizedHeader.removeClass("smart-hidden"),e.templateContainer.classList.add("smart-visibility-hidden"),e._edgeMacFF&&e.templateContainer.classList.add("not-in-view"),i&&setTimeout((function(){e.animation=t}),0),e.setAttribute("minimized",""),e.$.container.children[1].setAttribute("role","dialog"),e._minimized=!0,e._setIndentation()}removeItem(e){const t=this._items.indexOf(e),i=this.dataSource.slice(0);-1!==t&&(i.splice(t,1),this.dataSource=i)}_moveHandler(e){"touchmove"===e.originalEvent.type&&e.originalEvent.preventDefault()}_resizeHandler(){const e=this;null!==e.minimizeWidth&&e.offsetWidth<=e.minimizeWidth?e.minimize():e._minimized?e.maximize():e._setIndentation()}_containerClickHandler(e){const t=this;if(t.disabled||!t.templateContainer.contains(e.target))return;const i=e.target.closest(".smart-close-button");if(!i)return;const n=i.closest(".smart-breadcrumb-item");if(!t.$.fireEvent("closing",{item:n}).defaultPrevented){const e=t.dataSource.slice(0);e.splice(t._items.indexOf(n),1),t.dataSource=e,t.$.fireEvent("close",{item:n})}}_containerDownHandler(e){const t=e.originalEvent.target;if(!this.allowDrag||this.disabled||t.classList.contains("smart-close-button"))return;const i=t.closest(".smart-breadcrumb-item");i&&(this._dragDetails={item:i,x:e.pageX,y:e.pageY})}_containerTransitionendHandler(e){const t=this;t._edgeMacFF&&e.target===t.templateContainer&&!t._minimizedDropDownOpened&&t.hasAnimation&&t.templateContainer.classList.add("not-in-view")}_hamburgerIconClickHandler(){const e=this;e._minimizedDropDownOpened?(e.$hamburgerIcon.removeClass("smart-close-button"),e.templateContainer.classList.add("smart-visibility-hidden"),e.$.hamburgerIcon.setAttribute("aria-expanded",!1),e._minimizedDropDownOpened=!1):(e.$hamburgerIcon.addClass("smart-close-button"),e._edgeMacFF&&e.templateContainer.classList.remove("not-in-view"),e.templateContainer.classList.remove("smart-visibility-hidden"),e.$.hamburgerIcon.setAttribute("aria-expanded",!0),e._minimizedDropDownOpened=!0)}_documentMoveHandler(e){const t=this,i=t._dragDetails;if(!i)return;let n=i.feedback;if(e.originalEvent.preventDefault(),!n){if(!(Math.abs(i.x-e.pageX)>5||Math.abs(i.y-e.pageY)>5))return;n=document.createElement("div"),n.className="smart-breadcrumb-feedback",n.style.height=t._dragDetails.item.offsetHeight+"px",n.innerHTML=t._dragDetails.item.firstElementChild.innerHTML,document.body.appendChild(n),i.feedback=n,t._getItemCoordinates()}t.rightToLeft?n.setAttribute("right-to-left",!0):n.removeAttribute("right-to-left");const a=Smart.Utilities.Core.isMobile?document.elementFromPoint(e.clientX,e.clientY):t.shadowRoot||t.isInShadowDOM?e.originalEvent.composedPath()[0]:e.originalEvent.target;if(n.style.left=e.pageX+10+"px",n.style.top=e.pageY+10+"px",!t.allowDrop)return n.classList.add("error"),void t.$.fireEvent("dragging",{item:i.item,target:a,originalEvent:e.originalEvent});if(delete i.target,t._clearItemDragClass(),!(t.shadowRoot||t).contains(a))return n.classList.add("error"),void t.$.fireEvent("dragging",{item:i.item,target:a,originalEvent:e.originalEvent});let r=a.closest(".smart-breadcrumb-item");if(r)t._applyItemDragClass(r,r.getBoundingClientRect(),e);else{if(t._minimized)return n.classList.add("error"),void t.$.fireEvent("dragging",{item:i.item,target:a,originalEvent:e.originalEvent});if((t.shadowRoot||t).contains(a)){const n=t._itemCoordinates.rows,r=t._itemCoordinates.coordinates,o=parseFloat(window.getComputedStyle(t).getPropertyValue("--smart-breadcrumb-padding"))/2;let s;for(let t=0;t<n.length;t++)if(e.clientY<n[t].bottom+o){s=t;break}if(void 0===s)return i.feedback.classList.add("error"),void t.$.fireEvent("dragging",{item:i.item,target:a,originalEvent:e.originalEvent});let l,d=t._items[r[s][r[s].length-1].index];for(let i=0;i<r[s].length;i++)if(l=r[s][i].rect,e.clientX<l.right+o){d=t._items[r[s][i].index];break}t._applyItemDragClass(d,l,e)}else;}}_getItemCoordinates(){const e=this._items,t=[[]],i=[];let n=e[0].offsetTop,a=0;t[0].push({index:0,rect:e[0].getBoundingClientRect()}),i[0]={top:t[0][0].rect.top,bottom:t[0][0].rect.bottom};for(let r=1;r<e.length;r++){const o=e[r].getBoundingClientRect(),s=e[r].offsetTop;s>n&&(n=s,a++,t[a]=[],i[a]={top:o.top,bottom:o.bottom}),t[a].push({index:r,rect:o})}this._itemCoordinates={coordinates:t,rows:i}}_applyItemDragClass(e,t,i){const n=this._dragDetails;let a,r,o;n.target=e,n.feedback.classList.remove("error"),n.before=!1,this._minimized?(a=i.clientY,r="top",o="height"):(a=i.clientX,r="left",o="width");const s=e[(this.rightToLeft?"previous":"next")+"ElementSibling"];a<=t[r]+t[o]/2?(e.classList.add("target"),n.before=!0):s?s.classList.add("target"):e.classList.add("afterTarget"),this.rightToLeft&&(n.before=!n.before),this.$.fireEvent("dragging",{item:n.item,target:e,originalEvent:i.originalEvent})}_clearItemDragClass(){const e=(this.shadowRoot||this).querySelector(".target, .afterTarget");e&&(e.classList.remove("target"),e.classList.remove("afterTarget"))}_documentUpHandler(e){const t=this,i=t._dragDetails;if(i&&(delete t._dragDetails,i.feedback)){if(document.body.removeChild(i.feedback),t._clearItemDragClass(),!t.allowDrop)return;if(!i.target||i.item===i.target)return void t.$.fireEvent("dragEnd",{item:i.item,target:i.target||!Smart.Utilities.Core.isMobile?t.shadowRoot||t.isInShadowDOM?e.originalEvent.composedPath()[0]:e.originalEvent.target:document.elementFromPoint(e.clientX,e.clientY),originalEvent:e.originalEvent});const n=t._items.slice(0),a=n.indexOf(i.item),r=t.dataSource.slice(0),o=r.splice(a,1);n.splice(a,1);const s=n.indexOf(i.target)+(i.before?0:1);a!==s&&(r.splice(s,0,o[0]),t.dataSource=r),t.$.fireEvent("dragEnd",{item:i.item,target:i.target,droppedBeforeTarget:i.before,originalEvent:e.originalEvent})}}_handleDataSourceRefresh(){const e=this;e._items=Array.from(e.$.templateContainer.firstElementChild.children),e.addNewItem&&e._appendNewItemButton(),e._applyTemplate(),e._setIndentation()}_appendNewItemButton(){const e=this,t=document.createElement("smart-button");t.innerHTML="+",t.animation=e.animation,t.disabled=e.disabled,t.unfocusable=e.unfocusable,t.setAttribute("aria-label","Add"),t.addEventListener("click",(function(){e.$.fireEvent("addNewItem")})),e.$.templateContainer.firstElementChild.appendChild(t),e._addNewItemButton=t}_setIndentation(){const e=this,t=e._items.slice(0);if(e._addNewItemButton&&t.push(e._addNewItemButton),0===t.length)return;let i=t[0].offsetTop,n=0;if(t.forEach((function(e){e.style.marginLeft=e.style.marginRight=null})),!e._minimized)for(let a=1;a<t.length;a++){const r=t[a],o=t[a].offsetTop;o>i&&(i=o,n++,r.style["margin"+(e.rightToLeft?"Right":"Left")]=10*n+"px")}}_applyTemplate(){const e=this,t=e.itemTemplate;if(null===t)return;let i;if(i=t instanceof HTMLTemplateElement?t:document.getElementById(t),null!==i&&i instanceof HTMLTemplateElement){const t=document.importNode(i.content,!0),n=document.createElement("div");n.appendChild(t);const a=n.innerHTML;for(let t=0;t<e._items.length;t++){const i=e.dataSource,n=i[t].label,r=i[t].value;e._items[t].firstElementChild.innerHTML=a.replace(/{{label}}/g,n).replace(/{{value}}/g,r)}}}})}});