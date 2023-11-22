import{r as Wa,j as qt,I as Ls}from"./index-5dc5a09b.js";import{B as Xa}from"./index.module-632e5402.js";import{C as Ya}from"./index-3189acef.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Ja=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},qi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,u=s+2<e.length,h=u?e[s+2]:0,c=i>>2,l=(i&3)<<4|a>>4;let f=(a&15)<<2|h>>6,g=h&63;u||(g=64,o||(f=64)),r.push(n[c],n[l],n[f],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ui(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ja(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const h=s<e.length?n[e.charAt(s)]:64;++s;const l=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||h==null||l==null)throw new Za;const f=i<<2|a>>4;if(r.push(f),h!==64){const g=a<<4&240|h>>2;if(r.push(g),l!==64){const D=h<<6&192|l;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Za extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tu=function(e){const t=Ui(e);return qi.encodeByteArray(t,!0)},cn=function(e){return tu(e).replace(/\./g,"")},eu=function(e){try{return qi.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=()=>nu().__FIREBASE_DEFAULTS__,su=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},iu=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&eu(e[1]);return t&&JSON.parse(t)},ji=()=>{try{return ru()||su()||iu()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ou=e=>{var t,n;return(n=(t=ji())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},au=e=>{const t=ou(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},$i=()=>{var e;return(e=ji())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[cn(JSON.stringify(n)),cn(JSON.stringify(o)),a].join(".")}function cu(){try{return typeof indexedDB=="object"}catch{return!1}}function lu(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="FirebaseError";class ie extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=du,Object.setPrototypeOf(this,ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zi.prototype.create)}}class zi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?fu(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ie(s,a,r)}}function fu(e,t){return e.replace(gu,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const gu=/\{\$([^}]+)}/g;function dr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Fs(i)&&Fs(o)){if(!dr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Fs(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(e){return e&&e._delegate?e._delegate:e}class Re{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new uu;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(yu(t))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Vt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Vt){return this.instances.has(t)}getOptions(t=Vt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_u(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Vt){return this.component?this.component.multipleInstances?t:Vt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _u(e){return e===Vt?void 0:e}function yu(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new pu(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var A;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(A||(A={}));const vu={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},Tu=A.INFO,Iu={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},wu=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Iu[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Hi{constructor(t){this.name=t,this._logLevel=Tu,this._logHandler=wu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in A))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?vu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...t),this._logHandler(this,A.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...t),this._logHandler(this,A.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,A.INFO,...t),this._logHandler(this,A.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,A.WARN,...t),this._logHandler(this,A.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...t),this._logHandler(this,A.ERROR,...t)}}const Au=(e,t)=>t.some(n=>e instanceof n);let Bs,Us;function Ru(){return Bs||(Bs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Su(){return Us||(Us=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gi=new WeakMap,fr=new WeakMap,Ki=new WeakMap,Wn=new WeakMap,$r=new WeakMap;function Cu(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(It(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Gi.set(n,e)}).catch(()=>{}),$r.set(t,e),t}function Pu(e){if(fr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});fr.set(e,t)}let gr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return fr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ki.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Vu(e){gr=e(gr)}function Du(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Xn(this),t,...n);return Ki.set(r,t.sort?t.sort():[t]),It(r)}:Su().includes(e)?function(...t){return e.apply(Xn(this),t),It(Gi.get(this))}:function(...t){return It(e.apply(Xn(this),t))}}function Nu(e){return typeof e=="function"?Du(e):(e instanceof IDBTransaction&&Pu(e),Au(e,Ru())?new Proxy(e,gr):e)}function It(e){if(e instanceof IDBRequest)return Cu(e);if(Wn.has(e))return Wn.get(e);const t=Nu(e);return t!==e&&(Wn.set(e,t),$r.set(t,e)),t}const Xn=e=>$r.get(e);function ku(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=It(o);return r&&o.addEventListener("upgradeneeded",u=>{r(It(o.result),u.oldVersion,u.newVersion,It(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const bu=["get","getKey","getAll","getAllKeys","count"],xu=["put","add","delete","clear"],Yn=new Map;function qs(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Yn.get(t))return Yn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=xu.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||bu.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),s&&u.done]))[0]};return Yn.set(t,i),i}Vu(e=>({...e,get:(t,n,r)=>qs(t,n)||e.get(t,n,r),has:(t,n)=>!!qs(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Mu(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Mu(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const mr="@firebase/app",js="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new Hi("@firebase/app"),Lu="@firebase/app-compat",Fu="@firebase/analytics-compat",Bu="@firebase/analytics",Uu="@firebase/app-check-compat",qu="@firebase/app-check",ju="@firebase/auth",$u="@firebase/auth-compat",zu="@firebase/database",Hu="@firebase/database-compat",Gu="@firebase/functions",Ku="@firebase/functions-compat",Qu="@firebase/installations",Wu="@firebase/installations-compat",Xu="@firebase/messaging",Yu="@firebase/messaging-compat",Ju="@firebase/performance",Zu="@firebase/performance-compat",th="@firebase/remote-config",eh="@firebase/remote-config-compat",nh="@firebase/storage",rh="@firebase/storage-compat",sh="@firebase/firestore",ih="@firebase/firestore-compat",oh="firebase",ah="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="[DEFAULT]",uh={[mr]:"fire-core",[Lu]:"fire-core-compat",[Bu]:"fire-analytics",[Fu]:"fire-analytics-compat",[qu]:"fire-app-check",[Uu]:"fire-app-check-compat",[ju]:"fire-auth",[$u]:"fire-auth-compat",[zu]:"fire-rtdb",[Hu]:"fire-rtdb-compat",[Gu]:"fire-fn",[Ku]:"fire-fn-compat",[Qu]:"fire-iid",[Wu]:"fire-iid-compat",[Xu]:"fire-fcm",[Yu]:"fire-fcm-compat",[Ju]:"fire-perf",[Zu]:"fire-perf-compat",[th]:"fire-rc",[eh]:"fire-rc-compat",[nh]:"fire-gcs",[rh]:"fire-gcs-compat",[sh]:"fire-fst",[ih]:"fire-fst-compat","fire-js":"fire-js",[oh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new Map,_r=new Map;function hh(e,t){try{e.container.addComponent(t)}catch(n){Mt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function dn(e){const t=e.name;if(_r.has(t))return Mt.debug(`There were multiple attempts to register component ${t}.`),!1;_r.set(t,e);for(const n of ln.values())hh(n,e);return!0}function ch(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wt=new zi("app","Firebase",lh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Re("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=ah;function Qi(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:pr,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw wt.create("bad-app-name",{appName:String(s)});if(n||(n=$i()),!n)throw wt.create("no-options");const i=ln.get(s);if(i){if(dr(n,i.options)&&dr(r,i.config))return i;throw wt.create("duplicate-app",{appName:s})}const o=new Eu(s);for(const u of _r.values())o.addComponent(u);const a=new dh(n,r,o);return ln.set(s,a),a}function gh(e=pr){const t=ln.get(e);if(!t&&e===pr&&$i())return Qi();if(!t)throw wt.create("no-app",{appName:e});return t}function Kt(e,t,n){var r;let s=(r=uh[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Mt.warn(a.join(" "));return}dn(new Re(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh="firebase-heartbeat-database",ph=1,Se="firebase-heartbeat-store";let Jn=null;function Wi(){return Jn||(Jn=ku(mh,ph,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Se)}}}).catch(e=>{throw wt.create("idb-open",{originalErrorMessage:e.message})})),Jn}async function _h(e){try{return await(await Wi()).transaction(Se).objectStore(Se).get(Xi(e))}catch(t){if(t instanceof ie)Mt.warn(t.message);else{const n=wt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Mt.warn(n.message)}}}async function $s(e,t){try{const r=(await Wi()).transaction(Se,"readwrite");await r.objectStore(Se).put(t,Xi(e)),await r.done}catch(n){if(n instanceof ie)Mt.warn(n.message);else{const r=wt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mt.warn(r.message)}}}function Xi(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=1024,Eh=30*24*60*60*1e3;class vh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ih(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zs();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=Eh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zs(),{heartbeatsToSend:r,unsentEntries:s}=Th(this._heartbeatsCache.heartbeats),i=cn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function zs(){return new Date().toISOString().substring(0,10)}function Th(e,t=yh){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Hs(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Hs(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ih{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cu()?lu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _h(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $s(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $s(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Hs(e){return cn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(e){dn(new Re("platform-logger",t=>new Ou(t),"PRIVATE")),dn(new Re("heartbeat",t=>new vh(t),"PRIVATE")),Kt(mr,js,e),Kt(mr,js,"esm2017"),Kt("fire-js","")}wh("");var Ah=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p,zr=zr||{},v=Ah||self;function Rn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ue(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Rh(e){return Object.prototype.hasOwnProperty.call(e,Zn)&&e[Zn]||(e[Zn]=++Sh)}var Zn="closure_uid_"+(1e9*Math.random()>>>0),Sh=0;function Ch(e,t,n){return e.call.apply(e.bind,arguments)}function Ph(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function X(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?X=Ch:X=Ph,X.apply(null,arguments)}function Ze(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function j(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Ct(){this.s=this.s,this.o=this.o}var Vh=0;Ct.prototype.s=!1;Ct.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Vh!=0)&&Rh(this)};Ct.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Yi=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Hr(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Gs(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Rn(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function Y(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};var Dh=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{v.addEventListener("test",()=>{},t),v.removeEventListener("test",()=>{},t)}catch{}return e}();function Ce(e){return/^[\s\xa0]*$/.test(e)}function Sn(){var e=v.navigator;return e&&(e=e.userAgent)?e:""}function ot(e){return Sn().indexOf(e)!=-1}function Gr(e){return Gr[" "](e),e}Gr[" "]=function(){};function Nh(e,t){var n=wc;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var kh=ot("Opera"),Jt=ot("Trident")||ot("MSIE"),Ji=ot("Edge"),yr=Ji||Jt,Zi=ot("Gecko")&&!(Sn().toLowerCase().indexOf("webkit")!=-1&&!ot("Edge"))&&!(ot("Trident")||ot("MSIE"))&&!ot("Edge"),bh=Sn().toLowerCase().indexOf("webkit")!=-1&&!ot("Edge");function to(){var e=v.document;return e?e.documentMode:void 0}var Er;t:{var tr="",er=function(){var e=Sn();if(Zi)return/rv:([^\);]+)(\)|;)/.exec(e);if(Ji)return/Edge\/([\d\.]+)/.exec(e);if(Jt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(bh)return/WebKit\/(\S+)/.exec(e);if(kh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(er&&(tr=er?er[1]:""),Jt){var nr=to();if(nr!=null&&nr>parseFloat(tr)){Er=String(nr);break t}}Er=tr}var vr;if(v.document&&Jt){var Ks=to();vr=Ks||parseInt(Er,10)||void 0}else vr=void 0;var xh=vr;function Pe(e,t){if(Y.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Zi){t:{try{Gr(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Oh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Pe.$.h.call(this)}}j(Pe,Y);var Oh={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var qe="closure_listenable_"+(1e6*Math.random()|0),Mh=0;function Lh(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++Mh,this.fa=this.ia=!1}function Cn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Kr(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Fh(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function eo(e){const t={};for(const n in e)t[n]=e[n];return t}const Qs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function no(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<Qs.length;i++)n=Qs[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Pn(e){this.src=e,this.g={},this.h=0}Pn.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Ir(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Lh(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function Tr(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=Yi(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Cn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ir(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var Qr="closure_lm_"+(1e6*Math.random()|0),rr={};function ro(e,t,n,r,s){if(r&&r.once)return io(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)ro(e,t[i],n,r,s);return null}return n=Yr(n),e&&e[qe]?e.O(t,n,Ue(r)?!!r.capture:!!r,s):so(e,t,n,!1,r,s)}function so(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=Ue(s)?!!s.capture:!!s,a=Xr(e);if(a||(e[Qr]=a=new Pn(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=Bh(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Dh||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(ao(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Bh(){function e(n){return t.call(e.src,e.listener,n)}const t=Uh;return e}function io(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)io(e,t[i],n,r,s);return null}return n=Yr(n),e&&e[qe]?e.P(t,n,Ue(r)?!!r.capture:!!r,s):so(e,t,n,!0,r,s)}function oo(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)oo(e,t[i],n,r,s);else r=Ue(r)?!!r.capture:!!r,n=Yr(n),e&&e[qe]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Ir(i,n,r,s),-1<n&&(Cn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Xr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ir(t,n,r,s)),(n=-1<e?t[e]:null)&&Wr(n))}function Wr(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[qe])Tr(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ao(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Xr(t))?(Tr(n,e),n.h==0&&(n.src=null,t[Qr]=null)):Cn(e)}}}function ao(e){return e in rr?rr[e]:rr[e]="on"+e}function Uh(e,t){if(e.fa)e=!0;else{t=new Pe(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Wr(e),e=n.call(r,t)}return e}function Xr(e){return e=e[Qr],e instanceof Pn?e:null}var sr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yr(e){return typeof e=="function"?e:(e[sr]||(e[sr]=function(t){return e.handleEvent(t)}),e[sr])}function q(){Ct.call(this),this.i=new Pn(this),this.S=this,this.J=null}j(q,Ct);q.prototype[qe]=!0;q.prototype.removeEventListener=function(e,t,n,r){oo(this,e,t,n,r)};function H(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Y(t,e);else if(t instanceof Y)t.target=t.target||e;else{var s=t;t=new Y(r,e),no(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=tn(o,r,!0,t)&&s}if(o=t.g=e,s=tn(o,r,!0,t)&&s,s=tn(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=tn(o,r,!1,t)&&s}q.prototype.N=function(){if(q.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Cn(n[r]);delete e.g[t],e.h--}}this.J=null};q.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};q.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function tn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&Tr(e.i,o),s=a.call(u,r)!==!1&&s}}return s&&!r.defaultPrevented}var Jr=v.JSON.stringify;class qh{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function jh(){var e=Zr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class $h{constructor(){this.h=this.g=null}add(t,n){const r=uo.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var uo=new qh(()=>new zh,e=>e.reset());class zh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Hh(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Gh(e){v.setTimeout(()=>{throw e},0)}let Ve,De=!1,Zr=new $h,ho=()=>{const e=v.Promise.resolve(void 0);Ve=()=>{e.then(Kh)}};var Kh=()=>{for(var e;e=jh();){try{e.h.call(e.g)}catch(n){Gh(n)}var t=uo;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}De=!1};function Vn(e,t){q.call(this),this.h=e||1,this.g=t||v,this.j=X(this.qb,this),this.l=Date.now()}j(Vn,q);p=Vn.prototype;p.ga=!1;p.T=null;p.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),H(this,"tick"),this.ga&&(ts(this),this.start()))}};p.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ts(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}p.N=function(){Vn.$.N.call(this),ts(this),delete this.g};function es(e,t,n){if(typeof e=="function")n&&(e=X(e,n));else if(e&&typeof e.handleEvent=="function")e=X(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:v.setTimeout(e,t||0)}function co(e){e.g=es(()=>{e.g=null,e.i&&(e.i=!1,co(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Qh extends Ct{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:co(this)}N(){super.N(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ne(e){Ct.call(this),this.h=e,this.g={}}j(Ne,Ct);var Ws=[];function lo(e,t,n,r){Array.isArray(n)||(n&&(Ws[0]=n.toString()),n=Ws);for(var s=0;s<n.length;s++){var i=ro(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function fo(e){Kr(e.g,function(t,n){this.g.hasOwnProperty(n)&&Wr(t)},e),e.g={}}Ne.prototype.N=function(){Ne.$.N.call(this),fo(this)};Ne.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Dn(){this.g=!0}Dn.prototype.Ea=function(){this.g=!1};function Wh(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var h=a[u].split("=");if(1<h.length){var c=h[0];h=h[1];var l=c.split("_");o=2<=l.length&&l[1]=="type"?o+(c+"="+h+"&"):o+(c+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function Xh(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function Gt(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Jh(e,n)+(r?" "+r:"")})}function Yh(e,t){e.info(function(){return"TIMEOUT: "+t})}Dn.prototype.info=function(){};function Jh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Jr(n)}catch{return t}}var Ut={},Xs=null;function Nn(){return Xs=Xs||new q}Ut.Ta="serverreachability";function go(e){Y.call(this,Ut.Ta,e)}j(go,Y);function ke(e){const t=Nn();H(t,new go(t))}Ut.STAT_EVENT="statevent";function mo(e,t){Y.call(this,Ut.STAT_EVENT,e),this.stat=t}j(mo,Y);function tt(e){const t=Nn();H(t,new mo(t,e))}Ut.Ua="timingevent";function po(e,t){Y.call(this,Ut.Ua,e),this.size=t}j(po,Y);function je(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return v.setTimeout(function(){e()},t)}var kn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},_o={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ns(){}ns.prototype.h=null;function Ys(e){return e.h||(e.h=e.i())}function yo(){}var $e={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function rs(){Y.call(this,"d")}j(rs,Y);function ss(){Y.call(this,"c")}j(ss,Y);var wr;function bn(){}j(bn,ns);bn.prototype.g=function(){return new XMLHttpRequest};bn.prototype.i=function(){return{}};wr=new bn;function ze(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Ne(this),this.P=Zh,e=yr?125:void 0,this.V=new Vn(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Eo}function Eo(){this.i=null,this.g="",this.h=!1}var Zh=45e3,Ar={},fn={};p=ze.prototype;p.setTimeout=function(e){this.P=e};function Rr(e,t,n){e.L=1,e.v=On(yt(t)),e.s=n,e.S=!0,vo(e,null)}function vo(e,t){e.G=Date.now(),He(e),e.A=yt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Po(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Eo,e.g=Wo(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Qh(X(e.Pa,e,e.g),e.O)),lo(e.U,e.g,"readystatechange",e.nb),t=e.I?eo(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),ke(),Wh(e.j,e.u,e.A,e.m,e.W,e.s)}p.nb=function(e){e=e.target;const t=this.M;t&&ut(e)==3?t.l():this.Pa(e)};p.Pa=function(e){try{if(e==this.g)t:{const c=ut(this.g);var t=this.g.Ia();const l=this.g.da();if(!(3>c)&&(c!=3||yr||this.g&&(this.h.h||this.g.ja()||ei(this.g)))){this.J||c!=4||t==7||(t==8||0>=l?ke(3):ke(2)),xn(this);var n=this.g.da();this.ca=n;e:if(To(this)){var r=ei(this.g);e="";var s=r.length,i=ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dt(this),ve(this);var o="";break e}this.h.i=new v.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Xh(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ce(a)){var h=a;break e}}h=null}if(n=h)Gt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sr(this,n);else{this.i=!1,this.o=3,tt(12),Dt(this),ve(this);break t}}this.S?(Io(this,c,o),yr&&this.i&&c==3&&(lo(this.U,this.V,"tick",this.mb),this.V.start())):(Gt(this.j,this.m,o,null),Sr(this,o)),c==4&&Dt(this),this.i&&!this.J&&(c==4?Ho(this.l,this):(this.i=!1,He(this)))}else vc(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),Dt(this),ve(this)}}}catch{}finally{}};function To(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Io(e,t,n){let r=!0,s;for(;!e.J&&e.C<n.length;)if(s=tc(e,n),s==fn){t==4&&(e.o=4,tt(14),r=!1),Gt(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Ar){e.o=4,tt(15),Gt(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Gt(e.j,e.m,s,null),Sr(e,s);To(e)&&s!=fn&&s!=Ar&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,tt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),cs(t),t.M=!0,tt(11))):(Gt(e.j,e.m,n,"[Invalid Chunked Response]"),Dt(e),ve(e))}p.mb=function(){if(this.g){var e=ut(this.g),t=this.g.ja();this.C<t.length&&(xn(this),Io(this,e,t),this.i&&e!=4&&He(this))}};function tc(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?fn:(n=Number(t.substring(n,r)),isNaN(n)?Ar:(r+=1,r+n>t.length?fn:(t=t.slice(r,r+n),e.C=r+n,t)))}p.cancel=function(){this.J=!0,Dt(this)};function He(e){e.Y=Date.now()+e.P,wo(e,e.P)}function wo(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=je(X(e.lb,e),t)}function xn(e){e.B&&(v.clearTimeout(e.B),e.B=null)}p.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Yh(this.j,this.A),this.L!=2&&(ke(),tt(17)),Dt(this),this.o=2,ve(this)):wo(this,this.Y-e)};function ve(e){e.l.H==0||e.J||Ho(e.l,e)}function Dt(e){xn(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,ts(e.V),fo(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Sr(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Cr(n.i,e))){if(!e.K&&Cr(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)pn(n),Fn(n);else break t;hs(n),tt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=je(X(n.ib,n),6e3));if(1>=No(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Nt(n,11)}else if((e.K||n.g==e)&&pn(n),!Ce(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let h=s[t];if(n.V=h[0],h=h[1],n.H==2)if(h[0]=="c"){n.K=h[1],n.pa=h[2];const c=h[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const l=h[4];l!=null&&(n.Ga=l,n.l.info("SVER="+n.Ga));const f=h[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const D=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(D){var i=r.i;i.g||D.indexOf("spdy")==-1&&D.indexOf("quic")==-1&&D.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(is(i,i.h),i.h=null))}if(r.F){const N=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;N&&(r.Da=N,k(r.I,r.F,N))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Qo(r,r.J?r.pa:null,r.Y),o.K){ko(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.B&&(xn(a),He(a)),r.g=o}else $o(r);0<n.j.length&&Bn(n)}else h[0]!="stop"&&h[0]!="close"||Nt(n,7);else n.H==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?Nt(n,7):us(n):h[0]!="noop"&&n.h&&n.h.Aa(h),n.A=0)}}ke(4)}catch{}}function ec(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Rn(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function nc(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Rn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Ao(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Rn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=nc(e),r=ec(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var Ro=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rc(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function bt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof bt){this.h=e.h,gn(this,e.j),this.s=e.s,this.g=e.g,mn(this,e.m),this.l=e.l;var t=e.i,n=new be;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Js(this,n),this.o=e.o}else e&&(t=String(e).match(Ro))?(this.h=!1,gn(this,t[1]||"",!0),this.s=pe(t[2]||""),this.g=pe(t[3]||"",!0),mn(this,t[4]),this.l=pe(t[5]||"",!0),Js(this,t[6]||"",!0),this.o=pe(t[7]||"")):(this.h=!1,this.i=new be(null,this.h))}bt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(_e(t,Zs,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(_e(t,Zs,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(_e(n,n.charAt(0)=="/"?oc:ic,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",_e(n,uc)),e.join("")};function yt(e){return new bt(e)}function gn(e,t,n){e.j=n?pe(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function mn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Js(e,t,n){t instanceof be?(e.i=t,hc(e.i,e.h)):(n||(t=_e(t,ac)),e.i=new be(t,e.h))}function k(e,t,n){e.i.set(t,n)}function On(e){return k(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function pe(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function _e(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,sc),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function sc(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Zs=/[#\/\?@]/g,ic=/[#\?:]/g,oc=/[#\?]/g,ac=/[#\?@]/g,uc=/#/g;function be(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Pt(e){e.g||(e.g=new Map,e.h=0,e.i&&rc(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}p=be.prototype;p.add=function(e,t){Pt(this),this.i=null,e=oe(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function So(e,t){Pt(e),t=oe(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Co(e,t){return Pt(e),t=oe(e,t),e.g.has(t)}p.forEach=function(e,t){Pt(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};p.ta=function(){Pt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};p.Z=function(e){Pt(this);let t=[];if(typeof e=="string")Co(this,e)&&(t=t.concat(this.g.get(oe(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};p.set=function(e,t){return Pt(this),this.i=null,e=oe(this,e),Co(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};p.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Po(e,t,n){So(e,t),0<n.length&&(e.i=null,e.g.set(oe(e,t),Hr(n)),e.h+=n.length)}p.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function oe(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function hc(e,t){t&&!e.j&&(Pt(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(So(this,r),Po(this,s,n))},e)),e.j=t}var cc=class{constructor(e,t){this.g=e,this.map=t}};function Vo(e){this.l=e||lc,v.PerformanceNavigationTiming?(e=v.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(v.g&&v.g.Ka&&v.g.Ka()&&v.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var lc=10;function Do(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function No(e){return e.h?1:e.g?e.g.size:0}function Cr(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function is(e,t){e.g?e.g.add(t):e.h=t}function ko(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Vo.prototype.cancel=function(){if(this.i=bo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function bo(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Hr(e.i)}var dc=class{stringify(e){return v.JSON.stringify(e,void 0)}parse(e){return v.JSON.parse(e,void 0)}};function fc(){this.g=new dc}function gc(e,t,n){const r=n||"";try{Ao(e,function(s,i){let o=s;Ue(s)&&(o=Jr(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function mc(e,t){const n=new Dn;if(v.Image){const r=new Image;r.onload=Ze(en,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Ze(en,n,r,"TestLoadImage: error",!1,t),r.onabort=Ze(en,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Ze(en,n,r,"TestLoadImage: timeout",!1,t),v.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function en(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function Ge(e){this.l=e.ec||null,this.j=e.ob||!1}j(Ge,ns);Ge.prototype.g=function(){return new Mn(this.l,this.j)};Ge.prototype.i=function(e){return function(){return e}}({});function Mn(e,t){q.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=os,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}j(Mn,q);var os=0;p=Mn.prototype;p.open=function(e,t){if(this.readyState!=os)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,xe(this)};p.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||v).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ke(this)),this.readyState=os};p.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,xe(this)),this.g&&(this.readyState=3,xe(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof v.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xo(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function xo(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}p.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ke(this):xe(this),this.readyState==3&&xo(this)}};p.Za=function(e){this.g&&(this.response=this.responseText=e,Ke(this))};p.Ya=function(e){this.g&&(this.response=e,Ke(this))};p.ka=function(){this.g&&Ke(this)};function Ke(e){e.readyState=4,e.l=null,e.j=null,e.A=null,xe(e)}p.setRequestHeader=function(e,t){this.v.append(e,t)};p.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};p.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function xe(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Mn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var pc=v.JSON.parse;function x(e){q.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Oo,this.L=this.M=!1}j(x,q);var Oo="",_c=/^https?$/i,yc=["POST","PUT"];p=x.prototype;p.Oa=function(e){this.M=e};p.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():wr.g(),this.C=this.u?Ys(this.u):Ys(wr),this.g.onreadystatechange=X(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){ti(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=v.FormData&&e instanceof v.FormData,!(0<=Yi(yc,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Fo(this),0<this.B&&((this.L=Ec(this.g))?(this.g.timeout=this.B,this.g.ontimeout=X(this.ua,this)):this.A=es(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){ti(this,i)}};function Ec(e){return Jt&&typeof e.timeout=="number"&&e.ontimeout!==void 0}p.ua=function(){typeof zr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,H(this,"timeout"),this.abort(8))};function ti(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Mo(e),Ln(e)}function Mo(e){e.F||(e.F=!0,H(e,"complete"),H(e,"error"))}p.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,H(this,"complete"),H(this,"abort"),Ln(this))};p.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ln(this,!0)),x.$.N.call(this)};p.La=function(){this.s||(this.G||this.v||this.l?Lo(this):this.kb())};p.kb=function(){Lo(this)};function Lo(e){if(e.h&&typeof zr<"u"&&(!e.C[1]||ut(e)!=4||e.da()!=2)){if(e.v&&ut(e)==4)es(e.La,0,e);else if(H(e,"readystatechange"),ut(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(Ro)[1]||null;!s&&v.self&&v.self.location&&(s=v.self.location.protocol.slice(0,-1)),r=!_c.test(s?s.toLowerCase():"")}n=r}if(n)H(e,"complete"),H(e,"success");else{e.m=6;try{var i=2<ut(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Mo(e)}}finally{Ln(e)}}}}function Ln(e,t){if(e.g){Fo(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||H(e,"ready");try{n.onreadystatechange=r}catch{}}}function Fo(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(v.clearTimeout(e.A),e.A=null)}p.isActive=function(){return!!this.g};function ut(e){return e.g?e.g.readyState:0}p.da=function(){try{return 2<ut(this)?this.g.status:-1}catch{return-1}};p.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};p.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),pc(t)}};function ei(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Oo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function vc(e){const t={};e=(e.g&&2<=ut(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Ce(e[r]))continue;var n=Hh(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}Fh(t,function(r){return r.join(", ")})}p.Ia=function(){return this.m};p.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Bo(e){let t="";return Kr(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function as(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Bo(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):k(e,t,n))}function fe(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Uo(e){this.Ga=0,this.j=[],this.l=new Dn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=fe("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=fe("baseRetryDelayMs",5e3,e),this.hb=fe("retryDelaySeedMs",1e4,e),this.eb=fe("forwardChannelMaxRetries",2,e),this.xa=fe("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Vo(e&&e.concurrentRequestLimit),this.Ja=new fc,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}p=Uo.prototype;p.ra=8;p.H=1;function us(e){if(qo(e),e.H==3){var t=e.W++,n=yt(e.I);if(k(n,"SID",e.K),k(n,"RID",t),k(n,"TYPE","terminate"),Qe(e,n),t=new ze(e,e.l,t),t.L=2,t.v=On(yt(n)),n=!1,v.navigator&&v.navigator.sendBeacon)try{n=v.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&v.Image&&(new Image().src=t.v,n=!0),n||(t.g=Wo(t.l,null),t.g.ha(t.v)),t.G=Date.now(),He(t)}Ko(e)}function Fn(e){e.g&&(cs(e),e.g.cancel(),e.g=null)}function qo(e){Fn(e),e.u&&(v.clearTimeout(e.u),e.u=null),pn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&v.clearTimeout(e.m),e.m=null)}function Bn(e){if(!Do(e.i)&&!e.m){e.m=!0;var t=e.Na;Ve||ho(),De||(Ve(),De=!0),Zr.add(t,e),e.C=0}}function Tc(e,t){return No(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=je(X(e.Na,e,t),Go(e,e.C)),e.C++,!0)}p.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new ze(this,this.l,e);let i=this.s;if(this.U&&(i?(i=eo(i),no(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=jo(this,s,t),n=yt(this.I),k(n,"RID",e),k(n,"CVER",22),this.F&&k(n,"X-HTTP-Session-Id",this.F),Qe(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Bo(i)))+"&"+t:this.o&&as(n,this.o,i)),is(this.i,s),this.bb&&k(n,"TYPE","init"),this.P?(k(n,"$req",t),k(n,"SID","null"),s.aa=!0,Rr(s,n,null)):Rr(s,n,t),this.H=2}}else this.H==3&&(e?ni(this,e):this.j.length==0||Do(this.i)||ni(this))};function ni(e,t){var n;t?n=t.m:n=e.W++;const r=yt(e.I);k(r,"SID",e.K),k(r,"RID",n),k(r,"AID",e.V),Qe(e,r),e.o&&e.s&&as(r,e.o,e.s),n=new ze(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=jo(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),is(e.i,n),Rr(n,r,t)}function Qe(e,t){e.na&&Kr(e.na,function(n,r){k(t,r,n)}),e.h&&Ao({},function(n,r){k(t,r,n)})}function jo(e,t,n){n=Math.min(e.j.length,n);var r=e.h?X(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<n;u++){let h=s[u].g;const c=s[u].map;if(h-=i,0>h)i=Math.max(0,s[u].g-100),a=!1;else try{gc(c,o,"req"+h+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function $o(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ve||ho(),De||(Ve(),De=!0),Zr.add(t,e),e.A=0}}function hs(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=je(X(e.Ma,e),Go(e,e.A)),e.A++,!0)}p.Ma=function(){if(this.u=null,zo(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=je(X(this.jb,this),e)}};p.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,tt(10),Fn(this),zo(this))};function cs(e){e.B!=null&&(v.clearTimeout(e.B),e.B=null)}function zo(e){e.g=new ze(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=yt(e.wa);k(t,"RID","rpc"),k(t,"SID",e.K),k(t,"AID",e.V),k(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&k(t,"TO",e.qa),k(t,"TYPE","xmlhttp"),Qe(e,t),e.o&&e.s&&as(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=On(yt(t)),n.s=null,n.S=!0,vo(n,e)}p.ib=function(){this.v!=null&&(this.v=null,Fn(this),hs(this),tt(19))};function pn(e){e.v!=null&&(v.clearTimeout(e.v),e.v=null)}function Ho(e,t){var n=null;if(e.g==t){pn(e),cs(e),e.g=null;var r=2}else if(Cr(e.i,t))n=t.F,ko(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;r=Nn(),H(r,new po(r,n)),Bn(e)}else $o(e);else if(s=t.o,s==3||s==0&&0<t.ca||!(r==1&&Tc(e,t)||r==2&&hs(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Nt(e,5);break;case 4:Nt(e,10);break;case 3:Nt(e,6);break;default:Nt(e,2)}}}function Go(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Nt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=X(e.pb,e);n||(n=new bt("//www.google.com/images/cleardot.gif"),v.location&&v.location.protocol=="http"||gn(n,"https"),On(n)),mc(n.toString(),r)}else tt(2);e.H=0,e.h&&e.h.za(t),Ko(e),qo(e)}p.pb=function(e){e?(this.l.info("Successfully pinged google.com"),tt(2)):(this.l.info("Failed to ping google.com"),tt(1))};function Ko(e){if(e.H=0,e.ma=[],e.h){const t=bo(e.i);(t.length!=0||e.j.length!=0)&&(Gs(e.ma,t),Gs(e.ma,e.j),e.i.i.length=0,Hr(e.j),e.j.length=0),e.h.ya()}}function Qo(e,t,n){var r=n instanceof bt?yt(n):new bt(n);if(r.g!="")t&&(r.g=t+"."+r.g),mn(r,r.m);else{var s=v.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new bt(null);r&&gn(i,r),t&&(i.g=t),s&&mn(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&k(r,n,t),k(r,"VER",e.ra),Qe(e,r),r}function Wo(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new x(new Ge({ob:!0})):new x(e.va),t.Oa(e.J),t}p.isActive=function(){return!!this.h&&this.h.isActive(this)};function Xo(){}p=Xo.prototype;p.Ba=function(){};p.Aa=function(){};p.za=function(){};p.ya=function(){};p.isActive=function(){return!0};p.Va=function(){};function _n(){if(Jt&&!(10<=Number(xh)))throw Error("Environmental error: no available transport.")}_n.prototype.g=function(e,t){return new rt(e,t)};function rt(e,t){q.call(this),this.g=new Uo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Ce(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ce(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ae(this)}j(rt,q);rt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;tt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Qo(e,null,e.Y),Bn(e)};rt.prototype.close=function(){us(this.g)};rt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Jr(e),e=n);t.j.push(new cc(t.fb++,e)),t.H==3&&Bn(t)};rt.prototype.N=function(){this.g.h=null,delete this.j,us(this.g),delete this.g,rt.$.N.call(this)};function Yo(e){rs.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}j(Yo,rs);function Jo(){ss.call(this),this.status=1}j(Jo,ss);function ae(e){this.g=e}j(ae,Xo);ae.prototype.Ba=function(){H(this.g,"a")};ae.prototype.Aa=function(e){H(this.g,new Yo(e))};ae.prototype.za=function(e){H(this.g,new Jo)};ae.prototype.ya=function(){H(this.g,"b")};function Ic(){this.blockSize=-1}function it(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}j(it,Ic);it.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ir(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}it.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)ir(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){ir(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){ir(this,r),s=0;break}}this.h=s,this.i+=t};it.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function V(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var wc={};function ls(e){return-128<=e&&128>e?Nh(e,function(t){return new V([t|0],0>t?-1:0)}):new V([e|0],0>e?-1:0)}function ht(e){if(isNaN(e)||!isFinite(e))return Qt;if(0>e)return z(ht(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Pr;return new V(t,0)}function Zo(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return z(Zo(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ht(Math.pow(t,8)),r=Qt,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=ht(Math.pow(t,i)),r=r.R(i).add(ht(o))):(r=r.R(n),r=r.add(ht(o)))}return r}var Pr=4294967296,Qt=ls(0),Vr=ls(1),ri=ls(16777216);p=V.prototype;p.ea=function(){if(st(this))return-z(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Pr+r)*t,t*=Pr}return e};p.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(pt(this))return"0";if(st(this))return"-"+z(this).toString(e);for(var t=ht(Math.pow(e,6)),n=this,r="";;){var s=En(n,t).g;n=yn(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,pt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};p.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function pt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function st(e){return e.h==-1}p.X=function(e){return e=yn(this,e),st(e)?-1:pt(e)?0:1};function z(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new V(n,~e.h).add(Vr)}p.abs=function(){return st(this)?z(this):this};p.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new V(n,n[n.length-1]&-2147483648?-1:0)};function yn(e,t){return e.add(z(t))}p.R=function(e){if(pt(this)||pt(e))return Qt;if(st(this))return st(e)?z(this).R(z(e)):z(z(this).R(e));if(st(e))return z(this.R(z(e)));if(0>this.X(ri)&&0>e.X(ri))return ht(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,u=e.D(s)&65535;n[2*r+2*s]+=o*u,nn(n,2*r+2*s),n[2*r+2*s+1]+=i*u,nn(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,nn(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,nn(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new V(n,0)};function nn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ge(e,t){this.g=e,this.h=t}function En(e,t){if(pt(t))throw Error("division by zero");if(pt(e))return new ge(Qt,Qt);if(st(e))return t=En(z(e),t),new ge(z(t.g),z(t.h));if(st(t))return t=En(e,z(t)),new ge(z(t.g),t.h);if(30<e.g.length){if(st(e)||st(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Vr,r=t;0>=r.X(e);)n=si(n),r=si(r);var s=jt(n,1),i=jt(r,1);for(r=jt(r,2),n=jt(n,2);!pt(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=jt(r,1),n=jt(n,1)}return t=yn(e,s.R(t)),new ge(s,t)}for(s=Qt;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=ht(n),o=i.R(t);st(o)||0<o.X(e);)n-=r,i=ht(n),o=i.R(t);pt(i)&&(i=Vr),s=s.add(i),e=yn(e,o)}return new ge(s,e)}p.gb=function(e){return En(this,e).h};p.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new V(n,this.h&e.h)};p.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new V(n,this.h|e.h)};p.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new V(n,this.h^e.h)};function si(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new V(n,e.h)}function jt(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new V(s,e.h)}_n.prototype.createWebChannel=_n.prototype.g;rt.prototype.send=rt.prototype.u;rt.prototype.open=rt.prototype.m;rt.prototype.close=rt.prototype.close;kn.NO_ERROR=0;kn.TIMEOUT=8;kn.HTTP_ERROR=6;_o.COMPLETE="complete";yo.EventType=$e;$e.OPEN="a";$e.CLOSE="b";$e.ERROR="c";$e.MESSAGE="d";q.prototype.listen=q.prototype.O;x.prototype.listenOnce=x.prototype.P;x.prototype.getLastError=x.prototype.Sa;x.prototype.getLastErrorCode=x.prototype.Ia;x.prototype.getStatus=x.prototype.da;x.prototype.getResponseJson=x.prototype.Wa;x.prototype.getResponseText=x.prototype.ja;x.prototype.send=x.prototype.ha;x.prototype.setWithCredentials=x.prototype.Oa;it.prototype.digest=it.prototype.l;it.prototype.reset=it.prototype.reset;it.prototype.update=it.prototype.j;V.prototype.add=V.prototype.add;V.prototype.multiply=V.prototype.R;V.prototype.modulo=V.prototype.gb;V.prototype.compare=V.prototype.X;V.prototype.toNumber=V.prototype.ea;V.prototype.toString=V.prototype.toString;V.prototype.getBits=V.prototype.D;V.fromNumber=ht;V.fromString=Zo;var Ac=function(){return new _n},Rc=function(){return Nn()},or=kn,Sc=_o,Cc=Ut,ii={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Pc=Ge,rn=yo,Vc=x,Dc=it,Wt=V;const oi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Q.UNAUTHENTICATED=new Q(null),Q.GOOGLE_CREDENTIALS=new Q("google-credentials-uid"),Q.FIRST_PARTY=new Q("first-party-uid"),Q.MOCK_USER=new Q("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ue="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new Hi("@firebase/firestore");function me(){return Lt.logLevel}function _(e,...t){if(Lt.logLevel<=A.DEBUG){const n=t.map(ds);Lt.debug(`Firestore (${ue}): ${e}`,...n)}}function Et(e,...t){if(Lt.logLevel<=A.ERROR){const n=t.map(ds);Lt.error(`Firestore (${ue}): ${e}`,...n)}}function Zt(e,...t){if(Lt.logLevel<=A.WARN){const n=t.map(ds);Lt.warn(`Firestore (${ue}): ${e}`,...n)}}function ds(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e="Unexpected state"){const t=`FIRESTORE (${ue}) INTERNAL ASSERTION FAILED: `+e;throw Et(t),new Error(t)}function B(e,t){e||I()}function S(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends ie{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Nc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Q.UNAUTHENTICATED))}shutdown(){}}class kc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bc{constructor(t){this.t=t,this.currentUser=Q.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new xt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new xt,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new xt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(B(typeof r.accessToken=="string"),new ta(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return B(t===null||typeof t=="string"),new Q(t)}}class xc{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Q.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Oc{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new xc(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Q.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lc{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(B(typeof n.token=="string"),this.R=n.token,new Mc(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Fc(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function P(e,t){return e<t?-1:e>t?1:0}function te(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new E(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new E(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new E(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new nt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?P(this.nanoseconds,t.nanoseconds):P(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.timestamp=t}static fromTimestamp(t){return new T(t)}static min(){return new T(new nt(0,0))}static max(){return new T(new nt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t,n,r){n===void 0?n=0:n>t.length&&I(),r===void 0?r=t.length-n:r>t.length-n&&I(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Oe.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Oe?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class b extends Oe{construct(t,n,r){return new b(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new E(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new b(n)}static emptyPath(){return new b([])}}const Bc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends Oe{construct(t,n,r){return new Z(t,n,r)}static isValidIdentifier(t){return Bc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Z(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new E(m.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new E(m.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new E(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new E(m.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Z(n)}static emptyPath(){return new Z([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(t){this.path=t}static fromPath(t){return new y(b.fromString(t))}static fromName(t){return new y(b.fromString(t).popFirst(5))}static empty(){return new y(b.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&b.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return b.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new y(new b(t.slice()))}}function Uc(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=T.fromTimestamp(r===1e9?new nt(n+1,0):new nt(n,r));return new At(s,y.empty(),t)}function qc(e){return new At(e.readTime,e.key,-1)}class At{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new At(T.min(),y.empty(),-1)}static max(){return new At(T.max(),y.empty(),-1)}}function jc(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=y.comparator(e.documentKey,t.documentKey),n!==0?n:P(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(e){if(e.code!==m.FAILED_PRECONDITION||e.message!==$c)throw e;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,r)=>{n(t)})}static reject(t){return new d((n,r)=>{r(t)})}static waitFor(t){return new d((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(t){let n=d.resolve(!1);for(const r of t)n=n.next(s=>s?d.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new d((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const h=u;n(t[h]).next(c=>{o[h]=c,++a,a===i&&r(o)},c=>s(c))}})}static doWhile(t,n){return new d((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function We(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}gs._e=-1;function Un(e){return e==null}function Dr(e){return e===0&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function qn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Hc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,n){this.comparator=t,this.root=n||$.EMPTY}insert(t,n){return new O(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,$.BLACK,null,null))}remove(t){return new O(this.comparator,this.root.remove(t,this.comparator).copy(null,null,$.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new sn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new sn(this.root,t,this.comparator,!1)}getReverseIterator(){return new sn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new sn(this.root,t,this.comparator,!0)}}class sn{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ${constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??$.RED,this.left=s??$.EMPTY,this.right=i??$.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new $(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return $.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return $.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,$.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,$.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}$.EMPTY=null,$.RED=!0,$.BLACK=!1;$.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(t,n,r,s,i){return this}insert(t,n,r){return new $(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.comparator=t,this.data=new O(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new ui(this.data.getIterator())}getIteratorFrom(t){return new ui(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof G)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new G(this.comparator);return n.data=t,n}}class ui{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.fields=t,t.sort(Z.comparator)}static empty(){return new vt([])}unionWith(t){let n=new G(Z.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new vt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return te(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new na("Invalid base64 string: "+i):i}}(t);return new J(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new J(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return P(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}J.EMPTY_BYTE_STRING=new J("");const Gc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rt(e){if(B(!!e),typeof e=="string"){let t=0;const n=Gc.exec(e);if(B(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:L(e.seconds),nanos:L(e.nanos)}}function L(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ft(e){return typeof e=="string"?J.fromBase64String(e):J.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ps(e){const t=e.mapValue.fields.__previous_value__;return ms(t)?ps(t):t}function Me(e){const t=Rt(e.mapValue.fields.__local_write_time__.timestampValue);return new nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(t,n,r,s,i,o,a,u,h){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=h}}class Le{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Le("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Le&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Bt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ms(e)?4:Qc(e)?9007199254740991:10:I()}function lt(e,t){if(e===t)return!0;const n=Bt(e);if(n!==Bt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Me(e).isEqual(Me(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Rt(s.timestampValue),a=Rt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Ft(s.bytesValue).isEqual(Ft(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return L(s.geoPointValue.latitude)===L(i.geoPointValue.latitude)&&L(s.geoPointValue.longitude)===L(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return L(s.integerValue)===L(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=L(s.doubleValue),a=L(i.doubleValue);return o===a?Dr(o)===Dr(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return te(e.arrayValue.values||[],t.arrayValue.values||[],lt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(ai(o)!==ai(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!lt(o[u],a[u])))return!1;return!0}(e,t);default:return I()}}function Fe(e,t){return(e.values||[]).find(n=>lt(n,t))!==void 0}function ee(e,t){if(e===t)return 0;const n=Bt(e),r=Bt(t);if(n!==r)return P(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return P(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=L(i.integerValue||i.doubleValue),u=L(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(e,t);case 3:return hi(e.timestampValue,t.timestampValue);case 4:return hi(Me(e),Me(t));case 5:return P(e.stringValue,t.stringValue);case 6:return function(i,o){const a=Ft(i),u=Ft(o);return a.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let h=0;h<a.length&&h<u.length;h++){const c=P(a[h],u[h]);if(c!==0)return c}return P(a.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=P(L(i.latitude),L(o.latitude));return a!==0?a:P(L(i.longitude),L(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],u=o.values||[];for(let h=0;h<a.length&&h<u.length;++h){const c=ee(a[h],u[h]);if(c)return c}return P(a.length,u.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===on.mapValue&&o===on.mapValue)return 0;if(i===on.mapValue)return 1;if(o===on.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),h=o.fields||{},c=Object.keys(h);u.sort(),c.sort();for(let l=0;l<u.length&&l<c.length;++l){const f=P(u[l],c[l]);if(f!==0)return f;const g=ee(a[u[l]],h[c[l]]);if(g!==0)return g}return P(u.length,c.length)}(e.mapValue,t.mapValue);default:throw I()}}function hi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return P(e,t);const n=Rt(e),r=Rt(t),s=P(n.seconds,r.seconds);return s!==0?s:P(n.nanos,r.nanos)}function ne(e){return Nr(e)}function Nr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Rt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Ft(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return y.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Nr(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Nr(n.fields[o])}`;return s+"}"}(e.mapValue):I()}function kr(e){return!!e&&"integerValue"in e}function _s(e){return!!e&&"arrayValue"in e}function ci(e){return!!e&&"nullValue"in e}function li(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ar(e){return!!e&&"mapValue"in e}function Te(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return qn(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Te(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Te(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Qc(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.value=t}static empty(){return new at({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!ar(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Te(n)}setAll(t){let n=Z.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Te(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());ar(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return lt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];ar(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){qn(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new at(Te(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new W(t,0,T.min(),T.min(),T.min(),at.empty(),0)}static newFoundDocument(t,n,r,s){return new W(t,1,n,T.min(),r,s,0)}static newNoDocument(t,n){return new W(t,2,n,T.min(),T.min(),at.empty(),0)}static newUnknownDocument(t,n){return new W(t,3,n,T.min(),T.min(),at.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(T.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=T.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof W&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new W(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t,n){this.position=t,this.inclusive=n}}function di(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=y.comparator(y.fromName(o.referenceValue),n.key):r=ee(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function fi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!lt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t,n="asc"){this.field=t,this.dir=n}}function Wc(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{}class F extends ra{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Yc(t,n,r):n==="array-contains"?new tl(t,r):n==="in"?new el(t,r):n==="not-in"?new nl(t,r):n==="array-contains-any"?new rl(t,r):new F(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Jc(t,r):new Zc(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ee(n,this.value)):n!==null&&Bt(this.value)===Bt(n)&&this.matchesComparison(ee(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dt extends ra{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new dt(t,n)}matches(t){return sa(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function sa(e){return e.op==="and"}function ia(e){return Xc(e)&&sa(e)}function Xc(e){for(const t of e.filters)if(t instanceof dt)return!1;return!0}function br(e){if(e instanceof F)return e.field.canonicalString()+e.op.toString()+ne(e.value);if(ia(e))return e.filters.map(t=>br(t)).join(",");{const t=e.filters.map(n=>br(n)).join(",");return`${e.op}(${t})`}}function oa(e,t){return e instanceof F?function(r,s){return s instanceof F&&r.op===s.op&&r.field.isEqual(s.field)&&lt(r.value,s.value)}(e,t):e instanceof dt?function(r,s){return s instanceof dt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&oa(o,s.filters[a]),!0):!1}(e,t):void I()}function aa(e){return e instanceof F?function(n){return`${n.field.canonicalString()} ${n.op} ${ne(n.value)}`}(e):e instanceof dt?function(n){return n.op.toString()+" {"+n.getFilters().map(aa).join(" ,")+"}"}(e):"Filter"}class Yc extends F{constructor(t,n,r){super(t,n,r),this.key=y.fromName(r.referenceValue)}matches(t){const n=y.comparator(t.key,this.key);return this.matchesComparison(n)}}class Jc extends F{constructor(t,n){super(t,"in",n),this.keys=ua("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Zc extends F{constructor(t,n){super(t,"not-in",n),this.keys=ua("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function ua(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>y.fromName(r.referenceValue))}class tl extends F{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return _s(n)&&Fe(n.arrayValue,this.value)}}class el extends F{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Fe(this.value.arrayValue,n)}}class nl extends F{constructor(t,n){super(t,"not-in",n)}matches(t){if(Fe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Fe(this.value.arrayValue,n)}}class rl extends F{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!_s(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Fe(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function gi(e,t=null,n=[],r=[],s=null,i=null,o=null){return new sl(e,t,n,r,s,i,o)}function ys(e){const t=S(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>br(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Un(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>ne(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>ne(r)).join(",")),t.ce=n}return t.ce}function Es(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Wc(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!oa(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!fi(e.startAt,t.startAt)&&fi(e.endAt,t.endAt)}function xr(e){return y.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function il(e,t,n,r,s,i,o,a){return new jn(e,t,n,r,s,i,o,a)}function vs(e){return new jn(e)}function mi(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function ol(e){return e.collectionGroup!==null}function Ie(e){const t=S(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new G(Z.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(a=a.add(h.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new Tn(i,r))}),n.has(Z.keyField().canonicalString())||t.le.push(new Tn(Z.keyField(),r))}return t.le}function ct(e){const t=S(e);return t.he||(t.he=al(t,Ie(e))),t.he}function al(e,t){if(e.limitType==="F")return gi(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Tn(s.field,i)});const n=e.endAt?new vn(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new vn(e.startAt.position,e.startAt.inclusive):null;return gi(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Or(e,t,n){return new jn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function $n(e,t){return Es(ct(e),ct(t))&&e.limitType===t.limitType}function ha(e){return`${ys(ct(e))}|lt:${e.limitType}`}function $t(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>aa(s)).join(", ")}]`),Un(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ne(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ne(s)).join(",")),`Target(${r})`}(ct(e))}; limitType=${e.limitType})`}function zn(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of Ie(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,u){const h=di(o,a,u);return o.inclusive?h<=0:h<0}(r.startAt,Ie(r),s)||r.endAt&&!function(o,a,u){const h=di(o,a,u);return o.inclusive?h>=0:h>0}(r.endAt,Ie(r),s))}(e,t)}function ul(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ca(e){return(t,n)=>{let r=!1;for(const s of Ie(e)){const i=hl(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function hl(e,t,n){const r=e.field.isKeyField()?y.comparator(t.key,n.key):function(i,o,a){const u=o.data.field(i),h=a.data.field(i);return u!==null&&h!==null?ee(u,h):I()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return I()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){qn(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Hc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=new O(y.comparator);function St(){return cl}const la=new O(y.comparator);function ye(...e){let t=la;for(const n of e)t=t.insert(n.key,n);return t}function ll(e){let t=la;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function kt(){return we()}function da(){return we()}function we(){return new he(e=>e.toString(),(e,t)=>e.isEqual(t))}const dl=new G(y.comparator);function R(...e){let t=dl;for(const n of e)t=t.add(n);return t}const fl=new G(P);function gl(){return fl}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dr(t)?"-0":t}}function pl(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){this._=void 0}}function _l(e,t,n){return e instanceof Mr?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ms(i)&&(i=ps(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof In?fa(e,t):e instanceof wn?ga(e,t):function(s,i){const o=El(s,i),a=pi(o)+pi(s.Ie);return kr(o)&&kr(s.Ie)?pl(a):ml(s.serializer,a)}(e,t)}function yl(e,t,n){return e instanceof In?fa(e,t):e instanceof wn?ga(e,t):n}function El(e,t){return e instanceof Lr?function(r){return kr(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Mr extends Hn{}class In extends Hn{constructor(t){super(),this.elements=t}}function fa(e,t){const n=ma(t);for(const r of e.elements)n.some(s=>lt(s,r))||n.push(r);return{arrayValue:{values:n}}}class wn extends Hn{constructor(t){super(),this.elements=t}}function ga(e,t){let n=ma(t);for(const r of e.elements)n=n.filter(s=>!lt(s,r));return{arrayValue:{values:n}}}class Lr extends Hn{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function pi(e){return L(e.integerValue||e.doubleValue)}function ma(e){return _s(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function vl(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof In&&s instanceof In||r instanceof wn&&s instanceof wn?te(r.elements,s.elements,lt):r instanceof Lr&&s instanceof Lr?lt(r.Ie,s.Ie):r instanceof Mr&&s instanceof Mr}(e.transform,t.transform)}class Ot{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ot}static exists(t){return new Ot(void 0,t)}static updateTime(t){return new Ot(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function un(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Ts{}function pa(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Il(e.key,Ot.none()):new Is(e.key,e.data,Ot.none());{const n=e.data,r=at.empty();let s=new G(Z.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Gn(e.key,r,new vt(s.toArray()),Ot.none())}}function Tl(e,t,n){e instanceof Is?function(s,i,o){const a=s.value.clone(),u=yi(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Gn?function(s,i,o){if(!un(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=yi(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(_a(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Ae(e,t,n,r){return e instanceof Is?function(i,o,a,u){if(!un(i.precondition,o))return a;const h=i.value.clone(),c=Ei(i.fieldTransforms,u,o);return h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(e,t,n,r):e instanceof Gn?function(i,o,a,u){if(!un(i.precondition,o))return a;const h=Ei(i.fieldTransforms,u,o),c=o.data;return c.setAll(_a(i)),c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(e,t,n,r):function(i,o,a){return un(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function _i(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&te(r,s,(i,o)=>vl(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Is extends Ts{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Gn extends Ts{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function _a(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function yi(e,t,n){const r=new Map;B(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,yl(o,a,n[s]))}return r}function Ei(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,_l(i,o,t))}return r}class Il extends Ts{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Tl(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Ae(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Ae(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=da();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const u=pa(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(T.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),R())}isEqual(t){return this.batchId===t.batchId&&te(this.mutations,t.mutations,(n,r)=>_i(n,r))&&te(this.baseMutations,t.baseMutations,(n,r)=>_i(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M,w;function ya(e){if(e===void 0)return Et("GRPC error has no .code"),m.UNKNOWN;switch(e){case M.OK:return m.OK;case M.CANCELLED:return m.CANCELLED;case M.UNKNOWN:return m.UNKNOWN;case M.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case M.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case M.INTERNAL:return m.INTERNAL;case M.UNAVAILABLE:return m.UNAVAILABLE;case M.UNAUTHENTICATED:return m.UNAUTHENTICATED;case M.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case M.NOT_FOUND:return m.NOT_FOUND;case M.ALREADY_EXISTS:return m.ALREADY_EXISTS;case M.PERMISSION_DENIED:return m.PERMISSION_DENIED;case M.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case M.ABORTED:return m.ABORTED;case M.OUT_OF_RANGE:return m.OUT_OF_RANGE;case M.UNIMPLEMENTED:return m.UNIMPLEMENTED;case M.DATA_LOSS:return m.DATA_LOSS;default:return I()}}(w=M||(M={}))[w.OK=0]="OK",w[w.CANCELLED=1]="CANCELLED",w[w.UNKNOWN=2]="UNKNOWN",w[w.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",w[w.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",w[w.NOT_FOUND=5]="NOT_FOUND",w[w.ALREADY_EXISTS=6]="ALREADY_EXISTS",w[w.PERMISSION_DENIED=7]="PERMISSION_DENIED",w[w.UNAUTHENTICATED=16]="UNAUTHENTICATED",w[w.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",w[w.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",w[w.ABORTED=10]="ABORTED",w[w.OUT_OF_RANGE=11]="OUT_OF_RANGE",w[w.UNIMPLEMENTED=12]="UNIMPLEMENTED",w[w.INTERNAL=13]="INTERNAL",w[w.UNAVAILABLE=14]="UNAVAILABLE",w[w.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl=new Wt([4294967295,4294967295],0);function vi(e){const t=Sl().encode(e),n=new Dc;return n.update(t),new Uint8Array(n.digest())}function Ti(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Wt([n,r],0),new Wt([s,i],0)]}class ws{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ee(`Invalid padding: ${n}`);if(r<0)throw new Ee(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ee(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Ee(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=Wt.fromNumber(this.Te)}de(t,n,r){let s=t.add(n.multiply(Wt.fromNumber(r)));return s.compare(Cl)===1&&(s=new Wt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=vi(t),[r,s]=Ti(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new ws(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=vi(t),[r,s]=Ti(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Ee extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Xe.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Kn(T.min(),s,new O(P),St(),R())}}class Xe{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Xe(r,n,R(),R(),R())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t,n,r,s){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=s}}class Ea{constructor(t,n){this.targetId=t,this.fe=n}}class va{constructor(t,n,r=J.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ii{constructor(){this.ge=0,this.pe=Ai(),this.ye=J.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=R(),n=R(),r=R();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:I()}}),new Xe(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=Ai()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class Pl{constructor(t){this.Le=t,this.ke=new Map,this.qe=St(),this.Qe=wi(),this.Ke=new O(P)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.fe.count,s=this.Ye(n);if(s){const i=s.target;if(xr(i))if(r===0){const o=new y(i.path);this.We(n,o,W.newNoDocument(o,T.min()))}else B(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Ft(r).toUint8Array()}catch(u){if(u instanceof na)return Zt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new ws(o,s,i)}catch(u){return Zt(u instanceof Ee?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&xr(a.target)){const u=new y(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,W.newNoDocument(u,t))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=R();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const h=this.Ye(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new Kn(t,n,this.Ke,this.qe,r);return this.qe=St(),this.Qe=wi(),this.Ke=new O(P),s}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new Ii,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new G(P),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||_("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Ii),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function wi(){return new O(y.comparator)}function Ai(){return new O(y.comparator)}const Vl=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Dl=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Nl=(()=>({and:"AND",or:"OR"}))();class kl{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Fr(e,t){return e.useProto3Json||Un(t)?t:{value:t}}function bl(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function xl(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Xt(e){return B(!!e),T.fromTimestamp(function(n){const r=Rt(n);return new nt(r.seconds,r.nanos)}(e))}function Ol(e,t){return function(r){return new b(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function Ta(e){const t=b.fromString(e);return B(Ra(t)),t}function ur(e,t){const n=Ta(t);if(n.get(1)!==e.databaseId.projectId)throw new E(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new E(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new y(Ia(n))}function Br(e,t){return Ol(e.databaseId,t)}function Ml(e){const t=Ta(e);return t.length===4?b.emptyPath():Ia(t)}function Ri(e){return new b(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ia(e){return B(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Ll(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(h,c){return h.useProto3Json?(B(c===void 0||typeof c=="string"),J.fromBase64String(c||"")):(B(c===void 0||c instanceof Uint8Array),J.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(h){const c=h.code===void 0?m.UNKNOWN:ya(h.code);return new E(c,h.message||"")}(o);n=new va(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ur(e,r.document.name),i=Xt(r.document.updateTime),o=r.document.createTime?Xt(r.document.createTime):T.min(),a=new at({mapValue:{fields:r.document.fields}}),u=W.newFoundDocument(s,i,o,a),h=r.targetIds||[],c=r.removedTargetIds||[];n=new hn(h,c,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ur(e,r.document),i=r.readTime?Xt(r.readTime):T.min(),o=W.newNoDocument(s,i),a=r.removedTargetIds||[];n=new hn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ur(e,r.document),i=r.removedTargetIds||[];n=new hn([],i,s,null)}else{if(!("filter"in t))return I();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Rl(s,i),a=r.targetId;n=new Ea(a,o)}}return n}function Fl(e,t){return{documents:[Br(e,t.path)]}}function Bl(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Br(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Br(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(u){if(u.length!==0)return Aa(dt.create(u,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const i=function(u){if(u.length!==0)return u.map(h=>function(l){return{field:zt(l.field),direction:jl(l.dir)}}(h))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Fr(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function Ul(e){let t=Ml(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){B(r===1);const c=n.from[0];c.allDescendants?s=c.collectionId:t=t.child(c.collectionId)}let i=[];n.where&&(i=function(l){const f=wa(l);return f instanceof dt&&ia(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(l){return l.map(f=>function(D){return new Tn(Ht(D.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(l){let f;return f=typeof l=="object"?l.value:l,Un(f)?null:f}(n.limit));let u=null;n.startAt&&(u=function(l){const f=!!l.before,g=l.values||[];return new vn(g,f)}(n.startAt));let h=null;return n.endAt&&(h=function(l){const f=!l.before,g=l.values||[];return new vn(g,f)}(n.endAt)),il(t,s,o,i,a,"F",u,h)}function ql(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return I()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function wa(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ht(n.unaryFilter.field);return F.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ht(n.unaryFilter.field);return F.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ht(n.unaryFilter.field);return F.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ht(n.unaryFilter.field);return F.create(o,"!=",{nullValue:"NULL_VALUE"});default:return I()}}(e):e.fieldFilter!==void 0?function(n){return F.create(Ht(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return dt.create(n.compositeFilter.filters.map(r=>wa(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return I()}}(n.compositeFilter.op))}(e):I()}function jl(e){return Vl[e]}function $l(e){return Dl[e]}function zl(e){return Nl[e]}function zt(e){return{fieldPath:e.canonicalString()}}function Ht(e){return Z.fromServerFormat(e.fieldPath)}function Aa(e){return e instanceof F?function(n){if(n.op==="=="){if(li(n.value))return{unaryFilter:{field:zt(n.field),op:"IS_NAN"}};if(ci(n.value))return{unaryFilter:{field:zt(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(li(n.value))return{unaryFilter:{field:zt(n.field),op:"IS_NOT_NAN"}};if(ci(n.value))return{unaryFilter:{field:zt(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zt(n.field),op:$l(n.op),value:n.value}}}(e):e instanceof dt?function(n){const r=n.getFilters().map(s=>Aa(s));return r.length===1?r[0]:{compositeFilter:{op:zl(n.op),filters:r}}}(e):I()}function Ra(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,n,r,s,i=T.min(),o=T.min(),a=J.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Tt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Tt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Tt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Tt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(t){this.ut=t}}function Gl(e){const t=Ul({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Or(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(){this.on=new Ql}addToCollectionParentIndex(t,n){return this.on.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}deleteAllFieldIndexes(t){return d.resolve()}createTargetIndexes(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n){return d.resolve(null)}getIndexType(t,n){return d.resolve(0)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,n){return d.resolve(At.min())}getMinOffsetFromCollectionGroup(t,n){return d.resolve(At.min())}updateCollectionGroup(t,n,r){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class Ql{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new G(b.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new G(b.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new re(0)}static Nn(){return new re(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this.changes=new he(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,W.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?d.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Ae(r.mutation,s,vt.empty(),nt.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,R()).next(()=>r))}getLocalViewOfDocuments(t,n,r=R()){const s=kt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=ye();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=kt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,R()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=St();const o=we(),a=function(){return we()}();return n.forEach((u,h)=>{const c=r.get(h.key);s.has(h.key)&&(c===void 0||c.mutation instanceof Gn)?i=i.insert(h.key,h):c!==void 0?(o.set(h.key,c.mutation.getFieldMask()),Ae(c.mutation,h,c.mutation.getFieldMask(),nt.now())):o.set(h.key,vt.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((h,c)=>o.set(h,c)),n.forEach((h,c)=>{var l;return a.set(h,new Xl(c,(l=o.get(h))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const r=we();let s=new O((o,a)=>o-a),i=R();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let c=r.get(u)||vt.empty();c=a.applyToLocalView(h,c),r.set(u,c);const l=(s.get(a.batchId)||R()).add(u);s=s.insert(a.batchId,l)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),h=u.key,c=u.value,l=da();c.forEach(f=>{if(!i.has(f)){const g=pa(n.get(f),r.get(f));g!==null&&l.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,h,l))}return d.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):ol(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):d.resolve(kt());let a=-1,u=i;return o.next(h=>d.forEach(h,(c,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),i.get(c)?d.resolve():this.remoteDocumentCache.getEntry(t,c).next(f=>{u=u.insert(c,f)}))).next(()=>this.populateOverlays(t,h,i)).next(()=>this.computeViews(t,u,h,R())).next(c=>({batchId:a,changes:ll(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new y(n)).next(r=>{let s=ye();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=ye();return this.indexManager.getCollectionParents(t,i).next(a=>d.forEach(a,u=>{const h=function(l,f){return new jn(f,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,h,r,s).next(c=>{c.forEach((l,f)=>{o=o.insert(l,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const c=h.getKey();o.get(c)===null&&(o=o.insert(c,W.newInvalidDocument(c)))});let a=ye();return o.forEach((u,h)=>{const c=i.get(u);c!==void 0&&Ae(c.mutation,h,vt.empty(),nt.now()),zn(n,h)&&(a=a.insert(u,h))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return d.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Xt(s.createTime)}}(n)),d.resolve()}getNamedQuery(t,n){return d.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(s){return{name:s.name,query:Gl(s.bundledQuery),readTime:Xt(s.readTime)}}(n)),d.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(){this.overlays=new O(y.comparator),this.lr=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}getOverlays(t,n){const r=kt();return d.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.lt(t,n,i)}),d.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),d.resolve()}getOverlaysForCollection(t,n,r){const s=kt(),i=n.length+1,o=new y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return d.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new O((h,c)=>h-c);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let c=i.get(h.largestBatchId);c===null&&(c=kt(),i=i.insert(h.largestBatchId,c)),c.set(h.getKey(),h)}}const a=kt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,c)=>a.set(h,c)),!(a.size()>=s)););return d.resolve(a)}lt(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Al(n,r));let i=this.lr.get(n);i===void 0&&(i=R(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.hr=new G(U.Pr),this.Ir=new G(U.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new U(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new U(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new y(new b([])),r=new U(n,t),s=new U(n,t+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new y(new b([])),r=new U(n,t),s=new U(n,t+1);let i=R();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new U(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class U{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return y.comparator(t.key,n.key)||P(t.gr,n.gr)}static Tr(t,n){return P(t.gr,n.gr)||y.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new G(U.Pr)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wl(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new U(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return d.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new U(n,0),s=new U(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),d.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new G(P);return n.forEach(s=>{const i=new U(s,0),o=new U(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),d.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;y.isDocumentKey(i)||(i=i.child(""));const o=new U(new y(i),0);let a=new G(P);return this.yr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(a=a.add(u.gr)),!0)},o),d.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){B(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return d.forEach(n.mutations,s=>{const i=new U(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new U(n,0),s=this.yr.firstAfterOrEqual(r);return d.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(t){this.Cr=t,this.docs=function(){return new O(y.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return d.resolve(r?r.document.mutableCopy():W.newInvalidDocument(n))}getEntries(t,n){let r=St();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():W.newInvalidDocument(s))}),d.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=St();const o=n.path,a=new y(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:h,value:{document:c}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||jc(qc(c),r)<=0||(s.has(c.key)||zn(n,c))&&(i=i.insert(c.key,c.mutableCopy()))}return d.resolve(i)}getAllFromCollectionGroup(t,n,r,s){I()}vr(t,n){return d.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new nd(this)}getSize(t){return d.resolve(this.size)}}class nd extends Wl{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(t,s)):this._r.removeEntry(r)}),d.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(t){this.persistence=t,this.Fr=new he(n=>ys(n),Es),this.lastRemoteSnapshotVersion=T.min(),this.highestTargetId=0,this.Mr=0,this.Or=new As,this.targetCount=0,this.Nr=re.On()}forEachTarget(t,n){return this.Fr.forEach((r,s)=>n(s)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),d.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new re(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.kn(n),d.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),d.waitFor(i).next(()=>s)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return d.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),d.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),d.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),d.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return d.resolve(r)}containsKey(t,n){return d.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(t,n){this.Br={},this.overlays={},this.Lr=new gs(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new rd(this),this.indexManager=new Kl,this.remoteDocumentCache=function(s){return new ed(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Hl(n),this.Kr=new Jl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Zl,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new td(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){_("MemoryPersistence","Starting transaction:",t);const s=new id(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(t,n){return d.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class id extends zc{constructor(t){super(),this.currentSequenceNumber=t}}class Rs{constructor(t){this.persistence=t,this.Gr=new As,this.zr=null}static jr(t){return new Rs(t)}get Hr(){if(this.zr)return this.zr;throw I()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),d.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),d.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Hr,r=>{const s=y.fromPath(r);return this.Jr(t,s).next(i=>{i||n.removeEntry(s,T.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return d.or([()=>d.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=s}static Qi(t,n){let r=R(),s=R();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ss(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,n){this.Gi=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.zi(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new od;return this.Hi(t,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(t,n,o,a.size)})}).next(()=>i.result)}Ji(t,n,r,s){return r.documentReadCount<this.Ui?(me()<=A.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",$t(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),d.resolve()):(me()<=A.DEBUG&&_("QueryEngine","Query:",$t(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(me()<=A.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",$t(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ct(n))):d.resolve())}zi(t,n){if(mi(n))return d.resolve(null);let r=ct(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Or(n,null,"F"),r=ct(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=R(...i);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const h=this.Yi(n,a);return this.Zi(n,h,o,u.readTime)?this.zi(t,Or(n,null,"F")):this.Xi(t,h,n,u)}))})))}ji(t,n,r,s){return mi(n)||s.isEqual(T.min())?d.resolve(null):this.Gi.getDocuments(t,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?d.resolve(null):(me()<=A.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),$t(n)),this.Xi(t,o,n,Uc(s,-1)).next(a=>a))})}Yi(t,n){let r=new G(ca(t));return n.forEach((s,i)=>{zn(t,i)&&(r=r.add(i))}),r}Zi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(t,n,r){return me()<=A.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",$t(n)),this.Gi.getDocumentsMatchingQuery(t,n,At.min(),r)}Xi(t,n,r,s){return this.Gi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(t,n,r,s){this.persistence=t,this.es=n,this.serializer=s,this.ts=new O(P),this.ns=new he(i=>ys(i),Es),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Yl(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ts))}}function hd(e,t,n,r){return new ud(e,t,n,r)}async function Sa(e,t){const n=S(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=R();for(const h of s){o.push(h.batchId);for(const c of h.mutations)u=u.add(c.key)}for(const h of i){a.push(h.batchId);for(const c of h.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(h=>({_s:h,removedBatchIds:o,addedBatchIds:a}))})})}function Ca(e){const t=S(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function cd(e,t){const n=S(e),r=t.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];t.targetChanges.forEach((c,l)=>{const f=s.get(l);if(!f)return;a.push(n.qr.removeMatchingKeys(i,c.removedDocuments,l).next(()=>n.qr.addMatchingKeys(i,c.addedDocuments,l)));let g=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(l)!==null?g=g.withResumeToken(J.EMPTY_BYTE_STRING,T.min()).withLastLimboFreeSnapshotVersion(T.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),s=s.insert(l,g),function(N,C,et){return N.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:et.addedDocuments.size+et.modifiedDocuments.size+et.removedDocuments.size>0}(f,g,c)&&a.push(n.qr.updateTargetData(i,g))});let u=St(),h=R();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,c))}),a.push(ld(i,o,t.documentUpdates).next(c=>{u=c.us,h=c.cs})),!r.isEqual(T.min())){const c=n.qr.getLastRemoteSnapshotVersion(i).next(l=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(c)}return d.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.ts=s,i))}function ld(e,t,n){let r=R(),s=R();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=St();return n.forEach((a,u)=>{const h=i.get(a);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(T.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",u.version)}),{us:o,cs:s}})}function dd(e,t){const n=S(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,t).next(i=>i?(s=i,d.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new Tt(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(t,r.targetId)),r})}async function Ur(e,t,n){const r=S(e),s=r.ts.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!We(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(s.target)}function Si(e,t,n){const r=S(e);let s=T.min(),i=R();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,c){const l=S(u),f=l.ns.get(c);return f!==void 0?d.resolve(l.ts.get(f)):l.qr.getTargetData(h,c)}(r,o,ct(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,n?s:T.min(),n?i:R())).next(a=>(fd(r,ul(t),a),{documents:a,ls:i})))}function fd(e,t,n){let r=e.rs.get(t)||T.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.rs.set(t,r)}class Ci{constructor(){this.activeTargetIds=gl()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class gd{constructor(){this.eo=new Ci,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,n,r){this.no[t]=n}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new Ci,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{ro(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let an=null;function hr(){return an===null?an=function(){return 268435456+Math.round(2147483648*Math.random())}():an++,"0x"+an.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K="WebChannelConnection";class yd extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=hr(),u=this.So(n,r);_("RestConnection",`Sending RPC '${n}' ${a}:`,u,s);const h={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(h,i,o),this.Do(n,u,h,s).then(c=>(_("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Zt("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",u,"request:",s),c})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ue}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=pd[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,n,r,s){const i=hr();return new Promise((o,a)=>{const u=new Vc;u.setWithCredentials(!0),u.listenOnce(Sc.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case or.NO_ERROR:const c=u.getResponseJson();_(K,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(c)),o(c);break;case or.TIMEOUT:_(K,`RPC '${t}' ${i} timed out`),a(new E(m.DEADLINE_EXCEEDED,"Request time out"));break;case or.HTTP_ERROR:const l=u.getStatus();if(_(K,`RPC '${t}' ${i} failed with status:`,l,"response text:",u.getResponseText()),l>0){let f=u.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const D=function(C){const et=C.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(et)>=0?et:m.UNKNOWN}(g.status);a(new E(D,g.message))}else a(new E(m.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new E(m.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{_(K,`RPC '${t}' ${i} completed.`)}});const h=JSON.stringify(s);_(K,`RPC '${t}' ${i} sending request:`,s),u.send(n,"POST",h,r,15)})}vo(t,n,r){const s=hr(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Ac(),a=Rc(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.xmlHttpFactory=new Pc({})),this.bo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const c=i.join("");_(K,`Creating RPC '${t}' stream ${s}: ${c}`,u);const l=o.createWebChannel(c,u);let f=!1,g=!1;const D=new _d({co:C=>{g?_(K,`Not sending because RPC '${t}' stream ${s} is closed:`,C):(f||(_(K,`Opening RPC '${t}' stream ${s} transport.`),l.open(),f=!0),_(K,`RPC '${t}' stream ${s} sending:`,C),l.send(C))},lo:()=>l.close()}),N=(C,et,ft)=>{C.listen(et,gt=>{try{ft(gt)}catch(mt){setTimeout(()=>{throw mt},0)}})};return N(l,rn.EventType.OPEN,()=>{g||_(K,`RPC '${t}' stream ${s} transport opened.`)}),N(l,rn.EventType.CLOSE,()=>{g||(g=!0,_(K,`RPC '${t}' stream ${s} transport closed`),D.Ro())}),N(l,rn.EventType.ERROR,C=>{g||(g=!0,Zt(K,`RPC '${t}' stream ${s} transport errored:`,C),D.Ro(new E(m.UNAVAILABLE,"The operation could not be completed")))}),N(l,rn.EventType.MESSAGE,C=>{var et;if(!g){const ft=C.data[0];B(!!ft);const gt=ft,mt=gt.error||((et=gt[0])===null||et===void 0?void 0:et.error);if(mt){_(K,`RPC '${t}' stream ${s} received error:`,mt);const le=mt.status;let de=function(Qa){const Ms=M[Qa];if(Ms!==void 0)return ya(Ms)}(le),Os=mt.message;de===void 0&&(de=m.INTERNAL,Os="Unknown error status: "+le+" with message "+mt.message),g=!0,D.Ro(new E(de,Os)),l.close()}else _(K,`RPC '${t}' stream ${s} received:`,ft),D.Vo(ft)}}),N(a,Cc.STAT_EVENT,C=>{C.stat===ii.PROXY?_(K,`RPC '${t}' stream ${s} detected buffering proxy`):C.stat===ii.NOPROXY&&_(K,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.Ao()},0),D}}function cr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(e){return new kl(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t,n,r=1e3,s=1.5,i=6e4){this.si=t,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&_("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t,n,r,s,i,o,a,u){this.si=t,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Va(t,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(Et(n.toString()),Et("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(n)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{t(()=>{const s=new E(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(t,n){const r=this.i_(this.Uo);this.stream=this.__(t,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return n=>{this.si.enqueueAndForget(()=>this.Uo===t?n():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vd extends Ed{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(t,n){return this.connection.vo("Listen",t,n)}onMessage(t){this.zo.reset();const n=Ll(this.serializer,t),r=function(i){if(!("targetChange"in i))return T.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?T.min():o.readTime?Xt(o.readTime):T.min()}(t);return this.listener.a_(n,r)}u_(t){const n={};n.database=Ri(this.serializer),n.addTarget=function(i,o){let a;const u=o.target;if(a=xr(u)?{documents:Fl(i,u)}:{query:Bl(i,u)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=xl(i,o.resumeToken);const h=Fr(i,o.expectedCount);h!==null&&(a.expectedCount=h)}else if(o.snapshotVersion.compareTo(T.min())>0){a.readTime=bl(i,o.snapshotVersion.toTimestamp());const h=Fr(i,o.expectedCount);h!==null&&(a.expectedCount=h)}return a}(this.serializer,t);const r=ql(this.serializer,t);r&&(n.labels=r),this.e_(n)}c_(t){const n={};n.database=Ri(this.serializer),n.removeTarget=t,this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new E(m.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(t,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new E(m.UNKNOWN,s.toString())})}Co(t,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(t,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(m.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class Id{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Et(n),this.f_=!1):_("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Je(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=S(u);h.C_.add(4),await Ye(h),h.M_.set("Unknown"),h.C_.delete(4),await Qn(h)}(this))})}),this.M_=new Id(r,s)}}async function Qn(e){if(Je(e))for(const t of e.v_)await t(!0)}async function Ye(e){for(const t of e.v_)await t(!1)}function Da(e,t){const n=S(e);n.D_.has(t.targetId)||(n.D_.set(t.targetId,t),Vs(n)?Ps(n):ce(n).Ho()&&Cs(n,t))}function Na(e,t){const n=S(e),r=ce(n);n.D_.delete(t),r.Ho()&&ka(n,t),n.D_.size===0&&(r.Ho()?r.Zo():Je(n)&&n.M_.set("Unknown"))}function Cs(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(T.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ce(e).u_(t)}function ka(e,t){e.x_.Oe(t),ce(e).c_(t)}function Ps(e){e.x_=new Pl({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),ce(e).start(),e.M_.g_()}function Vs(e){return Je(e)&&!ce(e).jo()&&e.D_.size>0}function Je(e){return S(e).C_.size===0}function ba(e){e.x_=void 0}async function Ad(e){e.D_.forEach((t,n)=>{Cs(e,t)})}async function Rd(e,t){ba(e),Vs(e)?(e.M_.w_(t),Ps(e)):e.M_.set("Unknown")}async function Sd(e,t,n){if(e.M_.set("Online"),t instanceof va&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(e,t)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Vi(e,r)}else if(t instanceof hn?e.x_.$e(t):t instanceof Ea?e.x_.Je(t):e.x_.Ge(t),!n.isEqual(T.min()))try{const r=await Ca(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const c=i.D_.get(h);c&&i.D_.set(h,c.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,h)=>{const c=i.D_.get(u);if(!c)return;i.D_.set(u,c.withResumeToken(J.EMPTY_BYTE_STRING,c.snapshotVersion)),ka(i,u);const l=new Tt(c.target,u,h,c.sequenceNumber);Cs(i,l)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await Vi(e,r)}}async function Vi(e,t,n){if(!We(t))throw t;e.C_.add(1),await Ye(e),e.M_.set("Offline"),n||(n=()=>Ca(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await Qn(e)})}async function Di(e,t){const n=S(e);n.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=Je(n);n.C_.add(3),await Ye(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.C_.delete(3),await Qn(n)}async function Cd(e,t){const n=S(e);t?(n.C_.delete(2),await Qn(n)):t||(n.C_.add(2),await Ye(n),n.M_.set("Unknown"))}function ce(e){return e.O_||(e.O_=function(n,r,s){const i=S(n);return i.A_(),new vd(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{ho:Ad.bind(null,e),Io:Rd.bind(null,e),a_:Sd.bind(null,e)}),e.v_.push(async t=>{t?(e.O_.Yo(),Vs(e)?Ps(e):e.M_.set("Unknown")):(await e.O_.stop(),ba(e))})),e.O_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new Ds(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(m.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xa(e,t){if(Et("AsyncQueue",`${t}: ${e}`),We(e))return new E(m.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t){this.comparator=t?(n,r)=>t(n,r)||y.comparator(n.key,r.key):(n,r)=>y.comparator(n.key,r.key),this.keyedMap=ye(),this.sortedSet=new O(this.comparator)}static emptySet(t){return new Yt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Yt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Yt;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.B_=new O(y.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):I():this.B_=this.B_.insert(n,t)}L_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class se{constructor(t,n,r,s,i,o,a,u,h){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new se(t,n,Yt.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&$n(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){this.k_=void 0,this.listeners=[]}}class Vd{constructor(){this.queries=new he(t=>ha(t),$n),this.onlineState="Unknown",this.q_=new Set}}async function Dd(e,t){const n=S(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Pd),s)try{i.k_=await n.onListen(r)}catch(o){const a=xa(o,`Initialization of query '${$t(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.listeners.push(t),t.Q_(n.onlineState),i.k_&&t.K_(i.k_)&&Ns(n)}async function Nd(e,t){const n=S(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function kd(e,t){const n=S(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&Ns(n)}function bd(e,t,n){const r=S(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function Ns(e){e.q_.forEach(t=>{t.next()})}class xd{constructor(t,n,r){this.query=t,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new se(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.W_?this.z_(t)&&(this.U_.next(t),n=!0):this.j_(t,this.onlineState)&&(this.H_(t),n=!0),this.G_=t,n}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),n=!0),n}j_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(t){t=se.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t){this.key=t}}class Ma{constructor(t){this.key=t}}class Od{constructor(t,n){this.query=t,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=R(),this.mutatedKeys=R(),this._a=ca(t),this.aa=new Yt(this._a)}get ua(){return this.ia}ca(t,n){const r=n?n.la:new Ni,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((c,l)=>{const f=s.get(c),g=zn(this.query,l)?l:null,D=!!f&&this.mutatedKeys.has(f.key),N=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let C=!1;f&&g?f.data.isEqual(g.data)?D!==N&&(r.track({type:3,doc:g}),C=!0):this.ha(f,g)||(r.track({type:2,doc:g}),C=!0,(u&&this._a(g,u)>0||h&&this._a(g,h)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),C=!0):f&&!g&&(r.track({type:1,doc:f}),C=!0,(u||h)&&(a=!0)),C&&(g?(o=o.add(g),i=N?i.add(c):i.delete(c)):(o=o.delete(c),i=i.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),i=i.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const s=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const i=t.la.L_();i.sort((h,c)=>function(f,g){const D=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return D(f)-D(g)}(h.type,c.type)||this._a(h.doc,c.doc)),this.Pa(r);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,u=a!==this.sa;return this.sa=a,i.length!==0||u?{snapshot:new se(this.query,t.aa,s,i,t.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Ni,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=R(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return t.forEach(r=>{this.oa.has(r)||n.push(new Ma(r))}),this.oa.forEach(r=>{t.has(r)||n.push(new Oa(r))}),n}da(t){this.ia=t.ls,this.oa=R();const n=this.ca(t.documents);return this.applyChanges(n,!0)}Aa(){return se.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class Md{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Ld{constructor(t){this.key=t,this.Ra=!1}}class Fd{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new he(a=>ha(a),$n),this.fa=new Map,this.ga=new Set,this.pa=new O(y.comparator),this.ya=new Map,this.wa=new As,this.Sa={},this.ba=new Map,this.Da=re.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function Bd(e,t){const n=Gd(e);let r,s;const i=n.ma.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await dd(n.localStore,ct(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Ud(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&Da(n.remoteStore,o)}return s}async function Ud(e,t,n,r,s){e.va=(l,f,g)=>async function(N,C,et,ft){let gt=C.view.ca(et);gt.Zi&&(gt=await Si(N.localStore,C.query,!1).then(({documents:de})=>C.view.ca(de,gt)));const mt=ft&&ft.targetChanges.get(C.targetId),le=C.view.applyChanges(gt,N.isPrimaryClient,mt);return bi(N,C.targetId,le.Ta),le.snapshot}(e,l,f,g);const i=await Si(e.localStore,t,!0),o=new Od(t,i.ls),a=o.ca(i.documents),u=Xe.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),h=o.applyChanges(a,e.isPrimaryClient,u);bi(e,n,h.Ta);const c=new Md(t,n,o);return e.ma.set(t,c),e.fa.has(n)?e.fa.get(n).push(t):e.fa.set(n,[t]),h.snapshot}async function qd(e,t){const n=S(e),r=n.ma.get(t),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!$n(i,t))),void n.ma.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ur(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Na(n.remoteStore,r.targetId),qr(n,r.targetId)}).catch(fs)):(qr(n,r.targetId),await Ur(n.localStore,r.targetId,!0))}async function La(e,t){const n=S(e);try{const r=await cd(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(B(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?B(o.Ra):s.removedDocuments.size>0&&(B(o.Ra),o.Ra=!1))}),await Ba(n,r,t)}catch(r){await fs(r)}}function ki(e,t,n){const r=S(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=S(o);u.onlineState=a;let h=!1;u.queries.forEach((c,l)=>{for(const f of l.listeners)f.Q_(a)&&(h=!0)}),h&&Ns(u)}(r.eventManager,t),s.length&&r.Va.a_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function jd(e,t,n){const r=S(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.ya.get(t),i=s&&s.key;if(i){let o=new O(y.comparator);o=o.insert(i,W.newNoDocument(i,T.min()));const a=R().add(i),u=new Kn(T.min(),new Map,new O(P),o,a);await La(r,u),r.pa=r.pa.remove(i),r.ya.delete(t),ks(r)}else await Ur(r.localStore,t,!1).then(()=>qr(r,t,n)).catch(fs)}function qr(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.fa.get(t))e.ma.delete(r),n&&e.Va.Fa(r,n);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach(r=>{e.wa.containsKey(r)||Fa(e,r)})}function Fa(e,t){e.ga.delete(t.path.canonicalString());const n=e.pa.get(t);n!==null&&(Na(e.remoteStore,n),e.pa=e.pa.remove(t),e.ya.delete(n),ks(e))}function bi(e,t,n){for(const r of n)r instanceof Oa?(e.wa.addReference(r.key,t),$d(e,r)):r instanceof Ma?(_("SyncEngine","Document no longer in limbo: "+r.key),e.wa.removeReference(r.key,t),e.wa.containsKey(r.key)||Fa(e,r.key)):I()}function $d(e,t){const n=t.key,r=n.path.canonicalString();e.pa.get(n)||e.ga.has(r)||(_("SyncEngine","New document in limbo: "+n),e.ga.add(r),ks(e))}function ks(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){const t=e.ga.values().next().value;e.ga.delete(t);const n=new y(b.fromString(t)),r=e.Da.next();e.ya.set(r,new Ld(n)),e.pa=e.pa.insert(n,r),Da(e.remoteStore,new Tt(ct(vs(n.path)),r,"TargetPurposeLimboResolution",gs._e))}}async function Ba(e,t,n){const r=S(e),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,u)=>{o.push(r.va(u,t,n).then(h=>{if((h||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,h!=null&&h.fromCache?"not-current":"current"),h){s.push(h);const c=Ss.Qi(u.targetId,h);i.push(c)}}))}),await Promise.all(o),r.Va.a_(s),await async function(u,h){const c=S(u);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>d.forEach(h,f=>d.forEach(f.ki,g=>c.persistence.referenceDelegate.addReference(l,f.targetId,g)).next(()=>d.forEach(f.qi,g=>c.persistence.referenceDelegate.removeReference(l,f.targetId,g)))))}catch(l){if(!We(l))throw l;_("LocalStore","Failed to update sequence numbers: "+l)}for(const l of h){const f=l.targetId;if(!l.fromCache){const g=c.ts.get(f),D=g.snapshotVersion,N=g.withLastLimboFreeSnapshotVersion(D);c.ts=c.ts.insert(f,N)}}}(r.localStore,i))}async function zd(e,t){const n=S(e);if(!n.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const r=await Sa(n.localStore,t);n.currentUser=t,function(i,o){i.ba.forEach(a=>{a.forEach(u=>{u.reject(new E(m.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ba(n,r._s)}}function Hd(e,t){const n=S(e),r=n.ya.get(t);if(r&&r.Ra)return R().add(r.key);{let s=R();const i=n.fa.get(t);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function Gd(e){const t=S(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=La.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=jd.bind(null,t),t.Va.a_=kd.bind(null,t.eventManager),t.Va.Fa=bd.bind(null,t.eventManager),t}class xi{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Pa(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return hd(this.persistence,new ad,t.initialUser,this.serializer)}createPersistence(t){return new sd(Rs.jr,this.serializer)}createSharedClientState(t){return new gd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Kd{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ki(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zd.bind(null,this.syncEngine),await Cd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Vd}()}createDatastore(t){const n=Pa(t.databaseInfo.databaseId),r=function(i){return new yd(i)}(t.databaseInfo);return function(i,o,a,u){return new Td(i,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new wd(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>ki(this.syncEngine,n,0),function(){return Pi.D()?new Pi:new md}())}createSyncEngine(t,n){return function(s,i,o,a,u,h,c){const l=new Fd(s,i,o,a,u,h);return c&&(l.Ca=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=S(n);_("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Ye(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):Et("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Q.UNAUTHENTICATED,this.clientId=ea.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{_("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(_("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=xa(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function lr(e,t){e.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Sa(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Oi(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Yd(e);_("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(s=>Di(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,i)=>Di(t.remoteStore,i)),e._onlineComponents=t}function Xd(e){return e.name==="FirebaseError"?e.code===m.FAILED_PRECONDITION||e.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Yd(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await lr(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Xd(n))throw n;Zt("Error using user provided cache. Falling back to memory cache: "+n),await lr(e,new xi)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await lr(e,new xi);return e._offlineComponents}async function Jd(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await Oi(e,e._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await Oi(e,new Kd))),e._onlineComponents}async function Zd(e){const t=await Jd(e),n=t.eventManager;return n.onListen=Bd.bind(null,t.syncEngine),n.onUnlisten=qd.bind(null,t.syncEngine),n}function tf(e,t,n={}){const r=new xt;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,h){const c=new Qd({next:f=>{o.enqueueAndForget(()=>Nd(i,l));const g=f.docs.has(a);!g&&f.fromCache?h.reject(new E(m.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&f.fromCache&&u&&u.source==="server"?h.reject(new E(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(f)},error:f=>h.reject(f)}),l=new xd(vs(a.path),c,{includeMetadataChanges:!0,J_:!0});return Dd(i,l)}(await Zd(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(e,t,n){if(!n)throw new E(m.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function nf(e,t,n,r){if(t===!0&&r===!0)throw new E(m.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Li(e){if(!y.isDocumentKey(e))throw new E(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function rf(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function jr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rf(e);throw new E(m.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new E(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new E(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}nf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ua((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new E(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new E(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new E(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class bs{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fi({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new E(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fi(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Nc;switch(r.type){case"firstParty":return new Oc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new E(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Mi.get(n);r&&(_("ComponentProvider","Removing Datastore"),Mi.delete(n),r.terminate())}(this),Promise.resolve()}}function sf(e,t,n,r={}){var s;const i=(e=jr(e,bs))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Zt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Q.MOCK_USER;else{a=hu(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new E(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Q(h)}e._authCredentials=new kc(new ta(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new xs(this.firestore,t,this._query)}}class _t{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Be(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new _t(this.firestore,t,this._key)}}class Be extends xs{constructor(t,n,r){super(t,n,vs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new _t(this.firestore,null,new y(t))}withConverter(t){return new Be(this.firestore,t,this._path)}}function of(e,t,...n){if(e=mu(e),arguments.length===1&&(t=ea.newId()),ef("doc","path",t),e instanceof bs){const r=b.fromString(t,...n);return Li(r),new _t(e,null,new y(r))}{if(!(e instanceof _t||e instanceof Be))throw new E(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(b.fromString(t,...n));return Li(r),new _t(e.firestore,e instanceof Be?e.converter:null,new y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Va(this,"async_queue_retry"),this.iu=()=>{const n=cr();n&&_("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const t=cr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const n=cr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const n=new xt;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!We(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const n=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Et("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(t,n,r){this.su(),this.ru.indexOf(t)>-1&&(n=0);const s=Ds.createAndSchedule(this,t,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&I()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const n of this.Xa)if(n.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const n=this.Xa.indexOf(t);this.Xa.splice(n,1)}}class qa extends bs{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new af}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ja(this),this._firestoreClient.terminate()}}function uf(e,t){const n=typeof e=="object"?e:gh(),r=typeof e=="string"?e:t||"(default)",s=ch(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=au("firestore");i&&sf(s,...i)}return s}function hf(e){return e._firestoreClient||ja(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ja(e){var t,n,r;const s=e._freezeSettings(),i=function(a,u,h,c){return new Kc(a,u,h,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Ua(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new Wd(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t){this._byteString=t}static fromBase64String(t){try{return new An(J.fromBase64String(t))}catch(n){throw new E(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new An(J.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new E(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new E(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new E(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return P(this._lat,t._lat)||P(this._long,t._long)}}const lf=new RegExp("[~\\*/\\[\\]]");function df(e,t,n){if(t.search(lf)>=0)throw Bi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new $a(...t.split("."))._internalPath}catch{throw Bi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Bi(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new E(m.INVALID_ARGUMENT,a+e+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ff(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Ha("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ff extends za{data(){return super.data()}}function Ha(e,t){return typeof t=="string"?df(e,t):t instanceof $a?t._internalPath:t._delegate._internalPath}class gf{convertValue(t,n="none"){switch(Bt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return L(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ft(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return qn(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new cf(L(t.latitude),L(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=ps(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Me(t));default:return null}}convertTimestamp(t){const n=Rt(t);return new nt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=b.fromString(t);B(Ra(r));const s=new Le(r.get(1),r.get(3)),i=new y(r.popFirst(5));return s.isEqual(n)||Et(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ga extends za{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new pf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Ha("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class pf extends Ga{data(t={}){return super.data(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(e){e=jr(e,_t);const t=jr(e.firestore,qa);return tf(hf(t),e._key).then(n=>Ef(t,e,n))}class yf extends gf{constructor(t){super(),this.firestore=t}convertBytes(t){return new An(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function Ef(e,t,n){const r=n.docs.get(t._key),s=new yf(e);return new Ga(e,s,t._key,r,new mf(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){ue=s})(fh),dn(new Re("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new qa(new bc(r.getProvider("auth-internal")),new Lc(r.getProvider("app-check-internal")),function(h,c){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new E(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Le(h.options.projectId,c)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Kt(oi,"4.3.2",t),Kt(oi,"4.3.2","esm2017")})();var vf="firebase",Tf="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt(vf,Tf,"app");const If={apiKey:"AIzaSyAF11X8psRyUd-y97wnYpvqmj_i3Rwmk6Q",authDomain:"fb24m-6c83c.firebaseapp.com",databaseURL:"https://fb24m-6c83c-default-rtdb.firebaseio.com",projectId:"fb24m-6c83c",storageBucket:"fb24m-6c83c.appspot.com",messagingSenderId:"779116236174",appId:"1:779116236174:web:a0386631243a36d75128df",measurementId:"G-RLG04CQLQP"},wf=Qi(If),Af=uf(wf),Rf={logOut:()=>{localStorage.removeItem("email"),localStorage.removeItem("password"),location.reload()},isLoggedIn:()=>localStorage.getItem("email")&&localStorage.getItem("password"),login:async(e,t)=>{if(localStorage.getItem("email")&&localStorage.getItem("password"))e=localStorage.getItem("email"),t=localStorage.getItem("password"),console.log("Авторизация из Localstorage");else if(!e||!t)return!1;console.log(`email: ${e} password: ${t} Авторизация`);const n=await _f(of(Af,"users",e));if(n.exists()&&n.data().password===t)return localStorage.setItem("email",e),localStorage.setItem("password",t),n.data();alert("Что-то пошло не так"),!localStorage.getItem("email")&&!localStorage.getItem("password")&&location.reload()}},Sf={},Ka=()=>{const[e,t]=Wa.useState({password:"",balance:0});return{login:(n,r)=>Rf.login(n,r).then(s=>{t({password:s?s.password:"",balance:s?s.balance:""})}),loginData:e}},Cf=()=>{const{login:e,loginData:t}=Ka(),n=r=>{r.preventDefault();const s=document.querySelector("#email").value,i=document.querySelector("#password").value;e(s,i)};return qt.jsx("div",{className:"container",children:qt.jsx(Ya,{className:Sf.card,children:qt.jsxs("form",{onSubmit:n,children:[qt.jsx(Ls,{id:"email",placeholder:"Эл. почта",autoComplete:"email"}),qt.jsx(Ls,{id:"password",placeholder:"Пароль",type:"password"}),qt.jsx(Xa,{children:"Привет!"}),t?t.balance:""]})})})},Of=Object.freeze(Object.defineProperty({__proto__:null,default:Cf,useLogin:Ka},Symbol.toStringTag,{value:"Module"}));export{Rf as f,Of as i,Ka as u};
