var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=class e{constructor(t,n,r,i,a=`div`){this.parent=t,this.object=n,this.property=r,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(a),this.domElement.classList.add(`lil-controller`),this.domElement.classList.add(i),this.$name=document.createElement(`div`),this.$name.classList.add(`lil-name`),e.nextNameID=e.nextNameID||0,this.$name.id=`lil-gui-name-${++e.nextNameID}`,this.$widget=document.createElement(`div`),this.$widget.classList.add(`lil-widget`),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener(`keydown`,e=>e.stopPropagation()),this.domElement.addEventListener(`keyup`,e=>e.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(r)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle(`lil-disabled`,e),this.$disable.toggleAttribute(`disabled`,e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},n=class extends t{constructor(e,t,n){super(e,t,n,`lil-boolean`,`label`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`checkbox`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener(`change`,()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function r(e){let t,n;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),n?`#`+n:!1}var i={isPrimitive:!0,match:e=>typeof e==`string`,fromHexString:r,toHexString:r},a={isPrimitive:!0,match:e=>typeof e==`number`,fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>`#`+e.toString(16).padStart(6,0)},o=[i,a,{isPrimitive:!1,match:e=>Array.isArray(e)||ArrayBuffer.isView(e),fromHexString(e,t,n=1){let r=a.fromHexString(e);t[0]=(r>>16&255)/255*n,t[1]=(r>>8&255)/255*n,t[2]=(r&255)/255*n},toHexString([e,t,n],r=1){r=255/r;let i=e*r<<16^t*r<<8^(n*r|0);return a.toHexString(i)}},{isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,n=1){let r=a.fromHexString(e);t.r=(r>>16&255)/255*n,t.g=(r>>8&255)/255*n,t.b=(r&255)/255*n},toHexString({r:e,g:t,b:n},r=1){r=255/r;let i=e*r<<16^t*r<<8^(n*r|0);return a.toHexString(i)}}];function s(e){return o.find(t=>t.match(e))}var c=class extends t{constructor(e,t,n,i){super(e,t,n,`lil-color`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`color`),this.$input.setAttribute(`tabindex`,-1),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$text=document.createElement(`input`),this.$text.setAttribute(`type`,`text`),this.$text.setAttribute(`spellcheck`,`false`),this.$text.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=s(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener(`input`,()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$text.addEventListener(`input`,()=>{let e=r(this.$text.value);e&&this._setValueFromHexString(e)}),this.$text.addEventListener(`focus`,()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener(`blur`,()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},l=class extends t{constructor(e,t,n){super(e,t,n,`lil-function`),this.$button=document.createElement(`button`),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener(`click`,e=>{e.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$disable=this.$button}},u=class extends t{constructor(e,t,n,r,i,a){super(e,t,n,`lil-number`),this._initInput(),this.min(r),this.max(i);let o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+`%`}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),window.matchMedia(`(pointer: coarse)`).matches&&(this.$input.setAttribute(`type`,`number`),this.$input.setAttribute(`step`,`any`)),this.$widget.appendChild(this.$input),this.$disable=this.$input;let e=()=>{let e=parseFloat(this.$input.value);isNaN(e)||(this._stepExplicit&&(e=this._snap(e)),this.setValue(this._clamp(e)))},t=e=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._snapClampSetValue(t+e),this.$input.value=this.getValue())},n=e=>{e.key===`Enter`&&this.$input.blur(),e.code===`ArrowUp`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e))),e.code===`ArrowDown`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e)*-1))},r=e=>{this._inputFocused&&(e.preventDefault(),t(this._step*this._normalizeMouseWheel(e)))},i=!1,a,o,s,c,l,u=e=>{a=e.clientX,o=s=e.clientY,i=!0,c=this.getValue(),l=0,window.addEventListener(`mousemove`,d),window.addEventListener(`mouseup`,f)},d=e=>{if(i){let t=e.clientX-a,n=e.clientY-o;Math.abs(n)>5?(e.preventDefault(),this.$input.blur(),i=!1,this._setDraggingStyle(!0,`vertical`)):Math.abs(t)>5&&f()}if(!i){let t=e.clientY-s;l-=t*this._step*this._arrowKeyMultiplier(e),c+l>this._max?l=this._max-c:c+l<this._min&&(l=this._min-c),this._snapClampSetValue(c+l)}s=e.clientY},f=()=>{this._setDraggingStyle(!1,`vertical`),this._callOnFinishChange(),window.removeEventListener(`mousemove`,d),window.removeEventListener(`mouseup`,f)};this.$input.addEventListener(`input`,e),this.$input.addEventListener(`keydown`,n),this.$input.addEventListener(`wheel`,r,{passive:!1}),this.$input.addEventListener(`mousedown`,u),this.$input.addEventListener(`focus`,()=>{this._inputFocused=!0}),this.$input.addEventListener(`blur`,()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement(`div`),this.$slider.classList.add(`lil-slider`),this.$fill=document.createElement(`div`),this.$fill.classList.add(`lil-fill`),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add(`lil-has-slider`);let e=(e,t,n,r,i)=>(e-t)/(n-t)*(i-r)+r,t=t=>{let n=this.$slider.getBoundingClientRect(),r=e(t,n.left,n.right,this._min,this._max);this._snapClampSetValue(r)},n=e=>{this._setDraggingStyle(!0),t(e.clientX),window.addEventListener(`mousemove`,r),window.addEventListener(`mouseup`,i)},r=e=>{t(e.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`mousemove`,r),window.removeEventListener(`mouseup`,i)},a=!1,o,s,c=e=>{e.preventDefault(),this._setDraggingStyle(!0),t(e.touches[0].clientX),a=!1},l=e=>{e.touches.length>1||(this._hasScrollBar?(o=e.touches[0].clientX,s=e.touches[0].clientY,a=!0):c(e),window.addEventListener(`touchmove`,u,{passive:!1}),window.addEventListener(`touchend`,d))},u=e=>{if(a){let t=e.touches[0].clientX-o,n=e.touches[0].clientY-s;Math.abs(t)>Math.abs(n)?c(e):(window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d))}else e.preventDefault(),t(e.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d)},f=this._callOnFinishChange.bind(this),p;this.$slider.addEventListener(`mousedown`,n),this.$slider.addEventListener(`touchstart`,l,{passive:!1}),this.$slider.addEventListener(`wheel`,e=>{if(Math.abs(e.deltaX)<Math.abs(e.deltaY)&&this._hasScrollBar)return;e.preventDefault();let t=this._normalizeMouseWheel(e)*this._step;this._snapClampSetValue(this.getValue()+t),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(f,400)},{passive:!1})}_setDraggingStyle(e,t=`horizontal`){this.$slider&&this.$slider.classList.toggle(`lil-active`,e),document.body.classList.toggle(`lil-dragging`,e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},d=class extends t{constructor(e,t,n,r){super(e,t,n,`lil-option`),this.$select=document.createElement(`select`),this.$select.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$select.addEventListener(`change`,()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener(`focus`,()=>{this.$display.classList.add(`lil-focus`)}),this.$select.addEventListener(`blur`,()=>{this.$display.classList.remove(`lil-focus`)}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(e=>{let t=document.createElement(`option`);t.textContent=e,this.$select.appendChild(t)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},f=class extends t{constructor(e,t,n){super(e,t,n,`lil-string`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`spellcheck`,`false`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$input.addEventListener(`input`,()=>{this.setValue(this.$input.value)}),this.$input.addEventListener(`keydown`,e=>{e.code===`Enter`&&this.$input.blur()}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},p=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function m(e){let t=document.createElement(`style`);t.innerHTML=e;let n=document.querySelector(`head link[rel=stylesheet], head style`);n?document.head.insertBefore(t,n):document.head.appendChild(t)}var h=!1,g=class e{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:i=`Controls`,closeFolders:a=!1,injectStyles:o=!0,touchStyles:s=!0}={}){this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement(`div`),this.domElement.classList.add(`lil-gui`),this.$title=document.createElement(`button`),this.$title.classList.add(`lil-title`),this.$title.setAttribute(`aria-expanded`,!0),this.$title.addEventListener(`click`,()=>this.openAnimated(this._closed)),this.$title.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$children=document.createElement(`div`),this.$children.classList.add(`lil-children`),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(i),this.parent?(this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement)):(this.domElement.classList.add(`lil-root`),s&&this.domElement.classList.add(`lil-allow-touch-styles`),!h&&o&&(m(p),h=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add(`lil-auto-place`,`autoPlace`),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty(`--width`,r+`px`),this._closeFolders=a)}add(e,t,r,i,a){if(Object(r)===r)return new d(this,e,t,r);let o=e[t];switch(typeof o){case`number`:return new u(this,e,t,r,i,a);case`boolean`:return new n(this,e,t);case`string`:return new f(this,e,t);case`function`:return new l(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new c(this,e,t,n)}addFolder(t){let n=new e({parent:this,title:t});return this.root._closeFolders&&n.close(),n}load(e,t=!0){return e.controllers&&this.controllers.forEach(t=>{t instanceof l||t._name in e.controllers&&t.load(e.controllers[t._name])}),t&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof l)){if(e._name in t.controllers)throw Error(`Cannot save GUI with duplicate property "${e._name}"`);t.controllers[e._name]=e.save()}}),e&&this.folders.forEach(e=>{if(e._title in t.folders)throw Error(`Cannot save GUI with duplicate folder "${e._title}"`);t.folders[e._title]=e.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),this.domElement.classList.toggle(`lil-closed`,this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+`px`,this.domElement.classList.add(`lil-transition`);let n=e=>{e.target===this.$children&&(this.$children.style.height=``,this.domElement.classList.remove(`lil-transition`),this.$children.removeEventListener(`transitionend`,n))};this.$children.addEventListener(`transitionend`,n);let r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle(`lil-closed`,!e),requestAnimationFrame(()=>{this.$children.style.height=r+`px`})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}},_=class{constructor({trackGPU:e=!1,trackCPT:t=!1,trackHz:n=!1,trackFPS:r=!0,logsPerSecond:i=4,graphsPerSecond:a=30,samplesLog:o=40,samplesGraph:s=10,precision:c=2,maxTimestampPairs:l=2048}={}){this.gl=null,this.ext=null,this.gpuDevice=null,this.gpuBackend=null,this.renderer=null,this.activeQuery=null,this.gpuQueries=[],this.threeRendererPatched=!1,this.maxTimestampPairs=2048,this.webgpuNative=!1,this.gpuQuerySet=null,this.gpuResolveBuffer=null,this.gpuTimestampBufferSize=0,this.frameCursor=0,this.slotTypes=[],this.readBufferPool=[],this.inFlightFrames=[],this.poolWarnThreshold=8,this.warnedMapError=!1,this.warnedSlotOverflow=!1,this.warnedPoolGrowth=!1,this.frameTimes=[],this.frameTimesHead=0,this.renderCount=0,this.cpuStartTime=0,this.isRunningCPUProfiling=!1,this.totalCpuDuration=0,this.totalGpuDuration=0,this.totalGpuDurationCompute=0,this.averageFps={logs:[],graph:[]},this.averageCpu={logs:[],graph:[]},this.averageGpu={logs:[],graph:[]},this.averageGpuCompute={logs:[],graph:[]},this.trackGPU=e,this.trackCPT=t,this.trackHz=n,this.trackFPS=r,this.samplesLog=o,this.samplesGraph=s,this.precision=c,this.logsPerSecond=i,this.graphsPerSecond=a,this.maxTimestampPairs=Math.max(1,l);let u=performance.now();this.prevGraphTime=u,this.beginTime=u,this.prevTextTime=u,this.prevCpuTime=u}async init(e){e?this.handleThreeRenderer(e)||await this.handleWebGPURenderer(e)||this.handleNativeWebGPU(e)||(this.initializeWebGL(e)?this.trackGPU&&this.initializeGPUTracking():console.error(`Stats-gl: Failed to initialize WebGL context`)):console.error(`Stats: The "canvas" parameter is undefined.`)}handleNativeWebGPU(e){return e&&typeof e.createCommandEncoder==`function`&&typeof e.createQuerySet==`function`&&e.queue?(this.gpuDevice=e,this.webgpuNative=!0,this.trackGPU&&e.features?.has(`timestamp-query`)&&(this.initializeWebGPUTiming(),this.onWebGPUTimestampSupported()),!0):!1}initializeWebGPUTiming(){if(!this.gpuDevice)return;let e=this.maxTimestampPairs*2;this.gpuTimestampBufferSize=e*8,this.gpuQuerySet=this.gpuDevice.createQuerySet({type:`timestamp`,count:e}),this.gpuResolveBuffer=this.gpuDevice.createBuffer({size:this.gpuTimestampBufferSize,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC})}acquireReadBuffer(){if(!this.gpuDevice)return null;let e=this.readBufferPool.pop();if(e)return e;let t=this.inFlightFrames.length+this.readBufferPool.length+1;return t>this.poolWarnThreshold&&!this.warnedPoolGrowth&&(console.warn(`stats-gl: WebGPU timestamp readback pool grew to ${t} buffers — is update() being called every frame after queue.submit?`),this.warnedPoolGrowth=!0),this.gpuDevice.createBuffer({size:this.gpuTimestampBufferSize,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}handleThreeRenderer(e){return e.isWebGLRenderer&&!this.threeRendererPatched?(this.patchThreeRenderer(e),this.gl=e.getContext(),this.trackGPU&&this.initializeGPUTracking(),!0):!1}async handleWebGPURenderer(e){return e.isWebGPURenderer?(this.renderer=e,(this.trackGPU||this.trackCPT)&&(e.backend.trackTimestamp=!0,e._initialized||await e.init(),e.hasFeature(`timestamp-query`)&&this.onWebGPUTimestampSupported()),this.info=e.info,this.gpuBackend=e.backend,this.gpuDevice=e.backend?.device||null,this.patchThreeWebGPU(e),!0):!1}onWebGPUTimestampSupported(){}initializeWebGL(e){if(e instanceof WebGL2RenderingContext)this.gl=e;else if(e instanceof HTMLCanvasElement||e instanceof OffscreenCanvas){if(this.gl=e.getContext(`webgl2`),!this.gl)return console.error(`Stats: Unable to obtain WebGL2 context.`),!1}else return console.error(`Stats: Invalid input type. Expected WebGL2RenderingContext, HTMLCanvasElement, or OffscreenCanvas.`),!1;return!0}initializeGPUTracking(){this.gl&&(this.ext=this.gl.getExtension(`EXT_disjoint_timer_query_webgl2`),this.ext&&this.onGPUTrackingInitialized())}onGPUTrackingInitialized(){}getTimestampWrites(e=`render`){if(!this.webgpuNative||!this.gpuQuerySet)return;if(this.frameCursor>=this.maxTimestampPairs){this.warnedSlotOverflow||=(console.warn(`stats-gl: WebGPU timestamp pair budget exhausted (maxTimestampPairs=${this.maxTimestampPairs}). Increase maxTimestampPairs in StatsOptions to instrument more passes.`),!0);return}let t=this.frameCursor++;return this.slotTypes[t]=e,{querySet:this.gpuQuerySet,beginningOfPassWriteIndex:t*2,endOfPassWriteIndex:t*2+1}}begin(e){this.beginProfiling(),this.webgpuNative?(this.frameCursor=0,this.slotTypes.length=0):this.gl&&this.ext&&(this.activeQuery&&this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.activeQuery=this.gl.createQuery(),this.activeQuery&&this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT,this.activeQuery))}end(e){if(this.renderCount++,this.webgpuNative&&e&&this.gpuQuerySet&&this.gpuResolveBuffer){let t=this.frameCursor;if(t>0){let n=t*2,r=n*8;e.resolveQuerySet(this.gpuQuerySet,0,n,this.gpuResolveBuffer,0);let i=this.acquireReadBuffer();i&&(e.copyBufferToBuffer(this.gpuResolveBuffer,0,i,0,r),this.inFlightFrames.push({buffer:i,pairCount:t,slotTypes:this.slotTypes.slice(0,t),mapPromise:null,ready:!1,error:null}))}this.endProfiling()}else this.gl&&this.ext&&this.activeQuery&&(this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.gpuQueries.push({query:this.activeQuery}),this.activeQuery=null),this.endProfiling()}async resolveTimestampsAsync(){if(!this.webgpuNative)return this.totalGpuDuration;for(let e of this.inFlightFrames)e.mapPromise===null&&(e.mapPromise=e.buffer.mapAsync(GPUMapMode.READ).then(()=>{e.ready=!0},t=>{e.error=t,e.ready=!0}));for(;this.inFlightFrames.length>0&&this.inFlightFrames[0].ready;){let e=this.inFlightFrames.shift();if(e.error){this.warnedMapError||=(console.warn(`stats-gl: WebGPU timestamp mapAsync failed`,e.error),!0),this.totalGpuDuration=0,this.totalGpuDurationCompute=0,this.readBufferPool.push(e.buffer);continue}let t=new BigUint64Array(e.buffer.getMappedRange()),n=0,r=0;for(let i=0;i<e.pairCount;i++){let a=t[i*2],o=t[i*2+1],s=o>=a?Number(o-a):0;e.slotTypes[i]===`compute`?r+=s:n+=s}e.buffer.unmap(),this.readBufferPool.push(e.buffer),this.totalGpuDuration=n/1e6,this.totalGpuDurationCompute=r/1e6}return this.totalGpuDuration}processGpuQueries(){if(this.gl&&this.ext){this.totalGpuDuration=0;for(let e=this.gpuQueries.length-1;e>=0;e--){let t=this.gpuQueries[e],n=this.gl.getQueryParameter(t.query,this.gl.QUERY_RESULT_AVAILABLE),r=this.gl.getParameter(this.ext.GPU_DISJOINT_EXT);if(n&&!r){let n=this.gl.getQueryParameter(t.query,this.gl.QUERY_RESULT)*1e-6;this.totalGpuDuration+=n,this.gl.deleteQuery(t.query),this.gpuQueries.splice(e,1)}}}}processWebGPUTimestamps(){this.totalGpuDuration=this.info.render.timestamp,this.totalGpuDurationCompute=this.info.compute.timestamp}beginProfiling(){this.cpuStartTime=performance.now(),this.isRunningCPUProfiling=!0}endProfiling(){this.isRunningCPUProfiling&&=(this.totalCpuDuration+=performance.now()-this.cpuStartTime,!1)}calculateFps(){let e=performance.now(),t=e-1e3;for(this.frameTimes.push(e);this.frameTimesHead<this.frameTimes.length&&this.frameTimes[this.frameTimesHead]<=t;)this.frameTimesHead++;return this.frameTimesHead>128&&(this.frameTimes=this.frameTimes.slice(this.frameTimesHead),this.frameTimesHead=0),Math.round(this.frameTimes.length-this.frameTimesHead)}updateAverages(){this.addToAverage(this.totalCpuDuration,this.averageCpu),this.addToAverage(this.totalGpuDuration,this.averageGpu),(this.info||this.webgpuNative)&&this.totalGpuDurationCompute!==void 0&&this.addToAverage(this.totalGpuDurationCompute,this.averageGpuCompute)}addToAverage(e,t){for(t.logs.push(e);t.logs.length>this.samplesLog;)t.logs.shift();for(t.graph.push(e);t.graph.length>this.samplesGraph;)t.graph.shift()}resetCounters(){this.renderCount=0,this.totalCpuDuration=0,this.beginTime=performance.now()}getData(){let e=this.averageFps.logs,t=this.averageCpu.logs,n=this.averageGpu.logs,r=this.averageGpuCompute.logs;return{fps:e.length>0?e[e.length-1]:0,cpu:t.length>0?t[t.length-1]:0,gpu:n.length>0?n[n.length-1]:0,gpuCompute:r.length>0?r[r.length-1]:0}}patchThreeWebGPU(e){let t=e.info.reset,n=this;e.info.reset=function(){n.beginProfiling(),t.call(this)}}patchThreeRenderer(e){let t=e.render,n=this;e.render=function(e,r){n.begin(),t.call(this,e,r),n.end()},this.threeRendererPatched=!0}dispose(){if(this.gl){if(this.activeQuery&&this.ext){try{this.gl.endQuery(this.ext.TIME_ELAPSED_EXT)}catch{}this.gl.deleteQuery(this.activeQuery),this.activeQuery=null}for(let e of this.gpuQueries)this.gl.deleteQuery(e.query);this.gpuQueries.length=0}this.gpuQuerySet&&=(this.gpuQuerySet.destroy(),null),this.gpuResolveBuffer&&=(this.gpuResolveBuffer.destroy(),null);for(let e of this.inFlightFrames){try{e.buffer.mapState===`mapped`&&e.buffer.unmap()}catch{}e.buffer.destroy()}this.inFlightFrames.length=0;for(let e of this.readBufferPool)e.destroy();this.readBufferPool.length=0,this.frameCursor=0,this.slotTypes.length=0,this.gpuTimestampBufferSize=0,this.warnedMapError=!1,this.warnedSlotOverflow=!1,this.warnedPoolGrowth=!1,this.webgpuNative=!1,this.gl=null,this.ext=null,this.info=void 0,this.gpuDevice=null,this.gpuBackend=null,this.renderer=null,this.frameTimes.length=0,this.frameTimesHead=0,this.averageFps.logs.length=0,this.averageFps.graph.length=0,this.averageCpu.logs.length=0,this.averageCpu.graph.length=0,this.averageGpu.logs.length=0,this.averageGpu.graph.length=0,this.averageGpuCompute.logs.length=0,this.averageGpuCompute.graph.length=0}},v=class{constructor(e,t,n){this.id=0,this.name=e,this.fg=t,this.bg=n,this.gradient=null,this.PR=Math.round(typeof window<`u`&&window.devicePixelRatio||1),this.WIDTH=90*this.PR,this.HEIGHT=48*this.PR,this.TEXT_X=3*this.PR,this.TEXT_Y=2*this.PR,this.GRAPH_X=3*this.PR,this.GRAPH_Y=15*this.PR,this.GRAPH_WIDTH=84*this.PR,this.GRAPH_HEIGHT=30*this.PR,this.canvas=typeof document<`u`?document.createElement(`canvas`):new OffscreenCanvas(this.WIDTH,this.HEIGHT),this.canvas.width=this.WIDTH,this.canvas.height=this.HEIGHT,this.canvas.style.width=`90px`,this.canvas.style.height=`48px`,this.canvas.style.position=`absolute`,this.canvas.style.cssText=`width:90px;height:48px;background-color: transparent !important;`,this.context=this.canvas.getContext(`2d`),this.initializeCanvas()}createGradient(){if(!this.context)throw Error(`No context`);let e=this.context.createLinearGradient(0,this.GRAPH_Y,0,this.GRAPH_Y+this.GRAPH_HEIGHT),t,n=this.fg;switch(this.fg.toLowerCase()){case`#0ff`:t=`#006666`;break;case`#0f0`:t=`#006600`;break;case`#ff0`:t=`#666600`;break;case`#e1e1e1`:t=`#666666`;break;default:t=this.bg}return e.addColorStop(0,t),e.addColorStop(1,n),e}initializeCanvas(){this.context&&(this.context.imageSmoothingEnabled=!1,this.context.font=`bold `+9*this.PR+`px Helvetica,Arial,sans-serif`,this.context.textBaseline=`top`,this.gradient=this.createGradient(),this.context.fillStyle=this.bg,this.context.fillRect(0,0,this.WIDTH,this.HEIGHT),this.context.fillStyle=this.fg,this.context.fillText(this.name,this.TEXT_X,this.TEXT_Y),this.context.fillStyle=this.bg,this.context.globalAlpha=.9,this.context.fillRect(this.GRAPH_X,this.GRAPH_Y,this.GRAPH_WIDTH,this.GRAPH_HEIGHT))}update(e,t,n=0,r=``){if(!this.context||!this.gradient)return;let i=Math.min(1/0,e),a=Math.max(t,e);this.context.globalAlpha=1,this.context.fillStyle=this.bg,this.context.fillRect(0,0,this.WIDTH,this.GRAPH_Y);let o=`${e.toFixed(n)} ${this.name}`;this.context.fillStyle=this.fg,this.context.fillText(o,this.TEXT_X,this.TEXT_Y);let s=this.TEXT_X+this.context.measureText(o).width;r&&(this.context.fillStyle=`#f90`,this.context.fillText(r,s,this.TEXT_Y),s+=this.context.measureText(r).width),this.context.fillStyle=this.fg,this.context.fillText(` (${i.toFixed(n)}-${parseFloat(a.toFixed(n))})`,s,this.TEXT_Y)}updateGraph(e,t){if(!this.context||!this.gradient)return;e===0&&t===0&&(t=1),t=Math.max(t,e,.1),e=Math.max(e,0);let n=Math.round(this.GRAPH_X),r=Math.round(this.GRAPH_Y),i=Math.round(this.GRAPH_WIDTH),a=Math.round(this.GRAPH_HEIGHT),o=Math.round(this.PR);this.context.drawImage(this.canvas,n+o,r,i-o,a,n,r,i-o,a),this.context.fillStyle=this.bg,this.context.fillRect(n+i-o,r,o,a);let s=Math.min(a,Math.round(e/t*a));s>0&&(this.context.globalAlpha=.9,this.context.fillStyle=this.gradient,this.context.fillRect(n+i-o,r+(a-s),o,s)),this.context.globalAlpha=1}},y=class extends v{constructor(e,t,n){super(e,t,n),this.vsyncValue=0,this.SMALL_HEIGHT=9*this.PR,this.HEIGHT=this.SMALL_HEIGHT,this.WIDTH=35*this.PR,this.TEXT_Y=0*this.PR,this.canvas.height=this.HEIGHT,this.canvas.width=this.WIDTH,this.canvas.style.height=`9px`,this.canvas.style.width=`35px`,this.canvas.style.cssText=`
            width: 35px;
            height: 9px;
            position: absolute;
            top: 0;
            left: 0;
            background-color: transparent !important;
            pointer-events: none;
        `,this.initializeCanvas()}initializeCanvas(){this.context&&(this.context.imageSmoothingEnabled=!1,this.context.font=`bold `+9*this.PR+`px Helvetica,Arial,sans-serif`,this.context.textBaseline=`top`,this.context.globalAlpha=1)}update(e,t,n=0){this.context&&(this.vsyncValue=e,this.context.clearRect(0,0,this.WIDTH,this.HEIGHT),this.context.globalAlpha=1,this.context.fillStyle=this.bg,this.context.fillText(`${e.toFixed(0)}Hz`,this.TEXT_X,this.TEXT_Y))}updateGraph(e,t){}setOffset(e,t){this.canvas.style.transform=`translate(${e}px, ${t}px)`}},b=class extends v{constructor(e){super(e,`#fff`,`#111`),this.currentBitmap=null,this.sourceAspect=1,this.initializeCanvas()}initializeCanvas(){this.context&&(this.context.imageSmoothingEnabled=!0,this.context.font=`bold `+9*this.PR+`px Helvetica,Arial,sans-serif`,this.context.textBaseline=`top`,this.context.fillStyle=`#000`,this.context.fillRect(0,0,this.WIDTH,this.HEIGHT),this.drawLabelOverlay())}drawLabelOverlay(){this.context&&(this.context.fillStyle=`rgba(0, 0, 0, 0.5)`,this.context.fillRect(0,0,this.WIDTH,this.GRAPH_Y),this.context.fillStyle=this.fg,this.context.fillText(this.name,this.TEXT_X,this.TEXT_Y))}setSourceSize(e,t){this.sourceAspect=e/t}updateTexture(e){if(!this.context)return;this.currentBitmap&&this.currentBitmap.close(),this.currentBitmap=e,this.context.fillStyle=`#000`,this.context.fillRect(0,0,this.WIDTH,this.HEIGHT);let t=this.WIDTH/this.HEIGHT,n,r,i,a;this.sourceAspect>t?(n=this.WIDTH,r=this.WIDTH/this.sourceAspect,i=0,a=(this.HEIGHT-r)/2):(r=this.HEIGHT,n=this.HEIGHT*this.sourceAspect,i=(this.WIDTH-n)/2,a=0),this.context.drawImage(e,i,a,n,r),this.drawLabelOverlay()}setLabel(e){this.name=e,this.drawLabelOverlay()}update(e,t,n=0,r=``){}updateGraph(e,t){}dispose(){this.currentBitmap&&=(this.currentBitmap.close(),null)}},x=class{constructor(e,t=90,n=48){this.previewFbo=null,this.previewTexture=null,this.gl=e,this.previewWidth=t,this.previewHeight=n,this.pixels=new Uint8Array(t*n*4),this.flippedPixels=new Uint8Array(t*n*4),this.initResources()}resize(e,t){(e!==this.previewWidth||t!==this.previewHeight)&&(this.previewWidth=e,this.previewHeight=t,this.pixels=new Uint8Array(e*t*4),this.flippedPixels=new Uint8Array(e*t*4),this.dispose(),this.initResources())}initResources(){let e=this.gl;this.previewTexture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.previewTexture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,this.previewWidth,this.previewHeight,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),this.previewFbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.previewFbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.previewTexture,0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,null)}async capture(e,t,n,r=`default`){let i=this.gl,a=i.getParameter(i.READ_FRAMEBUFFER_BINDING),o=i.getParameter(i.DRAW_FRAMEBUFFER_BINDING);i.bindFramebuffer(i.READ_FRAMEBUFFER,e),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,this.previewFbo),i.blitFramebuffer(0,0,t,n,0,0,this.previewWidth,this.previewHeight,i.COLOR_BUFFER_BIT,i.LINEAR),i.bindFramebuffer(i.READ_FRAMEBUFFER,this.previewFbo),i.readPixels(0,0,this.previewWidth,this.previewHeight,i.RGBA,i.UNSIGNED_BYTE,this.pixels),i.bindFramebuffer(i.READ_FRAMEBUFFER,a),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,o);let s=this.flipY(this.pixels,this.previewWidth,this.previewHeight),c=new ImageData(new Uint8ClampedArray(s),this.previewWidth,this.previewHeight);return createImageBitmap(c)}flipY(e,t,n){let r=t*4;for(let t=0;t<n;t++){let i=t*r,a=(n-1-t)*r;this.flippedPixels.set(e.subarray(i,i+r),a)}return this.flippedPixels}removeSource(e){}dispose(){let e=this.gl;this.previewFbo&&=(e.deleteFramebuffer(this.previewFbo),null),this.previewTexture&&=(e.deleteTexture(this.previewTexture),null)}},S=class{constructor(e,t=90,n=48){this.previewTexture=null,this.stagingBuffer=null,this.blitPipeline=null,this.sampler=null,this.bindGroupLayout=null,this.initialized=!1,this.device=e,this.previewWidth=t,this.previewHeight=n,this.pixelsBuffer=new Uint8ClampedArray(t*n*4)}resize(e,t){(e!==this.previewWidth||t!==this.previewHeight)&&(this.previewWidth=e,this.previewHeight=t,this.pixelsBuffer=new Uint8ClampedArray(e*t*4),this.previewTexture&&this.previewTexture.destroy(),this.stagingBuffer&&this.stagingBuffer.destroy(),this.previewTexture=null,this.stagingBuffer=null,this.initialized&&this.createSizeResources())}createSizeResources(){let e=this.device;this.previewTexture=e.createTexture({size:{width:this.previewWidth,height:this.previewHeight},format:`rgba8unorm`,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC});let t=Math.ceil(this.previewWidth*4/256)*256;this.stagingBuffer=e.createBuffer({size:t*this.previewHeight,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}async initResources(){if(this.initialized)return;let e=this.device;this.createSizeResources(),this.sampler=e.createSampler({minFilter:`linear`,magFilter:`linear`});let t=e.createShaderModule({code:`
        @group(0) @binding(0) var texSampler: sampler;
        @group(0) @binding(1) var texInput: texture_2d<f32>;

        struct VertexOutput {
          @builtin(position) position: vec4f,
          @location(0) uv: vec2f
        }

        @vertex
        fn vertexMain(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {
          var positions = array<vec2f, 3>(
            vec2f(-1.0, -1.0),
            vec2f(3.0, -1.0),
            vec2f(-1.0, 3.0)
          );
          var uvs = array<vec2f, 3>(
            vec2f(0.0, 1.0),
            vec2f(2.0, 1.0),
            vec2f(0.0, -1.0)
          );

          var output: VertexOutput;
          output.position = vec4f(positions[vertexIndex], 0.0, 1.0);
          output.uv = uvs[vertexIndex];
          return output;
        }

        @fragment
        fn fragmentMain(@location(0) uv: vec2f) -> @location(0) vec4f {
          return textureSample(texInput, texSampler, uv);
        }
      `});this.bindGroupLayout=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,sampler:{type:`filtering`}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:`float`}}]}),this.blitPipeline=e.createRenderPipeline({layout:e.createPipelineLayout({bindGroupLayouts:[this.bindGroupLayout]}),vertex:{module:t,entryPoint:`vertexMain`},fragment:{module:t,entryPoint:`fragmentMain`,targets:[{format:`rgba8unorm`}]},primitive:{topology:`triangle-list`}}),this.initialized=!0}async capture(e){if(await this.initResources(),!this.previewTexture||!this.stagingBuffer||!this.blitPipeline||!this.sampler||!this.bindGroupLayout)return null;let t=this.device,n=t.createBindGroup({layout:this.bindGroupLayout,entries:[{binding:0,resource:this.sampler},{binding:1,resource:e.createView()}]}),r=t.createCommandEncoder(),i=r.beginRenderPass({colorAttachments:[{view:this.previewTexture.createView(),loadOp:`clear`,storeOp:`store`,clearValue:{r:0,g:0,b:0,a:1}}]});i.setPipeline(this.blitPipeline),i.setBindGroup(0,n),i.draw(3),i.end();let a=Math.ceil(this.previewWidth*4/256)*256;r.copyTextureToBuffer({texture:this.previewTexture},{buffer:this.stagingBuffer,bytesPerRow:a},{width:this.previewWidth,height:this.previewHeight}),t.queue.submit([r.finish()]),await this.stagingBuffer.mapAsync(GPUMapMode.READ);let o=new Uint8Array(this.stagingBuffer.getMappedRange());for(let e=0;e<this.previewHeight;e++){let t=e*a,n=e*this.previewWidth*4;this.pixelsBuffer.set(o.subarray(t,t+this.previewWidth*4),n)}this.stagingBuffer.unmap();let s=new ImageData(new Uint8ClampedArray(this.pixelsBuffer),this.previewWidth,this.previewHeight);return createImageBitmap(s)}dispose(){this.previewTexture&&this.previewTexture.destroy(),this.stagingBuffer&&this.stagingBuffer.destroy(),this.previewTexture=null,this.stagingBuffer=null,this.blitPipeline=null,this.sampler=null,this.bindGroupLayout=null,this.initialized=!1}};function C(e,t){return e.isWebGLRenderTarget&&e.__webglFramebuffer?{framebuffer:e.__webglFramebuffer,width:e.width||1,height:e.height||1}:null}function w(e,t){return e.isRenderTarget&&e.texture&&t.get&&t.get(e.texture)?.texture||null}var T=class e extends _{constructor({trackGPU:t=!1,trackCPT:n=!1,trackHz:r=!1,trackFPS:i=!0,logsPerSecond:a=4,graphsPerSecond:o=30,samplesLog:s=40,samplesGraph:c=10,precision:l=2,minimal:u=!1,horizontal:d=!0,mode:f=0}={}){super({trackGPU:t,trackCPT:n,trackHz:r,trackFPS:i,logsPerSecond:a,graphsPerSecond:o,samplesLog:s,samplesGraph:c,precision:l}),this.fpsPanel=null,this.msPanel=null,this.gpuPanel=null,this.gpuPanelCompute=null,this.vsyncPanel=null,this.workerCpuPanel=null,this.texturePanels=new Map,this.texturePanelRow=null,this.textureCaptureWebGL=null,this.textureCaptureWebGPU=null,this.textureSourcesWebGL=new Map,this.textureSourcesWebGPU=new Map,this.texturePreviewWidth=90,this.texturePreviewHeight=48,this.lastRendererWidth=0,this.lastRendererHeight=0,this.textureUpdatePending=!1,this.updateCounter=0,this.lastMin={},this.lastMax={},this.lastValue={},this.VSYNC_RATES=[{refreshRate:60,frameTime:16.67},{refreshRate:75,frameTime:13.33},{refreshRate:90,frameTime:11.11},{refreshRate:120,frameTime:8.33},{refreshRate:144,frameTime:6.94},{refreshRate:165,frameTime:6.06},{refreshRate:240,frameTime:4.17}],this.detectedVSync=null,this.frameTimeHistory=[],this.HISTORY_SIZE=120,this.VSYNC_THRESHOLD=.05,this.lastFrameTime=0,this.externalData=null,this.hasNewExternalData=!1,this.isWorker=!1,this.averageWorkerCpu={logs:[],graph:[]},this.handleClick=e=>{e.preventDefault(),this.showPanel(++this.mode%this.dom.children.length)},this.handleResize=()=>{this.fpsPanel&&this.resizePanel(this.fpsPanel),this.msPanel&&this.resizePanel(this.msPanel),this.workerCpuPanel&&this.resizePanel(this.workerCpuPanel),this.gpuPanel&&this.resizePanel(this.gpuPanel),this.gpuPanelCompute&&this.resizePanel(this.gpuPanelCompute)},this.mode=f,this.horizontal=d,this.minimal=u,this.dom=document.createElement(`div`),this.initializeDOM(),this._panelId=0,this.trackFPS&&(this.fpsPanel=this.addPanel(new e.Panel(`FPS`,`#0ff`,`#002`)),this.msPanel=this.addPanel(new e.Panel(`CPU`,`#0f0`,`#020`))),this.trackGPU&&(this.gpuPanel=this.addPanel(new e.Panel(`GPU`,`#ff0`,`#220`))),this.trackCPT&&(this.gpuPanelCompute=this.addPanel(new e.Panel(`CPT`,`#e1e1e1`,`#212121`))),this.trackHz===!0&&(this.vsyncPanel=new y(``,`#f0f`,`#202`),this.dom.appendChild(this.vsyncPanel.canvas),this.vsyncPanel.setOffset(56,35)),this.setupEventListeners()}initializeDOM(){this.dom.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      opacity: 0.9;
      z-index: 10000;
      ${this.minimal?`cursor: pointer;`:``}
    `}setupEventListeners(){this.minimal?(this.dom.addEventListener(`click`,this.handleClick),this.showPanel(this.mode)):window.addEventListener(`resize`,this.handleResize)}updateTexturePreviewDimensions(){if(!this.renderer)return;let e=this.renderer.domElement?.width||0,t=this.renderer.domElement?.height||0;if(e===this.lastRendererWidth&&t===this.lastRendererHeight||e===0||t===0)return;this.lastRendererWidth=e,this.lastRendererHeight=t;let n=e/t,r,i;if(n>1.875?(r=90,i=Math.round(90/n)):(i=48,r=Math.round(48*n)),r=Math.max(r,16),i=Math.max(i,16),r!==this.texturePreviewWidth||i!==this.texturePreviewHeight){this.texturePreviewWidth=r,this.texturePreviewHeight=i,this.textureCaptureWebGL&&this.textureCaptureWebGL.resize(r,i),this.textureCaptureWebGPU&&this.textureCaptureWebGPU.resize(r,i);for(let n of this.texturePanels.values())n.setSourceSize(e,t)}}onWebGPUTimestampSupported(){}onGPUTrackingInitialized(){}setData(t){if(this.externalData=t,this.hasNewExternalData=!0,!this.isWorker&&this.msPanel){this.isWorker=!0,this.workerCpuPanel=new e.Panel(`WRK`,`#f90`,`#220`);let t=this.msPanel.id+1;this.workerCpuPanel.id=t,this.gpuPanel&&this.gpuPanel.id>=t&&(this.gpuPanel.id++,this.resizePanel(this.gpuPanel)),this.gpuPanelCompute&&this.gpuPanelCompute.id>=t&&(this.gpuPanelCompute.id++,this.resizePanel(this.gpuPanelCompute));let n=this.msPanel.canvas;n.nextSibling?this.dom.insertBefore(this.workerCpuPanel.canvas,n.nextSibling):this.dom.appendChild(this.workerCpuPanel.canvas),this.resizePanel(this.workerCpuPanel),this._panelId++}}update(){this.externalData?this.updateFromExternalData():this.updateFromInternalData()}updateFromExternalData(){let e=this.externalData;this.endProfiling(),this.addToAverage(this.totalCpuDuration,this.averageCpu),this.totalCpuDuration=0,this.hasNewExternalData&&=(this.addToAverage(e.cpu,this.averageWorkerCpu),this.addToAverage(e.fps,this.averageFps),this.addToAverage(e.gpu,this.averageGpu),this.addToAverage(e.gpuCompute,this.averageGpuCompute),!1),this.renderPanels()}updateFromInternalData(){this.endProfiling(),this.webgpuNative?this.resolveTimestampsAsync():this.info?this.processWebGPUTimestamps():this.processGpuQueries(),this.updateAverages(),this.resetCounters(),this.renderPanels()}renderPanels(){let e=performance.now();if(!this.isWorker){for(this.frameTimes.push(e);this.frameTimes.length>0&&this.frameTimes[0]<=e-1e3;)this.frameTimes.shift();let t=Math.round(this.frameTimes.length);this.addToAverage(t,this.averageFps)}let t=e>=this.prevTextTime+1e3/this.logsPerSecond,n=e>=this.prevGraphTime+1e3/this.graphsPerSecond,r=this.isWorker?` ⛭`:``;if(this.updatePanelComponents(this.fpsPanel,this.averageFps,0,t,n,r),this.updatePanelComponents(this.msPanel,this.averageCpu,this.precision,t,n,``),this.workerCpuPanel&&this.isWorker&&this.updatePanelComponents(this.workerCpuPanel,this.averageWorkerCpu,this.precision,t,n,` ⛭`),this.gpuPanel&&this.updatePanelComponents(this.gpuPanel,this.averageGpu,this.precision,t,n,r),this.trackCPT&&this.gpuPanelCompute&&this.updatePanelComponents(this.gpuPanelCompute,this.averageGpuCompute,this.precision,t,n,r),t&&(this.prevTextTime=e),n&&(this.prevGraphTime=e,this.texturePanels.size>0&&!this.textureUpdatePending&&(this.textureUpdatePending=!0,this.updateTexturePanels().finally(()=>{this.textureUpdatePending=!1})),this.captureStatsGLNodes()),this.vsyncPanel!==null){this.detectVSync(e);let n=this.detectedVSync?.refreshRate||0;t&&n>0&&this.vsyncPanel.update(n,n)}}resetCounters(){this.renderCount=0,this.totalCpuDuration=0,this.beginTime=performance.now()}resizePanel(e){e.canvas.style.position=`absolute`,this.minimal?e.canvas.style.display=`none`:(e.canvas.style.display=`block`,this.horizontal?(e.canvas.style.top=`0px`,e.canvas.style.left=e.id*e.WIDTH/e.PR+`px`):(e.canvas.style.left=`0px`,e.canvas.style.top=e.id*e.HEIGHT/e.PR+`px`))}addPanel(e){return e.canvas&&(this.dom.appendChild(e.canvas),e.id=this._panelId,this.resizePanel(e),this._panelId++),e}showPanel(e){for(let t=0;t<this.dom.children.length;t++){let n=this.dom.children[t];n.style.display=t===e?`block`:`none`}this.mode=e}addTexturePanel(e){this.texturePanelRow||(this.texturePanelRow=document.createElement(`div`),this.texturePanelRow.style.cssText=`
        position: absolute;
        top: 48px;
        left: 0;
        display: flex;
        flex-direction: row;
      `,this.dom.appendChild(this.texturePanelRow));let t=new b(e);return t.canvas.style.position=`relative`,t.canvas.style.left=``,t.canvas.style.top=``,this.texturePanelRow.appendChild(t.canvas),this.texturePanels.set(e,t),t}setTexture(e,t){this.updateTexturePreviewDimensions(),this.gl&&!this.textureCaptureWebGL&&(this.textureCaptureWebGL=new x(this.gl,this.texturePreviewWidth,this.texturePreviewHeight)),this.gpuDevice&&!this.textureCaptureWebGPU&&(this.textureCaptureWebGPU=new S(this.gpuDevice,this.texturePreviewWidth,this.texturePreviewHeight));let n=this.texturePanels.get(e);if(t.isWebGLRenderTarget&&this.gl){let r=C(t,this.gl);r&&(this.textureSourcesWebGL.set(e,{target:t,...r}),n&&n.setSourceSize(r.width,r.height))}else if(t.isRenderTarget&&this.gpuBackend){let r=w(t,this.gpuBackend);r&&(this.textureSourcesWebGPU.set(e,r),n&&t.width&&t.height&&n.setSourceSize(t.width,t.height))}else t&&typeof t.createView==`function`&&this.textureSourcesWebGPU.set(e,t)}setTextureWebGL(e,t,n,r){this.updateTexturePreviewDimensions(),this.gl&&!this.textureCaptureWebGL&&(this.textureCaptureWebGL=new x(this.gl,this.texturePreviewWidth,this.texturePreviewHeight)),this.textureSourcesWebGL.set(e,{target:{isWebGLRenderTarget:!0},framebuffer:t,width:n,height:r});let i=this.texturePanels.get(e);i&&i.setSourceSize(n,r)}setTextureBitmap(e,t,n,r){let i=this.texturePanels.get(e);i&&(n!==void 0&&r!==void 0&&i.setSourceSize(n,r),i.updateTexture(t))}removeTexturePanel(e){let t=this.texturePanels.get(e);t&&(t.dispose(),t.canvas.remove(),this.texturePanels.delete(e),this.textureSourcesWebGL.delete(e),this.textureSourcesWebGPU.delete(e))}async updateTexturePanels(){if(this.updateTexturePreviewDimensions(),this.textureCaptureWebGL)for(let[e,t]of this.textureSourcesWebGL){let n=this.texturePanels.get(e);if(n){let r=t.framebuffer,i=t.width,a=t.height;t.target.isWebGLRenderTarget&&t.target.__webglFramebuffer&&(r=t.target.__webglFramebuffer,i=t.target.width||i,a=t.target.height||a);let o=await this.textureCaptureWebGL.capture(r,i,a,e);o&&n.updateTexture(o)}}if(this.textureCaptureWebGPU)for(let[e,t]of this.textureSourcesWebGPU){let n=this.texturePanels.get(e);if(n){let e=await this.textureCaptureWebGPU.capture(t);e&&n.updateTexture(e)}}}captureStatsGLNodes(){let e=this._statsGLCaptures;if(e&&e.size!==0&&this.renderer)for(let t of e.values())t.capture&&t.capture(this.renderer)}detectVSync(e){if(this.lastFrameTime===0){this.lastFrameTime=e;return}let t=e-this.lastFrameTime;if(this.lastFrameTime=e,this.frameTimeHistory.push(t),this.frameTimeHistory.length>this.HISTORY_SIZE&&this.frameTimeHistory.shift(),this.frameTimeHistory.length<60)return;let n=this.frameTimeHistory.reduce((e,t)=>e+t)/this.frameTimeHistory.length,r=this.frameTimeHistory.reduce((e,t)=>e+(t-n)**2,0)/this.frameTimeHistory.length;if(Math.sqrt(r)>2){this.detectedVSync=null;return}let i=null,a=1/0;for(let e of this.VSYNC_RATES){let t=Math.abs(n-e.frameTime);t<a&&(a=t,i=e)}this.detectedVSync=i&&a/i.frameTime<=this.VSYNC_THRESHOLD?i:null}updatePanelComponents(e,t,n,r,i,a=``){if(!e||t.logs.length===0)return;let o=String(e.id);o in this.lastMin||(this.lastMin[o]=1/0,this.lastMax[o]=0,this.lastValue[o]=0);let s=t.logs[t.logs.length-1];this.lastMax[o]=Math.max(...t.logs),this.lastMin[o]=Math.min(this.lastMin[o],s),this.lastValue[o]=this.lastValue[o]*.7+s*.3;let c=Math.max(Math.max(...t.logs),...t.graph.slice(-this.samplesGraph));this.updateCounter++,r&&e.update(this.lastValue[o],this.lastMax[o],n,a),i&&e.updateGraph(s,c)}updatePanel(e,t,n=2){if(!e||t.logs.length===0)return;let r=performance.now();e.name in this.lastMin||(this.lastMin[e.name]=1/0,this.lastMax[e.name]=0,this.lastValue[e.name]=0);let i=t.logs[t.logs.length-1],a=Math.max(...t.logs.slice(-30));this.lastMin[e.name]=Math.min(this.lastMin[e.name],i),this.lastMax[e.name]=Math.max(this.lastMax[e.name],i),this.lastValue[e.name]=this.lastValue[e.name]*.7+i*.3;let o=Math.max(a,...t.graph.slice(-this.samplesGraph));this.updateCounter++,this.updateCounter%(this.logsPerSecond*2)==0&&(this.lastMax[e.name]=a,this.lastMin[e.name]=i),e.update&&(r>=this.prevCpuTime+1e3/this.logsPerSecond&&e.update(this.lastValue[e.name],i,this.lastMax[e.name],o,n),r>=this.prevGraphTime+1e3/this.graphsPerSecond&&(e.updateGraph(i,o),this.prevGraphTime=r))}get domElement(){return this.dom}dispose(){this.minimal?this.dom.removeEventListener(`click`,this.handleClick):window.removeEventListener(`resize`,this.handleResize),this.textureCaptureWebGL&&=(this.textureCaptureWebGL.dispose(),null),this.textureCaptureWebGPU&&=(this.textureCaptureWebGPU.dispose(),null);for(let e of this.texturePanels.values())e.dispose();this.texturePanels.clear(),this.textureSourcesWebGL.clear(),this.textureSourcesWebGPU.clear();let e=this._statsGLCaptures;if(e){for(let t of e.values())t.dispose&&t.dispose();e.clear()}this.texturePanelRow&&=(this.texturePanelRow.remove(),null),this.dom.remove(),this.fpsPanel=null,this.msPanel=null,this.gpuPanel=null,this.gpuPanelCompute=null,this.vsyncPanel=null,this.workerCpuPanel=null,this.frameTimeHistory.length=0,this.averageWorkerCpu.logs.length=0,this.averageWorkerCpu.graph.length=0,super.dispose()}};T.Panel=v,T.PanelTexture=b;var E=T,D=1e3,O=1001,k=1002,A=1003,j=1004,ee=1005,M=1006,te=1007,ne=1008,re=1009,ie=1010,ae=1011,oe=1012,se=1013,N=1014,ce=1015,le=1016,ue=1017,de=1018,fe=1020,pe=35902,me=35899,he=1021,ge=1022,_e=1023,ve=1026,ye=1027,be=1028,xe=1029,Se=1030,Ce=1031,we=1033,Te=33776,Ee=33777,De=33778,Oe=33779,ke=35840,Ae=35841,je=35842,Me=35843,Ne=36196,Pe=37492,Fe=37496,P=37488,Ie=37489,Le=37490,Re=37491,F=37808,ze=37809,I=37810,L=37811,Be=37812,Ve=37813,He=37814,Ue=37815,We=37816,Ge=37817,Ke=37818,qe=37819,Je=37820,Ye=37821,Xe=36492,Ze=36494,Qe=36495,$e=36283,et=36284,tt=36285,nt=36286,rt=2300,it=2301,at=2302,ot=2303,st=2400,ct=2401,lt=2402,ut=3200,dt=`srgb`,ft=`srgb-linear`,pt=`linear`,mt=`srgb`,ht=7680,gt=35044,_t=2e3;function vt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function yt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function bt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function xt(){let e=bt(`canvas`);return e.style.display=`block`,e}var St={};function Ct(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function wt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=wt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=wt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Tt(...e){let t=e.join(` `);t in St||(St[t]=!0,R(...e))}function Et(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Dt={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},Ot=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},kt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),At=1234567,jt=Math.PI/180,Mt=180/Math.PI;function Nt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(kt[e&255]+kt[e>>8&255]+kt[e>>16&255]+kt[e>>24&255]+`-`+kt[t&255]+kt[t>>8&255]+`-`+kt[t>>16&15|64]+kt[t>>24&255]+`-`+kt[n&63|128]+kt[n>>8&255]+`-`+kt[n>>16&255]+kt[n>>24&255]+kt[r&255]+kt[r>>8&255]+kt[r>>16&255]+kt[r>>24&255]).toLowerCase()}function Pt(e,t,n){return Math.max(t,Math.min(n,e))}function Ft(e,t){return(e%t+t)%t}function It(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Lt(e,t,n){return e===t?0:(n-e)/(t-e)}function Rt(e,t,n){return(1-n)*e+n*t}function zt(e,t,n,r){return Rt(e,t,1-Math.exp(-n*r))}function Bt(e,t=1){return t-Math.abs(Ft(e,t*2)-t)}function Vt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Ht(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Ut(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Wt(e,t){return e+Math.random()*(t-e)}function Gt(e){return e*(.5-Math.random())}function Kt(e){e!==void 0&&(At=e);let t=At+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qt(e){return e*jt}function Jt(e){return e*Mt}function Yt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Xt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Zt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Qt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:R(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function $t(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function en(e,t){if(t.constructor===Float32Array)return e;let n=$t(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function tn(e,t){if(t.constructor===Float32Array)return e;let n=$t(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var nn={DEG2RAD:jt,RAD2DEG:Mt,generateUUID:Nt,clamp:Pt,euclideanModulo:Ft,mapLinear:It,inverseLerp:Lt,lerp:Rt,damp:zt,pingpong:Bt,smoothstep:Vt,smootherstep:Ht,randInt:Ut,randFloat:Wt,randFloatSpread:Gt,seededRandom:Kt,degToRad:qt,radToDeg:Jt,isPowerOfTwo:Yt,ceilPowerOfTwo:Xt,floorPowerOfTwo:Zt,setQuaternionFromProperEuler:Qt,normalize:tn,denormalize:en},B=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(on.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(on.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return an.copy(this).projectOnVector(e),this.sub(an)}reflect(e){return this.sub(an.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},an=new V,on=new rn,H=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Tt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(sn.makeScale(e,t)),this}rotate(e){return Tt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(sn.makeRotation(-e)),this}translate(e,t){return Tt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(sn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},sn=new H,cn=new H().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ln=new H().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function un(){let e={enabled:!0,workingColorSpace:ft,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=fn(e.r),e.g=fn(e.g),e.b=fn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=pn(e.r),e.g=pn(e.g),e.b=pn(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?pt:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[ft]:{primaries:t,whitePoint:r,transfer:pt,toXYZ:cn,fromXYZ:ln,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:dt},outputColorSpaceConfig:{drawingBufferColorSpace:dt}},[dt]:{primaries:t,whitePoint:r,transfer:mt,toXYZ:cn,fromXYZ:ln,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:dt}}}),e}var dn=un();function fn(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function pn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var mn,hn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{mn===void 0&&(mn=bt(`canvas`)),mn.width=e.width,mn.height=e.height;let t=mn.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=mn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=bt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=fn(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(fn(t[e]/255)*255):t[e]=fn(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},gn=0,_n=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gn++}),this.uuid=Nt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(vn(r[t].image)):e.push(vn(r[t]))}else e=vn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function vn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?hn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var yn=0,bn=new V,xn=class e extends Ot{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=O,i=O,a=M,o=ne,s=_e,c=re,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yn++}),this.uuid=Nt(),this.name=``,this.source=new _n(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(bn).x}get height(){return this.source.getSize(bn).y}get depth(){return this.source.getSize(bn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case D:e.x-=Math.floor(e.x);break;case O:e.x=e.x<0?0:1;break;case k:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case D:e.y-=Math.floor(e.y);break;case O:e.y=e.y<0?0:1;break;case k:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null,xn.DEFAULT_MAPPING=300,xn.DEFAULT_ANISOTROPY=1;var Sn=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this.w=Pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this.w=Pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cn=class extends Ot{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:M,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Sn(0,0,e,t),this.scissorTest=!1,this.viewport=new Sn(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new xn({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:M,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new _n(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},wn=class extends Cn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Tn=class extends xn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=A,this.minFilter=A,this.wrapR=O,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},En=class extends xn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=A,this.minFilter=A,this.wrapR=O,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Dn=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/On.setFromMatrixColumn(e,0).length(),i=1/On.setFromMatrixColumn(e,1).length(),a=1/On.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(An,e,jn)}lookAt(e,t,n){let r=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Mn.crossVectors(n,Pn),Mn.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Mn.crossVectors(n,Pn)),Mn.normalize(),Nn.crossVectors(Pn,Mn),r[0]=Mn.x,r[4]=Nn.x,r[8]=Pn.x,r[1]=Mn.y,r[5]=Nn.y,r[9]=Pn.y,r[2]=Mn.z,r[6]=Nn.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],te=r[7],ne=r[11],re=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*j+c*ne,i[12]=a*w+o*O+s*ee+c*re,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*j+f*ne,i[13]=l*w+u*O+d*ee+f*re,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*j+g*ne,i[14]=p*w+m*O+h*ee+g*re,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*j+b*ne,i[15]=_*w+v*O+y*ee+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=On.set(r[0],r[1],r[2]).length(),o=On.set(r[4],r[5],r[6]).length(),s=On.set(r[8],r[9],r[10]).length();i<0&&(a=-a),kn.copy(this);let c=1/a,l=1/o,u=1/s;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=l,kn.elements[5]*=l,kn.elements[6]*=l,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,t.setFromRotationMatrix(kn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=_t,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=_t,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},On=new V,kn=new Dn,An=new V(0,0,0),jn=new V(1,1,1),Mn=new V,Nn=new V,Pn=new V,Fn=new Dn,In=new rn,Ln=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Pt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Pt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return In.setFromEuler(this),this.setFromQuaternion(In,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER=`XYZ`;var Rn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},zn=0,Bn=new V,Vn=new rn,Hn=new Dn,Un=new V,Wn=new V,Gn=new V,Kn=new rn,qn=new V(1,0,0),Jn=new V(0,1,0),Yn=new V(0,0,1),Xn={type:`added`},Zn={type:`removed`},Qn={type:`childadded`,child:null},$n={type:`childremoved`,child:null},er=class e extends Ot{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zn++}),this.uuid=Nt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new Ln,r=new rn,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Dn},normalMatrix:{value:new H}}),this.matrix=new Dn,this.matrixWorld=new Dn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.multiply(Vn),this}rotateOnWorldAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.premultiply(Vn),this}rotateX(e){return this.rotateOnAxis(qn,e)}rotateY(e){return this.rotateOnAxis(Jn,e)}rotateZ(e){return this.rotateOnAxis(Yn,e)}translateOnAxis(e,t){return Bn.copy(e).applyQuaternion(this.quaternion),this.position.add(Bn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qn,e)}translateY(e){return this.translateOnAxis(Jn,e)}translateZ(e){return this.translateOnAxis(Yn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Un.copy(e):Un.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Wn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Wn,Un,this.up):Hn.lookAt(Un,Wn,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),Vn.setFromRotationMatrix(Hn),this.quaternion.premultiply(Vn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xn),Qn.child=e,this.dispatchEvent(Qn),Qn.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zn),$n.child=e,this.dispatchEvent($n),$n.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xn),Qn.child=e,this.dispatchEvent(Qn),Qn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wn,e,Gn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wn,Kn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};er.DEFAULT_UP=new V(0,1,0),er.DEFAULT_MATRIX_AUTO_UPDATE=!0,er.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tr=class extends er{constructor(){super(),this.isGroup=!0,this.type=`Group`}},nr={type:`move`},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nr)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new tr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ir={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},or={h:0,s:0,l:0};function sr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var U=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dn.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=dn.workingColorSpace){return this.r=e,this.g=t,this.b=n,dn.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=dn.workingColorSpace){if(e=Ft(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=sr(i,r,e+1/3),this.g=sr(i,r,e),this.b=sr(i,r,e-1/3)}return dn.colorSpaceToWorking(this,r),this}setStyle(e,t=dt){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){let n=ir[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fn(e.r),this.g=fn(e.g),this.b=fn(e.b),this}copyLinearToSRGB(e){return this.r=pn(e.r),this.g=pn(e.g),this.b=pn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return dn.workingToColorSpace(cr.copy(this),e),Math.round(Pt(cr.r*255,0,255))*65536+Math.round(Pt(cr.g*255,0,255))*256+Math.round(Pt(cr.b*255,0,255))}getHexString(e=dt){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dn.workingColorSpace){dn.workingToColorSpace(cr.copy(this),t);let n=cr.r,r=cr.g,i=cr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=dn.workingColorSpace){return dn.workingToColorSpace(cr.copy(this),t),e.r=cr.r,e.g=cr.g,e.b=cr.b,e}getStyle(e=dt){dn.workingToColorSpace(cr.copy(this),e);let t=cr.r,n=cr.g,r=cr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+t,ar.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ar),e.getHSL(or);let n=Rt(ar.h,or.h,t),r=Rt(ar.s,or.s,t),i=Rt(ar.l,or.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cr=new U;U.NAMES=ir;var lr=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new U(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ur=class extends er{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},dr=new V,fr=new V,pr=new V,mr=new V,hr=new V,gr=new V,_r=new V,vr=new V,yr=new V,br=new V,xr=new Sn,Sr=new Sn,Cr=new Sn,wr=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),dr.subVectors(e,t),r.cross(dr);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){dr.subVectors(r,t),fr.subVectors(n,t),pr.subVectors(e,t);let a=dr.dot(dr),o=dr.dot(fr),s=dr.dot(pr),c=fr.dot(fr),l=fr.dot(pr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,mr)!==null&&mr.x>=0&&mr.y>=0&&mr.x+mr.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,mr)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,mr.x),s.addScaledVector(a,mr.y),s.addScaledVector(o,mr.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return xr.setScalar(0),Sr.setScalar(0),Cr.setScalar(0),xr.fromBufferAttribute(e,t),Sr.fromBufferAttribute(e,n),Cr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(xr,i.x),a.addScaledVector(Sr,i.y),a.addScaledVector(Cr,i.z),a}static isFrontFacing(e,t,n,r){return dr.subVectors(n,t),fr.subVectors(e,t),dr.cross(fr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dr.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),dr.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;hr.subVectors(r,n),gr.subVectors(i,n),vr.subVectors(e,n);let s=hr.dot(vr),c=gr.dot(vr);if(s<=0&&c<=0)return t.copy(n);yr.subVectors(e,r);let l=hr.dot(yr),u=gr.dot(yr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(hr,a);br.subVectors(e,i);let f=hr.dot(br),p=gr.dot(br);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(gr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return _r.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(_r,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(hr,a).addScaledVector(gr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Tr=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Dr):Dr.fromBufferAttribute(r,t),Dr.applyMatrix4(e.matrixWorld),this.expandByPoint(Dr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Or.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Or.copy(e.boundingBox)),Or.applyMatrix4(e.matrixWorld),this.union(Or)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dr),Dr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),Ir.subVectors(this.max,Fr),kr.subVectors(e.a,Fr),Ar.subVectors(e.b,Fr),jr.subVectors(e.c,Fr),Mr.subVectors(Ar,kr),Nr.subVectors(jr,Ar),Pr.subVectors(kr,jr);let t=[0,-Mr.z,Mr.y,0,-Nr.z,Nr.y,0,-Pr.z,Pr.y,Mr.z,0,-Mr.x,Nr.z,0,-Nr.x,Pr.z,0,-Pr.x,-Mr.y,Mr.x,0,-Nr.y,Nr.x,0,-Pr.y,Pr.x,0];return!zr(t,kr,Ar,jr,Ir)||(t=[1,0,0,0,1,0,0,0,1],!zr(t,kr,Ar,jr,Ir))?!1:(Lr.crossVectors(Mr,Nr),t=[Lr.x,Lr.y,Lr.z],zr(t,kr,Ar,jr,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Er)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Er=[new V,new V,new V,new V,new V,new V,new V,new V],Dr=new V,Or=new Tr,kr=new V,Ar=new V,jr=new V,Mr=new V,Nr=new V,Pr=new V,Fr=new V,Ir=new V,Lr=new V,Rr=new V;function zr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Rr.fromArray(e,a);let o=i.x*Math.abs(Rr.x)+i.y*Math.abs(Rr.y)+i.z*Math.abs(Rr.z),s=t.dot(Rr),c=n.dot(Rr),l=r.dot(Rr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Br=new V,Vr=new B,Hr=0,Ur=class extends Ot{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=gt,this.updateRanges=[],this.gpuType=ce,this.version=0,this._normalizationScale=e===void 0?void 0:$t(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix3(e),this.setXY(t,Vr.x,Vr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Br.fromBufferAttribute(this,t),Br.applyMatrix3(e),this.setXYZ(t,Br.x,Br.y,Br.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Br.fromBufferAttribute(this,t),Br.applyMatrix4(e),this.setXYZ(t,Br.x,Br.y,Br.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Br.fromBufferAttribute(this,t),Br.applyNormalMatrix(e),this.setXYZ(t,Br.x,Br.y,Br.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Br.fromBufferAttribute(this,t),Br.transformDirection(e),this.setXYZ(t,Br.x,Br.y,Br.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?en(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?tn(e,this.array):Math.round(e*t)}},Wr=class extends Ur{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Gr=class extends Ur{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Kr=class extends Ur{constructor(e,t,n){super(new Float32Array(e),t,n)}},qr=new Tr,Jr=new V,Yr=new V,Xr=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?qr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);let t=Jr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Jr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(Yr)),this.expandByPoint(Jr.copy(e.center).sub(Yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zr=0,Qr=new Dn,$r=new er,ei=new V,ti=new Tr,ni=new Tr,ri=new V,ii=class e extends Ot{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zr++}),this.uuid=Nt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(vt(e)?Gr:Wr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new H().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qr.makeRotationFromQuaternion(e),this.applyMatrix4(Qr),this}rotateX(e){return Qr.makeRotationX(e),this.applyMatrix4(Qr),this}rotateY(e){return Qr.makeRotationY(e),this.applyMatrix4(Qr),this}rotateZ(e){return Qr.makeRotationZ(e),this.applyMatrix4(Qr),this}translate(e,t,n){return Qr.makeTranslation(e,t,n),this.applyMatrix4(Qr),this}scale(e,t,n){return Qr.makeScale(e,t,n),this.applyMatrix4(Qr),this}lookAt(e){return $r.lookAt(e),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Kr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ti.setFromBufferAttribute(n),this.morphTargetsRelative?(ri.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(ri),ri.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(ri)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);else if(e){let n=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ni.setFromBufferAttribute(n),this.morphTargetsRelative?(ri.addVectors(ti.min,ni.min),ti.expandByPoint(ri),ri.addVectors(ti.max,ni.max),ti.expandByPoint(ri)):(ti.expandByPoint(ni.min),ti.expandByPoint(ni.max))}ti.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)ri.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(ri));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)ri.fromBufferAttribute(a,t),o&&(ei.fromBufferAttribute(e,t),ri.add(ei)),r=Math.max(r,n.distanceToSquared(ri))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Ur(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let l=new V,u=new V,d=new V,f=new B,p=new B,m=new B,h=new V,g=new V;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new V,b=new V,x=new V,S=new V;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Ur(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ri.fromBufferAttribute(e,t),ri.normalize(),e.setXYZ(t,ri.x,ri.y,ri.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Ur(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},ai=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=gt,this.updateRanges=[],this.version=0,this.uuid=Nt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=oi(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=oi(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function oi(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=Nt()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var si=new V,ci=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:$t(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)si.fromBufferAttribute(this,t),si.applyMatrix4(e),this.setXYZ(t,si.x,si.y,si.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)si.fromBufferAttribute(this,t),si.applyNormalMatrix(e),this.setXYZ(t,si.x,si.y,si.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)si.fromBufferAttribute(this,t),si.transformDirection(e),this.setXYZ(t,si.x,si.y,si.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Ct(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Ur(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ct(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?en(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?tn(e,this.data.array):Math.round(e*t)}},li=new V,ui=new V,di=new H,fi=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=li.subVectors(n,t).cross(ui.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(li),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||di.getNormalMatrix(e),r=this.coplanarPoint(li).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},pi=0,mi=class extends Ot{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pi++}),this.uuid=Nt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new U(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ht,this.stencilZFail=ht,this.stencilZPass=ht,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new U().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new fi().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new B().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new B().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},hi=class extends mi{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gi,_i=new V,vi=new V,yi=new V,bi=new B,xi=new B,Si=new Dn,Ci=new V,wi=new V,Ti=new V,Ei=new B,Di=new B,Oi=new B,ki=class extends er{constructor(e=new hi){if(super(),this.isSprite=!0,this.type=`Sprite`,gi===void 0){gi=new ii;let e=new ai(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);gi.setIndex([0,1,2,0,2,3]),gi.setAttribute(`position`,new ci(e,3,0,!1)),gi.setAttribute(`uv`,new ci(e,2,3,!1))}this.geometry=gi,this.material=e,this.center=new B(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&z(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),vi.setFromMatrixScale(this.matrixWorld),Si.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),yi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vi.multiplyScalar(-yi.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Ai(Ci.set(-.5,-.5,0),yi,a,vi,r,i),Ai(wi.set(.5,-.5,0),yi,a,vi,r,i),Ai(Ti.set(.5,.5,0),yi,a,vi,r,i),Ei.set(0,0),Di.set(1,0),Oi.set(1,1);let o=e.ray.intersectTriangle(Ci,wi,Ti,!1,_i);if(o===null&&(Ai(wi.set(-.5,.5,0),yi,a,vi,r,i),Di.set(0,1),o=e.ray.intersectTriangle(Ci,Ti,wi,!1,_i),o===null))return;let s=e.ray.origin.distanceTo(_i);s<e.near||s>e.far||t.push({distance:s,point:_i.clone(),uv:wr.getInterpolation(_i,Ci,wi,Ti,Ei,Di,Oi,new B),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Ai(e,t,n,r,i,a){bi.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?xi.copy(bi):(xi.x=a*bi.x-i*bi.y,xi.y=i*bi.x+a*bi.y),e.copy(t),e.x+=xi.x,e.y+=xi.y,e.applyMatrix4(Si)}var ji=new V,Mi=new V,Ni=new V,Pi=new V,Fi=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Mi.copy(e).add(t).multiplyScalar(.5),Ni.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(Mi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ni),o=Pi.dot(this.direction),s=-Pi.dot(Ni),c=Pi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Mi).addScaledVector(Ni,d),f}intersectSphere(e,t){if(e.radius<0)return null;ji.subVectors(e.center,this.origin);let n=ji.dot(this.direction),r=ji.dot(ji)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let te=S/w,ne=C/w,re=1/w,ie=T-te*D,ae=E-ne*D,oe=O-te*A,se=k-ne*A,N=j-te*M,ce=ee-ne*M,le=N*se-ce*oe,ue=ie*ce-ae*N,de=oe*ae-se*ie;if(r){if(le<0||ue<0||de<0)return null}else if((le<0||ue<0||de<0)&&(le>0||ue>0||de>0))return null;let fe=le+ue+de;if(fe===0)return null;let pe=re*(le*D+ue*A+de*M);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ii=class extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Li=new Dn,Ri=new Fi,zi=new Xr,Bi=new V,Vi=new V,Hi=new V,Ui=new V,Wi=new V,Gi=new V,Ki=new V,qi=new V,Ji=class extends er{constructor(e=new ii,t=new Ii){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Gi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Wi.fromBufferAttribute(s,e),a?Gi.addScaledVector(Wi,r):Gi.addScaledVector(Wi.sub(t),r))}t.add(Gi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zi.copy(n.boundingSphere),zi.applyMatrix4(i),Ri.copy(e.ray).recast(e.near),zi.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(zi,Bi)===null||Ri.origin.distanceToSquared(Bi)>(e.far-e.near)**2)||(Li.copy(i).invert(),Ri.copy(e.ray).applyMatrix4(Li),(n.boundingBox===null||Ri.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Xi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Xi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Xi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Xi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Yi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;qi.copy(s),qi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(qi);return l<n.near||l>n.far?null:{distance:l,point:qi.clone(),object:e}}function Xi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Vi),e.getVertexPosition(c,Hi),e.getVertexPosition(l,Ui);let u=Yi(e,t,n,r,Vi,Hi,Ui,Ki);if(u){let e=new V;wr.getBarycoord(Ki,Vi,Hi,Ui,e),i&&(u.uv=wr.getInterpolatedAttribute(i,s,c,l,e,new B)),a&&(u.uv1=wr.getInterpolatedAttribute(a,s,c,l,e,new B)),o&&(u.normal=wr.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};wr.getNormal(Vi,Hi,Ui,t.normal),u.face=t,u.barycoord=e}return u}var Zi=class extends xn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=A,l=A,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qi=class extends Ur{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},$i=new Dn,ea=new Dn,ta=[],na=new Tr,ra=new Dn,ia=new Ji,aa=new Xr,oa=class extends Ji{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,ra)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$i),na.copy(e.boundingBox).applyMatrix4($i),this.boundingBox.union(na)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$i),aa.copy(e.boundingSphere).applyMatrix4($i),this.boundingSphere.union(aa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ia.geometry=this.geometry,ia.material=this.material,ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),aa.copy(this.boundingSphere),aa.applyMatrix4(n),e.ray.intersectsSphere(aa)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,$i),ea.multiplyMatrices(n,$i),ia.matrixWorld=ea,ia.raycast(e,ta);for(let e=0,n=ta.length;e<n;e++){let n=ta[e];n.instanceId=i,n.object=this,t.push(n)}ta.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Qi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zi(new Float32Array(r*this.count),r,this.count,be,ce));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},sa=new Xr,ca=new B(.5,.5),la=new V,ua=class{constructor(e=new fi,t=new fi,n=new fi,r=new fi,i=new fi,a=new fi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_t,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),sa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sa)}intersectsSprite(e){return sa.center.set(0,0,0),sa.radius=.7071067811865476+ca.distanceTo(e.center),sa.applyMatrix4(e.matrixWorld),this.intersectsSphere(sa)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(la.x=r.normal.x>0?e.max.x:e.min.x,la.y=r.normal.y>0?e.max.y:e.min.y,la.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},da=new Dn,fa=class e{constructor(){this.coordinateSystem=_t,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];da.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new ua),n[e].setFromProjectionMatrix(da,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new ua),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},pa=class extends xn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ma=class extends xn{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ha=class extends xn{constructor(e,t,n=N,r,i,a,o=A,s=A,c,l=ve,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _n(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ga=class extends ha{constructor(e,t=N,n=301,r,i,a=A,o=A,s,c=ve){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},_a=class extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},va=class e extends ii{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Kr(c,3)),this.setAttribute(`normal`,new Kr(l,3)),this.setAttribute(`uv`,new Kr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ya=class e extends ii{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new V,g=new V;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new Kr(o,3)),this.setAttribute(`normal`,new Kr(s,3)),this.setAttribute(`uv`,new Kr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ba=class e extends ii{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new V,l=new B;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Kr(a,3)),this.setAttribute(`normal`,new Kr(o,3)),this.setAttribute(`uv`,new Kr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},xa=class e extends ii{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Kr(u,3)),this.setAttribute(`normal`,new Kr(d,3)),this.setAttribute(`uv`,new Kr(f,2));function _(){let a=new V,_=new V,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new B,m=new V,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Sa=class e extends ii{constructor(e=[new B(0,-.5),new B(.5,0),new B(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Pt(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new V,d=new B,f=new V,p=new V,m=new V,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:m.normalize(),s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new Kr(a,3)),this.setAttribute(`uv`,new Kr(o,2)),this.setAttribute(`normal`,new Kr(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},Ca=class e extends ii{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Kr(p,3)),this.setAttribute(`normal`,new Kr(m,3)),this.setAttribute(`uv`,new Kr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},wa=class e extends ii{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new V,f=new V,p=new V;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Kr(c,3)),this.setAttribute(`normal`,new Kr(l,3)),this.setAttribute(`uv`,new Kr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ta(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Da(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Da(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Ea(e){let t={};for(let n=0;n<e.length;n++){let r=Ta(e[n]);for(let e in r)t[e]=r[e]}return t}function Da(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Oa(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ka(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:dn.workingColorSpace}var Aa={clone:Ta,merge:Ea},ja=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ma=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Na=class extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ja,this.fragmentShader=Ma,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ta(e.uniforms),this.uniformsGroups=Oa(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new U().setHex(r.value);break;case`v2`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Sn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Dn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Pa=class extends Na{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Fa=class extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new U(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ia=class extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=ut,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},La=class extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ra(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function za(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ba=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Va=class extends Ba{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:st,endingEnd:st}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ct:i=e,o=2*t-n;break;case lt:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case ct:a=e,s=2*n-t;break;case lt:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ha=class extends Ba{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ua=class extends Ba{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Wa=class extends Ba{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=qa(n,t,g,y,r);i[p]=Ga(x,o,_,b,m)}return i}};function Ga(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ka(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function qa(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Ga(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ka(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ja=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ra(t,this.TimeBufferType),this.values=Ra(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ra(e.times,Array),values:Ra(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),za(e.settings)&&(n.settings={inTangents:Ra(e.settings.inTangents,Array),outTangents:Ra(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Wa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case rt:t=this.InterpolantFactoryMethodDiscrete;break;case it:t=this.InterpolantFactoryMethodLinear;break;case at:t=this.InterpolantFactoryMethodSmooth;break;case ot:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rt;case this.InterpolantFactoryMethodLinear:return it;case this.InterpolantFactoryMethodSmooth:return at;case this.InterpolantFactoryMethodBezier:return ot}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;za(this.settings)&&(Ya(this.settings.inTangents,e),Ya(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;za(this.settings)&&(Xa(this.settings.inTangents,e),Xa(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&yt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===at,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,za(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ya(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Xa(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ja.prototype.ValueTypeName=``,Ja.prototype.TimeBufferType=Float32Array,Ja.prototype.ValueBufferType=Float32Array,Ja.prototype.DefaultInterpolation=it;var Za=class extends Ja{constructor(e,t,n){super(e,t,n)}};Za.prototype.ValueTypeName=`bool`,Za.prototype.ValueBufferType=Array,Za.prototype.DefaultInterpolation=rt,Za.prototype.InterpolantFactoryMethodLinear=void 0,Za.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends Ja{constructor(e,t,n,r){super(e,t,n,r)}};Qa.prototype.ValueTypeName=`color`;var $a=class extends Ja{constructor(e,t,n,r){super(e,t,n,r)}};$a.prototype.ValueTypeName=`number`;var eo=class extends Ba{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)rn.slerpFlat(i,0,a,c-o,a,c,s);return i}},to=class extends Ja{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new eo(this.times,this.values,this.getValueSize(),e)}};to.prototype.ValueTypeName=`quaternion`,to.prototype.InterpolantFactoryMethodSmooth=void 0;var no=class extends Ja{constructor(e,t,n){super(e,t,n)}};no.prototype.ValueTypeName=`string`,no.prototype.ValueBufferType=Array,no.prototype.DefaultInterpolation=rt,no.prototype.InterpolantFactoryMethodLinear=void 0,no.prototype.InterpolantFactoryMethodSmooth=void 0;var ro=class extends Ja{constructor(e,t,n,r){super(e,t,n,r)}};ro.prototype.ValueTypeName=`vector`;var io={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(ao(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!ao(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function ao(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var oo=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},so=class{constructor(e){this.manager=e===void 0?oo:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},this.priority=`auto`,this.cache=`default`,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};so.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var co=new WeakMap,lo=class extends so{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=io.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=co.get(a);e===void 0&&(e=[],co.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=bt(`img`);function s(){l(),t&&t(this);let n=co.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}co.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),io.remove(`image:${e}`);let n=co.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}co.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),io.add(`image:${e}`,o),i.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}},uo=class extends so{constructor(e){super(e)}load(e,t,n,r){let i=new xn,a=new lo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},fo=class extends er{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new U(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},po=class extends fo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(er.DEFAULT_UP),this.updateMatrix(),this.groundColor=new U(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},mo=new Dn,ho=new V,go=new V,_o=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new B(512,512),this.mapType=re,this.map=null,this.mapPass=null,this.matrix=new Dn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ua,this._frameExtents=new B(1,1),this._viewportCount=1,this._viewports=[new Sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ho.setFromMatrixPosition(e.matrixWorld),t.position.copy(ho),go.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(go),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){mo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(mo,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(mo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vo=new V,yo=new rn,bo=new V,xo=class extends er{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Dn,this.projectionMatrix=new Dn,this.projectionMatrixInverse=new Dn,this.coordinateSystem=_t,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vo,yo,bo),bo.x===1&&bo.y===1&&bo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,yo,bo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(vo,yo,bo),bo.x===1&&bo.y===1&&bo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,yo,bo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},So=new V,Co=new B,wo=new B,To=class extends xo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(jt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mt*2*Math.atan(Math.tan(jt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){So.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(So.x,So.y).multiplyScalar(-e/So.z),So.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(So.x,So.y).multiplyScalar(-e/So.z)}getViewSize(e,t){return this.getViewBounds(e,Co,wo),t.subVectors(wo,Co)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(jt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Eo=class extends _o{constructor(){super(new To(90,1,.5,500)),this.isPointLightShadow=!0}},Do=class extends fo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Eo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Oo=class extends xo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ko=class extends _o{constructor(){super(new Oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ao=class extends fo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(er.DEFAULT_UP),this.updateMatrix(),this.target=new er,this.shadow=new ko}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},jo=-90,Mo=1,No=class extends er{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new To(jo,Mo,e,t);r.layers=this.layers,this.add(r);let i=new To(jo,Mo,e,t);i.layers=this.layers,this.add(i);let a=new To(jo,Mo,e,t);a.layers=this.layers,this.add(a);let o=new To(jo,Mo,e,t);o.layers=this.layers,this.add(o);let s=new To(jo,Mo,e,t);s.layers=this.layers,this.add(s);let c=new To(jo,Mo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Po=class extends To{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Fo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Io.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Io(){this._document.hidden===!1&&this.reset()}var Lo=`\\[\\]\\.:\\/`,Ro=RegExp(`[\\[\\]\\.:\\/]`,`g`),zo=`[^\\[\\]\\.:\\/]`,Bo=`[^`+Lo.replace(`\\.`,``)+`]`,Vo=`((?:WC+[\\/:])*)`.replace(`WC`,zo),Ho=`(WCOD+)?`.replace(`WCOD`,Bo),Uo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,zo),Wo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,zo),Go=RegExp(`^`+Vo+Ho+Uo+Wo+`$`),Ko=[`material`,`materials`,`bones`,`map`],qo=class{constructor(e,t,n){let r=n||Jo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Jo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ro,``)}static parseTrackName(e){let t=Go.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ko.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Jo.Composite=qo,Jo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Jo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Jo.prototype.GetterByBindingType=[Jo.prototype._getValue_direct,Jo.prototype._getValue_array,Jo.prototype._getValue_arrayElement,Jo.prototype._getValue_toArray],Jo.prototype.SetterByBindingTypeAndVersioning=[[Jo.prototype._setValue_direct,Jo.prototype._setValue_direct_setNeedsUpdate,Jo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Jo.prototype._setValue_array,Jo.prototype._setValue_array_setNeedsUpdate,Jo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Jo.prototype._setValue_arrayElement,Jo.prototype._setValue_arrayElement_setNeedsUpdate,Jo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Jo.prototype._setValue_fromArray,Jo.prototype._setValue_fromArray_setNeedsUpdate,Jo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Yo(e,t,n,r){let i=Xo(r);switch(n){case he:return e*t;case be:return e*t/i.components*i.byteLength;case xe:return e*t/i.components*i.byteLength;case Se:return e*t*2/i.components*i.byteLength;case Ce:return e*t*2/i.components*i.byteLength;case ge:return e*t*3/i.components*i.byteLength;case _e:return e*t*4/i.components*i.byteLength;case we:return e*t*4/i.components*i.byteLength;case Te:case Ee:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case De:case Oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ae:case Me:return Math.max(e,16)*Math.max(t,8)/4;case ke:case je:return Math.max(e,8)*Math.max(t,8)/2;case Ne:case Pe:case P:case Ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Fe:case Le:case Re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ze:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case I:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case L:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Be:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ve:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case He:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ue:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case We:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ge:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ke:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case qe:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Je:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ye:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Xe:case Ze:case Qe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case $e:case et:return Math.ceil(e/4)*Math.ceil(t/4)*8;case tt:case nt:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Xo(e){switch(e){case re:case ie:return{byteLength:1,components:1};case oe:case ae:case le:return{byteLength:2,components:1};case ue:case de:return{byteLength:2,components:4};case N:case se:case ce:return{byteLength:4,components:1};case pe:case me:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Zo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Qo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var W={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},G={common:{diffuse:{value:new U(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new U(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new U(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},$o={basic:{uniforms:Ea([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:W.meshbasic_vert,fragmentShader:W.meshbasic_frag},lambert:{uniforms:Ea([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new U(0)},envMapIntensity:{value:1}}]),vertexShader:W.meshlambert_vert,fragmentShader:W.meshlambert_frag},phong:{uniforms:Ea([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new U(0)},specular:{value:new U(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:W.meshphong_vert,fragmentShader:W.meshphong_frag},standard:{uniforms:Ea([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new U(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:W.meshphysical_vert,fragmentShader:W.meshphysical_frag},toon:{uniforms:Ea([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new U(0)}}]),vertexShader:W.meshtoon_vert,fragmentShader:W.meshtoon_frag},matcap:{uniforms:Ea([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:W.meshmatcap_vert,fragmentShader:W.meshmatcap_frag},points:{uniforms:Ea([G.points,G.fog]),vertexShader:W.points_vert,fragmentShader:W.points_frag},dashed:{uniforms:Ea([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:W.linedashed_vert,fragmentShader:W.linedashed_frag},depth:{uniforms:Ea([G.common,G.displacementmap]),vertexShader:W.depth_vert,fragmentShader:W.depth_frag},normal:{uniforms:Ea([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:W.meshnormal_vert,fragmentShader:W.meshnormal_frag},sprite:{uniforms:Ea([G.sprite,G.fog]),vertexShader:W.sprite_vert,fragmentShader:W.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:W.background_vert,fragmentShader:W.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:W.backgroundCube_vert,fragmentShader:W.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:W.cube_vert,fragmentShader:W.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:W.equirect_vert,fragmentShader:W.equirect_frag},distance:{uniforms:Ea([G.common,G.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:W.distance_vert,fragmentShader:W.distance_frag},shadow:{uniforms:Ea([G.lights,G.fog,{color:{value:new U(0)},opacity:{value:1}}]),vertexShader:W.shadow_vert,fragmentShader:W.shadow_frag}};$o.physical={uniforms:Ea([$o.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new H},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new U(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new U(0)},specularColor:{value:new U(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:W.meshphysical_vert,fragmentShader:W.meshphysical_frag};var es={r:0,b:0,g:0},ts=new Dn,ns=new H;ns.set(-1,0,0,0,1,0,0,0,1);function rs(e,t,n,r,i,a){let o=new U(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new Ji(new va(1,1,1),new Na({name:`BackgroundCubeMaterial`,uniforms:Ta($o.backgroundCube.uniforms),vertexShader:$o.backgroundCube.vertexShader,fragmentShader:$o.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ts.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ns),l.material.toneMapped=dn.getTransfer(i.colorSpace)!==mt,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Ji(new Ca(2,2),new Na({name:`BackgroundMaterial`,uniforms:Ta($o.background.uniforms),vertexShader:$o.background.vertexShader,fragmentShader:$o.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=dn.getTransfer(i.colorSpace)!==mt,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(es,ka(e)),n.buffers.color.setClear(es.r,es.g,es.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function is(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function as(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function os(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&R(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function ss(e){let t=this,n=null,r=0,i=!1,a=!1,o=new fi,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var cs=class extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new pa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new va(5,5,5),i=new Na({name:`CubemapFromEquirect`,uniforms:Ta(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Ji(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=M),new No(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},ls=256,us=3,ds=20,fs=256,ps=16,ms=3,hs=new V,gs=new U,_s=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new No(1,10,null),this._boxMesh=new Ji(new va(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=hs}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(gs));let h=new No(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ws(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ls,Zt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?ls:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=vs(e,!1,!1),n=Math.log2(e)-us;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=vs(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=ws()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Cs()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=bs(),this._integrationMaterial=xs());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/ps);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-ms)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(fs*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Ss());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function vs(e,t,n){return new cs(e,{minFilter:ne,generateMipmaps:t,type:le,colorSpace:ft,depthBuffer:n})}function ys(e,t,n){return new Na({name:e,uniforms:t,vertexShader:W.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function bs(){return ys(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${fs}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function xs(){return ys(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ps}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ss(){return ys(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ds}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Cs(){return ys(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ws(){return ys(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ts(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new cs(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new _s(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new _s(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Es(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Tt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ds(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?Gr:Wr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Os(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ks(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function As(e,t,n){let r=new WeakMap,i=new Sn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Tn(h,p,m,u);g.type=ce,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new B(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function js(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ms={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Ns(e,t,n,r,i,a){let o=new wn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new ii;u.setAttribute(`position`,new Kr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Kr([0,2,0,0,2,0],2));let d=new Pa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Ji(u,d),p=new Oo(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new wn(t,n,{type:le,depthBuffer:!1,stencilBuffer:!1}),c=new wn(t,n,{type:le,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new ha(t,n),a===!0&&(l.format=ye,l.type=fe)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},dn.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Ms[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Ps=new xn,Fs=new ha(1,1),Is=new ga(1),Ls=new Tn,Rs=new En,zs=new pa,Bs=[],Vs=[],Hs=new Float32Array(16),Us=new Float32Array(9),Ws=new Float32Array(4);function Gs(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Bs[i];if(a===void 0&&(a=new Float32Array(i),Bs[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ks(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function qs(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Js(e,t){let n=Vs[t];n===void 0&&(n=new Int32Array(t),Vs[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ys(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Xs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ks(n,t))return;e.uniform2fv(this.addr,t),qs(n,t)}}function Zs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ks(n,t))return;e.uniform3fv(this.addr,t),qs(n,t)}}function Qs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ks(n,t))return;e.uniform4fv(this.addr,t),qs(n,t)}}function $s(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ks(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),qs(n,t)}else{if(Ks(n,r))return;Ws.set(r),e.uniformMatrix2fv(this.addr,!1,Ws),qs(n,r)}}function ec(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ks(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),qs(n,t)}else{if(Ks(n,r))return;Us.set(r),e.uniformMatrix3fv(this.addr,!1,Us),qs(n,r)}}function tc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ks(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),qs(n,t)}else{if(Ks(n,r))return;Hs.set(r),e.uniformMatrix4fv(this.addr,!1,Hs),qs(n,r)}}function nc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function rc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ks(n,t))return;e.uniform2iv(this.addr,t),qs(n,t)}}function ic(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ks(n,t))return;e.uniform3iv(this.addr,t),qs(n,t)}}function ac(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ks(n,t))return;e.uniform4iv(this.addr,t),qs(n,t)}}function oc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function sc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ks(n,t))return;e.uniform2uiv(this.addr,t),qs(n,t)}}function cc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ks(n,t))return;e.uniform3uiv(this.addr,t),qs(n,t)}}function lc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ks(n,t))return;e.uniform4uiv(this.addr,t),qs(n,t)}}function uc(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function dc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?uc(Fs):Ps,n.setTexture2D(t||a,i)}function fc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Rs,i)}function pc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?uc(Is):zs,n.setTextureCube(t||a,i)}function mc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ls,i)}function hc(e){switch(e){case 5126:return Ys;case 35664:return Xs;case 35665:return Zs;case 35666:return Qs;case 35674:return $s;case 35675:return ec;case 35676:return tc;case 5124:case 35670:return nc;case 35667:case 35671:return rc;case 35668:case 35672:return ic;case 35669:case 35673:return ac;case 5125:return oc;case 36294:return sc;case 36295:return cc;case 36296:return lc;case 35678:case 36198:case 36298:case 36306:case 35682:return dc;case 35679:case 36299:case 36307:return fc;case 35680:case 36300:case 36308:case 36293:return pc;case 36289:case 36303:case 36311:case 36292:return mc}}function gc(e,t){e.uniform1fv(this.addr,t)}function _c(e,t){let n=Gs(t,this.size,2);e.uniform2fv(this.addr,n)}function vc(e,t){let n=Gs(t,this.size,3);e.uniform3fv(this.addr,n)}function yc(e,t){let n=Gs(t,this.size,4);e.uniform4fv(this.addr,n)}function bc(e,t){let n=Gs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function xc(e,t){let n=Gs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Sc(e,t){let n=Gs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Cc(e,t){e.uniform1iv(this.addr,t)}function wc(e,t){e.uniform2iv(this.addr,t)}function Tc(e,t){e.uniform3iv(this.addr,t)}function Ec(e,t){e.uniform4iv(this.addr,t)}function Dc(e,t){e.uniform1uiv(this.addr,t)}function Oc(e,t){e.uniform2uiv(this.addr,t)}function kc(e,t){e.uniform3uiv(this.addr,t)}function Ac(e,t){e.uniform4uiv(this.addr,t)}function jc(e,t,n){let r=this.cache,i=t.length,a=Js(n,i);Ks(r,a)||(e.uniform1iv(this.addr,a),qs(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?uc(Fs):Ps;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Mc(e,t,n){let r=this.cache,i=t.length,a=Js(n,i);Ks(r,a)||(e.uniform1iv(this.addr,a),qs(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Rs,a[e])}function Nc(e,t,n){let r=this.cache,i=t.length,a=Js(n,i);Ks(r,a)||(e.uniform1iv(this.addr,a),qs(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?uc(Is):zs;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Pc(e,t,n){let r=this.cache,i=t.length,a=Js(n,i);Ks(r,a)||(e.uniform1iv(this.addr,a),qs(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ls,a[e])}function Fc(e){switch(e){case 5126:return gc;case 35664:return _c;case 35665:return vc;case 35666:return yc;case 35674:return bc;case 35675:return xc;case 35676:return Sc;case 5124:case 35670:return Cc;case 35667:case 35671:return wc;case 35668:case 35672:return Tc;case 35669:case 35673:return Ec;case 5125:return Dc;case 36294:return Oc;case 36295:return kc;case 36296:return Ac;case 35678:case 36198:case 36298:case 36306:case 35682:return jc;case 35679:case 36299:case 36307:return Mc;case 35680:case 36300:case 36308:case 36293:return Nc;case 36289:case 36303:case 36311:case 36292:return Pc}}var Ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hc(t.type)}},Lc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fc(t.type)}},Rc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},zc=/(\w+)(\])?(\[|\.)?/g;function Bc(e,t){e.seq.push(t),e.map[t.id]=t}function Vc(e,t,n){let r=e.name,i=r.length;for(zc.lastIndex=0;;){let a=zc.exec(r),o=zc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Bc(n,l===void 0?new Ic(s,e,t):new Lc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Rc(s),Bc(n,e)),n=e}}}var Hc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Vc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Uc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Wc=37297,Gc=0;function Kc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var qc=new H;function Jc(e){dn._getMatrix(qc,dn.workingColorSpace,e);let t=`mat3( ${qc.elements.map(e=>e.toFixed(4))} )`;switch(dn.getTransfer(e)){case pt:return[t,`LinearTransferOETF`];case mt:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Yc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Kc(e.getShaderSource(t),r)}return i}function Xc(e,t){let n=Jc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Zc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Qc(e,t){let n=Zc[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var $c=new V;function el(){return dn.getLuminanceCoefficients($c),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${$c.x.toFixed(4)}, ${$c.y.toFixed(4)}, ${$c.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function tl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(il).join(`
`)}function nl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function rl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function il(e){return e!==``}function al(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ol(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sl=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(e){return e.replace(sl,ll)}function ll(e,t){let n=W[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return cl(n)}var ul=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dl(e){return e.replace(ul,fl)}function fl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function pl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var ml={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function hl(e){return ml[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var gl={302:`ENVMAP_MODE_REFRACTION`};function _l(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:gl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var vl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function yl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:vl[e.combine]||`ENVMAP_BLENDING_NONE`}function bl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=hl(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=_l(n),d=yl(n),f=tl(n),p=nl(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(il).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(il).join(`
`),g.length>0&&(g+=`
`)):(h=[pl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(il).join(`
`),g=[pl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:W.tonemapping_pars_fragment,n.toneMapping===0?``:Qc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,W.colorspace_pars_fragment,Xc(`linearToOutputTexel`,n.outputColorSpace),el(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(il).join(`
`)),o=cl(o),o=al(o,n),o=ol(o,n),s=cl(s),s=al(s,n),s=ol(s,n),o=dl(o),s=dl(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Uc(i,i.VERTEX_SHADER,v),x=Uc(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Yc(i,b,`vertex`),n=Yc(i,x,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Hc(i,m),w=rl(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Wc)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Gc++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var xl=0,Sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cl(e),t.set(e,n)),n}},Cl=class{constructor(e){this.id=xl++,this.code=e,this.usedTimes=0}};function wl(e){return e===1030||e===37490||e===36285}function Tl(e,t,n,r,i,a){let o=new Rn,s=new Sl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=$o[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),ee=m.isInstancedMesh===!0,M=m.isBatchedMesh===!0,te=!!i.map,ne=!!i.matcap,re=!!b,ie=re&&b.isPMREMTexture===!0,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,N=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,ue=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.diffuseRoughness>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=fe&&!!i.anisotropyMap,xe=pe&&!!i.clearcoatMap,Se=pe&&!!i.clearcoatNormalMap,Ce=pe&&!!i.clearcoatRoughnessMap,we=me&&!!i.diffuseRoughnessMap,Te=_e&&!!i.iridescenceMap,Ee=_e&&!!i.iridescenceThicknessMap,De=ve&&!!i.sheenColorMap,Oe=ve&&!!i.sheenRoughnessMap,ke=!!i.specularMap,Ae=!!i.specularColorMap,je=!!i.specularIntensityMap,Me=ye&&!!i.transmissionMap,Ne=ye&&!!i.thicknessMap,Pe=!!i.gradientMap,Fe=!!i.alphaMap,P=i.alphaTest>0,Ie=!!i.alphaHash,Le=!!i.extensions,Re=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Re=e.toneMapping);let F=ie?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,ze={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:M,batchingColor:M&&m._colorsTexture!==null,instancing:ee,instancingColor:ee&&m.instanceColor!==null,instancingMorph:ee&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:dn.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:ne,envMap:re,envMapMode:re&&b.mapping,envMapPMREM:ie,envMapMaxLod:ie?F.length-1:null,envMapSize:ie?F[0].width:null,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:N,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:N&&i.normalMapType===1,normalMapTangentSpace:N&&i.normalMapType===0,packedNormalMap:N&&i.normalMapType===0&&wl(i.normalMap.format),metalnessMap:ue,roughnessMap:de,anisotropy:fe,anisotropyMap:be,clearcoat:pe,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,diffuseRoughness:me,diffuseRoughnessMap:we,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:Te,iridescenceThicknessMap:Ee,sheen:ve,sheenColorMap:De,sheenRoughnessMap:Oe,specularMap:ke,specularColorMap:Ae,specularIntensityMap:je,transmission:ye,transmissionMap:Me,thicknessMap:Ne,gradientMap:Pe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Fe,alphaTest:P,alphaHash:Ie,combine:i.combine,mapUv:te&&p(i.map.channel),aoMapUv:ae&&p(i.aoMap.channel),lightMapUv:oe&&p(i.lightMap.channel),bumpMapUv:se&&p(i.bumpMap.channel),normalMapUv:N&&p(i.normalMap.channel),displacementMapUv:ce&&p(i.displacementMap.channel),emissiveMapUv:le&&p(i.emissiveMap.channel),metalnessMapUv:ue&&p(i.metalnessMap.channel),roughnessMapUv:de&&p(i.roughnessMap.channel),anisotropyMapUv:be&&p(i.anisotropyMap.channel),clearcoatMapUv:xe&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:we&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:Te&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:De&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&p(i.sheenRoughnessMap.channel),specularMapUv:ke&&p(i.specularMap.channel),specularColorMapUv:Ae&&p(i.specularColorMap.channel),specularIntensityMapUv:je&&p(i.specularIntensityMap.channel),transmissionMapUv:Me&&p(i.transmissionMap.channel),thicknessMapUv:Ne&&p(i.thicknessMap.channel),alphaMapUv:Fe&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(N||fe),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(te||Fe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&N===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&dn.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&dn.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Le&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Le&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=$o[t];n=Aa.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new bl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function El(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Dl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ol(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function kl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Dl),r.length>1&&r.sort(t||Ol),i.length>1&&i.sort(t||Ol)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Al(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new kl,e.set(t,[i])):n>=r.length?(i=new kl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function jl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new V,color:new U};break;case`SpotLight`:n={position:new V,direction:new V,color:new U,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new U,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new U,groundColor:new U};break;case`RectAreaLight`:n={color:new U,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function Ml(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Nl=0;function Pl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Fl(e){let t=new jl,n=Ml(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new Dn,o=new Dn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Pl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=G.LTC_FLOAT_1,r.rectAreaLTC2=G.LTC_FLOAT_2):(r.rectAreaLTC1=G.LTC_HALF_1,r.rectAreaLTC2=G.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Nl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Il(e){let t=new Fl(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Ll(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Il(e),t.set(n,[a])):r>=i.length?(a=new Il(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Rl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Bl=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Vl=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Hl=new Dn,Ul=new V,Wl=new V;function Gl(e,t,n){let r=new ua,i=new B,a=new B,o=new Sn,s=new Ia,c=new La,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Na({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:Rl,fragmentShader:zl}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new ii;m.setAttribute(`position`,new Ur(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Ji(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){R(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new wn(i.x,i.y,{format:Se,type:le,minFilter:M,magFilter:M,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new ha(i.x,i.y,ce),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ve,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=A,d.map.depthTexture.magFilter=A}else l.isPointLight?(d.map=new cs(i.x),d.map.depthTexture=new ga(i.x,N)):(d.map=new wn(i.x,i.y),d.map.depthTexture=new ha(i.x,i.y,N)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ve,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=M,d.map.depthTexture.magFilter=M):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=A,d.map.depthTexture.magFilter=A);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let _=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Ul.setFromMatrixPosition(l.matrixWorld),e.position.copy(Ul),Wl.copy(e.position),Wl.add(Bl[t]),e.up.copy(Vl[t]),e.lookAt(Wl),e.updateMatrixWorld(),n.makeTranslation(-Ul.x,-Ul.y,-Ul.z),Hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Hl,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,_,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new wn(i.x,i.y,{format:Se,type:le}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=y(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)b(l[e],i,a,o,s,c)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Kl(e,t){function n(){let t=!1,n=new Sn,r=null,i=new Sn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ue(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Dt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ue(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,te=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),M=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),M=te>=1);let re=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new Sn().fromArray(ae),N=new Sn().fromArray(oe);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ue(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),ue(e.CULL_FACE),_e(0);function ue(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(de(e.BLEND),g=!1);else if(g===!1&&(ue(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):ue(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(ue(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function xe(t){t!==k&&(M&&e.lineWidth(t),k=t)}function Se(t,n,r){t?(ue(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?ue(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+ee-1),re!==t&&(e.activeTexture(t),re=t)}function Te(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+ee-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Ee(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Fe(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function P(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Re(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function F(t){N.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),N.copy(t))}function ze(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function I(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function L(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,ie={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,se.set(0,0,e.canvas.width,e.canvas.height),N.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ue,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:Fe,texImage3D:P,pixelStorei:Le,getParameter:Ie,updateUBOMapping:ze,uniformBlockBinding:I,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Me,scissor:Re,viewport:F,reset:L}}function ql(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new B,u=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,h=new FinalizationRegistry(e=>m.delete(e)),g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):bt(`canvas`)}function v(e,t,n){let r=1,i=L(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=_(n,a));let o=t?_(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?pt:dn.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function w(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function T(e){let t=new WeakRef(e);r.get(e).__ref=t,m.add(t),h.register(e,t,t)}function E(e){let t=r.get(e).__ref;t!==void 0&&(m.delete(t),h.unregister(t))}function re(e){ae(e.target)}function ie(e){oe(e.target)}function ae(e){e.removeEventListener(`dispose`,re),E(e),N(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function oe(e){e.removeEventListener(`dispose`,ie),E(e),le(e)}function se(){for(let e of m){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?oe(t):ae(t))}m.clear(),d.clear()}function N(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&ce(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function ce(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function le(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&ae(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let ue=0;function de(){ue=0}function fe(){return ue}function pe(e){ue=e}function me(){let e=ue;return e>=i.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ue+=1,e}function he(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ge(t,i){let a=r.get(t);if(t.isVideoTexture&&ze(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Oe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function _e(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Oe(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ve(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Oe(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function be(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?ke(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let xe={[D]:e.REPEAT,[O]:e.CLAMP_TO_EDGE,[k]:e.MIRRORED_REPEAT},Se={[A]:e.NEAREST,[j]:e.NEAREST_MIPMAP_NEAREST,[ee]:e.NEAREST_MIPMAP_LINEAR,[M]:e.LINEAR,[te]:e.LINEAR_MIPMAP_NEAREST,[ne]:e.LINEAR_MIPMAP_LINEAR},Ce={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function we(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,xe[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,xe[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,xe[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,Se[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,Se[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,Ce[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function Te(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,re),T(n));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=he(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ce(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function Ee(e,t,n){return Math.floor(Math.floor(e/n)/t)}function De(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=Ee(n.start,r.width,4),c=Ee(t.start,r.width,4);n.start<=i+1&&a===c&&Ee(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Oe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=Te(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=dn.getPrimaries(dn.workingColorSpace),r=o.colorSpace===``?null:dn.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=I(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=S(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);we(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,x=f.__version===void 0||l===!0,T=u.dataReady,E=w(o,t);if(o.isDepthTexture)m=C(o.format===ye,o.type),x&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(x&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&De(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(T){if(o.layerUpdates.size>0){let t=Yo(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Yo(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(x&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(x){if(_)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&x){let t=L(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(x){let r=L(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);y(o)&&o.mipmapsAutoUpdate===!0&&b(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ke(t,o,s){if(o.image.length!==6)return;let c=Te(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=dn.getPrimaries(dn.workingColorSpace),r=o.colorSpace===``?null:dn.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=I(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),x=S(o.internalFormat,g,_,o.normalized,o.colorSpace),T=o.isVideoTexture!==!0,E=u.__version===void 0||c===!0,D=l.dataReady,O=w(o,h);we(e.TEXTURE_CUBE_MAP,o);let k;if(o.isDepthTexture){if(x=C(o.format===ye,o.type),E){if(T)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,x,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,h.width,h.height,0,g,_,null)}}else if(f){T&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,h.width,h.height);for(let t=0;t<6;t++){k=m[t].mipmaps;for(let r=0;r<k.length;r++){let i=k[r];o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,g,_,i.data):g===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(k=o.mipmaps,T&&E){k.length>0&&O++;let t=L(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,g,_,i.data)}}else{T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,g,_,m[t]);for(let r=0;r<k.length;r++){let i=k[r];T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,g,_,i.image[t])}}}y(o)&&o.mipmapsAutoUpdate===!0&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Ae(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=S(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Re(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function je(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;F(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=S(o.internalFormat,c,l,o.normalized,o.colorSpace);F(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Me(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?be(i.depthTexture,0):ge(i.depthTexture,0);let u=c.__webglTexture,d=Re(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ne(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Me(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Me(i.__webglFramebuffer[0],t,0):Me(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),je(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),je(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Pe(t,n,i){let a=r.get(t);n!==void 0&&Ae(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ne(t)}function Fe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,ie),T(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&F(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=S(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Re(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),je(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),we(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Ae(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Ae(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);y(i)?b(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),we(c,a),Ae(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),y(a)&&b(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),we(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Ae(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Ae(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);y(i)?b(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&Ne(t)}function P(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(y(a)&&a.mipmapsAutoUpdate===!0){let t=x(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),b(t),n.unbindTexture()}}}let Ie=[];function Le(t){if(t.samples>0){if(F(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Ie.length=0,Ie.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Ie.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ie))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Re(e){return Math.min(i.maxSamples,e.samples)}function F(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function ze(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function I(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(dn.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function L(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=me,this.resetTextureUnits=de,this.getTextureUnits=fe,this.setTextureUnits=pe,this.setTexture2D=ge,this.setTexture2DArray=_e,this.setTexture3D=ve,this.setTextureCube=be,this.rebindTextures=Pe,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=F,this.dispose=se}function Jl(e,t){function n(n,r=``){let i,a=dn.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Yl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new _a(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Na({vertexShader:Yl,fragmentShader:Xl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ji(new Ca(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ql=class extends Ot{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Zl,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new B,C=null,w=null,T=new To;T.viewport=new Sn;let E=new To;E.viewport=new Sn;let D=[T,E],O=new Po,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new rr,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new rr,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new rr,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?ye:ve,a=_.stencil?fe:N);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new wn(d.textureWidth,d.textureHeight,{format:_e,type:re,depthTexture:new ha(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new wn(f.framebufferWidth,f.framebufferHeight,{format:_e,type:re,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}function te(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;te(O,i);for(let e=0;e<a.length;e++)te(a[e],i);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ne(e,O,i)};function ne(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Mt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ie=null;function ae(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new To,o.layers.enable(n),o.viewport=new Sn,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new _a,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ie&&ie(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let oe=new Zo;oe.setAnimationLoop(ae),this.setAnimationLoop=function(e){ie=e},this.dispose=function(){}}},$l=new Dn,eu=new H;eu.set(-1,0,0,0,1,0,0,0,1);function tu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ka(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4($l.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(eu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function nu(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var ru=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),iu=null;function au(){return iu===null&&(iu=new Zi(ru,16,16,Se,le),iu.name=`DFG_LUT`,iu.minFilter=M,iu.magFilter=M,iu.wrapS=O,iu.wrapT=O,iu.generateMipmaps=!1,iu.needsUpdate=!0),iu}var ou=class{constructor(e={}){let{canvas:t=xt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=re}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([we,Ce,xe]),g=new Set([re,N,oe,fe,ue,de]),_=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=dt;let j=0,ee=0,M=null,te=-1,ie=null,ae=new Sn,se=new Sn,ce=null,pe=new U(0),me=0,he=t.width,ge=t.height,_e=1,ve=null,ye=null,be=new Sn(0,0,he,ge),Se=new Sn(0,0,he,ge),Te=!1,Ee=new ua,De=new fa,Oe=!1,ke=!1,Ae=new Dn,je=new V,Me=new Sn,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return M===null?_e:1}let P=n;function Ie(e,n){return t.getContext(e,n)}let Le,Re,F,ze,I,L,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,at,!1),t.addEventListener(`webglcontextrestored`,ot,!1),t.addEventListener(`webglcontextcreationerror`,st,!1),P===null){let t=`webgl2`;if(P=Ie(t,e),P===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}rt()}catch(e){throw t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),z(`WebGLRenderer: `+e.message),e}function rt(){Le=new Es(P),Le.init(),et=new Jl(P,Le),Re=new os(P,Le,e,et),F=new Kl(P,Le),Re.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),O=P.createFramebuffer(),k=P.createFramebuffer(),A=P.createFramebuffer(),ze=new ks(P),I=new El,L=new ql(P,Le,F,I,Re,et,ze),Be=new Ts(T),Ve=new Qo(P),tt=new is(P,Ve),He=new Ds(P,Ve,ze,tt),Ue=new js(P,He,Ve,tt,ze),Ze=new As(P,Re,L),Je=new ss(I),We=new Tl(T,Be,Le,Re,tt,Je),Ge=new tu(T,I),Ke=new Al,qe=new Ll(Le),Xe=new rs(T,Be,F,Ue,p,s),Ye=new Gl(T,Ue,Re),nt=new nu(P,ze,Re,F),Qe=new as(P,Le,ze),$e=new Os(P,Le,ze),ze.programs=We.programs,T.capabilities=Re,T.extensions=Le,T.properties=I,T.renderLists=Ke,T.shadowMap=Ye,T.state=F,T.info=ze}m!==1009&&(w=new Ns(m,t.width,t.height,o,r,i));let it=new Ql(T,P);this.xr=it,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(e){e!==void 0&&(_e=e,this.setSize(he,ge,!1))},this.getSize=function(e){return e.set(he,ge)},this.setSize=function(e,n,r=!0){it.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(he=e,ge=n,t.width=Math.floor(e*_e),t.height=Math.floor(n*_e),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(he*_e,ge*_e).floor()},this.setDrawingBufferSize=function(e,n,r){he=e,ge=n,_e=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ae)},this.getViewport=function(e){return e.copy(be)},this.setViewport=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),F.viewport(ae.copy(be).multiplyScalar(Fe()).round())},this.getScissor=function(e){return e.copy(Se)},this.setScissor=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),F.scissor(se.copy(Se).multiplyScalar(Fe()).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(e){F.setScissorTest(Te=e)},this.setOpaqueSort=function(e){ve=e},this.setTransparentSort=function(e){ye=e},this.getClearColor=function(e){return e.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Xe.getClearColor(),r=Xe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,P.clearBufferuiv(P.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,P.clearBufferiv(P.COLOR,0,v))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),Xe.dispose(),Ke.dispose(),qe.dispose(),L.dispose(),I.dispose(),Be.dispose(),Ue.dispose(),He.dispose(),tt.dispose(),nt.dispose(),We.dispose(),it.dispose(),it.removeEventListener(`sessionstart`,ht),it.removeEventListener(`sessionend`,gt),vt.stop()};function at(e){e.preventDefault(),Ct(`WebGLRenderer: Context Lost.`),E=!0}function ot(){Ct(`WebGLRenderer: Context Restored.`),E=!1;let e=ze.autoReset,t=Ye.enabled,n=Ye.autoUpdate,r=Ye.needsUpdate,i=Ye.type;rt(),ze.autoReset=e,Ye.enabled=t,Ye.autoUpdate=n,Ye.needsUpdate=r,Ye.type=i}function st(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ct(e){let t=e.target;t.removeEventListener(`dispose`,ct),lt(t)}function lt(e){ut(e),I.remove(e)}function ut(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Mt(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=He.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;tt.setup(i,r,s,n,c);let h,g=Qe;if(c!==null&&(h=Ve.get(c),g=$e,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ve.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ft(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),Oe===!0&&Je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ot(e,t,r),e.side=0,e.needsUpdate=!0,Ot(e,t,r),e.side=2):Ot(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=qe.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),ke=this.localClippingEnabled,Oe=Je.init(this.clippingPlanes,ke),Oe===!0&&Je.setGlobalState(this.clippingPlanes,t),D!==null&&Ye.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ft(o,n,t,e),r.add(o)}else ft(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let pt=null;function mt(e){pt&&pt(e)}function ht(){vt.stop()}function gt(){vt.start()}let vt=new Zo;vt.setAnimationLoop(mt),typeof self<`u`&&vt.setContext(self),this.setAnimationLoop=function(e){pt=e,it.setAnimationLoop(e),e===null?vt.stop():vt.start()},it.addEventListener(`sessionstart`,ht),it.addEventListener(`sessionend`,gt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=it.enabled===!0&&it.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(t),t=it.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=qe.get(e,C.length),x.init(t),x.state.textureUnits=L.getTextureUnits(),C.push(x),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?De.setFromArrayCamera(t):Ee.setFromProjectionMatrix(Ae,_t,t.reversedDepth),ke=this.localClippingEnabled,Oe=Je.init(this.clippingPlanes,ke),b=Ke.get(e,S.length),b.init(),S.push(b),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&yt(e,t,-1/0,T.sortObjects)}yt(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(ve,ye),Pe=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Pe&&Xe.addToRenderList(b,e),this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Je.beginShadows();let i=x.state.shadowsArray;if(Ye.render(i,e,t),Oe===!0&&Je.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];St(n,r,e,a)}Pe&&Xe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];bt(b,e,n,n.viewport)}}else r.length>0&&St(n,r,e,t),Pe&&Xe.render(e),bt(b,e,t)}M!==null&&ee===0&&(L.updateMultisampleRenderTarget(M),L.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),tt.resetDefaultState(),te=-1,ie=null,C.pop(),C.length>0?(x=C[C.length-1],L.setTextureUnits(x.state.textureUnits),Oe===!0&&Je.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function yt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?De:Ee;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let i=Ue.update(e),a=e.material;a.visible&&b.push(e,i,a,n,Me.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?De:Ee;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ue.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Me.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,Me.z,s,t)}}else a.visible&&b.push(e,i,a,n,Me.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)yt(i[e],t,n,r)}function bt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),Oe===!0&&Je.setGlobalState(T.clippingPlanes,n),r&&F.viewport(ae.copy(r)),i.length>0&&wt(i,t,n),a.length>0&&wt(a,t,n),o.length>0&&wt(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function St(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new wn(1,1,{generateMipmaps:!0,type:e?le:re,minFilter:ne,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dn.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||ae;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(pe),me=T.getClearAlpha(),me<1&&T.setClearColor(16777215,.5),T.clear(),Pe&&Xe.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),Oe===!0&&Je.setGlobalState(T.clippingPlanes,r),wt(e,n,r),L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Tt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(pe,me),d!==void 0&&(r.viewport=d),T.toneMapping=u}function wt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Tt(o,t,n,s,l,c)}}function Tt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function Dt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Ot(e,t,n){t.isScene!==!0&&(t=Ne);let r=I.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ct),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return jt(e,s),d}else s.uniforms=We.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),jt(e,s),r.needsLights=Pt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Dt(x.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function kt(e,t,n,r,i){let a=I.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Ot(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function At(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Hc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function jt(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Mt(e,t,n,r,i){t.isScene!==!0&&(t=Ne),L.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:dn.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),b=x.state.lights;if(Oe===!0&&(ke===!0||e!==ie)){let t=e===ie&&r.id===te;Je.setState(r,e,t)}let S=!1,C=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?S=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?S=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Dt(x.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(C=!0):S=!0:S=!0:(S=!0,v.__version=r.version);let w=v.currentProgram;(S===!0||C===!0)&&(w=C===!0?kt(r,t,i,s,h):Ot(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,w,v));let E=!1,O=!1,k=!1,A=w.getUniforms(),j=v.uniforms;if(F.useProgram(w.program)&&(E=!0,O=!0,k=!0),r.id!==te&&(te=r.id,O=!0),E||ie!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),A.setValue(P,`projectionMatrix`,e.projectionMatrix),A.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=A.map.cameraPosition;t!==void 0&&t.setValue(P,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&A.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),ie!==e&&(ie=e,O=!0,k=!0)}if(v.needsLights&&(b.state.sunShadowMap.length>0&&A.setValue(P,`sunShadowMap`,b.state.sunShadowMap,L),b.state.directionalShadowMap.length>0&&A.setValue(P,`directionalShadowMap`,b.state.directionalShadowMap,L),b.state.spotShadowMap.length>0&&A.setValue(P,`spotShadowMap`,b.state.spotShadowMap,L),b.state.pointShadowMap.length>0&&A.setValue(P,`pointShadowMap`,b.state.pointShadowMap,L)),i.isSkinnedMesh){A.setOptional(P,i,`bindMatrix`),A.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),A.setValue(P,`boneTexture`,e.boneTexture,L))}i.isBatchedMesh&&(A.setOptional(P,i,`batchingTexture`),A.setValue(P,`batchingTexture`,i._matricesTexture,L),A.setOptional(P,i,`batchingIdTexture`),A.setValue(P,`batchingIdTexture`,i._indirectTexture,L),A.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&A.setValue(P,`batchingColorTexture`,i._colorsTexture,L));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&Ze.update(i,n,w),(O||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,A.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(j.envMapIntensity.value=t.environmentIntensity),j.dfgLUT!==void 0&&(j.dfgLUT.value=au()),O){if(A.setValue(P,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&Nt(j,k),a&&r.fog===!0&&Ge.refreshFogUniforms(j,a),Ge.refreshMaterialUniforms(j,r,_e,ge,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=y,t=0;for(let n of x.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;j.probesSH.value=e.textures,j.probesMin.value=e.min,j.probesMax.value=e.max,j.probesResolution.value=e.resolution}Hc.upload(P,At(v),j,L)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Hc.upload(P,At(v),j,L),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&A.setValue(P,`center`,i.center),A.setValue(P,`modelViewMatrix`,i.modelViewMatrix),A.setValue(P,`normalMatrix`,i.normalMatrix),A.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];nt.update(n,w),nt.bind(n,w)}}return w}function Nt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Pt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,j=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),ae.copy(e.viewport),se.copy(e.scissor),ce=e.scissorTest,F.viewport(ae),F.scissor(se),F.setScissorTest(ce),te=-1;return}if(o.__webglFramebuffer===void 0)L.setupRenderTarget(e);else if(o.__hasExternalTextures)L.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);L.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&L.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ae.copy(e.viewport),se.copy(e.scissor),ce=e.scissorTest}else ae.copy(be).multiplyScalar(_e).floor(),se.copy(Se).multiplyScalar(_e).floor(),ce=Te;if(n!==0&&(r=O),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(ae),F.scissor(se),F.setScissorTest(ce),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}te=-1};function Ft(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Re.textureFormatReadable(e.format),t.__typeReadable=Re.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=Ft(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,et.convert(c),et.convert(l),a)}finally{let e=M===null?null:I.get(M).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=Ft(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,et.convert(l),et.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=M===null?null:I.get(M).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Et(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;L.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=et.convert(t.format),_=et.convert(t.type),v;t.isData3DTexture?(L.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(L.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(L.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,k),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&L.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?L.setTextureCube(e,0):e.isData3DTexture?L.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?L.setTexture2DArray(e,0):L.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){j=0,ee=0,M=null,F.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return _t}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dn._getDrawingBufferColorSpace(e),t.unpackColorSpace=dn._getUnpackColorSpace()}},su={"drowned-choir":{name:`THE DROWNED CHOIR`,image:`art/arena-drowned-choir.jpg`,floor:`#2b3540`,fog:`#0b1420`,water:!0,torch:`#9fb4ff`,lanterns:`#a9b8ff`},"wyrmbone-pit":{name:`THE WYRMBONE PIT`,image:`art/arena-wyrmbone-pit.jpg`,floor:`#35302e`,fog:`#15121a`,torch:`#ffb35a`,lanterns:`#ffb35a`},"carnival-noir":{name:`THE CARNIVAL NOIR`,image:`art/arena-carnival-noir.jpg`,floor:`#3a2622`,fog:`#140a0c`,torch:`#ffd37a`,lanterns:`#ffcc66`},dirgehold:{name:`THE DIRGEHOLD`,image:null,floor:`#2e2a2c`,fog:`#120d10`,torch:`#ff9a4a`,lanterns:`#ffb060`,greybox:!0}};function cu(e,t,n=Math.random){let r=[e.home,t.home].filter(e=>su[e]);return r[Math.floor(n()*r.length)]||`dirgehold`}var lu={io:e=>e<.5?2*e*e:1-(-2*e+2)**2/2,out:e=>1-(1-e)**3,back:e=>1+2.9*(e-1)**3+1.9*(e-1)**2},uu=e=>Math.max(0,Math.min(1,e));function du(e,t=.2,n=.4){return e<t?-.35*lu.io(e/t):e<n?-.35+1.5*lu.out((e-t)/(n-t)):e<.55?1.15-.15*((e-n)/(.55-n)):1-lu.io(uu((e-.55)/.45))}var fu=class{constructor(e,t,n,r,i,a){this.bard=e,this.meta=t,this.moves=a,this.mirror=i;let o=this.s=r/t.imgH;this.root=new tr,this.flip=new tr,this.root.add(this.flip),i&&(this.flip.scale.x=-1),this.bones={},this.rest={},this.mats=[];let s=Object.fromEntries(t.parts.map(e=>[e.name,e])),c=[...t.parts].sort((e,t)=>e.z-t.z);for(let e of c){let t=new tr;t.name=e.name,this.bones[e.name]=t}for(let e of c){let r=this.bones[e.name],[i,a]=e.pivot;if(e.parent){let[t,n]=s[e.parent].pivot;r.position.set((i-t)*o,-(a-n)*o,0),this.bones[e.parent].add(r)}else r.position.set((i-t.imgW/2)*o,(t.imgH-a)*o,0),this.flip.add(r);this.rest[e.name]=r.position.clone();let[c,l,u,d]=e.bbox,f=(u-c)*o,p=(d-l)*o,m=n[e.file],h=new Fa({map:m,transparent:!0,alphaTest:.04,depthWrite:!1,roughness:1,metalness:0,emissive:16777215,emissiveMap:m,emissiveIntensity:.42,side:2}),g=new Ji(new Ca(f,p),h);g.position.set(((c+u)/2-i)*o,-((l+d)/2-a)*o,0),g.renderOrder=10+e.z,r.add(g),this.mats.push(h)}this.t=0,this.clip=null,this.state=`idle`,this.beat=0,this.ph=0,this.width=t.imgW*o,this.height=r}setTint(e,t,n,r){for(let i of this.mats)i.emissive.setRGB(e,t,n),i.emissiveIntensity=r}play(e,t={}){let n=(this.moves.durations[e]||.35)*(t.durScale||1);this.clip={name:e,start:this.t,dur:n,lane:t.lane||0,perfect:t.perfect}}setState(e){this.state!==e&&(this.state=e,this.stateStart=this.t)}update(e,t,n){e<=0||(this.t+=e,this.beat=t,this.ph=n,this.apply(this.poseAt(this.t)))}poseAt(e){let t=this.moves,n={},r=e=>{for(let t in e){let r=n[t]||(n[t]={r:0,x:0,y:0,sx:1,sy:1}),i=e[t];r.r+=i.r||0,r.x+=i.x||0,r.y+=i.y||0,r.sx*=i.sx||1,r.sy*=i.sy||1}},i=e=>Math.floor(e*12)/12;if(r(t.idle(e,this.beat,this.ph)),this.state!==`idle`&&r(t[this.state](i(e-(this.stateStart||0)),e,this.beat,this.ph)),this.clip){let n=i(e-this.clip.start)/this.clip.dur;n>=1?this.clip=null:r(t[this.clip.name](n,this.clip,e))}return n}apply(e){let t=this.s;for(let n in this.bones){let r=this.bones[n],i=e[n],a=this.rest[n];i?(r.position.set(a.x+i.x*t,a.y-i.y*t,a.z),r.rotation.z=i.r,r.scale.set(i.sx,i.sy,1)):(r.position.copy(a),r.rotation.z=0,r.scale.set(1,1,1))}}pose(e,t,n){this.t=n,this.state=e,this.stateStart=0,this.clip=t,this.apply(this.poseAt(n))}},pu={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},mu=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},hu=new Oo(-1,1,1,-1,0,1),gu=new class extends ii{constructor(){super(),this.setAttribute(`position`,new Kr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new Kr([0,2,0,0,2,0],2))}},_u=class{constructor(e){this._mesh=new Ji(gu,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,hu)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},vu=class extends mu{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Na?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Aa.clone(e.uniforms),this.material=new Na({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new _u(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},yu=class extends mu{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},bu=class extends mu{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},xu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new B);this._width=n.width,this._height=n.height,t=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:le}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vu(pu),this.copyPass.material.blending=0,this.timer=new Fo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}yu!==void 0&&(r instanceof yu?n=!0:r instanceof bu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new B);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Su=class extends mu{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new U}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Cu={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new U(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},wu=class e extends mu{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new B(256,256):new B(e.x,e.y),this.clearColor=new U(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new wn(i,a,{type:le,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new wn(i,a,{type:le,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new wn(i,a,{type:le,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Cu;this.highPassUniforms=Aa.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Na({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new B(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Aa.clone(pu.uniforms),this.blendMaterial=new Na({uniforms:this.copyUniforms,vertexShader:pu.vertexShader,fragmentShader:pu.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new U,this._oldClearAlpha=1,this._basic=new Ii,this._fsQuad=new _u(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new B(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new Na({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new B(.5,.5)},direction:{value:new B(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Na({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};wu.BlurDirectionX=new B(1,0),wu.BlurDirectionY=new B(0,1);var Tu={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Eu=class extends mu{constructor(){super(),this.isOutputPass=!0,this.uniforms=Aa.clone(Tu.uniforms),this.material=new Pa({name:Tu.name,uniforms:this.uniforms,vertexShader:Tu.vertexShader,fragmentShader:Tu.fragmentShader}),this._fsQuad=new _u(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dn.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Du=40,Ou=10.5;function ku(e,t,n){let r=document.createElement(`canvas`);r.width=e,r.height=t,n(r.getContext(`2d`),e,t);let i=new ma(r);return i.colorSpace=dt,i}var Au=()=>ku(128,128,(e,t)=>{let n=e.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.25,`rgba(255,255,255,0.6)`),n.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=n,e.fillRect(0,0,t,t)}),ju=()=>ku(128,128,(e,t)=>{e.strokeStyle=`#fff`,e.lineWidth=10,e.shadowColor=`#fff`,e.shadowBlur=14,e.beginPath(),e.arc(t/2,t/2,t/2-16,0,Math.PI*2),e.stroke()}),Mu=()=>ku(64,128,e=>{e.fillStyle=`#fff`,e.beginPath(),e.moveTo(32,0),e.lineTo(52,70),e.lineTo(32,128),e.lineTo(14,60),e.closePath(),e.fill()}),Nu=()=>ku(64,128,(e,t,n)=>{let r=e.createRadialGradient(32,90,2,32,80,60);r.addColorStop(0,`rgba(255,255,230,1)`),r.addColorStop(.3,`rgba(255,190,90,0.9)`),r.addColorStop(1,`rgba(255,80,20,0)`),e.fillStyle=r,e.beginPath(),e.moveTo(32,0),e.quadraticCurveTo(64,80,32,128),e.quadraticCurveTo(0,80,32,0),e.fill()}),Pu=class{constructor(e){this.renderer=new ou({canvas:e,antialias:!0,powerPreference:`high-performance`,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=dt,this.scene=new ur,this.camera=new To(Du,16/9,.1,200),this.loader=new uo,this.tex={glow:Au(),ring:ju(),shard:Mu(),flame:Nu()},this.cache={},this.cam={pos:new V(0,2.6,Ou),look:new V(0,2.1,0),tPos:new V,tLook:new V,rate:4},this.shot(`wide`,!0),this.trauma=0,this.punchV=0,this.time=0,this.particles=[],this.root=null,this.bards={},this.clash=null,this.reduceShake=!1,this.composer=new xu(this.renderer),this.composer.addPass(new Su(this.scene,this.camera)),this.bloom=new wu(new B(innerWidth,innerHeight),.55,.5,.8),this.composer.addPass(this.bloom),this.composer.addPass(new Eu),this.bloomOn=!0,this.resize(),window.addEventListener(`resize`,()=>this.resize())}resize(){let e=innerWidth,t=innerHeight;this.renderer.setSize(e,t,!1),this.composer&&(this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(e,t)),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}texture(e){if(!this.cache[e]){let t=this.loader.load(e);t.colorSpace=dt,t.anisotropy=4,this.cache[e]=t}return this.cache[e]}async preload(e){await Promise.all(e.map(e=>new Promise(t=>{if(this.cache[e])return t();let n=this.loader.load(e,t,void 0,t);n.colorSpace=dt,n.anisotropy=4,this.cache[e]=n})))}async preloadRigs(e){this.rigMeta=this.rigMeta||{};for(let t of e){if(!t.rig||this.rigMeta[t.id])continue;let e=await(await fetch(t.rig)).json();await this.preload(e.parts.map(e=>e.file)),this.rigMeta[t.id]=e}}visibleH(e=Ou){return 2*e*Math.tan(nn.degToRad(Du/2))}build(e,t,n,r){this.root&&this.scene.remove(this.root);let i=su[e];this.arena=i,this.arenaId=e;let a=this.root=new tr;this.scene.add(a),this.scene.fog=new lr(i.fog,16,60),this.scene.background=new U(i.fog),this.particles.forEach(e=>e.s.removeFromParent()),this.particles=[],a.add(new po(8425648,1708054,.55));let o=new Ao(16773598,1.1);if(o.position.set(2,8,9),a.add(o),this.rimL=new Do(t.colors.glow,18,14,1.6),this.rimL.position.set(-5,4,-1.5),a.add(this.rimL),this.rimR=new Do(n.colors.glow,18,14,1.6),this.rimR.position.set(5,4,-1.5),a.add(this.rimR),i.image){let e=this.visibleH(24.5)*1.25,t=e*16/9;this.backMat=new Ii({map:this.texture(i.image),color:12105912,fog:!1});let n=new Ji(new Ca(t,e),this.backMat);n.position.set(0,2.6+e*.06,-14),a.add(n)}else this.buildDirgehold(a,i);let s=new Fa({color:i.floor,roughness:.85,metalness:.1}),c=new Ji(new xa(7.2,7.6,.8,64),s);c.position.set(0,-.4,-1.2),a.add(c);let l=new Ji(new ba(5.4,64),new Fa({color:new U(i.floor).multiplyScalar(.7),roughness:.6,metalness:.2}));if(l.rotation.x=-Math.PI/2,l.position.set(0,.005,-1.2),a.add(l),this.trim=new Ji(new wa(7.25,.06,8,96),new Ii({color:16777215,fog:!1})),this.trim.rotation.x=Math.PI/2,this.trim.position.set(0,.02,-1.2),a.add(this.trim),i.water){let e=new Ji(new Ca(80,40),new Fa({color:661540,roughness:.15,metalness:.85}));e.rotation.x=-Math.PI/2,e.position.set(0,-.55,-6),a.add(e)}this.torches=[];for(let[e,t]of[[-6.4,-3.2],[6.4,-3.2],[-7.2,1.6],[7.2,1.6]])this.addTorch(a,e,t,i.torch);this.banners=[];for(let[e,r]of[[-5.6,t],[5.6,n]]){let t=ku(128,384,(e,t,n)=>{e.fillStyle=r.colors.main,e.beginPath(),e.moveTo(0,0),e.lineTo(t,0),e.lineTo(t,n*.82),e.lineTo(t*.75,n*.92),e.lineTo(t/2,n*.8),e.lineTo(t*.25,n),e.lineTo(0,n*.86),e.closePath(),e.fill(),e.strokeStyle=r.colors.accent,e.lineWidth=6,e.strokeRect(10,10,t-20,n*.7),e.fillStyle=r.colors.accent,e.beginPath(),e.arc(t/2,n*.32,28,0,Math.PI*2),e.fill(),e.fillStyle=r.colors.main,e.beginPath(),e.arc(t/2,n*.32,16,0,Math.PI*2),e.fill(),e.fillStyle=`rgba(0,0,0,0.35)`;for(let r=0;r<6;r++)e.fillRect(0,n*.1*r+40,t,3)}),n=new Fa({map:t,color:12303291,emissive:16777215,emissiveMap:t,emissiveIntensity:.08,transparent:!0,alphaTest:.3,side:2,roughness:1}),i=new Ji(new Ca(1.1,3.3,1,8),n);i.position.set(e*1.12,5,-6.5),a.add(i);let o=new Ji(new xa(.05,.05,1.5),new Fa({color:9075290,metalness:.6}));o.rotation.z=Math.PI/2,o.position.set(e*1.12,6.7,-6.5),a.add(o),this.banners.push({mesh:i,mat:n,base:e})}this.lanterns=[];let u=new hi({map:this.tex.glow,color:i.lanterns,blending:2,depthWrite:!1,transparent:!0});for(let e=0;e<46;e++){let t=e%2?1:-1,n=new ki(u),r=t*(7.5+Math.random()*5),i=.6+Math.random()*4.2,o=-5-Math.random()*5;n.position.set(r,i,o),n.scale.setScalar(.28+Math.random()*.2),a.add(n),this.lanterns.push({s:n,y:i,ph:Math.random()*6.28})}this.lanternMat=u,this.bards={},this.placeBard(a,t,-1,r),this.placeBard(a,n,1,r);let d=e=>new Ji(new Ca(1,.9),new Ii({map:this.tex.glow,color:e,opacity:.75,blending:2,transparent:!0,depthWrite:!1,fog:!1}));this.beamL=d(t.colors.glow),this.beamR=d(n.colors.glow),this.beamCore=new ki(new hi({map:this.tex.glow,color:16777215,blending:2,depthWrite:!1})),[this.beamL,this.beamR,this.beamCore].forEach(e=>{e.visible=!1,a.add(e)}),this.leader=0,this.roar=0}buildDirgehold(e,t){let n=ku(4,256,(e,t,n)=>{let r=e.createLinearGradient(0,0,0,n);r.addColorStop(0,`#07040a`),r.addColorStop(.6,`#2a1420`),r.addColorStop(1,`#4a2a2a`),e.fillStyle=r,e.fillRect(0,0,t,n)}),r=new Ji(new Ca(90,40),new Ii({map:n,fog:!1}));r.position.set(0,8,-30),e.add(r);let i=new ki(new hi({map:this.tex.glow,color:16738874,fog:!1}));i.position.set(6.5,9,-28),i.scale.setScalar(9),e.add(i);let a=new Ji(new ba(2.2,48),new Ii({color:14178350,fog:!1}));a.position.set(6.5,9,-27.9),e.add(a);let o=new Fa({color:3813942,roughness:.95});for(let t=-3;t<=3;t++){if(t===0)continue;let n=t*3.6,r=new Ji(new va(.9,11,.9),o);if(r.position.set(n,5.5,-10),e.add(r),t<3&&t!==-1){let t=new Ji(new wa(1.8,.35,6,16,Math.PI),o);t.position.set(n+1.8,11,-10),e.add(t)}}let s=[];for(let e=0;e<=12;e++){let t=e/12;s.push(new B(.35+1.5*t**2.2+(t>.9?.25:0),2.4-t*2.4))}this.bell=new Ji(new Sa(s,32),new Fa({color:8018474,metalness:.8,roughness:.4,side:2})),this.bell.position.set(0,8.6,-9),e.add(this.bell);let c=new Ji(new xa(.06,.06,4),o);c.position.set(0,13,-9),e.add(c);let l=new ya(.28,.5,3,6),u=new Fa({color:1709080,roughness:1});this.crowd=new oa(l,u,220),this.crowdBase=[];let d=new Dn;for(let e=0;e<220;e++){let t=e%2?1:-1,n=Math.floor(Math.random()*5),r=t*(7.8+n*.9+Math.random()*4),i=.2+n*.9,a=-4-n*1.2-Math.random()*2;this.crowdBase.push([r,i,a,Math.random()*6.28]),d.setPosition(r,i,a),this.crowd.setMatrixAt(e,d)}e.add(this.crowd);for(let t=0;t<5;t++)for(let n of[-1,1]){let r=new Ji(new va(6,.4,1.4),o);r.position.set(n*(10+t*.9),t*.9-.3,-4-t*1.2),e.add(r)}}addTorch(e,t,n,r){let i=new Ji(new xa(.08,.12,1.6),new Fa({color:2761248,metalness:.4}));i.position.set(t,.8,n),e.add(i);let a=new ki(new hi({map:this.tex.flame,color:r,blending:2,depthWrite:!1}));a.position.set(t,1.95,n),a.scale.set(.55,1,1),e.add(a);let o=new Do(r,10,9,1.8);o.position.set(t,2.1,n),e.add(o),this.torches.push({flame:a,light:o,flare:0,ph:Math.random()*10})}placeBard(e,t,n,r){if(this.useRig&&this.rigMeta&&this.rigMeta[t.id])return this.placeRig(e,t,n,r);let i=this.texture(t.art),a=i.image,o=a&&a.width?a.width/a.height:.7,s=i;n===1&&(s=i.clone(),s.wrapS=D,s.repeat.x=-1,s.offset.x=1,s.needsUpdate=!0);let c=this.visibleH()*r.bardSize*(t.height||1),l=c*o,u=new Fa({map:s,transparent:!0,alphaTest:.35,roughness:1,metalness:0,emissive:16777215,emissiveMap:s,emissiveIntensity:.42,side:2}),d=new Ca(l,c);d.translate(0,c/2,0);let f=new Ji(d,u),p=n*(this.visibleH()*(16/9)*(190/1920)+l/2+.35);f.position.set(p,0,0),e.add(f);let m=new ki(new hi({map:this.tex.glow,color:t.colors.glow,blending:2,depthWrite:!1,opacity:.35,transparent:!0}));m.scale.set(l*1.5,c*1.15,1),m.position.set(p,c*.5,-.4),e.add(m);let h=new Ji(new ba(1,32),new Ii({color:0,transparent:!0,opacity:.45,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.scale.set(l*.45,.5,1),h.position.set(p,.02,.1),e.add(h),this.bards[n]={b:t,mesh:f,mat:u,aura:m,shadow:h,side:n,x:p,h:c,w:l,lunge:0,flinch:0,stagger:0,rise:0,glow:0}}placeRig(e,t,n,r,i){let a=this.rigMeta[t.id],o=this.visibleH()*r.bardSize*(t.height||1),s=new fu(t,a,this.cache,o,n===1,t.moves),c=s.width*.82,l=this.visibleH()*(16/9)*(190/1920);i===void 0&&(i=n*(l+c/2+.35)),s.root.position.set(i,0,0),e.add(s.root);let u=new ki(new hi({map:this.tex.glow,color:t.colors.glow,blending:2,depthWrite:!1,opacity:.35,transparent:!0}));u.scale.set(c*1.5,o*1.15,1),u.position.set(i,o*.5,-.4),u.renderOrder=1,e.add(u);let d=new Ji(new ba(1,32),new Ii({color:0,transparent:!0,opacity:.45,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.scale.set(c*.45,.5,1),d.position.set(i,.02,.1),e.add(d),this.bards[n]={b:t,mesh:s.root,rig:s,aura:u,shadow:d,side:n,x:i,h:o,w:c,lunge:0,flinch:0,stagger:0,rise:0,glow:0}}buildLab(e,t){this.root&&this.scene.remove(this.root);let n=this.root=new tr;this.scene.add(n),this.scene.fog=null,this.scene.background=new U(`#15121c`),this.particles=[],this.torches=[],this.banners=[],this.lanterns=[],n.add(new po(8425648,1708054,.6));let r=new Ao(16773598,1.1);r.position.set(2,8,9),n.add(r),this.rimL=new Do(e.colors.glow,18,14,1.6),this.rimL.position.set(-4,4,-1.5),n.add(this.rimL),this.rimR=new Do(e.colors.glow,18,14,1.6),this.rimR.position.set(4,4,-1.5),n.add(this.rimR);let i=new Ji(new ba(4,48),new Fa({color:`#2a2630`,roughness:.9}));i.rotation.x=-Math.PI/2,n.add(i),this.trim=new Ji(new wa(4,.03,8,64),new Ii({color:e.colors.glow})),this.trim.rotation.x=Math.PI/2,n.add(this.trim),this.bards={},this.placeRig(n,e,-1,t,0),this.lab=!0,this.leader=0,this.roar=0;let a=this.bards[-1].h;this.cam.tPos.set(0,a*.56,a*2.05),this.cam.tLook.set(0,a*.56,0),this.cam.pos.copy(this.cam.tPos),this.cam.look.copy(this.cam.tLook),this.lanternMat=new hi}shot(e,t=!1,n=-1){let r=this.cam;e===`wide`&&(r.tPos.set(0,2.6,Ou),r.tLook.set(0,2.1,0),r.rate=3.5),e===`swoop`&&(r.tPos.set(n*.9,1,8.9),r.tLook.set(n*.9,2.7,0),r.rate=6),e===`clash`&&(r.tPos.set(0,1.5,9),r.tLook.set(0,2.3,0),r.rate=5),e===`vs`&&(r.tPos.set(0,3.4,13),r.tLook.set(0,2.4,0),r.rate=1.2),e===`result`&&(r.tPos.set(n*1.5,1.8,8.2),r.tLook.set(n*3,2.6,0),r.rate=1.5),t&&(r.pos.copy(r.tPos),r.look.copy(r.tLook))}shake(e){this.trauma=Math.min(1,this.trauma+e*(this.reduceShake?.3:1))}punch(e){this.punchV=Math.max(this.punchV,e*(this.reduceShake?.4:1))}hit(e,t,n=0){let r=this.bards[e],i=this.bards[-e];if(r){r.lunge=t?1:.7,i.flinch=1,r.rig&&(r.lunge*=.5,r.rig.play(`attack`,{lane:n,perfect:t})),i.rig&&i.rig.play(`hit`),this.burst(i.x-e*i.w*.15,i.h*.55,r.b.colors.glow,t?10:6,3.5);for(let e of this.torches)e.flare=Math.max(e.flare,t?1:.5);this.leaderBias=e}}staggerFx(e){let t=this.bards[e];t.stagger=1,t.rig&&t.rig.play(`stagger`),this.burst(t.x,t.h*.6,`#ffffff`,18,5)}roarFx(){this.roar=1}burst(e,t,n,r,i,a=`glow`,o=.35){for(let s=0;s<r;s++){let r=Math.random()*Math.PI*2,s=i*(.4+Math.random());this.spawn({tex:a,color:n,x:e,y:t,z:.3,vx:Math.cos(r)*s,vy:Math.sin(r)*s,vz:(Math.random()-.5)*2,life:.4+Math.random()*.4,size:o,grow:-.3,g:-3})}}spawn(e){let t=new ki(new hi({map:this.tex[e.tex],color:e.color,blending:2,depthWrite:!1,transparent:!0,fog:!1}));t.position.set(e.x,e.y,e.z||0),t.scale.setScalar(e.size),e.rot&&(t.material.rotation=e.rot),this.root.add(t),this.particles.push({s:t,...e,t:0})}specialCharge(e){let t=this.bards[e];t.rise=1,this.shot(`swoop`,!1,e),this.shake(.1)}specialImpact(e,t){let n=this.bards[e],r=this.bards[-e];if(n.rise=.6,n.lunge=1.2,r.flinch=1.6,n.rig&&n.rig.play(`impact`),r.rig&&r.rig.play(`hit`),t===`shards`)for(let t=0;t<70;t++){let r=9+Math.random()*9,i=(Math.random()-.5)*.9;this.spawn({tex:`shard`,color:t%3?`#e8eeff`:n.b.colors.main,x:n.x,y:n.h*(.55+Math.random()*.35),z:.5,vx:-e*r*Math.cos(i),vy:r*Math.sin(i),vz:(Math.random()-.5)*3,life:.7+Math.random()*.5,size:.35+Math.random()*.4,grow:0,g:-6,rot:Math.random()*6})}else{for(let t=0;t<6;t++)this.spawn({tex:`ring`,color:t%2?n.b.colors.glow:n.b.colors.accent,x:n.x,y:n.h*.62,z:.4+t*.05,vx:-e*(7+t*1.2),vy:0,vz:0,life:1,size:.6,grow:3.2,g:0});for(let t=0;t<14;t++)this.spawn({tex:`glow`,color:n.b.colors.glow,x:n.x,y:n.h*(.4+Math.random()*.5),z:.4,vx:-e*(6+Math.random()*6),vy:(Math.random()-.5)*3,vz:0,life:1,size:.9,grow:-.4,g:0})}this.burst(r.x,r.h*.55,`#ffffff`,26,7),this.shake(.4),this.punch(1.2),this.roarFx();for(let e of this.torches)e.flare=1.5;this.bell&&(this.bellSwing=1)}clashStart(){this.clash={bal:0},[this.beamL,this.beamR,this.beamCore].forEach(e=>e.visible=!0),this.shot(`clash`),this.shake(.25)}clashSet(e){this.clash&&(this.clash.bal=e)}clashEnd(e){[this.beamL,this.beamR,this.beamCore].forEach(e=>e.visible=!1),this.clash=null;let t=this.bards[-e];t.flinch=1.8,t.rig&&t.rig.play(`hit`),this.burst(t.x,t.h*.55,this.bards[e].b.colors.glow,40,9),this.shake(.45),this.punch(1),this.shot(`wide`),this.roarFx()}update(e,t){this.time+=e;let n=this.time,r=(1-(t.beatPhase||0))**3;for(let n of[-1,1]){let i=this.bards[n];if(!i)continue;i.lunge=Math.max(0,i.lunge-e*4),i.flinch=Math.max(0,i.flinch-e*3.2),i.stagger=Math.max(0,i.stagger-e*.9),i.rise+=((t.rise&&t.rise[n]?1:0)*.6-i.rise)*Math.min(1,e*3);let a=-n*(e=>e*e*(3-2*e))(Math.min(1,i.lunge))*.7+n*i.flinch*.35+n*Math.sin(i.stagger*30)*i.stagger*.15;if(i.rig){let o=t.koSide?t.koSide===n?`ko`:`victory`:t.clashOn?`clash`:t.rise&&t.rise[n]?`charge`:`idle`;this.lab||i.rig.setState(o),this.lab||i.rig.update(e,t.beat||this.time*2,t.beatPhase||0),i.mesh.position.x=i.x+a*.6,i.mesh.position.y=i.rise*.5;let s=i.flinch>.4;i.rig.setTint(1,s?.55:1,s?.55:1,.42+i.rise*.22+i.lunge*.15+(s?.3:0)),i.aura.position.x=i.mesh.position.x,i.aura.position.y=i.mesh.position.y+i.h*.5,i.aura.material.opacity=.22+r*.08+i.rise*.22+(t.meters?t.meters[n]*.15:0),i.shadow.position.x=i.mesh.position.x,i.mesh.rotation.y=Math.atan2(this.camera.position.x-i.mesh.position.x,this.camera.position.z-i.mesh.position.z)*.6;continue}i.mesh.position.x=i.x+a,i.mesh.position.y=i.rise*.9+(t.koSide===n?-.2:0),i.mesh.scale.y=1+r*.018-i.flinch*.03,i.mesh.scale.x=1-r*.008+i.lunge*.03,i.mesh.rotation.z=n*i.flinch*.06+(t.koSide===n?n*.35:0)+Math.sin(i.stagger*22)*i.stagger*.05;let o=i.flinch>.4;i.mat.emissive.setRGB(1,o?.55:1,o?.55:1),i.mat.emissiveIntensity=.42+i.rise*.22+i.lunge*.15+(o?.3:0),i.aura.position.x=i.mesh.position.x,i.aura.position.y=i.mesh.position.y+i.h*.5,i.aura.material.opacity=.22+r*.08+i.rise*.22+(t.meters?t.meters[n]*.15:0),i.shadow.position.x=i.mesh.position.x,i.mesh.rotation.y=Math.atan2(this.camera.position.x-i.mesh.position.x,this.camera.position.z-i.mesh.position.z)*.6}let i=t.lead||0;this.leader+=(i-this.leader)*Math.min(1,e*2),this.roar=Math.max(0,this.roar-e*.8);for(let t of this.torches){t.flare=Math.max(0,t.flare-e*2.5);let r=.85+Math.sin(n*13+t.ph)*.08+Math.sin(n*29+t.ph)*.05;t.light.intensity=9*r+t.flare*22,t.flame.scale.set(.55+t.flare*.3,(1+t.flare*.8)*r,1)}for(let e of this.lanterns)e.s.position.y=e.y+Math.sin(n*2+e.ph)*.08+r*.08+this.roar*Math.abs(Math.sin(n*9+e.ph))*.6;if(this.lanternMat.opacity=.5+r*.2+this.roar*.3,this.crowd){let e=new Dn;this.crowdBase.forEach(([t,i,a,o],s)=>{e.setPosition(t,i+.5+Math.abs(Math.sin(n*3+o))*(.05+r*.1+this.roar*.45),a),this.crowd.setMatrixAt(s,e)}),this.crowd.instanceMatrix.needsUpdate=!0}if(this.bell&&(this.bellSwing=Math.max(0,(this.bellSwing||0)-e*.5),this.bell.rotation.z=Math.sin(n*3)*this.bellSwing*.35),this.backMat){let e=.68+r*.05+this.roar*.2;this.backMat.color.setScalar(e)}for(let e=0;e<this.banners.length;e++){let t=this.banners[e],i=e===0?-1:1;t.mesh.rotation.y=Math.sin(n*1.3+e)*.12,t.mesh.rotation.z=Math.sin(n*.9+e*2)*.03,t.mat.emissiveIntensity=.08+Math.max(0,this.leader*i)*.5+r*.04}let a=this.bards[-1]&&this.bards[1]?new U(this.bards[-1].b.colors.glow).lerp(new U(this.bards[1].b.colors.glow),(this.leader+1)/2):new U(1,1,1);if(this.trim.material.color.copy(a).multiplyScalar(.6+r*.6),this.rimL.intensity=14+Math.max(0,-this.leader)*22+r*4,this.rimR.intensity=14+Math.max(0,this.leader)*22+r*4,this.clash&&this.bards[-1]){let t=this.bards[-1],r=this.bards[1],i=(t.h+r.h)*.3,a=(r.x-t.x)*.36,o=this.clash.bal*a,s=t.mesh.position.x+t.w*.25,c=r.mesh.position.x-r.w*.25,l=1+Math.sin(n*40)*.12;this.beamL.position.set((s+o)/2,i,.6),this.beamL.scale.set(Math.max(.1,o-s)*1.15,1.2*l,1),this.beamR.position.set((c+o)/2,i,.62),this.beamR.scale.set(Math.max(.1,c-o)*1.15,1.2/l,1),this.beamCore.position.set(o,i,.8),this.beamCore.scale.setScalar(1.5+Math.sin(n*30)*.3),Math.random()<e*40&&this.burst(o,i,Math.random()<.5?t.b.colors.glow:r.b.colors.glow,2,5,`glow`,.25),this.trauma=Math.max(this.trauma,.12)}for(let t=this.particles.length-1;t>=0;t--){let n=this.particles[t];n.t+=e,n.t>=n.life?(n.s.removeFromParent(),n.s.material.dispose(),this.particles.splice(t,1)):(n.vy+=(n.g||0)*e,n.s.position.x+=n.vx*e,n.s.position.y+=n.vy*e,n.s.position.z+=(n.vz||0)*e,n.s.scale.setScalar(Math.max(.01,n.size+n.grow*n.t)),n.s.material.opacity=1-n.t/n.life)}let o=this.cam,s=1-Math.exp(-e*o.rate);o.pos.lerp(o.tPos,s),o.look.lerp(o.tLook,s),this.punchV=Math.max(0,this.punchV-e*5),this.trauma=Math.max(0,this.trauma-e*1.6);let c=new V().subVectors(o.look,o.pos).normalize(),l=this.trauma*this.trauma,u=e=>(Math.sin(n*47+e)+Math.sin(n*31+e*2))*.5;this.camera.position.copy(o.pos).addScaledVector(c,this.punchV*.6).add(new V(u(1)*l*.6,u(2)*l*.45,0)),this.camera.lookAt(o.look.x+u(3)*l*.2,o.look.y+u(4)*l*.15,o.look.z),this.camera.rotation.z+=u(5)*l*.03}render(){this.bloomOn?this.composer.render():this.renderer.render(this.scene,this.camera)}},Fu=[`#8c8cff`,`#ff5d73`,`#ffd166`,`#e9ecff`],Iu=88,Lu=14,Ru=class{constructor(e){this.c=e,this.g=e.getContext(`2d`),this.pops=[],this.flash=[0,0,0,0],this.held=[!1,!1,!1,!1],this.gems=Fu.map(e=>this.makeGem(e)),this.resize(),addEventListener(`resize`,()=>this.resize())}makeGem(e){let t=document.createElement(`canvas`);t.width=96,t.height=48;let n=t.getContext(`2d`);return n.shadowColor=e,n.shadowBlur=14,n.fillStyle=e,n.beginPath(),n.moveTo(10,24),n.lineTo(28,8),n.lineTo(68,8),n.lineTo(86,24),n.lineTo(68,40),n.lineTo(28,40),n.closePath(),n.fill(),n.shadowBlur=0,n.fillStyle=`rgba(255,255,255,0.75)`,n.fillRect(30,13,36,5),t}resize(){this.dpr=Math.min(devicePixelRatio,2),this.c.width=innerWidth*this.dpr,this.c.height=innerHeight*this.dpr,this.c.style.width=innerWidth+`px`,this.c.style.height=innerHeight+`px`}get scale(){return innerHeight/1080}pop(e,t,n){this.pops=this.pops.filter(t=>t.lane!==e),this.pops.push({lane:e,text:t,color:n,t:0})}hitFlash(e){this.flash[e]=1}draw(e){let t=this.g,n=this.scale*this.dpr,r=this.c.width,i=this.c.height;if(t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,r,i),!e.visible)return;let a=Iu*n,o=a*4,s=(r-o)/2,c=150*n,l=i-120*n;t.fillStyle=`rgba(8,6,14,0.72)`,t.fillRect(s-Lu*n,c-20*n,o+28*n,l-c+90*n);let u=t.createLinearGradient(0,c,0,l);u.addColorStop(0,`rgba(160,140,255,0)`),u.addColorStop(1,`rgba(200,190,255,0.9)`),t.fillStyle=u,t.fillRect(s-Lu*n-2*n,c,3*n,l-c),t.fillRect(s+o+Lu*n-1*n,c,3*n,l-c);for(let e=0;e<4;e++){let r=s+e*a,i=t.createLinearGradient(0,c,0,l);i.addColorStop(0,`rgba(0,0,0,0)`),i.addColorStop(1,zu(Fu[e],.1+(this.held[e]?.25:0)+this.flash[e]*.4)),t.fillStyle=i,t.fillRect(r+2*n,c,a-4*n,l-c+40*n),this.flash[e]=Math.max(0,this.flash[e]-.08)}let{t:d,fall:f,beat:p}=e;t.fillStyle=`rgba(255,255,255,0.07)`;for(let e=Math.ceil(d/p);e*p<d+f;e++){let r=l-(e*p-d)/f*(l-c);t.fillRect(s,r,o,(e%4==0?2:1)*n)}for(let r=0;r<4;r++){let i=s+r*a+a/2;t.globalAlpha=this.held[r]?1:.55,t.drawImage(this.gems[r],i-40*n,l-20*n,80*n,40*n),t.globalAlpha=1,t.strokeStyle=`rgba(255,255,255,0.9)`,t.lineWidth=2*n,t.strokeRect(i-34*n,l-16*n,68*n,32*n),t.fillStyle=`#fff`,t.font=`700 ${20*n}px Georgia, serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(e.labels[r],i,l+44*n)}for(let r of e.notes){if(r.judged&&!r.missFade)continue;let e=r.t-d;if(e>f)break;if(e<-.25)continue;let i=l-e/f*(l-c),o=s+r.lane*a+a/2;t.globalAlpha=r.missFade?Math.max(0,.4+e*2):Math.min(1,1.6-e/f),t.drawImage(this.gems[r.lane],o-40*n,i-20*n,80*n,40*n)}t.globalAlpha=1;for(let e=this.pops.length-1;e>=0;e--){let r=this.pops[e];if(r.t+=1/60,r.t>.5){this.pops.splice(e,1);continue}let i=s+r.lane*a+a/2,o=1+Math.max(0,.15-r.t)*3;t.globalAlpha=1-r.t/.5,t.fillStyle=r.color,t.font=`900 ${18*n*o}px Georgia, serif`,t.textAlign=`center`,t.fillText(r.text,i,l-50*n-r.t*60*n),t.globalAlpha=1}e.combo>=3&&(t.fillStyle=`rgba(255,255,255,0.92)`,t.font=`900 ${46*n}px Georgia, serif`,t.textAlign=`center`,t.fillText(e.combo,r/2,c+50*n),t.font=`700 ${14*n}px Georgia, serif`,t.fillStyle=`#c9c3ff`,t.fillText(`COMBO`,r/2,c+82*n))}};function zu(e,t){let n=parseInt(e.slice(1),16);return`rgba(${n>>16},${n>>8&255},${n&255},${Math.min(1,t)})`}var Bu=`15.1.22`,Vu=e(((e,t)=>{function n(e){if(Array.isArray(e))return e}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports})),Hu=e(((e,t)=>{function n(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports})),Uu=e(((e,t)=>{function n(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports})),Wu=e(((e,t)=>{var n=Uu();function r(e,t){if(e){if(typeof e==`string`)return n(e,t);var r={}.toString.call(e).slice(8,-1);return r===`Object`&&e.constructor&&(r=e.constructor.name),r===`Map`||r===`Set`?Array.from(e):r===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports})),Gu=e(((e,t)=>{function n(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports})),Ku=e(((e,t)=>{var n=Vu(),r=Hu(),i=Wu(),a=Gu();function o(e,t){return n(e)||r(e,t)||i(e,t)||a()}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports})),qu=e(((e,t)=>{function n(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports})),Ju=e(((e,t)=>{function n(e){"@babel/helpers - typeof";return t.exports=n=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},t.exports.__esModule=!0,t.exports.default=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports})),Yu=e(((e,t)=>{var n=Ju().default;function r(e,t){if(n(e)!=`object`||!e)return e;var r;if(typeof Symbol<`u`&&(r=e[Symbol.toPrimitive])!==void 0){var i=r.call(e,t||`default`);if(n(i)!=`object`)return i;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports})),Xu=e(((e,t)=>{var n=Ju().default,r=Yu();function i(e){var t=r(e,`string`);return n(t)==`symbol`?t:t+``}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports})),Zu=e(((e,t)=>{var n=Xu();function r(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,`value`in i&&(i.writable=!0),Object.defineProperty(e,n(i.key),i)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports})),Qu=e(((e,t,n)=>{(function(n,r){typeof e==`object`&&t!==void 0?r(e,Ku(),qu(),Zu()):typeof define==`function`&&define.amd?define([`exports`,`@babel/runtime/helpers/slicedToArray`,`@babel/runtime/helpers/classCallCheck`,`@babel/runtime/helpers/createClass`],r):(n=typeof globalThis<`u`?globalThis:n||self,r(n.automationEvents={},n._slicedToArray,n._classCallCheck,n._createClass))})(n,(function(e,t,n,r){var i=function(e,t,n){return{endTime:t,insertTime:n,type:`exponentialRampToValue`,value:e}},a=function(e,t,n){return{endTime:t,insertTime:n,type:`linearRampToValue`,value:e}},o=function(e,t){return{startTime:t,type:`setValue`,value:e}},s=function(e,t,n){return{duration:n,startTime:t,type:`setValueCurve`,values:e}},c=function(e,t,n){var r=n.startTime,i=n.target,a=n.timeConstant;return i+(t-i)*Math.exp((r-e)/a)},l=function(e){return e.type===`exponentialRampToValue`},u=function(e){return e.type===`linearRampToValue`},d=function(e){return l(e)||u(e)},f=function(e){return e.type===`setValue`},p=function(e){return e.type===`setValueCurve`},m=function(e,t,n,r){var i=e[t];return i===void 0?r:d(i)||f(i)?i.value:p(i)?i.values[i.values.length-1]:c(n,m(e,t-1,i.startTime,r),i)},h=function(e,t,n,r,i){return n===void 0?[r.insertTime,i]:d(n)?[n.endTime,n.value]:f(n)?[n.startTime,n.value]:p(n)?[n.startTime+n.duration,n.values[n.values.length-1]]:[n.startTime,m(e,t-1,n.startTime,i)]},g=function(e){return e.type===`cancelAndHold`},_=function(e){return e.type===`cancelScheduledValues`},v=function(e){return g(e)||_(e)?e.cancelTime:l(e)||u(e)?e.endTime:e.startTime},y=function(e,t,n,r){var i=r.endTime,a=r.value;return n===a?a:0<n&&0<a||n<0&&a<0?n*(a/n)**+((e-t)/(i-t)):e<i?n:a},b=function(e,t,n,r){var i=r.endTime,a=r.value;return n+(e-t)/(i-t)*(a-n)},x=function(e,t){var n=Math.floor(t);if(n===t)return e[n];var r=Math.ceil(t);return(1-(t-n))*e[n]+(1-(r-t))*e[r]},S=function(e,t){var n=t.duration,r=t.startTime,i=t.values;return x(i,(e-r)/n*(i.length-1))},C=function(e,t,n){for(var r=e.length,i=Math.max(1,Math.floor(n/t*r))+1,a=e instanceof Float32Array?new Float32Array(i):e.slice(0,i),o=0;o<i;o+=1){var s=o/(i-1)*n/t*(r-1);a[o]=x(e,s)}return a},w=function(e){return e.type===`setTarget`};e.AutomationEventList=function(){function e(t){n(this,e),this._automationEvents=[],this._currenTime=0,this._defaultValue=t}return r(e,[{key:Symbol.iterator,value:function(){return this._automationEvents[Symbol.iterator]()}},{key:`add`,value:function(e){var t=v(e);if(g(e)||_(e)){var n=this._automationEvents.findIndex(function(n){return _(e)&&p(n)?n.startTime+n.duration>=t:v(n)>=t}),r=this._automationEvents[n];if(n!==-1&&(this._automationEvents=this._automationEvents.slice(0,n)),g(e)){var c=this._automationEvents[this._automationEvents.length-1];if(r!==void 0&&d(r)){if(c!==void 0&&w(c))throw Error(`The internal list is malformed.`);var f=c===void 0?r.insertTime:p(c)?c.startTime+c.duration:v(c),m=c===void 0?this._defaultValue:p(c)?c.values[c.values.length-1]:c.value,h=l(r)?y(t,f,m,r):b(t,f,m,r),x=l(r)?i(h,t,this._currenTime):a(h,t,this._currenTime);this._automationEvents.push(x)}if(c!==void 0&&w(c)&&this._automationEvents.push(o(this.getValue(t),t)),c!==void 0&&p(c)&&c.startTime+c.duration>t){var S=t-c.startTime;this._automationEvents[this._automationEvents.length-1]=s(C(c.values,c.duration,S),c.startTime,S)}}}else{var T=this._automationEvents.findIndex(function(e){return v(e)>t}),E=T===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[T-1];if(E!==void 0&&p(E)&&v(E)+E.duration>t)return!1;var D=l(e)?i(e.value,e.endTime,this._currenTime):u(e)?a(e.value,t,this._currenTime):e;if(T===-1)this._automationEvents.push(D);else{if(p(e)&&t+e.duration>v(this._automationEvents[T]))return!1;this._automationEvents.splice(T,0,D)}}return!0}},{key:`flush`,value:function(e){var t=this._automationEvents.findIndex(function(t){return v(t)>e});if(t>1){var n=this._automationEvents.slice(t-1),r=n[0];w(r)&&n.unshift(o(m(this._automationEvents,t-2,r.startTime,this._defaultValue),r.startTime)),this._automationEvents=n}}},{key:`getValue`,value:function(e){if(this._automationEvents.length===0)return this._defaultValue;var n=this._automationEvents.findIndex(function(t){return v(t)>e}),r=this._automationEvents[n],i=(n===-1?this._automationEvents.length:n)-1,a=this._automationEvents[i];if(a!==void 0&&w(a)&&(r===void 0||!d(r)||r.insertTime>e))return c(e,m(this._automationEvents,i-1,a.startTime,this._defaultValue),a);if(a!==void 0&&f(a)&&(r===void 0||!d(r)))return a.value;if(a!==void 0&&p(a)&&(r===void 0||!d(r)||a.startTime+a.duration>e))return e<a.startTime+a.duration?S(e,a):a.values[a.values.length-1];if(a!==void 0&&d(a)&&(r===void 0||!d(r)))return a.value;if(r!==void 0&&l(r)){var o=t(h(this._automationEvents,i,a,r,this._defaultValue),2),s=o[0],g=o[1];return y(e,s,g,r)}if(r!==void 0&&u(r)){var _=t(h(this._automationEvents,i,a,r,this._defaultValue),2),x=_[0],C=_[1];return b(e,x,C,r)}return this._defaultValue}}])}(),e.createCancelAndHoldAutomationEvent=function(e){return{cancelTime:e,type:`cancelAndHold`}},e.createCancelScheduledValuesAutomationEvent=function(e){return{cancelTime:e,type:`cancelScheduledValues`}},e.createExponentialRampToValueAutomationEvent=function(e,t){return{endTime:t,type:`exponentialRampToValue`,value:e}},e.createLinearRampToValueAutomationEvent=function(e,t){return{endTime:t,type:`linearRampToValue`,value:e}},e.createSetTargetAutomationEvent=function(e,t,n){return{startTime:t,target:e,timeConstant:n,type:`setTarget`}},e.createSetValueAutomationEvent=o,e.createSetValueCurveAutomationEvent=s}))}))(),$u=()=>new DOMException(``,`AbortError`),ed=e=>(t,n,[r,i,a],o)=>{e(t[i],[n,r,a],e=>e[0]===n&&e[1]===r,o)},td=e=>(t,n,r)=>{let i=[];for(let e=0;e<r.numberOfInputs;e+=1)i.push(new Set);e.set(t,{activeInputs:i,outputs:new Set,passiveInputs:new WeakMap,renderer:n})},nd=e=>(t,n)=>{e.set(t,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:n})},rd=new WeakSet,id=new WeakMap,ad=new WeakMap,od=new WeakMap,sd=new WeakMap,cd=new WeakMap,ld=new WeakMap,ud=new WeakMap,dd=new WeakMap,fd=new WeakMap,pd={construct(){return pd}},md=e=>{try{new new Proxy(e,pd)}catch{return!1}return!0},hd=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,gd=(e,t)=>{let n=[],r=e.replace(/^[\s]+/,``),i=r.match(hd);for(;i!==null;){let e=i[1].slice(1,-1),a=i[0].replace(/([\s]+)?;?$/,``).replace(e,new URL(e,t).toString());n.push(a),r=r.slice(i[0].length).replace(/^[\s]+/,``),i=r.match(hd)}return[n.join(`;`),r]},_d=e=>{if(e!==void 0&&!Array.isArray(e))throw TypeError(`The parameterDescriptors property of given value for processorCtor is not an array.`)},vd=e=>{if(!md(e))throw TypeError(`The given value for processorCtor should be a constructor.`);if(e.prototype===null||typeof e.prototype!=`object`)throw TypeError(`The given value for processorCtor should have a prototype.`)},yd=(e,t,n,r,i,a,o,s,c,l,u,d,f)=>{let p=0;return(m,h,g={credentials:`omit`})=>{let _=u.get(m);if(_!==void 0&&_.has(h))return Promise.resolve();let v=l.get(m);if(v!==void 0){let e=v.get(h);if(e!==void 0)return e}let y=a(m),b=y.audioWorklet===void 0?i(h).then(([e,t])=>{let[r,i]=gd(e,t);return n(`${r};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${i}
})})(window,'_AWGS')`)}).then(()=>{let e=f._AWGS.pop();if(e===void 0)throw SyntaxError();r(y.currentTime,y.sampleRate,()=>e(class{},void 0,(e,n)=>{if(e.trim()===``)throw t();let r=dd.get(y);if(r!==void 0){if(r.has(e))throw t();vd(n),_d(n.parameterDescriptors),r.set(e,n)}else vd(n),_d(n.parameterDescriptors),dd.set(y,new Map([[e,n]]))},y.sampleRate,void 0,void 0))}):Promise.all([i(h),Promise.resolve(e(d,d))]).then(([[e,t],n])=>{let r=p+1;p=r;let[i,a]=gd(e,t),l=`${i};((AudioWorkletProcessor,registerProcessor)=>{${a}
})(${n?`AudioWorkletProcessor`:`class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}`},(n,p)=>registerProcessor(n,class extends p{${n?``:`__c = (a) => a.forEach(e=>this.__b.add(e.buffer));`}process(i,o,p){${n?``:`i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));`}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${r}',class extends AudioWorkletProcessor{process(){return !1}})`,u=new Blob([l],{type:`application/javascript; charset=utf-8`}),d=URL.createObjectURL(u);return y.audioWorklet.addModule(d,g).then(()=>{if(s(y))return y;let e=o(y);return e.audioWorklet.addModule(d,g).then(()=>e)}).then(e=>{if(c===null)throw SyntaxError();try{new c(e,`__sac${r}`)}catch{throw SyntaxError()}}).finally(()=>URL.revokeObjectURL(d))});return v===void 0?l.set(m,new Map([[h,b]])):v.set(h,b),b.then(()=>{let e=u.get(m);e===void 0?u.set(m,new Set([h])):e.add(h)}).finally(()=>{let e=l.get(m);e!==void 0&&e.delete(h)}),b}},bd=(e,t)=>{let n=e.get(t);if(n===void 0)throw Error(`A value with the given key could not be found.`);return n},xd=(e,t)=>{let n=Array.from(e).filter(t);if(n.length>1)throw Error(`More than one element was found.`);if(n.length===0)throw Error(`No element was found.`);let[r]=n;return e.delete(r),r},Sd=(e,t,n,r)=>{let i=bd(e,t),a=xd(i,e=>e[0]===n&&e[1]===r);return i.size===0&&e.delete(t),a},Cd=e=>bd(ld,e),wd=e=>{if(rd.has(e))throw Error(`The AudioNode is already stored.`);rd.add(e),Cd(e).forEach(e=>e(!0))},Td=e=>`port`in e,Ed=e=>{if(!rd.has(e))throw Error(`The AudioNode is not stored.`);rd.delete(e),Cd(e).forEach(e=>e(!1))},Dd=(e,t)=>{!Td(e)&&t.every(e=>e.size===0)&&Ed(e)},Od=(e,t,n,r,i,a,o,s,c,l,u,d,f)=>{let p=new WeakMap;return(m,h,g,_,v)=>{let{activeInputs:y,passiveInputs:b}=a(h),{outputs:x}=a(m),S=s(m),C=a=>{let s=c(h),l=c(m);if(a){let t=Sd(b,m,g,_);e(y,m,t,!1),!v&&!d(m)&&n(l,s,g,_),f(h)&&wd(h)}else{let e=r(y,m,g,_);t(b,_,e,!1),!v&&!d(m)&&i(l,s,g,_);let n=o(h);if(n===0)u(h)&&Dd(h,y);else{let e=p.get(h);e!==void 0&&clearTimeout(e),p.set(h,setTimeout(()=>{u(h)&&Dd(h,y)},n*1e3))}}};return l(x,[h,g,_],e=>e[0]===h&&e[1]===g&&e[2]===_,!0)?(S.add(C),u(m)?e(y,m,[g,_,C],!0):t(b,_,[m,g,C],!0),!0):!1}},kd=e=>(t,n,[r,i,a],o)=>{let s=t.get(r);s===void 0?t.set(r,new Set([[i,n,a]])):e(s,[i,n,a],e=>e[0]===i&&e[1]===n,o)},Ad=e=>(t,n)=>{let r=e(t,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`discrete`,gain:0});n.connect(r).connect(t.destination);let i=()=>{n.removeEventListener(`ended`,i),n.disconnect(r),r.disconnect()};n.addEventListener(`ended`,i)},jd=e=>(t,n)=>{e(t).add(n)},Md={channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`,fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},Nd=(e,t,n,r,i,a)=>class extends e{constructor(e,n){let o=i(e),s=r(o,{...Md,...n}),c=a(o)?t():null;super(e,!1,s,c),this._nativeAnalyserNode=s}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(e){this._nativeAnalyserNode.fftSize=e}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(e){let t=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=e,!(e>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=t,n()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(e){let t=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=e,!(this._nativeAnalyserNode.maxDecibels>e))throw this._nativeAnalyserNode.minDecibels=t,n()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(e){this._nativeAnalyserNode.smoothingTimeConstant=e}getByteFrequencyData(e){this._nativeAnalyserNode.getByteFrequencyData(e)}getByteTimeDomainData(e){this._nativeAnalyserNode.getByteTimeDomainData(e)}getFloatFrequencyData(e){this._nativeAnalyserNode.getFloatFrequencyData(e)}getFloatTimeDomainData(e){this._nativeAnalyserNode.getFloatTimeDomainData(e)}},Pd=(e,t)=>e.context===t,Fd=(e,t,n)=>()=>{let r=new WeakMap,i=async(i,a)=>{let o=t(i);return Pd(o,a)||(o=e(a,{channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,fftSize:o.fftSize,maxDecibels:o.maxDecibels,minDecibels:o.minDecibels,smoothingTimeConstant:o.smoothingTimeConstant})),r.set(a,o),await n(i,a,o),o};return{render(e,t){let n=r.get(t);return n===void 0?i(e,t):Promise.resolve(n)}}},Id=e=>{try{e.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},Ld=()=>new DOMException(``,`IndexSizeError`),Rd=e=>{e.getChannelData=(t=>n=>{try{return t.call(e,n)}catch(e){throw e.code===12?Ld():e}})(e.getChannelData)},zd={numberOfChannels:1},Bd=(e,t,n,r,i,a,o,s)=>{let c=null;return class l{constructor(l){if(i===null)throw Error(`Missing the native OfflineAudioContext constructor.`);let{length:u,numberOfChannels:d,sampleRate:f}={...zd,...l};c===null&&(c=new i(1,1,44100));let p=r!==null&&t(a,a)?new r({length:u,numberOfChannels:d,sampleRate:f}):c.createBuffer(d,u,f);if(p.numberOfChannels===0)throw n();return typeof p.copyFromChannel==`function`?t(Id,()=>Id(p))||s(p):(o(p),Rd(p)),e.add(p),p}static[Symbol.hasInstance](t){return typeof t==`object`&&!!t&&Object.getPrototypeOf(t)===l.prototype||e.has(t)}}},Vd=-34028234663852886e22,Hd=34028234663852886e22,Ud=e=>rd.has(e),Wd={buffer:null,channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`,loop:!1,loopEnd:0,loopStart:0,playbackRate:1},Gd=(e,t,n,r,i,a,o,s)=>class extends e{constructor(e,r){let s=a(e),c={...Wd,...r},l=i(s,c),u=o(s),d=u?t():null;super(e,!1,l,d),this._audioBufferSourceNodeRenderer=d,this._isBufferNullified=!1,this._isBufferSet=c.buffer!==null,this._nativeAudioBufferSourceNode=l,this._onended=null,this._playbackRate=n(this,u,l.playbackRate,Hd,Vd)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(e){if(this._nativeAudioBufferSourceNode.buffer=e,e!==null){if(this._isBufferSet)throw r();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(e){this._nativeAudioBufferSourceNode.loop=e}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(e){this._nativeAudioBufferSourceNode.loopEnd=e}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(e){this._nativeAudioBufferSourceNode.loopStart=e}get onended(){return this._onended}set onended(e){let t=typeof e==`function`?s(this,e):null;this._nativeAudioBufferSourceNode.onended=t;let n=this._nativeAudioBufferSourceNode.onended;this._onended=n!==null&&n===t?e:n}get playbackRate(){return this._playbackRate}start(e=0,t=0,n){if(this._nativeAudioBufferSourceNode.start(e,t,n),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=n===void 0?[e,t]:[e,t,n]),this.context.state!==`closed`){wd(this);let e=()=>{this._nativeAudioBufferSourceNode.removeEventListener(`ended`,e),Ud(this)&&Ed(this)};this._nativeAudioBufferSourceNode.addEventListener(`ended`,e)}}stop(e=0){this._nativeAudioBufferSourceNode.stop(e),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=e)}},Kd=(e,t,n,r,i)=>()=>{let a=new WeakMap,o=null,s=null,c=async(c,l)=>{let u=n(c),d=Pd(u,l);return d||(u=t(l,{buffer:u.buffer,channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,loop:u.loop,loopEnd:u.loopEnd,loopStart:u.loopStart,playbackRate:u.playbackRate.value}),o!==null&&u.start(...o),s!==null&&u.stop(s)),a.set(l,u),d?await e(l,c.playbackRate,u.playbackRate):await r(l,c.playbackRate,u.playbackRate),await i(c,l,u),u};return{set start(e){o=e},set stop(e){s=e},render(e,t){let n=a.get(t);return n===void 0?c(e,t):Promise.resolve(n)}}},qd=e=>`playbackRate`in e,Jd=e=>`frequency`in e&&`gain`in e,Yd=e=>`offset`in e,Xd=e=>!(`frequency`in e)&&`gain`in e,Zd=e=>`detune`in e&&`frequency`in e&&!(`gain`in e),Qd=e=>`pan`in e,$d=e=>bd(id,e),ef=e=>bd(od,e),tf=(e,t)=>{let{activeInputs:n}=$d(e);n.forEach(n=>n.forEach(([n])=>{t.includes(e)||tf(n,[...t,e])}));let r=qd(e)?[e.playbackRate]:Td(e)?Array.from(e.parameters.values()):Jd(e)?[e.Q,e.detune,e.frequency,e.gain]:Yd(e)?[e.offset]:Xd(e)?[e.gain]:Zd(e)?[e.detune,e.frequency]:Qd(e)?[e.pan]:[];for(let e of r){let n=ef(e);n!==void 0&&n.activeInputs.forEach(([e])=>tf(e,t))}Ud(e)&&Ed(e)},nf=e=>{tf(e.destination,[])},rf=e=>e===void 0||typeof e==`number`||typeof e==`string`&&(e===`balanced`||e===`interactive`||e===`playback`),af=(e,t,n,r,i,a,o,s,c)=>class extends e{constructor(e={}){if(c===null)throw Error(`Missing the native AudioContext constructor.`);let t;try{t=new c(e)}catch(e){throw e.code===12&&e.message===`sampleRate is not in range`?n():e}if(t===null)throw r();if(!rf(e.latencyHint))throw TypeError(`The provided value '${e.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(e.sampleRate!==void 0&&t.sampleRate!==e.sampleRate)throw n();super(t,2);let{latencyHint:i}=e,{sampleRate:a}=t;if(this._baseLatency=typeof t.baseLatency==`number`?t.baseLatency:i===`balanced`?512/a:i===`interactive`||i===void 0?256/a:i===`playback`?1024/a:Math.max(2,Math.min(128,Math.round(i*a/128)))*128/a,this._nativeAudioContext=t,c.name===`webkitAudioContext`?(this._nativeGainNode=t.createGain(),this._nativeOscillatorNode=t.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(t.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,t.state===`running`){this._state=`suspended`;let e=()=>{this._state===`suspended`&&(this._state=null),t.removeEventListener(`statechange`,e)};t.addEventListener(`statechange`,e)}}get baseLatency(){return this._baseLatency}get state(){return this._state===null?this._nativeAudioContext.state:this._state}close(){return this.state===`closed`?this._nativeAudioContext.close().then(()=>{throw t()}):(this._state===`suspended`&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),nf(this)}))}createMediaElementSource(e){return new i(this,{mediaElement:e})}createMediaStreamDestination(){return new a(this)}createMediaStreamSource(e){return new o(this,{mediaStream:e})}createMediaStreamTrackSource(e){return new s(this,{mediaStreamTrack:e})}resume(){return this._state===`suspended`?new Promise((e,t)=>{let n=()=>{this._nativeAudioContext.removeEventListener(`statechange`,n),this._nativeAudioContext.state===`running`?e():this.resume().then(e,t)};this._nativeAudioContext.addEventListener(`statechange`,n)}):this._nativeAudioContext.resume().catch(e=>{throw e===void 0||e.code===15?t():e})}suspend(){return this._nativeAudioContext.suspend().catch(e=>{throw e===void 0?t():e})}},of=(e,t,n,r,i,a,o,s)=>class extends e{constructor(e,n){let r=a(e),c=o(r),l=i(r,n,c),u=c?t(s):null;super(e,!1,l,u),this._isNodeOfNativeOfflineAudioContext=c,this._nativeAudioDestinationNode=l}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(e){if(this._isNodeOfNativeOfflineAudioContext)throw r();if(e>this._nativeAudioDestinationNode.maxChannelCount)throw n();this._nativeAudioDestinationNode.channelCount=e}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(e){if(this._isNodeOfNativeOfflineAudioContext)throw r();this._nativeAudioDestinationNode.channelCountMode=e}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},sf=e=>{let t=new WeakMap,n=async(n,r)=>{let i=r.destination;return t.set(r,i),await e(n,r,i),i};return{render(e,r){let i=t.get(r);return i===void 0?n(e,r):Promise.resolve(i)}}},cf=(e,t,n,r,i,a,o,s)=>(c,l)=>{let u=l.listener,{forwardX:d,forwardY:f,forwardZ:p,positionX:m,positionY:h,positionZ:g,upX:_,upY:v,upZ:y}=u.forwardX===void 0?(()=>{let d=new Float32Array(1),f=t(l,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`speakers`,numberOfInputs:9}),p=o(l),m=!1,h=[0,0,-1,0,1,0],g=[0,0,0],_=()=>{if(m)return;m=!0;let e=r(l,256,9,0);e.onaudioprocess=({inputBuffer:e})=>{let t=[a(e,d,0),a(e,d,1),a(e,d,2),a(e,d,3),a(e,d,4),a(e,d,5)];t.some((e,t)=>e!==h[t])&&(u.setOrientation(...t),h=t);let n=[a(e,d,6),a(e,d,7),a(e,d,8)];n.some((e,t)=>e!==g[t])&&(u.setPosition(...n),g=n)},f.connect(e)},v=e=>t=>{t!==h[e]&&(h[e]=t,u.setOrientation(...h))},y=e=>t=>{t!==g[e]&&(g[e]=t,u.setPosition(...g))},b=(t,r,a)=>{let o=n(l,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`discrete`,offset:r});o.connect(f,0,t),o.start(),Object.defineProperty(o.offset,"defaultValue",{get(){return r}});let u=e({context:c},p,o.offset,Hd,Vd);return s(u,`value`,e=>()=>e.call(u),e=>t=>{try{e.call(u,t)}catch(e){if(e.code!==9)throw e}_(),p&&a(t)}),u.cancelAndHoldAtTime=(e=>p?()=>{throw i()}:(...t)=>{let n=e.apply(u,t);return _(),n})(u.cancelAndHoldAtTime),u.cancelScheduledValues=(e=>p?()=>{throw i()}:(...t)=>{let n=e.apply(u,t);return _(),n})(u.cancelScheduledValues),u.exponentialRampToValueAtTime=(e=>p?()=>{throw i()}:(...t)=>{let n=e.apply(u,t);return _(),n})(u.exponentialRampToValueAtTime),u.linearRampToValueAtTime=(e=>p?()=>{throw i()}:(...t)=>{let n=e.apply(u,t);return _(),n})(u.linearRampToValueAtTime),u.setTargetAtTime=(e=>p?()=>{throw i()}:(...t)=>{let n=e.apply(u,t);return _(),n})(u.setTargetAtTime),u.setValueAtTime=(e=>p?()=>{throw i()}:(...t)=>{let n=e.apply(u,t);return _(),n})(u.setValueAtTime),u.setValueCurveAtTime=(e=>p?()=>{throw i()}:(...t)=>{let n=e.apply(u,t);return _(),n})(u.setValueCurveAtTime),u};return{forwardX:b(0,0,v(0)),forwardY:b(1,0,v(1)),forwardZ:b(2,-1,v(2)),positionX:b(6,0,y(0)),positionY:b(7,0,y(1)),positionZ:b(8,0,y(2)),upX:b(3,0,v(3)),upY:b(4,1,v(4)),upZ:b(5,0,v(5))}})():u;return{get forwardX(){return d},get forwardY(){return f},get forwardZ(){return p},get positionX(){return m},get positionY(){return h},get positionZ(){return g},get upX(){return _},get upY(){return v},get upZ(){return y}}},lf=e=>`context`in e,uf=e=>lf(e[0]),df=(e,t,n,r)=>{for(let t of e)if(n(t)){if(r)return!1;throw Error(`The set contains at least one similar element.`)}return e.add(t),!0},ff=(e,t,[n,r],i)=>{df(e,[t,n,r],e=>e[0]===t&&e[1]===n,i)},pf=(e,[t,n,r],i)=>{let a=e.get(t);a===void 0?e.set(t,new Set([[n,r]])):df(a,[n,r],e=>e[0]===n,i)},mf=e=>`inputs`in e,hf=(e,t,n,r)=>{if(mf(t)){let i=t.inputs[r];return e.connect(i,n,0),[i,n,0]}return e.connect(t,n,r),[t,n,r]},gf=(e,t,n)=>{for(let r of e)if(r[0]===t&&r[1]===n)return e.delete(r),r;return null},_f=(e,t,n)=>xd(e,e=>e[0]===t&&e[1]===n),vf=(e,t)=>{if(!Cd(e).delete(t))throw Error(`Missing the expected event listener.`)},yf=(e,t,n)=>{let r=bd(e,t),i=xd(r,e=>e[0]===n);return r.size===0&&e.delete(t),i},bf=(e,t,n,r)=>{mf(t)?e.disconnect(t.inputs[r],n,0):e.disconnect(t,n,r)},xf=e=>bd(ad,e),Sf=e=>bd(sd,e),Cf=e=>ud.has(e),wf=e=>!rd.has(e),Tf=(e,t)=>new Promise(n=>{if(t!==null)n(!0);else{let t=e.createScriptProcessor(256,1,1),r=e.createGain(),i=e.createBuffer(1,2,44100),a=i.getChannelData(0);a[0]=1,a[1]=1;let o=e.createBufferSource();o.buffer=i,o.loop=!0,o.connect(t).connect(e.destination),o.connect(r),o.disconnect(r),t.onaudioprocess=r=>{let i=r.inputBuffer.getChannelData(0);Array.prototype.some.call(i,e=>e===1)?n(!0):n(!1),o.stop(),t.onaudioprocess=null,o.disconnect(t),t.disconnect(e.destination)},o.start()}}),Ef=(e,t)=>{let n=new Map;for(let t of e)for(let e of t){let t=n.get(e);n.set(e,t===void 0?1:t+1)}n.forEach((e,n)=>t(n,e))},Df=e=>`context`in e,Of=e=>{let t=new Map;e.connect=(e=>(n,r=0,i=0)=>{let a=Df(n)?e(n,r,i):e(n,r),o=t.get(n);return o===void 0?t.set(n,[{input:i,output:r}]):o.every(e=>e.input!==i||e.output!==r)&&o.push({input:i,output:r}),a})(e.connect.bind(e)),e.disconnect=(n=>(r,i,a)=>{if(n.apply(e),r===void 0)t.clear();else if(typeof r==`number`)for(let[e,n]of t){let i=n.filter(e=>e.output!==r);i.length===0?t.delete(e):t.set(e,i)}else if(t.has(r)){if(i===void 0)t.delete(r);else{let e=t.get(r);if(e!==void 0){let n=e.filter(e=>e.output!==i&&(e.input!==a||a===void 0));n.length===0?t.delete(r):t.set(r,n)}}}for(let[n,r]of t)r.forEach(t=>{Df(n)?e.connect(n,t.output,t.input):e.connect(n,t.output)})})(e.disconnect)},kf=(e,t,n,r)=>{let{activeInputs:i,passiveInputs:a}=ef(t),{outputs:o}=$d(e),s=Cd(e),c=o=>{let s=xf(e),c=Sf(t);if(o){let t=yf(a,e,n);ff(i,e,t,!1),!r&&!Cf(e)&&s.connect(c,n)}else{let t=_f(i,e,n);pf(a,t,!1),!r&&!Cf(e)&&s.disconnect(c,n)}};return df(o,[t,n],e=>e[0]===t&&e[1]===n,!0)?(s.add(c),Ud(e)?ff(i,e,[n,c],!0):pf(a,[e,n,c],!0),!0):!1},Af=(e,t,n,r)=>{let{activeInputs:i,passiveInputs:a}=$d(t),o=gf(i[r],e,n);return o===null?[Sd(a,e,n,r)[2],!1]:[o[2],!0]},jf=(e,t,n)=>{let{activeInputs:r,passiveInputs:i}=ef(t),a=gf(r,e,n);return a===null?[yf(i,e,n)[1],!1]:[a[2],!0]},Mf=(e,t,n,r,i)=>{let[a,o]=Af(e,n,r,i);if(a!==null&&(vf(e,a),o&&!t&&!Cf(e)&&bf(xf(e),xf(n),r,i)),Ud(n)){let{activeInputs:e}=$d(n);Dd(n,e)}},Nf=(e,t,n,r)=>{let[i,a]=jf(e,n,r);i!==null&&(vf(e,i),a&&!t&&!Cf(e)&&xf(e).disconnect(Sf(n),r))},Pf=(e,t)=>{let n=$d(e),r=[];for(let i of n.outputs)uf(i)?Mf(e,t,...i):Nf(e,t,...i),r.push(i[0]);return n.outputs.clear(),r},Ff=(e,t,n)=>{let r=$d(e),i=[];for(let a of r.outputs)a[1]===n&&(uf(a)?Mf(e,t,...a):Nf(e,t,...a),i.push(a[0]),r.outputs.delete(a));return i},If=(e,t,n,r,i)=>{let a=$d(e);return Array.from(a.outputs).filter(e=>e[0]===n&&(r===void 0||e[1]===r)&&(i===void 0||e[2]===i)).map(n=>(uf(n)?Mf(e,t,...n):Nf(e,t,...n),a.outputs.delete(n),n[0]))},Lf=(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)=>class extends l{constructor(t,r,i,a){super(i),this._context=t,this._nativeAudioNode=i;let o=u(t);d(o)&&!0!==n(Tf,()=>Tf(o,h))&&Of(i),ad.set(this,i),ld.set(this,new Set),t.state!==`closed`&&r&&wd(this),e(this,a,i)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(e){this._nativeAudioNode.channelCount=e}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(e){this._nativeAudioNode.channelCountMode=e}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(e){this._nativeAudioNode.channelInterpretation=e}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(e,n=0,s=0){if(n<0||n>=this._nativeAudioNode.numberOfOutputs)throw i();let l=m(u(this._context));if(f(e)||p(e))throw a();if(lf(e)){let i=xf(e);try{let t=hf(this._nativeAudioNode,i,n,s),r=wf(this);(l||r)&&this._nativeAudioNode.disconnect(...t),this.context.state!==`closed`&&!r&&wf(e)&&wd(e)}catch(e){throw e.code===12?a():e}return t(this,e,n,s,l)&&Ef(c([this],e),r(l)),e}let d=Sf(e);if(d.name===`playbackRate`&&d.maxValue===1024)throw o();try{this._nativeAudioNode.connect(d,n),(l||wf(this))&&this._nativeAudioNode.disconnect(d,n)}catch(e){throw e.code===12?a():e}kf(this,e,n,l)&&Ef(c([this],e),r(l))}disconnect(e,t,n){let r,o=m(u(this._context));if(e===void 0)r=Pf(this,o);else if(typeof e==`number`){if(e<0||e>=this.numberOfOutputs)throw i();r=Ff(this,o,e)}else{if(t!==void 0&&(t<0||t>=this.numberOfOutputs)||lf(e)&&n!==void 0&&(n<0||n>=e.numberOfInputs))throw i();if(r=If(this,o,e,t,n),r.length===0)throw a()}for(let e of r)Ef(c([this],e),s)}},Rf=(e,t,n,r,i,a,o,s,c,l,u,d,f)=>(p,m,h,g=null,_=null)=>{let v=h.value,y=new Qu.AutomationEventList(v),b=m?r(y):null,x={get defaultValue(){return v},get maxValue(){return g===null?h.maxValue:g},get minValue(){return _===null?h.minValue:_},get value(){return h.value},set value(e){h.value=e,x.setValueAtTime(e,p.context.currentTime)},cancelAndHoldAtTime(e){if(typeof h.cancelAndHoldAtTime==`function`)b===null&&y.flush(p.context.currentTime),y.add(i(e)),h.cancelAndHoldAtTime(e);else{let t=Array.from(y).pop();b===null&&y.flush(p.context.currentTime),y.add(i(e));let n=Array.from(y).pop();h.cancelScheduledValues(e),t!==n&&n!==void 0&&(n.type===`exponentialRampToValue`?h.exponentialRampToValueAtTime(n.value,n.endTime):n.type===`linearRampToValue`?h.linearRampToValueAtTime(n.value,n.endTime):n.type===`setValue`?h.setValueAtTime(n.value,n.startTime):n.type===`setValueCurve`&&h.setValueCurveAtTime(n.values,n.startTime,n.duration))}return x},cancelScheduledValues(e){return b===null&&y.flush(p.context.currentTime),y.add(a(e)),h.cancelScheduledValues(e),x},exponentialRampToValueAtTime(e,t){if(e===0||!Number.isFinite(t)||t<0)throw RangeError();let n=p.context.currentTime;return b===null&&y.flush(n),Array.from(y).length===0&&(y.add(l(v,n)),h.setValueAtTime(v,n)),y.add(o(e,t)),h.exponentialRampToValueAtTime(e,t),x},linearRampToValueAtTime(e,t){let n=p.context.currentTime;return b===null&&y.flush(n),Array.from(y).length===0&&(y.add(l(v,n)),h.setValueAtTime(v,n)),y.add(s(e,t)),h.linearRampToValueAtTime(e,t),x},setTargetAtTime(e,t,n){return b===null&&y.flush(p.context.currentTime),y.add(c(e,t,n)),h.setTargetAtTime(e,t,n),x},setValueAtTime(e,t){return b===null&&y.flush(p.context.currentTime),y.add(l(e,t)),h.setValueAtTime(e,t),x},setValueCurveAtTime(e,t,n){let r=e instanceof Float32Array?e:new Float32Array(e);if(d!==null&&d.name===`webkitAudioContext`){let e=t+n,i=p.context.sampleRate,a=Math.ceil(t*i),o=Math.floor(e*i),s=o-a,c=new Float32Array(s);for(let e=0;e<s;e+=1){let o=(r.length-1)/n*((a+e)/i-t),s=Math.floor(o),l=Math.ceil(o);c[e]=s===l?r[s]:(1-(o-s))*r[s]+(1-(l-o))*r[l]}b===null&&y.flush(p.context.currentTime),y.add(u(c,t,n)),h.setValueCurveAtTime(c,t,n);let l=o/i;l<e&&f(x,c[c.length-1],l),f(x,r[r.length-1],e)}else b===null&&y.flush(p.context.currentTime),y.add(u(r,t,n)),h.setValueCurveAtTime(r,t,n);return x}};return n.set(x,h),t.set(x,p),e(x,b),x},zf=e=>({replay(t){for(let n of e)if(n.type===`exponentialRampToValue`){let{endTime:e,value:r}=n;t.exponentialRampToValueAtTime(r,e)}else if(n.type===`linearRampToValue`){let{endTime:e,value:r}=n;t.linearRampToValueAtTime(r,e)}else if(n.type===`setTarget`){let{startTime:e,target:r,timeConstant:i}=n;t.setTargetAtTime(r,e,i)}else if(n.type===`setValue`){let{startTime:e,value:r}=n;t.setValueAtTime(r,e)}else if(n.type===`setValueCurve`){let{duration:e,startTime:r,values:i}=n;t.setValueCurveAtTime(i,r,e)}else throw Error(`Can't apply an unknown automation.`)}}),Bf=class{constructor(e){this._map=new Map(e)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(e,t=null){return this._map.forEach((n,r)=>e.call(t,n,r,this))}get(e){return this._map.get(e)}has(e){return this._map.has(e)}keys(){return this._map.keys()}values(){return this._map.values()}},Vf={channelCount:2,channelCountMode:`explicit`,channelInterpretation:`speakers`,numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}},Hf=(e,t,n,r,i,a,o,s,c,l,u,d,f,p)=>class extends t{constructor(t,p,m){let h=s(t),g=c(h),_=u({...Vf,...m});f(_);let v=dd.get(h)?.get(p),y=i(g||h.state!==`closed`?h:o(h)??h,g?null:t.baseLatency,l,p,v,_),b=g?r(p,_,v):null;super(t,!0,y,b);let x=[];y.parameters.forEach((e,t)=>{let r=n(this,g,e);x.push([t,r])}),this._nativeAudioWorkletNode=y,this._onprocessorerror=null,this._parameters=new Bf(x),g&&e(h,this);let{activeInputs:S}=a(this);d(y,S)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(e){let t=typeof e==`function`?p(this,e):null;this._nativeAudioWorkletNode.onprocessorerror=t;let n=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=n!==null&&n===t?e:n}get parameters(){return this._parameters===null?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}};function Uf(e,t,n,r,i){if(typeof e.copyFromChannel==`function`)t[n].byteLength===0&&(t[n]=new Float32Array(128)),e.copyFromChannel(t[n],r,i);else{let a=e.getChannelData(r);if(t[n].byteLength===0)t[n]=a.slice(i,i+128);else{let e=new Float32Array(a.buffer,i*Float32Array.BYTES_PER_ELEMENT,128);t[n].set(e)}}}var Wf=(e,t,n,r,i)=>{typeof e.copyToChannel==`function`?t[n].byteLength!==0&&e.copyToChannel(t[n],r,i):t[n].byteLength!==0&&e.getChannelData(r).set(t[n],i)},Gf=(e,t)=>{let n=[];for(let r=0;r<e;r+=1){let e=[],i=typeof t==`number`?t:t[r];for(let t=0;t<i;t+=1)e.push(new Float32Array(128));n.push(e)}return n},Kf=(e,t)=>bd(bd(fd,e),xf(t)),qf=async(e,t,n,r,i,a,o)=>{let s=t===null?Math.ceil(e.context.length/128)*128:t.length,c=r.channelCount*r.numberOfInputs,l=i.reduce((e,t)=>e+t,0),u=l===0?null:n.createBuffer(l,s,n.sampleRate);if(a===void 0)throw Error(`Missing the processor constructor.`);let d=$d(e),f=await Kf(n,e),p=Gf(r.numberOfInputs,r.channelCount),m=Gf(r.numberOfOutputs,i),h=Array.from(e.parameters.keys()).reduce((e,t)=>({...e,[t]:new Float32Array(128)}),{});for(let l=0;l<s;l+=128){if(r.numberOfInputs>0&&t!==null)for(let e=0;e<r.numberOfInputs;e+=1)for(let n=0;n<r.channelCount;n+=1)Uf(t,p[e],n,n,l);a.parameterDescriptors!==void 0&&t!==null&&a.parameterDescriptors.forEach(({name:e},n)=>{Uf(t,h,e,c+n,l)});for(let e=0;e<r.numberOfInputs;e+=1)for(let t=0;t<i[e];t+=1)m[e][t].byteLength===0&&(m[e][t]=new Float32Array(128));try{let e=p.map((e,t)=>d.activeInputs[t].size===0?[]:e),t=o(l/n.sampleRate,n.sampleRate,()=>f.process(e,m,h));if(u!==null)for(let e=0,t=0;e<r.numberOfOutputs;e+=1){for(let n=0;n<i[e];n+=1)Wf(u,m[e],n,t+n,l);t+=i[e]}if(!t)break}catch(t){e.dispatchEvent(new ErrorEvent(`processorerror`,{colno:t.colno,filename:t.filename,lineno:t.lineno,message:t.message}));break}}return u},Jf=(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)=>(g,_,v)=>{let y=new WeakMap,b=null,x=async(s,x)=>{let S=u(s),C=null,w=Pd(S,x),T=Array.isArray(_.outputChannelCount)?_.outputChannelCount:Array.from(_.outputChannelCount);if(d===null){let e=T.reduce((e,t)=>e+t,0),n=i(x,{channelCount:Math.max(1,e),channelCountMode:`explicit`,channelInterpretation:`discrete`,numberOfOutputs:Math.max(1,e)}),a=[];for(let e=0;e<s.numberOfOutputs;e+=1)a.push(r(x,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`speakers`,numberOfInputs:T[e]}));let l=o(x,{channelCount:_.channelCount,channelCountMode:_.channelCountMode,channelInterpretation:_.channelInterpretation,gain:1});l.connect=t.bind(null,a),l.disconnect=c.bind(null,a),C=[n,a,l]}else w||(S=new d(x,g));if(y.set(x,C===null?S:C[2]),C!==null){if(b===null){if(v===void 0)throw Error(`Missing the processor constructor.`);if(f===null)throw Error(`Missing the native OfflineAudioContext constructor.`);let e=s.channelCount*s.numberOfInputs,t=v.parameterDescriptors===void 0?0:v.parameterDescriptors.length,n=e+t;b=qf(s,n===0?null:await(async()=>{let c=new f(n,Math.ceil(s.context.length/128)*128,x.sampleRate),l=[],u=[];for(let e=0;e<_.numberOfInputs;e+=1)l.push(o(c,{channelCount:_.channelCount,channelCountMode:_.channelCountMode,channelInterpretation:_.channelInterpretation,gain:1})),u.push(i(c,{channelCount:_.channelCount,channelCountMode:`explicit`,channelInterpretation:`discrete`,numberOfOutputs:_.channelCount}));let d=await Promise.all(Array.from(s.parameters.values()).map(async e=>{let t=a(c,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`discrete`,offset:e.value});return await p(c,e,t.offset),t})),g=r(c,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`speakers`,numberOfInputs:Math.max(1,e+t)});for(let e=0;e<_.numberOfInputs;e+=1){l[e].connect(u[e]);for(let t=0;t<_.channelCount;t+=1)u[e].connect(g,t,e*_.channelCount+t)}for(let[t,n]of d.entries())n.connect(g,0,e+t),n.start(0);return g.connect(c.destination),await Promise.all(l.map(e=>m(s,c,e))),h(c)})(),x,_,T,v,l)}let e=await b,t=n(x,{buffer:null,channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`,loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[c,u,d]=C;e!==null&&(t.buffer=e,t.start(0)),t.connect(c);for(let e=0,t=0;e<s.numberOfOutputs;e+=1){let n=u[e];for(let r=0;r<T[e];r+=1)c.connect(n,t+r,r);t+=T[e]}return d}if(w)for(let[t,n]of s.parameters.entries())await e(x,n,S.parameters.get(t));else for(let[e,t]of s.parameters.entries())await p(x,t,S.parameters.get(e));return await m(s,x,S),S};return{render(e,t){s(t,e);let n=y.get(t);return n===void 0?x(e,t):Promise.resolve(n)}}},Yf=(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y)=>class extends m{constructor(t,n){super(t,n),this._nativeContext=t,this._audioWorklet=e===void 0?void 0:{addModule:(t,n)=>e(this,t,n)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new t(this)}createBiquadFilter(){return new i(this)}createBuffer(e,t,r){return new n({length:t,numberOfChannels:e,sampleRate:r})}createBufferSource(){return new r(this)}createChannelMerger(e=6){return new a(this,{numberOfInputs:e})}createChannelSplitter(e=6){return new o(this,{numberOfOutputs:e})}createConstantSource(){return new s(this)}createConvolver(){return new c(this)}createDelay(e=1){return new u(this,{maxDelayTime:e})}createDynamicsCompressor(){return new d(this)}createGain(){return new f(this)}createIIRFilter(e,t){return new p(this,{feedback:t,feedforward:e})}createOscillator(){return new h(this)}createPanner(){return new g(this)}createPeriodicWave(e,t,n={disableNormalization:!1}){return new _(this,{...n,imag:t,real:e})}createStereoPanner(){return new v(this)}createWaveShaper(){return new y(this)}decodeAudioData(e,t,n){return l(this._nativeContext,e).then(e=>(typeof t==`function`&&t(e),e),e=>{throw typeof n==`function`&&n(e),e})}},Xf={Q:1,channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`,detune:0,frequency:350,gain:0,type:`lowpass`},Zf=(e,t,n,r,i,a,o,s)=>class extends e{constructor(e,r){let c=a(e),l=i(c,{...Xf,...r}),u=o(c),d=u?n():null;super(e,!1,l,d),this._Q=t(this,u,l.Q,Hd,Vd),this._detune=t(this,u,l.detune,1200*Math.log2(Hd),-1200*Math.log2(Hd)),this._frequency=t(this,u,l.frequency,e.sampleRate/2,0),this._gain=t(this,u,l.gain,40*Math.log10(Hd),Vd),this._nativeBiquadFilterNode=l,s(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(e){this._nativeBiquadFilterNode.type=e}getFrequencyResponse(e,t,n){try{this._nativeBiquadFilterNode.getFrequencyResponse(e,t,n)}catch(e){throw e.code===11?r():e}if(e.length!==t.length||t.length!==n.length)throw r()}},Qf=(e,t,n,r,i)=>()=>{let a=new WeakMap,o=async(o,s)=>{let c=n(o),l=Pd(c,s);return l||(c=t(s,{Q:c.Q.value,channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,detune:c.detune.value,frequency:c.frequency.value,gain:c.gain.value,type:c.type})),a.set(s,c),l?(await e(s,o.Q,c.Q),await e(s,o.detune,c.detune),await e(s,o.frequency,c.frequency),await e(s,o.gain,c.gain)):(await r(s,o.Q,c.Q),await r(s,o.detune,c.detune),await r(s,o.frequency,c.frequency),await r(s,o.gain,c.gain)),await i(o,s,c),c};return{render(e,t){let n=a.get(t);return n===void 0?o(e,t):Promise.resolve(n)}}},$f=(e,t)=>(n,r)=>{let i=t.get(n);if(i!==void 0)return i;let a=e.get(n);if(a!==void 0)return a;try{let i=r();return i instanceof Promise?(e.set(n,i),i.catch(()=>!1).then(r=>(e.delete(n),t.set(n,r),r))):(t.set(n,i),i)}catch{return t.set(n,!1),!1}},ep={channelCount:1,channelCountMode:`explicit`,channelInterpretation:`speakers`,numberOfInputs:6},tp=(e,t,n,r,i)=>class extends e{constructor(e,a){let o=r(e),s=n(o,{...ep,...a}),c=i(o)?t():null;super(e,!1,s,c)}},np=(e,t,n)=>()=>{let r=new WeakMap,i=async(i,a)=>{let o=t(i);return Pd(o,a)||(o=e(a,{channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,numberOfInputs:o.numberOfInputs})),r.set(a,o),await n(i,a,o),o};return{render(e,t){let n=r.get(t);return n===void 0?i(e,t):Promise.resolve(n)}}},rp={channelCount:6,channelCountMode:`explicit`,channelInterpretation:`discrete`,numberOfOutputs:6},ip=(e,t,n,r,i,a)=>class extends e{constructor(e,o){let s=r(e),c=n(s,a({...rp,...o})),l=i(s)?t():null;super(e,!1,c,l)}},ap=(e,t,n)=>()=>{let r=new WeakMap,i=async(i,a)=>{let o=t(i);return Pd(o,a)||(o=e(a,{channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,numberOfOutputs:o.numberOfOutputs})),r.set(a,o),await n(i,a,o),o};return{render(e,t){let n=r.get(t);return n===void 0?i(e,t):Promise.resolve(n)}}},op=e=>(t,n,r)=>e(n,t,r),sp=e=>(t,n,r=0,i=0)=>{let a=t[r];if(a===void 0)throw e();return Df(n)?a.connect(n,0,i):a.connect(n,0)},cp=e=>(t,n)=>{let r=e(t,{buffer:null,channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`,loop:!1,loopEnd:0,loopStart:0,playbackRate:1});return r.buffer=t.createBuffer(1,2,44100),r.loop=!0,r.connect(n),r.start(),()=>{r.stop(),r.disconnect(n)}},lp={channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`,offset:1},up=(e,t,n,r,i,a,o)=>class extends e{constructor(e,o){let s=i(e),c=r(s,{...lp,...o}),l=a(s),u=l?n():null;super(e,!1,c,u),this._constantSourceNodeRenderer=u,this._nativeConstantSourceNode=c,this._offset=t(this,l,c.offset,Hd,Vd),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(e){let t=typeof e==`function`?o(this,e):null;this._nativeConstantSourceNode.onended=t;let n=this._nativeConstantSourceNode.onended;this._onended=n!==null&&n===t?e:n}start(e=0){if(this._nativeConstantSourceNode.start(e),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=e),this.context.state!==`closed`){wd(this);let e=()=>{this._nativeConstantSourceNode.removeEventListener(`ended`,e),Ud(this)&&Ed(this)};this._nativeConstantSourceNode.addEventListener(`ended`,e)}}stop(e=0){this._nativeConstantSourceNode.stop(e),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=e)}},dp=(e,t,n,r,i)=>()=>{let a=new WeakMap,o=null,s=null,c=async(c,l)=>{let u=n(c),d=Pd(u,l);return d||(u=t(l,{channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,offset:u.offset.value}),o!==null&&u.start(o),s!==null&&u.stop(s)),a.set(l,u),d?await e(l,c.offset,u.offset):await r(l,c.offset,u.offset),await i(c,l,u),u};return{set start(e){o=e},set stop(e){s=e},render(e,t){let n=a.get(t);return n===void 0?c(e,t):Promise.resolve(n)}}},fp=e=>t=>(e[0]=t,e[0]),pp={buffer:null,channelCount:2,channelCountMode:`clamped-max`,channelInterpretation:`speakers`,disableNormalization:!1},mp=(e,t,n,r,i,a)=>class extends e{constructor(e,o){let s=r(e),c={...pp,...o},l=n(s,c),u=i(s)?t():null;super(e,!1,l,u),this._isBufferNullified=!1,this._nativeConvolverNode=l,c.buffer!==null&&a(this,c.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(e){if(this._nativeConvolverNode.buffer=e,e===null&&this._nativeConvolverNode.buffer!==null){let e=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=e.createBuffer(1,1,e.sampleRate),this._isBufferNullified=!0,a(this,0)}else this._isBufferNullified=!1,a(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(e){this._nativeConvolverNode.normalize=e}},hp=(e,t,n)=>()=>{let r=new WeakMap,i=async(i,a)=>{let o=t(i);return Pd(o,a)||(o=e(a,{buffer:o.buffer,channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,disableNormalization:!o.normalize})),r.set(a,o),mf(o)?await n(i,a,o.inputs[0]):await n(i,a,o),o};return{render(e,t){let n=r.get(t);return n===void 0?i(e,t):Promise.resolve(n)}}},gp=(e,t)=>(n,r,i)=>{if(t===null)throw Error(`Missing the native OfflineAudioContext constructor.`);try{return new t(n,r,i)}catch(t){throw t.name===`SyntaxError`?e():t}},_p=()=>new DOMException(``,`DataCloneError`),vp=e=>{let{port1:t,port2:n}=new MessageChannel;return new Promise(r=>{let i=()=>{n.onmessage=null,t.close(),n.close(),r()};n.onmessage=()=>i();try{t.postMessage(e,[e])}catch{}finally{i()}})},yp=(e,t,n,r,i,a,o,s,c,l,u)=>(d,f)=>{let p=o(d)?d:a(d);if(i.has(f)){let e=n();return Promise.reject(e)}try{i.add(f)}catch{}return t(c,()=>c(p))?p.decodeAudioData(f).then(n=>(vp(f).catch(()=>{}),t(s,()=>s(n))||u(n),e.add(n),n)):new Promise((t,n)=>{let i=async()=>{try{await vp(f)}catch{}},a=e=>{n(e),i()};try{p.decodeAudioData(f,n=>{typeof n.copyFromChannel!=`function`&&(l(n),Rd(n)),e.add(n),i().then(()=>t(n))},e=>{a(e===null?r():e)})}catch(e){a(e)}})},bp=(e,t,n,r,i,a,o,s)=>(c,l)=>{let u=t.get(c);if(u===void 0)throw Error(`Missing the expected cycle count.`);let d=s(a(c.context));if(u===l){if(t.delete(c),!d&&o(c)){let t=r(c),{outputs:a}=n(c);for(let n of a)if(uf(n))e(t,r(n[0]),n[1],n[2]);else{let e=i(n[0]);t.connect(e,n[1])}}}else t.set(c,u-l)},xp={channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`,delayTime:0,maxDelayTime:1},Sp=(e,t,n,r,i,a,o)=>class extends e{constructor(e,s){let c=i(e),l={...xp,...s},u=r(c,l),d=a(c),f=d?n(l.maxDelayTime):null;super(e,!1,u,f),this._delayTime=t(this,d,u.delayTime),o(this,l.maxDelayTime)}get delayTime(){return this._delayTime}},Cp=(e,t,n,r,i)=>a=>{let o=new WeakMap,s=async(s,c)=>{let l=n(s),u=Pd(l,c);return u||(l=t(c,{channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,delayTime:l.delayTime.value,maxDelayTime:a})),o.set(c,l),u?await e(c,s.delayTime,l.delayTime):await r(c,s.delayTime,l.delayTime),await i(s,c,l),l};return{render(e,t){let n=o.get(t);return n===void 0?s(e,t):Promise.resolve(n)}}},wp=e=>(t,n,r,i)=>e(t[i],e=>e[0]===n&&e[1]===r),Tp=e=>(t,n)=>{e(t).delete(n)},Ep=e=>`delayTime`in e,Dp=(e,t,n)=>function r(i,a){let o=lf(a)?a:n(e,a);if(Ep(o))return[];if(i[0]===o)return[i];if(i.includes(o))return[];let{outputs:s}=t(o);return Array.from(s).map(e=>r([...i,o],e[0])).reduce((e,t)=>e.concat(t),[])},Op=(e,t,n)=>{let r=t[n];if(r===void 0)throw e();return r},kp=e=>(t,n=void 0,r=void 0,i=0)=>n===void 0?t.forEach(e=>e.disconnect()):typeof n==`number`?Op(e,t,n).disconnect():Df(n)?r===void 0?t.forEach(e=>e.disconnect(n)):i===void 0?Op(e,t,r).disconnect(n,0):Op(e,t,r).disconnect(n,0,i):r===void 0?t.forEach(e=>e.disconnect(n)):Op(e,t,r).disconnect(n,0),Ap={attack:.003,channelCount:2,channelCountMode:`clamped-max`,channelInterpretation:`speakers`,knee:30,ratio:12,release:.25,threshold:-24},jp=(e,t,n,r,i,a,o,s)=>class extends e{constructor(e,i){let c=a(e),l=r(c,{...Ap,...i}),u=o(c),d=u?n():null;super(e,!1,l,d),this._attack=t(this,u,l.attack),this._knee=t(this,u,l.knee),this._nativeDynamicsCompressorNode=l,this._ratio=t(this,u,l.ratio),this._release=t(this,u,l.release),this._threshold=t(this,u,l.threshold),s(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(e){let t=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=e,e>2)throw this._nativeDynamicsCompressorNode.channelCount=t,i()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(e){let t=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=e,e===`max`)throw this._nativeDynamicsCompressorNode.channelCountMode=t,i()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value==`number`?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},Mp=(e,t,n,r,i)=>()=>{let a=new WeakMap,o=async(o,s)=>{let c=n(o),l=Pd(c,s);return l||(c=t(s,{attack:c.attack.value,channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,knee:c.knee.value,ratio:c.ratio.value,release:c.release.value,threshold:c.threshold.value})),a.set(s,c),l?(await e(s,o.attack,c.attack),await e(s,o.knee,c.knee),await e(s,o.ratio,c.ratio),await e(s,o.release,c.release),await e(s,o.threshold,c.threshold)):(await r(s,o.attack,c.attack),await r(s,o.knee,c.knee),await r(s,o.ratio,c.ratio),await r(s,o.release,c.release),await r(s,o.threshold,c.threshold)),await i(o,s,c),c};return{render(e,t){let n=a.get(t);return n===void 0?o(e,t):Promise.resolve(n)}}},Np=()=>new DOMException(``,`EncodingError`),Pp=e=>t=>new Promise((n,r)=>{if(e===null){r(SyntaxError());return}let i=e.document.head;if(i===null)r(SyntaxError());else{let a=e.document.createElement(`script`),o=new Blob([t],{type:`application/javascript`}),s=URL.createObjectURL(o),c=e.onerror,l=()=>{e.onerror=c,URL.revokeObjectURL(s)};e.onerror=(t,n,i,a,o)=>{if(n===s||n===e.location.href&&i===1&&a===1)return l(),r(o),!1;if(c!==null)return c(t,n,i,a,o)},a.onerror=()=>{l(),r(SyntaxError())},a.onload=()=>{l(),n()},a.src=s,a.type=`module`,i.appendChild(a)}}),Fp=e=>class{constructor(e){this._nativeEventTarget=e,this._listeners=new WeakMap}addEventListener(t,n,r){if(n!==null){let i=this._listeners.get(n);i===void 0&&(i=e(this,n),typeof n==`function`&&this._listeners.set(n,i)),this._nativeEventTarget.addEventListener(t,i,r)}}dispatchEvent(e){return this._nativeEventTarget.dispatchEvent(e)}removeEventListener(e,t,n){let r=t===null?void 0:this._listeners.get(t);this._nativeEventTarget.removeEventListener(e,r===void 0?null:r,n)}},Ip=e=>(t,n,r)=>{Object.defineProperties(e,{currentFrame:{configurable:!0,get(){return Math.round(t*n)}},currentTime:{configurable:!0,get(){return t}}});try{return r()}finally{e!==null&&(delete e.currentFrame,delete e.currentTime)}},Lp=e=>async t=>{try{let e=await fetch(t);if(e.ok)return[await e.text(),e.url]}catch{}throw e()},Rp={channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`,gain:1},zp=(e,t,n,r,i,a)=>class extends e{constructor(e,o){let s=i(e),c=r(s,{...Rp,...o}),l=a(s),u=l?n():null;super(e,!1,c,u),this._gain=t(this,l,c.gain,Hd,Vd)}get gain(){return this._gain}},Bp=(e,t,n,r,i)=>()=>{let a=new WeakMap,o=async(o,s)=>{let c=n(o),l=Pd(c,s);return l||(c=t(s,{channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,gain:c.gain.value})),a.set(s,c),l?await e(s,o.gain,c.gain):await r(s,o.gain,c.gain),await i(o,s,c),c};return{render(e,t){let n=a.get(t);return n===void 0?o(e,t):Promise.resolve(n)}}},Vp=(e,t)=>n=>t(e,n),Hp=e=>t=>{let n=e(t);if(n.renderer===null)throw Error(`Missing the renderer of the given AudioNode in the audio graph.`);return n.renderer},Up=e=>t=>e.get(t)??0,Wp=e=>t=>{let n=e(t);if(n.renderer===null)throw Error(`Missing the renderer of the given AudioParam in the audio graph.`);return n.renderer},Gp=e=>t=>e.get(t),Kp=()=>new DOMException(``,`InvalidStateError`),qp=e=>t=>{let n=e.get(t);if(n===void 0)throw Kp();return n},Jp=(e,t)=>n=>{let r=e.get(n);if(r!==void 0)return r;if(t===null)throw Error(`Missing the native OfflineAudioContext constructor.`);return r=new t(1,1,44100),e.set(n,r),r},Yp=e=>t=>{let n=e.get(t);if(n===void 0)throw Error(`The context has no set of AudioWorkletNodes.`);return n},Xp=()=>new DOMException(``,`InvalidAccessError`),Zp=e=>{e.getFrequencyResponse=(t=>(n,r,i)=>{if(n.length!==r.length||r.length!==i.length)throw Xp();return t.call(e,n,r,i)})(e.getFrequencyResponse)},Qp={channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`},$p=(e,t,n,r,i,a)=>class extends e{constructor(e,o){let s=r(e),c=i(s),l={...Qp,...o},u=t(s,c?null:e.baseLatency,l),d=c?n(l.feedback,l.feedforward):null;super(e,!1,u,d),Zp(u),this._nativeIIRFilterNode=u,a(this,1)}getFrequencyResponse(e,t,n){return this._nativeIIRFilterNode.getFrequencyResponse(e,t,n)}},em=(e,t,n,r,i,a,o,s,c,l,u)=>{let d=l.length,f=s;for(let s=0;s<d;s+=1){let d=n[0]*l[s];for(let t=1;t<i;t+=1){let r=f-t&c-1;d+=n[t]*a[r],d-=e[t]*o[r]}for(let e=i;e<r;e+=1)d+=n[e]*a[f-e&c-1];for(let n=i;n<t;n+=1)d-=e[n]*o[f-n&c-1];a[f]=l[s],o[f]=d,f=f+1&c-1,u[s]=d}return f},tm=(e,t,n,r)=>{let i=n instanceof Float64Array?n:new Float64Array(n),a=r instanceof Float64Array?r:new Float64Array(r),o=i.length,s=a.length,c=Math.min(o,s);if(i[0]!==1){for(let e=0;e<o;e+=1)a[e]/=i[0];for(let e=1;e<s;e+=1)i[e]/=i[0]}let l=new Float32Array(32),u=new Float32Array(32),d=t.createBuffer(e.numberOfChannels,e.length,e.sampleRate),f=e.numberOfChannels;for(let t=0;t<f;t+=1){let n=e.getChannelData(t),r=d.getChannelData(t);l.fill(0),u.fill(0),em(i,o,a,s,c,l,u,0,32,n,r)}return d},nm=(e,t,n,r,i)=>(a,o)=>{let s=new WeakMap,c=null,l=async(l,u)=>{let d=null,f=t(l),p=Pd(f,u);if(u.createIIRFilter===void 0?d=e(u,{buffer:null,channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`,loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):p||(f=u.createIIRFilter(o,a)),s.set(u,d===null?f:d),d!==null){if(c===null){if(n===null)throw Error(`Missing the native OfflineAudioContext constructor.`);let e=new n(l.context.destination.channelCount,l.context.length,u.sampleRate);c=(async()=>(await r(l,e,e.destination),tm(await i(e),u,a,o)))()}let e=await c;return d.buffer=e,d.start(0),d}return await r(l,u,f),f};return{render(e,t){let n=s.get(t);return n===void 0?l(e,t):Promise.resolve(n)}}},rm=(e,t,n,r,i,a)=>o=>(s,c)=>{let l=e.get(s);if(l===void 0){if(!o&&a(s)){let e=r(s),{outputs:a}=n(s);for(let n of a)if(uf(n))t(e,r(n[0]),n[1],n[2]);else{let t=i(n[0]);e.disconnect(t,n[1])}}e.set(s,c)}else e.set(s,l+c)},im=(e,t)=>n=>t(e.get(n))||t(n),am=(e,t)=>n=>e.has(n)||t(n),om=(e,t)=>n=>e.has(n)||t(n),sm=(e,t)=>n=>t(e.get(n))||t(n),cm=e=>t=>e!==null&&t instanceof e,lm=e=>t=>e!==null&&typeof e.AudioNode==`function`&&t instanceof e.AudioNode,um=e=>t=>e!==null&&typeof e.AudioParam==`function`&&t instanceof e.AudioParam,dm=(e,t)=>n=>e(n)||t(n),fm=e=>t=>e!==null&&t instanceof e,pm=e=>e!==null&&e.isSecureContext,mm=(e,t,n,r)=>class extends e{constructor(e,i){let a=n(e),o=t(a,i);if(r(a))throw TypeError();super(e,!0,o,null),this._nativeMediaElementAudioSourceNode=o}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}},hm={channelCount:2,channelCountMode:`explicit`,channelInterpretation:`speakers`},gm=(e,t,n,r)=>class extends e{constructor(e,i){let a=n(e);if(r(a))throw TypeError();let o=t(a,{...hm,...i});super(e,!1,o,null),this._nativeMediaStreamAudioDestinationNode=o}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}},_m=(e,t,n,r)=>class extends e{constructor(e,i){let a=n(e),o=t(a,i);if(r(a))throw TypeError();super(e,!0,o,null),this._nativeMediaStreamAudioSourceNode=o}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}},vm=(e,t,n)=>class extends e{constructor(e,r){let i=t(n(e),r);super(e,!0,i,null)}},ym=(e,t,n,r,i,a)=>class extends n{constructor(n,a){super(n),this._nativeContext=n,cd.set(this,n),r(n)&&i.set(n,new Set),this._destination=new e(this,a),this._listener=t(this,n),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(e){let t=typeof e==`function`?a(this,e):null;this._nativeContext.onstatechange=t;let n=this._nativeContext.onstatechange;this._onstatechange=n!==null&&n===t?e:n}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},bm=e=>{let t=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{let n=e.decodeAudioData(t.buffer,()=>{});return n!==void 0&&(n.catch(()=>{}),!0)}catch{}return!1},xm=(e,t)=>(n,r,i)=>{let a=new Set;return n.connect=(i=>(o,s=0,c=0)=>{let l=a.size===0;if(t(o))return i.call(n,o,s,c),e(a,[o,s,c],e=>e[0]===o&&e[1]===s&&e[2]===c,!0),l&&r(),o;i.call(n,o,s),e(a,[o,s],e=>e[0]===o&&e[1]===s,!0),l&&r()})(n.connect),n.disconnect=(e=>(r,o,s)=>{let c=a.size>0;if(r===void 0)e.apply(n),a.clear();else if(typeof r==`number`){e.call(n,r);for(let e of a)e[1]===r&&a.delete(e)}else{t(r)?e.call(n,r,o,s):e.call(n,r,o);for(let e of a)e[0]!==r||o!==void 0&&e[1]!==o||s!==void 0&&e[2]!==s||a.delete(e)}let l=a.size===0;c&&l&&i()})(n.disconnect),n},Sm=(e,t,n)=>{let r=t[n];r!==void 0&&r!==e[n]&&(e[n]=r)},Cm=(e,t)=>{Sm(e,t,`channelCount`),Sm(e,t,`channelCountMode`),Sm(e,t,`channelInterpretation`)},wm=e=>typeof e.getFloatTimeDomainData==`function`,Tm=e=>{e.getFloatTimeDomainData=t=>{let n=new Uint8Array(t.length);e.getByteTimeDomainData(n);let r=Math.max(n.length,e.fftSize);for(let e=0;e<r;e+=1)t[e]=(n[e]-128)*.0078125;return t}},Em=(e,t)=>(n,r)=>{let i=n.createAnalyser();if(Cm(i,r),!(r.maxDecibels>r.minDecibels))throw t();return Sm(i,r,`fftSize`),Sm(i,r,`maxDecibels`),Sm(i,r,`minDecibels`),Sm(i,r,`smoothingTimeConstant`),e(wm,()=>wm(i))||Tm(i),i},Dm=e=>e===null?null:e.hasOwnProperty(`AudioBuffer`)?e.AudioBuffer:null,Om=(e,t,n)=>{let r=t[n];r!==void 0&&r!==e[n].value&&(e[n].value=r)},km=e=>{e.start=(t=>{let n=!1;return(r=0,i=0,a)=>{if(n)throw Kp();t.call(e,r,i,a),n=!0}})(e.start)},Am=e=>{e.start=(t=>(n=0,r=0,i)=>{if(typeof i==`number`&&i<0||r<0||n<0)throw RangeError(`The parameters can't be negative.`);t.call(e,n,r,i)})(e.start)},jm=e=>{e.stop=(t=>(n=0)=>{if(n<0)throw RangeError(`The parameter can't be negative.`);t.call(e,n)})(e.stop)},Mm=(e,t,n,r,i,a,o,s,c,l,u)=>(d,f)=>{let p=d.createBufferSource();return Cm(p,f),Om(p,f,`playbackRate`),Sm(p,f,`buffer`),Sm(p,f,`loop`),Sm(p,f,`loopEnd`),Sm(p,f,`loopStart`),t(n,()=>n(d))||km(p),t(r,()=>r(d))||c(p),t(i,()=>i(d))||l(p,d),t(a,()=>a(d))||Am(p),t(o,()=>o(d))||u(p,d),t(s,()=>s(d))||jm(p),e(d,p),p},Nm=e=>e===null?null:e.hasOwnProperty(`AudioContext`)?e.AudioContext:e.hasOwnProperty(`webkitAudioContext`)?e.webkitAudioContext:null,Pm=(e,t)=>(n,r,i)=>{let a=n.destination;if(a.channelCount!==r)try{a.channelCount=r}catch{}i&&a.channelCountMode!==`explicit`&&(a.channelCountMode=`explicit`),a.maxChannelCount===0&&Object.defineProperty(a,"maxChannelCount",{value:r});let o=e(n,{channelCount:r,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,gain:1});return t(o,`channelCount`,e=>()=>e.call(o),e=>t=>{e.call(o,t);try{a.channelCount=t}catch(e){if(t>a.maxChannelCount)throw e}}),t(o,`channelCountMode`,e=>()=>e.call(o),e=>t=>{e.call(o,t),a.channelCountMode=t}),t(o,`channelInterpretation`,e=>()=>e.call(o),e=>t=>{e.call(o,t),a.channelInterpretation=t}),Object.defineProperty(o,"maxChannelCount",{get:()=>a.maxChannelCount}),o.connect(a),o},Fm=e=>e===null?null:e.hasOwnProperty(`AudioWorkletNode`)?e.AudioWorkletNode:null,Im=e=>{let{port1:t}=new MessageChannel;try{t.postMessage(e)}finally{t.close()}},Lm=(e,t,n,r,i)=>(a,o,s,c,l,u)=>{if(s!==null)try{let t=new s(a,c,u),r=new Map,o=null;if(Object.defineProperties(t,{channelCount:{get:()=>u.channelCount,set:()=>{throw e()}},channelCountMode:{get:()=>`explicit`,set:()=>{throw e()}},onprocessorerror:{get:()=>o,set:e=>{typeof o==`function`&&t.removeEventListener(`processorerror`,o),o=typeof e==`function`?e:null,typeof o==`function`&&t.addEventListener(`processorerror`,o)}}}),t.addEventListener=(e=>(...n)=>{if(n[0]===`processorerror`){let e=typeof n[1]==`function`?n[1]:typeof n[1]==`object`&&n[1]!==null&&typeof n[1].handleEvent==`function`?n[1].handleEvent:null;if(e!==null){let t=r.get(n[1]);t===void 0?(n[1]=t=>{t.type===`error`?(Object.defineProperties(t,{type:{value:`processorerror`}}),e(t)):e(new ErrorEvent(n[0],{...t}))},r.set(e,n[1])):n[1]=t}}return e.call(t,`error`,n[1],n[2]),e.call(t,...n)})(t.addEventListener),t.removeEventListener=(e=>(...n)=>{if(n[0]===`processorerror`){let e=r.get(n[1]);e!==void 0&&(r.delete(n[1]),n[1]=e)}return e.call(t,`error`,n[1],n[2]),e.call(t,n[0],n[1],n[2])})(t.removeEventListener),u.numberOfOutputs!==0){let e=n(a,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`discrete`,gain:0});return t.connect(e).connect(a.destination),i(t,()=>e.disconnect(),()=>e.connect(a.destination))}return t}catch(e){throw e.code===11?r():e}if(l===void 0)throw r();return Im(u),t(a,o,l,u)},Rm=(e,t)=>e===null?512:Math.max(512,Math.min(16384,2**Math.round(Math.log2(e*t)))),zm=e=>new Promise((t,n)=>{let{port1:r,port2:i}=new MessageChannel;r.onmessage=({data:e})=>{r.close(),i.close(),t(e)},r.onmessageerror=({data:e})=>{r.close(),i.close(),n(e)},i.postMessage(e)}),Bm=async(e,t)=>new e(await zm(t)),Vm=(e,t,n,r)=>{let i=fd.get(e);i===void 0&&(i=new WeakMap,fd.set(e,i));let a=Bm(n,r);return i.set(t,a),a},Hm=(e,t,n,r,i,a,o,s,c,l,u,d,f)=>(p,m,h,g)=>{if(g.numberOfInputs===0&&g.numberOfOutputs===0)throw c();let _=Array.isArray(g.outputChannelCount)?g.outputChannelCount:Array.from(g.outputChannelCount);if(_.some(e=>e<1))throw c();if(_.length!==g.numberOfOutputs)throw t();if(g.channelCountMode!==`explicit`)throw c();let v=g.channelCount*g.numberOfInputs,y=_.reduce((e,t)=>e+t,0),b=h.parameterDescriptors===void 0?0:h.parameterDescriptors.length;if(v+b>6||y>6)throw c();let x=new MessageChannel,S=[],C=[];for(let e=0;e<g.numberOfInputs;e+=1)S.push(o(p,{channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation,gain:1})),C.push(i(p,{channelCount:g.channelCount,channelCountMode:`explicit`,channelInterpretation:`discrete`,numberOfOutputs:g.channelCount}));let w=[];if(h.parameterDescriptors!==void 0)for(let{defaultValue:e,maxValue:t,minValue:n,name:r}of h.parameterDescriptors){let i=a(p,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`discrete`,offset:g.parameterData[r]===void 0?e===void 0?0:e:g.parameterData[r]});Object.defineProperties(i.offset,{defaultValue:{get:()=>e===void 0?0:e},maxValue:{get:()=>t===void 0?Hd:t},minValue:{get:()=>n===void 0?Vd:n}}),w.push(i)}let T=r(p,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`speakers`,numberOfInputs:Math.max(1,v+b)}),E=Rm(m,p.sampleRate),D=s(p,E,v+b,Math.max(1,y)),O=i(p,{channelCount:Math.max(1,y),channelCountMode:`explicit`,channelInterpretation:`discrete`,numberOfOutputs:Math.max(1,y)}),k=[];for(let e=0;e<g.numberOfOutputs;e+=1)k.push(r(p,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`speakers`,numberOfInputs:_[e]}));for(let e=0;e<g.numberOfInputs;e+=1){S[e].connect(C[e]);for(let t=0;t<g.channelCount;t+=1)C[e].connect(T,t,e*g.channelCount+t)}let A=new Bf(h.parameterDescriptors===void 0?[]:h.parameterDescriptors.map(({name:e},t)=>{let n=w[t];return n.connect(T,0,v+t),n.start(0),[e,n.offset]}));T.connect(D);let j=g.channelInterpretation,ee=null,M=g.numberOfOutputs===0?[D]:k,te={get bufferSize(){return E},get channelCount(){return g.channelCount},set channelCount(e){throw n()},get channelCountMode(){return g.channelCountMode},set channelCountMode(e){throw n()},get channelInterpretation(){return j},set channelInterpretation(e){for(let t of S)t.channelInterpretation=e;j=e},get context(){return D.context},get inputs(){return S},get numberOfInputs(){return g.numberOfInputs},get numberOfOutputs(){return g.numberOfOutputs},get onprocessorerror(){return ee},set onprocessorerror(e){typeof ee==`function`&&te.removeEventListener(`processorerror`,ee),ee=typeof e==`function`?e:null,typeof ee==`function`&&te.addEventListener(`processorerror`,ee)},get parameters(){return A},get port(){return x.port2},addEventListener(...e){return D.addEventListener(e[0],e[1],e[2])},connect:e.bind(null,M),disconnect:l.bind(null,M),dispatchEvent(...e){return D.dispatchEvent(e[0])},removeEventListener(...e){return D.removeEventListener(e[0],e[1],e[2])}},ne=new Map;x.port1.addEventListener=(e=>(...t)=>{if(t[0]===`message`){let e=typeof t[1]==`function`?t[1]:typeof t[1]==`object`&&t[1]!==null&&typeof t[1].handleEvent==`function`?t[1].handleEvent:null;if(e!==null){let n=ne.get(t[1]);n===void 0?(t[1]=t=>{u(p.currentTime,p.sampleRate,()=>e(t))},ne.set(e,t[1])):t[1]=n}}return e.call(x.port1,t[0],t[1],t[2])})(x.port1.addEventListener),x.port1.removeEventListener=(e=>(...t)=>{if(t[0]===`message`){let e=ne.get(t[1]);e!==void 0&&(ne.delete(t[1]),t[1]=e)}return e.call(x.port1,t[0],t[1],t[2])})(x.port1.removeEventListener);let re=null;Object.defineProperty(x.port1,"onmessage",{get:()=>re,set:e=>{typeof re==`function`&&x.port1.removeEventListener(`message`,re),re=typeof e==`function`?e:null,typeof re==`function`&&(x.port1.addEventListener(`message`,re),x.port1.start())}}),h.prototype.port=x.port1;let ie=null;Vm(p,te,h,g).then(e=>ie=e);let ae=Gf(g.numberOfInputs,g.channelCount),oe=Gf(g.numberOfOutputs,_),se=h.parameterDescriptors===void 0?[]:h.parameterDescriptors.reduce((e,{name:t})=>({...e,[t]:new Float32Array(128)}),{}),N=!0,ce=()=>{g.numberOfOutputs>0&&D.disconnect(O);for(let e=0,t=0;e<g.numberOfOutputs;e+=1){let n=k[e];for(let r=0;r<_[e];r+=1)O.disconnect(n,t+r,r);t+=_[e]}},le=new Map;D.onaudioprocess=({inputBuffer:e,outputBuffer:t})=>{if(ie!==null){let n=d(te);for(let r=0;r<E;r+=128){for(let t=0;t<g.numberOfInputs;t+=1)for(let n=0;n<g.channelCount;n+=1)Uf(e,ae[t],n,n,r);h.parameterDescriptors!==void 0&&h.parameterDescriptors.forEach(({name:t},n)=>{Uf(e,se,t,v+n,r)});for(let e=0;e<g.numberOfInputs;e+=1)for(let t=0;t<_[e];t+=1)oe[e][t].byteLength===0&&(oe[e][t]=new Float32Array(128));try{let e=ae.map((e,t)=>{if(n[t].size>0)return le.set(t,E/128),e;let r=le.get(t);return r===void 0?[]:(e.every(e=>e.every(e=>e===0))&&(r===1?le.delete(t):le.set(t,r-1)),e)});N=u(p.currentTime+r/p.sampleRate,p.sampleRate,()=>ie.process(e,oe,se));for(let e=0,n=0;e<g.numberOfOutputs;e+=1){for(let i=0;i<_[e];i+=1)Wf(t,oe[e],i,n+i,r);n+=_[e]}}catch(e){N=!1,te.dispatchEvent(new ErrorEvent(`processorerror`,{colno:e.colno,filename:e.filename,lineno:e.lineno,message:e.message}))}if(!N){for(let e=0;e<g.numberOfInputs;e+=1){S[e].disconnect(C[e]);for(let t=0;t<g.channelCount;t+=1)C[r].disconnect(T,t,e*g.channelCount+t)}if(h.parameterDescriptors!==void 0){let e=h.parameterDescriptors.length;for(let t=0;t<e;t+=1){let e=w[t];e.disconnect(T,0,v+t),e.stop()}}T.disconnect(D),D.onaudioprocess=null,ue?ce():pe();break}}}};let ue=!1,de=o(p,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`discrete`,gain:0}),fe=()=>D.connect(de).connect(p.destination),pe=()=>{D.disconnect(de),de.disconnect()};return fe(),f(te,()=>{if(N){pe(),g.numberOfOutputs>0&&D.connect(O);for(let e=0,t=0;e<g.numberOfOutputs;e+=1){let n=k[e];for(let r=0;r<_[e];r+=1)O.connect(n,t+r,r);t+=_[e]}}ue=!0},()=>{N&&(fe(),ce()),ue=!1})},Um=(e,t)=>{let n=e.createBiquadFilter();return Cm(n,t),Om(n,t,`Q`),Om(n,t,`detune`),Om(n,t,`frequency`),Om(n,t,`gain`),Sm(n,t,`type`),n},Wm=(e,t)=>(n,r)=>{let i=n.createChannelMerger(r.numberOfInputs);return e!==null&&e.name===`webkitAudioContext`&&t(n,i),Cm(i,r),i},Gm=e=>{let t=e.numberOfOutputs;Object.defineProperty(e,"channelCount",{get:()=>t,set:e=>{if(e!==t)throw Kp()}}),Object.defineProperty(e,"channelCountMode",{get:()=>`explicit`,set:e=>{if(e!==`explicit`)throw Kp()}}),Object.defineProperty(e,"channelInterpretation",{get:()=>`discrete`,set:e=>{if(e!==`discrete`)throw Kp()}})},Km=(e,t)=>{let n=e.createChannelSplitter(t.numberOfOutputs);return Cm(n,t),Gm(n),n},qm=(e,t,n,r,i)=>(a,o)=>{if(a.createConstantSource===void 0)return n(a,o);let s=a.createConstantSource();return Cm(s,o),Om(s,o,`offset`),t(r,()=>r(a))||Am(s),t(i,()=>i(a))||jm(s),e(a,s),s},Jm=(e,t)=>(e.connect=t.connect.bind(t),e.disconnect=t.disconnect.bind(t),e),Ym=(e,t,n,r)=>(i,{offset:a,...o})=>{let s=i.createBuffer(1,2,44100),c=t(i,{buffer:null,channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`,loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=n(i,{...o,gain:a}),u=s.getChannelData(0);return u[0]=1,u[1]=1,c.buffer=s,c.loop=!0,e(i,c),r(Jm({get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(e){l.channelCount=e},get channelCountMode(){return l.channelCountMode},set channelCountMode(e){l.channelCountMode=e},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(e){l.channelInterpretation=e},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return c.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return c.onended},set onended(e){c.onended=e},addEventListener(...e){return c.addEventListener(e[0],e[1],e[2])},dispatchEvent(...e){return c.dispatchEvent(e[0])},removeEventListener(...e){return c.removeEventListener(e[0],e[1],e[2])},start(e=0){c.start.call(c,e)},stop(e=0){c.stop.call(c,e)}},l),()=>c.connect(l),()=>c.disconnect(l))},Xm=(e,t)=>(n,r)=>{let i=n.createConvolver();if(Cm(i,r),r.disableNormalization===i.normalize&&(i.normalize=!r.disableNormalization),Sm(i,r,`buffer`),r.channelCount>2||(t(i,`channelCount`,e=>()=>e.call(i),t=>n=>{if(n>2)throw e();return t.call(i,n)}),r.channelCountMode===`max`))throw e();return t(i,`channelCountMode`,e=>()=>e.call(i),t=>n=>{if(n===`max`)throw e();return t.call(i,n)}),i},Zm=(e,t)=>{let n=e.createDelay(t.maxDelayTime);return Cm(n,t),Om(n,t,`delayTime`),n},Qm=e=>(t,n)=>{let r=t.createDynamicsCompressor();if(Cm(r,n),n.channelCount>2||n.channelCountMode===`max`)throw e();return Om(r,n,`attack`),Om(r,n,`knee`),Om(r,n,`ratio`),Om(r,n,`release`),Om(r,n,`threshold`),r},$m=(e,t)=>{let n=e.createGain();return Cm(n,t),Om(n,t,`gain`),n},eh=e=>(t,n,r)=>{if(t.createIIRFilter===void 0)return e(t,n,r);let i=t.createIIRFilter(r.feedforward,r.feedback);return Cm(i,r),i};function th(e,t){let n=t[0]*t[0]+t[1]*t[1];return[(e[0]*t[0]+e[1]*t[1])/n,(e[1]*t[0]-e[0]*t[1])/n]}function nh(e,t){return[e[0]*t[0]-e[1]*t[1],e[0]*t[1]+e[1]*t[0]]}function rh(e,t){let n=[0,0];for(let r=e.length-1;r>=0;--r)n=nh(n,t),n[0]+=e[r];return n}var ih=(e,t,n,r)=>(i,a,{channelCount:o,channelCountMode:s,channelInterpretation:c,feedback:l,feedforward:u})=>{let d=Rm(a,i.sampleRate),f=l instanceof Float64Array?l:new Float64Array(l),p=u instanceof Float64Array?u:new Float64Array(u),m=f.length,h=p.length,g=Math.min(m,h);if(m===0||m>20)throw r();if(f[0]===0)throw t();if(h===0||h>20)throw r();if(p[0]===0)throw t();if(f[0]!==1){for(let e=0;e<h;e+=1)p[e]/=f[0];for(let e=1;e<m;e+=1)f[e]/=f[0]}let _=n(i,d,o,o);_.channelCount=o,_.channelCountMode=s,_.channelInterpretation=c;let v=[],y=[],b=[];for(let e=0;e<o;e+=1){v.push(0);let e=new Float32Array(32),t=new Float32Array(32);e.fill(0),t.fill(0),y.push(e),b.push(t)}_.onaudioprocess=e=>{let t=e.inputBuffer,n=e.outputBuffer,r=t.numberOfChannels;for(let e=0;e<r;e+=1){let r=t.getChannelData(e),i=n.getChannelData(e);v[e]=em(f,m,p,h,g,y[e],b[e],v[e],32,r,i)}};let x=i.sampleRate/2;return Jm({get bufferSize(){return d},get channelCount(){return _.channelCount},set channelCount(e){_.channelCount=e},get channelCountMode(){return _.channelCountMode},set channelCountMode(e){_.channelCountMode=e},get channelInterpretation(){return _.channelInterpretation},set channelInterpretation(e){_.channelInterpretation=e},get context(){return _.context},get inputs(){return[_]},get numberOfInputs(){return _.numberOfInputs},get numberOfOutputs(){return _.numberOfOutputs},addEventListener(...e){return _.addEventListener(e[0],e[1],e[2])},dispatchEvent(...e){return _.dispatchEvent(e[0])},getFrequencyResponse(t,n,r){if(t.length!==n.length||n.length!==r.length)throw e();let i=t.length;for(let e=0;e<i;e+=1){let i=-Math.PI*(t[e]/x),a=[Math.cos(i),Math.sin(i)],o=th(rh(p,a),rh(f,a));n[e]=Math.sqrt(o[0]*o[0]+o[1]*o[1]),r[e]=Math.atan2(o[1],o[0])}},removeEventListener(...e){return _.removeEventListener(e[0],e[1],e[2])}},_)},ah=(e,t)=>e.createMediaElementSource(t.mediaElement),oh=(e,t)=>{let n=e.createMediaStreamDestination();return Cm(n,t),n.numberOfOutputs===1&&Object.defineProperty(n,"numberOfOutputs",{get:()=>0}),n},sh=(e,{mediaStream:t})=>{let n=t.getAudioTracks();n.sort((e,t)=>e.id<t.id?-1:+(e.id>t.id));let r=n.slice(0,1),i=e.createMediaStreamSource(new MediaStream(r));return Object.defineProperty(i,"mediaStream",{value:t}),i},ch=(e,t)=>(n,{mediaStreamTrack:r})=>{if(typeof n.createMediaStreamTrackSource==`function`)return n.createMediaStreamTrackSource(r);let i=new MediaStream([r]),a=n.createMediaStreamSource(i);if(r.kind!==`audio`)throw e();if(t(n))throw TypeError();return a},lh=e=>e===null?null:e.hasOwnProperty(`OfflineAudioContext`)?e.OfflineAudioContext:e.hasOwnProperty(`webkitOfflineAudioContext`)?e.webkitOfflineAudioContext:null,uh=(e,t,n,r,i,a)=>(o,s)=>{let c=o.createOscillator();return Cm(c,s),Om(c,s,`detune`),Om(c,s,`frequency`),s.periodicWave===void 0?Sm(c,s,`type`):c.setPeriodicWave(s.periodicWave),t(n,()=>n(o))||Am(c),t(r,()=>r(o))||a(c,o),t(i,()=>i(o))||jm(c),e(o,c),c},dh=e=>(t,n)=>{let r=t.createPanner();return r.orientationX===void 0?e(t,n):(Cm(r,n),Om(r,n,`orientationX`),Om(r,n,`orientationY`),Om(r,n,`orientationZ`),Om(r,n,`positionX`),Om(r,n,`positionY`),Om(r,n,`positionZ`),Sm(r,n,`coneInnerAngle`),Sm(r,n,`coneOuterAngle`),Sm(r,n,`coneOuterGain`),Sm(r,n,`distanceModel`),Sm(r,n,`maxDistance`),Sm(r,n,`panningModel`),Sm(r,n,`refDistance`),Sm(r,n,`rolloffFactor`),r)},fh=(e,t,n,r,i,a,o,s,c,l)=>(u,{coneInnerAngle:d,coneOuterAngle:f,coneOuterGain:p,distanceModel:m,maxDistance:h,orientationX:g,orientationY:_,orientationZ:v,panningModel:y,positionX:b,positionY:x,positionZ:S,refDistance:C,rolloffFactor:w,...T})=>{let E=u.createPanner();if(T.channelCount>2||T.channelCountMode===`max`)throw o();Cm(E,T);let D={channelCount:1,channelCountMode:`explicit`,channelInterpretation:`discrete`},O=n(u,{...D,channelInterpretation:`speakers`,numberOfInputs:6}),k=r(u,{...T,gain:1}),A=r(u,{...D,gain:1}),j=r(u,{...D,gain:0}),ee=r(u,{...D,gain:0}),M=r(u,{...D,gain:0}),te=r(u,{...D,gain:0}),ne=r(u,{...D,gain:0}),re=i(u,256,6,1),ie=a(u,{...D,curve:new Float32Array([1,1]),oversample:`none`}),ae=[g,_,v],oe=[b,x,S],se=new Float32Array(1);re.onaudioprocess=({inputBuffer:e})=>{let t=[c(e,se,0),c(e,se,1),c(e,se,2)];t.some((e,t)=>e!==ae[t])&&(E.setOrientation(...t),ae=t);let n=[c(e,se,3),c(e,se,4),c(e,se,5)];n.some((e,t)=>e!==oe[t])&&(E.setPosition(...n),oe=n)},Object.defineProperty(j.gain,"defaultValue",{get:()=>0}),Object.defineProperty(ee.gain,"defaultValue",{get:()=>0}),Object.defineProperty(M.gain,"defaultValue",{get:()=>0}),Object.defineProperty(te.gain,"defaultValue",{get:()=>0}),Object.defineProperty(ne.gain,"defaultValue",{get:()=>0});let N={get bufferSize(){},get channelCount(){return E.channelCount},set channelCount(e){if(e>2)throw o();k.channelCount=e,E.channelCount=e},get channelCountMode(){return E.channelCountMode},set channelCountMode(e){if(e===`max`)throw o();k.channelCountMode=e,E.channelCountMode=e},get channelInterpretation(){return E.channelInterpretation},set channelInterpretation(e){k.channelInterpretation=e,E.channelInterpretation=e},get coneInnerAngle(){return E.coneInnerAngle},set coneInnerAngle(e){E.coneInnerAngle=e},get coneOuterAngle(){return E.coneOuterAngle},set coneOuterAngle(e){E.coneOuterAngle=e},get coneOuterGain(){return E.coneOuterGain},set coneOuterGain(e){if(e<0||e>1)throw t();E.coneOuterGain=e},get context(){return E.context},get distanceModel(){return E.distanceModel},set distanceModel(e){E.distanceModel=e},get inputs(){return[k]},get maxDistance(){return E.maxDistance},set maxDistance(e){if(e<0)throw RangeError();E.maxDistance=e},get numberOfInputs(){return E.numberOfInputs},get numberOfOutputs(){return E.numberOfOutputs},get orientationX(){return A.gain},get orientationY(){return j.gain},get orientationZ(){return ee.gain},get panningModel(){return E.panningModel},set panningModel(e){E.panningModel=e},get positionX(){return M.gain},get positionY(){return te.gain},get positionZ(){return ne.gain},get refDistance(){return E.refDistance},set refDistance(e){if(e<0)throw RangeError();E.refDistance=e},get rolloffFactor(){return E.rolloffFactor},set rolloffFactor(e){if(e<0)throw RangeError();E.rolloffFactor=e},addEventListener(...e){return k.addEventListener(e[0],e[1],e[2])},dispatchEvent(...e){return k.dispatchEvent(e[0])},removeEventListener(...e){return k.removeEventListener(e[0],e[1],e[2])}};return d!==N.coneInnerAngle&&(N.coneInnerAngle=d),f!==N.coneOuterAngle&&(N.coneOuterAngle=f),p!==N.coneOuterGain&&(N.coneOuterGain=p),m!==N.distanceModel&&(N.distanceModel=m),h!==N.maxDistance&&(N.maxDistance=h),g!==N.orientationX.value&&(N.orientationX.value=g),_!==N.orientationY.value&&(N.orientationY.value=_),v!==N.orientationZ.value&&(N.orientationZ.value=v),y!==N.panningModel&&(N.panningModel=y),b!==N.positionX.value&&(N.positionX.value=b),x!==N.positionY.value&&(N.positionY.value=x),S!==N.positionZ.value&&(N.positionZ.value=S),C!==N.refDistance&&(N.refDistance=C),w!==N.rolloffFactor&&(N.rolloffFactor=w),(ae[0]!==1||ae[1]!==0||ae[2]!==0)&&E.setOrientation(...ae),(oe[0]!==0||oe[1]!==0||oe[2]!==0)&&E.setPosition(...oe),l(Jm(N,E),()=>{k.connect(E),e(k,ie,0,0),ie.connect(A).connect(O,0,0),ie.connect(j).connect(O,0,1),ie.connect(ee).connect(O,0,2),ie.connect(M).connect(O,0,3),ie.connect(te).connect(O,0,4),ie.connect(ne).connect(O,0,5),O.connect(re).connect(u.destination)},()=>{k.disconnect(E),s(k,ie,0,0),ie.disconnect(A),A.disconnect(O),ie.disconnect(j),j.disconnect(O),ie.disconnect(ee),ee.disconnect(O),ie.disconnect(M),M.disconnect(O),ie.disconnect(te),te.disconnect(O),ie.disconnect(ne),ne.disconnect(O),O.disconnect(re),re.disconnect(u.destination)})},ph=e=>(t,{disableNormalization:n,imag:r,real:i})=>{let a=r instanceof Float32Array?r:new Float32Array(r),o=i instanceof Float32Array?i:new Float32Array(i),s=t.createPeriodicWave(o,a,{disableNormalization:n});if(Array.from(r).length<2)throw e();return s},mh=(e,t,n,r)=>e.createScriptProcessor(t,n,r),hh=(e,t)=>(n,r)=>{let i=r.channelCountMode;if(i===`clamped-max`)throw t();if(n.createStereoPanner===void 0)return e(n,r);let a=n.createStereoPanner();return Cm(a,r),Om(a,r,`pan`),Object.defineProperty(a,"channelCountMode",{get:()=>i,set:e=>{if(e!==i)throw t()}}),a},gh=(e,t,n,r,i,a)=>{let o=16385,s=new Float32Array([1,1]),c=Math.PI/2,l={channelCount:1,channelCountMode:`explicit`,channelInterpretation:`discrete`},u={...l,oversample:`none`},d=(e,t,i,a)=>{let d=new Float32Array(o),f=new Float32Array(o);for(let e=0;e<o;e+=1){let t=e/16384*c;d[e]=Math.cos(t),f[e]=Math.sin(t)}let p=n(e,{...l,gain:0}),m=r(e,{...u,curve:d}),h=r(e,{...u,curve:s}),g=n(e,{...l,gain:0}),_=r(e,{...u,curve:f});return{connectGraph(){t.connect(p),t.connect(h.inputs===void 0?h:h.inputs[0]),t.connect(g),h.connect(i),i.connect(m.inputs===void 0?m:m.inputs[0]),i.connect(_.inputs===void 0?_:_.inputs[0]),m.connect(p.gain),_.connect(g.gain),p.connect(a,0,0),g.connect(a,0,1)},disconnectGraph(){t.disconnect(p),t.disconnect(h.inputs===void 0?h:h.inputs[0]),t.disconnect(g),h.disconnect(i),i.disconnect(m.inputs===void 0?m:m.inputs[0]),i.disconnect(_.inputs===void 0?_:_.inputs[0]),m.disconnect(p.gain),_.disconnect(g.gain),p.disconnect(a,0,0),g.disconnect(a,0,1)}}},f=(e,i,a,d)=>{let f=new Float32Array(o),p=new Float32Array(o),m=new Float32Array(o),h=new Float32Array(o),g=8192;for(let e=0;e<o;e+=1)if(e>g){let t=(e-g)/8192*c;f[e]=Math.cos(t),p[e]=Math.sin(t),m[e]=0,h[e]=1}else{let t=e/8192*c;f[e]=1,p[e]=0,m[e]=Math.cos(t),h[e]=Math.sin(t)}let _=t(e,{channelCount:2,channelCountMode:`explicit`,channelInterpretation:`discrete`,numberOfOutputs:2}),v=n(e,{...l,gain:0}),y=r(e,{...u,curve:f}),b=n(e,{...l,gain:0}),x=r(e,{...u,curve:p}),S=r(e,{...u,curve:s}),C=n(e,{...l,gain:0}),w=r(e,{...u,curve:m}),T=n(e,{...l,gain:0}),E=r(e,{...u,curve:h});return{connectGraph(){i.connect(_),i.connect(S.inputs===void 0?S:S.inputs[0]),_.connect(v,0),_.connect(b,0),_.connect(C,1),_.connect(T,1),S.connect(a),a.connect(y.inputs===void 0?y:y.inputs[0]),a.connect(x.inputs===void 0?x:x.inputs[0]),a.connect(w.inputs===void 0?w:w.inputs[0]),a.connect(E.inputs===void 0?E:E.inputs[0]),y.connect(v.gain),x.connect(b.gain),w.connect(C.gain),E.connect(T.gain),v.connect(d,0,0),C.connect(d,0,0),b.connect(d,0,1),T.connect(d,0,1)},disconnectGraph(){i.disconnect(_),i.disconnect(S.inputs===void 0?S:S.inputs[0]),_.disconnect(v,0),_.disconnect(b,0),_.disconnect(C,1),_.disconnect(T,1),S.disconnect(a),a.disconnect(y.inputs===void 0?y:y.inputs[0]),a.disconnect(x.inputs===void 0?x:x.inputs[0]),a.disconnect(w.inputs===void 0?w:w.inputs[0]),a.disconnect(E.inputs===void 0?E:E.inputs[0]),y.disconnect(v.gain),x.disconnect(b.gain),w.disconnect(C.gain),E.disconnect(T.gain),v.disconnect(d,0,0),C.disconnect(d,0,0),b.disconnect(d,0,1),T.disconnect(d,0,1)}}},p=(e,t,n,r,a)=>{if(t===1)return d(e,n,r,a);if(t===2)return f(e,n,r,a);throw i()};return(t,{channelCount:r,channelCountMode:o,pan:s,...c})=>{if(o===`max`)throw i();let l=e(t,{...c,channelCount:1,channelCountMode:o,numberOfInputs:2}),u=n(t,{...c,channelCount:r,channelCountMode:o,gain:1}),d=n(t,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`discrete`,gain:s}),{connectGraph:f,disconnectGraph:m}=p(t,r,u,d,l);Object.defineProperty(d.gain,"defaultValue",{get:()=>0}),Object.defineProperty(d.gain,"maxValue",{get:()=>1}),Object.defineProperty(d.gain,"minValue",{get:()=>-1});let h={get bufferSize(){},get channelCount(){return u.channelCount},set channelCount(e){u.channelCount!==e&&(g&&m(),{connectGraph:f,disconnectGraph:m}=p(t,e,u,d,l),g&&f()),u.channelCount=e},get channelCountMode(){return u.channelCountMode},set channelCountMode(e){if(e===`clamped-max`||e===`max`)throw i();u.channelCountMode=e},get channelInterpretation(){return u.channelInterpretation},set channelInterpretation(e){u.channelInterpretation=e},get context(){return u.context},get inputs(){return[u]},get numberOfInputs(){return u.numberOfInputs},get numberOfOutputs(){return u.numberOfOutputs},get pan(){return d.gain},addEventListener(...e){return u.addEventListener(e[0],e[1],e[2])},dispatchEvent(...e){return u.dispatchEvent(e[0])},removeEventListener(...e){return u.removeEventListener(e[0],e[1],e[2])}},g=!1;return a(Jm(h,l),()=>{f(),g=!0},()=>{m(),g=!1})}},_h=(e,t,n,r,i,a,o)=>(s,c)=>{let l=s.createWaveShaper();if(a!==null&&a.name===`webkitAudioContext`&&s.createGain().gain.automationRate===void 0)return n(s,c);Cm(l,c);let u=c.curve===null||c.curve instanceof Float32Array?c.curve:new Float32Array(c.curve);if(u!==null&&u.length<2)throw t();Sm(l,{curve:u},`curve`),Sm(l,c,`oversample`);let d=null,f=!1;return o(l,`curve`,e=>()=>e.call(l),t=>n=>(t.call(l,n),f&&(r(n)&&d===null?d=e(s,l):!r(n)&&d!==null&&(d(),d=null)),n)),i(l,()=>{f=!0,r(l.curve)&&(d=e(s,l))},()=>{f=!1,d!==null&&(d(),d=null)})},vh=(e,t,n,r,i)=>(a,{curve:o,oversample:s,...c})=>{let l=a.createWaveShaper(),u=a.createWaveShaper();Cm(l,c),Cm(u,c);let d=n(a,{...c,gain:1}),f=n(a,{...c,gain:-1}),p=n(a,{...c,gain:1}),m=n(a,{...c,gain:-1}),h=null,g=!1,_=null,v={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(e){d.channelCount=e,f.channelCount=e,l.channelCount=e,p.channelCount=e,u.channelCount=e,m.channelCount=e},get channelCountMode(){return l.channelCountMode},set channelCountMode(e){d.channelCountMode=e,f.channelCountMode=e,l.channelCountMode=e,p.channelCountMode=e,u.channelCountMode=e,m.channelCountMode=e},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(e){d.channelInterpretation=e,f.channelInterpretation=e,l.channelInterpretation=e,p.channelInterpretation=e,u.channelInterpretation=e,m.channelInterpretation=e},get context(){return l.context},get curve(){return _},set curve(n){if(n!==null&&n.length<2)throw t();if(n===null)l.curve=n,u.curve=n;else{let e=n.length,t=new Float32Array(e+2-e%2),r=new Float32Array(e+2-e%2);t[0]=n[0],r[0]=-n[e-1];let i=Math.ceil((e+1)/2),a=(e+1)/2-1;for(let o=1;o<i;o+=1){let s=o/i*a,c=Math.floor(s),l=Math.ceil(s);t[o]=c===l?n[c]:(1-(s-c))*n[c]+(1-(l-s))*n[l],r[o]=c===l?-n[e-1-c]:-((1-(s-c))*n[e-1-c])-(1-(l-s))*n[e-1-l]}t[i]=e%2==1?n[i-1]:(n[i-2]+n[i-1])/2,l.curve=t,u.curve=r}_=n,g&&(r(_)&&h===null?h=e(a,d):h!==null&&(h(),h=null))},get inputs(){return[d]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(e){l.oversample=e,u.oversample=e},addEventListener(...e){return d.addEventListener(e[0],e[1],e[2])},dispatchEvent(...e){return d.dispatchEvent(e[0])},removeEventListener(...e){return d.removeEventListener(e[0],e[1],e[2])}};return o!==null&&(v.curve=o instanceof Float32Array?o:new Float32Array(o)),s!==v.oversample&&(v.oversample=s),i(Jm(v,p),()=>{d.connect(l).connect(p),d.connect(f).connect(u).connect(m).connect(p),g=!0,r(_)&&(h=e(a,d))},()=>{d.disconnect(l),l.disconnect(p),d.disconnect(f),f.disconnect(u),u.disconnect(m),m.disconnect(p),g=!1,h!==null&&(h(),h=null)})},yh=()=>new DOMException(``,`NotSupportedError`),bh={numberOfChannels:1},xh=(e,t,n,r,i)=>class extends e{constructor(e,n,i){let a;if(typeof e==`number`&&n!==void 0&&i!==void 0)a={length:n,numberOfChannels:e,sampleRate:i};else if(typeof e==`object`)a=e;else throw Error(`The given parameters are not valid.`);let{length:o,numberOfChannels:s,sampleRate:c}={...bh,...a},l=r(s,o,c);t(bm,()=>bm(l))||l.addEventListener(`statechange`,(()=>{let e=0,t=n=>{this._state===`running`&&(e>0?(l.removeEventListener(`statechange`,t),n.stopImmediatePropagation(),this._waitForThePromiseToSettle(n)):e+=1)};return t})()),super(l,s),this._length=o,this._nativeOfflineAudioContext=l,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state===`running`?Promise.reject(n()):(this._state=`running`,i(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,nf(this)}))}_waitForThePromiseToSettle(e){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(e):setTimeout(()=>this._waitForThePromiseToSettle(e))}},Sh={channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`,detune:0,frequency:440,periodicWave:void 0,type:`sine`},Ch=(e,t,n,r,i,a,o)=>class extends e{constructor(e,o){let s=i(e),c={...Sh,...o},l=n(s,c),u=a(s),d=u?r():null,f=e.sampleRate/2;super(e,!1,l,d),this._detune=t(this,u,l.detune,153600,-153600),this._frequency=t(this,u,l.frequency,f,-f),this._nativeOscillatorNode=l,this._onended=null,this._oscillatorNodeRenderer=d,this._oscillatorNodeRenderer!==null&&c.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=c.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(e){let t=typeof e==`function`?o(this,e):null;this._nativeOscillatorNode.onended=t;let n=this._nativeOscillatorNode.onended;this._onended=n!==null&&n===t?e:n}get type(){return this._nativeOscillatorNode.type}set type(e){this._nativeOscillatorNode.type=e,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(e){this._nativeOscillatorNode.setPeriodicWave(e),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=e)}start(e=0){if(this._nativeOscillatorNode.start(e),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=e),this.context.state!==`closed`){wd(this);let e=()=>{this._nativeOscillatorNode.removeEventListener(`ended`,e),Ud(this)&&Ed(this)};this._nativeOscillatorNode.addEventListener(`ended`,e)}}stop(e=0){this._nativeOscillatorNode.stop(e),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=e)}},wh=(e,t,n,r,i)=>()=>{let a=new WeakMap,o=null,s=null,c=null,l=async(l,u)=>{let d=n(l),f=Pd(d,u);return f||(d=t(u,{channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,detune:d.detune.value,frequency:d.frequency.value,periodicWave:o===null?void 0:o,type:d.type}),s!==null&&d.start(s),c!==null&&d.stop(c)),a.set(u,d),f?(await e(u,l.detune,d.detune),await e(u,l.frequency,d.frequency)):(await r(u,l.detune,d.detune),await r(u,l.frequency,d.frequency)),await i(l,u,d),d};return{set periodicWave(e){o=e},set start(e){s=e},set stop(e){c=e},render(e,t){let n=a.get(t);return n===void 0?l(e,t):Promise.resolve(n)}}},Th={channelCount:2,channelCountMode:`clamped-max`,channelInterpretation:`speakers`,coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:`inverse`,maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:`equalpower`,positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},Eh=(e,t,n,r,i,a,o)=>class extends e{constructor(e,s){let c=i(e),l=n(c,{...Th,...s}),u=a(c),d=u?r():null;super(e,!1,l,d),this._nativePannerNode=l,this._orientationX=t(this,u,l.orientationX,Hd,Vd),this._orientationY=t(this,u,l.orientationY,Hd,Vd),this._orientationZ=t(this,u,l.orientationZ,Hd,Vd),this._positionX=t(this,u,l.positionX,Hd,Vd),this._positionY=t(this,u,l.positionY,Hd,Vd),this._positionZ=t(this,u,l.positionZ,Hd,Vd),o(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(e){this._nativePannerNode.coneInnerAngle=e}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(e){this._nativePannerNode.coneOuterAngle=e}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(e){this._nativePannerNode.coneOuterGain=e}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(e){this._nativePannerNode.distanceModel=e}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(e){this._nativePannerNode.maxDistance=e}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(e){this._nativePannerNode.panningModel=e}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(e){this._nativePannerNode.refDistance=e}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(e){this._nativePannerNode.rolloffFactor=e}},Dh=(e,t,n,r,i,a,o,s,c,l)=>()=>{let u=new WeakMap,d=null,f=async(f,p)=>{let m=null,h=a(f),g={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation},_={...g,coneInnerAngle:h.coneInnerAngle,coneOuterAngle:h.coneOuterAngle,coneOuterGain:h.coneOuterGain,distanceModel:h.distanceModel,maxDistance:h.maxDistance,panningModel:h.panningModel,refDistance:h.refDistance,rolloffFactor:h.rolloffFactor},v=Pd(h,p);if(`bufferSize`in h?m=r(p,{...g,gain:1}):v||(h=i(p,{..._,orientationX:h.orientationX.value,orientationY:h.orientationY.value,orientationZ:h.orientationZ.value,positionX:h.positionX.value,positionY:h.positionY.value,positionZ:h.positionZ.value})),u.set(p,m===null?h:m),m!==null){if(d===null){if(o===null)throw Error(`Missing the native OfflineAudioContext constructor.`);let e=new o(6,f.context.length,p.sampleRate),r=t(e,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`speakers`,numberOfInputs:6});r.connect(e.destination),d=(async()=>{let t=await Promise.all([f.orientationX,f.orientationY,f.orientationZ,f.positionX,f.positionY,f.positionZ].map(async(t,r)=>{let i=n(e,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`discrete`,offset:+(r===0)});return await s(e,t,i.offset),i}));for(let e=0;e<6;e+=1)t[e].connect(r,0,e),t[e].start(0);return l(e)})()}let e=await d,a=r(p,{...g,gain:1});await c(f,p,a);let u=[];for(let t=0;t<e.numberOfChannels;t+=1)u.push(e.getChannelData(t));let h=[u[0][0],u[1][0],u[2][0]],v=[u[3][0],u[4][0],u[5][0]],y=r(p,{...g,gain:1}),b=i(p,{..._,orientationX:h[0],orientationY:h[1],orientationZ:h[2],positionX:v[0],positionY:v[1],positionZ:v[2]});a.connect(y).connect(b.inputs[0]),b.connect(m);for(let t=128;t<e.length;t+=128){let e=[u[0][t],u[1][t],u[2][t]],n=[u[3][t],u[4][t],u[5][t]];if(e.some((e,t)=>e!==h[t])||n.some((e,t)=>e!==v[t])){h=e,v=n;let o=t/p.sampleRate;y.gain.setValueAtTime(0,o),y=r(p,{...g,gain:0}),b=i(p,{..._,orientationX:h[0],orientationY:h[1],orientationZ:h[2],positionX:v[0],positionY:v[1],positionZ:v[2]}),y.gain.setValueAtTime(1,o),a.connect(y).connect(b.inputs[0]),b.connect(m)}}return m}return v?(await e(p,f.orientationX,h.orientationX),await e(p,f.orientationY,h.orientationY),await e(p,f.orientationZ,h.orientationZ),await e(p,f.positionX,h.positionX),await e(p,f.positionY,h.positionY),await e(p,f.positionZ,h.positionZ)):(await s(p,f.orientationX,h.orientationX),await s(p,f.orientationY,h.orientationY),await s(p,f.orientationZ,h.orientationZ),await s(p,f.positionX,h.positionX),await s(p,f.positionY,h.positionY),await s(p,f.positionZ,h.positionZ)),mf(h)?await c(f,p,h.inputs[0]):await c(f,p,h),h};return{render(e,t){let n=u.get(t);return n===void 0?f(e,t):Promise.resolve(n)}}},Oh={disableNormalization:!1},kh=(e,t,n,r)=>class i{constructor(i,a){let o=e(t(i),r({...Oh,...a}));return n.add(o),o}static[Symbol.hasInstance](e){return typeof e==`object`&&!!e&&Object.getPrototypeOf(e)===i.prototype||n.has(e)}},Ah=(e,t)=>(n,r,i)=>(e(r).replay(i),t(r,n,i)),jh=(e,t,n)=>async(r,i,a)=>{let o=e(r);await Promise.all(o.activeInputs.map((e,o)=>Array.from(e).map(async([e,s])=>{let c=await t(e).render(e,i),l=r.context.destination;n(e)||r===l&&n(r)||c.connect(a,s,o)})).reduce((e,t)=>[...e,...t],[]))},Mh=(e,t,n)=>async(r,i,a)=>{let o=t(r);await Promise.all(Array.from(o.activeInputs).map(async([t,r])=>{let o=await e(t).render(t,i);n(t)||o.connect(a,r)}))},Nh=(e,t,n,r)=>i=>e(bm,()=>bm(i))?Promise.resolve(e(r,r)).then(e=>{if(!e){let e=n(i,512,0,1);i.oncomplete=()=>{e.onaudioprocess=null,e.disconnect()},e.onaudioprocess=()=>i.currentTime,e.connect(i.destination)}return i.startRendering()}):new Promise(e=>{let n=t(i,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`discrete`,gain:0});i.oncomplete=t=>{n.disconnect(),e(t.renderedBuffer)},n.connect(i.destination),i.startRendering()}),Ph=e=>(t,n)=>{e.set(t,n)},Fh=e=>(t,n)=>e.set(t,n),Ih=(e,t,n,r,i,a,o,s)=>(c,l)=>n(c).render(c,l).then(()=>Promise.all(Array.from(r(l)).map(e=>n(e).render(e,l)))).then(()=>i(l)).then(n=>(typeof n.copyFromChannel==`function`?t(a,()=>a(n))||s(n):(o(n),Rd(n)),e.add(n),n)),Lh={channelCount:2,channelCountMode:`explicit`,channelInterpretation:`speakers`,pan:0},Rh=(e,t,n,r,i,a)=>class extends e{constructor(e,o){let s=i(e),c=n(s,{...Lh,...o}),l=a(s),u=l?r():null;super(e,!1,c,u),this._pan=t(this,l,c.pan)}get pan(){return this._pan}},zh=(e,t,n,r,i)=>()=>{let a=new WeakMap,o=async(o,s)=>{let c=n(o),l=Pd(c,s);return l||(c=t(s,{channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,pan:c.pan.value})),a.set(s,c),l?await e(s,o.pan,c.pan):await r(s,o.pan,c.pan),mf(c)?await i(o,s,c.inputs[0]):await i(o,s,c),c};return{render(e,t){let n=a.get(t);return n===void 0?o(e,t):Promise.resolve(n)}}},Bh=e=>()=>{if(e===null)return!1;try{new e({length:1,sampleRate:44100})}catch{return!1}return!0},Vh=(e,t)=>async()=>{if(e===null)return!0;if(t===null)return!1;let n=new Blob([`class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)`],{type:`application/javascript; charset=utf-8`}),r=new t(1,128,44100),i=URL.createObjectURL(n),a=!1,o=!1;try{await r.audioWorklet.addModule(i);let t=new e(r,`a`,{numberOfOutputs:0}),n=r.createOscillator();t.port.onmessage=()=>a=!0,t.onprocessorerror=()=>o=!0,n.connect(t),n.start(0),await r.startRendering(),await new Promise(e=>setTimeout(e))}catch{}finally{URL.revokeObjectURL(i)}return a&&!o},Hh=(e,t)=>()=>{if(t===null)return Promise.resolve(!1);let n=new t(1,1,44100),r=e(n,{channelCount:1,channelCountMode:`explicit`,channelInterpretation:`discrete`,gain:0});return new Promise(e=>{n.oncomplete=()=>{r.disconnect(),e(n.currentTime!==0)},n.startRendering()})},Uh=()=>new DOMException(``,`UnknownError`),Wh={channelCount:2,channelCountMode:`max`,channelInterpretation:`speakers`,curve:null,oversample:`none`},Gh=(e,t,n,r,i,a,o)=>class extends e{constructor(e,t){let s=i(e),c=n(s,{...Wh,...t}),l=a(s)?r():null;super(e,!0,c,l),this._isCurveNullified=!1,this._nativeWaveShaperNode=c,o(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(e){if(e===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(e.length<2)throw t();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=e}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(e){this._nativeWaveShaperNode.oversample=e}},Kh=(e,t,n)=>()=>{let r=new WeakMap,i=async(i,a)=>{let o=t(i);return Pd(o,a)||(o=e(a,{channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,curve:o.curve,oversample:o.oversample})),r.set(a,o),mf(o)?await n(i,a,o.inputs[0]):await n(i,a,o),o};return{render(e,t){let n=r.get(t);return n===void 0?i(e,t):Promise.resolve(n)}}},qh=()=>typeof window>`u`?null:window,Jh=(e,t)=>n=>{n.copyFromChannel=(r,i,a=0)=>{let o=e(a),s=e(i);if(s>=n.numberOfChannels)throw t();let c=n.length,l=n.getChannelData(s),u=r.length;for(let e=o<0?-o:0;e+o<c&&e<u;e+=1)r[e]=l[e+o]},n.copyToChannel=(r,i,a=0)=>{let o=e(a),s=e(i);if(s>=n.numberOfChannels)throw t();let c=n.length,l=n.getChannelData(s),u=r.length;for(let e=o<0?-o:0;e+o<c&&e<u;e+=1)l[e+o]=r[e]}},Yh=e=>t=>{t.copyFromChannel=(n=>(r,i,a=0)=>{let o=e(a),s=e(i);if(o<t.length)return n.call(t,r,s,o)})(t.copyFromChannel),t.copyToChannel=(n=>(r,i,a=0)=>{let o=e(a),s=e(i);if(o<t.length)return n.call(t,r,s,o)})(t.copyToChannel)},Xh=e=>(t,n)=>{let r=n.createBuffer(1,1,44100);t.buffer===null&&(t.buffer=r),e(t,`buffer`,e=>()=>{let n=e.call(t);return n===r?null:n},e=>n=>e.call(t,n===null?r:n))},Zh=(e,t)=>(n,r)=>{r.channelCount=1,r.channelCountMode=`explicit`,Object.defineProperty(r,"channelCount",{get:()=>1,set:()=>{throw e()}}),Object.defineProperty(r,"channelCountMode",{get:()=>`explicit`,set:()=>{throw e()}});let i=n.createBufferSource();t(r,()=>{let e=r.numberOfInputs;for(let t=0;t<e;t+=1)i.connect(r,0,t)},()=>i.disconnect(r))},Qh=(e,t,n)=>e.copyFromChannel===void 0?e.getChannelData(n)[0]:(e.copyFromChannel(t,n),t[0]),$h=e=>{if(e===null)return!1;let t=e.length;return t%2==0?e[t/2-1]+e[t/2]!==0:e[Math.floor(t/2)]!==0},eg=(e,t,n,r)=>{let i=e;for(;!i.hasOwnProperty(t);)i=Object.getPrototypeOf(i);let{get:a,set:o}=Object.getOwnPropertyDescriptor(i,t);Object.defineProperty(e,t,{get:n(a),set:r(o)})},tg=e=>({...e,outputChannelCount:e.outputChannelCount===void 0?e.numberOfInputs===1&&e.numberOfOutputs===1?[e.channelCount]:Array.from({length:e.numberOfOutputs},()=>1):e.outputChannelCount}),ng=e=>({...e,channelCount:e.numberOfOutputs}),rg=e=>{let{imag:t,real:n}=e;return t===void 0?n===void 0?{...e,imag:[0,0],real:[0,0]}:{...e,imag:Array.from(n,()=>0),real:n}:n===void 0?{...e,imag:t,real:Array.from(t,()=>0)}:{...e,imag:t,real:n}},ig=(e,t,n)=>{try{e.setValueAtTime(t,n)}catch(r){if(r.code!==9)throw r;ig(e,t,n+1e-7)}},ag=e=>{let t=e.createBufferSource();t.start();try{t.start()}catch{return!0}return!1},og=e=>{let t=e.createBufferSource();t.buffer=e.createBuffer(1,1,44100);try{t.start(0,1)}catch{return!1}return!0},sg=e=>{let t=e.createBufferSource();t.start();try{t.stop()}catch{return!1}return!0},cg=e=>{let t=e.createOscillator();try{t.start(-1)}catch(e){return e instanceof RangeError}return!1},lg=e=>{let t=e.createBuffer(1,1,44100),n=e.createBufferSource();n.buffer=t,n.start(),n.stop();try{return n.stop(),!0}catch{return!1}},ug=e=>{let t=e.createOscillator();try{t.stop(-1)}catch(e){return e instanceof RangeError}return!1},dg=e=>{let{port1:t,port2:n}=new MessageChannel;try{t.postMessage(e)}finally{t.close(),n.close()}},fg=e=>{e.start=(t=>(n=0,r=0,i)=>{let a=e.buffer,o=a===null?r:Math.min(a.duration,r);a!==null&&o>a.duration-.5/e.context.sampleRate?t.call(e,n,0,0):t.call(e,n,o,i)})(e.start)},pg=(e,t)=>{let n=t.createGain();e.connect(n);let r=(t=>()=>{t.call(e,n),e.removeEventListener(`ended`,r)})(e.disconnect);e.addEventListener(`ended`,r),Jm(e,n),e.stop=(t=>{let r=!1;return(i=0)=>{if(r)try{t.call(e,i)}catch{n.gain.setValueAtTime(0,i)}else t.call(e,i),r=!0}})(e.stop)},mg=(e,t)=>n=>{let r={value:e};return Object.defineProperties(n,{currentTarget:r,target:r}),typeof t==`function`?t.call(e,n):t.handleEvent.call(e,n)},hg=ed(df),gg=kd(df),_g=wp(xd),vg=new WeakMap,yg=Up(vg),bg=$f(new Map,new WeakMap),xg=qh(),Sg=Em(bg,Ld),Cg=Hp($d),wg=jh($d,Cg,Cf),Tg=Fd(Sg,xf,wg),Eg=qp(cd),Dg=lh(xg),Og=fm(Dg),kg=new WeakMap,Ag=Fp(mg),jg=Nm(xg),Mg=cm(jg),Ng=lm(xg),Pg=um(xg),Fg=Fm(xg),Ig=Lf(td(id),Od(hg,gg,hf,_g,bf,$d,yg,Cd,xf,df,Ud,Cf,wf),bg,rm(ud,bf,$d,xf,Sf,Ud),Ld,Xp,yh,bp(hf,ud,$d,xf,Sf,Eg,Ud,Og),Dp(kg,$d,bd),Ag,Eg,Mg,Ng,Pg,Og,Fg),Lg=Nd(Ig,Tg,Ld,Sg,Eg,Og),Rg=new WeakSet,zg=Dm(xg),Bg=fp(new Uint32Array(1)),Vg=Jh(Bg,Ld),Hg=Yh(Bg),Ug=Bd(Rg,bg,yh,zg,Dg,Bh(zg),Vg,Hg),Wg=Ad($m),Gg=Mh(Cg,ef,Cf),Kg=op(Gg),qg=Mm(Wg,bg,ag,og,sg,cg,lg,ug,fg,Xh(eg),pg),Jg=Ah(Wp(ef),Gg),Yg=Kd(Kg,qg,xf,Jg,wg),Xg=Rf(nd(od),kg,sd,zf,Qu.createCancelAndHoldAutomationEvent,Qu.createCancelScheduledValuesAutomationEvent,Qu.createExponentialRampToValueAutomationEvent,Qu.createLinearRampToValueAutomationEvent,Qu.createSetTargetAutomationEvent,Qu.createSetValueAutomationEvent,Qu.createSetValueCurveAutomationEvent,jg,ig),Zg=Gd(Ig,Yg,Xg,Kp,qg,Eg,Og,mg),Qg=of(Ig,sf,Ld,Kp,Pm($m,eg),Eg,Og,wg),$g=Qf(Kg,Um,xf,Jg,wg),e_=Fh(vg),t_=Zf(Ig,Xg,$g,Xp,Um,Eg,Og,e_),n_=xm(df,Ng),r_=Wm(jg,Zh(Kp,n_)),i_=tp(Ig,np(r_,xf,wg),r_,Eg,Og),a_=ip(Ig,ap(Km,xf,wg),Km,Eg,Og,ng),o_=qm(Wg,bg,Ym(Wg,qg,$m,n_),cg,ug),s_=up(Ig,Xg,dp(Kg,o_,xf,Jg,wg),o_,Eg,Og,mg),c_=Xm(yh,eg),l_=mp(Ig,hp(c_,xf,wg),c_,Eg,Og,e_),u_=Sp(Ig,Xg,Cp(Kg,Zm,xf,Jg,wg),Zm,Eg,Og,e_),d_=Qm(yh),f_=jp(Ig,Xg,Mp(Kg,d_,xf,Jg,wg),d_,yh,Eg,Og,e_),p_=zp(Ig,Xg,Bp(Kg,$m,xf,Jg,wg),$m,Eg,Og),m_=ih(Xp,Kp,mh,yh),h_=Nh(bg,$m,mh,Hh($m,Dg)),g_=nm(qg,xf,Dg,wg,h_),__=$p(Ig,eh(m_),g_,Eg,Og,e_),v_=cf(Xg,r_,o_,mh,yh,Qh,Og,eg),y_=new WeakMap,b_=ym(Qg,v_,Ag,Og,y_,mg),x_=uh(Wg,bg,cg,lg,ug,pg),S_=Ch(Ig,Xg,x_,wh(Kg,x_,xf,Jg,wg),Eg,Og,mg),C_=cp(qg),w_=_h(C_,Kp,vh(C_,Kp,$m,$h,n_),$h,n_,jg,eg),T_=dh(fh(hf,Kp,r_,$m,mh,w_,yh,bf,Qh,n_)),E_=Eh(Ig,Xg,T_,Dh(Kg,r_,o_,$m,T_,xf,Dg,Jg,wg,h_),Eg,Og,e_),D_=kh(ph(Ld),Eg,new WeakSet,rg),O_=hh(gh(r_,Km,$m,w_,yh,n_),yh),k_=Rh(Ig,Xg,O_,zh(Kg,O_,xf,Jg,wg),Eg,Og),A_=Gh(Ig,Kp,w_,Kh(w_,xf,wg),Eg,Og,e_),j_=pm(xg),M_=Ip(xg),N_=new WeakMap,P_=Jp(N_,Dg),F_=j_?yd(bg,yh,Pp(xg),M_,Lp($u),Eg,P_,Og,Fg,new WeakMap,new WeakMap,Vh(Fg,Dg),xg):void 0,I_=dm(Mg,Og),L_=Yf(F_,Lg,Ug,Zg,t_,i_,a_,s_,l_,yp(Rg,bg,_p,Np,new WeakSet,Eg,I_,Id,bm,Vg,Hg),u_,f_,p_,__,b_,S_,E_,D_,k_,A_),R_=af(L_,Kp,yh,Uh,mm(Ig,ah,Eg,Og),gm(Ig,oh,Eg,Og),_m(Ig,sh,Eg,Og),vm(Ig,ch(Kp,Og),Eg),jg),z_=Yp(y_),B_=jd(z_),V_=sp(Ld),H_=Tp(z_),U_=kp(Ld),W_=new WeakMap,G_=Lm(Kp,Hm(V_,Ld,Kp,r_,Km,o_,$m,mh,yh,U_,M_,Vp(W_,bd),n_),$m,yh,n_),K_=Jf(Kg,V_,qg,r_,Km,o_,$m,H_,U_,M_,xf,Fg,Dg,Jg,wg,h_),q_=Gp(N_),J_=Ph(W_),Y_=j_?Hf(B_,Ig,Xg,K_,G_,$d,q_,Eg,Og,Fg,tg,J_,dg,mg):void 0,X_=xh(L_,bg,Kp,gp(yh,Dg),Ih(Rg,bg,Cg,z_,h_,Id,Vg,Hg)),Z_=im(cd,Mg),Q_=am(ad,Ng),$_=om(sd,Pg),ev=sm(cd,Og);function tv(e){return e===void 0}function nv(e){return e!==void 0}function rv(e){return typeof e==`function`}function iv(e){return typeof e==`number`}function av(e){return Object.prototype.toString.call(e)===`[object Object]`&&e.constructor===Object}function ov(e){return typeof e==`boolean`}function sv(e){return Array.isArray(e)}function cv(e){return typeof e==`string`}function lv(e){return cv(e)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(e)}function K(e,t){if(!e)throw Error(t)}function uv(e,t,n=1/0){if(!(t<=e&&e<=n))throw RangeError(`Value must be within [${t}, ${n}], got: ${e}`)}function dv(e){!e.isOffline&&e.state!==`running`&&vv(`The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.`)}var fv=!1,pv=!1;function mv(e){fv=e}function hv(e){tv(e)&&fv&&!pv&&(pv=!0,vv(`Events scheduled inside of scheduled callbacks should use the passed in scheduling time. See https://github.com/Tonejs/Tone.js/wiki/Accurate-Timing`))}var gv=console;function _v(...e){gv.log(...e)}function vv(...e){gv.warn(...e)}function yv(e){return new R_(e)}function bv(e,t,n){return new X_(e,t,n)}var xv=typeof self==`object`?self:null,Sv=xv&&(xv.hasOwnProperty(`AudioContext`)||xv.hasOwnProperty(`webkitAudioContext`));function Cv(e,t,n){return K(nv(Y_),`AudioWorkletNode only works in a secure context (https or localhost)`),new(e instanceof xv?.BaseAudioContext?xv?.AudioWorkletNode:Y_)(e,t,n)}function wv(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function Tv(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})}var Ev=class{constructor(e,t,n,r){this._callback=e,this._type=t,this._minimumUpdateInterval=Math.max(128/(r||44100),.001),this.updateInterval=n,this._createClock()}_createWorker(){let e=new Blob([`
			// the initial timeout time
			let timeoutTime =  ${(this._updateInterval*1e3).toFixed(1)};
			// onmessage callback
			self.onmessage = function(msg){
				timeoutTime = parseInt(msg.data);
			};
			// the tick function which posts a message
			// and schedules a new tick
			function tick(){
				setTimeout(tick, timeoutTime);
				self.postMessage('tick');
			}
			// call tick initially
			tick();
			`],{type:`text/javascript`}),t=URL.createObjectURL(e),n=new Worker(t);n.onmessage=this._callback.bind(this),this._worker=n}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},this._updateInterval*1e3)}_createClock(){if(this._type===`worker`)try{this._createWorker()}catch{this._type=`timeout`,this._createClock()}else this._type===`timeout`&&this._createTimeout()}_disposeClock(){this._timeout&&clearTimeout(this._timeout),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(e){var t;this._updateInterval=Math.max(e,this._minimumUpdateInterval),this._type===`worker`&&((t=this._worker)==null||t.postMessage(this._updateInterval*1e3))}get type(){return this._type}set type(e){this._disposeClock(),this._type=e,this._createClock()}dispose(){this._disposeClock()}};function Dv(e){return $_(e)}function Ov(e){return Q_(e)}function kv(e){return ev(e)}function Av(e){return Z_(e)}function jv(e){return e instanceof Ug}function Mv(e,t){return e===`value`||Dv(t)||Ov(t)||jv(t)}function Nv(e,...t){if(!t.length)return e;let n=t.shift();if(av(e)&&av(n))for(let t in n)Mv(t,n[t])?e[t]=n[t]:av(n[t])?(e[t]||Object.assign(e,{[t]:{}}),Nv(e[t],n[t])):Object.assign(e,{[t]:n[t]});return Nv(e,...t)}function Pv(e,t){return e.length===t.length&&e.every((e,n)=>t[n]===e)}function q(e,t,n=[],r){let i={},a=Array.from(t);if(av(a[0])&&r&&!Reflect.has(a[0],r)&&(Object.keys(a[0]).some(t=>Reflect.has(e,t))||(Nv(i,{[r]:a[0]}),n.splice(n.indexOf(r),1),a.shift())),a.length===1&&av(a[0]))Nv(i,a[0]);else for(let e=0;e<n.length;e++)nv(a[e])&&(i[n[e]]=a[e]);return Nv(e,i)}function Fv(e){return e.constructor.getDefaults()}function Iv(e,t){return tv(e)?t:e}function Lv(e,t){return t.forEach(t=>{Reflect.has(e,t)&&delete e[t]}),e}var Rv=class{constructor(){this.debug=!1,this._wasDisposed=!1}static getDefaults(){return{}}log(...e){(this.debug||xv&&this.toString()===xv.TONE_DEBUG_CLASS)&&_v(this,...e)}dispose(){return this._wasDisposed=!0,this}get disposed(){return this._wasDisposed}toString(){return this.name}};Rv.version=Bu;var zv=1e-6;function Bv(e,t){return e>t+zv}function Vv(e,t){return Bv(e,t)||Uv(e,t)}function Hv(e,t){return e+zv<t}function Uv(e,t){return Math.abs(e-t)<zv}function Wv(e,t,n){return Math.max(Math.min(e,n),t)}var Gv=class e extends Rv{constructor(){super(),this.name=`Timeline`,this._timeline=[];let t=q(e.getDefaults(),arguments,[`memory`]);this.memory=t.memory,this.increasing=t.increasing}static getDefaults(){return{memory:1/0,increasing:!1}}get length(){return this._timeline.length}add(e){if(K(Reflect.has(e,`time`),`Timeline: events must have a time attribute`),e.time=e.time.valueOf(),this.increasing&&this.length){let t=this._timeline[this.length-1];K(Vv(e.time,t.time),`The time must be greater than or equal to the last scheduled time`),this._timeline.push(e)}else{let t=this._search(e.time);this._timeline.splice(t+1,0,e)}if(this.length>this.memory){let e=this.length-this.memory;this._timeline.splice(0,e)}return this}remove(e){let t=this._timeline.indexOf(e);return t!==-1&&this._timeline.splice(t,1),this}get(e,t=`time`){let n=this._search(e,t);return n===-1?null:this._timeline[n]}peek(){return this._timeline[0]}shift(){return this._timeline.shift()}getAfter(e,t=`time`){let n=this._search(e,t);return n+1<this._timeline.length?this._timeline[n+1]:null}getBefore(e){let t=this._timeline.length;if(t>0&&this._timeline[t-1].time<e)return this._timeline[t-1];let n=this._search(e);return n-1>=0?this._timeline[n-1]:null}cancel(e){if(this._timeline.length>1){let t=this._search(e);if(t>=0){if(Uv(this._timeline[t].time,e)){for(let n=t;n>=0&&Uv(this._timeline[n].time,e);n--)t=n;this._timeline=this._timeline.slice(0,t)}else this._timeline=this._timeline.slice(0,t+1)}else this._timeline=[]}else this._timeline.length===1&&Vv(this._timeline[0].time,e)&&(this._timeline=[]);return this}cancelBefore(e){let t=this._search(e);return t>=0&&(this._timeline=this._timeline.slice(t+1)),this}previousEvent(e){let t=this._timeline.indexOf(e);return t>0?this._timeline[t-1]:null}_search(e,t=`time`){if(this._timeline.length===0)return-1;let n=0,r=this._timeline.length,i=r;if(r>0&&this._timeline[r-1][t]<=e)return r-1;for(;n<i;){let r=Math.floor(n+(i-n)/2),a=this._timeline[r],o=this._timeline[r+1];if(Uv(a[t],e)){for(let n=r;n<this._timeline.length;n++){let i=this._timeline[n];if(Uv(i[t],e))r=n;else break}return r}if(Hv(a[t],e)&&Bv(o[t],e))return r;Bv(a[t],e)?i=r:n=r+1}return-1}_iterate(e,t=0,n=this._timeline.length-1){this._timeline.slice(t,n+1).forEach(e)}forEach(e){return this._iterate(e),this}forEachBefore(e,t){let n=this._search(e);return n!==-1&&this._iterate(t,0,n),this}forEachAfter(e,t){let n=this._search(e);return this._iterate(t,n+1),this}forEachBetween(e,t,n){let r=this._search(e),i=this._search(t);return r!==-1&&i!==-1?(this._timeline[r].time!==e&&(r+=1),this._timeline[i].time===t&&--i,this._iterate(n,r,i)):r===-1&&this._iterate(n,0,i),this}forEachFrom(e,t){let n=this._search(e);for(;n>=0&&this._timeline[n].time>=e;)n--;return this._iterate(t,n+1),this}forEachAtTime(e,t){let n=this._search(e);if(n!==-1&&Uv(this._timeline[n].time,e)){let r=n;for(let t=n;t>=0&&Uv(this._timeline[t].time,e);t--)r=t;this._iterate(e=>{t(e)},r,n)}return this}dispose(){return super.dispose(),this._timeline=[],this}},Kv=[];function qv(e){Kv.push(e)}function Jv(e){Kv.forEach(t=>t(e))}var Yv=[];function Xv(e){Yv.push(e)}function Zv(e){Yv.forEach(t=>t(e))}var Qv=class e extends Rv{constructor(){super(...arguments),this.name=`Emitter`}on(e,t){return e.split(/\W+/).forEach(e=>{tv(this._events)&&(this._events={}),this._events.hasOwnProperty(e)||(this._events[e]=[]),this._events[e].push(t)}),this}once(e,t){let n=(...r)=>{t(...r),this.off(e,n)};return this.on(e,n),this}off(e,t){return e.split(/\W+/).forEach(e=>{if(tv(this._events)&&(this._events={}),this._events.hasOwnProperty(e)){if(tv(t))this._events[e]=[];else{let n=this._events[e];for(let e=n.length-1;e>=0;e--)n[e]===t&&n.splice(e,1)}}}),this}emit(e,...t){if(this._events&&this._events.hasOwnProperty(e)){let n=this._events[e].slice(0);for(let e=0,r=n.length;e<r;e++)n[e].apply(this,t)}return this}static mixin(t){[`on`,`once`,`off`,`emit`].forEach(n=>{let r=Object.getOwnPropertyDescriptor(e.prototype,n);Object.defineProperty(t.prototype,n,r)})}dispose(){return super.dispose(),this._events=void 0,this}},$v=class extends Qv{constructor(){super(...arguments),this.isOffline=!1}toJSON(){return{}}},ey=class e extends $v{constructor(){super(),this.name=`Context`,this._constants=new Map,this._timeouts=new Gv,this._timeoutIds=0,this._initialized=!1,this._closeStarted=!1,this.isOffline=!1,this._workletPromise=null;let t=q(e.getDefaults(),arguments,[`context`]);t.context?(this._context=t.context,this._latencyHint=arguments[0]?.latencyHint||``):(this._context=yv({latencyHint:t.latencyHint}),this._latencyHint=t.latencyHint),this._ticker=new Ev(this.emit.bind(this,`tick`),t.clockSource,t.updateInterval,this._context.sampleRate),this.on(`tick`,this._timeoutLoop.bind(this)),this._context.onstatechange=()=>{this.emit(`statechange`,this.state)},this[arguments[0]?.hasOwnProperty(`updateInterval`)?`_lookAhead`:`lookAhead`]=t.lookAhead}static getDefaults(){return{clockSource:`worker`,latencyHint:`interactive`,lookAhead:.1,updateInterval:.05}}initialize(){return this._initialized||=(Jv(this),!0),this}createAnalyser(){return this._context.createAnalyser()}createOscillator(){return this._context.createOscillator()}createBufferSource(){return this._context.createBufferSource()}createBiquadFilter(){return this._context.createBiquadFilter()}createBuffer(e,t,n){return this._context.createBuffer(e,t,n)}createChannelMerger(e){return this._context.createChannelMerger(e)}createChannelSplitter(e){return this._context.createChannelSplitter(e)}createConstantSource(){return this._context.createConstantSource()}createConvolver(){return this._context.createConvolver()}createDelay(e){return this._context.createDelay(e)}createDynamicsCompressor(){return this._context.createDynamicsCompressor()}createGain(){return this._context.createGain()}createIIRFilter(e,t){return this._context.createIIRFilter(e,t)}createPanner(){return this._context.createPanner()}createPeriodicWave(e,t,n){return this._context.createPeriodicWave(e,t,n)}createStereoPanner(){return this._context.createStereoPanner()}createWaveShaper(){return this._context.createWaveShaper()}createMediaStreamSource(e){return K(Av(this._context),`Not available if OfflineAudioContext`),this._context.createMediaStreamSource(e)}createMediaElementSource(e){return K(Av(this._context),`Not available if OfflineAudioContext`),this._context.createMediaElementSource(e)}createMediaStreamDestination(){return K(Av(this._context),`Not available if OfflineAudioContext`),this._context.createMediaStreamDestination()}decodeAudioData(e){return this._context.decodeAudioData(e)}get currentTime(){return this._context.currentTime}get state(){return this._context.state}get sampleRate(){return this._context.sampleRate}get listener(){return this.initialize(),this._listener}set listener(e){K(!this._initialized,`The listener cannot be set after initialization.`),this._listener=e}get transport(){return this.initialize(),this._transport}set transport(e){K(!this._initialized,`The transport cannot be set after initialization.`),this._transport=e}get draw(){return this.initialize(),this._draw}set draw(e){K(!this._initialized,`Draw cannot be set after initialization.`),this._draw=e}get destination(){return this.initialize(),this._destination}set destination(e){K(!this._initialized,`The destination cannot be set after initialization.`),this._destination=e}createAudioWorkletNode(e,t){return Cv(this.rawContext,e,t)}addAudioWorkletModule(e){return Tv(this,void 0,void 0,function*(){K(nv(this.rawContext.audioWorklet),`AudioWorkletNode is only available in a secure context (https or localhost)`),this._workletPromise||=this.rawContext.audioWorklet.addModule(e),yield this._workletPromise})}workletsAreReady(){return Tv(this,void 0,void 0,function*(){(yield this._workletPromise)?this._workletPromise:Promise.resolve()})}get updateInterval(){return this._ticker.updateInterval}set updateInterval(e){this._ticker.updateInterval=e}get clockSource(){return this._ticker.type}set clockSource(e){this._ticker.type=e}get lookAhead(){return this._lookAhead}set lookAhead(e){this._lookAhead=e,this.updateInterval=e?e/2:.01}get latencyHint(){return this._latencyHint}get rawContext(){return this._context}now(){return this._context.currentTime+this._lookAhead}immediate(){return this._context.currentTime}resume(){return Av(this._context)?this._context.resume():Promise.resolve()}close(){return Tv(this,void 0,void 0,function*(){Av(this._context)&&this.state!==`closed`&&!this._closeStarted&&(this._closeStarted=!0,yield this._context.close()),this._initialized&&Zv(this)})}getConstant(e){if(this._constants.has(e))return this._constants.get(e);{let t=this._context.createBuffer(1,128,this._context.sampleRate),n=t.getChannelData(0);for(let t=0;t<n.length;t++)n[t]=e;let r=this._context.createBufferSource();return r.channelCount=1,r.channelCountMode=`explicit`,r.buffer=t,r.loop=!0,r.start(0),this._constants.set(e,r),r}}dispose(){return super.dispose(),this._ticker.dispose(),this._timeouts.dispose(),Object.keys(this._constants).map(e=>this._constants[e].disconnect()),this.close(),this}_timeoutLoop(){let e=this.now();this._timeouts.forEachBefore(e,e=>{e.callback(),this._timeouts.remove(e)})}setTimeout(e,t){this._timeoutIds++;let n=this.now();return this._timeouts.add({callback:e,id:this._timeoutIds,time:n+t}),this._timeoutIds}clearTimeout(e){return this._timeouts.forEach(t=>{t.id===e&&this._timeouts.remove(t)}),this}clearInterval(e){return this.clearTimeout(e)}setInterval(e,t){let n=++this._timeoutIds,r=()=>{let i=this.now();this._timeouts.add({callback:()=>{e(),r()},id:n,time:i+t})};return r(),n}},ty=class extends $v{constructor(){super(...arguments),this.lookAhead=0,this.latencyHint=0,this.isOffline=!1}createAnalyser(){return{}}createOscillator(){return{}}createBufferSource(){return{}}createBiquadFilter(){return{}}createBuffer(e,t,n){return{}}createChannelMerger(e){return{}}createChannelSplitter(e){return{}}createConstantSource(){return{}}createConvolver(){return{}}createDelay(e){return{}}createDynamicsCompressor(){return{}}createGain(){return{}}createIIRFilter(e,t){return{}}createPanner(){return{}}createPeriodicWave(e,t,n){return{}}createStereoPanner(){return{}}createWaveShaper(){return{}}createMediaStreamSource(e){return{}}createMediaElementSource(e){return{}}createMediaStreamDestination(){return{}}decodeAudioData(e){return Promise.resolve({})}createAudioWorkletNode(e,t){return{}}get rawContext(){return{}}addAudioWorkletModule(e){return Tv(this,void 0,void 0,function*(){return Promise.resolve()})}resume(){return Promise.resolve()}setTimeout(e,t){return 0}clearTimeout(e){return this}setInterval(e,t){return 0}clearInterval(e){return this}getConstant(e){return{}}get currentTime(){return 0}get state(){return{}}get sampleRate(){return 0}get listener(){return{}}get transport(){return{}}get draw(){return{}}set draw(e){}get destination(){return{}}set destination(e){}now(){return 0}immediate(){return 0}};function ny(e,t){sv(t)?t.forEach(t=>ny(e,t)):Object.defineProperty(e,t,{enumerable:!0,writable:!1})}function ry(e,t){sv(t)?t.forEach(t=>ry(e,t)):Object.defineProperty(e,t,{writable:!0})}var iy=()=>{},ay=class e extends Rv{constructor(){super(),this.name=`ToneAudioBuffer`,this.onload=iy;let t=q(e.getDefaults(),arguments,[`url`,`onload`,`onerror`]);this.reverse=t.reverse,this.onload=t.onload,cv(t.url)?this.load(t.url).catch(t.onerror):t.url&&this.set(t.url)}static getDefaults(){return{onerror:iy,onload:iy,reverse:!1}}get sampleRate(){return this._buffer?this._buffer.sampleRate:ly().sampleRate}set(t){return t instanceof e?t.loaded?this._buffer=t.get():t.onload=()=>{this.set(t),this.onload(this)}:this._buffer=t,this._reversed&&this._reverse(),this}get(){return this._buffer}load(t){return Tv(this,void 0,void 0,function*(){let n=e.load(t).then(e=>{this.set(e),this.onload(this)});e.downloads.push(n);try{yield n}finally{let t=e.downloads.indexOf(n);e.downloads.splice(t,1)}return this})}dispose(){return super.dispose(),this._buffer=void 0,this}fromArray(e){let t=sv(e)&&e[0].length>0,n=t?e.length:1,r=t?e[0].length:e.length,i=ly(),a=i.createBuffer(n,r,i.sampleRate),o=!t&&n===1?[e]:e;for(let e=0;e<n;e++)a.copyToChannel(o[e],e);return this._buffer=a,this}toMono(e){if(iv(e))this.fromArray(this.toArray(e));else{let e=new Float32Array(this.length),t=this.numberOfChannels;for(let n=0;n<t;n++){let t=this.toArray(n);for(let n=0;n<t.length;n++)e[n]+=t[n]}e=e.map(e=>e/t),this.fromArray(e)}return this}toArray(e){if(iv(e))return this.getChannelData(e);if(this.numberOfChannels===1)return this.toArray(0);{let e=[];for(let t=0;t<this.numberOfChannels;t++)e[t]=this.getChannelData(t);return e}}getChannelData(e){return this._buffer?this._buffer.getChannelData(e):new Float32Array}slice(t,n=this.duration){K(this.loaded,`Buffer is not loaded`);let r=Math.floor(t*this.sampleRate),i=Math.floor(n*this.sampleRate);K(r<i,`The start time must be less than the end time`);let a=i-r,o=ly().createBuffer(this.numberOfChannels,a,this.sampleRate);for(let e=0;e<this.numberOfChannels;e++)o.copyToChannel(this.getChannelData(e).subarray(r,i),e);return new e(o)}_reverse(){if(this.loaded)for(let e=0;e<this.numberOfChannels;e++)this.getChannelData(e).reverse();return this}get loaded(){return this.length>0}get duration(){return this._buffer?this._buffer.duration:0}get length(){return this._buffer?this._buffer.length:0}get numberOfChannels(){return this._buffer?this._buffer.numberOfChannels:0}get reverse(){return this._reversed}set reverse(e){this._reversed!==e&&(this._reversed=e,this._reverse())}static fromArray(t){return new e().fromArray(t)}static fromUrl(t){return Tv(this,void 0,void 0,function*(){return yield new e().load(t)})}static load(t){return Tv(this,void 0,void 0,function*(){let n=e.baseUrl===``||e.baseUrl.endsWith(`/`)?e.baseUrl:e.baseUrl+`/`,r=yield fetch(n+t);if(!r.ok)throw Error(`could not load url: ${t}`);let i=yield r.arrayBuffer();return yield ly().decodeAudioData(i)})}static supportsType(e){let t=e.split(`.`),n=t[t.length-1];return document.createElement(`audio`).canPlayType(`audio/`+n)!==``}static loaded(){return Tv(this,void 0,void 0,function*(){for(yield Promise.resolve();e.downloads.length;)yield e.downloads[0]})}};ay.baseUrl=``,ay.downloads=[];var oy=class extends ey{constructor(){super({clockSource:`offline`,context:kv(arguments[0])?arguments[0]:bv(arguments[0],arguments[1]*arguments[2],arguments[2]),lookAhead:0,updateInterval:kv(arguments[0])?128/arguments[0].sampleRate:128/arguments[2]}),this.name=`OfflineContext`,this._currentTime=0,this.isOffline=!0,this._duration=kv(arguments[0])?arguments[0].length/arguments[0].sampleRate:arguments[1]}now(){return this._currentTime}get currentTime(){return this._currentTime}_renderClock(e){return Tv(this,void 0,void 0,function*(){let t=0;for(;this._duration-this._currentTime>=0;){this.emit(`tick`),this._currentTime+=128/this.sampleRate,t++;let n=Math.floor(this.sampleRate/128);e&&t%n===0&&(yield new Promise(e=>setTimeout(e,1)))}})}render(){return Tv(this,arguments,void 0,function*(e=!0){return yield this.workletsAreReady(),yield this._renderClock(e),new ay(yield this._context.startRendering())})}close(){return Promise.resolve()}},sy=new ty,cy=sy;function ly(){return cy===sy&&Sv&&uy(new ey),cy}function uy(e,t=!1){t&&cy.dispose(),cy=Av(e)?new ey(e):kv(e)?new oy(e):e}if(xv&&!xv.TONE_SILENCE_LOGGING){let e=` * Tone.js v${Bu} * `;console.log(`%c${e}`,`background: #000; color: #fff`)}function dy(e){return 10**(e/20)}function fy(e){return Math.log(e)/Math.LN10*20}function py(e){return 2**(e/12)}var my=440;function hy(){return my}function gy(e){my=e}function _y(e){return Math.round(vy(e))}function vy(e){return 69+12*Math.log2(e/my)}function yy(e){return my*2**((e-69)/12)}var by=class e extends Rv{constructor(e,t,n){super(),this.defaultUnits=`s`,this._val=t,this._units=n,this.context=e,this._expressions=this._getExpressions()}_getExpressions(){return{hz:{method:e=>this._frequencyToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)hz$/i},i:{method:e=>this._ticksToUnits(parseInt(e,10)),regexp:/^(\d+)i$/i},m:{method:e=>this._beatsToUnits(parseInt(e,10)*this._getTimeSignature()),regexp:/^(\d+)m$/i},n:{method:(e,t)=>{let n=parseInt(e,10),r=t===`.`?1.5:1;return n===1?this._beatsToUnits(this._getTimeSignature())*r:this._beatsToUnits(4/n)*r},regexp:/^(\d+)n(\.?)$/i},number:{method:e=>this._expressions[this.defaultUnits].method.call(this,e),regexp:/^(\d+(?:\.\d+)?)$/},s:{method:e=>this._secondsToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)s$/},samples:{method:e=>parseInt(e,10)/this.context.sampleRate,regexp:/^(\d+)samples$/},t:{method:e=>{let t=parseInt(e,10);return this._beatsToUnits(8/(Math.floor(t)*3))},regexp:/^(\d+)t$/i},tr:{method:(e,t,n)=>{let r=0;return e&&e!==`0`&&(r+=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!==`0`&&(r+=this._beatsToUnits(parseFloat(t))),n&&n!==`0`&&(r+=this._beatsToUnits(parseFloat(n)/4)),r},regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/}}}valueOf(){if(this._val instanceof e&&this.fromType(this._val),tv(this._val))return this._noArg();if(cv(this._val)&&tv(this._units)){for(let e in this._expressions)if(this._expressions[e].regexp.test(this._val.trim())){this._units=e;break}}else if(av(this._val)){let e=0;for(let t in this._val)if(nv(this._val[t])){let n=this._val[t],r=new this.constructor(this.context,t).valueOf()*n;e+=r}return e}if(nv(this._units)){let e=this._expressions[this._units],t=this._val.toString().trim().match(e.regexp);return t?e.method.apply(this,t.slice(1)):e.method.call(this,this._val)}return cv(this._val)?parseFloat(this._val):this._val}_frequencyToUnits(e){return 1/e}_beatsToUnits(e){return 60/this._getBpm()*e}_secondsToUnits(e){return e}_ticksToUnits(e){return e*this._beatsToUnits(1)/this._getPPQ()}_noArg(){return this._now()}_getBpm(){return this.context.transport.bpm.value}_getTimeSignature(){return this.context.transport.timeSignature}_getPPQ(){return this.context.transport.PPQ}fromType(e){switch(this._units=void 0,this.defaultUnits){case`s`:this._val=e.toSeconds();break;case`i`:this._val=e.toTicks();break;case`hz`:this._val=e.toFrequency();break;case`midi`:this._val=e.toMidi()}return this}toFrequency(){return 1/this.toSeconds()}toSamples(){return this.toSeconds()*this.context.sampleRate}toMilliseconds(){return this.toSeconds()*1e3}},xy=class e extends by{constructor(){super(...arguments),this.name=`TimeClass`}_getExpressions(){return Object.assign(super._getExpressions(),{now:{method:e=>this._now()+new this.constructor(this.context,e).valueOf(),regexp:/^\+(.+)/},quantize:{method:t=>{let n=new e(this.context,t).valueOf();return this._secondsToUnits(this.context.transport.nextSubdivision(n))},regexp:/^@(.+)/}})}quantize(e,t=1){let n=new this.constructor(this.context,e).valueOf(),r=this.valueOf();return r+(Math.round(r/n)*n-r)*t}toNotation(){let t=this.toSeconds(),n=[`1m`];for(let e=1;e<9;e++){let t=2**e;n.push(t+`n.`),n.push(t+`n`),n.push(t+`t`)}n.push(`0`);let r=n[0],i=new e(this.context,n[0]).toSeconds();return n.forEach(n=>{let a=new e(this.context,n).toSeconds();Math.abs(a-t)<Math.abs(i-t)&&(r=n,i=a)}),r}toBarsBeatsSixteenths(){let e=this._beatsToUnits(1),t=this.valueOf()/e;t=parseFloat(t.toFixed(4));let n=Math.floor(t/this._getTimeSignature()),r=t%1*4;t=Math.floor(t)%this._getTimeSignature();let i=r.toString();return i.length>3&&(r=parseFloat(parseFloat(i).toFixed(3))),[n,t,r].join(`:`)}toTicks(){let e=this._beatsToUnits(1);return this.valueOf()/e*this._getPPQ()}toSeconds(){return this.valueOf()}toMidi(){return _y(this.toFrequency())}_now(){return this.context.now()}},Sy=class e extends xy{constructor(){super(...arguments),this.name=`Frequency`,this.defaultUnits=`hz`}static get A4(){return hy()}static set A4(e){gy(e)}_getExpressions(){return Object.assign({},super._getExpressions(),{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method(t){return this.defaultUnits===`midi`?t:e.mtof(t)}},note:{regexp:/^([a-g]{1}(?:b|#|##|x|bb|###|#x|x#|bbb)?)(-?[0-9]+)/i,method(t,n){let r=Cy[t.toLowerCase()]+(parseInt(n,10)+1)*12;return this.defaultUnits===`midi`?r:e.mtof(r)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method(e,t,n){let r=1;return e&&e!==`0`&&(r*=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!==`0`&&(r*=this._beatsToUnits(parseFloat(t))),n&&n!==`0`&&(r*=this._beatsToUnits(parseFloat(n)/4)),r}}})}transpose(t){return new e(this.context,this.valueOf()*py(t))}harmonize(e){return e.map(e=>this.transpose(e))}toMidi(){return _y(this.valueOf())}toNote(){let t=this.toFrequency(),n=Math.log2(t/e.A4),r=Math.round(12*n)+57,i=Math.floor(r/12);return i<0&&(r+=-12*i),wy[r%12]+i.toString()}toSeconds(){return 1/super.toSeconds()}toTicks(){let e=this._beatsToUnits(1),t=this.valueOf()/e;return Math.floor(t*this._getPPQ())}_noArg(){return 0}_frequencyToUnits(e){return e}_ticksToUnits(e){return 1/(e*60/(this._getBpm()*this._getPPQ()))}_beatsToUnits(e){return 1/super._beatsToUnits(e)}_secondsToUnits(e){return 1/e}static mtof(e){return yy(e)}static ftom(e){return _y(e)}},Cy={cbbb:-3,cbb:-2,cb:-1,c:0,"c#":1,cx:2,"c##":2,"c###":3,"cx#":3,"c#x":3,dbbb:-1,dbb:0,db:1,d:2,"d#":3,dx:4,"d##":4,"d###":5,"dx#":5,"d#x":5,ebbb:1,ebb:2,eb:3,e:4,"e#":5,ex:6,"e##":6,"e###":7,"ex#":7,"e#x":7,fbbb:2,fbb:3,fb:4,f:5,"f#":6,fx:7,"f##":7,"f###":8,"fx#":8,"f#x":8,gbbb:4,gbb:5,gb:6,g:7,"g#":8,gx:9,"g##":9,"g###":10,"gx#":10,"g#x":10,abbb:6,abb:7,ab:8,a:9,"a#":10,ax:11,"a##":11,"a###":12,"ax#":12,"a#x":12,bbbb:8,bbb:9,bb:10,b:11,"b#":12,bx:13,"b##":13,"b###":14,"bx#":14,"b#x":14},wy=[`C`,`C#`,`D`,`D#`,`E`,`F`,`F#`,`G`,`G#`,`A`,`A#`,`B`],Ty=class extends xy{constructor(){super(...arguments),this.name=`TransportTime`}_now(){return this.context.transport.seconds}},Ey=class e extends Rv{constructor(){super();let t=q(e.getDefaults(),arguments,[`context`]);this.context=this.defaultContext?this.defaultContext:t.context}static getDefaults(){return{context:ly()}}now(){return this.context.currentTime+this.context.lookAhead}immediate(){return this.context.currentTime}get sampleTime(){return 1/this.context.sampleRate}get blockTime(){return 128/this.context.sampleRate}toSeconds(e){return hv(e),new xy(this.context,e).toSeconds()}toFrequency(e){return new Sy(this.context,e).toFrequency()}toTicks(e){return new Ty(this.context,e).toTicks()}_getPartialProperties(e){let t=this.get();return Object.keys(t).forEach(n=>{tv(e[n])&&delete t[n]}),t}get(){let t=Fv(this);return Object.keys(t).forEach(n=>{if(Reflect.has(this,n)){let r=this[n];nv(r)&&nv(r.value)&&nv(r.setValueAtTime)?t[n]=r.value:r instanceof e?t[n]=r._getPartialProperties(t[n]):sv(r)||iv(r)||cv(r)||ov(r)?t[n]=r:delete t[n]}}),t}set(t){return Object.keys(t).forEach(n=>{Reflect.has(this,n)&&nv(this[n])&&(this[n]&&nv(this[n].value)&&nv(this[n].setValueAtTime)?this[n].value!==t[n]&&(this[n].value=t[n]):this[n]instanceof e?this[n].set(t[n]):this[n]=t[n])}),this}},Dy=class extends Gv{constructor(e=`stopped`){super(),this.name=`StateTimeline`,this._initial=e,this.setStateAtTime(this._initial,0)}getValueAtTime(e){let t=this.get(e);return t===null?this._initial:t.state}setStateAtTime(e,t,n){return uv(t,0),this.add(Object.assign({},n,{state:e,time:t})),this}getLastState(e,t){let n=this._search(t);for(let t=n;t>=0;t--){let n=this._timeline[t];if(n.state===e)return n}}getNextState(e,t){let n=this._search(t);if(n!==-1)for(let t=n;t<this._timeline.length;t++){let n=this._timeline[t];if(n.state===e)return n}}},Oy=class e extends Ey{constructor(){let t=q(e.getDefaults(),arguments,[`param`,`units`,`convert`]);for(super(t),this.name=`Param`,this.overridden=!1,this._minOutput=1e-7,K(nv(t.param)&&(Dv(t.param)||t.param instanceof e),`param must be an AudioParam`);!Dv(t.param);)t.param=t.param._param;this._swappable=nv(t.swappable)?t.swappable:!1,this._swappable?(this.input=this.context.createGain(),this._param=t.param,this.input.connect(this._param)):this._param=this.input=t.param,this._events=new Gv(1e3),this._initialValue=this._param.defaultValue,this.units=t.units,this.convert=t.convert,this._minValue=t.minValue,this._maxValue=t.maxValue,nv(t.value)&&t.value!==this._toType(this._initialValue)&&this.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(Ey.getDefaults(),{convert:!0,units:`number`})}get value(){let e=this.now();return this.getValueAtTime(e)}set value(e){this.cancelScheduledValues(this.now()),this.setValueAtTime(e,this.now())}get minValue(){return nv(this._minValue)?this._minValue:this.units===`time`||this.units===`frequency`||this.units===`normalRange`||this.units===`positive`||this.units===`transportTime`||this.units===`ticks`||this.units===`bpm`||this.units===`hertz`||this.units===`samples`?0:this.units===`audioRange`?-1:this.units===`decibels`?-1/0:this._param.minValue}get maxValue(){return nv(this._maxValue)?this._maxValue:this.units===`normalRange`||this.units===`audioRange`?1:this._param.maxValue}_is(e,t){return this.units===t}_assertRange(e){return nv(this.maxValue)&&nv(this.minValue)&&uv(e,this._fromType(this.minValue),this._fromType(this.maxValue)),e}_fromType(e){return this.convert&&!this.overridden?this._is(e,`time`)?this.toSeconds(e):this._is(e,`decibels`)?dy(e):this._is(e,`frequency`)?this.toFrequency(e):e:this.overridden?0:e}_toType(e){return this.convert&&this.units===`decibels`?fy(e):e}setValueAtTime(e,t){let n=this.toSeconds(t),r=this._fromType(e);return K(isFinite(r)&&isFinite(n),`Invalid argument(s) to setValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(r),this.log(this.units,`setValueAtTime`,e,n),this._events.add({time:n,type:`setValueAtTime`,value:r}),this._param.setValueAtTime(r,n),this}getValueAtTime(e){let t=Math.max(this.toSeconds(e),0),n=this._events.getAfter(t),r=this._events.get(t),i=this._initialValue;if(r===null)i=this._initialValue;else if(r.type===`setTargetAtTime`&&(n===null||n.type===`setValueAtTime`)){let e=this._events.getBefore(r.time),n;n=e===null?this._initialValue:e.value,r.type===`setTargetAtTime`&&(i=this._exponentialApproach(r.time,n,r.value,r.constant,t))}else if(n===null)i=r.value;else if(n.type===`linearRampToValueAtTime`||n.type===`exponentialRampToValueAtTime`){let e=r.value;if(r.type===`setTargetAtTime`){let t=this._events.getBefore(r.time);e=t===null?this._initialValue:t.value}i=n.type===`linearRampToValueAtTime`?this._linearInterpolate(r.time,e,n.time,n.value,t):this._exponentialInterpolate(r.time,e,n.time,n.value,t)}else i=r.value;return this._toType(i)}setRampPoint(e){e=this.toSeconds(e);let t=this.getValueAtTime(e);return this.cancelAndHoldAtTime(e),this._fromType(t)===0&&(t=this._toType(this._minOutput)),this.setValueAtTime(t,e),this}linearRampToValueAtTime(e,t){let n=this._fromType(e),r=this.toSeconds(t);return K(isFinite(n)&&isFinite(r),`Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(n),this._events.add({time:r,type:`linearRampToValueAtTime`,value:n}),this.log(this.units,`linearRampToValueAtTime`,e,r),this._param.linearRampToValueAtTime(n,r),this}exponentialRampToValueAtTime(e,t){let n=this._fromType(e);n=Uv(n,0)?this._minOutput:n,this._assertRange(n);let r=this.toSeconds(t);return K(isFinite(n)&&isFinite(r),`Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({time:r,type:`exponentialRampToValueAtTime`,value:n}),this.log(this.units,`exponentialRampToValueAtTime`,e,r),this._param.exponentialRampToValueAtTime(n,r),this}exponentialRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialRampToValueAtTime(e,n+this.toSeconds(t)),this}linearRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.linearRampToValueAtTime(e,n+this.toSeconds(t)),this}targetRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialApproachValueAtTime(e,n,t),this}exponentialApproachValueAtTime(e,t,n){t=this.toSeconds(t),n=this.toSeconds(n);let r=Math.log(n+1)/Math.log(200);return this.setTargetAtTime(e,t,r),this.cancelAndHoldAtTime(t+n*.9),this.linearRampToValueAtTime(e,t+n),this}setTargetAtTime(e,t,n){let r=this._fromType(e);K(isFinite(n)&&n>0,`timeConstant must be a number greater than 0`);let i=this.toSeconds(t);return this._assertRange(r),K(isFinite(r)&&isFinite(i),`Invalid argument(s) to setTargetAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({constant:n,time:i,type:`setTargetAtTime`,value:r}),this.log(this.units,`setTargetAtTime`,e,i,n),this._param.setTargetAtTime(r,i,n),this}setValueCurveAtTime(e,t,n,r=1){n=this.toSeconds(n),t=this.toSeconds(t);let i=this._fromType(e[0])*r;this.setValueAtTime(this._toType(i),t);let a=n/(e.length-1);for(let n=1;n<e.length;n++){let i=this._fromType(e[n])*r;this.linearRampToValueAtTime(this._toType(i),t+n*a)}return this}cancelScheduledValues(e){let t=this.toSeconds(e);return K(isFinite(t),`Invalid argument to cancelScheduledValues: ${JSON.stringify(e)}`),this._events.cancel(t),this._param.cancelScheduledValues(t),this.log(this.units,`cancelScheduledValues`,t),this}cancelAndHoldAtTime(e){let t=this.toSeconds(e),n=this._fromType(this.getValueAtTime(t));K(isFinite(t),`Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(e)}`),this.log(this.units,`cancelAndHoldAtTime`,t,`value=`+n);let r=this._events.get(t),i=this._events.getAfter(t);return r&&Uv(r.time,t)?i?(this._param.cancelScheduledValues(i.time),this._events.cancel(i.time)):(this._param.cancelAndHoldAtTime(t),this._events.cancel(t+this.sampleTime)):i&&(this._param.cancelScheduledValues(i.time),this._events.cancel(i.time),i.type===`linearRampToValueAtTime`?this.linearRampToValueAtTime(this._toType(n),t):i.type===`exponentialRampToValueAtTime`&&this.exponentialRampToValueAtTime(this._toType(n),t)),this._events.add({time:t,type:`setValueAtTime`,value:n}),this._param.setValueAtTime(n,t),this}rampTo(e,t=.1,n){return this.units===`frequency`||this.units===`bpm`||this.units===`decibels`?this.exponentialRampTo(e,t,n):this.linearRampTo(e,t,n),this}apply(e){let t=this.context.currentTime;e.setValueAtTime(this.getValueAtTime(t),t);let n=this._events.get(t);if(n&&n.type===`setTargetAtTime`){let r=this._events.getAfter(n.time),i=r?r.time:t+2,a=(i-t)/10;for(let n=t;n<i;n+=a)e.linearRampToValueAtTime(this.getValueAtTime(n),n)}return this._events.forEachAfter(this.context.currentTime,t=>{t.type===`cancelScheduledValues`?e.cancelScheduledValues(t.time):t.type===`setTargetAtTime`?e.setTargetAtTime(t.value,t.time,t.constant):e[t.type](t.value,t.time)}),this}setParam(e){K(this._swappable,`The Param must be assigned as 'swappable' in the constructor`);let t=this.input;return t.disconnect(this._param),this.apply(e),this._param=e,t.connect(this._param),this}dispose(){return super.dispose(),this._events.dispose(),this}get defaultValue(){return this._toType(this._param.defaultValue)}_exponentialApproach(e,t,n,r,i){return n+(t-n)*Math.exp(-(i-e)/r)}_linearInterpolate(e,t,n,r,i){return t+(r-t)*((i-e)/(n-e))}_exponentialInterpolate(e,t,n,r,i){return t*(r/t)**+((i-e)/(n-e))}},J=class e extends Ey{constructor(){super(...arguments),this._internalChannels=[]}get numberOfInputs(){return nv(this.input)?Dv(this.input)||this.input instanceof Oy?1:this.input.numberOfInputs:0}get numberOfOutputs(){return nv(this.output)?this.output.numberOfOutputs:0}_isAudioNode(t){return nv(t)&&(t instanceof e||Ov(t))}_getInternalNodes(){let e=this._internalChannels.slice(0);return this._isAudioNode(this.input)&&e.push(this.input),this._isAudioNode(this.output)&&this.input!==this.output&&e.push(this.output),e}_setChannelProperties(e){this._getInternalNodes().forEach(t=>{t.channelCount=e.channelCount,t.channelCountMode=e.channelCountMode,t.channelInterpretation=e.channelInterpretation})}_getChannelProperties(){let e=this._getInternalNodes();K(e.length>0,`ToneAudioNode does not have any internal nodes`);let t=e[0];return{channelCount:t.channelCount,channelCountMode:t.channelCountMode,channelInterpretation:t.channelInterpretation}}get channelCount(){return this._getChannelProperties().channelCount}set channelCount(e){let t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCount:e}))}get channelCountMode(){return this._getChannelProperties().channelCountMode}set channelCountMode(e){let t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCountMode:e}))}get channelInterpretation(){return this._getChannelProperties().channelInterpretation}set channelInterpretation(e){let t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelInterpretation:e}))}connect(e,t=0,n=0){return Ay(this,e,t,n),this}toDestination(){return this.connect(this.context.destination),this}toMaster(){return vv(`toMaster() has been renamed toDestination()`),this.toDestination()}disconnect(e,t=0,n=0){return jy(this,e,t,n),this}chain(...e){return ky(this,...e),this}fan(...e){return e.forEach(e=>this.connect(e)),this}dispose(){return super.dispose(),nv(this.input)&&(this.input instanceof e?this.input.dispose():Ov(this.input)&&this.input.disconnect()),nv(this.output)&&(this.output instanceof e?this.output.dispose():Ov(this.output)&&this.output.disconnect()),this._internalChannels=[],this}};function ky(...e){let t=e.shift();e.reduce((e,t)=>(e instanceof J?e.connect(t):Ov(e)&&Ay(e,t),t),t)}function Ay(e,t,n=0,r=0){for(K(nv(e),`Cannot connect from undefined node`),K(nv(t),`Cannot connect to undefined node`),(t instanceof J||Ov(t))&&K(t.numberOfInputs>0,`Cannot connect to node with no inputs`),K(e.numberOfOutputs>0,`Cannot connect from node with no outputs`);t instanceof J||t instanceof Oy;)nv(t.input)&&(t=t.input);for(;e instanceof J;)nv(e.output)&&(e=e.output);Dv(t)?e.connect(t,n):e.connect(t,n,r)}function jy(e,t,n=0,r=0){if(nv(t))for(;t instanceof J;)t=t.input;for(;!Ov(e);)nv(e.output)&&(e=e.output);Dv(t)?e.disconnect(t,n):Ov(t)?e.disconnect(t,n,r):e.disconnect()}var My=class e extends J{constructor(){let t=q(e.getDefaults(),arguments,[`gain`,`units`]);super(t),this.name=`Gain`,this._gainNode=this.context.createGain(),this.input=this._gainNode,this.output=this._gainNode,this.gain=new Oy({context:this.context,convert:t.convert,param:this._gainNode.gain,units:t.units,value:t.gain,minValue:t.minValue,maxValue:t.maxValue}),ny(this,`gain`)}static getDefaults(){return Object.assign(J.getDefaults(),{convert:!0,gain:1,units:`gain`})}dispose(){return super.dispose(),this._gainNode.disconnect(),this.gain.dispose(),this}},Ny=class extends J{constructor(e){super(e),this.onended=iy,this._startTime=-1,this._stopTime=-1,this._timeout=-1,this.output=new My({context:this.context,gain:0}),this._gainNode=this.output,this.getStateAtTime=function(e){let t=this.toSeconds(e);return this._startTime!==-1&&t>=this._startTime&&(this._stopTime===-1||t<=this._stopTime)?`started`:`stopped`},this._fadeIn=e.fadeIn,this._fadeOut=e.fadeOut,this._curve=e.curve,this.onended=e.onended}static getDefaults(){return Object.assign(J.getDefaults(),{curve:`linear`,fadeIn:0,fadeOut:0,onended:iy})}_startGain(e,t=1){K(this._startTime===-1,`Source cannot be started more than once`);let n=this.toSeconds(this._fadeIn);return this._startTime=e+n,this._startTime=Math.max(this._startTime,this.context.currentTime),n>0?(this._gainNode.gain.setValueAtTime(0,e),this._curve===`linear`?this._gainNode.gain.linearRampToValueAtTime(t,e+n):this._gainNode.gain.exponentialApproachValueAtTime(t,e,n)):this._gainNode.gain.setValueAtTime(t,e),this}stop(e){return this.log(`stop`,e),this._stopGain(this.toSeconds(e)),this}_stopGain(e){K(this._startTime!==-1,`'start' must be called before 'stop'`),this.cancelStop();let t=this.toSeconds(this._fadeOut);return this._stopTime=this.toSeconds(e)+t,this._stopTime=Math.max(this._stopTime,this.now()),t>0?this._curve===`linear`?this._gainNode.gain.linearRampTo(0,t,e):this._gainNode.gain.targetRampTo(0,t,e):(this._gainNode.gain.cancelAndHoldAtTime(e),this._gainNode.gain.setValueAtTime(0,e)),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(()=>{let e=this._curve===`exponential`?t*2:0;this._stopSource(this.now()+e),this._onended()},this._stopTime-this.context.currentTime),this}_onended(){if(this.onended!==iy&&(this.onended(this),this.onended=iy,!this.context.isOffline)){let e=()=>this.dispose();typeof requestIdleCallback<`u`?requestIdleCallback(e):setTimeout(e,10)}}get state(){return this.getStateAtTime(this.now())}cancelStop(){return this.log(`cancelStop`),K(this._startTime!==-1,`Source is not started`),this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1,this}dispose(){return super.dispose(),this._gainNode.dispose(),this.onended=iy,this}},Py=class e extends Ny{constructor(){let t=q(e.getDefaults(),arguments,[`offset`]);super(t),this.name=`ToneConstantSource`,this._source=this.context.createConstantSource(),Ay(this._source,this._gainNode),this.offset=new Oy({context:this.context,convert:t.convert,param:this._source.offset,units:t.units,value:t.offset,minValue:t.minValue,maxValue:t.maxValue})}static getDefaults(){return Object.assign(Ny.getDefaults(),{convert:!0,offset:1,units:`number`})}start(e){let t=this.toSeconds(e);return this.log(`start`,t),this._startGain(t),this._source.start(t),this}_stopSource(e){this._source.stop(e)}dispose(){return super.dispose(),this.state===`started`&&this.stop(),this._source.disconnect(),this.offset.dispose(),this}},Fy=class e extends J{constructor(){let t=q(e.getDefaults(),arguments,[`value`,`units`]);super(t),this.name=`Signal`,this.override=!0,this.output=this._constantSource=new Py({context:this.context,convert:t.convert,offset:t.value,units:t.units,minValue:t.minValue,maxValue:t.maxValue}),this._constantSource.start(0),this.input=this._param=this._constantSource.offset}static getDefaults(){return Object.assign(J.getDefaults(),{convert:!0,units:`number`,value:0})}connect(e,t=0,n=0){return Iy(this,e,t,n),this}dispose(){return super.dispose(),this._param.dispose(),this._constantSource.dispose(),this}setValueAtTime(e,t){return this._param.setValueAtTime(e,t),this}getValueAtTime(e){return this._param.getValueAtTime(e)}setRampPoint(e){return this._param.setRampPoint(e),this}linearRampToValueAtTime(e,t){return this._param.linearRampToValueAtTime(e,t),this}exponentialRampToValueAtTime(e,t){return this._param.exponentialRampToValueAtTime(e,t),this}exponentialRampTo(e,t,n){return this._param.exponentialRampTo(e,t,n),this}linearRampTo(e,t,n){return this._param.linearRampTo(e,t,n),this}targetRampTo(e,t,n){return this._param.targetRampTo(e,t,n),this}exponentialApproachValueAtTime(e,t,n){return this._param.exponentialApproachValueAtTime(e,t,n),this}setTargetAtTime(e,t,n){return this._param.setTargetAtTime(e,t,n),this}setValueCurveAtTime(e,t,n,r){return this._param.setValueCurveAtTime(e,t,n,r),this}cancelScheduledValues(e){return this._param.cancelScheduledValues(e),this}cancelAndHoldAtTime(e){return this._param.cancelAndHoldAtTime(e),this}rampTo(e,t,n){return this._param.rampTo(e,t,n),this}get value(){return this._param.value}set value(e){this._param.value=e}get convert(){return this._param.convert}set convert(e){this._param.convert=e}get units(){return this._param.units}get overridden(){return this._param.overridden}set overridden(e){this._param.overridden=e}get maxValue(){return this._param.maxValue}get minValue(){return this._param.minValue}apply(e){return this._param.apply(e),this}};function Iy(e,t,n,r){(t instanceof Oy||Dv(t)||t instanceof Fy&&t.override)&&(t.cancelScheduledValues(0),t.setValueAtTime(0,0),t instanceof Fy&&(t.overridden=!0)),Ay(e,t,n,r)}var Ly=class e extends Oy{constructor(){let t=q(e.getDefaults(),arguments,[`value`]);super(t),this.name=`TickParam`,this._events=new Gv(1/0),this._multiplier=1,this._multiplier=t.multiplier,this._events.cancel(0),this._events.add({ticks:0,time:0,type:`setValueAtTime`,value:this._fromType(t.value)}),this.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(Oy.getDefaults(),{multiplier:1,units:`hertz`,value:1})}setTargetAtTime(e,t,n){t=this.toSeconds(t),this.setRampPoint(t);let r=this._fromType(e),i=this._events.get(t),a=Math.round(Math.max(1/n,1));for(let e=0;e<=a;e++){let a=n*e+t,o=this._exponentialApproach(i.time,i.value,r,n,a);this.linearRampToValueAtTime(this._toType(o),a)}return this}setValueAtTime(e,t){let n=this.toSeconds(t);super.setValueAtTime(e,t);let r=this._events.get(n),i=this._events.previousEvent(r),a=this._getTicksUntilEvent(i,n);return r.ticks=Math.max(a,0),this}linearRampToValueAtTime(e,t){let n=this.toSeconds(t);super.linearRampToValueAtTime(e,t);let r=this._events.get(n),i=this._events.previousEvent(r),a=this._getTicksUntilEvent(i,n);return r.ticks=Math.max(a,0),this}exponentialRampToValueAtTime(e,t){t=this.toSeconds(t);let n=this._fromType(e),r=this._events.get(t),i=Math.round(Math.max((t-r.time)*10,1)),a=(t-r.time)/i;for(let e=0;e<=i;e++){let i=a*e+r.time,o=this._exponentialInterpolate(r.time,r.value,t,n,i);this.linearRampToValueAtTime(this._toType(o),i)}return this}_getTicksUntilEvent(e,t){if(e===null)e={ticks:0,time:0,type:`setValueAtTime`,value:0};else if(tv(e.ticks)){let t=this._events.previousEvent(e);e.ticks=this._getTicksUntilEvent(t,e.time)}let n=this._fromType(this.getValueAtTime(e.time)),r=this._fromType(this.getValueAtTime(t)),i=this._events.get(t);return i&&i.time===t&&i.type===`setValueAtTime`&&(r=this._fromType(this.getValueAtTime(t-this.sampleTime))),.5*(t-e.time)*(n+r)+e.ticks}getTicksAtTime(e){let t=this.toSeconds(e),n=this._events.get(t);return Math.max(this._getTicksUntilEvent(n,t),0)}getDurationOfTicks(e,t){let n=this.toSeconds(t),r=this.getTicksAtTime(t);return this.getTimeOfTick(r+e)-n}getTimeOfTick(e){let t=this._events.get(e,`ticks`),n=this._events.getAfter(e,`ticks`);if(t&&t.ticks===e)return t.time;if(t&&n&&n.type===`linearRampToValueAtTime`&&t.value!==n.value){let r=this._fromType(this.getValueAtTime(t.time)),i=(this._fromType(this.getValueAtTime(n.time))-r)/(n.time-t.time),a=Math.sqrt(r**2-2*i*(t.ticks-e)),o=(-r+a)/i,s=(-r-a)/i;return(o>0?o:s)+t.time}return t?t.value===0?1/0:t.time+(e-t.ticks)/t.value:e/this._initialValue}ticksToTime(e,t){return this.getDurationOfTicks(e,t)}timeToTicks(e,t){let n=this.toSeconds(t),r=this.toSeconds(e),i=this.getTicksAtTime(n);return this.getTicksAtTime(n+r)-i}_fromType(e){return this.units===`bpm`&&this.multiplier?1/(60/e/this.multiplier):super._fromType(e)}_toType(e){return this.units===`bpm`&&this.multiplier?e/this.multiplier*60:super._toType(e)}get multiplier(){return this._multiplier}set multiplier(e){let t=this.value;this._multiplier=e,this.cancelScheduledValues(0),this.setValueAtTime(t,0)}},Ry=class e extends Fy{constructor(){let t=q(e.getDefaults(),arguments,[`value`]);super(t),this.name=`TickSignal`,this.input=this._param=new Ly({context:this.context,convert:t.convert,multiplier:t.multiplier,param:this._constantSource.offset,units:t.units,value:t.value})}static getDefaults(){return Object.assign(Fy.getDefaults(),{multiplier:1,units:`hertz`,value:1})}ticksToTime(e,t){return this._param.ticksToTime(e,t)}timeToTicks(e,t){return this._param.timeToTicks(e,t)}getTimeOfTick(e){return this._param.getTimeOfTick(e)}getDurationOfTicks(e,t){return this._param.getDurationOfTicks(e,t)}getTicksAtTime(e){return this._param.getTicksAtTime(e)}get multiplier(){return this._param.multiplier}set multiplier(e){this._param.multiplier=e}dispose(){return super.dispose(),this._param.dispose(),this}},zy=class e extends Ey{constructor(){let t=q(e.getDefaults(),arguments,[`frequency`]);super(t),this.name=`TickSource`,this._state=new Dy,this._tickOffset=new Gv,this._ticksAtTime=new Gv,this._secondsAtTime=new Gv,this.frequency=new Ry({context:this.context,units:t.units,value:t.frequency}),ny(this,`frequency`),this._state.setStateAtTime(`stopped`,0),this.setTicksAtTime(0,0)}static getDefaults(){return Object.assign({frequency:1,units:`hertz`},Ey.getDefaults())}get state(){return this.getStateAtTime(this.now())}start(e,t){let n=this.toSeconds(e);return this._state.getValueAtTime(n)!==`started`&&(this._state.setStateAtTime(`started`,n),nv(t)&&this.setTicksAtTime(t,n),this._ticksAtTime.cancel(n),this._secondsAtTime.cancel(n)),this}stop(e){let t=this.toSeconds(e);if(this._state.getValueAtTime(t)===`stopped`){let e=this._state.get(t);e&&e.time>0&&(this._tickOffset.cancel(e.time),this._state.cancel(e.time))}return this._state.cancel(t),this._state.setStateAtTime(`stopped`,t),this.setTicksAtTime(0,t),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t),this}pause(e){let t=this.toSeconds(e);return this._state.getValueAtTime(t)===`started`&&(this._state.setStateAtTime(`paused`,t),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t)),this}cancel(e){return e=this.toSeconds(e),this._state.cancel(e),this._tickOffset.cancel(e),this._ticksAtTime.cancel(e),this._secondsAtTime.cancel(e),this}getTicksAtTime(e){let t=this.toSeconds(e),n=this._state.getLastState(`stopped`,t),r=this._ticksAtTime.get(t),i={state:`paused`,time:t};this._state.add(i);let a=r||n,o=r?r.ticks:0,s=null;return this._state.forEachBetween(a.time,t+this.sampleTime,e=>{let t=a.time,n=this._tickOffset.get(e.time);n&&n.time>=a.time&&(o=n.ticks,t=n.time),a.state===`started`&&e.state!==`started`&&(o+=this.frequency.getTicksAtTime(e.time)-this.frequency.getTicksAtTime(t),e.time!==i.time&&(s={state:e.state,time:e.time,ticks:o})),a=e}),this._state.remove(i),s&&this._ticksAtTime.add(s),o}get ticks(){return this.getTicksAtTime(this.now())}set ticks(e){this.setTicksAtTime(e,this.now())}get seconds(){return this.getSecondsAtTime(this.now())}set seconds(e){let t=this.now(),n=this.frequency.timeToTicks(e,t);this.setTicksAtTime(n,t)}getSecondsAtTime(e){e=this.toSeconds(e);let t=this._state.getLastState(`stopped`,e),n={state:`paused`,time:e};this._state.add(n);let r=this._secondsAtTime.get(e),i=r||t,a=r?r.seconds:0,o=null;return this._state.forEachBetween(i.time,e+this.sampleTime,e=>{let t=i.time,r=this._tickOffset.get(e.time);r&&r.time>=i.time&&(a=r.seconds,t=r.time),i.state===`started`&&e.state!==`started`&&(a+=e.time-t,e.time!==n.time&&(o={state:e.state,time:e.time,seconds:a})),i=e}),this._state.remove(n),o&&this._secondsAtTime.add(o),a}setTicksAtTime(e,t){return t=this.toSeconds(t),this._tickOffset.cancel(t),this._tickOffset.add({seconds:this.frequency.getDurationOfTicks(e,t),ticks:e,time:t}),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t),this}getStateAtTime(e){return e=this.toSeconds(e),this._state.getValueAtTime(e)}getTimeOfTick(e,t=this.now()){let n=this._tickOffset.get(t),r=this._state.get(t),i=Math.max(n.time,r.time),a=this.frequency.getTicksAtTime(i)+e-n.ticks;return this.frequency.getTimeOfTick(a)}forEachTickBetween(e,t,n){let r=this._state.get(e);this._state.forEachBetween(e,t,t=>{r&&r.state===`started`&&t.state!==`started`&&this.forEachTickBetween(Math.max(r.time,e),t.time-this.sampleTime,n),r=t});let i=null;if(r&&r.state===`started`){let a=Math.max(r.time,e),o=this.frequency.getTicksAtTime(a),s=o-this.frequency.getTicksAtTime(r.time),c=Math.ceil(s)-s;c=Uv(c,1)?0:c;let l=this.frequency.getTimeOfTick(o+c);for(;l<t;){try{n(l,Math.round(this.getTicksAtTime(l)))}catch(e){i=e;break}l+=this.frequency.getDurationOfTicks(1,l)}}if(i)throw i;return this}dispose(){return super.dispose(),this._state.dispose(),this._tickOffset.dispose(),this._ticksAtTime.dispose(),this._secondsAtTime.dispose(),this.frequency.dispose(),this}},By=class e extends Ey{constructor(){let t=q(e.getDefaults(),arguments,[`callback`,`frequency`]);super(t),this.name=`Clock`,this.callback=iy,this._lastUpdate=0,this._state=new Dy(`stopped`),this._boundLoop=this._loop.bind(this),this.callback=t.callback,this._tickSource=new zy({context:this.context,frequency:t.frequency,units:t.units}),this._lastUpdate=0,this.frequency=this._tickSource.frequency,ny(this,`frequency`),this._state.setStateAtTime(`stopped`,0),this.context.on(`tick`,this._boundLoop)}static getDefaults(){return Object.assign(Ey.getDefaults(),{callback:iy,frequency:1,units:`hertz`})}get state(){return this._state.getValueAtTime(this.now())}start(e,t){dv(this.context);let n=this.toSeconds(e);return this.log(`start`,n),this._state.getValueAtTime(n)!==`started`&&(this._state.setStateAtTime(`started`,n),this._tickSource.start(n,t),n<this._lastUpdate&&this.emit(`start`,n,t)),this}stop(e){let t=this.toSeconds(e);return this.log(`stop`,t),this._state.cancel(t),this._state.setStateAtTime(`stopped`,t),this._tickSource.stop(t),t<this._lastUpdate&&this.emit(`stop`,t),this}pause(e){let t=this.toSeconds(e);return this._state.getValueAtTime(t)===`started`&&(this._state.setStateAtTime(`paused`,t),this._tickSource.pause(t),t<this._lastUpdate&&this.emit(`pause`,t)),this}get ticks(){return Math.ceil(this.getTicksAtTime(this.now()))}set ticks(e){this._tickSource.ticks=e}get seconds(){return this._tickSource.seconds}set seconds(e){this._tickSource.seconds=e}getSecondsAtTime(e){return this._tickSource.getSecondsAtTime(e)}setTicksAtTime(e,t){return this._tickSource.setTicksAtTime(e,t),this}getTimeOfTick(e,t=this.now()){return this._tickSource.getTimeOfTick(e,t)}getTicksAtTime(e){return this._tickSource.getTicksAtTime(e)}nextTickTime(e,t){let n=this.toSeconds(t),r=this.getTicksAtTime(n);return this._tickSource.getTimeOfTick(r+e,n)}_loop(){let e=this._lastUpdate,t=this.now();this._lastUpdate=t,this.log(`loop`,e,t),e!==t&&(this._state.forEachBetween(e,t,e=>{switch(e.state){case`started`:let t=this._tickSource.getTicksAtTime(e.time);this.emit(`start`,e.time,t);break;case`stopped`:e.time!==0&&this.emit(`stop`,e.time);break;case`paused`:this.emit(`pause`,e.time)}}),this._tickSource.forEachTickBetween(e,t,(e,t)=>{this.callback(e,t)}))}getStateAtTime(e){let t=this.toSeconds(e);return this._state.getValueAtTime(t)}dispose(){return super.dispose(),this.context.off(`tick`,this._boundLoop),this._tickSource.dispose(),this._state.dispose(),this}};Qv.mixin(By);var Vy=class e extends J{constructor(){let t=q(e.getDefaults(),arguments,[`delayTime`,`maxDelay`]);super(t),this.name=`Delay`;let n=this.toSeconds(t.maxDelay);this._maxDelay=Math.max(n,this.toSeconds(t.delayTime)),this._delayNode=this.input=this.output=this.context.createDelay(n),this.delayTime=new Oy({context:this.context,param:this._delayNode.delayTime,units:`time`,value:t.delayTime,minValue:0,maxValue:this.maxDelay}),ny(this,`delayTime`)}static getDefaults(){return Object.assign(J.getDefaults(),{delayTime:0,maxDelay:1})}get maxDelay(){return this._maxDelay}dispose(){return super.dispose(),this._delayNode.disconnect(),this.delayTime.dispose(),this}},Hy=class e extends J{constructor(){let t=q(e.getDefaults(),arguments,[`volume`]);super(t),this.name=`Volume`,this.input=this.output=new My({context:this.context,gain:t.volume,units:`decibels`}),this.volume=this.output.gain,ny(this,`volume`),this._unmutedVolume=t.volume,this.mute=t.mute}static getDefaults(){return Object.assign(J.getDefaults(),{mute:!1,volume:0})}get mute(){return this.volume.value===-1/0}set mute(e){!this.mute&&e?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!e&&(this.volume.value=this._unmutedVolume)}dispose(){return super.dispose(),this.input.dispose(),this.volume.dispose(),this}},Uy=class e extends J{constructor(){let t=q(e.getDefaults(),arguments);super(t),this.name=`Destination`,this.input=new Hy({context:this.context}),this.output=new My({context:this.context}),this.volume=this.input.volume,ky(this.input,this.output,this.context.rawContext.destination),this.mute=t.mute,this._internalChannels=[this.input,this.context.rawContext.destination,this.output]}static getDefaults(){return Object.assign(J.getDefaults(),{mute:!1,volume:0})}get mute(){return this.input.mute}set mute(e){this.input.mute=e}chain(...e){return this.input.disconnect(),e.unshift(this.input),e.push(this.output),ky(...e),this}get maxChannelCount(){return this.context.rawContext.destination.maxChannelCount}dispose(){return super.dispose(),this.volume.dispose(),this}};qv(e=>{e.destination=new Uy({context:e})}),Xv(e=>{e.destination.dispose()});var Wy=class extends J{constructor(){super(...arguments),this.name=`Listener`,this.positionX=new Oy({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new Oy({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new Oy({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new Oy({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new Oy({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new Oy({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new Oy({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new Oy({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new Oy({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(J.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}};qv(e=>{e.listener=new Wy({context:e})}),Xv(e=>{e.listener.dispose()});var Gy=class e extends Rv{constructor(){super(),this.name=`ToneAudioBuffers`,this._buffers=new Map,this._loadingCount=0;let t=q(e.getDefaults(),arguments,[`urls`,`onload`,`baseUrl`],`urls`);this.baseUrl=t.baseUrl,Object.keys(t.urls).forEach(e=>{this._loadingCount++;let n=t.urls[e];this.add(e,n,this._bufferLoaded.bind(this,t.onload),t.onerror)})}static getDefaults(){return{baseUrl:``,onerror:iy,onload:iy,urls:{}}}has(e){return this._buffers.has(e.toString())}get(e){return K(this.has(e),`ToneAudioBuffers has no buffer named: ${e}`),this._buffers.get(e.toString())}_bufferLoaded(e){this._loadingCount--,this._loadingCount===0&&e&&e()}get loaded(){return Array.from(this._buffers).every(([e,t])=>t.loaded)}add(e,t,n=iy,r=iy){return cv(t)?(this.baseUrl&&t.trim().substring(0,11).toLowerCase()===`data:audio/`&&(this.baseUrl=``),this._buffers.set(e.toString(),new ay(this.baseUrl+t,n,r))):this._buffers.set(e.toString(),new ay(t,n,r)),this}dispose(){return super.dispose(),this._buffers.forEach(e=>e.dispose()),this._buffers.clear(),this}},Ky=class e extends Sy{constructor(){super(...arguments),this.name=`MidiClass`,this.defaultUnits=`midi`}_frequencyToUnits(e){return _y(super._frequencyToUnits(e))}_ticksToUnits(e){return _y(super._ticksToUnits(e))}_beatsToUnits(e){return _y(super._beatsToUnits(e))}_secondsToUnits(e){return _y(super._secondsToUnits(e))}toMidi(){return this.valueOf()}toFrequency(){return yy(this.toMidi())}transpose(t){return new e(this.context,this.toMidi()+t)}},qy=class extends Ty{constructor(){super(...arguments),this.name=`Ticks`,this.defaultUnits=`i`}_now(){return this.context.transport.ticks}_beatsToUnits(e){return this._getPPQ()*e}_secondsToUnits(e){return Math.floor(e/(60/this._getBpm())*this._getPPQ())}_ticksToUnits(e){return e}toTicks(){return this.valueOf()}toSeconds(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())}},Jy=class extends Ey{constructor(){super(...arguments),this.name=`Draw`,this.expiration=.25,this.anticipation=.008,this._events=new Gv,this._boundDrawLoop=this._drawLoop.bind(this),this._animationFrame=-1}schedule(e,t){return this._events.add({callback:e,time:this.toSeconds(t)}),this._events.length===1&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop)),this}cancel(e){return this._events.cancel(this.toSeconds(e)),this}_drawLoop(){let e=this.context.currentTime;this._events.forEachBefore(e+this.anticipation,t=>{e-t.time<=this.expiration&&t.callback(),this._events.remove(t)}),this._events.length>0&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop))}dispose(){return super.dispose(),this._events.dispose(),cancelAnimationFrame(this._animationFrame),this}};qv(e=>{e.draw=new Jy({context:e})}),Xv(e=>{e.draw.dispose()});var Yy=class extends Rv{constructor(){super(...arguments),this.name=`IntervalTimeline`,this._root=null,this._length=0}add(e){K(nv(e.time),`Events must have a time property`),K(nv(e.duration),`Events must have a duration parameter`),e.time=e.time.valueOf();let t=new Xy(e.time,e.time+e.duration,e);for(this._root===null?this._root=t:this._root.insert(t),this._length++;t!==null;)t.updateHeight(),t.updateMax(),this._rebalance(t),t=t.parent;return this}remove(e){if(this._root!==null){let t=[];this._root.search(e.time,t);for(let n of t)if(n.event===e){this._removeNode(n),this._length--;break}}return this}get length(){return this._length}cancel(e){return this.forEachFrom(e,e=>this.remove(e)),this}_setRoot(e){this._root=e,this._root!==null&&(this._root.parent=null)}_replaceNodeInParent(e,t){e.parent===null?this._setRoot(t):(e.isLeftChild()?e.parent.left=t:e.parent.right=t,this._rebalance(e.parent))}_removeNode(e){if(e.left===null&&e.right===null)this._replaceNodeInParent(e,null);else if(e.right===null)this._replaceNodeInParent(e,e.left);else if(e.left===null)this._replaceNodeInParent(e,e.right);else{let t=e.getBalance(),n,r=null;if(t>0){if(e.left.right===null)n=e.left,n.right=e.right,r=n;else{for(n=e.left.right;n.right!==null;)n=n.right;n.parent&&(n.parent.right=n.left,r=n.parent,n.left=e.left,n.right=e.right)}}else if(e.right.left===null)n=e.right,n.left=e.left,r=n;else{for(n=e.right.left;n.left!==null;)n=n.left;n.parent&&(n.parent.left=n.right,r=n.parent,n.left=e.left,n.right=e.right)}e.parent===null?this._setRoot(n):e.isLeftChild()?e.parent.left=n:e.parent.right=n,r&&this._rebalance(r)}e.dispose()}_rotateLeft(e){let t=e.parent,n=e.isLeftChild(),r=e.right;r&&(e.right=r.left,r.left=e),t===null?this._setRoot(r):n?t.left=r:t.right=r}_rotateRight(e){let t=e.parent,n=e.isLeftChild(),r=e.left;r&&(e.left=r.right,r.right=e),t===null?this._setRoot(r):n?t.left=r:t.right=r}_rebalance(e){let t=e.getBalance();t>1&&e.left?e.left.getBalance()<0?this._rotateLeft(e.left):this._rotateRight(e):t<-1&&e.right&&(e.right.getBalance()>0?this._rotateRight(e.right):this._rotateLeft(e))}get(e){if(this._root!==null){let t=[];if(this._root.search(e,t),t.length>0){let e=t[0];for(let n=1;n<t.length;n++)t[n].low>e.low&&(e=t[n]);return e.event}}return null}forEach(e){if(this._root!==null){let t=[];this._root.traverse(e=>t.push(e)),t.forEach(t=>{t.event&&e(t.event)})}return this}forEachAtTime(e,t){if(this._root!==null){let n=[];this._root.search(e,n),n.forEach(e=>{e.event&&t(e.event)})}return this}forEachFrom(e,t){if(this._root!==null){let n=[];this._root.searchAfter(e,n),n.forEach(e=>{e.event&&t(e.event)})}return this}dispose(){return super.dispose(),this._root!==null&&this._root.traverse(e=>e.dispose()),this._root=null,this}},Xy=class{constructor(e,t,n){this._left=null,this._right=null,this.parent=null,this.height=0,this.event=n,this.low=e,this.high=t,this.max=this.high}insert(e){e.low<=this.low?this.left===null?this.left=e:this.left.insert(e):this.right===null?this.right=e:this.right.insert(e)}search(e,t){e>this.max||(this.left!==null&&this.left.search(e,t),this.low<=e&&this.high>e&&t.push(this),this.low>e||this.right!==null&&this.right.search(e,t))}searchAfter(e,t){this.low>=e&&(t.push(this),this.left!==null&&this.left.searchAfter(e,t)),this.right!==null&&this.right.searchAfter(e,t)}traverse(e){e(this),this.left!==null&&this.left.traverse(e),this.right!==null&&this.right.traverse(e)}updateHeight(){this.height=this.left!==null&&this.right!==null?Math.max(this.left.height,this.right.height)+1:this.right===null?this.left===null?0:this.left.height+1:this.right.height+1}updateMax(){this.max=this.high,this.left!==null&&(this.max=Math.max(this.max,this.left.max)),this.right!==null&&(this.max=Math.max(this.max,this.right.max))}getBalance(){let e=0;return this.left!==null&&this.right!==null?e=this.left.height-this.right.height:this.left===null?this.right!==null&&(e=-(this.right.height+1)):e=this.left.height+1,e}isLeftChild(){return this.parent!==null&&this.parent.left===this}get left(){return this._left}set left(e){this._left=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}get right(){return this._right}set right(e){this._right=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}dispose(){this.parent=null,this._left=null,this._right=null,this.event=null}},Zy=class extends Rv{constructor(e){super(),this.name=`TimelineValue`,this._timeline=new Gv({memory:10}),this._initialValue=e}set(e,t){return this._timeline.add({value:e,time:t}),this}get(e){let t=this._timeline.get(e);return t?t.value:this._initialValue}},Qy=class e extends J{constructor(){super(q(e.getDefaults(),arguments,[`context`]))}connect(e,t=0,n=0){return Iy(this,e,t,n),this}},$y=class e extends Qy{constructor(){let t=q(e.getDefaults(),arguments,[`mapping`,`length`]);super(t),this.name=`WaveShaper`,this._shaper=this.context.createWaveShaper(),this.input=this._shaper,this.output=this._shaper,sv(t.mapping)||t.mapping instanceof Float32Array?this.curve=Float32Array.from(t.mapping):rv(t.mapping)&&this.setMap(t.mapping,t.length)}static getDefaults(){return Object.assign(Fy.getDefaults(),{length:1024})}setMap(e,t=1024){let n=new Float32Array(t);for(let r=0,i=t;r<i;r++){let t=r/(i-1)*2-1;n[r]=e(t,r)}return this.curve=n,this}get curve(){return this._shaper.curve}set curve(e){this._shaper.curve=e}get oversample(){return this._shaper.oversample}set oversample(e){K([`none`,`2x`,`4x`].some(t=>t.includes(e)),`oversampling must be either 'none', '2x', or '4x'`),this._shaper.oversample=e}dispose(){return super.dispose(),this._shaper.disconnect(),this}},eb=class e extends Qy{constructor(){let t=q(e.getDefaults(),arguments,[`value`]);super(t),this.name=`Pow`,this._exponentScaler=this.input=this.output=new $y({context:this.context,mapping:this._expFunc(t.value),length:8192}),this._exponent=t.value}static getDefaults(){return Object.assign(Qy.getDefaults(),{value:1})}_expFunc(e){return t=>Math.abs(t)**+e}get value(){return this._exponent}set value(e){this._exponent=e,this._exponentScaler.setMap(this._expFunc(this._exponent))}dispose(){return super.dispose(),this._exponentScaler.dispose(),this}},tb=class e{constructor(t,n){this.id=e._eventId++,this._remainderTime=0;let r=Object.assign(e.getDefaults(),n);this.transport=t,this.callback=r.callback,this._once=r.once,this.time=Math.floor(r.time),this._remainderTime=r.time-this.time}static getDefaults(){return{callback:iy,once:!1,time:0}}get floatTime(){return this.time+this._remainderTime}invoke(e){if(this.callback){let t=this.transport.bpm.getDurationOfTicks(1,e);this.callback(e+this._remainderTime*t),this._once&&this.transport.clear(this.id)}}dispose(){return this.callback=void 0,this}};tb._eventId=0;var nb=class e extends tb{constructor(t,n){super(t,n),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this);let r=Object.assign(e.getDefaults(),n);this.duration=r.duration,this._interval=r.interval,this._nextTick=r.time,this.transport.on(`start`,this._boundRestart),this.transport.on(`loopStart`,this._boundRestart),this.transport.on(`ticks`,this._boundRestart),this.context=this.transport.context,this._restart()}static getDefaults(){return Object.assign({},tb.getDefaults(),{duration:1/0,interval:1,once:!1})}invoke(e){this._createEvents(e),super.invoke(e)}_createEvent(){return Hv(this._nextTick,this.floatTime+this.duration)?this.transport.scheduleOnce(this.invoke.bind(this),new qy(this.context,this._nextTick).toSeconds()):-1}_createEvents(e){Hv(this._nextTick+this._interval,this.floatTime+this.duration)&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new qy(this.context,this._nextTick).toSeconds()))}_restart(e){this.transport.clear(this._currentId),this.transport.clear(this._nextId),this._nextTick=this.floatTime;let t=this.transport.getTicksAtTime(e);Bv(t,this.time)&&(this._nextTick=this.floatTime+Math.ceil((t-this.floatTime)/this._interval)*this._interval),this._currentId=this._createEvent(),this._nextTick+=this._interval,this._nextId=this._createEvent()}dispose(){return super.dispose(),this.transport.clear(this._currentId),this.transport.clear(this._nextId),this.transport.off(`start`,this._boundRestart),this.transport.off(`loopStart`,this._boundRestart),this.transport.off(`ticks`,this._boundRestart),this}},rb=class e extends Ey{constructor(){let t=q(e.getDefaults(),arguments);super(t),this.name=`Transport`,this._loop=new Zy(!1),this._loopStart=0,this._loopEnd=0,this._scheduledEvents={},this._timeline=new Gv,this._repeatedEvents=new Yy,this._syncedSignals=[],this._swingAmount=0,this._ppq=t.ppq,this._clock=new By({callback:this._processTick.bind(this),context:this.context,frequency:0,units:`bpm`}),this._bindClockEvents(),this.bpm=this._clock.frequency,this._clock.frequency.multiplier=t.ppq,this.bpm.setValueAtTime(t.bpm,0),ny(this,`bpm`),this._timeSignature=t.timeSignature,this._swingTicks=t.ppq/2}static getDefaults(){return Object.assign(Ey.getDefaults(),{bpm:120,loopEnd:`4m`,loopStart:0,ppq:192,swing:0,swingSubdivision:`8n`,timeSignature:4})}_processTick(e,t){if(this._loop.get(e)&&t>=this._loopEnd&&(this.emit(`loopEnd`,e),this._clock.setTicksAtTime(this._loopStart,e),t=this._loopStart,this.emit(`loopStart`,e,this._clock.getSecondsAtTime(e)),this.emit(`loop`,e)),this._swingAmount>0&&t%this._ppq!==0&&t%(this._swingTicks*2)!=0){let n=t%(this._swingTicks*2)/(this._swingTicks*2),r=Math.sin(n*Math.PI)*this._swingAmount;e+=new qy(this.context,this._swingTicks*2/3).toSeconds()*r}mv(!0),this._timeline.forEachAtTime(t,t=>t.invoke(e)),mv(!1)}schedule(e,t){let n=new tb(this,{callback:e,time:new Ty(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}scheduleRepeat(e,t,n,r=1/0){let i=new nb(this,{callback:e,duration:new xy(this.context,r).toTicks(),interval:new xy(this.context,t).toTicks(),time:new Ty(this.context,n).toTicks()});return this._addEvent(i,this._repeatedEvents)}scheduleOnce(e,t){let n=new tb(this,{callback:e,once:!0,time:new Ty(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}clear(e){if(this._scheduledEvents.hasOwnProperty(e)){let t=this._scheduledEvents[e.toString()];t.timeline.remove(t.event),t.event.dispose(),delete this._scheduledEvents[e.toString()]}return this}_addEvent(e,t){return this._scheduledEvents[e.id.toString()]={event:e,timeline:t},t.add(e),e.id}cancel(e=0){let t=this.toTicks(e);return this._timeline.forEachFrom(t,e=>this.clear(e.id)),this._repeatedEvents.forEachFrom(t,e=>this.clear(e.id)),this}_bindClockEvents(){this._clock.on(`start`,(e,t)=>{t=new qy(this.context,t).toSeconds(),this.emit(`start`,e,t)}),this._clock.on(`stop`,e=>{this.emit(`stop`,e)}),this._clock.on(`pause`,e=>{this.emit(`pause`,e)})}get state(){return this._clock.getStateAtTime(this.now())}start(e,t){this.context.resume();let n;return nv(t)&&(n=this.toTicks(t)),this._clock.start(e,n),this}stop(e){return this._clock.stop(e),this}pause(e){return this._clock.pause(e),this}toggle(e){return e=this.toSeconds(e),this._clock.getStateAtTime(e)===`started`?this.stop(e):this.start(e),this}get timeSignature(){return this._timeSignature}set timeSignature(e){sv(e)&&(e=e[0]/e[1]*4),this._timeSignature=e}get loopStart(){return new xy(this.context,this._loopStart,`i`).toSeconds()}set loopStart(e){this._loopStart=this.toTicks(e)}get loopEnd(){return new xy(this.context,this._loopEnd,`i`).toSeconds()}set loopEnd(e){this._loopEnd=this.toTicks(e)}get loop(){return this._loop.get(this.now())}set loop(e){this._loop.set(e,this.now())}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get swing(){return this._swingAmount}set swing(e){this._swingAmount=e}get swingSubdivision(){return new qy(this.context,this._swingTicks).toNotation()}set swingSubdivision(e){this._swingTicks=this.toTicks(e)}get position(){let e=this.now(),t=this._clock.getTicksAtTime(e);return new qy(this.context,t).toBarsBeatsSixteenths()}set position(e){let t=this.toTicks(e);this.ticks=t}get seconds(){return this._clock.seconds}set seconds(e){let t=this.now(),n=this._clock.frequency.timeToTicks(e,t);this.ticks=n}get progress(){if(this.loop){let e=this.now();return(this._clock.getTicksAtTime(e)-this._loopStart)/(this._loopEnd-this._loopStart)}return 0}get ticks(){return this._clock.ticks}set ticks(e){if(this._clock.ticks!==e){let t=this.now();if(this.state===`started`){let n=this._clock.getTicksAtTime(t),r=t+this._clock.frequency.getDurationOfTicks(Math.ceil(n)-n,t);this.emit(`stop`,r),this._clock.setTicksAtTime(e,r),this.emit(`start`,r,this._clock.getSecondsAtTime(r))}else this.emit(`ticks`,t),this._clock.setTicksAtTime(e,t)}}getTicksAtTime(e){return this._clock.getTicksAtTime(e)}getSecondsAtTime(e){return this._clock.getSecondsAtTime(e)}get PPQ(){return this._clock.frequency.multiplier}set PPQ(e){this._clock.frequency.multiplier=e}nextSubdivision(e){if(e=this.toTicks(e),this.state!==`started`)return 0;{let t=this.now(),n=this.getTicksAtTime(t),r=e-n%e;return this._clock.nextTickTime(r,t)}}syncSignal(e,t){let n=this.now(),r=this.bpm,i=1/(60/r.getValueAtTime(n)/this.PPQ),a=[];if(e.units===`time`){let e=1/64/i,t=new My(e),n=new eb(-1),o=new My(e);r.chain(t,n,o),r=o,i=1/i,a=[t,n,o]}t||=e.getValueAtTime(n)===0?0:e.getValueAtTime(n)/i;let o=new My(t);return r.connect(o),o.connect(e._param),a.push(o),this._syncedSignals.push({initial:e.value,nodes:a,signal:e}),e.value=0,this}unsyncSignal(e){for(let t=this._syncedSignals.length-1;t>=0;t--){let n=this._syncedSignals[t];n.signal===e&&(n.nodes.forEach(e=>e.dispose()),n.signal.value=n.initial,this._syncedSignals.splice(t,1))}return this}dispose(){return super.dispose(),this._clock.dispose(),ry(this,`bpm`),this._timeline.dispose(),this._repeatedEvents.dispose(),this}};Qv.mixin(rb),qv(e=>{e.transport=new rb({context:e})}),Xv(e=>{e.transport.dispose()});var ib=class extends J{constructor(e){super(e),this.input=void 0,this._state=new Dy(`stopped`),this._synced=!1,this._scheduled=[],this._syncedStart=iy,this._syncedStop=iy,this._state.memory=100,this._state.increasing=!0,this._volume=this.output=new Hy({context:this.context,mute:e.mute,volume:e.volume}),this.volume=this._volume.volume,ny(this,`volume`),this.onstop=e.onstop}static getDefaults(){return Object.assign(J.getDefaults(),{mute:!1,onstop:iy,volume:0})}get state(){return this._synced?this.context.transport.state===`started`?this._state.getValueAtTime(this.context.transport.seconds):`stopped`:this._state.getValueAtTime(this.now())}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}_clampToCurrentTime(e){return this._synced?e:Math.max(e,this.context.currentTime)}start(e,t,n){let r=tv(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(r=this._clampToCurrentTime(r),!this._synced&&this._state.getValueAtTime(r)===`started`)K(Bv(r,this._state.get(r).time),`Start time must be strictly greater than previous start time`),this._state.cancel(r),this._state.setStateAtTime(`started`,r),this.log(`restart`,r),this.restart(r,t,n);else if(this.log(`start`,r),this._state.setStateAtTime(`started`,r),this._synced){let e=this._state.get(r);e&&(e.offset=this.toSeconds(Iv(t,0)),e.duration=n?this.toSeconds(n):void 0);let i=this.context.transport.schedule(e=>{this._start(e,t,n)},r);this._scheduled.push(i),this.context.transport.state===`started`&&this.context.transport.getSecondsAtTime(this.immediate())>r&&this._syncedStart(this.now(),this.context.transport.seconds)}else dv(this.context),this._start(r,t,n);return this}stop(e){let t=tv(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(t=this._clampToCurrentTime(t),this._state.getValueAtTime(t)===`started`||nv(this._state.getNextState(`started`,t))){if(this.log(`stop`,t),!this._synced)this._stop(t);else{let e=this.context.transport.schedule(this._stop.bind(this),t);this._scheduled.push(e)}this._state.cancel(t),this._state.setStateAtTime(`stopped`,t)}return this}restart(e,t,n){return e=this.toSeconds(e),this._state.getValueAtTime(e)===`started`&&(this._state.cancel(e),this._restart(e,t,n)),this}sync(){return this._synced||(this._synced=!0,this._syncedStart=(e,t)=>{if(Bv(t,0)){let n=this._state.get(t);if(n&&n.state===`started`&&n.time!==t){let r=t-this.toSeconds(n.time),i;n.duration&&(i=this.toSeconds(n.duration)-r),this._start(e,this.toSeconds(n.offset)+r,i)}}},this._syncedStop=e=>{let t=this.context.transport.getSecondsAtTime(Math.max(e-this.sampleTime,0));this._state.getValueAtTime(t)===`started`&&this._stop(e)},this.context.transport.on(`start`,this._syncedStart),this.context.transport.on(`loopStart`,this._syncedStart),this.context.transport.on(`stop`,this._syncedStop),this.context.transport.on(`pause`,this._syncedStop),this.context.transport.on(`loopEnd`,this._syncedStop)),this}unsync(){return this._synced&&(this.context.transport.off(`stop`,this._syncedStop),this.context.transport.off(`pause`,this._syncedStop),this.context.transport.off(`loopEnd`,this._syncedStop),this.context.transport.off(`start`,this._syncedStart),this.context.transport.off(`loopStart`,this._syncedStart)),this._synced=!1,this._scheduled.forEach(e=>this.context.transport.clear(e)),this._scheduled=[],this._state.cancel(0),this._stop(0),this}dispose(){return super.dispose(),this.onstop=iy,this.unsync(),this._volume.dispose(),this._state.dispose(),this}},ab=class e extends Ny{constructor(){let t=q(e.getDefaults(),arguments,[`url`,`onload`]);super(t),this.name=`ToneBufferSource`,this._source=this.context.createBufferSource(),this._internalChannels=[this._source],this._sourceStarted=!1,this._sourceStopped=!1,Ay(this._source,this._gainNode),this._source.onended=()=>this._stopSource(),this.playbackRate=new Oy({context:this.context,param:this._source.playbackRate,units:`positive`,value:t.playbackRate}),this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this._buffer=new ay(t.url,t.onload,t.onerror),this._internalChannels.push(this._source)}static getDefaults(){return Object.assign(Ny.getDefaults(),{url:new ay,loop:!1,loopEnd:0,loopStart:0,onload:iy,onerror:iy,playbackRate:1})}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e}get curve(){return this._curve}set curve(e){this._curve=e}start(e,t,n,r=1){K(this.buffer.loaded,`buffer is either not set or not loaded`);let i=this.toSeconds(e);this._startGain(i,r),t=this.loop?Iv(t,this.loopStart):Iv(t,0);let a=Math.max(this.toSeconds(t),0);if(this.loop){let e=this.toSeconds(this.loopEnd)||this.buffer.duration,t=this.toSeconds(this.loopStart),n=e-t;Vv(a,e)&&(a=(a-t)%n+t),Uv(a,this.buffer.duration)&&(a=0)}if(this._source.buffer=this.buffer.get(),this._source.loopEnd=this.toSeconds(this.loopEnd)||this.buffer.duration,Hv(a,this.buffer.duration)&&(this._sourceStarted=!0,this._source.start(i,a)),nv(n)){let e=this.toSeconds(n);e=Math.max(e,0),this.stop(i+e)}return this}_stopSource(e){!this._sourceStopped&&this._sourceStarted&&(this._sourceStopped=!0,this._source.stop(this.toSeconds(e)),this._onended())}get loopStart(){return this._source.loopStart}set loopStart(e){this._source.loopStart=this.toSeconds(e)}get loopEnd(){return this._source.loopEnd}set loopEnd(e){this._source.loopEnd=this.toSeconds(e)}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._source.loop}set loop(e){this._source.loop=e,this._sourceStarted&&this.cancelStop()}dispose(){return super.dispose(),this._source.onended=null,this._source.disconnect(),this._buffer.dispose(),this.playbackRate.dispose(),this}},ob=class e extends ib{constructor(){let t=q(e.getDefaults(),arguments,[`type`]);super(t),this.name=`Noise`,this._source=null,this._playbackRate=t.playbackRate,this.type=t.type,this._fadeIn=t.fadeIn,this._fadeOut=t.fadeOut}static getDefaults(){return Object.assign(ib.getDefaults(),{fadeIn:0,fadeOut:0,playbackRate:1,type:`white`})}get type(){return this._type}set type(e){if(K(e in ub,`Noise: invalid type: `+e),this._type!==e&&(this._type=e,this.state===`started`)){let e=this.now();this._stop(e),this._start(e)}}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e,this._source&&(this._source.playbackRate.value=e)}_start(e){let t=ub[this._type];this._source=new ab({url:t,context:this.context,fadeIn:this._fadeIn,fadeOut:this._fadeOut,loop:!0,onended:()=>this.onstop(this),playbackRate:this._playbackRate}).connect(this.output),this._source.start(this.toSeconds(e),Math.random()*(t.duration-.001))}_stop(e){this._source&&=(this._source.stop(this.toSeconds(e)),null)}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e,this._source&&(this._source.fadeIn=this._fadeIn)}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e,this._source&&(this._source.fadeOut=this._fadeOut)}_restart(e){this._stop(e),this._start(e)}dispose(){return super.dispose(),this._source&&this._source.disconnect(),this}},sb=220500,cb=2,lb={brown:null,pink:null,white:null},ub={get brown(){if(!lb.brown){let e=[];for(let t=0;t<cb;t++){let n=new Float32Array(sb);e[t]=n;let r=0;for(let e=0;e<sb;e++){let t=Math.random()*2-1;n[e]=(r+.02*t)/1.02,r=n[e],n[e]*=3.5}}lb.brown=new ay().fromArray(e)}return lb.brown},get pink(){if(!lb.pink){let e=[];for(let t=0;t<cb;t++){let n=new Float32Array(sb);e[t]=n;let r,i,a,o,s,c,l;r=i=a=o=s=c=l=0;for(let e=0;e<sb;e++){let t=Math.random()*2-1;r=.99886*r+t*.0555179,i=.99332*i+t*.0750759,a=.969*a+t*.153852,o=.8665*o+t*.3104856,s=.55*s+t*.5329522,c=-.7616*c-t*.016898,n[e]=r+i+a+o+s+c+l+t*.5362,n[e]*=.11,l=t*.115926}}lb.pink=new ay().fromArray(e)}return lb.pink},get white(){if(!lb.white){let e=[];for(let t=0;t<cb;t++){let n=new Float32Array(sb);e[t]=n;for(let e=0;e<sb;e++)n[e]=Math.random()*2-1}lb.white=new ay().fromArray(e)}return lb.white}};function db(e,t){return Tv(this,void 0,void 0,function*(){let n=t/e.context.sampleRate,r=new oy(1,n,e.context.sampleRate);return new e.constructor(Object.assign(e.get(),{frequency:2/n,detune:0,context:r})).toDestination().start(0),(yield r.render()).getChannelData(0)})}var fb=class e extends Ny{constructor(){let t=q(e.getDefaults(),arguments,[`frequency`,`type`]);super(t),this.name=`ToneOscillatorNode`,this._oscillator=this.context.createOscillator(),this._internalChannels=[this._oscillator],Ay(this._oscillator,this._gainNode),this.type=t.type,this.frequency=new Oy({context:this.context,param:this._oscillator.frequency,units:`frequency`,value:t.frequency}),this.detune=new Oy({context:this.context,param:this._oscillator.detune,units:`cents`,value:t.detune}),ny(this,[`frequency`,`detune`])}static getDefaults(){return Object.assign(Ny.getDefaults(),{detune:0,frequency:440,type:`sine`})}start(e){let t=this.toSeconds(e);return this.log(`start`,t),this._startGain(t),this._oscillator.start(t),this}_stopSource(e){this._oscillator.stop(e)}setPeriodicWave(e){return this._oscillator.setPeriodicWave(e),this}get type(){return this._oscillator.type}set type(e){this._oscillator.type=e}dispose(){return super.dispose(),this.state===`started`&&this.stop(),this._oscillator.disconnect(),this.frequency.dispose(),this.detune.dispose(),this}},pb=class e extends ib{constructor(){let t=q(e.getDefaults(),arguments,[`frequency`,`type`]);super(t),this.name=`Oscillator`,this._oscillator=null,this.frequency=new Fy({context:this.context,units:`frequency`,value:t.frequency}),ny(this,`frequency`),this.detune=new Fy({context:this.context,units:`cents`,value:t.detune}),ny(this,`detune`),this._partials=t.partials,this._partialCount=t.partialCount,this._type=t.type,t.partialCount&&t.type!==`custom`&&(this._type=this.baseType+t.partialCount.toString()),this.phase=t.phase}static getDefaults(){return Object.assign(ib.getDefaults(),{detune:0,frequency:440,partialCount:0,partials:[],phase:0,type:`sine`})}_start(e){let t=this.toSeconds(e),n=new fb({context:this.context,onended:()=>this.onstop(this)});this._oscillator=n,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.start(t)}_stop(e){let t=this.toSeconds(e);this._oscillator&&this._oscillator.stop(t)}_restart(e){let t=this.toSeconds(e);return this.log(`restart`,t),this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(t),this}syncFrequency(){return this.context.transport.syncSignal(this.frequency),this}unsyncFrequency(){return this.context.transport.unsyncSignal(this.frequency),this}_getCachedPeriodicWave(){if(this._type===`custom`)return e._periodicWaveCache.find(e=>e.phase===this._phase&&Pv(e.partials,this._partials));{let t=e._periodicWaveCache.find(e=>e.type===this._type&&e.phase===this._phase);return this._partialCount=t?t.partialCount:this._partialCount,t}}get type(){return this._type}set type(t){this._type=t;let n=[`sine`,`square`,`sawtooth`,`triangle`].indexOf(t)!==-1;if(this._phase===0&&n)this._wave=void 0,this._partialCount=0,this._oscillator!==null&&(this._oscillator.type=t);else{let n=this._getCachedPeriodicWave();if(nv(n)){let{partials:e,wave:t}=n;this._wave=t,this._partials=e,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave)}else{let[n,r]=this._getRealImaginary(t,this._phase),i=this.context.createPeriodicWave(n,r);this._wave=i,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave),e._periodicWaveCache.push({imag:r,partialCount:this._partialCount,partials:this._partials,phase:this._phase,real:n,type:this._type,wave:this._wave}),e._periodicWaveCache.length>100&&e._periodicWaveCache.shift()}}}get baseType(){return this._type.replace(this.partialCount.toString(),``)}set baseType(e){this.type=this.partialCount&&this._type!==`custom`&&e!==`custom`?e+this.partialCount:e}get partialCount(){return this._partialCount}set partialCount(e){uv(e,0);let t=this._type,n=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);if(n&&(t=n[1]),this._type!==`custom`)this.type=e===0?t:t+e.toString();else{let t=new Float32Array(e);this._partials.forEach((e,n)=>t[n]=e),this._partials=Array.from(t),this.type=this._type}}_getRealImaginary(e,t){let n=2048,r=new Float32Array(n),i=new Float32Array(n),a=1;if(e===`custom`){if(a=this._partials.length+1,this._partialCount=this._partials.length,n=a,this._partials.length===0)return[r,i]}else{let t=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(e);t?(a=parseInt(t[2],10)+1,this._partialCount=parseInt(t[2],10),e=t[1],a=Math.max(a,2),n=a):this._partialCount=0,this._partials=[]}for(let o=1;o<n;++o){let n=2/(o*Math.PI),s;switch(e){case`sine`:s=+(o<=a),this._partials[o-1]=s;break;case`square`:s=o&1?2*n:0,this._partials[o-1]=s;break;case`sawtooth`:s=n*(o&1?1:-1),this._partials[o-1]=s;break;case`triangle`:s=o&1?n*n*2*(o-1>>1&1?-1:1):0,this._partials[o-1]=s;break;case`custom`:s=this._partials[o-1];break;default:throw TypeError(`Oscillator: invalid type: `+e)}s===0?(r[o]=0,i[o]=0):(r[o]=-s*Math.sin(t*o),i[o]=s*Math.cos(t*o))}return[r,i]}_inverseFFT(e,t,n){let r=0,i=e.length;for(let a=0;a<i;a++)r+=e[a]*Math.cos(a*n)+t[a]*Math.sin(a*n);return r}getInitialValue(){let[e,t]=this._getRealImaginary(this._type,0),n=0,r=Math.PI*2;for(let i=0;i<32;i++)n=Math.max(this._inverseFFT(e,t,i/32*r),n);return Wv(-this._inverseFFT(e,t,this._phase)/n,-1,1)}get partials(){return this._partials.slice(0,this.partialCount)}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this.type=`custom`)}get phase(){return this._phase*(180/Math.PI)}set phase(e){this._phase=e*Math.PI/180,this.type=this._type}asArray(){return Tv(this,arguments,void 0,function*(e=1024){return db(this,e)})}dispose(){return super.dispose(),this._oscillator!==null&&this._oscillator.dispose(),this._wave=void 0,this.frequency.dispose(),this.detune.dispose(),this}};pb._periodicWaveCache=[];var mb=class extends Qy{constructor(){super(...arguments),this.name=`AudioToGain`,this._norm=new $y({context:this.context,mapping:e=>(e+1)/2}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}},hb=class e extends Fy{constructor(){let t=q(e.getDefaults(),arguments,[`value`]);super(t),this.name=`Multiply`,this.override=!1,this._mult=this.input=this.output=new My({context:this.context,minValue:t.minValue,maxValue:t.maxValue}),this.factor=this._param=this._mult.gain,this.factor.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(Fy.getDefaults(),{value:0})}dispose(){return super.dispose(),this._mult.dispose(),this}},gb=class e extends ib{constructor(){let t=q(e.getDefaults(),arguments,[`frequency`,`type`,`modulationType`]);super(t),this.name=`AMOscillator`,this._modulationScale=new mb({context:this.context}),this._modulationNode=new My({context:this.context}),this._carrier=new pb({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase,type:t.type}),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this._modulator=new pb({context:this.context,phase:t.phase,type:t.modulationType}),this.harmonicity=new hb({context:this.context,units:`positive`,value:t.harmonicity}),this.frequency.chain(this.harmonicity,this._modulator.frequency),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),ny(this,[`frequency`,`detune`,`harmonicity`])}static getDefaults(){return Object.assign(pb.getDefaults(),{harmonicity:1,modulationType:`square`})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){this._modulator.restart(e),this._carrier.restart(e)}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(){return Tv(this,arguments,void 0,function*(e=1024){return db(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this._modulationScale.dispose(),this}},_b=class e extends ib{constructor(){let t=q(e.getDefaults(),arguments,[`frequency`,`type`,`modulationType`]);super(t),this.name=`FMOscillator`,this._modulationNode=new My({context:this.context,gain:0}),this._carrier=new pb({context:this.context,detune:t.detune,frequency:0,onstop:()=>this.onstop(this),phase:t.phase,type:t.type}),this.detune=this._carrier.detune,this.frequency=new Fy({context:this.context,units:`frequency`,value:t.frequency}),this._modulator=new pb({context:this.context,phase:t.phase,type:t.modulationType}),this.harmonicity=new hb({context:this.context,units:`positive`,value:t.harmonicity}),this.modulationIndex=new hb({context:this.context,units:`positive`,value:t.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),ny(this,[`modulationIndex`,`frequency`,`detune`,`harmonicity`])}static getDefaults(){return Object.assign(pb.getDefaults(),{harmonicity:1,modulationIndex:2,modulationType:`square`})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){return this._modulator.restart(e),this._carrier.restart(e),this}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(){return Tv(this,arguments,void 0,function*(e=1024){return db(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this.modulationIndex.dispose(),this}},vb=class e extends ib{constructor(){let t=q(e.getDefaults(),arguments,[`frequency`,`width`]);super(t),this.name=`PulseOscillator`,this._widthGate=new My({context:this.context,gain:0}),this._thresh=new $y({context:this.context,mapping:e=>e<=0?-1:1}),this.width=new Fy({context:this.context,units:`audioRange`,value:t.width}),this._triangle=new pb({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase,type:`triangle`}),this.frequency=this._triangle.frequency,this.detune=this._triangle.detune,this._triangle.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),ny(this,[`width`,`frequency`,`detune`])}static getDefaults(){return Object.assign(ib.getDefaults(),{detune:0,frequency:440,phase:0,type:`pulse`,width:.2})}_start(e){e=this.toSeconds(e),this._triangle.start(e),this._widthGate.gain.setValueAtTime(1,e)}_stop(e){e=this.toSeconds(e),this._triangle.stop(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(0,e)}_restart(e){this._triangle.restart(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(1,e)}get phase(){return this._triangle.phase}set phase(e){this._triangle.phase=e}get type(){return`pulse`}get baseType(){return`pulse`}get partials(){return[]}get partialCount(){return 0}set carrierType(e){this._triangle.type=e}asArray(){return Tv(this,arguments,void 0,function*(e=1024){return db(this,e)})}dispose(){return super.dispose(),this._triangle.dispose(),this.width.dispose(),this._widthGate.dispose(),this._thresh.dispose(),this}},yb=class e extends ib{constructor(){let t=q(e.getDefaults(),arguments,[`frequency`,`type`,`spread`]);super(t),this.name=`FatOscillator`,this._oscillators=[],this.frequency=new Fy({context:this.context,units:`frequency`,value:t.frequency}),this.detune=new Fy({context:this.context,units:`cents`,value:t.detune}),this._spread=t.spread,this._type=t.type,this._phase=t.phase,this._partials=t.partials,this._partialCount=t.partialCount,this.count=t.count,ny(this,[`frequency`,`detune`])}static getDefaults(){return Object.assign(pb.getDefaults(),{count:3,spread:20,type:`sawtooth`})}_start(e){e=this.toSeconds(e),this._forEach(t=>t.start(e))}_stop(e){e=this.toSeconds(e),this._forEach(t=>t.stop(e))}_restart(e){this._forEach(t=>t.restart(e))}_forEach(e){for(let t=0;t<this._oscillators.length;t++)e(this._oscillators[t],t)}get type(){return this._type}set type(e){this._type=e,this._forEach(t=>t.type=e)}get spread(){return this._spread}set spread(e){if(this._spread=e,this._oscillators.length>1){let t=-e/2,n=e/(this._oscillators.length-1);this._forEach((e,r)=>e.detune.value=t+n*r)}}get count(){return this._oscillators.length}set count(e){if(uv(e,1),this._oscillators.length!==e){this._forEach(e=>e.dispose()),this._oscillators=[];for(let t=0;t<e;t++){let n=new pb({context:this.context,volume:-6-e*1.1,type:this._type,phase:this._phase+t/e*360,partialCount:this._partialCount,onstop:t===0?()=>this.onstop(this):iy});this.type===`custom`&&(n.partials=this._partials),this.frequency.connect(n.frequency),this.detune.connect(n.detune),n.detune.overridden=!1,n.connect(this.output),this._oscillators[t]=n}this.spread=this._spread,this.state===`started`&&this._forEach(e=>e.start())}}get phase(){return this._phase}set phase(e){this._phase=e,this._forEach((e,t)=>e.phase=this._phase+t/this.count*360)}get baseType(){return this._oscillators[0].baseType}set baseType(e){this._forEach(t=>t.baseType=e),this._type=this._oscillators[0].type}get partials(){return this._oscillators[0].partials}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this._type=`custom`,this._forEach(t=>t.partials=e))}get partialCount(){return this._oscillators[0].partialCount}set partialCount(e){this._partialCount=e,this._forEach(t=>t.partialCount=e),this._type=this._oscillators[0].type}asArray(){return Tv(this,arguments,void 0,function*(e=1024){return db(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this._forEach(e=>e.dispose()),this}},bb=class e extends ib{constructor(){let t=q(e.getDefaults(),arguments,[`frequency`,`modulationFrequency`]);super(t),this.name=`PWMOscillator`,this.sourceType=`pwm`,this._scale=new hb({context:this.context,value:2}),this._pulse=new vb({context:this.context,frequency:t.modulationFrequency}),this._pulse.carrierType=`sine`,this.modulationFrequency=this._pulse.frequency,this._modulator=new pb({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase}),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),ny(this,[`modulationFrequency`,`frequency`,`detune`])}static getDefaults(){return Object.assign(ib.getDefaults(),{detune:0,frequency:440,modulationFrequency:.4,phase:0,type:`pwm`})}_start(e){e=this.toSeconds(e),this._modulator.start(e),this._pulse.start(e)}_stop(e){e=this.toSeconds(e),this._modulator.stop(e),this._pulse.stop(e)}_restart(e){this._modulator.restart(e),this._pulse.restart(e)}get type(){return`pwm`}get baseType(){return`pwm`}get partials(){return[]}get partialCount(){return 0}get phase(){return this._modulator.phase}set phase(e){this._modulator.phase=e}asArray(){return Tv(this,arguments,void 0,function*(e=1024){return db(this,e)})}dispose(){return super.dispose(),this._pulse.dispose(),this._scale.dispose(),this._modulator.dispose(),this}},xb={am:gb,fat:yb,fm:_b,oscillator:pb,pulse:vb,pwm:bb},Sb=class e extends ib{constructor(){let t=q(e.getDefaults(),arguments,[`frequency`,`type`]);super(t),this.name=`OmniOscillator`,this.frequency=new Fy({context:this.context,units:`frequency`,value:t.frequency}),this.detune=new Fy({context:this.context,units:`cents`,value:t.detune}),ny(this,[`frequency`,`detune`]),this.set(t)}static getDefaults(){return Object.assign(pb.getDefaults(),_b.getDefaults(),gb.getDefaults(),yb.getDefaults(),vb.getDefaults(),bb.getDefaults())}_start(e){this._oscillator.start(e)}_stop(e){this._oscillator.stop(e)}_restart(e){return this._oscillator.restart(e),this}get type(){let e=``;return[`am`,`fm`,`fat`].some(e=>this._sourceType===e)&&(e=this._sourceType),e+this._oscillator.type}set type(e){e.substr(0,2)===`fm`?(this._createNewOscillator(`fm`),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,2)===`am`?(this._createNewOscillator(`am`),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,3)===`fat`?(this._createNewOscillator(`fat`),this._oscillator=this._oscillator,this._oscillator.type=e.substr(3)):e===`pwm`?(this._createNewOscillator(`pwm`),this._oscillator=this._oscillator):e===`pulse`?this._createNewOscillator(`pulse`):(this._createNewOscillator(`oscillator`),this._oscillator=this._oscillator,this._oscillator.type=e)}get partials(){return this._oscillator.partials}set partials(e){!this._getOscType(this._oscillator,`pulse`)&&!this._getOscType(this._oscillator,`pwm`)&&(this._oscillator.partials=e)}get partialCount(){return this._oscillator.partialCount}set partialCount(e){!this._getOscType(this._oscillator,`pulse`)&&!this._getOscType(this._oscillator,`pwm`)&&(this._oscillator.partialCount=e)}set(e){return Reflect.has(e,`type`)&&e.type&&(this.type=e.type),super.set(e),this}_createNewOscillator(e){if(e!==this._sourceType){this._sourceType=e;let t=xb[e],n=this.now();if(this._oscillator){let e=this._oscillator;e.stop(n),this.context.setTimeout(()=>e.dispose(),this.blockTime)}this._oscillator=new t({context:this.context}),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this._oscillator.onstop=()=>this.onstop(this),this.state===`started`&&this._oscillator.start(n)}}get phase(){return this._oscillator.phase}set phase(e){this._oscillator.phase=e}get sourceType(){return this._sourceType}set sourceType(e){let t=`sine`;this._oscillator.type!==`pwm`&&this._oscillator.type!==`pulse`&&(t=this._oscillator.type),e===`fm`?this.type=`fm`+t:e===`am`?this.type=`am`+t:e===`fat`?this.type=`fat`+t:e===`oscillator`?this.type=t:e===`pulse`?this.type=`pulse`:e===`pwm`&&(this.type=`pwm`)}_getOscType(e,t){return e instanceof xb[t]}get baseType(){return this._oscillator.baseType}set baseType(e){!this._getOscType(this._oscillator,`pulse`)&&!this._getOscType(this._oscillator,`pwm`)&&e!==`pulse`&&e!==`pwm`&&(this._oscillator.baseType=e)}get width(){if(this._getOscType(this._oscillator,`pulse`))return this._oscillator.width}get count(){if(this._getOscType(this._oscillator,`fat`))return this._oscillator.count}set count(e){this._getOscType(this._oscillator,`fat`)&&iv(e)&&(this._oscillator.count=e)}get spread(){if(this._getOscType(this._oscillator,`fat`))return this._oscillator.spread}set spread(e){this._getOscType(this._oscillator,`fat`)&&iv(e)&&(this._oscillator.spread=e)}get modulationType(){if(this._getOscType(this._oscillator,`fm`)||this._getOscType(this._oscillator,`am`))return this._oscillator.modulationType}set modulationType(e){(this._getOscType(this._oscillator,`fm`)||this._getOscType(this._oscillator,`am`))&&cv(e)&&(this._oscillator.modulationType=e)}get modulationIndex(){if(this._getOscType(this._oscillator,`fm`))return this._oscillator.modulationIndex}get harmonicity(){if(this._getOscType(this._oscillator,`fm`)||this._getOscType(this._oscillator,`am`))return this._oscillator.harmonicity}get modulationFrequency(){if(this._getOscType(this._oscillator,`pwm`))return this._oscillator.modulationFrequency}asArray(){return Tv(this,arguments,void 0,function*(e=1024){return db(this,e)})}dispose(){return super.dispose(),this.detune.dispose(),this.frequency.dispose(),this._oscillator.dispose(),this}},Cb=class e extends Fy{constructor(){super(q(e.getDefaults(),arguments,[`value`])),this.override=!1,this.name=`Add`,this._sum=new My({context:this.context}),this.input=this._sum,this.output=this._sum,this.addend=this._param,ky(this._constantSource,this._sum)}static getDefaults(){return Object.assign(Fy.getDefaults(),{value:0})}dispose(){return super.dispose(),this._sum.dispose(),this}},wb=class e extends Qy{constructor(){let t=q(e.getDefaults(),arguments,[`min`,`max`]);super(t),this.name=`Scale`,this._mult=this.input=new hb({context:this.context,value:t.max-t.min}),this._add=this.output=new Cb({context:this.context,value:t.min}),this._min=t.min,this._max=t.max,this.input.connect(this.output)}static getDefaults(){return Object.assign(Qy.getDefaults(),{max:1,min:0})}get min(){return this._min}set min(e){this._min=e,this._setRange()}get max(){return this._max}set max(e){this._max=e,this._setRange()}_setRange(){this._add.value=this._min,this._mult.value=this._max-this._min}dispose(){return super.dispose(),this._add.dispose(),this._mult.dispose(),this}},Tb=class e extends Qy{constructor(){super(q(e.getDefaults(),arguments)),this.name=`Zero`,this._gain=new My({context:this.context}),this.output=this._gain,this.input=void 0,Ay(this.context.getConstant(0),this._gain)}dispose(){return super.dispose(),jy(this.context.getConstant(0),this._gain),this}},Eb=class e extends J{constructor(){let t=q(e.getDefaults(),arguments,[`frequency`,`min`,`max`]);super(t),this.name=`LFO`,this._stoppedValue=0,this._units=`number`,this.convert=!0,this._fromType=Oy.prototype._fromType,this._toType=Oy.prototype._toType,this._is=Oy.prototype._is,this._clampValue=Oy.prototype._clampValue,this._oscillator=new pb(t),this.frequency=this._oscillator.frequency,this._amplitudeGain=new My({context:this.context,gain:t.amplitude,units:`normalRange`}),this.amplitude=this._amplitudeGain.gain,this._stoppedSignal=new Fy({context:this.context,units:`audioRange`,value:0}),this._zeros=new Tb({context:this.context}),this._a2g=new mb({context:this.context}),this._scaler=this.output=new wb({context:this.context,max:t.max,min:t.min}),this.units=t.units,this.min=t.min,this.max=t.max,this._oscillator.chain(this._amplitudeGain,this._a2g,this._scaler),this._zeros.connect(this._a2g),this._stoppedSignal.connect(this._a2g),ny(this,[`amplitude`,`frequency`]),this.phase=t.phase}static getDefaults(){return Object.assign(pb.getDefaults(),{amplitude:1,frequency:`4n`,max:1,min:0,type:`sine`,units:`number`})}start(e){return e=this.toSeconds(e),this._stoppedSignal.setValueAtTime(0,e),this._oscillator.start(e),this}stop(e){return e=this.toSeconds(e),this._stoppedSignal.setValueAtTime(this._stoppedValue,e),this._oscillator.stop(e),this}sync(){return this._oscillator.sync(),this._oscillator.syncFrequency(),this}unsync(){return this._oscillator.unsync(),this._oscillator.unsyncFrequency(),this}_setStoppedValue(){this._stoppedValue=this._oscillator.getInitialValue(),this._stoppedSignal.value=this._stoppedValue}get min(){return this._toType(this._scaler.min)}set min(e){e=this._fromType(e),this._scaler.min=e}get max(){return this._toType(this._scaler.max)}set max(e){e=this._fromType(e),this._scaler.max=e}get type(){return this._oscillator.type}set type(e){this._oscillator.type=e,this._setStoppedValue()}get partials(){return this._oscillator.partials}set partials(e){this._oscillator.partials=e,this._setStoppedValue()}get phase(){return this._oscillator.phase}set phase(e){this._oscillator.phase=e,this._setStoppedValue()}get units(){return this._units}set units(e){let t=this.min,n=this.max;this._units=e,this.min=t,this.max=n}get state(){return this._oscillator.state}connect(e,t,n){return(e instanceof Oy||e instanceof Fy)&&(this.convert=e.convert,this.units=e.units),Iy(this,e,t,n),this}dispose(){return super.dispose(),this._oscillator.dispose(),this._stoppedSignal.dispose(),this._zeros.dispose(),this._scaler.dispose(),this._a2g.dispose(),this._amplitudeGain.dispose(),this.amplitude.dispose(),this}};function Db(e,t=1/0){let n=new WeakMap;return function(r,i){Reflect.defineProperty(r,i,{configurable:!0,enumerable:!0,get:function(){return n.get(this)},set:function(r){uv(r,e,t),n.set(this,r)}})}}function Ob(e,t=1/0){let n=new WeakMap;return function(r,i){Reflect.defineProperty(r,i,{configurable:!0,enumerable:!0,get:function(){return n.get(this)},set:function(r){uv(this.toSeconds(r),e,t),n.set(this,r)}})}}var kb=class e extends ib{constructor(){let t=q(e.getDefaults(),arguments,[`url`,`onload`]);super(t),this.name=`Player`,this._activeSources=new Set,this._buffer=new ay({onload:this._onload.bind(this,t.onload),onerror:t.onerror,reverse:t.reverse,url:t.url}),this.autostart=t.autostart,this._loop=t.loop,this._loopStart=t.loopStart,this._loopEnd=t.loopEnd,this._playbackRate=t.playbackRate,this.fadeIn=t.fadeIn,this.fadeOut=t.fadeOut}static getDefaults(){return Object.assign(ib.getDefaults(),{autostart:!1,fadeIn:0,fadeOut:0,loop:!1,loopEnd:0,loopStart:0,onload:iy,onerror:iy,playbackRate:1,reverse:!1})}load(e){return Tv(this,void 0,void 0,function*(){return yield this._buffer.load(e),this._onload(),this})}_onload(e=iy){e(),this.autostart&&this.start()}_onSourceEnd(e){this.onstop(this),this._activeSources.delete(e),this._activeSources.size===0&&!this._synced&&this._state.getValueAtTime(this.now())===`started`&&(this._state.cancel(this.now()),this._state.setStateAtTime(`stopped`,this.now()))}start(e,t,n){return super.start(e,t,n),this}_start(e,t,n){t=this._loop?Iv(t,this._loopStart):Iv(t,0);let r=this.toSeconds(t),i=n;n=Iv(n,Math.max(this._buffer.duration-r,0));let a=this.toSeconds(n);a/=this._playbackRate,e=this.toSeconds(e);let o=new ab({url:this._buffer,context:this.context,fadeIn:this.fadeIn,fadeOut:this.fadeOut,loop:this._loop,loopEnd:this._loopEnd,loopStart:this._loopStart,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate}).connect(this.output);!this._loop&&!this._synced&&(this._state.cancel(e+a),this._state.setStateAtTime(`stopped`,e+a,{implicitEnd:!0})),this._activeSources.add(o),this._loop&&tv(i)?o.start(e,r):o.start(e,r,a-this.toSeconds(this.fadeOut))}_stop(e){let t=this.toSeconds(e);this._activeSources.forEach(e=>e.stop(t))}restart(e,t,n){return super.restart(e,t,n),this}_restart(e,t,n){var r;(r=[...this._activeSources].pop())==null||r.stop(e),this._start(e,t,n)}seek(e,t){let n=this.toSeconds(t);if(this._state.getValueAtTime(n)===`started`){let t=this.toSeconds(e);this._stop(n),this._start(n,t)}return this}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get loopStart(){return this._loopStart}set loopStart(e){this._loopStart=e,this.buffer.loaded&&uv(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopStart=e})}get loopEnd(){return this._loopEnd}set loopEnd(e){this._loopEnd=e,this.buffer.loaded&&uv(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopEnd=e})}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._loop}set loop(e){if(this._loop!==e&&(this._loop=e,this._activeSources.forEach(t=>{t.loop=e}),e)){let e=this._state.getNextState(`stopped`,this.now());e&&this._state.cancel(e.time)}}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e;let t=this.now(),n=this._state.getNextState(`stopped`,t);n&&n.implicitEnd&&(this._state.cancel(n.time),this._activeSources.forEach(e=>e.cancelStop())),this._activeSources.forEach(n=>{n.playbackRate.setValueAtTime(e,t)})}get reverse(){return this._buffer.reverse}set reverse(e){this._buffer.reverse=e}get loaded(){return this._buffer.loaded}dispose(){return super.dispose(),this._activeSources.forEach(e=>e.dispose()),this._activeSources.clear(),this._buffer.dispose(),this}};wv([Ob(0)],kb.prototype,`fadeIn`,void 0),wv([Ob(0)],kb.prototype,`fadeOut`,void 0);var Ab=class e extends J{constructor(){let t=q(e.getDefaults(),arguments,[`urls`,`onload`],`urls`);super(t),this.name=`Players`,this.input=void 0,this._players=new Map,this._volume=this.output=new Hy({context:this.context,volume:t.volume}),this.volume=this._volume.volume,ny(this,`volume`),this._buffers=new Gy({urls:t.urls,onload:t.onload,baseUrl:t.baseUrl,onerror:t.onerror}),this.mute=t.mute,this._fadeIn=t.fadeIn,this._fadeOut=t.fadeOut}static getDefaults(){return Object.assign(ib.getDefaults(),{baseUrl:``,fadeIn:0,fadeOut:0,mute:!1,onload:iy,onerror:iy,urls:{},volume:0})}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e,this._players.forEach(t=>{t.fadeIn=e})}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e,this._players.forEach(t=>{t.fadeOut=e})}get state(){return Array.from(this._players).some(([e,t])=>t.state===`started`)?`started`:`stopped`}has(e){return this._buffers.has(e)}player(e){if(K(this.has(e),`No Player with the name ${e} exists on this object`),!this._players.has(e)){let t=new kb({context:this.context,fadeIn:this._fadeIn,fadeOut:this._fadeOut,url:this._buffers.get(e)}).connect(this.output);this._players.set(e,t)}return this._players.get(e)}get loaded(){return this._buffers.loaded}add(e,t,n){return K(!this._buffers.has(e),`A buffer with that name already exists on this object`),this._buffers.add(e,t,n),this}stopAll(e){return this._players.forEach(t=>t.stop(e)),this}dispose(){return super.dispose(),this._volume.dispose(),this.volume.dispose(),this._players.forEach(e=>e.dispose()),this._buffers.dispose(),this}},jb=class extends Qy{constructor(){super(...arguments),this.name=`GainToAudio`,this._norm=new $y({context:this.context,mapping:e=>Math.abs(e)*2-1}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}},Mb=class e extends J{constructor(){let t=q(e.getDefaults(),arguments,[`attack`,`decay`,`sustain`,`release`]);super(t),this.name=`Envelope`,this._sig=new Fy({context:this.context,value:0}),this.output=this._sig,this.input=void 0,this.attack=t.attack,this.decay=t.decay,this.sustain=t.sustain,this.release=t.release,this.attackCurve=t.attackCurve,this.releaseCurve=t.releaseCurve,this.decayCurve=t.decayCurve}static getDefaults(){return Object.assign(J.getDefaults(),{attack:.01,attackCurve:`linear`,decay:.1,decayCurve:`exponential`,release:1,releaseCurve:`exponential`,sustain:.5})}get value(){return this.getValueAtTime(this.now())}_getCurve(e,t){if(cv(e))return e;{let n;for(n in Nb)if(Nb[n][t]===e)return n;return e}}_setCurve(e,t,n){if(cv(n)&&Reflect.has(Nb,n)){let r=Nb[n];av(r)?e!==`_decayCurve`&&(this[e]=r[t]):this[e]=r}else if(sv(n)&&e!==`_decayCurve`)this[e]=n;else throw Error(`Envelope: invalid curve: `+n)}get attackCurve(){return this._getCurve(this._attackCurve,`In`)}set attackCurve(e){this._setCurve(`_attackCurve`,`In`,e)}get releaseCurve(){return this._getCurve(this._releaseCurve,`Out`)}set releaseCurve(e){this._setCurve(`_releaseCurve`,`Out`,e)}get decayCurve(){return this._getCurve(this._decayCurve,`Out`)}set decayCurve(e){this._setCurve(`_decayCurve`,`Out`,e)}triggerAttack(e,t=1){this.log(`triggerAttack`,e,t),e=this.toSeconds(e);let n=this.toSeconds(this.attack),r=this.toSeconds(this.decay),i=this.getValueAtTime(e);if(i>0){let e=1/n;n=(1-i)/e}if(n<this.sampleTime)this._sig.cancelScheduledValues(e),this._sig.setValueAtTime(t,e);else if(this._attackCurve===`linear`)this._sig.linearRampTo(t,n,e);else if(this._attackCurve===`exponential`)this._sig.targetRampTo(t,n,e);else{this._sig.cancelAndHoldAtTime(e);let r=this._attackCurve;for(let e=1;e<r.length;e++)if(r[e-1]<=i&&i<=r[e]){r=this._attackCurve.slice(e),r[0]=i;break}this._sig.setValueCurveAtTime(r,e,n,t)}if(r&&this.sustain<1){let i=t*this.sustain,a=e+n;this.log(`decay`,a),this._decayCurve===`linear`?this._sig.linearRampToValueAtTime(i,r+a):this._sig.exponentialApproachValueAtTime(i,a,r)}return this}triggerRelease(e){this.log(`triggerRelease`,e),e=this.toSeconds(e);let t=this.getValueAtTime(e);if(t>0){let n=this.toSeconds(this.release);n<this.sampleTime?this._sig.setValueAtTime(0,e):this._releaseCurve===`linear`?this._sig.linearRampTo(0,n,e):this._releaseCurve===`exponential`?this._sig.targetRampTo(0,n,e):(K(sv(this._releaseCurve),`releaseCurve must be either 'linear', 'exponential' or an array`),this._sig.cancelAndHoldAtTime(e),this._sig.setValueCurveAtTime(this._releaseCurve,e,n,t))}return this}getValueAtTime(e){return this._sig.getValueAtTime(e)}triggerAttackRelease(e,t,n=1){return t=this.toSeconds(t),this.triggerAttack(t,n),this.triggerRelease(t+this.toSeconds(e)),this}cancel(e){return this._sig.cancelScheduledValues(this.toSeconds(e)),this}connect(e,t=0,n=0){return Iy(this,e,t,n),this}asArray(){return Tv(this,arguments,void 0,function*(e=1024){let t=e/this.context.sampleRate,n=new oy(1,t,this.context.sampleRate),r=this.toSeconds(this.attack)+this.toSeconds(this.decay),i=r+this.toSeconds(this.release),a=i*.1,o=i+a,s=new this.constructor(Object.assign(this.get(),{attack:t*this.toSeconds(this.attack)/o,decay:t*this.toSeconds(this.decay)/o,release:t*this.toSeconds(this.release)/o,context:n}));return s._sig.toDestination(),s.triggerAttackRelease(t*(r+a)/o,0),(yield n.render()).getChannelData(0)})}dispose(){return super.dispose(),this._sig.dispose(),this}};wv([Ob(0)],Mb.prototype,`attack`,void 0),wv([Ob(0)],Mb.prototype,`decay`,void 0),wv([Db(0,1)],Mb.prototype,`sustain`,void 0),wv([Ob(0)],Mb.prototype,`release`,void 0);var Nb=(()=>{let e,t,n=[];for(e=0;e<128;e++)n[e]=Math.sin(e/127*(Math.PI/2));let r=[];for(e=0;e<127;e++){t=e/127;let n=Math.sin(Math.PI*2*t*6.4-Math.PI/2)+1;r[e]=n/10+t*.83}r[127]=1;let i=[];for(e=0;e<128;e++)i[e]=Math.ceil(e/127*5)/5;let a=[];for(e=0;e<128;e++)t=e/127,a[e]=.5*(1-Math.cos(Math.PI*t));let o=[];for(e=0;e<128;e++){t=e/127;let n=t**3*4+.2,r=Math.cos(n*Math.PI*2*t);o[e]=Math.abs(r*(1-t))}function s(e){let t=Array(e.length);for(let n=0;n<e.length;n++)t[n]=1-e[n];return t}function c(e){return e.slice(0).reverse()}return{bounce:{In:s(o),Out:o},cosine:{In:n,Out:c(n)},exponential:`exponential`,linear:`linear`,ripple:{In:r,Out:s(r)},sine:{In:a,Out:s(a)},step:{In:i,Out:s(i)}}})(),Pb=class e extends J{constructor(){let t=q(e.getDefaults(),arguments);super(t),this._scheduledEvents=[],this._synced=!1,this._original_triggerAttack=this.triggerAttack,this._original_triggerRelease=this.triggerRelease,this._syncedRelease=e=>this._original_triggerRelease(e),this._volume=this.output=new Hy({context:this.context,volume:t.volume}),this.volume=this._volume.volume,ny(this,`volume`)}static getDefaults(){return Object.assign(J.getDefaults(),{volume:0})}sync(){return this._syncState()&&(this._syncMethod(`triggerAttack`,1),this._syncMethod(`triggerRelease`,0),this.context.transport.on(`stop`,this._syncedRelease),this.context.transport.on(`pause`,this._syncedRelease),this.context.transport.on(`loopEnd`,this._syncedRelease)),this}_syncState(){let e=!1;return this._synced||(this._synced=!0,e=!0),e}_syncMethod(e,t){let n=this[`_original_`+e]=this[e];this[e]=(...e)=>{let r=e[t],i=this.context.transport.schedule(r=>{e[t]=r,n.apply(this,e)},r);this._scheduledEvents.push(i)}}unsync(){return this._scheduledEvents.forEach(e=>this.context.transport.clear(e)),this._scheduledEvents=[],this._synced&&(this._synced=!1,this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease,this.context.transport.off(`stop`,this._syncedRelease),this.context.transport.off(`pause`,this._syncedRelease),this.context.transport.off(`loopEnd`,this._syncedRelease)),this}triggerAttackRelease(e,t,n,r){let i=this.toSeconds(n),a=this.toSeconds(t);return this.triggerAttack(e,i,r),this.triggerRelease(i+a),this}dispose(){return super.dispose(),this._volume.dispose(),this.unsync(),this._scheduledEvents=[],this}},Fb=class e extends Pb{constructor(){let t=q(e.getDefaults(),arguments);super(t),this.portamento=t.portamento,this.onsilence=t.onsilence}static getDefaults(){return Object.assign(Pb.getDefaults(),{detune:0,onsilence:iy,portamento:0})}triggerAttack(e,t,n=1){this.log(`triggerAttack`,e,t,n);let r=this.toSeconds(t);return this._triggerEnvelopeAttack(r,n),this.setNote(e,r),this}triggerRelease(e){this.log(`triggerRelease`,e);let t=this.toSeconds(e);return this._triggerEnvelopeRelease(t),this}setNote(e,t){let n=this.toSeconds(t),r=e instanceof Sy?e.toFrequency():e;if(this.portamento>0&&this.getLevelAtTime(n)>.05){let e=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(r,e,n)}else this.frequency.setValueAtTime(r,n);return this}};wv([Ob(0)],Fb.prototype,`portamento`,void 0);var Ib=class e extends Mb{constructor(){super(q(e.getDefaults(),arguments,[`attack`,`decay`,`sustain`,`release`])),this.name=`AmplitudeEnvelope`,this._gainNode=new My({context:this.context,gain:0}),this.output=this._gainNode,this.input=this._gainNode,this._sig.connect(this._gainNode.gain),this.output=this._gainNode,this.input=this._gainNode}dispose(){return super.dispose(),this._gainNode.dispose(),this}},Lb=class e extends Fb{constructor(){let t=q(e.getDefaults(),arguments);super(t),this.name=`Synth`,this.oscillator=new Sb(Object.assign({context:this.context,detune:t.detune,onstop:()=>this.onsilence(this)},t.oscillator)),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new Ib(Object.assign({context:this.context},t.envelope)),this.oscillator.chain(this.envelope,this.output),ny(this,[`oscillator`,`frequency`,`detune`,`envelope`])}static getDefaults(){return Object.assign(Fb.getDefaults(),{envelope:Object.assign(Lv(Mb.getDefaults(),Object.keys(J.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.3}),oscillator:Object.assign(Lv(Sb.getDefaults(),[...Object.keys(ib.getDefaults()),`frequency`,`detune`]),{type:`triangle`})})}_triggerEnvelopeAttack(e,t){if(this.envelope.triggerAttack(e,t),this.oscillator.start(e),this.envelope.sustain===0){let t=this.toSeconds(this.envelope.attack),n=this.toSeconds(this.envelope.decay);this.oscillator.stop(e+t+n)}}_triggerEnvelopeRelease(e){this.envelope.triggerRelease(e),this.oscillator.stop(e+this.toSeconds(this.envelope.release))}getLevelAtTime(e){return e=this.toSeconds(e),this.envelope.getValueAtTime(e)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this}},Rb=class e extends Fb{constructor(){let t=q(e.getDefaults(),arguments);super(t),this.name=`ModulationSynth`,this._carrier=new Lb({context:this.context,oscillator:t.oscillator,envelope:t.envelope,onsilence:()=>this.onsilence(this),volume:-10}),this._modulator=new Lb({context:this.context,oscillator:t.modulation,envelope:t.modulationEnvelope,volume:-10}),this.oscillator=this._carrier.oscillator,this.envelope=this._carrier.envelope,this.modulation=this._modulator.oscillator,this.modulationEnvelope=this._modulator.envelope,this.frequency=new Fy({context:this.context,units:`frequency`}),this.detune=new Fy({context:this.context,value:t.detune,units:`cents`}),this.harmonicity=new hb({context:this.context,value:t.harmonicity,minValue:0}),this._modulationNode=new My({context:this.context,gain:0}),ny(this,[`frequency`,`harmonicity`,`oscillator`,`envelope`,`modulation`,`modulationEnvelope`,`detune`])}static getDefaults(){return Object.assign(Fb.getDefaults(),{harmonicity:3,oscillator:Object.assign(Lv(Sb.getDefaults(),[...Object.keys(ib.getDefaults()),`frequency`,`detune`]),{type:`sine`}),envelope:Object.assign(Lv(Mb.getDefaults(),Object.keys(J.getDefaults())),{attack:.01,decay:.01,sustain:1,release:.5}),modulation:Object.assign(Lv(Sb.getDefaults(),[...Object.keys(ib.getDefaults()),`frequency`,`detune`]),{type:`square`}),modulationEnvelope:Object.assign(Lv(Mb.getDefaults(),Object.keys(J.getDefaults())),{attack:.5,decay:0,sustain:1,release:.5})})}_triggerEnvelopeAttack(e,t){this._carrier._triggerEnvelopeAttack(e,t),this._modulator._triggerEnvelopeAttack(e,t)}_triggerEnvelopeRelease(e){return this._carrier._triggerEnvelopeRelease(e),this._modulator._triggerEnvelopeRelease(e),this}getLevelAtTime(e){return e=this.toSeconds(e),this.envelope.getValueAtTime(e)}dispose(){return super.dispose(),this._carrier.dispose(),this._modulator.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._modulationNode.dispose(),this}},zb=class e extends J{constructor(){let t=q(e.getDefaults(),arguments,[`frequency`,`type`]);super(t),this.name=`BiquadFilter`,this._filter=this.context.createBiquadFilter(),this.input=this.output=this._filter,this.Q=new Oy({context:this.context,units:`number`,value:t.Q,param:this._filter.Q}),this.frequency=new Oy({context:this.context,units:`frequency`,value:t.frequency,param:this._filter.frequency}),this.detune=new Oy({context:this.context,units:`cents`,value:t.detune,param:this._filter.detune}),this.gain=new Oy({context:this.context,units:`decibels`,convert:!1,value:t.gain,param:this._filter.gain}),this.type=t.type}static getDefaults(){return Object.assign(J.getDefaults(),{Q:1,type:`lowpass`,frequency:350,detune:0,gain:0})}get type(){return this._filter.type}set type(e){K([`lowpass`,`highpass`,`bandpass`,`lowshelf`,`highshelf`,`notch`,`allpass`,`peaking`].indexOf(e)!==-1,`Invalid filter type: ${e}`),this._filter.type=e}getFrequencyResponse(e=128){let t=new Float32Array(e);for(let n=0;n<e;n++){let r=(n/e)**2*19980+20;t[n]=r}let n=new Float32Array(e),r=new Float32Array(e),i=this.context.createBiquadFilter();return i.type=this.type,i.Q.value=this.Q.value,i.frequency.value=this.frequency.value,i.gain.value=this.gain.value,i.getFrequencyResponse(t,n,r),n}dispose(){return super.dispose(),this._filter.disconnect(),this.Q.dispose(),this.frequency.dispose(),this.gain.dispose(),this.detune.dispose(),this}},Bb=class e extends J{constructor(){let t=q(e.getDefaults(),arguments,[`frequency`,`type`,`rolloff`]);super(t),this.name=`Filter`,this.input=new My({context:this.context}),this.output=new My({context:this.context}),this._filters=[],this._filters=[],this.Q=new Fy({context:this.context,units:`positive`,value:t.Q}),this.frequency=new Fy({context:this.context,units:`frequency`,value:t.frequency}),this.detune=new Fy({context:this.context,units:`cents`,value:t.detune}),this.gain=new Fy({context:this.context,units:`decibels`,convert:!1,value:t.gain}),this._type=t.type,this.rolloff=t.rolloff,ny(this,[`detune`,`frequency`,`gain`,`Q`])}static getDefaults(){return Object.assign(J.getDefaults(),{Q:1,detune:0,frequency:350,gain:0,rolloff:-12,type:`lowpass`})}get type(){return this._type}set type(e){K([`lowpass`,`highpass`,`bandpass`,`lowshelf`,`highshelf`,`notch`,`allpass`,`peaking`].indexOf(e)!==-1,`Invalid filter type: ${e}`),this._type=e,this._filters.forEach(t=>t.type=e)}get rolloff(){return this._rolloff}set rolloff(e){let t=iv(e)?e:parseInt(e,10),n=[-12,-24,-48,-96],r=n.indexOf(t);K(r!==-1,`rolloff can only be ${n.join(`, `)}`),r+=1,this._rolloff=t,this.input.disconnect(),this._filters.forEach(e=>e.disconnect()),this._filters=Array(r);for(let e=0;e<r;e++){let t=new zb({context:this.context});t.type=this._type,this.frequency.connect(t.frequency),this.detune.connect(t.detune),this.Q.connect(t.Q),this.gain.connect(t.gain),this._filters[e]=t}this._internalChannels=this._filters,ky(this.input,...this._internalChannels,this.output)}getFrequencyResponse(e=128){let t=new zb({context:this.context,frequency:this.frequency.value,gain:this.gain.value,Q:this.Q.value,type:this._type,detune:this.detune.value}),n=new Float32Array(e).map(()=>1);return this._filters.forEach(()=>{t.getFrequencyResponse(e).forEach((e,t)=>n[t]*=e)}),t.dispose(),n}dispose(){return super.dispose(),this._filters.forEach(e=>{e.dispose()}),ry(this,[`detune`,`frequency`,`gain`,`Q`]),this.frequency.dispose(),this.Q.dispose(),this.detune.dispose(),this.gain.dispose(),this}},Vb=class e extends Mb{constructor(){let t=q(e.getDefaults(),arguments,[`attack`,`decay`,`sustain`,`release`]);super(t),this.name=`FrequencyEnvelope`,this._octaves=t.octaves,this._baseFrequency=this.toFrequency(t.baseFrequency),this._exponent=this.input=new eb({context:this.context,value:t.exponent}),this._scale=this.output=new wb({context:this.context,min:this._baseFrequency,max:this._baseFrequency*2**this._octaves}),this._sig.chain(this._exponent,this._scale)}static getDefaults(){return Object.assign(Mb.getDefaults(),{baseFrequency:200,exponent:1,octaves:4})}get baseFrequency(){return this._baseFrequency}set baseFrequency(e){let t=this.toFrequency(e);uv(t,0),this._baseFrequency=t,this._scale.min=this._baseFrequency,this.octaves=this._octaves}get octaves(){return this._octaves}set octaves(e){this._octaves=e,this._scale.max=this._baseFrequency*2**e}get exponent(){return this._exponent.value}set exponent(e){this._exponent.value=e}dispose(){return super.dispose(),this._exponent.dispose(),this._scale.dispose(),this}},Hb=class e extends Fb{constructor(){let t=q(e.getDefaults(),arguments);super(t),this.name=`MonoSynth`,this.oscillator=new Sb(Object.assign(t.oscillator,{context:this.context,detune:t.detune,onstop:()=>this.onsilence(this)})),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.filter=new Bb(Object.assign(t.filter,{context:this.context})),this.filterEnvelope=new Vb(Object.assign(t.filterEnvelope,{context:this.context})),this.envelope=new Ib(Object.assign(t.envelope,{context:this.context})),this.oscillator.chain(this.filter,this.envelope,this.output),this.filterEnvelope.connect(this.filter.frequency),ny(this,[`oscillator`,`frequency`,`detune`,`filter`,`filterEnvelope`,`envelope`])}static getDefaults(){return Object.assign(Fb.getDefaults(),{envelope:Object.assign(Lv(Mb.getDefaults(),Object.keys(J.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.9}),filter:Object.assign(Lv(Bb.getDefaults(),Object.keys(J.getDefaults())),{Q:1,rolloff:-12,type:`lowpass`}),filterEnvelope:Object.assign(Lv(Vb.getDefaults(),Object.keys(J.getDefaults())),{attack:.6,baseFrequency:200,decay:.2,exponent:2,octaves:3,release:2,sustain:.5}),oscillator:Object.assign(Lv(Sb.getDefaults(),Object.keys(ib.getDefaults())),{type:`sawtooth`})})}_triggerEnvelopeAttack(e,t=1){if(this.envelope.triggerAttack(e,t),this.filterEnvelope.triggerAttack(e),this.oscillator.start(e),this.envelope.sustain===0){let t=this.toSeconds(this.envelope.attack),n=this.toSeconds(this.envelope.decay);this.oscillator.stop(e+t+n)}}_triggerEnvelopeRelease(e){this.envelope.triggerRelease(e),this.filterEnvelope.triggerRelease(e),this.oscillator.stop(e+this.toSeconds(this.envelope.release))}getLevelAtTime(e){return e=this.toSeconds(e),this.envelope.getValueAtTime(e)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this.filterEnvelope.dispose(),this.filter.dispose(),this}},Ub=class e extends Rb{constructor(){let t=q(e.getDefaults(),arguments);super(t),this.name=`FMSynth`,this.modulationIndex=new hb({context:this.context,value:t.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this.detune.fan(this._carrier.detune,this._modulator.detune),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output)}static getDefaults(){return Object.assign(Rb.getDefaults(),{modulationIndex:10})}dispose(){return super.dispose(),this.modulationIndex.dispose(),this}},Wb=[1,1.483,1.932,2.546,2.63,3.897],Gb=class e extends Fb{constructor(){let t=q(e.getDefaults(),arguments);super(t),this.name=`MetalSynth`,this._oscillators=[],this._freqMultipliers=[],this.detune=new Fy({context:this.context,units:`cents`,value:t.detune}),this.frequency=new Fy({context:this.context,units:`frequency`}),this._amplitude=new My({context:this.context,gain:0}).connect(this.output),this._highpass=new Bb({Q:0,context:this.context,type:`highpass`}).connect(this._amplitude);for(let e=0;e<Wb.length;e++){let n=new _b({context:this.context,harmonicity:t.harmonicity,modulationIndex:t.modulationIndex,modulationType:`square`,onstop:e===0?()=>this.onsilence(this):iy,type:`square`});n.connect(this._highpass),this._oscillators[e]=n;let r=new hb({context:this.context,value:Wb[e]});this._freqMultipliers[e]=r,this.frequency.chain(r,n.frequency),this.detune.connect(n.detune)}this._filterFreqScaler=new wb({context:this.context,max:7e3,min:this.toFrequency(t.resonance)}),this.envelope=new Mb({attack:t.envelope.attack,attackCurve:`linear`,context:this.context,decay:t.envelope.decay,release:t.envelope.release,sustain:0}),this.envelope.chain(this._filterFreqScaler,this._highpass.frequency),this.envelope.connect(this._amplitude.gain),this._octaves=t.octaves,this.octaves=t.octaves}static getDefaults(){return Nv(Fb.getDefaults(),{envelope:Object.assign(Lv(Mb.getDefaults(),Object.keys(J.getDefaults())),{attack:.001,decay:1.4,release:.2}),harmonicity:5.1,modulationIndex:32,octaves:1.5,resonance:4e3})}_triggerEnvelopeAttack(e,t=1){return this.envelope.triggerAttack(e,t),this._oscillators.forEach(t=>t.start(e)),this.envelope.sustain===0&&this._oscillators.forEach(t=>{t.stop(e+this.toSeconds(this.envelope.attack)+this.toSeconds(this.envelope.decay))}),this}_triggerEnvelopeRelease(e){return this.envelope.triggerRelease(e),this._oscillators.forEach(t=>t.stop(e+this.toSeconds(this.envelope.release))),this}getLevelAtTime(e){return e=this.toSeconds(e),this.envelope.getValueAtTime(e)}get modulationIndex(){return this._oscillators[0].modulationIndex.value}set modulationIndex(e){this._oscillators.forEach(t=>t.modulationIndex.value=e)}get harmonicity(){return this._oscillators[0].harmonicity.value}set harmonicity(e){this._oscillators.forEach(t=>t.harmonicity.value=e)}get resonance(){return this._filterFreqScaler.min}set resonance(e){this._filterFreqScaler.min=this.toFrequency(e),this.octaves=this._octaves}get octaves(){return this._octaves}set octaves(e){this._octaves=e,this._filterFreqScaler.max=this._filterFreqScaler.min*2**e}dispose(){return super.dispose(),this._oscillators.forEach(e=>e.dispose()),this._freqMultipliers.forEach(e=>e.dispose()),this.frequency.dispose(),this.detune.dispose(),this._filterFreqScaler.dispose(),this._amplitude.dispose(),this.envelope.dispose(),this._highpass.dispose(),this}},Kb=class e extends Lb{constructor(){let t=q(e.getDefaults(),arguments);super(t),this.name=`MembraneSynth`,this.portamento=0,this.pitchDecay=t.pitchDecay,this.octaves=t.octaves,ny(this,[`oscillator`,`envelope`])}static getDefaults(){return Nv(Fb.getDefaults(),Lb.getDefaults(),{envelope:{attack:.001,attackCurve:`exponential`,decay:.4,release:1.4,sustain:.01},octaves:10,oscillator:{type:`sine`},pitchDecay:.05})}setNote(e,t){let n=this.toSeconds(t),r=this.toFrequency(e instanceof Sy?e.toFrequency():e),i=r*this.octaves;return this.oscillator.frequency.setValueAtTime(i,n),this.oscillator.frequency.exponentialRampToValueAtTime(r,n+this.toSeconds(this.pitchDecay)),this}dispose(){return super.dispose(),this}};wv([Db(0)],Kb.prototype,`octaves`,void 0),wv([Ob(0)],Kb.prototype,`pitchDecay`,void 0);var qb=class e extends Pb{constructor(){let t=q(e.getDefaults(),arguments);super(t),this.name=`NoiseSynth`,this.noise=new ob(Object.assign({context:this.context},t.noise)),this.envelope=new Ib(Object.assign({context:this.context},t.envelope)),this.noise.chain(this.envelope,this.output)}static getDefaults(){return Object.assign(Pb.getDefaults(),{envelope:Object.assign(Lv(Mb.getDefaults(),Object.keys(J.getDefaults())),{decay:.1,sustain:0}),noise:Object.assign(Lv(ob.getDefaults(),Object.keys(ib.getDefaults())),{type:`white`})})}triggerAttack(e,t=1){return e=this.toSeconds(e),this.envelope.triggerAttack(e,t),this.noise.start(e),this.envelope.sustain===0&&this.noise.stop(e+this.toSeconds(this.envelope.attack)+this.toSeconds(this.envelope.decay)),this}triggerRelease(e){return e=this.toSeconds(e),this.envelope.triggerRelease(e),this.noise.stop(e+this.toSeconds(this.envelope.release)),this}sync(){return this._syncState()&&(this._syncMethod(`triggerAttack`,0),this._syncMethod(`triggerRelease`,0)),this}triggerAttackRelease(e,t,n=1){return t=this.toSeconds(t),e=this.toSeconds(e),this.triggerAttack(t,n),this.triggerRelease(t+e),this}dispose(){return super.dispose(),this.noise.dispose(),this.envelope.dispose(),this}},Jb=new Set;function Yb(e){Jb.add(e)}function Xb(e,t){let n=`registerProcessor("${e}", ${t})`;Jb.add(n)}Yb(`
	/**
	 * The base AudioWorkletProcessor for use in Tone.js. Works with the {@link ToneAudioWorklet}. 
	 */
	class ToneAudioWorkletProcessor extends AudioWorkletProcessor {

		constructor(options) {
			
			super(options);
			/**
			 * If the processor was disposed or not. Keep alive until it's disposed.
			 */
			this.disposed = false;
		   	/** 
			 * The number of samples in the processing block
			 */
			this.blockSize = 128;
			/**
			 * the sample rate
			 */
			this.sampleRate = sampleRate;

			this.port.onmessage = (event) => {
				// when it receives a dispose 
				if (event.data === "dispose") {
					this.disposed = true;
				}
			};
		}
	}
`),Yb(`
	/**
	 * Abstract class for a single input/output processor. 
	 * has a 'generate' function which processes one sample at a time
	 */
	class SingleIOProcessor extends ToneAudioWorkletProcessor {

		constructor(options) {
			super(Object.assign(options, {
				numberOfInputs: 1,
				numberOfOutputs: 1
			}));
			/**
			 * Holds the name of the parameter and a single value of that
			 * parameter at the current sample
			 * @type { [name: string]: number }
			 */
			this.params = {}
		}

		/**
		 * Generate an output sample from the input sample and parameters
		 * @abstract
		 * @param input number
		 * @param channel number
		 * @param parameters { [name: string]: number }
		 * @returns number
		 */
		generate(){}

		/**
		 * Update the private params object with the 
		 * values of the parameters at the given index
		 * @param parameters { [name: string]: Float32Array },
		 * @param index number
		 */
		updateParams(parameters, index) {
			for (const paramName in parameters) {
				const param = parameters[paramName];
				if (param.length > 1) {
					this.params[paramName] = parameters[paramName][index];
				} else {
					this.params[paramName] = parameters[paramName][0];
				}
			}
		}

		/**
		 * Process a single frame of the audio
		 * @param inputs Float32Array[][]
		 * @param outputs Float32Array[][]
		 */
		process(inputs, outputs, parameters) {
			const input = inputs[0];
			const output = outputs[0];
			// get the parameter values
			const channelCount = Math.max(input && input.length || 0, output.length);
			for (let sample = 0; sample < this.blockSize; sample++) {
				this.updateParams(parameters, sample);
				for (let channel = 0; channel < channelCount; channel++) {
					const inputSample = input && input.length ? input[channel][sample] : 0;
					output[channel][sample] = this.generate(inputSample, channel, this.params);
				}
			}
			return !this.disposed;
		}
	};
`),Yb(`
	/**
	 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
	 */
	class DelayLine {
		
		constructor(size, channels) {
			this.buffer = [];
			this.writeHead = []
			this.size = size;

			// create the empty channels
			for (let i = 0; i < channels; i++) {
				this.buffer[i] = new Float32Array(this.size);
				this.writeHead[i] = 0;
			}
		}

		/**
		 * Push a value onto the end
		 * @param channel number
		 * @param value number
		 */
		push(channel, value) {
			this.writeHead[channel] += 1;
			if (this.writeHead[channel] > this.size) {
				this.writeHead[channel] = 0;
			}
			this.buffer[channel][this.writeHead[channel]] = value;
		}

		/**
		 * Get the recorded value of the channel given the delay
		 * @param channel number
		 * @param delay number delay samples
		 */
		get(channel, delay) {
			let readHead = this.writeHead[channel] - Math.floor(delay);
			if (readHead < 0) {
				readHead += this.size;
			}
			return this.buffer[channel][readHead];
		}
	}
`),Xb(`feedback-comb-filter`,`
	class FeedbackCombFilterWorklet extends SingleIOProcessor {

		constructor(options) {
			super(options);
			this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
		}

		static get parameterDescriptors() {
			return [{
				name: "delayTime",
				defaultValue: 0.1,
				minValue: 0,
				maxValue: 1,
				automationRate: "k-rate"
			}, {
				name: "feedback",
				defaultValue: 0.5,
				minValue: 0,
				maxValue: 0.9999,
				automationRate: "k-rate"
			}];
		}

		generate(input, channel, parameters) {
			const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
			this.delayLine.push(channel, input + delayedSample * parameters.feedback);
			return delayedSample;
		}
	}
`);var Zb=class e extends Pb{constructor(){let t=q(e.getDefaults(),arguments,[`voice`,`options`]);super(t),this.name=`PolySynth`,this._availableVoices=[],this._activeVoices=[],this._voices=[],this._gcTimeout=-1,this._averageActiveVoices=0,this._syncedRelease=e=>this.releaseAll(e),K(!iv(t.voice),`DEPRECATED: The polyphony count is no longer the first argument.`);let n=t.voice.getDefaults();this.options=Object.assign(n,t.options),this.voice=t.voice,this.maxPolyphony=t.maxPolyphony,this._dummyVoice=this._getNextAvailableVoice();let r=this._voices.indexOf(this._dummyVoice);this._voices.splice(r,1),this._gcTimeout=this.context.setInterval(this._collectGarbage.bind(this),1)}static getDefaults(){return Object.assign(Pb.getDefaults(),{maxPolyphony:32,options:{},voice:Lb})}get activeVoices(){return this._activeVoices.length}_makeVoiceAvailable(e){this._availableVoices.push(e);let t=this._activeVoices.findIndex(t=>t.voice===e);this._activeVoices.splice(t,1)}_getNextAvailableVoice(){if(this._availableVoices.length)return this._availableVoices.shift();if(this._voices.length<this.maxPolyphony){let e=new this.voice(Object.assign(this.options,{context:this.context,onsilence:this._makeVoiceAvailable.bind(this)}));return K(e instanceof Fb,`Voice must extend Monophonic class`),e.connect(this.output),this._voices.push(e),e}vv(`Max polyphony exceeded. Note dropped.`)}_collectGarbage(){if(this._averageActiveVoices=Math.max(this._averageActiveVoices*.95,this.activeVoices),this._availableVoices.length&&this._voices.length>Math.ceil(this._averageActiveVoices+1)){let e=this._availableVoices.shift(),t=this._voices.indexOf(e);this._voices.splice(t,1),this.context.isOffline||e.dispose()}}_triggerAttack(e,t,n){e.forEach(e=>{let r=new Ky(this.context,e).toMidi(),i=this._getNextAvailableVoice();i&&(i.triggerAttack(e,t,n),this._activeVoices.push({midi:r,voice:i,released:!1}),this.log(`triggerAttack`,e,t))})}_triggerRelease(e,t){e.forEach(e=>{let n=new Ky(this.context,e).toMidi(),r=this._activeVoices.find(({midi:e,released:t})=>e===n&&!t);r&&(r.voice.triggerRelease(t),r.released=!0,this.log(`triggerRelease`,e,t))})}_scheduleEvent(e,t,n,r){K(!this.disposed,`Synth was already disposed`),n<=this.now()?e===`attack`?this._triggerAttack(t,n,r):this._triggerRelease(t,n):this.context.setTimeout(()=>{this.disposed||this._scheduleEvent(e,t,n,r)},n-this.now())}triggerAttack(e,t,n){Array.isArray(e)||(e=[e]);let r=this.toSeconds(t);return this._scheduleEvent(`attack`,e,r,n),this}triggerRelease(e,t){Array.isArray(e)||(e=[e]);let n=this.toSeconds(t);return this._scheduleEvent(`release`,e,n),this}triggerAttackRelease(e,t,n,r){let i=this.toSeconds(n);if(this.triggerAttack(e,i,r),sv(t)){K(sv(e),`If the duration is an array, the notes must also be an array`),e=e;for(let n=0;n<e.length;n++){let r=t[Math.min(n,t.length-1)],a=this.toSeconds(r);K(a>0,`The duration must be greater than 0`),this.triggerRelease(e[n],i+a)}}else{let n=this.toSeconds(t);K(n>0,`The duration must be greater than 0`),this.triggerRelease(e,i+n)}return this}sync(){return this._syncState()&&(this._syncMethod(`triggerAttack`,1),this._syncMethod(`triggerRelease`,1),this.context.transport.on(`stop`,this._syncedRelease),this.context.transport.on(`pause`,this._syncedRelease),this.context.transport.on(`loopEnd`,this._syncedRelease)),this}set(e){let t=Lv(e,[`onsilence`,`context`]);return this.options=Nv(this.options,t),this._voices.forEach(e=>e.set(t)),this._dummyVoice.set(t),this}get(){return this._dummyVoice.get()}releaseAll(e){let t=this.toSeconds(e);return this._activeVoices.forEach(({voice:e})=>{e.triggerRelease(t)}),this}dispose(){return super.dispose(),this._dummyVoice.dispose(),this._voices.forEach(e=>e.dispose()),this._activeVoices=[],this._availableVoices=[],this.context.clearInterval(this._gcTimeout),this}},Qb=class e extends Pb{constructor(){let t=q(e.getDefaults(),arguments,[`urls`,`onload`,`baseUrl`],`urls`);super(t),this.name=`Sampler`,this._activeSources=new Map;let n={};Object.keys(t.urls).forEach(e=>{let r=parseInt(e,10);if(K(lv(e)||iv(r)&&isFinite(r),`url key is neither a note or midi pitch: ${e}`),lv(e)){let r=new Sy(this.context,e).toMidi();n[r]=t.urls[e]}else iv(r)&&isFinite(r)&&(n[r]=t.urls[r])}),this._buffers=new Gy({urls:n,onload:t.onload,baseUrl:t.baseUrl,onerror:t.onerror}),this.attack=t.attack,this.release=t.release,this.curve=t.curve,this._buffers.loaded&&Promise.resolve().then(t.onload)}static getDefaults(){return Object.assign(Pb.getDefaults(),{attack:0,baseUrl:``,curve:`exponential`,onload:iy,onerror:iy,release:.1,urls:{}})}_findClosest(e){let t=0;for(;t<96;){if(this._buffers.has(e+t))return-t;if(this._buffers.has(e-t))return t;t++}throw Error(`No available buffers for note: ${e}`)}triggerAttack(e,t,n=1){return this.log(`triggerAttack`,e,t,n),Array.isArray(e)||(e=[e]),e.forEach(e=>{let r=vy(new Sy(this.context,e).toFrequency()),i=Math.round(r),a=r-i,o=this._findClosest(i),s=i-o,c=this._buffers.get(s),l=py(o+a),u=new ab({url:c,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:l}).connect(this.output);u.start(t,0,c.duration/l,n),sv(this._activeSources.get(i))||this._activeSources.set(i,[]),this._activeSources.get(i).push(u),u.onended=()=>{if(this._activeSources&&this._activeSources.has(i)){let e=this._activeSources.get(i),t=e.indexOf(u);t!==-1&&e.splice(t,1)}}}),this}triggerRelease(e,t){return this.log(`triggerRelease`,e,t),Array.isArray(e)||(e=[e]),e.forEach(e=>{let n=new Sy(this.context,e).toMidi();if(this._activeSources.has(n)&&this._activeSources.get(n).length){let e=this._activeSources.get(n);t=this.toSeconds(t),e.forEach(e=>{e.stop(t)}),this._activeSources.set(n,[])}}),this}releaseAll(e){let t=this.toSeconds(e);return this._activeSources.forEach(e=>{for(;e.length;)e.shift().stop(t)}),this}sync(){return this._syncState()&&(this._syncMethod(`triggerAttack`,1),this._syncMethod(`triggerRelease`,1)),this}triggerAttackRelease(e,t,n,r=1){let i=this.toSeconds(n);return this.triggerAttack(e,i,r),sv(t)?(K(sv(e),`notes must be an array when duration is array`),e.forEach((e,n)=>{let r=t[Math.min(n,t.length-1)];this.triggerRelease(e,i+this.toSeconds(r))})):this.triggerRelease(e,i+this.toSeconds(t)),this}add(e,t,n){if(K(lv(e)||isFinite(e),`note must be a pitch or midi: ${e}`),lv(e)){let r=new Sy(this.context,e).toMidi();this._buffers.add(r,t,n)}else this._buffers.add(e,t,n);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(e=>{e.forEach(e=>e.dispose())}),this._activeSources.clear(),this}};wv([Ob(0)],Qb.prototype,`attack`,void 0),wv([Ob(0)],Qb.prototype,`release`,void 0);var $b=class e extends J{constructor(){let t=q(e.getDefaults(),arguments,[`fade`]);super(t),this.name=`CrossFade`,this._panner=this.context.createStereoPanner(),this._split=this.context.createChannelSplitter(2),this._g2a=new jb({context:this.context}),this.a=new My({context:this.context,gain:0}),this.b=new My({context:this.context,gain:0}),this.output=new My({context:this.context}),this._internalChannels=[this.a,this.b],this.fade=new Fy({context:this.context,units:`normalRange`,value:t.fade}),ny(this,`fade`),this.context.getConstant(1).connect(this._panner),this._panner.connect(this._split),this._panner.channelCount=1,this._panner.channelCountMode=`explicit`,Ay(this._split,this.a.gain,0),Ay(this._split,this.b.gain,1),this.fade.chain(this._g2a,this._panner.pan),this.a.connect(this.output),this.b.connect(this.output)}static getDefaults(){return Object.assign(J.getDefaults(),{fade:.5})}dispose(){return super.dispose(),this.a.dispose(),this.b.dispose(),this.output.dispose(),this.fade.dispose(),this._g2a.dispose(),this._panner.disconnect(),this._split.disconnect(),this}},ex=class extends J{constructor(e){super(e),this.name=`Effect`,this._dryWet=new $b({context:this.context}),this.wet=this._dryWet.fade,this.effectSend=new My({context:this.context}),this.effectReturn=new My({context:this.context}),this.input=new My({context:this.context}),this.output=this._dryWet,this.input.fan(this._dryWet.a,this.effectSend),this.effectReturn.connect(this._dryWet.b),this.wet.setValueAtTime(e.wet,0),this._internalChannels=[this.effectReturn,this.effectSend],ny(this,`wet`)}static getDefaults(){return Object.assign(J.getDefaults(),{wet:1})}connectEffect(e){return this._internalChannels.push(e),this.effectSend.chain(e,this.effectReturn),this}dispose(){return super.dispose(),this._dryWet.dispose(),this.effectSend.dispose(),this.effectReturn.dispose(),this.wet.dispose(),this}},tx=class e extends J{constructor(){let t=q(e.getDefaults(),arguments,[`pan`]);super(t),this.name=`Panner`,this._panner=this.context.createStereoPanner(),this.input=this._panner,this.output=this._panner,this.pan=new Oy({context:this.context,param:this._panner.pan,value:t.pan,minValue:-1,maxValue:1}),this._panner.channelCount=t.channelCount,this._panner.channelCountMode=`explicit`,ny(this,`pan`)}static getDefaults(){return Object.assign(J.getDefaults(),{pan:0,channelCount:1})}dispose(){return super.dispose(),this._panner.disconnect(),this.pan.dispose(),this}};Xb(`bit-crusher`,`
	class BitCrusherWorklet extends SingleIOProcessor {

		static get parameterDescriptors() {
			return [{
				name: "bits",
				defaultValue: 12,
				minValue: 1,
				maxValue: 16,
				automationRate: 'k-rate'
			}];
		}

		generate(input, _channel, parameters) {
			const step = Math.pow(0.5, parameters.bits - 1);
			const val = step * Math.floor(input / step + 0.5);
			return val;
		}
	}
`);var nx=class e extends J{constructor(){let t=q(e.getDefaults(),arguments,[`channels`]);super(t),this.name=`Split`,this._splitter=this.input=this.output=this.context.createChannelSplitter(t.channels),this._internalChannels=[this._splitter]}static getDefaults(){return Object.assign(J.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._splitter.disconnect(),this}},rx=class e extends J{constructor(){let t=q(e.getDefaults(),arguments,[`channels`]);super(t),this.name=`Merge`,this._merger=this.output=this.input=this.context.createChannelMerger(t.channels)}static getDefaults(){return Object.assign(J.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._merger.disconnect(),this}},ix=class extends J{constructor(e){super(e),this.name=`StereoEffect`,this.input=new My({context:this.context}),this.input.channelCount=2,this.input.channelCountMode=`explicit`,this._dryWet=this.output=new $b({context:this.context,fade:e.wet}),this.wet=this._dryWet.fade,this._split=new nx({context:this.context,channels:2}),this._merge=new rx({context:this.context,channels:2}),this.input.connect(this._split),this.input.connect(this._dryWet.a),this._merge.connect(this._dryWet.b),ny(this,[`wet`])}connectEffectLeft(...e){this._split.connect(e[0],0,0),ky(...e),Ay(e[e.length-1],this._merge,0,0)}connectEffectRight(...e){this._split.connect(e[0],1,0),ky(...e),Ay(e[e.length-1],this._merge,0,1)}static getDefaults(){return Object.assign(J.getDefaults(),{wet:1})}dispose(){return super.dispose(),this._dryWet.dispose(),this._split.dispose(),this._merge.dispose(),this}},ax=class extends ix{constructor(e){super(e),this.feedback=new Fy({context:this.context,value:e.feedback,units:`normalRange`}),this._feedbackL=new My({context:this.context}),this._feedbackR=new My({context:this.context}),this._feedbackSplit=new nx({context:this.context,channels:2}),this._feedbackMerge=new rx({context:this.context,channels:2}),this._merge.connect(this._feedbackSplit),this._feedbackMerge.connect(this._split),this._feedbackSplit.connect(this._feedbackL,0,0),this._feedbackL.connect(this._feedbackMerge,0,0),this._feedbackSplit.connect(this._feedbackR,1,0),this._feedbackR.connect(this._feedbackMerge,0,1),this.feedback.fan(this._feedbackL.gain,this._feedbackR.gain),ny(this,[`feedback`])}static getDefaults(){return Object.assign(ix.getDefaults(),{feedback:.5})}dispose(){return super.dispose(),this.feedback.dispose(),this._feedbackL.dispose(),this._feedbackR.dispose(),this._feedbackSplit.dispose(),this._feedbackMerge.dispose(),this}},ox=class e extends ax{constructor(){let t=q(e.getDefaults(),arguments,[`frequency`,`delayTime`,`depth`]);super(t),this.name=`Chorus`,this._depth=t.depth,this._delayTime=t.delayTime/1e3,this._lfoL=new Eb({context:this.context,frequency:t.frequency,min:0,max:1}),this._lfoR=new Eb({context:this.context,frequency:t.frequency,min:0,max:1,phase:180}),this._delayNodeL=new Vy({context:this.context}),this._delayNodeR=new Vy({context:this.context}),this.frequency=this._lfoL.frequency,ny(this,[`frequency`]),this._lfoL.frequency.connect(this._lfoR.frequency),this.connectEffectLeft(this._delayNodeL),this.connectEffectRight(this._delayNodeR),this._lfoL.connect(this._delayNodeL.delayTime),this._lfoR.connect(this._delayNodeR.delayTime),this.depth=this._depth,this.type=t.type,this.spread=t.spread}static getDefaults(){return Object.assign(ax.getDefaults(),{frequency:1.5,delayTime:3.5,depth:.7,type:`sine`,spread:180,feedback:0,wet:.5})}get depth(){return this._depth}set depth(e){this._depth=e;let t=this._delayTime*e;this._lfoL.min=Math.max(this._delayTime-t,0),this._lfoL.max=this._delayTime+t,this._lfoR.min=Math.max(this._delayTime-t,0),this._lfoR.max=this._delayTime+t}get delayTime(){return this._delayTime*1e3}set delayTime(e){this._delayTime=e/1e3,this.depth=this._depth}get type(){return this._lfoL.type}set type(e){this._lfoL.type=e,this._lfoR.type=e}get spread(){return this._lfoR.phase-this._lfoL.phase}set spread(e){this._lfoL.phase=90-e/2,this._lfoR.phase=e/2+90}start(e){return this._lfoL.start(e),this._lfoR.start(e),this}stop(e){return this._lfoL.stop(e),this._lfoR.stop(e),this}sync(){return this._lfoL.sync(),this._lfoR.sync(),this}unsync(){return this._lfoL.unsync(),this._lfoR.unsync(),this}dispose(){return super.dispose(),this._lfoL.dispose(),this._lfoR.dispose(),this._delayNodeL.dispose(),this._delayNodeR.dispose(),this.frequency.dispose(),this}},sx=class e extends ex{constructor(){let t=q(e.getDefaults(),arguments,[`decay`]);super(t),this.name=`Reverb`,this._convolver=this.context.createConvolver(),this.ready=Promise.resolve();let n=this.toSeconds(t.decay);uv(n,.001),this._decay=n;let r=this.toSeconds(t.preDelay);uv(r,0),this._preDelay=r,this.generate(),this.connectEffect(this._convolver)}static getDefaults(){return Object.assign(ex.getDefaults(),{decay:1.5,preDelay:.01})}get decay(){return this._decay}set decay(e){e=this.toSeconds(e),uv(e,.001),this._decay=e,this.generate()}get preDelay(){return this._preDelay}set preDelay(e){e=this.toSeconds(e),uv(e,0),this._preDelay=e,this.generate()}generate(){return Tv(this,void 0,void 0,function*(){let e=this.ready,t=new oy(2,this._decay+this._preDelay,this.context.sampleRate),n=new ob({context:t}),r=new ob({context:t}),i=new rx({context:t});n.connect(i,0,0),r.connect(i,0,1);let a=new My({context:t}).toDestination();i.connect(a),n.start(0),r.start(0),a.gain.setValueAtTime(0,0),a.gain.setValueAtTime(1,this._preDelay),a.gain.exponentialApproachValueAtTime(0,this._preDelay,this.decay);let o=t.render();return this.ready=o.then(iy),yield e,this._convolver.buffer=(yield o).get(),this})}dispose(){return super.dispose(),this._convolver.disconnect(),this}},cx=class e extends J{constructor(){let t=q(e.getDefaults(),arguments,[`solo`]);super(t),this.name=`Solo`,this.input=this.output=new My({context:this.context}),e._allSolos.has(this.context)||e._allSolos.set(this.context,new Set),e._allSolos.get(this.context).add(this),this.solo=t.solo}static getDefaults(){return Object.assign(J.getDefaults(),{solo:!1})}get solo(){return this._isSoloed()}set solo(t){t?this._addSolo():this._removeSolo(),e._allSolos.get(this.context).forEach(e=>e._updateSolo())}get muted(){return this.input.gain.value===0}_addSolo(){e._soloed.has(this.context)||e._soloed.set(this.context,new Set),e._soloed.get(this.context).add(this)}_removeSolo(){e._soloed.has(this.context)&&e._soloed.get(this.context).delete(this)}_isSoloed(){return e._soloed.has(this.context)&&e._soloed.get(this.context).has(this)}_noSolos(){return!e._soloed.has(this.context)||e._soloed.has(this.context)&&e._soloed.get(this.context).size===0}_updateSolo(){this._isSoloed()||this._noSolos()?this.input.gain.value=1:this.input.gain.value=0}dispose(){return super.dispose(),e._allSolos.get(this.context).delete(this),this._removeSolo(),this}};cx._allSolos=new Map,cx._soloed=new Map;var lx=class e extends J{constructor(){let t=q(e.getDefaults(),arguments,[`pan`,`volume`]);super(t),this.name=`PanVol`,this._panner=this.input=new tx({context:this.context,pan:t.pan,channelCount:t.channelCount}),this.pan=this._panner.pan,this._volume=this.output=new Hy({context:this.context,volume:t.volume}),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=t.mute,ny(this,[`pan`,`volume`])}static getDefaults(){return Object.assign(J.getDefaults(),{mute:!1,pan:0,volume:0,channelCount:1})}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}dispose(){return super.dispose(),this._panner.dispose(),this.pan.dispose(),this._volume.dispose(),this.volume.dispose(),this}},ux=class e extends J{constructor(){let t=q(e.getDefaults(),arguments,[`volume`,`pan`]);super(t),this.name=`Channel`,this._solo=this.input=new cx({solo:t.solo,context:this.context}),this._panVol=this.output=new lx({context:this.context,pan:t.pan,volume:t.volume,mute:t.mute,channelCount:t.channelCount}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),ny(this,[`pan`,`volume`])}static getDefaults(){return Object.assign(J.getDefaults(),{pan:0,volume:0,mute:!1,solo:!1,channelCount:1})}get solo(){return this._solo.solo}set solo(e){this._solo.solo=e}get muted(){return this._solo.muted||this.mute}get mute(){return this._panVol.mute}set mute(e){this._panVol.mute=e}_getBus(t){return e.buses.has(t)||e.buses.set(t,new My({context:this.context})),e.buses.get(t)}send(e,t=0){let n=this._getBus(e),r=new My({context:this.context,units:`decibels`,gain:t});return this.connect(r),r.connect(n),r}receive(e){return this._getBus(e).connect(this),this}dispose(){return super.dispose(),this._panVol.dispose(),this.pan.dispose(),this.volume.dispose(),this._solo.dispose(),this}};ux.buses=new Map;var dx=class e extends J{constructor(){let t=q(e.getDefaults(),arguments,[`threshold`,`ratio`]);super(t),this.name=`Compressor`,this._compressor=this.context.createDynamicsCompressor(),this.input=this._compressor,this.output=this._compressor,this.threshold=new Oy({minValue:this._compressor.threshold.minValue,maxValue:this._compressor.threshold.maxValue,context:this.context,convert:!1,param:this._compressor.threshold,units:`decibels`,value:t.threshold}),this.attack=new Oy({minValue:this._compressor.attack.minValue,maxValue:this._compressor.attack.maxValue,context:this.context,param:this._compressor.attack,units:`time`,value:t.attack}),this.release=new Oy({minValue:this._compressor.release.minValue,maxValue:this._compressor.release.maxValue,context:this.context,param:this._compressor.release,units:`time`,value:t.release}),this.knee=new Oy({minValue:this._compressor.knee.minValue,maxValue:this._compressor.knee.maxValue,context:this.context,convert:!1,param:this._compressor.knee,units:`decibels`,value:t.knee}),this.ratio=new Oy({minValue:this._compressor.ratio.minValue,maxValue:this._compressor.ratio.maxValue,context:this.context,convert:!1,param:this._compressor.ratio,units:`positive`,value:t.ratio}),ny(this,[`knee`,`release`,`attack`,`ratio`,`threshold`])}static getDefaults(){return Object.assign(J.getDefaults(),{attack:.003,knee:30,ratio:12,release:.25,threshold:-24})}get reduction(){return this._compressor.reduction}dispose(){return super.dispose(),this._compressor.disconnect(),this.attack.dispose(),this.release.dispose(),this.threshold.dispose(),this.ratio.dispose(),this.knee.dispose(),this}},fx=class e extends J{constructor(){let t=q(e.getDefaults(),arguments,[`threshold`]);super(t),this.name=`Limiter`,this._compressor=this.input=this.output=new dx({context:this.context,ratio:20,attack:.003,release:.01,threshold:t.threshold}),this.threshold=this._compressor.threshold,ny(this,`threshold`)}static getDefaults(){return Object.assign(J.getDefaults(),{threshold:-12})}get reduction(){return this._compressor.reduction}dispose(){return super.dispose(),this._compressor.dispose(),this.threshold.dispose(),this}};ly().transport,ly().destination,ly().destination,ly().listener,ly().draw,ly();var px=e=>440*2**((e-69)/12);function mx(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function hx(e,t,n=7){let r=mx(n),i=60/e,a=[],o=-1,s=0,c=()=>{let e;do e=Math.floor(r()*4);while(e===o&&s>=1);return s=e===o?s+1:0,o=e,e},l=Math.floor((t-1.5)/i);for(let e=8;e<l;e++){let t=Math.floor(e/4),n=e%4,o=n===0||n===2,s;s=t<8?o?.9:.2:t<16?o?1:.4:t<24?o?1:.5:o?1:.6,t%8==7&&n>=2&&(s*=.3),r()<s&&a.push({t:e*i,lane:c(),judged:!1})}return a}var gx={dirge:{chords:[{root:38,tones:[62,65,69]},{root:34,tones:[58,62,65]},{root:31,tones:[55,58,62]},{root:33,tones:[57,61,64]}],mel:[[2,-1,1,0],[2,1,-1,0],[1,-1,0,2],[2,1,0,-1]],bell:62},drowned:{chords:[{root:40,tones:[64,67,71]},{root:36,tones:[60,64,67]},{root:33,tones:[57,60,64]},{root:35,tones:[59,63,66]}],mel:[[0,-1,2,-1],[1,-1,0,-1],[2,-1,1,0],[1,-1,2,-1]],bell:76}},_x={dirgehold:`dirge`,"wyrmbone-pit":`dirge`,"drowned-choir":`drowned`,"carnival-noir":`drowned`},vx=`bb2.audio.v1`,yx={master:.85,music:.8,sfx:.9,voice:1,mute:!1};function bx(){try{return{...yx,...JSON.parse(localStorage.getItem(vx)||`{}`)}}catch{return{...yx}}}function xx(e){localStorage.setItem(vx,JSON.stringify(e))}var Sx=[`round_1`,`fight`,`game_over`,`flawless_victory`,`time`,`you_win`,`you_lose`],Cx=class{constructor(){this.ctx=null,this.layer=0,this.running=!1,this.lead={wave:`triangle`,oct:1},this.flavour=`dirge`,this.levels=bx()}ensure(){if(this.ctx)return;let e=new ey({latencyHint:`interactive`,lookAhead:.05});uy(e),this.tc=e,this.ctx=e.rawContext,this.limiter=new fx(-1).toDestination(),this.comp=new dx({threshold:-16,ratio:3,attack:.01,release:.2}).connect(this.limiter),this.master=new My(1).connect(this.comp),this.filter=new Bb(18e3,`lowpass`).connect(this.master),this.musicBus=new My(1).connect(this.filter),this.duck=new My(1).connect(this.musicBus),this.sfxBus=new My(1).connect(this.master),this.voiceBus=new My(1).connect(this.master),this.applyLevels(),this.buildBands(),this.voices=new Ab(Object.fromEntries(Sx.map(e=>[e,`audio/announcer/${e}.mp3`]))).connect(this.voiceBus),this.voices.fadeOut=.02}buildBands(){let e=this.duck,t=this.sfxBus;this.blipSyn=new Lb({oscillator:{type:`square`},envelope:{attack:.002,decay:.08,sustain:0,release:.02},volume:-18}).connect(t),this.boomKick=new Kb({pitchDecay:.09,octaves:5,envelope:{attack:.001,decay:.8,sustain:0,release:.2},volume:-2}).connect(t),this.boomNoise=new qb({noise:{type:`brown`},envelope:{attack:.002,decay:.6,sustain:0},volume:-10}).connect(t),this.sweepF=new Bb({frequency:300,type:`bandpass`,Q:3}).connect(t),this.sweep=new qb({noise:{type:`pink`},envelope:{attack:1,decay:.2,sustain:.8,release:.8},volume:-10}).connect(this.sweepF),this.sourF=new Bb(1200,`lowpass`).connect(t),this.sourSyn=new Zb(Lb,{oscillator:{type:`sawtooth`},envelope:{attack:.004,decay:.25,sustain:.1,release:.15},detune:-35,volume:-20}).connect(this.sourF);let n=this.dirge={};n.verb=new sx({decay:5.5,wet:.42,preDelay:.02}).connect(e),n.organ=new Zb(Lb,{maxPolyphony:16,oscillator:{type:`custom`,partials:[1,.7,.5,.35,.25,.12,.1,.06]},envelope:{attack:.09,decay:.2,sustain:.85,release:.9},volume:-19}).connect(n.verb),n.reed=new Lb({oscillator:{type:`custom`,partials:[1,.2,.6,.1,.4,.05,.2]},envelope:{attack:.03,decay:.1,sustain:.7,release:.35},volume:-19}).connect(n.verb),n.pedal=new Hb({oscillator:{type:`square`},filter:{Q:1,type:`lowpass`},filterEnvelope:{attack:.01,decay:.3,sustain:.4,baseFrequency:90,octaves:2.2},envelope:{attack:.02,decay:.2,sustain:.7,release:.3},volume:-15}).connect(e),n.timp=new Kb({pitchDecay:.06,octaves:3,envelope:{attack:.001,decay:.7,sustain:0,release:.3},volume:-7}).connect(n.verb),n.snare=new qb({noise:{type:`pink`},envelope:{attack:.001,decay:.16,sustain:0},volume:-22}).connect(n.verb),n.bell=new Ub({harmonicity:3.01,modulationIndex:14,envelope:{attack:.001,decay:3,sustain:0,release:2},modulationEnvelope:{attack:.002,decay:.7,sustain:0,release:.5},volume:-17}).connect(n.verb),n.rattle=new Gb({envelope:{attack:.001,decay:.04,release:.01},harmonicity:5.1,modulationIndex:32,resonance:3200,octaves:1.5,volume:-34}).connect(e),n.harp=new Zb(Lb,{oscillator:{type:`pulse`,width:.25},envelope:{attack:.002,decay:.16,sustain:0,release:.08},volume:-27}).connect(n.verb),n.accent=new Zb(Lb,{oscillator:{type:`custom`,partials:[1,.8,.6,.4,.3,.2]},envelope:{attack:.004,decay:.25,sustain:.2,release:.5},volume:-15}).connect(new sx({decay:3,wet:.35}).connect(t));let r=this.drowned={};r.under=new Bb(1800,`lowpass`).connect(e),r.lfo=new Eb({frequency:.09,min:900,max:3e3}).connect(r.under.frequency).start(),r.verb=new sx({decay:9,wet:.6,preDelay:.04}).connect(r.under),r.chorus=new ox({frequency:.6,delayTime:4,depth:.6,wet:.5}).connect(r.verb).start(),r.vowel=new Bb({frequency:950,type:`bandpass`,Q:.7}).connect(r.chorus),r.choir=new Zb(Lb,{maxPolyphony:16,oscillator:{type:`fattriangle`,count:3,spread:26},envelope:{attack:.7,decay:.3,sustain:.85,release:2},volume:-9}).connect(r.vowel),r.bells=new Zb(Ub,{harmonicity:3.01,modulationIndex:10,envelope:{attack:.001,decay:2.6,sustain:0,release:2},modulationEnvelope:{attack:.002,decay:.5,sustain:0,release:.4},volume:-21}).connect(r.verb),r.sub=new Hb({oscillator:{type:`sine`},filter:{type:`lowpass`,Q:0},filterEnvelope:{baseFrequency:200,octaves:1},envelope:{attack:.05,decay:.3,sustain:.8,release:.6},volume:-11}).connect(e),r.drumF=new Bb(380,`lowpass`).connect(r.verb),r.drum=new Kb({pitchDecay:.08,octaves:2.5,envelope:{attack:.001,decay:.5,sustain:0,release:.3},volume:0}).connect(r.drumF),r.wave=new qb({noise:{type:`brown`},envelope:{attack:.08,decay:.5,sustain:0},volume:-16}).connect(r.verb),r.drop=new Zb(Lb,{oscillator:{type:`sine`},envelope:{attack:.001,decay:.09,sustain:0,release:.05},volume:-20}).connect(r.verb),r.accent=new Zb(Ub,{harmonicity:3.01,modulationIndex:12,envelope:{attack:.001,decay:1.2,sustain:0,release:1},modulationEnvelope:{attack:.002,decay:.3,sustain:0,release:.3},volume:-11}).connect(new sx({decay:4,wet:.45}).connect(t))}applyLevels(){let e=this.levels;this.master&&(this.master.gain.rampTo(e.mute?0:e.master,.05),this.musicBus.gain.rampTo(e.music,.05),this.sfxBus.gain.rampTo(e.sfx,.05),this.voiceBus.gain.rampTo(e.voice,.05))}setLevels(e){Object.assign(this.levels,e),xx(this.levels),this.applyLevels()}setVolume(e){this.setLevels({master:e})}resumeCtx(){return this.ensure(),this.ctx.state===`suspended`?this.ctx.resume():Promise.resolve()}setArena(e){this.flavour=_x[e]||`dirge`}start(e,t){this.ensure(),this.bpm=e,this.len=t,this.beat=60/e,this.rnd=mx(99),this.songStart=this.ctx.currentTime+.12,this.nextBeat=0,this.running=!0,this.layer=0,clearInterval(this.timer),this.timer=setInterval(()=>this.schedule(),25),this.schedule()}stop(){if(this.running=!1,clearInterval(this.timer),!this.ctx)return;let e=this.ctx.currentTime;for(let t of[this.dirge,this.drowned])for(let n of[`organ`,`choir`,`bells`,`harp`,`drop`])t[n]&&t[n].releaseAll(e);for(let t of[this.dirge.pedal,this.dirge.reed,this.drowned.sub])t.triggerRelease(e+.01)}pause(){return this.ctx&&this.ctx.suspend()}resume(){return this.ctx&&this.ctx.resume()}time(e=0){return this.ctx?this.ctx.currentTime-this.songStart-e/1e3:0}schedule(){if(!this.running)return;let e=this.ctx.currentTime+.5;for(;this.songStart+this.nextBeat*this.beat<e;){let e=this.nextBeat,t=this.songStart+e*this.beat;if(e*this.beat>=this.len){this.running=!1,clearInterval(this.timer);break}try{this.flavour===`drowned`?this.beatDrowned(e,t):this.beatDirge(e,t)}catch(e){console.warn(`music beat`,e)}this.nextBeat++}}section(e){let t=Math.floor(e/4);return t<2?0:t<10?1:t<18?2:t<26?3:4}chord(e){return gx[this.flavour].chords[Math.floor(e/4)%4]}beatDirge(e,t){let n=this.dirge,r=gx.dirge,i=this.chord(e),a=e%4,o=this.beat,s=this.section(e),c=Math.floor(e/4),l=this.layer;if(a===0){let e=s>=3?[...i.tones.map(e=>e-12),...i.tones]:i.tones.map(e=>e-12);n.organ.triggerAttackRelease(e.map(px),o*3.85,t,s===0?.5:.8),c%2==0&&n.bell.triggerAttackRelease(px(s>=4?r.bell+12:r.bell),o*2,t,s===0?.6:.85)}if(s>=1&&(a===0||a===2)&&n.pedal.triggerAttackRelease(px(i.root),o*(l>=2?.45:1.8),t,.9),l>=2&&(a===1||a===3)&&n.pedal.triggerAttackRelease(px(i.root+12),o*.45,t,.6),l>=2&&n.pedal.triggerAttackRelease(px(i.root+(a===3?7:12)),o*.4,t+o/2,.55),n.timp.triggerAttackRelease(px(i.root-12),o,t,a===0?1:a===2?.75:s>=3?.45:1e-4),s>=2&&(a===1||a===3)&&n.snare.triggerAttackRelease(.15,t,.9),(l>=1||s>=3)&&(n.rattle.triggerAttackRelease(px(400),.03,t+o/2,.8),l>=2&&n.rattle.triggerAttackRelease(px(400),.03,t+o*.75,.4)),s>=2){let e=r.mel[c%4][a];e>=0&&n.reed.triggerAttackRelease(px(i.tones[e]+(s>=4?12:0)),o*.9,t,.8)}if(l>=3)for(let r=0;r<4;r++)n.harp.triggerAttackRelease(px(i.tones[(e*4+r)%3]+12),o/4,t+r*o/4,.7)}beatDrowned(e,t){let n=this.drowned,r=gx.drowned,i=this.chord(e),a=e%4,o=this.beat,s=this.section(e),c=Math.floor(e/4),l=this.layer;if(a===0){let e=s>=3?[i.root+12,...i.tones,i.tones[2]+12]:[i.root+12,...i.tones];n.choir.triggerAttackRelease(e.map(px),o*3.9,t,s===0?.55:.8),c%2==0&&n.bells.triggerAttackRelease(px(r.bell-12),o*2,t,.7)}s>=1&&(a===0||a===2)&&n.sub.triggerAttackRelease(px(i.root-12),o*1.8,t,.9),n.drum.triggerAttackRelease(px(i.root-12),o,t,a===0?1:a===2?.8:s>=3?.4:1e-4),s>=2&&a===3&&n.wave.triggerAttackRelease(.6,t,.8);{let e=r.mel[c%4][a];s>=1&&e>=0&&n.bells.triggerAttackRelease(px(i.tones[e]+12),o*1.5,t,s>=4?.9:.65)}if(l>=1||s>=3){let e=this.rnd();e<.7&&n.drop.triggerAttackRelease(px([83,86,88,91,95][Math.floor(e*7)%5]),.08,t+o/2,.6)}if(l>=2&&n.bells.triggerAttackRelease(px(i.tones[(e+1)%3]+24),o*.4,t+o/2,.35),l>=3)for(let r=0;r<4;r++)n.drop.triggerAttackRelease(px(i.tones[(e*4+r)%3]+24),.07,t+r*o/4,.4)}now(){return this.ctx.currentTime+.005}curChord(){let e=Math.max(0,Math.floor(this.time()/(this.beat||.5)));return this.chord(e)}hit(e,t){if(!this.ctx)return;let n=this.curChord(),r=[...n.tones,n.tones[0]+12][e]+12*(this.lead.oct-1)+(this.flavour===`drowned`?12:0),i=(this.flavour===`drowned`?this.drowned:this.dirge).accent,a=this.now();i.triggerAttackRelease(t?[px(r),px(r+12)]:[px(r)],.18,a,t?.9:.65)}sour(){if(!this.ctx)return;let e=this.curChord(),t=this.now(),n=this.filter.frequency;n.cancelScheduledValues(t),n.setValueAtTime(650,t),n.exponentialRampToValueAtTime(18e3,t+(this.beat||.5)*1.1),this.sourSyn.triggerAttackRelease([px(e.root+25),px(e.root+26),px(e.root+31)],.28,t,.8)}crescendo(e=2.4){if(!this.ctx)return;let t=this.now(),n=this.curChord();this.sweepF.frequency.cancelScheduledValues(t),this.sweepF.frequency.setValueAtTime(300,t),this.sweepF.frequency.exponentialRampToValueAtTime(6e3,t+e*.5),this.sweep.triggerAttackRelease(e*.5,t,.9),(this.flavour===`drowned`?this.drowned:this.dirge).accent.triggerAttackRelease([n.root+12,...n.tones,n.tones[0]+12,n.tones[2]+12].map(px),e*.4,t+e*.45,1)}boom(e=1){if(!this.ctx)return;let t=this.now();this.boomKick.triggerAttackRelease(px(29),.6,t,Math.min(1,.8*e)),this.boomNoise.triggerAttackRelease(.5,t,Math.min(1,.7*e))}blip(e=660,t=.08,n=.12){this.ensure(),this.blipSyn.triggerAttackRelease(e,t,this.now(),Math.min(1,n*6))}say(e,t=0){if(!this.ctx||!this.voices||!this.voices.has(e))return;let n=this.voices.player(e);if(!n.loaded)return;let r=this.now()+t,i=n.buffer.duration;try{n.stop(r-.001)}catch{}try{n.start(r)}catch(e){console.warn(`voice`,e);return}this.duck.gain.cancelScheduledValues(r),this.duck.gain.setTargetAtTime(.45,r,.03),this.duck.gain.setTargetAtTime(1,r+i,.15)}voicesReady(){return!!(this.voices&&Sx.every(e=>this.voices.player(e).loaded))}tap(){this.ensure();let e=this.ctx.createMediaStreamDestination();return this.limiter.connect(e),e.stream}},wx=`bb2.keys`,Tx={lane0:`KeyG`,lane1:`KeyH`,lane2:`KeyJ`,lane3:`KeyK`,special:`Space`},Ex={lane0:`Lane 1`,lane1:`Lane 2`,lane2:`Lane 3`,lane3:`Lane 4`,special:`Special`};function Dx(e){return e?e.startsWith(`Key`)?e.slice(3):e.startsWith(`Digit`)?e.slice(5):{Space:`SPACE`,ArrowLeft:`←`,ArrowRight:`→`,ArrowUp:`↑`,ArrowDown:`↓`,ShiftLeft:`L-SHIFT`,ShiftRight:`R-SHIFT`,Semicolon:`;`}[e]||e:`?`}var Ox=class{constructor(){this.keys=this.load(),this.handlers=[],this.held={},this.rebinding=null,this.pad={prev:[]},window.addEventListener(`keydown`,e=>this.onKey(e,!0)),window.addEventListener(`keyup`,e=>this.onKey(e,!1))}load(){try{return{...Tx,...JSON.parse(localStorage.getItem(wx)||`{}`)}}catch{return{...Tx}}}save(){localStorage.setItem(wx,JSON.stringify(this.keys))}reset(){this.keys={...Tx},this.save()}on(e){this.handlers.push(e)}emit(e,t,n){for(let r of this.handlers)r(e,t,n)}rebind(e,t){this.rebinding={action:e,done:t}}onKey(e,t){if(e.code===`Backquote`||e.code===`F2`){t&&!e.repeat&&this.emit(`tune`,!0),e.preventDefault();return}if(this.rebinding&&t){e.preventDefault();let{action:t,done:n}=this.rebinding;if(this.rebinding=null,e.code!==`Escape`){for(let n in this.keys)this.keys[n]===e.code&&(this.keys[n]=this.keys[t]);this.keys[t]=e.code,this.save()}n&&n();return}if(e.repeat){[`Space`,`ArrowUp`,`ArrowDown`].includes(e.code)&&e.preventDefault();return}let n=!1;for(let r in this.keys)this.keys[r]===e.code&&(this.held[r]=t,this.emit(r,t,`key`),n=!0);t&&(e.code===`Escape`&&(this.emit(`pause`,!0),n=!0),(e.code===`Enter`||e.code===`NumpadEnter`)&&(this.emit(`confirm`,!0),n=!0),e.code===`Backspace`&&(this.emit(`back`,!0),n=!0),(e.code===`ArrowLeft`||e.code===`ArrowUp`)&&(this.emit(`prev`,!0),n=!0),(e.code===`ArrowRight`||e.code===`ArrowDown`)&&(this.emit(`next`,!0),n=!0)),(n||e.code===`Space`)&&e.preventDefault()}pollPad(){let e=[...navigator.getGamepads?navigator.getGamepads():[]].find(e=>e);if(!e)return;let t=t=>!!(e.buttons[t]&&e.buttons[t].pressed),n={lane0:[14,2],lane1:[13,0],lane2:[12,3],lane3:[15,1],special:[4,5],pause:[9],confirm:[0],back:[1]};for(let e in n){let r=n[e].some(t);r!==!!this.pad.prev[e]&&(e===`pause`||e===`confirm`||e===`back`?r&&this.emit(e,!0,`pad`):(this.held[e]=r,this.emit(e,r,`pad`))),this.pad.prev[e]=r}}},kx={bpm:120,fallSec:4.5,perfectMs:45,goodMs:90,audioOffsetMs:0,roundLen:60,koTargetSec:58,dmgGood:2,dmgPerfect:3,comboBonusMax:.5,comboBonusAt:50,missHit:2.5,staggerHit:8,carefulAt:3,staggerAt:5,meterPerfect:8,meterGood:6,specialDmg:12,specialSec:2.6,rivalMeterPerSec:2.6,rivalMeterPerMiss:6,rivalSpecialDmg:12,clashMinMeter:30,clashSec:4,clashPushPerfect:.32,clashPushGood:.22,clashHoldPerSec:.5,clashHoldDrain:25,clashRivalPerSec:.28,clashDmg:15,hitStopMs:60,shakePerfect:.03,shakeStagger:.25,shakeSpecial:.4,punch:.25,reduceShake:!1,bardSize:.58,layerAt1:10,layerAt2:25,layerAt3:50,volume:.8},Ax=`bb2.feel.v2`;function jx(){try{return{...kx,...JSON.parse(localStorage.getItem(Ax)||`{}`)}}catch{return{...kx}}}function Mx(e){localStorage.setItem(Ax,JSON.stringify(e))}function Nx(e){Object.assign(e,kx),localStorage.removeItem(Ax)}var Px=Math.sin,Fx=Math.PI,Ix={rig:`art/rig/ozra/rig.json`,moves:{durations:{attack:.32,hit:.36,stagger:1.1,impact:1.5},idle(e,t,n){let r=(1-n)**3,i=Px(t*Fx);return{base:{sy:1+.006*r},torso:{sy:1+.012*r,y:-2*r,r:.008*i},head:{r:.03+.015*i,y:-1.5*r},crown:{y:-1.2*r},cape:{r:.035*Px(e*1.3)+.01*r,sx:1+.02*Px(e*1.7)},armB_up:{r:.02*Px(e*1.1+1)},armB_lo:{r:.03*Px(e*1.1+.4)},armF_up:{r:.015*Px(e*.9)},spear:{r:.012*Px(e*.8)}}},attack(e,t){let n=du(e);switch(t.lane){case 0:return{torso:{r:-.09*n},armF_up:{r:.35*n},armF_lo:{r:-.1*n,x:14*n},spear:{r:-.55*n},head:{r:-.05*n},cape:{r:.08*n}};case 1:return{armB_up:{r:1.5*n},armB_lo:{r:.7*n},head:{r:.12*n},torso:{r:.05*n,sy:1+.03*n}};case 2:return{head:{r:.38*n},torso:{r:.12*n,sy:1+.05*n},crown:{y:-6*n},armB_up:{r:-.25*n},base:{sy:1+.02*n}};default:return{spear:{r:-.95*n},armF_up:{r:.45*n},torso:{r:-.13*n},cape:{r:.14*n},head:{r:-.06*n}}}},hit(e){let t=e<.15?lu.out(e/.15):1-lu.io((e-.15)/.85);return{torso:{r:.16*t},head:{r:.28*t},base:{sx:1+.04*t,sy:1-.05*t},armB_up:{r:-.35*t},armF_up:{r:-.2*t},spear:{r:.15*t},cape:{r:-.1*t}}},stagger(e){let t=1-e,n=Px(e*20)*t;return{torso:{r:.12*t+.12*n},head:{r:-.25*t+.15*n},base:{sy:1-.06*t},armB_up:{r:-.6*t*(.5+.5*Px(e*14))},armF_up:{r:-.4*t},spear:{r:.35*t}}},charge(e){let t=lu.io(Math.min(1,e/.9)),n=.01*Px(e*60);return{base:{sy:1-.06*t,sx:1+.03*t},torso:{r:-.08*t+n},armF_up:{r:1.2*t},armF_lo:{r:.35*t},spear:{r:-1.4*t},head:{r:.12*t},armB_up:{r:.4*t},crown:{sx:1+.08*t,sy:1+.08*t}}},impact(e){let t=e<.12?lu.back(e/.12):e<.7?1:1-lu.io((e-.7)/.3),n=.012*Px(e*90);return{head:{r:.3*t+n,y:-3*t},torso:{r:.1*t,sy:1+.06*t},base:{sy:1+.04*t},armB_up:{r:-.6*t},armB_lo:{r:-.3*t},armF_up:{r:1.3*t},armF_lo:{r:.25*t},spear:{r:-1.45*t},crown:{y:-3*t,sx:1+.1*t,sy:1+.1*t},cape:{r:-.2*t}}},clash(e){let t=lu.out(Math.min(1,e/.25)),n=.02*Px(e*50);return{torso:{r:-.16*t+n},base:{sx:1+.03*t,sy:1-.03*t},armF_up:{r:.9*t},armF_lo:{r:.2*t},spear:{r:-2.2*t+n},armB_up:{r:1.1*t+n},head:{r:-.1*t},cape:{r:.18*t}}},victory(e,t,n,r){let i=lu.back(Math.min(1,e/.5)),a=(1-r)**3;return{armF_up:{r:1.6*i},armF_lo:{r:.3*i},spear:{r:-1.75*i},head:{r:.25*i},torso:{r:.06*i,y:-4*a},armB_up:{r:-.3*i},crown:{y:-3*a}}},ko(e){let t=Math.min(1,e/.6),n=lu.back(t);return{base:{r:.22*n,y:40*n,sy:1-.05*n},torso:{r:.18*n},head:{r:.45*n},armB_up:{r:-.35*n},armB_lo:{r:-.2*n},armF_up:{r:-.5*n},spear:{r:.6*n},cape:{r:-.2*n}}}},id:`ozra`,name:`OZRA IRONVOX`,title:`THE SIREN KNIGHT`,art:`art/ozra.png`,home:`drowned-choir`,colors:{main:`#3b3a9e`,accent:`#c9d2ff`,glow:`#eef2ff`},height:1,special:{name:`SHATTER ARIA`,fx:`shards`},music:{leadWave:`triangle`,leadOct:1}},Lx=Math.sin,Rx=Math.PI,zx=[Ix,{rig:`art/rig/marrowgaunt/rig.json`,moves:{durations:{attack:.36,hit:.38,stagger:1.2,impact:1.4},idle(e,t,n){let r=(1-n)**3,i=Lx(t*Rx/2),a=Lx(t*Rx/2-.9),o=Math.floor(e*6)%9==0?.06:0;return{base:{r:.012*i},torso:{r:.03*i,sy:1+.008*r},head:{r:-.07*a+.04},organ:{sy:1+.02*r,r:-.01*i},tailL:{r:.04*Lx(e*1.1)},tailR:{r:-.035*Lx(e*1.3+1)},armL_up:{r:-.04*a},armL_lo:{r:.05*Lx(t*Rx/2-1.6)+o},armR_up:{r:.04*a},armR_lo:{r:-.05*Lx(t*Rx/2-1.4)-o},keyboard:{r:.01*i}}},attack(e,t){let n=du(e);switch(t.lane){case 0:return{armL_up:{r:1.3*n},armL_lo:{r:.9*n},torso:{r:-.1*n},head:{r:-.08*n},tailL:{r:.08*n}};case 1:return{armR_up:{r:1.15*n},armR_lo:{r:.85*n},torso:{r:-.08*n},head:{r:.06*n},tailR:{r:-.08*n}};case 2:return{torso:{r:-.16*n,sy:1-.03*n},keyboard:{r:-.05*n},armL_lo:{r:.45*n},armR_lo:{r:.35*n},organ:{sy:1+.08*n},head:{r:-.14*n}};default:return{head:{r:.3*n+.05*Lx(e*60)*n},torso:{r:.1*n},organ:{r:.05*n,sy:1+.05*n},armL_up:{r:-.3*n},armR_up:{r:.4*n}}}},hit(e){let t=e<.15?lu.out(e/.15):1-lu.io((e-.15)/.85);return{torso:{r:.18*t},head:{r:.32*t},base:{sx:1+.05*t,sy:1-.05*t},armL_up:{r:-.4*t},armR_up:{r:.3*t},organ:{r:.06*t},tailL:{r:-.1*t},tailR:{r:.1*t}}},stagger(e){let t=1-e,n=Lx(e*16)*t;return{torso:{r:-.18*t+.12*n},head:{r:-.4*t+.2*n},base:{sy:1-.07*t,r:.04*n},armL_up:{r:.3*n},armR_up:{r:-.3*n},organ:{r:.08*n}}},charge(e){let t=lu.io(Math.min(1,e/.9)),n=.012*Lx(e*55);return{armL_up:{r:-1.15*t},armL_lo:{r:-.4*t},armR_up:{r:1.3*t},armR_lo:{r:.5*t},organ:{sx:1+.1*t,sy:1+.2*t,r:n},head:{r:.26*t},torso:{r:.08*t,sy:1+.03*t},tailL:{r:.12*t},tailR:{r:-.12*t}}},impact(e){let t=e<.12?lu.back(e/.12):e<.65?1:1-lu.io((e-.65)/.35);return{torso:{r:-.22*t},head:{r:-.16*t},organ:{sx:1+.12*t,sy:1+.25*t},armL_up:{r:1*t},armR_up:{r:1.2*t},armL_lo:{r:.4*t},armR_lo:{r:.4*t},base:{sx:1+.03*t}}},clash(e){let t=lu.out(Math.min(1,e/.25)),n=.02*Lx(e*47);return{torso:{r:-.15*t+n},armL_up:{r:1.3*t+n},armR_up:{r:1.3*t-n},armL_lo:{r:.3*t},armR_lo:{r:.3*t},head:{r:-.1*t},organ:{sy:1+.1*t}}},victory(e){let t=lu.io(Math.min(1,e/.6)),n=.5+.5*Lx(e*2.2);return{torso:{r:-.45*t*n},head:{r:-.2*t*n},armR_up:{r:.7*t*n},armR_lo:{r:.5*t},armL_up:{r:-.4*t},organ:{sy:1+.05*t}}},ko(e){let t=Math.min(1,e/.7),n=lu.back(t);return{base:{sy:1-.08*n,y:30*n,r:-.08*n},torso:{r:-.4*n},head:{r:-.55*n},armL_up:{r:.2*n},armR_up:{r:-.1*n},organ:{r:.15*n,sy:1-.05*n}}}},id:`marrowgaunt`,name:`MARROWGAUNT`,title:`THE BONE ORGANIST`,art:`art/marrowgaunt.png`,home:`dirgehold`,colors:{main:`#8e1b22`,accent:`#d8b45a`,glow:`#ff4a3a`},height:1.08,special:{name:`REQUIEM TOLL`,fx:`rings`},music:{leadWave:`square`,leadOct:0}}],Bx=[{id:`grundle`,name:`GRUNDLE`,art:`art/grundle.png`},{id:`nyx`,name:`NYX`,art:`art/nyx.png`},{id:`dlc1`,name:`???`},{id:`dlc2`,name:`???`}],Vx=Object.fromEntries(zx.map(e=>[e.id,e])),Hx=new URLSearchParams(location.search),Ux=e=>document.getElementById(e),Y=jx(),X=new Pu(Ux(`stage`));X.useRig=Hx.get(`rig`)!==`0`;var Wx=new Ru(Ux(`track`)),Z=new Cx,Gx=new Ox,Kx=Ux(`screens`),Q=-1,qx=1,$={scene:`title`,paused:!1,menuIdx:0,pickIdx:0,player:null,rival:null,arena:null,autoplay:Hx.get(`autoplay`)===`1`,round:null};window.__bb={G:$,feel:Y,stage:X,music:Z,fillMeter(){$.round&&($.round.meter[Q]=100)},rivalMeter(e=100){$.round&&($.round.meter[qx]=e)},state(){let e=$.round;return{scene:$.scene,paused:$.paused,arena:$.arena,t:e?e.t:0,hp:e?{p:e.hp[Q],r:e.hp[qx]}:null,combo:e?e.combo:0,special:!!(e&&e.special),clash:!!(e&&e.clash),result:e&&e.result,counts:e&&e.counts,koAt:e&&e.koAt,notes:e?e.notes.length:0}}};var Jx=new g({title:"Battle Bards feel (` to hide)"}),Yx=new E({trackGPU:!1,horizontal:!0});Yx.init(X.renderer),document.body.appendChild(Yx.dom);{let e=Jx.addFolder(`Timing`);e.add(Y,`bpm`,90,160,1).name(`BPM (next round)`),e.add(Y,`fallSec`,1,8,.1).name(`note fall s (constant)`),e.add(Y,`perfectMs`,15,100,1),e.add(Y,`goodMs`,30,180,1),e.add(Y,`audioOffsetMs`,-200,200,1).name(`audio offset ms`),e.add(Y,`roundLen`,20,120,1).name(`round s (next)`);let t=Jx.addFolder(`Damage & meter`);[`koTargetSec`,`dmgGood`,`dmgPerfect`,`comboBonusMax`,`comboBonusAt`,`missHit`,`staggerHit`,`carefulAt`,`staggerAt`,`meterPerfect`,`meterGood`,`specialDmg`,`specialSec`,`rivalMeterPerSec`,`rivalMeterPerMiss`,`rivalSpecialDmg`,`clashMinMeter`].forEach(e=>t.add(Y,e));let n=Jx.addFolder(`Beam clash`);[`clashSec`,`clashPushPerfect`,`clashPushGood`,`clashHoldPerSec`,`clashHoldDrain`,`clashRivalPerSec`,`clashDmg`].forEach(e=>n.add(Y,e));let r=Jx.addFolder(`Juice`);r.add(Y,`hitStopMs`,0,200,1),r.add(Y,`shakePerfect`,0,.3,.01),r.add(Y,`shakeStagger`,0,1,.01),r.add(Y,`shakeSpecial`,0,1,.01),r.add(Y,`punch`,0,1,.01),r.add(Y,`reduceShake`),r.add(Y,`bardSize`,.4,.75,.01).name(`bard size (next round)`);let i=Jx.addFolder(`Music`);i.add(Y,`layerAt1`,1,100,1),i.add(Y,`layerAt2`,1,100,1),i.add(Y,`layerAt3`,1,150,1);let a=Jx.addFolder(`Volume (saved)`),o=Z.levels,s=()=>Z.setLevels({});a.add(o,`mute`).name(`mute all`).onChange(s),a.add(o,`master`,0,1,.01).onChange(s),a.add(o,`music`,0,1,.01).onChange(s),a.add(o,`sfx`,0,1,.01).name(`sfx (hits, misses, specials)`).onChange(s),a.add(o,`voice`,0,1,.01).name(`voice (announcer)`).onChange(s);let c=Jx.addFolder(`Bloom`);c.add(X,`bloomOn`).name(`bloom on`),c.add(X.bloom,`strength`,0,2,.01),c.add(X.bloom,`radius`,0,1,.01),c.add(X.bloom,`threshold`,0,1,.01),Jx.add($,`autoplay`).name(`robot autoplay (test)`),Jx.add({reset(){Nx(Y),Jx.controllersRecursive().forEach(e=>e.updateDisplay())}},`reset`).name(`reset to feel sheet`),Jx.onChange(()=>Mx(Y)),Jx.folders.forEach(e=>e.close()),Hx.get(`gui`)!==`1`&&(Jx.hide(),Yx.dom.style.display=`none`)}function Xx(){let e=Jx._hidden;e?Jx.show():Jx.hide(),Yx.dom.style.display=e?``:`none`}var Zx=e=>new Promise(t=>setTimeout(t,e)),Qx=0;function $x(e=Y.hitStopMs){Qx=Math.max(Qx,e/1e3)}function eS(e,t=`#fff`,n={}){let r=Ux(`banner`),i=document.createElement(`div`);i.className=`b`+(n.small?` small`:``)+(n.stay?` stay`:``),i.style.setProperty(`--c`,t),i.textContent=e,r.innerHTML=``,r.appendChild(i),n.stay||setTimeout(()=>i.remove(),950)}function tS(e,t=``){return Kx.innerHTML=`<div class="screen ${t}">${e}</div>`,Kx.firstChild}function nS(e){return[...e].map((e,t)=>e===` `?`&nbsp;`:`<span style="animation-delay:${t*.08}s">${e}</span>`).join(``)}function rS(e,t){return $.menu={items:e,onPick:t},$.menuIdx=0,`<div class="menu">${e.map((e,t)=>`<div class="item ${t===0?`on`:``}" data-i="${t}">${e}</div>`).join(``)}</div>`}function iS(e){if(!$.menu)return;let t=$.menu.items.length;$.menuIdx=($.menuIdx+e+t)%t,Kx.querySelectorAll(`.menu .item`).forEach((e,t)=>e.classList.toggle(`on`,t===$.menuIdx)),Z.blip(520,.05,.06)}Kx.addEventListener(`click`,e=>{let t=e.target.closest(`.menu .item`);t&&$.menu&&($.menuIdx=+t.dataset.i,Z.resumeCtx(),$.menu.onPick($.menuIdx));let n=e.target.closest(`.card[data-id]`);n&&$.scene===`select`&&($.pickIdx=zx.findIndex(e=>e.id===n.dataset.id),uS(),dS());let r=e.target.closest(`.keys .row`);r&&$.scene===`keys`&&($.keyIdx=+r.dataset.i,cS())});function aS(){$.scene=`title`,$.round=null,Ux(`hud`).classList.add(`hidden`),Wx.draw({visible:!1}),X.shot(`vs`),tS(`<div class="logo">${nS(`BATTLE`)}<br>${nS(`BARDS`)}</div><div class="sub">A DARK FANTASY CONCERT DUEL</div>
    ${rS([`PLAY`,`KEYS`],e=>{Z.resumeCtx(),Z.blip(880),e===0?lS():oS(aS)})}
    <div class="hint">ENTER to choose · ↑↓ to move · \` tuning panel</div>`,`dim`)}function oS(e){$.scene=`keys`,$.keysBack=e,$.keyIdx=0,sS()}function sS(e){$.keyRows=[...Object.keys(Ex),`reset`,`back`],tS(`<div class="title2">KEYS</div><div class="keys">${$.keyRows.map((t,n)=>`<div class="row ${n===$.keyIdx?`on`:``}" data-i="${n}"><span>${Ex[t]||(t===`reset`?`Reset to G H J K`:`Back`)}</span><b>${Ex[t]?e===t?`press a key…`:Dx(Gx.keys[t]):``}</b></div>`).join(``)}</div>
    <div class="hint">ENTER to change · ESC to cancel · saved on this PC · Gamepad: D-pad / face buttons = lanes, LB/RB = special, START = pause</div>`,`dim`)}function cS(){let e=$.keyRows[$.keyIdx];if(e===`back`)return $.keysBack();if(e===`reset`)return Gx.reset(),sS();sS(e),Gx.rebind(e,()=>sS())}async function lS(){$.scene=`select`,$.menu=null,Ux(`hud`).classList.add(`hidden`),$.selectLoaded||=(await X.preload([...zx.map(e=>e.art)]),!0),uS()}function uS(){let e=zx[$.pickIdx];tS(`<div class="title2">CHOOSE YOUR BARD</div>
    <div class="roster">${zx.map((e,t)=>`<div class="card ${t===$.pickIdx?`on`:``}" data-id="${e.id}" style="--glow:${e.colors.glow}"><img src="${e.art}"><div class="cn">${e.name}</div></div>`).join(``)}
    ${Bx.map(e=>`<div class="card locked">${e.art?`<img src="${e.art}">`:``}<div class="lock">🔒 COMING SOON</div><div class="cn">${e.name}</div></div>`).join(``)}</div>
    <div class="pick"><div class="pn" style="text-shadow:0 0 20px ${e.colors.glow}">${e.name}</div><div class="pt">${e.title}</div><div class="ps">SPECIAL: ${e.special.name}</div></div>
    <div class="hint">← → choose · ENTER to fight · ESC back</div>`,`dim`)}function dS(){$.player=zx[$.pickIdx],$.rival=zx.find(e=>e!==$.player),$.arena=su[Hx.get(`arena`)]?Hx.get(`arena`):cu($.player,$.rival),Z.blip(990,.12),fS()}async function fS(){$.scene=`vs`;let e=$.player,t=$.rival,n=su[$.arena];await X.preload([e.art,t.art,...n.image?[n.image]:[]]),await X.preloadRigs([e,t]),X.build($.arena,e,t,Y),X.shot(`vs`,!0),X.reduceShake=Y.reduceShake;let r=[e,t].find(e=>e.home===$.arena);tS(`<img class="por" src="${e.art}" style="--glow:${e.colors.glow}">
    <div class="mid"><div class="names">${e.name}</div><div class="big">VS</div><div class="names">${t.name}</div>
    <div class="arena">ARENA<b>${n.name}</b>${r?`home of ${r.name}`:``}</div></div>
    <img class="por r" src="${t.art}" style="--glow:${t.colors.glow}">`,`vs dim`),Z.boom(.8),$.vsTimer=setTimeout(()=>$.scene===`vs`&&pS(),Hx.get(`vshold`)?+Hx.get(`vshold`):2800)}async function pS(){$.scene=`count`,X.shot(`wide`),mS(),Ux(`hud`).classList.remove(`hidden`),NS(),Z.ensure(),Z.say(`round_1`,.1);for(let e of[`3`,`2`,`1`])if(tS(`<div class="count">${e}</div>`),Z.blip(440,.1),await Zx(650),$.scene!==`count`)return;tS(`<div class="count" style="color:#ffd166">GO!</div>`),Z.blip(880,.25),Z.say(`fight`),setTimeout(()=>{$.scene===`round`&&(Kx.innerHTML=``)},600),Z.lead={wave:$.player.music.leadWave,oct:$.player.music.leadOct},Z.setArena($.arena),Z.start($.round.bpm,$.round.len),$.scene=`round`}function mS(){let e=Y.bpm,t=Y.roundLen,n=hx(e,t,+(Hx.get(`seed`)||7));if(Hx.get(`robotmiss`)){let e=mx(5);for(let t of n)t.robotSkip=e()<+Hx.get(`robotmiss`)}let r=0,i=0;for(let e of n){if(e.t>Y.koTargetSec)break;i++,r+=Y.dmgPerfect*(1+Math.min(i/Y.comboBonusAt,1)*Y.comboBonusMax)}$.round={bpm:e,len:t,beat:60/e,notes:n,t:-.2,lastT:-.2,unit:100/Math.max(1,r),hp:{[Q]:100,[qx]:100},meter:{[Q]:0,[qx]:0},combo:0,maxCombo:0,missStreak:0,stats:{perfect:0,good:0,miss:0},events:[],special:null,clash:null,ended:!1,layer:0,counts:{pSpecial:0,rSpecial:0,clash:0},koAt:null},Ux(`nameL`).textContent=$.player.name,Ux(`nameR`).textContent=$.rival.name,Ux(`nameL`).style.setProperty(`--glow`,$.player.colors.glow),Ux(`nameR`).style.setProperty(`--glow`,$.rival.colors.glow)}var hS=(e,t)=>$.round.events.push({at:$.round.t+e,fn:t});function gS(e){let t=$.round;if(!t||$.scene!==`round`||$.paused||t.ended)return;Wx.held[e]=!0,Wx.hitFlash(e);let n=t.t,r=Y.goodMs/1e3,i=null;for(let a of t.notes){if(a.t-n>r)break;if(!(a.judged||a.lane!==e)&&Math.abs(a.t-n)<=r){i=a;break}}i&&(i.judged=!0,_S(e,Math.abs(i.t-n)<=Y.perfectMs/1e3))}function _S(e,t){let n=$.round;n.combo++,n.maxCombo=Math.max(n.maxCombo,n.combo),n.missStreak=0,n.stats[t?`perfect`:`good`]++,Wx.pop(e,t?`PERFECT`:`GOOD`,t?`#ffe9a8`:`#b9c4ff`),Z.hit(e,t),n.clash?(n.clash.bal+=t?Y.clashPushPerfect:Y.clashPushGood,X.punch(.15)):(yS(qx,(t?Y.dmgPerfect:Y.dmgGood)*(1+Math.min(n.combo/Y.comboBonusAt,1)*Y.comboBonusMax)*n.unit),n.meter[Q]=Math.min(100,n.meter[Q]+(t?Y.meterPerfect:Y.meterGood)),X.hit(Q,t,e),t&&(X.shake(Y.shakePerfect),X.punch(Y.punch*.3)),n.combo%25==0&&(X.roarFx(),eS(`${n.combo} COMBO!`,$.player.colors.glow,{small:!0})))}function vS(e){let t=$.round;e.judged=!0,e.missFade=!0,t.stats.miss++,t.combo=0,t.missStreak++,Wx.pop(e.lane,`MISS`,`#ff6a6a`),Z.sour(),t.clash?t.clash.bal-=Y.clashPushGood:(yS(Q,Y.missHit),X.hit(qx,!1,e.lane),t.meter[qx]=Math.min(100,t.meter[qx]+Y.rivalMeterPerMiss),t.missStreak===Y.carefulAt&&eS(`CAREFUL!`,`#ffb35a`,{small:!0}),t.missStreak>=Y.staggerAt&&(t.missStreak=0,eS(`STAGGER!`,`#ff4a3a`),yS(Q,Y.staggerHit),X.staggerFx(Q),X.hit(qx,!0,3),X.shake(Y.shakeStagger),$x()))}function yS(e,t){let n=$.round;n.ended||(n.hp[e]=Math.max(0,n.hp[e]-t),n.hp[e]<=0&&wS(`KO`,e))}function bS(){let e=$.round;!e||$.scene!==`round`||$.paused||e.ended||e.special||e.clash||e.meter[Q]<100||(e.meter[Q]=0,xS(Q))}function xS(e){let t=$.round,n=e===Q?$.player:$.rival;t.special={side:e},t.counts[e===Q?`pSpecial`:`rSpecial`]++,X.specialCharge(e),Z.crescendo(Y.specialSec),eS(n.special.name+`!`,n.colors.glow),e===Q?(hS(Y.specialSec*.4,()=>{X.specialImpact(Q,n.special.fx),$x(),X.shake(Y.shakeSpecial),yS(qx,Y.specialDmg),Z.boom()}),hS(Y.specialSec,()=>{t.special=null,X.shot(`wide`)})):hS(1,()=>{t.meter[Q]>=Y.clashMinMeter?(t.special=null,SS()):(X.specialImpact(qx,n.special.fx),$x(),X.shake(Y.shakeSpecial),yS(Q,Y.rivalSpecialDmg),Z.boom(),eS(`NO METER TO ANSWER!`,`#ff6a6a`,{small:!0}),hS(1.2,()=>{t.special=null,X.shot(`wide`)}))})}function SS(){let e=$.round;e.counts.clash++,e.clash={bal:0,until:e.t+Y.clashSec},X.clashStart(),eS(`BEAM CLASH! HIT NOTES + HOLD SPACE`,`#ffffff`,{small:!0})}function CS(){let e=$.round,t=e.clash;e.clash=null;let n=t.bal>=0?Q:qx;X.clashEnd(n),$x(Y.hitStopMs*1.5),Z.boom(1.2),eS(n===Q?`CLASH WON!`:`CLASH LOST!`,n===Q?$.player.colors.glow:`#ff4a3a`),yS(-n,Y.clashDmg)}function wS(e,t){let n=$.round;if(n.ended)return;n.ended=!0,n.koAt=n.t;let r;e===`KO`?(r=-t,n.koSide=t,eS(`K.O.!`,`#ffffff`,{stay:!0}),$x(180),X.shake(.6),Z.boom(1.4),Z.say(r===Q&&n.hp[Q]>=100?`flawless_victory`:`game_over`,.25)):(r=n.hp[Q]>=n.hp[qx]?Q:qx,n.koSide=-r,eS(`TIME!`,`#ffffff`,{stay:!0}),Z.say(`time`)),n.result={win:r===Q,kind:e},X.shot(`result`,!1,r),Z.stop(),setTimeout(()=>TS(),2200)}function TS(){let e=$.round;$.scene=`result`,Ux(`hud`).classList.add(`hidden`),Ux(`banner`).innerHTML=``,Wx.draw({visible:!1}),Z.say(e.result.win?`you_win`:`you_lose`,.3);let t=e.stats,n=Math.round(100*(t.perfect+t.good*.6)/Math.max(1,t.perfect+t.good+t.miss));tS(`<div class="res ${e.result.win?`win`:`lose`}">${e.result.win?`VICTORY`:`DEFEAT`}</div>
    <div class="stats">${e.result.kind===`KO`?`K.O.`:`TIME UP`} · ${$.player.name} vs ${$.rival.name} · ${su[$.arena].name}<br>PERFECT ${t.perfect} · GOOD ${t.good} · MISS ${t.miss} · MAX COMBO ${e.maxCombo} · ${n}%</div>
    ${rS([`AGAIN`,`CHOOSE BARD`,`TITLE`],e=>{e===0?($.arena=su[Hx.get(`arena`)]?Hx.get(`arena`):cu($.player,$.rival),fS()):e===1?lS():aS()})}
    <div class="pine">A GAME BY PINE</div>`,`dim`)}function ES(e){$.scene!==`round`||$.round.ended||($.paused=e,e?(Z.pause(),tS(`<div class="title2">PAUSED</div>${rS([`RESUME`,`RESTART`,`KEYS`,`QUIT TO TITLE`],e=>{e===0?ES(!1):e===1?($.paused=!1,Z.stop(),Z.resume(),fS()):e===2?oS(()=>{$.scene=`round`,ES(!0)}):($.paused=!1,Z.stop(),Z.resume(),aS())})}`,`dim`)):(Kx.innerHTML=``,$.menu=null,Z.resume()))}Gx.on((e,t)=>{if(e===`tune`)return Xx();if($.scene===`keys`){if(!t)return;e===`prev`&&($.keyIdx=($.keyIdx-1+$.keyRows.length)%$.keyRows.length,sS()),e===`next`&&($.keyIdx=($.keyIdx+1)%$.keyRows.length,sS()),e===`confirm`&&cS(),(e===`pause`||e===`back`)&&$.keysBack()}else{if($.scene===`round`&&!$.paused){if(e.startsWith(`lane`)){let n=+e[4];t?gS(n):Wx.held[n]=!1;return}return e===`special`&&t?bS():e===`pause`&&t?ES(!0):void 0}t&&($.scene===`select`?((e===`prev`||e===`lane0`)&&($.pickIdx=($.pickIdx+zx.length-1)%zx.length,uS(),Z.blip(520,.05,.06)),(e===`next`||e===`lane3`)&&($.pickIdx=($.pickIdx+1)%zx.length,uS(),Z.blip(520,.05,.06)),(e===`confirm`||e===`special`)&&dS(),(e===`pause`||e===`back`)&&aS()):$.scene===`vs`&&(e===`confirm`||e===`special`)?(clearTimeout($.vsTimer),pS()):$.menu&&(e===`prev`&&iS(-1),e===`next`&&iS(1),(e===`confirm`||e===`special`)&&(Z.resumeCtx(),$.menu.onPick($.menuIdx)),e===`pause`&&$.paused&&ES(!1)))}}),setInterval(()=>{let e=$.round;if(!$.autoplay||!e||$.scene!==`round`||$.paused||e.ended)return;let t=Z.time(Y.audioOffsetMs);for(let n of e.notes){if(n.t>t+.003)break;n.robotSkip||!n.judged&&t-n.t<Y.goodMs/1e3&&(e.t=t,gS(n.lane),setTimeout(()=>{Wx.held[n.lane]=!1},60))}},4);var DS=0,OS=performance.now();window.__bb.fps=0;var kS=performance.now();function AS(e){requestAnimationFrame(AS);let t=Math.min(.05,(e-kS)/1e3);kS=e,Gx.pollPad(),DS++,e-OS>1e3&&(window.__bb.fps=DS*1e3/(e-OS),DS=0,OS=e);let n=t;Qx>0&&(Qx-=t,n=0),$.paused&&(n=0);let r=$.round,i={};if(r&&($.scene===`round`||$.scene===`count`||$.scene===`result`)){$.scene===`round`&&!$.paused&&MS(r);let e=jS(r.t);Wx.draw({visible:$.scene!==`result`,t:r.t,fall:e,beat:r.beat,notes:r.notes,combo:r.combo,labels:[`lane0`,`lane1`,`lane2`,`lane3`].map(e=>Dx(Gx.keys[e]))});let t=r.t>0?r.t/r.beat%1:0;i={beat:Math.max(0,r.t/r.beat),clashOn:!!r.clash,beatPhase:t,lead:Math.max(-1,Math.min(1,(r.hp[qx]-r.hp[Q])/-30)),rise:{[Q]:r.special&&r.special.side===Q,[qx]:r.special&&r.special.side===qx},meters:{[Q]:r.meter[Q]/100,[qx]:r.meter[qx]/100},koSide:r.ended?r.koSide:0},r.clash&&X.clashSet(r.clash.bal),NS()}else i={beatPhase:e/500%1};X.root&&X.update(n,i),X.render(),Yx.update()}function jS(){return Y.fallSec}function MS(e){e.t=Z.time(Y.audioOffsetMs);let t=Math.max(0,e.t-e.lastT);e.lastT=e.t,$.autoplay&&e.meter[Q]>=100&&!e.special&&!e.clash&&e.meter[qx]<60&&bS(),$.autoplay&&e.clash&&(e.clash.bal+=Y.clashHoldPerSec*t);let n=Y.goodMs/1e3;for(let t of e.notes){if(t.t>e.t-n)break;t.judged||vS(t)}for(let t=e.events.length-1;t>=0;t--)e.t>=e.events[t].at&&e.events.splice(t,1)[0].fn();if(e.ended)return;e.clash?(Gx.held.special&&e.meter[Q]>0&&(e.clash.bal+=Y.clashHoldPerSec*t,e.meter[Q]=Math.max(0,e.meter[Q]-Y.clashHoldDrain*t)),e.clash.bal-=Y.clashRivalPerSec*t,(Math.abs(e.clash.bal)>=1||e.t>=e.clash.until)&&CS()):e.special||(e.meter[qx]=Math.min(100,e.meter[qx]+Y.rivalMeterPerSec*t),e.meter[qx]>=100&&e.t<e.len-6&&(e.meter[qx]=0,xS(qx)));let r=e.combo>=Y.layerAt3?3:e.combo>=Y.layerAt2?2:+(e.combo>=Y.layerAt1);r!==e.layer&&(r>e.layer&&X.roarFx(),e.layer=r),Z.layer=r,e.t>=e.len&&wS(`TIME`)}function NS(){let e=$.round;e&&(Ux(`hpL`).style.width=e.hp[Q]+`%`,Ux(`hpR`).style.width=e.hp[qx]+`%`,Ux(`hpL`).classList.toggle(`low`,e.hp[Q]<25),Ux(`hpR`).classList.toggle(`low`,e.hp[qx]<25),Ux(`mL`).style.width=e.meter[Q]+`%`,Ux(`mR`).style.width=e.meter[qx]+`%`,Ux(`mL`).classList.toggle(`full`,e.meter[Q]>=100),Ux(`mR`).classList.toggle(`full`,e.meter[qx]>=90),Ux(`timer`).textContent=Math.max(0,Math.ceil(e.len-Math.max(0,e.t))))}function PS(e){let t=Vx[e]||zx[0];X.buildLab(t,Y),$.scene=`lab`;let n=X.bards[-1].rig,r=t.moves.durations,i=[[`idle`,null,4],[`idle`,`attack`,.5,0],[`idle`,`attack`,.5,1],[`idle`,`attack`,.5,2],[`idle`,`attack`,.5,3],[`idle`,`hit`,.6],[`charge`,null,1.04],[`idle`,`impact`,r.impact+.2],[`clash`,null,1.2],[`victory`,null,1.6],[`ko`,null,1.4]],a=i.reduce((e,t)=>e+t[2],0);window.__bb.lab={total:a,pose(e,t,i,a,o=0){n.beat=o,n.ph=o%1;let s=10+a;n.pose(e,t?{name:t,start:10,dur:r[t]||.35,lane:i}:null,s),X.update(1e-4,{}),X.render()},reel(e){let t=0;for(let[o,s,c,l]of i){if(e<t+c||t+c>=a){e-t;let i=e*2;return n.beat=i,n.ph=i%1,n.t=100+e,n.state=o,n.stateStart=100+t,n.clip=s?{name:s,start:100+t,dur:r[s]||.35,lane:l||0}:null,n.apply(n.poseAt(n.t)),X.update(1e-4,{}),X.render(),o+(s?`:`+s:``)}t+=c}}},X.render()}(async()=>{if(await X.preload([...zx.map(e=>e.art),...Object.values(su).filter(e=>e.image).map(e=>e.image)]),await X.preloadRigs(zx),Z.ensure(),Hx.get(`lab`))return PS(Hx.get(`lab`));X.build(cu(zx[0],zx[1]),zx[0],zx[1],Y),X.shot(`vs`,!0),requestAnimationFrame(AS),Hx.get(`start`)===`select`?lS():aS()})();