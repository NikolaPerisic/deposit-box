(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n.p+"static/media/Beep-tone.2bc260fb.mp3"},27:function(e,t,n){e.exports=n.p+"static/media/beep-error.c9d839e1.mp3"},32:function(e,t,n){e.exports=n(62)},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n.n(s),o=n(6),a=n.n(o),c=(n(37),n(21)),r=n(22),u=n(30),p=n(23),l=n(31),d=(n(38),n(39),function(e){return i.a.createElement("div",{className:e.backlight?"panel__display":"panel__display panel__display_off"},i.a.createElement("span",null,e.isLocked?"Locked":"Unlocked"),i.a.createElement("p",null,e.message))}),y=["7","8","9","4","5","6","1","2","3","*","0","L"],h=(n(40),function(e){var t=y.map(function(t,n){return i.a.createElement("div",{className:e.activeItem===t?"panel__keypads__item panel__keypads__item_active":"panel__keypads__item",key:"".concat(t,"-").concat(n),onClick:function(){return e.clickInput(t)}},t)});return i.a.createElement("div",{className:"panel__keypads"},t)}),m=n(7),f=n(25),k=n.n(f),T=function(e,t){return function(n){n({type:"VALIDATING"}),setTimeout(function(){n(g(e,t))},3e3)}},g=function(e,t){return function(n){k.a.get("https://9w4qucosgf.execute-api.eu-central-1.amazonaws.com/default/CR-JS_team_M02a?c\n      ode=".concat(e)).then(function(e){e.data.sn===t?(n({type:"UNLOCKING"}),setTimeout(function(){n({type:"HANDLE_UNLOCK"})},3e3)):(n({type:"ERROR"}),setTimeout(function(){n({type:"RESET"})},1200))}).catch(function(e){console.log(e)})}},b=n(26),E=n.n(b),_=n(27),O=n.n(_),L=function(e){return"error"===e?new Audio(O.a).play():new Audio(E.a).play()},v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i))))._submitTimer=null,n._backlightTimer=null,n.handleDisplayBacklight=function(){n._backlightTimer=setTimeout(function(){n.props.reset(),n.props.handleBacklight()},5e3)},n.handleKeyPress=function(e){return n.props.isBusy||" "===e||"l"!==e&&"L"!==e&&"*"!==e&&isNaN(e)?null:(n.props.isTouched||n.props.reset(),n.props.resetKeyPress(),L(),n.props.service?(clearTimeout(n._submitTimer),n.props.handleUserInput(e)):"l"===e||"L"===e?n.props.handleLockFromUser(n.props.displayMsg,n.props.isLocked):"*"===e?null:(clearTimeout(n._submitTimer),clearTimeout(n._backlightTimer),n.props.handleUserInput(e)))},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keydown",function(t){return e.handleKeyPress(t.key)}),this.handleDisplayBacklight()}},{key:"componentWillUnmount",value:function(){var e=this;document.removeEventListener("keydown",function(t){return e.handleKeyPress(t.key)}),clearTimeout(this._submitTimer),clearTimeout(this._backlightTimer)}},{key:"componentDidUpdate",value:function(){var e=this;"Error"===this.props.displayMsg&&L("error"),this.props.isTouched&&!this.props.lastKey&&(this._submitTimer=setTimeout(function(){e.props.handleAutoSubmit(e.props.code,e.props.displayMsg,e.props.isLocked,e.props.isBusy,e.props.service,e.props.serial)},1200)),clearTimeout(this._backlightTimer),this.props.backlightOn&&!this.props.service&&this.handleDisplayBacklight()}},{key:"render",value:function(){return i.a.createElement("div",{className:"panel"},i.a.createElement(d,{isLocked:this.props.isLocked,message:this.props.displayMsg,backlight:this.props.backlightOn}),i.a.createElement(h,{clickInput:this.handleKeyPress,activeItem:this.props.lastKey}),i.a.createElement("div",{className:"panel__serial"},"S/N: ",this.props.serial))}}]),t}(i.a.Component),N=Object(m.b)(function(e){return{isLocked:e.depositBox.isLocked,displayMsg:e.depositBox.displayMsg,isTouched:e.depositBox.isTouched,isBusy:e.depositBox.isBusy,backlightOn:e.depositBox.backlightOn,code:e.depositBox.code,serial:e.depositBox.serialNo,service:e.depositBox.serviceMode,lastKey:e.depositBox.key}},function(e){return{handleUserInput:function(t){return e(function(e){return{type:"HANDLE_INPUT",payload:e}}(t))},reset:function(){return e({type:"RESET"})},handleBacklight:function(){return e({type:"BACKLIGHT_OFF"})},handleLockFromUser:function(t,n){return e(function(e,t){return function(n){6!==e.length||t?(n({type:"ERROR"}),setTimeout(function(){n({type:"RESET"})},1200)):6!==e.length||t||(n({type:"LOCKING",payload:e}),setTimeout(function(){n({type:"HANDLE_LOCK"})},3e3))}}(t,n))},resetKeyPress:function(){return e(function(e){setTimeout(function(){e({type:"RESET_KEY"})},200)})},handleAutoSubmit:function(t,n,s,i,o,a){return e(function(e,t,n,s,i,o){return function(a){return"000000"===t&&n?a({type:"SERVICE"}):i?a(T(t,o)):void(e===t&&n?(a({type:"UNLOCKING"}),setTimeout(function(){a({type:"HANDLE_UNLOCK"})},3e3)):s||(a({type:"ERROR"}),setTimeout(function(){a({type:"RESET"})},1200)))}}(t,n,s,i,o,a))}}})(v),B=n(4),M=n(28),R=n(29),I=n(2),K={isLocked:!1,isTouched:!1,isBusy:!1,backlightOn:!0,code:null,serviceMode:!1,serialNo:4815162342,displayMsg:"Ready",key:null},j=Object(B.combineReducers)({depositBox:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HANDLE_INPUT":return Object(I.a)({},e,{isTouched:!0,backlightOn:!0,displayMsg:e.displayMsg+t.payload,key:t.payload});case"HANDLE_LOCK":return Object(I.a)({},e,{isLocked:!0,isBusy:!1,serviceMode:!1,displayMsg:""});case"HANDLE_UNLOCK":return Object(I.a)({},e,{isLocked:!1,isBusy:!1,serviceMode:!1,displayMsg:"Ready"});case"RESET":return Object(I.a)({},e,{isTouched:!1,isBusy:!1,displayMsg:""});case"ERROR":return Object(I.a)({},e,{displayMsg:"Error",isBusy:!0,serviceMode:!1,isTouched:!1});case"LOCKING":return Object(I.a)({},e,{displayMsg:"Locking...",code:t.payload,isTouched:!1,isBusy:!0});case"UNLOCKING":return Object(I.a)({},e,{displayMsg:"Unlocking...",code:null,isTouched:!1,isBusy:!0});case"SERVICE":return Object(I.a)({},e,{displayMsg:"Service",serviceMode:!0,isTouched:!1});case"VALIDATING":return Object(I.a)({},e,{displayMsg:"Validating...",isTouched:!1,isBusy:!0});case"BACKLIGHT_OFF":return Object(I.a)({},e,{backlightOn:!1,isTouched:!1,displayMsg:"Ready"});case"RESET_KEY":return Object(I.a)({},e,{key:null});default:return e}}});var A=Object(B.createStore)(j,Object(M.composeWithDevTools)(Object(B.applyMiddleware)(R.a)));a.a.render(i.a.createElement(m.a,{store:A},i.a.createElement(N,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.ce8c31bd.chunk.js.map