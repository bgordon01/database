(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(298);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(2);
	
	__webpack_require__(293);
	
	__webpack_require__(295);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	
	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}
	
	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);
	
	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(57);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(76);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(85);
	__webpack_require__(87);
	__webpack_require__(89);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(113);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(131);
	__webpack_require__(132);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(169);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(175);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(187);
	__webpack_require__(189);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(193);
	__webpack_require__(195);
	__webpack_require__(197);
	__webpack_require__(198);
	__webpack_require__(199);
	__webpack_require__(201);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(211);
	__webpack_require__(214);
	__webpack_require__(215);
	__webpack_require__(217);
	__webpack_require__(218);
	__webpack_require__(221);
	__webpack_require__(222);
	__webpack_require__(224);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(260);
	__webpack_require__(261);
	__webpack_require__(263);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(291);
	__webpack_require__(292);
	module.exports = __webpack_require__(9);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(4)
	  , has            = __webpack_require__(5)
	  , DESCRIPTORS    = __webpack_require__(6)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(18)
	  , META           = __webpack_require__(22).KEY
	  , $fails         = __webpack_require__(7)
	  , shared         = __webpack_require__(23)
	  , setToStringTag = __webpack_require__(24)
	  , uid            = __webpack_require__(19)
	  , wks            = __webpack_require__(25)
	  , wksExt         = __webpack_require__(26)
	  , wksDefine      = __webpack_require__(27)
	  , keyOf          = __webpack_require__(29)
	  , enumKeys       = __webpack_require__(42)
	  , isArray        = __webpack_require__(45)
	  , anObject       = __webpack_require__(12)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , createDesc     = __webpack_require__(17)
	  , _create        = __webpack_require__(46)
	  , gOPNExt        = __webpack_require__(49)
	  , $GOPD          = __webpack_require__(51)
	  , $DP            = __webpack_require__(11)
	  , $keys          = __webpack_require__(30)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(50).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(44).f  = $propertyIsEnumerable;
	  __webpack_require__(43).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(28)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 4 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(7)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , core      = __webpack_require__(9)
	  , hide      = __webpack_require__(10)
	  , redefine  = __webpack_require__(18)
	  , ctx       = __webpack_require__(20)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11)
	  , createDesc = __webpack_require__(17);
	module.exports = __webpack_require__(6) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(12)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , toPrimitive    = __webpack_require__(16)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(6) && !__webpack_require__(7)(function(){
	  return Object.defineProperty(__webpack_require__(15)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , document = __webpack_require__(4).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , hide      = __webpack_require__(10)
	  , has       = __webpack_require__(5)
	  , SRC       = __webpack_require__(19)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(9).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(21);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(19)('meta')
	  , isObject = __webpack_require__(13)
	  , has      = __webpack_require__(5)
	  , setDesc  = __webpack_require__(11).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(7)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f
	  , has = __webpack_require__(5)
	  , TAG = __webpack_require__(25)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(23)('wks')
	  , uid        = __webpack_require__(19)
	  , Symbol     = __webpack_require__(4).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(25);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(4)
	  , core           = __webpack_require__(9)
	  , LIBRARY        = __webpack_require__(28)
	  , wksExt         = __webpack_require__(26)
	  , defineProperty = __webpack_require__(11).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(30)
	  , toIObject = __webpack_require__(32);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(31)
	  , enumBugKeys = __webpack_require__(41);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(5)
	  , toIObject    = __webpack_require__(32)
	  , arrayIndexOf = __webpack_require__(36)(false)
	  , IE_PROTO     = __webpack_require__(40)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(33)
	  , defined = __webpack_require__(35);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(34);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(37)
	  , toIndex   = __webpack_require__(39);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(38)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(23)('keys')
	  , uid    = __webpack_require__(19);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(30)
	  , gOPS    = __webpack_require__(43)
	  , pIE     = __webpack_require__(44);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 44 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(34);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(12)
	  , dPs         = __webpack_require__(47)
	  , enumBugKeys = __webpack_require__(41)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(15)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(48).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(11)
	  , anObject = __webpack_require__(12)
	  , getKeys  = __webpack_require__(30);
	
	module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4).document && document.documentElement;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(32)
	  , gOPN      = __webpack_require__(50).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(31)
	  , hiddenKeys = __webpack_require__(41).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(44)
	  , createDesc     = __webpack_require__(17)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , has            = __webpack_require__(5)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(46)});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperty: __webpack_require__(11).f});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperties: __webpack_require__(47)});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(32)
	  , $getOwnPropertyDescriptor = __webpack_require__(51).f;
	
	__webpack_require__(56)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8)
	  , core    = __webpack_require__(9)
	  , fails   = __webpack_require__(7);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(58)
	  , $getPrototypeOf = __webpack_require__(59);
	
	__webpack_require__(56)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(35);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(5)
	  , toObject    = __webpack_require__(58)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(58)
	  , $keys    = __webpack_require__(30);
	
	__webpack_require__(56)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(56)('getOwnPropertyNames', function(){
	  return __webpack_require__(49).f;
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;
	
	__webpack_require__(56)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;
	
	__webpack_require__(56)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;
	
	__webpack_require__(56)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(56)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(56)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(56)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(8);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(69)});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(30)
	  , gOPS     = __webpack_require__(43)
	  , pIE      = __webpack_require__(44)
	  , toObject = __webpack_require__(58)
	  , IObject  = __webpack_require__(33)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(7)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {is: __webpack_require__(71)});

/***/ },
/* 71 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(73).set});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(13)
	  , anObject = __webpack_require__(12);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(20)(Function.call, __webpack_require__(51).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(75)
	  , test    = {};
	test[__webpack_require__(25)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(18)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(34)
	  , TAG = __webpack_require__(25)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Function', {bind: __webpack_require__(77)});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(21)
	  , isObject   = __webpack_require__(13)
	  , invoke     = __webpack_require__(78)
	  , arraySlice = [].slice
	  , factories  = {};
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11).f
	  , createDesc = __webpack_require__(17)
	  , has        = __webpack_require__(5)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(13)
	  , getPrototypeOf = __webpack_require__(59)
	  , HAS_INSTANCE   = __webpack_require__(25)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(11).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(82);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(4).parseInt
	  , $trim     = __webpack_require__(83).trim
	  , ws        = __webpack_require__(84)
	  , hex       = /^[\-+]?0[xX]/;
	
	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , defined = __webpack_require__(35)
	  , fails   = __webpack_require__(7)
	  , spaces  = __webpack_require__(84)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');
	
	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(86);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(4).parseFloat
	  , $trim       = __webpack_require__(83).trim;
	
	module.exports = 1 / $parseFloat(__webpack_require__(84) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , has               = __webpack_require__(5)
	  , cof               = __webpack_require__(34)
	  , inheritIfRequired = __webpack_require__(88)
	  , toPrimitive       = __webpack_require__(16)
	  , fails             = __webpack_require__(7)
	  , gOPN              = __webpack_require__(50).f
	  , gOPD              = __webpack_require__(51).f
	  , dP                = __webpack_require__(11).f
	  , $trim             = __webpack_require__(83).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(46)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(6) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(18)(global, NUMBER, $Number);
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(13)
	  , setPrototypeOf = __webpack_require__(73).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , toInteger    = __webpack_require__(38)
	  , aNumberValue = __webpack_require__(90)
	  , repeat       = __webpack_require__(91)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';
	
	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};
	
	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(7)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(34);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(35);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , $fails       = __webpack_require__(7)
	  , aNumberValue = __webpack_require__(90)
	  , $toPrecision = 1..toPrecision;
	
	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(8)
	  , _isFinite = __webpack_require__(4).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(96)});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(13)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(8)
	  , isInteger = __webpack_require__(96)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(86);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(82);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(8)
	  , log1p   = __webpack_require__(104)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 104 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(8)
	  , $asinh  = Math.asinh;
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(8)
	  , $atanh  = Math.atanh;
	
	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(8)
	  , sign    = __webpack_require__(108);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(8)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(8)
	  , $expm1  = __webpack_require__(112);
	
	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 112 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(8)
	  , sign      = __webpack_require__(108)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(8)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(8)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(104)});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {sign: __webpack_require__(108)});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(8)
	  , expm1   = __webpack_require__(112)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(8)
	  , expm1   = __webpack_require__(112)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(8)
	  , toIndex        = __webpack_require__(39)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(37);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(83)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(127)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(128)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(35);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(28)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(18)
	  , hide           = __webpack_require__(10)
	  , has            = __webpack_require__(5)
	  , Iterators      = __webpack_require__(129)
	  , $iterCreate    = __webpack_require__(130)
	  , setToStringTag = __webpack_require__(24)
	  , getPrototypeOf = __webpack_require__(59)
	  , ITERATOR       = __webpack_require__(25)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(46)
	  , descriptor     = __webpack_require__(17)
	  , setToStringTag = __webpack_require__(24)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(25)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $at     = __webpack_require__(127)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(8)
	  , toLength  = __webpack_require__(37)
	  , context   = __webpack_require__(133)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(135)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(134)
	  , defined  = __webpack_require__(35);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(13)
	  , cof      = __webpack_require__(34)
	  , MATCH    = __webpack_require__(25)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(25)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(8)
	  , context  = __webpack_require__(133)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(135)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(91)
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(8)
	  , toLength    = __webpack_require__(37)
	  , context     = __webpack_require__(133)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(135)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(140)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , fails   = __webpack_require__(7)
	  , defined = __webpack_require__(35)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(140)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(140)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(140)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(140)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(140)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(140)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(140)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(140)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(140)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(140)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(140)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(140)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(8)
	  , toObject    = __webpack_require__(58)
	  , toPrimitive = __webpack_require__(16);
	
	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(8)
	  , fails   = __webpack_require__(7)
	  , getTime = Date.prototype.getTime;
	
	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};
	
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(18)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(25)('toPrimitive')
	  , proto        = Date.prototype;
	
	if(!(TO_PRIMITIVE in proto))__webpack_require__(10)(proto, TO_PRIMITIVE, __webpack_require__(158));

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16)
	  , NUMBER      = 'number';
	
	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Array', {isArray: __webpack_require__(45)});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(20)
	  , $export        = __webpack_require__(8)
	  , toObject       = __webpack_require__(58)
	  , call           = __webpack_require__(161)
	  , isArrayIter    = __webpack_require__(162)
	  , toLength       = __webpack_require__(37)
	  , createProperty = __webpack_require__(163)
	  , getIterFn      = __webpack_require__(164);
	
	$export($export.S + $export.F * !__webpack_require__(165)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(12);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(129)
	  , ITERATOR   = __webpack_require__(25)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(11)
	  , createDesc      = __webpack_require__(17);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(75)
	  , ITERATOR  = __webpack_require__(25)('iterator')
	  , Iterators = __webpack_require__(129);
	module.exports = __webpack_require__(9).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(25)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(8)
	  , createProperty = __webpack_require__(163);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(8)
	  , toIObject = __webpack_require__(32)
	  , arrayJoin = [].join;
	
	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(33) != Object || !__webpack_require__(168)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(7);
	
	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(8)
	  , html       = __webpack_require__(48)
	  , cof        = __webpack_require__(34)
	  , toIndex    = __webpack_require__(39)
	  , toLength   = __webpack_require__(37)
	  , arraySlice = [].slice;
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(58)
	  , fails     = __webpack_require__(7)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];
	
	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(168)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(8)
	  , $forEach = __webpack_require__(172)(0)
	  , STRICT   = __webpack_require__(168)([].forEach, true);
	
	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(20)
	  , IObject  = __webpack_require__(33)
	  , toObject = __webpack_require__(58)
	  , toLength = __webpack_require__(37)
	  , asc      = __webpack_require__(173);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(174);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , isArray  = __webpack_require__(45)
	  , SPECIES  = __webpack_require__(25)('species');
	
	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $map    = __webpack_require__(172)(1);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $filter = __webpack_require__(172)(2);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $some   = __webpack_require__(172)(3);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $every  = __webpack_require__(172)(4);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $reduce = __webpack_require__(180);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(58)
	  , IObject   = __webpack_require__(33)
	  , toLength  = __webpack_require__(37);
	
	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $reduce = __webpack_require__(180);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(8)
	  , $indexOf      = __webpack_require__(36)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(8)
	  , toIObject     = __webpack_require__(32)
	  , toInteger     = __webpack_require__(38)
	  , toLength      = __webpack_require__(37)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(185)});
	
	__webpack_require__(186)('copyWithin');

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58)
	  , toIndex  = __webpack_require__(39)
	  , toLength = __webpack_require__(37);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(25)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Array', {fill: __webpack_require__(188)});
	
	__webpack_require__(186)('fill');

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58)
	  , toIndex  = __webpack_require__(39)
	  , toLength = __webpack_require__(37);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(8)
	  , $find   = __webpack_require__(172)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(186)(KEY);

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(8)
	  , $find   = __webpack_require__(172)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(186)(KEY);

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(192)('Array');

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(4)
	  , dP          = __webpack_require__(11)
	  , DESCRIPTORS = __webpack_require__(6)
	  , SPECIES     = __webpack_require__(25)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(186)
	  , step             = __webpack_require__(194)
	  , Iterators        = __webpack_require__(129)
	  , toIObject        = __webpack_require__(32);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(128)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(4)
	  , inheritIfRequired = __webpack_require__(88)
	  , dP                = __webpack_require__(11).f
	  , gOPN              = __webpack_require__(50).f
	  , isRegExp          = __webpack_require__(134)
	  , $flags            = __webpack_require__(196)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;
	
	if(__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(7)(function(){
	  re2[__webpack_require__(25)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(18)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(192)('RegExp');

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(12);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(198);
	var anObject    = __webpack_require__(12)
	  , $flags      = __webpack_require__(196)
	  , DESCRIPTORS = __webpack_require__(6)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];
	
	var define = function(fn){
	  __webpack_require__(18)(RegExp.prototype, TO_STRING, fn, true);
	};
	
	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(7)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(6) && /./g.flags != 'g')__webpack_require__(11).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(196)
	});

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(200)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(10)
	  , redefine = __webpack_require__(18)
	  , fails    = __webpack_require__(7)
	  , defined  = __webpack_require__(35)
	  , wks      = __webpack_require__(25);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(200)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(200)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(200)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(134)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(28)
	  , global             = __webpack_require__(4)
	  , ctx                = __webpack_require__(20)
	  , classof            = __webpack_require__(75)
	  , $export            = __webpack_require__(8)
	  , isObject           = __webpack_require__(13)
	  , aFunction          = __webpack_require__(21)
	  , anInstance         = __webpack_require__(205)
	  , forOf              = __webpack_require__(206)
	  , speciesConstructor = __webpack_require__(207)
	  , task               = __webpack_require__(208).set
	  , microtask          = __webpack_require__(209)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(25)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(210)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(24)($Promise, PROMISE);
	__webpack_require__(192)(PROMISE);
	Wrapper = __webpack_require__(9)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(165)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(20)
	  , call        = __webpack_require__(161)
	  , isArrayIter = __webpack_require__(162)
	  , anObject    = __webpack_require__(12)
	  , toLength    = __webpack_require__(37)
	  , getIterFn   = __webpack_require__(164)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(12)
	  , aFunction = __webpack_require__(21)
	  , SPECIES   = __webpack_require__(25)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(20)
	  , invoke             = __webpack_require__(78)
	  , html               = __webpack_require__(48)
	  , cel                = __webpack_require__(15)
	  , global             = __webpack_require__(4)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(34)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , macrotask = __webpack_require__(208).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(34)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(18);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(212);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(213)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(11).f
	  , create      = __webpack_require__(46)
	  , redefineAll = __webpack_require__(210)
	  , ctx         = __webpack_require__(20)
	  , anInstance  = __webpack_require__(205)
	  , defined     = __webpack_require__(35)
	  , forOf       = __webpack_require__(206)
	  , $iterDefine = __webpack_require__(128)
	  , step        = __webpack_require__(194)
	  , setSpecies  = __webpack_require__(192)
	  , DESCRIPTORS = __webpack_require__(6)
	  , fastKey     = __webpack_require__(22).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , $export           = __webpack_require__(8)
	  , redefine          = __webpack_require__(18)
	  , redefineAll       = __webpack_require__(210)
	  , meta              = __webpack_require__(22)
	  , forOf             = __webpack_require__(206)
	  , anInstance        = __webpack_require__(205)
	  , isObject          = __webpack_require__(13)
	  , fails             = __webpack_require__(7)
	  , $iterDetect       = __webpack_require__(165)
	  , setToStringTag    = __webpack_require__(24)
	  , inheritIfRequired = __webpack_require__(88);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(212);
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(213)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(172)(0)
	  , redefine     = __webpack_require__(18)
	  , meta         = __webpack_require__(22)
	  , assign       = __webpack_require__(69)
	  , weak         = __webpack_require__(216)
	  , isObject     = __webpack_require__(13)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;
	
	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(213)('WeakMap', wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(210)
	  , getWeak           = __webpack_require__(22).getWeak
	  , anObject          = __webpack_require__(12)
	  , isObject          = __webpack_require__(13)
	  , anInstance        = __webpack_require__(205)
	  , forOf             = __webpack_require__(206)
	  , createArrayMethod = __webpack_require__(172)
	  , $has              = __webpack_require__(5)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(216);
	
	// 23.4 WeakSet Objects
	__webpack_require__(213)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , $typed       = __webpack_require__(219)
	  , buffer       = __webpack_require__(220)
	  , anObject     = __webpack_require__(12)
	  , toIndex      = __webpack_require__(39)
	  , toLength     = __webpack_require__(37)
	  , isObject     = __webpack_require__(13)
	  , ArrayBuffer  = __webpack_require__(4).ArrayBuffer
	  , speciesConstructor = __webpack_require__(207)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';
	
	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});
	
	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});
	
	$export($export.P + $export.U + $export.F * __webpack_require__(7)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});
	
	__webpack_require__(192)(ARRAY_BUFFER);

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , hide   = __webpack_require__(10)
	  , uid    = __webpack_require__(19)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;
	
	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');
	
	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}
	
	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(4)
	  , DESCRIPTORS    = __webpack_require__(6)
	  , LIBRARY        = __webpack_require__(28)
	  , $typed         = __webpack_require__(219)
	  , hide           = __webpack_require__(10)
	  , redefineAll    = __webpack_require__(210)
	  , fails          = __webpack_require__(7)
	  , anInstance     = __webpack_require__(205)
	  , toInteger      = __webpack_require__(38)
	  , toLength       = __webpack_require__(37)
	  , gOPN           = __webpack_require__(50).f
	  , dP             = __webpack_require__(11).f
	  , arrayFill      = __webpack_require__(188)
	  , setToStringTag = __webpack_require__(24)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};
	
	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};
	
	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};
	
	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};
	
	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};
	
	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };
	
	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };
	
	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }
	
	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	$export($export.G + $export.W + $export.F * !__webpack_require__(219).ABV, {
	  DataView: __webpack_require__(220).DataView
	});

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(6)){
	  var LIBRARY             = __webpack_require__(28)
	    , global              = __webpack_require__(4)
	    , fails               = __webpack_require__(7)
	    , $export             = __webpack_require__(8)
	    , $typed              = __webpack_require__(219)
	    , $buffer             = __webpack_require__(220)
	    , ctx                 = __webpack_require__(20)
	    , anInstance          = __webpack_require__(205)
	    , propertyDesc        = __webpack_require__(17)
	    , hide                = __webpack_require__(10)
	    , redefineAll         = __webpack_require__(210)
	    , toInteger           = __webpack_require__(38)
	    , toLength            = __webpack_require__(37)
	    , toIndex             = __webpack_require__(39)
	    , toPrimitive         = __webpack_require__(16)
	    , has                 = __webpack_require__(5)
	    , same                = __webpack_require__(71)
	    , classof             = __webpack_require__(75)
	    , isObject            = __webpack_require__(13)
	    , toObject            = __webpack_require__(58)
	    , isArrayIter         = __webpack_require__(162)
	    , create              = __webpack_require__(46)
	    , getPrototypeOf      = __webpack_require__(59)
	    , gOPN                = __webpack_require__(50).f
	    , getIterFn           = __webpack_require__(164)
	    , uid                 = __webpack_require__(19)
	    , wks                 = __webpack_require__(25)
	    , createArrayMethod   = __webpack_require__(172)
	    , createArrayIncludes = __webpack_require__(36)
	    , speciesConstructor  = __webpack_require__(207)
	    , ArrayIterators      = __webpack_require__(193)
	    , Iterators           = __webpack_require__(129)
	    , $iterDetect         = __webpack_require__(165)
	    , setSpecies          = __webpack_require__(192)
	    , arrayFill           = __webpack_require__(188)
	    , arrayCopyWithin     = __webpack_require__(185)
	    , $DP                 = __webpack_require__(11)
	    , $GOPD               = __webpack_require__(51)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';
	
	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });
	
	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });
	
	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });
	
	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };
	
	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };
	
	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };
	
	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };
	
	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };
	
	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };
	
	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };
	
	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };
	
	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };
	
	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });
	
	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };
	
	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };
	
	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };
	
	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };
	
	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };
	
	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };
	
	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }
	
	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });
	
	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }
	
	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });
	
	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }
	
	    O[NAME] = TypedArray;
	
	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });
	
	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
	    $export($export.P, NAME, proto);
	
	    setSpecies(NAME);
	
	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});
	
	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});
	
	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});
	
	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});
	
	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(21)
	  , anObject  = __webpack_require__(12)
	  , rApply    = (__webpack_require__(4).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(7)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(8)
	  , create     = __webpack_require__(46)
	  , aFunction  = __webpack_require__(21)
	  , anObject   = __webpack_require__(12)
	  , isObject   = __webpack_require__(13)
	  , fails      = __webpack_require__(7)
	  , bind       = __webpack_require__(77)
	  , rConstruct = (__webpack_require__(4).Reflect || {}).construct;
	
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});
	
	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(11)
	  , $export     = __webpack_require__(8)
	  , anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(8)
	  , gOPD     = __webpack_require__(51).f
	  , anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(8)
	  , anObject = __webpack_require__(12);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(130)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(51)
	  , getPrototypeOf = __webpack_require__(59)
	  , has            = __webpack_require__(5)
	  , $export        = __webpack_require__(8)
	  , isObject       = __webpack_require__(13)
	  , anObject       = __webpack_require__(12);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(51)
	  , $export  = __webpack_require__(8)
	  , anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(8)
	  , getProto = __webpack_require__(59)
	  , anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(8)
	  , anObject      = __webpack_require__(12)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(243)});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(50)
	  , gOPS     = __webpack_require__(43)
	  , anObject = __webpack_require__(12)
	  , Reflect  = __webpack_require__(4).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(8)
	  , anObject           = __webpack_require__(12)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(11)
	  , gOPD           = __webpack_require__(51)
	  , getPrototypeOf = __webpack_require__(59)
	  , has            = __webpack_require__(5)
	  , $export        = __webpack_require__(8)
	  , createDesc     = __webpack_require__(17)
	  , anObject       = __webpack_require__(12)
	  , isObject       = __webpack_require__(13);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(8)
	  , setProto = __webpack_require__(73);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(8)
	  , $includes = __webpack_require__(36)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(186)('includes');

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(8)
	  , $at     = __webpack_require__(127)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8)
	  , $pad    = __webpack_require__(250);
	
	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(37)
	  , repeat   = __webpack_require__(91)
	  , defined  = __webpack_require__(35);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8)
	  , $pad    = __webpack_require__(250);
	
	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(8)
	  , defined     = __webpack_require__(35)
	  , toLength    = __webpack_require__(37)
	  , isRegExp    = __webpack_require__(134)
	  , getFlags    = __webpack_require__(196)
	  , RegExpProto = RegExp.prototype;
	
	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};
	
	__webpack_require__(130)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});
	
	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)('asyncIterator');

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)('observable');

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(8)
	  , ownKeys        = __webpack_require__(243)
	  , toIObject      = __webpack_require__(32)
	  , gOPD           = __webpack_require__(51)
	  , createProperty = __webpack_require__(163);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8)
	  , $values = __webpack_require__(259)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(30)
	  , toIObject = __webpack_require__(32)
	  , isEnum    = __webpack_require__(44).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(8)
	  , $entries = __webpack_require__(259)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(8)
	  , toObject        = __webpack_require__(58)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);
	
	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(28)|| !__webpack_require__(7)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(4)[K];
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(8)
	  , toObject        = __webpack_require__(58)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);
	
	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(8)
	  , toObject                 = __webpack_require__(58)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(59)
	  , getOwnPropertyDescriptor = __webpack_require__(51).f;
	
	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(8)
	  , toObject                 = __webpack_require__(58)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(59)
	  , getOwnPropertyDescriptor = __webpack_require__(51).f;
	
	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(8);
	
	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(267)('Map')});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(75)
	  , from    = __webpack_require__(268);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(206);
	
	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(8);
	
	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(267)('Set')});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(8);
	
	$export($export.S, 'System', {global: __webpack_require__(4)});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(8)
	  , cof     = __webpack_require__(34);
	
	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(277)
	  , anObject                  = __webpack_require__(12)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(211)
	  , $export = __webpack_require__(8)
	  , shared  = __webpack_require__(23)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(215)));
	
	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};
	
	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;
	
	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};
	
	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(214)
	  , from                    = __webpack_require__(268)
	  , metadata                = __webpack_require__(277)
	  , anObject                = __webpack_require__(12)
	  , getPrototypeOf          = __webpack_require__(59)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};
	
	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(277)
	  , anObject                = __webpack_require__(12)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};
	
	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(277)
	  , anObject                  = __webpack_require__(12)
	  , aFunction                 = __webpack_require__(21)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(8)
	  , microtask = __webpack_require__(209)()
	  , process   = __webpack_require__(4).process
	  , isNode    = __webpack_require__(34)(process) == 'process';
	
	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(8)
	  , global      = __webpack_require__(4)
	  , core        = __webpack_require__(9)
	  , microtask   = __webpack_require__(209)()
	  , OBSERVABLE  = __webpack_require__(25)('observable')
	  , aFunction   = __webpack_require__(21)
	  , anObject    = __webpack_require__(12)
	  , anInstance  = __webpack_require__(205)
	  , redefineAll = __webpack_require__(210)
	  , hide        = __webpack_require__(10)
	  , forOf       = __webpack_require__(206)
	  , RETURN      = forOf.RETURN;
	
	var getMethod = function(fn){
	  return fn == null ? undefined : aFunction(fn);
	};
	
	var cleanupSubscription = function(subscription){
	  var cleanup = subscription._c;
	  if(cleanup){
	    subscription._c = undefined;
	    cleanup();
	  }
	};
	
	var subscriptionClosed = function(subscription){
	  return subscription._o === undefined;
	};
	
	var closeSubscription = function(subscription){
	  if(!subscriptionClosed(subscription)){
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};
	
	var Subscription = function(observer, subscriber){
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup      = subscriber(observer)
	      , subscription = cleanup;
	    if(cleanup != null){
	      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch(e){
	    observer.error(e);
	    return;
	  } if(subscriptionClosed(this))cleanupSubscription(this);
	};
	
	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe(){ closeSubscription(this); }
	});
	
	var SubscriptionObserver = function(subscription){
	  this._s = subscription;
	};
	
	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if(m)return m.call(observer, value);
	      } catch(e){
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value){
	    var subscription = this._s;
	    if(subscriptionClosed(subscription))throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if(!m)throw value;
	      value = m.call(observer, value);
	    } catch(e){
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch(e){
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});
	
	var $Observable = function Observable(subscriber){
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};
	
	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer){
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn){
	    var that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject){
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next : function(value){
	          try {
	            return fn(value);
	          } catch(e){
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});
	
	redefineAll($Observable, {
	  from: function from(x){
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if(method){
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer){
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          try {
	            if(forOf(x, false, function(it){
	              observer.next(it);
	              if(done)return RETURN;
	            }) === RETURN)return;
	          } catch(e){
	            if(done)throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  },
	  of: function of(){
	    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          for(var i = 0; i < items.length; ++i){
	            observer.next(items[i]);
	            if(done)return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  }
	});
	
	hide($Observable.prototype, OBSERVABLE, function(){ return this; });
	
	$export($export.G, {Observable: $Observable});
	
	__webpack_require__(192)('Observable');

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(4)
	  , $export    = __webpack_require__(8)
	  , invoke     = __webpack_require__(78)
	  , partial    = __webpack_require__(289)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(290)
	  , invoke    = __webpack_require__(78)
	  , aFunction = __webpack_require__(21);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , $task   = __webpack_require__(208);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(193)
	  , redefine      = __webpack_require__(18)
	  , global        = __webpack_require__(4)
	  , hide          = __webpack_require__(10)
	  , Iterators     = __webpack_require__(129)
	  , wks           = __webpack_require__(25)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;
	
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(294)))

/***/ },
/* 294 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(296);
	module.exports = __webpack_require__(9).RegExp.escape;

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(8)
	  , $re     = __webpack_require__(297)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 297 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../node_modules/@types/node/index.d.ts"/>
	///<reference path="../node_modules/@types/pouchdb-core/index.d.ts"/> 
	'use strict';
	// import * as util from './lib/util'
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PouchDB = __webpack_require__(299);
	// Get the environment i.e. client / server
	var env = '';
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') env = 'server';else env = 'client';
	
	var Database = function () {
	    /**
	     * Represents the generic data access layer.
	     *
	     * @class
	     * @param {string} dbname - Database name
	     * @param {Adapters} adapter - Database adapter type
	     * @param {Object} [options]
	     *	@param {string} options.username
	     *	Logged in user's username
	     *	@param {string} options.password
	     *	Logged in user's password
	     *
	     * @author Brent Gordon
	     * @version 1.0.0
	     *
	     * @example
	     * var pouch = new Database('dbname','pouchdb');
	     * var couch = new Database('dbname','couchdb', { username: 'user001', password: 'pwd001' });
	     *
	     * @return {class} new Database class object
	     *
	     */
	    function Database() {
	        var dbname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
	        var adapter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'pouchdb';
	        var options = arguments[2];
	
	        _classCallCheck(this, Database);
	
	        // Set the database name
	        this._dbname = dbname;
	        // Set the adapter type
	        this._adapter = adapter;
	        // Set the database username
	        this._hostname = options.hostname || 'localhost';
	        // Set the database username
	        this._port = options.port || 5984;
	        // Set the database username
	        this._username = options.username || 'admin';
	        // Set the database username
	        this._password = options.password || 'password';
	        // Create the database based on the adapter
	        try {
	            // Database adapter 'pouchdb'
	            if (adapter === 'pouchdb')
	                // console.log(this)
	                if (env === 'server') {
	                    var url = 'http://' + this._hostname + ':' + this._port + '/' + this._dbname;
	                    this._db = new PouchDB(dbname, { adapter: 'http' });
	                } else this._db = new PouchDB(dbname);
	            // Database adapter 'couchdb'
	            console.log(this);
	        } catch (err) {
	            throw new Error(err);
	        }
	        // Initialise
	        // init(adapter, dbname)
	    }
	    /** */
	
	
	    _createClass(Database, [{
	        key: 'delete',
	        value: function _delete() {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                _context.prev = 0;
	
	                                if (!(this._adapter === 'pouchdb')) {
	                                    _context.next = 4;
	                                    break;
	                                }
	
	                                _context.next = 4;
	                                return this._db.destroy();
	
	                            case 4:
	                                _context.next = 9;
	                                break;
	
	                            case 6:
	                                _context.prev = 6;
	                                _context.t0 = _context['catch'](0);
	                                throw new Error(_context.t0);
	
	                            case 9:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this, [[0, 6]]);
	            }));
	        }
	        /** */
	
	    }, {
	        key: 'fetchDoc',
	        value: function fetchDoc(docId, options) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
	                return regeneratorRuntime.wrap(function _callee2$(_context2) {
	                    while (1) {
	                        switch (_context2.prev = _context2.next) {
	                            case 0:
	                                _context2.prev = 0;
	
	                                if (!(this._adapter === 'pouchdb')) {
	                                    _context2.next = 9;
	                                    break;
	                                }
	
	                                if (!options) {
	                                    _context2.next = 7;
	                                    break;
	                                }
	
	                                _context2.next = 5;
	                                return this._db.get(docId, options);
	
	                            case 5:
	                                _context2.next = 9;
	                                break;
	
	                            case 7:
	                                _context2.next = 9;
	                                return this._db.get(docId);
	
	                            case 9:
	                                _context2.next = 14;
	                                break;
	
	                            case 11:
	                                _context2.prev = 11;
	                                _context2.t0 = _context2['catch'](0);
	                                throw new Error(_context2.t0);
	
	                            case 14:
	                            case 'end':
	                                return _context2.stop();
	                        }
	                    }
	                }, _callee2, this, [[0, 11]]);
	            }));
	        }
	    }, {
	        key: 'saveDoc',
	        value: function saveDoc(doc) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
	                return regeneratorRuntime.wrap(function _callee3$(_context3) {
	                    while (1) {
	                        switch (_context3.prev = _context3.next) {
	                            case 0:
	                                _context3.prev = 0;
	
	                                if (!(this._adapter === 'pouchdb')) {
	                                    _context3.next = 6;
	                                    break;
	                                }
	
	                                _context3.next = 4;
	                                return this._db.put(doc);
	
	                            case 4:
	                                _context3.next = 8;
	                                break;
	
	                            case 6:
	                                _context3.next = 8;
	                                return this._db.put(doc);
	
	                            case 8:
	                                _context3.next = 13;
	                                break;
	
	                            case 10:
	                                _context3.prev = 10;
	                                _context3.t0 = _context3['catch'](0);
	                                throw new Error(_context3.t0);
	
	                            case 13:
	                            case 'end':
	                                return _context3.stop();
	                        }
	                    }
	                }, _callee3, this, [[0, 10]]);
	            }));
	        }
	    }, {
	        key: 'removeDoc',
	        value: function removeDoc(docId) {}
	    }, {
	        key: 'fetchAttachment',
	        value: function fetchAttachment(attId) {}
	    }, {
	        key: 'saveAttachment',
	        value: function saveAttachment(attId, content) {}
	    }, {
	        key: 'removeAttachment',
	        value: function removeAttachment(attId) {}
	    }, {
	        key: 'search',
	        value: function search(query) {}
	    }, {
	        key: 'push',
	        value: function push(remoteURL) {}
	    }, {
	        key: 'pull',
	        value: function pull(remoteURL) {}
	    }, {
	        key: 'sync',
	        value: function sync(remoteURL) {}
	    }]);
	
	    return Database;
	}();
	
	exports.Database = Database;

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {'use strict';
	
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	
	var jsExtend = __webpack_require__(300);
	var debug = _interopDefault(__webpack_require__(301));
	var inherits = _interopDefault(__webpack_require__(304));
	var lie = _interopDefault(__webpack_require__(305));
	var events = __webpack_require__(307);
	var getArguments = _interopDefault(__webpack_require__(308));
	var scopedEval = _interopDefault(__webpack_require__(309));
	var Md5 = _interopDefault(__webpack_require__(310));
	var vuvuzela = _interopDefault(__webpack_require__(311));
	var PromisePool = _interopDefault(__webpack_require__(312));
	
	/* istanbul ignore next */
	var PouchPromise = typeof Promise === 'function' ? Promise : lie;
	
	// based on https://github.com/montagejs/collections
	function mangle(key) {
	  return '$' + key;
	}
	function unmangle(key) {
	  return key.substring(1);
	}
	function _Map() {
	  this.store = {};
	}
	_Map.prototype.get = function (key) {
	  var mangled = mangle(key);
	  return this.store[mangled];
	};
	_Map.prototype.set = function (key, value) {
	  var mangled = mangle(key);
	  this.store[mangled] = value;
	  return true;
	};
	_Map.prototype.has = function (key) {
	  var mangled = mangle(key);
	  return mangled in this.store;
	};
	_Map.prototype.delete = function (key) {
	  var mangled = mangle(key);
	  var res = mangled in this.store;
	  delete this.store[mangled];
	  return res;
	};
	_Map.prototype.forEach = function (cb) {
	  var keys = Object.keys(this.store);
	  for (var i = 0, len = keys.length; i < len; i++) {
	    var key = keys[i];
	    var value = this.store[key];
	    key = unmangle(key);
	    cb(value, key);
	  }
	};
	
	function _Set(array) {
	  this.store = new _Map();
	
	  // init with an array
	  if (array && Array.isArray(array)) {
	    for (var i = 0, len = array.length; i < len; i++) {
	      this.add(array[i]);
	    }
	  }
	}
	_Set.prototype.add = function (key) {
	  return this.store.set(key, true);
	};
	_Set.prototype.has = function (key) {
	  return this.store.has(key);
	};
	
	function isBinaryObject(object) {
	  return (typeof ArrayBuffer !== 'undefined' && object instanceof ArrayBuffer) ||
	    (typeof Blob !== 'undefined' && object instanceof Blob);
	}
	
	function cloneArrayBuffer(buff) {
	  if (typeof buff.slice === 'function') {
	    return buff.slice(0);
	  }
	  // IE10-11 slice() polyfill
	  var target = new ArrayBuffer(buff.byteLength);
	  var targetArray = new Uint8Array(target);
	  var sourceArray = new Uint8Array(buff);
	  targetArray.set(sourceArray);
	  return target;
	}
	
	function cloneBinaryObject(object) {
	  if (object instanceof ArrayBuffer) {
	    return cloneArrayBuffer(object);
	  }
	  var size = object.size;
	  var type = object.type;
	  // Blob
	  if (typeof object.slice === 'function') {
	    return object.slice(0, size, type);
	  }
	  // PhantomJS slice() replacement
	  return object.webkitSlice(0, size, type);
	}
	
	// most of this is borrowed from lodash.isPlainObject:
	// https://github.com/fis-components/lodash.isplainobject/
	// blob/29c358140a74f252aeb08c9eb28bef86f2217d4a/index.js
	
	var funcToString = Function.prototype.toString;
	var objectCtorString = funcToString.call(Object);
	
	function isPlainObject(value) {
	  var proto = Object.getPrototypeOf(value);
	  /* istanbul ignore if */
	  if (proto === null) { // not sure when this happens, but I guess it can
	    return true;
	  }
	  var Ctor = proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}
	
	function clone(object) {
	  var newObject;
	  var i;
	  var len;
	
	  if (!object || typeof object !== 'object') {
	    return object;
	  }
	
	  if (Array.isArray(object)) {
	    newObject = [];
	    for (i = 0, len = object.length; i < len; i++) {
	      newObject[i] = clone(object[i]);
	    }
	    return newObject;
	  }
	
	  // special case: to avoid inconsistencies between IndexedDB
	  // and other backends, we automatically stringify Dates
	  if (object instanceof Date) {
	    return object.toISOString();
	  }
	
	  if (isBinaryObject(object)) {
	    return cloneBinaryObject(object);
	  }
	
	  if (!isPlainObject(object)) {
	    return object; // don't clone objects like Workers
	  }
	
	  newObject = {};
	  for (i in object) {
	    /* istanbul ignore else */
	    if (Object.prototype.hasOwnProperty.call(object, i)) {
	      var value = clone(object[i]);
	      if (typeof value !== 'undefined') {
	        newObject[i] = value;
	      }
	    }
	  }
	  return newObject;
	}
	
	function once(fun) {
	  var called = false;
	  return getArguments(function (args) {
	    /* istanbul ignore if */
	    if (called) {
	      // this is a smoke test and should never actually happen
	      throw new Error('once called more than once');
	    } else {
	      called = true;
	      fun.apply(this, args);
	    }
	  });
	}
	
	function toPromise(func) {
	  //create the function we will be returning
	  return getArguments(function (args) {
	    // Clone arguments
	    args = clone(args);
	    var self = this;
	    var tempCB =
	      (typeof args[args.length - 1] === 'function') ? args.pop() : false;
	    // if the last argument is a function, assume its a callback
	    var usedCB;
	    if (tempCB) {
	      // if it was a callback, create a new callback which calls it,
	      // but do so async so we don't trap any errors
	      usedCB = function (err, resp) {
	        process.nextTick(function () {
	          tempCB(err, resp);
	        });
	      };
	    }
	    var promise = new PouchPromise(function (fulfill, reject) {
	      var resp;
	      try {
	        var callback = once(function (err, mesg) {
	          if (err) {
	            reject(err);
	          } else {
	            fulfill(mesg);
	          }
	        });
	        // create a callback for this invocation
	        // apply the function in the orig context
	        args.push(callback);
	        resp = func.apply(self, args);
	        if (resp && typeof resp.then === 'function') {
	          fulfill(resp);
	        }
	      } catch (e) {
	        reject(e);
	      }
	    });
	    // if there is a callback, call it back
	    if (usedCB) {
	      promise.then(function (result) {
	        usedCB(null, result);
	      }, usedCB);
	    }
	    return promise;
	  });
	}
	
	var log = debug('pouchdb:api');
	
	function adapterFun(name, callback) {
	  function logApiCall(self, name, args) {
	    /* istanbul ignore if */
	    if (log.enabled) {
	      var logArgs = [self.name, name];
	      for (var i = 0; i < args.length - 1; i++) {
	        logArgs.push(args[i]);
	      }
	      log.apply(null, logArgs);
	
	      // override the callback itself to log the response
	      var origCallback = args[args.length - 1];
	      args[args.length - 1] = function (err, res) {
	        var responseArgs = [self.name, name];
	        responseArgs = responseArgs.concat(
	          err ? ['error', err] : ['success', res]
	        );
	        log.apply(null, responseArgs);
	        origCallback(err, res);
	      };
	    }
	  }
	
	  return toPromise(getArguments(function (args) {
	    if (this._closed) {
	      return PouchPromise.reject(new Error('database is closed'));
	    }
	    if (this._destroyed) {
	      return PouchPromise.reject(new Error('database is destroyed'));
	    }
	    var self = this;
	    logApiCall(self, name, args);
	    if (!this.taskqueue.isReady) {
	      return new PouchPromise(function (fulfill, reject) {
	        self.taskqueue.addTask(function (failed) {
	          if (failed) {
	            reject(failed);
	          } else {
	            fulfill(self[name].apply(self, args));
	          }
	        });
	      });
	    }
	    return callback.apply(this, args);
	  }));
	}
	
	// like underscore/lodash _.pick()
	function pick(obj, arr) {
	  var res = {};
	  for (var i = 0, len = arr.length; i < len; i++) {
	    var prop = arr[i];
	    if (prop in obj) {
	      res[prop] = obj[prop];
	    }
	  }
	  return res;
	}
	
	// Most browsers throttle concurrent requests at 6, so it's silly
	// to shim _bulk_get by trying to launch potentially hundreds of requests
	// and then letting the majority time out. We can handle this ourselves.
	var MAX_NUM_CONCURRENT_REQUESTS = 6;
	
	function identityFunction(x) {
	  return x;
	}
	
	function formatResultForOpenRevsGet(result) {
	  return [{
	    ok: result
	  }];
	}
	
	// shim for P/CouchDB adapters that don't directly implement _bulk_get
	function bulkGet(db, opts, callback) {
	  var requests = opts.docs;
	
	  // consolidate into one request per doc if possible
	  var requestsById = {};
	  requests.forEach(function (request) {
	    if (request.id in requestsById) {
	      requestsById[request.id].push(request);
	    } else {
	      requestsById[request.id] = [request];
	    }
	  });
	
	  var numDocs = Object.keys(requestsById).length;
	  var numDone = 0;
	  var perDocResults = new Array(numDocs);
	
	  function collapseResultsAndFinish() {
	    var results = [];
	    perDocResults.forEach(function (res) {
	      res.docs.forEach(function (info) {
	        results.push({
	          id: res.id,
	          docs: [info]
	        });
	      });
	    });
	    callback(null, {results: results});
	  }
	
	  function checkDone() {
	    if (++numDone === numDocs) {
	      collapseResultsAndFinish();
	    }
	  }
	
	  function gotResult(docIndex, id, docs) {
	    perDocResults[docIndex] = {id: id, docs: docs};
	    checkDone();
	  }
	
	  var allRequests = Object.keys(requestsById);
	
	  var i = 0;
	
	  function nextBatch() {
	
	    if (i >= allRequests.length) {
	      return;
	    }
	
	    var upTo = Math.min(i + MAX_NUM_CONCURRENT_REQUESTS, allRequests.length);
	    var batch = allRequests.slice(i, upTo);
	    processBatch(batch, i);
	    i += batch.length;
	  }
	
	  function processBatch(batch, offset) {
	    batch.forEach(function (docId, j) {
	      var docIdx = offset + j;
	      var docRequests = requestsById[docId];
	
	      // just use the first request as the "template"
	      // TODO: The _bulk_get API allows for more subtle use cases than this,
	      // but for now it is unlikely that there will be a mix of different
	      // "atts_since" or "attachments" in the same request, since it's just
	      // replicate.js that is using this for the moment.
	      // Also, atts_since is aspirational, since we don't support it yet.
	      var docOpts = pick(docRequests[0], ['atts_since', 'attachments']);
	      docOpts.open_revs = docRequests.map(function (request) {
	        // rev is optional, open_revs disallowed
	        return request.rev;
	      });
	
	      // remove falsey / undefined revisions
	      docOpts.open_revs = docOpts.open_revs.filter(identityFunction);
	
	      var formatResult = identityFunction;
	
	      if (docOpts.open_revs.length === 0) {
	        delete docOpts.open_revs;
	
	        // when fetching only the "winning" leaf,
	        // transform the result so it looks like an open_revs
	        // request
	        formatResult = formatResultForOpenRevsGet;
	      }
	
	      // globally-supplied options
	      ['revs', 'attachments', 'binary', 'ajax'].forEach(function (param) {
	        if (param in opts) {
	          docOpts[param] = opts[param];
	        }
	      });
	      db.get(docId, docOpts, function (err, res) {
	        var result;
	        /* istanbul ignore if */
	        if (err) {
	          result = [{error: err}];
	        } else {
	          result = formatResult(res);
	        }
	        gotResult(docIdx, docId, result);
	        nextBatch();
	      });
	    });
	  }
	
	  nextBatch();
	
	}
	
	function isChromeApp() {
	  return (typeof chrome !== "undefined" &&
	    typeof chrome.storage !== "undefined" &&
	    typeof chrome.storage.local !== "undefined");
	}
	
	var hasLocal;
	
	if (isChromeApp()) {
	  hasLocal = false;
	} else {
	  try {
	    localStorage.setItem('_pouch_check_localstorage', 1);
	    hasLocal = !!localStorage.getItem('_pouch_check_localstorage');
	  } catch (e) {
	    hasLocal = false;
	  }
	}
	
	function hasLocalStorage() {
	  return hasLocal;
	}
	
	inherits(Changes$1, events.EventEmitter);
	
	/* istanbul ignore next */
	function attachBrowserEvents(self) {
	  if (isChromeApp()) {
	    chrome.storage.onChanged.addListener(function (e) {
	      // make sure it's event addressed to us
	      if (e.db_name != null) {
	        //object only has oldValue, newValue members
	        self.emit(e.dbName.newValue);
	      }
	    });
	  } else if (hasLocalStorage()) {
	    if (typeof addEventListener !== 'undefined') {
	      addEventListener("storage", function (e) {
	        self.emit(e.key);
	      });
	    } else { // old IE
	      window.attachEvent("storage", function (e) {
	        self.emit(e.key);
	      });
	    }
	  }
	}
	
	function Changes$1() {
	  events.EventEmitter.call(this);
	  this._listeners = {};
	
	  attachBrowserEvents(this);
	}
	Changes$1.prototype.addListener = function (dbName, id, db, opts) {
	  /* istanbul ignore if */
	  if (this._listeners[id]) {
	    return;
	  }
	  var self = this;
	  var inprogress = false;
	  function eventFunction() {
	    /* istanbul ignore if */
	    if (!self._listeners[id]) {
	      return;
	    }
	    if (inprogress) {
	      inprogress = 'waiting';
	      return;
	    }
	    inprogress = true;
	    var changesOpts = pick(opts, [
	      'style', 'include_docs', 'attachments', 'conflicts', 'filter',
	      'doc_ids', 'view', 'since', 'query_params', 'binary'
	    ]);
	
	    /* istanbul ignore next */
	    function onError() {
	      inprogress = false;
	    }
	
	    db.changes(changesOpts).on('change', function (c) {
	      if (c.seq > opts.since && !opts.cancelled) {
	        opts.since = c.seq;
	        opts.onChange(c);
	      }
	    }).on('complete', function () {
	      if (inprogress === 'waiting') {
	        setTimeout(function (){
	          eventFunction();
	        },0);
	      }
	      inprogress = false;
	    }).on('error', onError);
	  }
	  this._listeners[id] = eventFunction;
	  this.on(dbName, eventFunction);
	};
	
	Changes$1.prototype.removeListener = function (dbName, id) {
	  /* istanbul ignore if */
	  if (!(id in this._listeners)) {
	    return;
	  }
	  events.EventEmitter.prototype.removeListener.call(this, dbName,
	    this._listeners[id]);
	  delete this._listeners[id];
	};
	
	
	/* istanbul ignore next */
	Changes$1.prototype.notifyLocalWindows = function (dbName) {
	  //do a useless change on a storage thing
	  //in order to get other windows's listeners to activate
	  if (isChromeApp()) {
	    chrome.storage.local.set({dbName: dbName});
	  } else if (hasLocalStorage()) {
	    localStorage[dbName] = (localStorage[dbName] === "a") ? "b" : "a";
	  }
	};
	
	Changes$1.prototype.notify = function (dbName) {
	  this.emit(dbName);
	  this.notifyLocalWindows(dbName);
	};
	
	function guardedConsole(method) {
	  /* istanbul ignore else */
	  if (console !== 'undefined' && method in console) {
	    var args = Array.prototype.slice.call(arguments, 1);
	    console[method].apply(console, args);
	  }
	}
	
	function randomNumber(min, max) {
	  var maxTimeout = 600000; // Hard-coded default of 10 minutes
	  min = parseInt(min, 10) || 0;
	  max = parseInt(max, 10);
	  if (max !== max || max <= min) {
	    max = (min || 1) << 1; //doubling
	  } else {
	    max = max + 1;
	  }
	  // In order to not exceed maxTimeout, pick a random value between half of maxTimeout and maxTimeout
	  if(max > maxTimeout) {
	    min = maxTimeout >> 1; // divide by two
	    max = maxTimeout;
	  }
	  var ratio = Math.random();
	  var range = max - min;
	
	  return ~~(range * ratio + min); // ~~ coerces to an int, but fast.
	}
	
	function defaultBackOff(min) {
	  var max = 0;
	  if (!min) {
	    max = 2000;
	  }
	  return randomNumber(min, max);
	}
	
	// designed to give info to browser users, who are disturbed
	// when they see http errors in the console
	function explainError(status, str) {
	  guardedConsole('info', 'The above ' + status + ' is totally normal. ' + str);
	}
	
	inherits(PouchError, Error);
	
	function PouchError(opts) {
	  Error.call(this, opts.reason);
	  this.status = opts.status;
	  this.name = opts.error;
	  this.message = opts.reason;
	  this.error = true;
	}
	
	PouchError.prototype.toString = function () {
	  return JSON.stringify({
	    status: this.status,
	    name: this.name,
	    message: this.message,
	    reason: this.reason
	  });
	};
	
	var UNAUTHORIZED = new PouchError({
	  status: 401,
	  error: 'unauthorized',
	  reason: "Name or password is incorrect."
	});
	
	var MISSING_BULK_DOCS = new PouchError({
	  status: 400,
	  error: 'bad_request',
	  reason: "Missing JSON list of 'docs'"
	});
	
	var MISSING_DOC = new PouchError({
	  status: 404,
	  error: 'not_found',
	  reason: 'missing'
	});
	
	var REV_CONFLICT = new PouchError({
	  status: 409,
	  error: 'conflict',
	  reason: 'Document update conflict'
	});
	
	var INVALID_ID = new PouchError({
	  status: 400,
	  error: 'bad_request',
	  reason: '_id field must contain a string'
	});
	
	var MISSING_ID = new PouchError({
	  status: 412,
	  error: 'missing_id',
	  reason: '_id is required for puts'
	});
	
	var RESERVED_ID = new PouchError({
	  status: 400,
	  error: 'bad_request',
	  reason: 'Only reserved document ids may start with underscore.'
	});
	
	var NOT_OPEN = new PouchError({
	  status: 412,
	  error: 'precondition_failed',
	  reason: 'Database not open'
	});
	
	var UNKNOWN_ERROR = new PouchError({
	  status: 500,
	  error: 'unknown_error',
	  reason: 'Database encountered an unknown error'
	});
	
	var BAD_ARG = new PouchError({
	  status: 500,
	  error: 'badarg',
	  reason: 'Some query argument is invalid'
	});
	
	var INVALID_REQUEST = new PouchError({
	  status: 400,
	  error: 'invalid_request',
	  reason: 'Request was invalid'
	});
	
	var QUERY_PARSE_ERROR = new PouchError({
	  status: 400,
	  error: 'query_parse_error',
	  reason: 'Some query parameter is invalid'
	});
	
	var DOC_VALIDATION = new PouchError({
	  status: 500,
	  error: 'doc_validation',
	  reason: 'Bad special document member'
	});
	
	var BAD_REQUEST = new PouchError({
	  status: 400,
	  error: 'bad_request',
	  reason: 'Something wrong with the request'
	});
	
	var NOT_AN_OBJECT = new PouchError({
	  status: 400,
	  error: 'bad_request',
	  reason: 'Document must be a JSON object'
	});
	
	var DB_MISSING = new PouchError({
	  status: 404,
	  error: 'not_found',
	  reason: 'Database not found'
	});
	
	var IDB_ERROR = new PouchError({
	  status: 500,
	  error: 'indexed_db_went_bad',
	  reason: 'unknown'
	});
	
	var WSQ_ERROR = new PouchError({
	  status: 500,
	  error: 'web_sql_went_bad',
	  reason: 'unknown'
	});
	
	var LDB_ERROR = new PouchError({
	  status: 500,
	  error: 'levelDB_went_went_bad',
	  reason: 'unknown'
	});
	
	var FORBIDDEN = new PouchError({
	  status: 403,
	  error: 'forbidden',
	  reason: 'Forbidden by design doc validate_doc_update function'
	});
	
	var INVALID_REV = new PouchError({
	  status: 400,
	  error: 'bad_request',
	  reason: 'Invalid rev format'
	});
	
	var FILE_EXISTS = new PouchError({
	  status: 412,
	  error: 'file_exists',
	  reason: 'The database could not be created, the file already exists.'
	});
	
	var MISSING_STUB = new PouchError({
	  status: 412,
	  error: 'missing_stub'
	});
	
	var INVALID_URL = new PouchError({
	  status: 413,
	  error: 'invalid_url',
	  reason: 'Provided URL is invalid'
	});
	
	function createError(error, reason) {
	  function CustomPouchError(reason) {
	    // inherit error properties from our parent error manually
	    // so as to allow proper JSON parsing.
	    /* jshint ignore:start */
	    for (var p in error) {
	      if (typeof error[p] !== 'function') {
	        this[p] = error[p];
	      }
	    }
	    /* jshint ignore:end */
	    if (reason !== undefined) {
	      this.reason = reason;
	    }
	  }
	  CustomPouchError.prototype = PouchError.prototype;
	  return new CustomPouchError(reason);
	}
	
	function generateErrorFromResponse(err) {
	
	  if (typeof err !== 'object') {
	    var data = err;
	    err = UNKNOWN_ERROR;
	    err.data = data;
	  }
	
	  if ('error' in err && err.error === 'conflict') {
	    err.name = 'conflict';
	    err.status = 409;
	  }
	
	  if (!('name' in err)) {
	    err.name = err.error || 'unknown';
	  }
	
	  if (!('status' in err)) {
	    err.status = 500;
	  }
	
	  if (!('message' in err)) {
	    err.message = err.message || err.reason;
	  }
	
	  return err;
	}
	
	function tryFilter(filter, doc, req) {
	  try {
	    return !filter(doc, req);
	  } catch (err) {
	    var msg = 'Filter function threw: ' + err.toString();
	    return createError(BAD_REQUEST, msg);
	  }
	}
	
	function filterChange(opts) {
	  var req = {};
	  var hasFilter = opts.filter && typeof opts.filter === 'function';
	  req.query = opts.query_params;
	
	  return function filter(change) {
	    if (!change.doc) {
	      // CSG sends events on the changes feed that don't have documents,
	      // this hack makes a whole lot of existing code robust.
	      change.doc = {};
	    }
	
	    var filterReturn = hasFilter && tryFilter(opts.filter, change.doc, req);
	
	    if (typeof filterReturn === 'object') {
	      return filterReturn;
	    }
	
	    if (filterReturn) {
	      return false;
	    }
	
	    if (!opts.include_docs) {
	      delete change.doc;
	    } else if (!opts.attachments) {
	      for (var att in change.doc._attachments) {
	        /* istanbul ignore else */
	        if (change.doc._attachments.hasOwnProperty(att)) {
	          change.doc._attachments[att].stub = true;
	        }
	      }
	    }
	    return true;
	  };
	}
	
	function flatten(arrs) {
	  var res = [];
	  for (var i = 0, len = arrs.length; i < len; i++) {
	    res = res.concat(arrs[i]);
	  }
	  return res;
	}
	
	// Determine id an ID is valid
	//   - invalid IDs begin with an underescore that does not begin '_design' or
	//     '_local'
	//   - any other string value is a valid id
	// Returns the specific error object for each case
	function invalidIdError(id) {
	  var err;
	  if (!id) {
	    err = createError(MISSING_ID);
	  } else if (typeof id !== 'string') {
	    err = createError(INVALID_ID);
	  } else if (/^_/.test(id) && !(/^_(design|local)/).test(id)) {
	    err = createError(RESERVED_ID);
	  }
	  if (err) {
	    throw err;
	  }
	}
	
	function listenerCount(ee, type) {
	  return 'listenerCount' in ee ? ee.listenerCount(type) :
	                                 events.EventEmitter.listenerCount(ee, type);
	}
	
	function parseDesignDocFunctionName(s) {
	  if (!s) {
	    return null;
	  }
	  var parts = s.split('/');
	  if (parts.length === 2) {
	    return parts;
	  }
	  if (parts.length === 1) {
	    return [s, s];
	  }
	  return null;
	}
	
	function normalizeDesignDocFunctionName(s) {
	  var normalized = parseDesignDocFunctionName(s);
	  return normalized ? normalized.join('/') : null;
	}
	
	// originally parseUri 1.2.2, now patched by us
	// (c) Steven Levithan <stevenlevithan.com>
	// MIT License
	var keys = ["source", "protocol", "authority", "userInfo", "user", "password",
	    "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
	var qName ="queryKey";
	var qParser = /(?:^|&)([^&=]*)=?([^&]*)/g;
	
	// use the "loose" parser
	/* jshint maxlen: false */
	var parser = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
	
	function parseUri(str) {
	  var m = parser.exec(str);
	  var uri = {};
	  var i = 14;
	
	  while (i--) {
	    var key = keys[i];
	    var value = m[i] || "";
	    var encoded = ['user', 'password'].indexOf(key) !== -1;
	    uri[key] = encoded ? decodeURIComponent(value) : value;
	  }
	
	  uri[qName] = {};
	  uri[keys[12]].replace(qParser, function ($0, $1, $2) {
	    if ($1) {
	      uri[qName][$1] = $2;
	    }
	  });
	
	  return uri;
	}
	
	// this is essentially the "update sugar" function from daleharvey/pouchdb#1388
	// the diffFun tells us what delta to apply to the doc.  it either returns
	// the doc, or false if it doesn't need to do an update after all
	function upsert(db, docId, diffFun) {
	  return new PouchPromise(function (fulfill, reject) {
	    db.get(docId, function (err, doc) {
	      if (err) {
	        /* istanbul ignore next */
	        if (err.status !== 404) {
	          return reject(err);
	        }
	        doc = {};
	      }
	
	      // the user might change the _rev, so save it for posterity
	      var docRev = doc._rev;
	      var newDoc = diffFun(doc);
	
	      if (!newDoc) {
	        // if the diffFun returns falsy, we short-circuit as
	        // an optimization
	        return fulfill({updated: false, rev: docRev});
	      }
	
	      // users aren't allowed to modify these values,
	      // so reset them here
	      newDoc._id = docId;
	      newDoc._rev = docRev;
	      fulfill(tryAndPut(db, newDoc, diffFun));
	    });
	  });
	}
	
	function tryAndPut(db, doc, diffFun) {
	  return db.put(doc).then(function (res) {
	    return {
	      updated: true,
	      rev: res.rev
	    };
	  }, function (err) {
	    /* istanbul ignore next */
	    if (err.status !== 409) {
	      throw err;
	    }
	    return upsert(db, doc._id, diffFun);
	  });
	}
	
	// BEGIN Math.uuid.js
	
	/*!
	Math.uuid.js (v1.4)
	http://www.broofa.com
	mailto:robert@broofa.com
	
	Copyright (c) 2010 Robert Kieffer
	Dual licensed under the MIT and GPL licenses.
	*/
	
	/*
	 * Generate a random uuid.
	 *
	 * USAGE: Math.uuid(length, radix)
	 *   length - the desired number of characters
	 *   radix  - the number of allowable values for each character.
	 *
	 * EXAMPLES:
	 *   // No arguments  - returns RFC4122, version 4 ID
	 *   >>> Math.uuid()
	 *   "92329D39-6F5C-4520-ABFC-AAB64544E172"
	 *
	 *   // One argument - returns ID of the specified length
	 *   >>> Math.uuid(15)     // 15 character ID (default base=62)
	 *   "VcydxgltxrVZSTV"
	 *
	 *   // Two arguments - returns ID of the specified length, and radix. 
	 *   // (Radix must be <= 62)
	 *   >>> Math.uuid(8, 2)  // 8 character ID (base=2)
	 *   "01001010"
	 *   >>> Math.uuid(8, 10) // 8 character ID (base=10)
	 *   "47473046"
	 *   >>> Math.uuid(8, 16) // 8 character ID (base=16)
	 *   "098F4D35"
	 */
	var chars = (
	  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
	  'abcdefghijklmnopqrstuvwxyz'
	).split('');
	function getValue(radix) {
	  return 0 | Math.random() * radix;
	}
	function uuid(len, radix) {
	  radix = radix || chars.length;
	  var out = '';
	  var i = -1;
	
	  if (len) {
	    // Compact form
	    while (++i < len) {
	      out += chars[getValue(radix)];
	    }
	    return out;
	  }
	    // rfc4122, version 4 form
	    // Fill in random data.  At i==19 set the high bits of clock sequence as
	    // per rfc4122, sec. 4.1.5
	  while (++i < 36) {
	    switch (i) {
	      case 8:
	      case 13:
	      case 18:
	      case 23:
	        out += '-';
	        break;
	      case 19:
	        out += chars[(getValue(16) & 0x3) | 0x8];
	        break;
	      default:
	        out += chars[getValue(16)];
	    }
	  }
	
	  return out;
	}
	
	// We fetch all leafs of the revision tree, and sort them based on tree length
	// and whether they were deleted, undeleted documents with the longest revision
	// tree (most edits) win
	// The final sort algorithm is slightly documented in a sidebar here:
	// http://guide.couchdb.org/draft/conflicts.html
	function winningRev(metadata) {
	  var winningId;
	  var winningPos;
	  var winningDeleted;
	  var toVisit = metadata.rev_tree.slice();
	  var node;
	  while ((node = toVisit.pop())) {
	    var tree = node.ids;
	    var branches = tree[2];
	    var pos = node.pos;
	    if (branches.length) { // non-leaf
	      for (var i = 0, len = branches.length; i < len; i++) {
	        toVisit.push({pos: pos + 1, ids: branches[i]});
	      }
	      continue;
	    }
	    var deleted = !!tree[1].deleted;
	    var id = tree[0];
	    // sort by deleted, then pos, then id
	    if (!winningId || (winningDeleted !== deleted ? winningDeleted :
	        winningPos !== pos ? winningPos < pos : winningId < id)) {
	      winningId = id;
	      winningPos = pos;
	      winningDeleted = deleted;
	    }
	  }
	
	  return winningPos + '-' + winningId;
	}
	
	// Pretty much all below can be combined into a higher order function to
	// traverse revisions
	// The return value from the callback will be passed as context to all
	// children of that node
	function traverseRevTree(revs, callback) {
	  var toVisit = revs.slice();
	
	  var node;
	  while ((node = toVisit.pop())) {
	    var pos = node.pos;
	    var tree = node.ids;
	    var branches = tree[2];
	    var newCtx =
	      callback(branches.length === 0, pos, tree[0], node.ctx, tree[1]);
	    for (var i = 0, len = branches.length; i < len; i++) {
	      toVisit.push({pos: pos + 1, ids: branches[i], ctx: newCtx});
	    }
	  }
	}
	
	function sortByPos(a, b) {
	  return a.pos - b.pos;
	}
	
	function collectLeaves(revs) {
	  var leaves = [];
	  traverseRevTree(revs, function (isLeaf, pos, id, acc, opts) {
	    if (isLeaf) {
	      leaves.push({rev: pos + "-" + id, pos: pos, opts: opts});
	    }
	  });
	  leaves.sort(sortByPos).reverse();
	  for (var i = 0, len = leaves.length; i < len; i++) {
	    delete leaves[i].pos;
	  }
	  return leaves;
	}
	
	// returns revs of all conflicts that is leaves such that
	// 1. are not deleted and
	// 2. are different than winning revision
	function collectConflicts(metadata) {
	  var win = winningRev(metadata);
	  var leaves = collectLeaves(metadata.rev_tree);
	  var conflicts = [];
	  for (var i = 0, len = leaves.length; i < len; i++) {
	    var leaf = leaves[i];
	    if (leaf.rev !== win && !leaf.opts.deleted) {
	      conflicts.push(leaf.rev);
	    }
	  }
	  return conflicts;
	}
	
	// compact a tree by marking its non-leafs as missing,
	// and return a list of revs to delete
	function compactTree(metadata) {
	  var revs = [];
	  traverseRevTree(metadata.rev_tree, function (isLeaf, pos,
	                                               revHash, ctx, opts) {
	    if (opts.status === 'available' && !isLeaf) {
	      revs.push(pos + '-' + revHash);
	      opts.status = 'missing';
	    }
	  });
	  return revs;
	}
	
	// build up a list of all the paths to the leafs in this revision tree
	function rootToLeaf(revs) {
	  var paths = [];
	  var toVisit = revs.slice();
	  var node;
	  while ((node = toVisit.pop())) {
	    var pos = node.pos;
	    var tree = node.ids;
	    var id = tree[0];
	    var opts = tree[1];
	    var branches = tree[2];
	    var isLeaf = branches.length === 0;
	
	    var history = node.history ? node.history.slice() : [];
	    history.push({id: id, opts: opts});
	    if (isLeaf) {
	      paths.push({pos: (pos + 1 - history.length), ids: history});
	    }
	    for (var i = 0, len = branches.length; i < len; i++) {
	      toVisit.push({pos: pos + 1, ids: branches[i], history: history});
	    }
	  }
	  return paths.reverse();
	}
	
	// for a better overview of what this is doing, read:
	// https://github.com/apache/couchdb-couch/blob/master/src/couch_key_tree.erl
	//
	// But for a quick intro, CouchDB uses a revision tree to store a documents
	// history, A -> B -> C, when a document has conflicts, that is a branch in the
	// tree, A -> (B1 | B2 -> C), We store these as a nested array in the format
	//
	// KeyTree = [Path ... ]
	// Path = {pos: position_from_root, ids: Tree}
	// Tree = [Key, Opts, [Tree, ...]], in particular single node: [Key, []]
	
	function sortByPos$1(a, b) {
	  return a.pos - b.pos;
	}
	
	// classic binary search
	function binarySearch(arr, item, comparator) {
	  var low = 0;
	  var high = arr.length;
	  var mid;
	  while (low < high) {
	    mid = (low + high) >>> 1;
	    if (comparator(arr[mid], item) < 0) {
	      low = mid + 1;
	    } else {
	      high = mid;
	    }
	  }
	  return low;
	}
	
	// assuming the arr is sorted, insert the item in the proper place
	function insertSorted(arr, item, comparator) {
	  var idx = binarySearch(arr, item, comparator);
	  arr.splice(idx, 0, item);
	}
	
	// Turn a path as a flat array into a tree with a single branch.
	// If any should be stemmed from the beginning of the array, that's passed
	// in as the second argument
	function pathToTree(path, numStemmed) {
	  var root;
	  var leaf;
	  for (var i = numStemmed, len = path.length; i < len; i++) {
	    var node = path[i];
	    var currentLeaf = [node.id, node.opts, []];
	    if (leaf) {
	      leaf[2].push(currentLeaf);
	      leaf = currentLeaf;
	    } else {
	      root = leaf = currentLeaf;
	    }
	  }
	  return root;
	}
	
	// compare the IDs of two trees
	function compareTree(a, b) {
	  return a[0] < b[0] ? -1 : 1;
	}
	
	// Merge two trees together
	// The roots of tree1 and tree2 must be the same revision
	function mergeTree(in_tree1, in_tree2) {
	  var queue = [{tree1: in_tree1, tree2: in_tree2}];
	  var conflicts = false;
	  while (queue.length > 0) {
	    var item = queue.pop();
	    var tree1 = item.tree1;
	    var tree2 = item.tree2;
	
	    if (tree1[1].status || tree2[1].status) {
	      tree1[1].status =
	        (tree1[1].status ===  'available' ||
	        tree2[1].status === 'available') ? 'available' : 'missing';
	    }
	
	    for (var i = 0; i < tree2[2].length; i++) {
	      if (!tree1[2][0]) {
	        conflicts = 'new_leaf';
	        tree1[2][0] = tree2[2][i];
	        continue;
	      }
	
	      var merged = false;
	      for (var j = 0; j < tree1[2].length; j++) {
	        if (tree1[2][j][0] === tree2[2][i][0]) {
	          queue.push({tree1: tree1[2][j], tree2: tree2[2][i]});
	          merged = true;
	        }
	      }
	      if (!merged) {
	        conflicts = 'new_branch';
	        insertSorted(tree1[2], tree2[2][i], compareTree);
	      }
	    }
	  }
	  return {conflicts: conflicts, tree: in_tree1};
	}
	
	function doMerge(tree, path, dontExpand) {
	  var restree = [];
	  var conflicts = false;
	  var merged = false;
	  var res;
	
	  if (!tree.length) {
	    return {tree: [path], conflicts: 'new_leaf'};
	  }
	
	  for (var i = 0, len = tree.length; i < len; i++) {
	    var branch = tree[i];
	    if (branch.pos === path.pos && branch.ids[0] === path.ids[0]) {
	      // Paths start at the same position and have the same root, so they need
	      // merged
	      res = mergeTree(branch.ids, path.ids);
	      restree.push({pos: branch.pos, ids: res.tree});
	      conflicts = conflicts || res.conflicts;
	      merged = true;
	    } else if (dontExpand !== true) {
	      // The paths start at a different position, take the earliest path and
	      // traverse up until it as at the same point from root as the path we
	      // want to merge.  If the keys match we return the longer path with the
	      // other merged After stemming we dont want to expand the trees
	
	      var t1 = branch.pos < path.pos ? branch : path;
	      var t2 = branch.pos < path.pos ? path : branch;
	      var diff = t2.pos - t1.pos;
	
	      var candidateParents = [];
	
	      var trees = [];
	      trees.push({ids: t1.ids, diff: diff, parent: null, parentIdx: null});
	      while (trees.length > 0) {
	        var item = trees.pop();
	        if (item.diff === 0) {
	          if (item.ids[0] === t2.ids[0]) {
	            candidateParents.push(item);
	          }
	          continue;
	        }
	        var elements = item.ids[2];
	        for (var j = 0, elementsLen = elements.length; j < elementsLen; j++) {
	          trees.push({
	            ids: elements[j],
	            diff: item.diff - 1,
	            parent: item.ids,
	            parentIdx: j
	          });
	        }
	      }
	
	      var el = candidateParents[0];
	
	      if (!el) {
	        restree.push(branch);
	      } else {
	        res = mergeTree(el.ids, t2.ids);
	        el.parent[2][el.parentIdx] = res.tree;
	        restree.push({pos: t1.pos, ids: t1.ids});
	        conflicts = conflicts || res.conflicts;
	        merged = true;
	      }
	    } else {
	      restree.push(branch);
	    }
	  }
	
	  // We didnt find
	  if (!merged) {
	    restree.push(path);
	  }
	
	  restree.sort(sortByPos$1);
	
	  return {
	    tree: restree,
	    conflicts: conflicts || 'internal_node'
	  };
	}
	
	// To ensure we dont grow the revision tree infinitely, we stem old revisions
	function stem(tree, depth) {
	  // First we break out the tree into a complete list of root to leaf paths
	  var paths = rootToLeaf(tree);
	  var maybeStem = {};
	
	  var result;
	  for (var i = 0, len = paths.length; i < len; i++) {
	    // Then for each path, we cut off the start of the path based on the
	    // `depth` to stem to, and generate a new set of flat trees
	    var path = paths[i];
	    var stemmed = path.ids;
	    var numStemmed = Math.max(0, stemmed.length - depth);
	    var stemmedNode = {
	      pos: path.pos + numStemmed,
	      ids: pathToTree(stemmed, numStemmed)
	    };
	
	    for (var s = 0; s < numStemmed; s++) {
	      var rev = (path.pos + s) + '-' + stemmed[s].id;
	      maybeStem[rev] = true;
	    }
	
	    // Then we remerge all those flat trees together, ensuring that we dont
	    // connect trees that would go beyond the depth limit
	    if (result) {
	      result = doMerge(result, stemmedNode, true).tree;
	    } else {
	      result = [stemmedNode];
	    }
	  }
	
	  traverseRevTree(result, function (isLeaf, pos, revHash) {
	    // some revisions may have been removed in a branch but not in another
	    delete maybeStem[pos + '-' + revHash];
	  });
	
	  return {
	    tree: result,
	    revs: Object.keys(maybeStem)
	  };
	}
	
	function merge(tree, path, depth) {
	  var newTree = doMerge(tree, path);
	  var stemmed = stem(newTree.tree, depth);
	  return {
	    tree: stemmed.tree,
	    stemmedRevs: stemmed.revs,
	    conflicts: newTree.conflicts
	  };
	}
	
	// return true if a rev exists in the rev tree, false otherwise
	function revExists(revs, rev) {
	  var toVisit = revs.slice();
	  var splitRev = rev.split('-');
	  var targetPos = parseInt(splitRev[0], 10);
	  var targetId = splitRev[1];
	
	  var node;
	  while ((node = toVisit.pop())) {
	    if (node.pos === targetPos && node.ids[0] === targetId) {
	      return true;
	    }
	    var branches = node.ids[2];
	    for (var i = 0, len = branches.length; i < len; i++) {
	      toVisit.push({pos: node.pos + 1, ids: branches[i]});
	    }
	  }
	  return false;
	}
	
	function getTrees(node) {
	  return node.ids;
	}
	
	// check if a specific revision of a doc has been deleted
	//  - metadata: the metadata object from the doc store
	//  - rev: (optional) the revision to check. defaults to winning revision
	function isDeleted(metadata, rev) {
	  if (!rev) {
	    rev = winningRev(metadata);
	  }
	  var id = rev.substring(rev.indexOf('-') + 1);
	  var toVisit = metadata.rev_tree.map(getTrees);
	
	  var tree;
	  while ((tree = toVisit.pop())) {
	    if (tree[0] === id) {
	      return !!tree[1].deleted;
	    }
	    toVisit = toVisit.concat(tree[2]);
	  }
	}
	
	function isLocalId(id) {
	  return (/^_local/).test(id);
	}
	
	function evalFilter(input) {
	  return scopedEval('"use strict";\nreturn ' + input + ';', {});
	}
	
	function evalView(input) {
	  var code = [
	    'return function(doc) {',
	    '  "use strict";',
	    '  var emitted = false;',
	    '  var emit = function (a, b) {',
	    '    emitted = true;',
	    '  };',
	    '  var view = ' + input + ';',
	    '  view(doc);',
	    '  if (emitted) {',
	    '    return true;',
	    '  }',
	    '};'
	  ].join('\n');
	
	  return scopedEval(code, {});
	}
	
	inherits(Changes, events.EventEmitter);
	
	function tryCatchInChangeListener(self, change) {
	  // isolate try/catches to avoid V8 deoptimizations
	  try {
	    self.emit('change', change);
	  } catch (e) {
	    guardedConsole('error', 'Error in .on("change", function):', e);
	  }
	}
	
	function Changes(db, opts, callback) {
	  events.EventEmitter.call(this);
	  var self = this;
	  this.db = db;
	  opts = opts ? clone(opts) : {};
	  var complete = opts.complete = once(function (err, resp) {
	    if (err) {
	      if (listenerCount(self, 'error') > 0) {
	        self.emit('error', err);
	      }
	    } else {
	      self.emit('complete', resp);
	    }
	    self.removeAllListeners();
	    db.removeListener('destroyed', onDestroy);
	  });
	  if (callback) {
	    self.on('complete', function (resp) {
	      callback(null, resp);
	    });
	    self.on('error', callback);
	  }
	  function onDestroy() {
	    self.cancel();
	  }
	  db.once('destroyed', onDestroy);
	
	  opts.onChange = function (change) {
	    /* istanbul ignore if */
	    if (opts.isCancelled) {
	      return;
	    }
	    tryCatchInChangeListener(self, change);
	  };
	
	  var promise = new PouchPromise(function (fulfill, reject) {
	    opts.complete = function (err, res) {
	      if (err) {
	        reject(err);
	      } else {
	        fulfill(res);
	      }
	    };
	  });
	  self.once('cancel', function () {
	    db.removeListener('destroyed', onDestroy);
	    opts.complete(null, {status: 'cancelled'});
	  });
	  this.then = promise.then.bind(promise);
	  this['catch'] = promise['catch'].bind(promise);
	  this.then(function (result) {
	    complete(null, result);
	  }, complete);
	
	
	
	  if (!db.taskqueue.isReady) {
	    db.taskqueue.addTask(function (failed) {
	      if (failed) {
	        opts.complete(failed);
	      } else if (self.isCancelled) {
	        self.emit('cancel');
	      } else {
	        self.doChanges(opts);
	      }
	    });
	  } else {
	    self.doChanges(opts);
	  }
	}
	Changes.prototype.cancel = function () {
	  this.isCancelled = true;
	  if (this.db.taskqueue.isReady) {
	    this.emit('cancel');
	  }
	};
	function processChange(doc, metadata, opts) {
	  var changeList = [{rev: doc._rev}];
	  if (opts.style === 'all_docs') {
	    changeList = collectLeaves(metadata.rev_tree)
	    .map(function (x) { return {rev: x.rev}; });
	  }
	  var change = {
	    id: metadata.id,
	    changes: changeList,
	    doc: doc
	  };
	
	  if (isDeleted(metadata, doc._rev)) {
	    change.deleted = true;
	  }
	  if (opts.conflicts) {
	    change.doc._conflicts = collectConflicts(metadata);
	    if (!change.doc._conflicts.length) {
	      delete change.doc._conflicts;
	    }
	  }
	  return change;
	}
	
	Changes.prototype.doChanges = function (opts) {
	  var self = this;
	  var callback = opts.complete;
	
	  opts = clone(opts);
	  if ('live' in opts && !('continuous' in opts)) {
	    opts.continuous = opts.live;
	  }
	  opts.processChange = processChange;
	
	  if (opts.since === 'latest') {
	    opts.since = 'now';
	  }
	  if (!opts.since) {
	    opts.since = 0;
	  }
	  if (opts.since === 'now') {
	    this.db.info().then(function (info) {
	      /* istanbul ignore if */
	      if (self.isCancelled) {
	        callback(null, {status: 'cancelled'});
	        return;
	      }
	      opts.since = info.update_seq;
	      self.doChanges(opts);
	    }, callback);
	    return;
	  }
	
	
	  if (opts.view && !opts.filter) {
	    opts.filter = '_view';
	  }
	
	  if (opts.filter && typeof opts.filter === 'string') {
	    if (opts.filter === '_view') {
	      opts.view = normalizeDesignDocFunctionName(opts.view);
	    } else {
	      opts.filter = normalizeDesignDocFunctionName(opts.filter);
	    }
	
	    if (this.db.type() !== 'http' && !opts.doc_ids) {
	      return this.filterChanges(opts);
	    }
	  }
	
	  if (!('descending' in opts)) {
	    opts.descending = false;
	  }
	
	  // 0 and 1 should return 1 document
	  opts.limit = opts.limit === 0 ? 1 : opts.limit;
	  opts.complete = callback;
	  var newPromise = this.db._changes(opts);
	  /* istanbul ignore else */
	  if (newPromise && typeof newPromise.cancel === 'function') {
	    var cancel = self.cancel;
	    self.cancel = getArguments(function (args) {
	      newPromise.cancel();
	      cancel.apply(this, args);
	    });
	  }
	};
	
	Changes.prototype.filterChanges = function (opts) {
	  var self = this;
	  var callback = opts.complete;
	  if (opts.filter === '_view') {
	    if (!opts.view || typeof opts.view !== 'string') {
	      var err = createError(BAD_REQUEST,
	        '`view` filter parameter not found or invalid.');
	      return callback(err);
	    }
	    // fetch a view from a design doc, make it behave like a filter
	    var viewName = parseDesignDocFunctionName(opts.view);
	    this.db.get('_design/' + viewName[0], function (err, ddoc) {
	      /* istanbul ignore if */
	      if (self.isCancelled) {
	        return callback(null, {status: 'cancelled'});
	      }
	      /* istanbul ignore next */
	      if (err) {
	        return callback(generateErrorFromResponse(err));
	      }
	      var mapFun = ddoc && ddoc.views && ddoc.views[viewName[1]] &&
	        ddoc.views[viewName[1]].map;
	      if (!mapFun) {
	        return callback(createError(MISSING_DOC,
	          (ddoc.views ? 'missing json key: ' + viewName[1] :
	            'missing json key: views')));
	      }
	      opts.filter = evalView(mapFun);
	      self.doChanges(opts);
	    });
	  } else {
	    // fetch a filter from a design doc
	    var filterName = parseDesignDocFunctionName(opts.filter);
	    if (!filterName) {
	      return self.doChanges(opts);
	    }
	    this.db.get('_design/' + filterName[0], function (err, ddoc) {
	      /* istanbul ignore if */
	      if (self.isCancelled) {
	        return callback(null, {status: 'cancelled'});
	      }
	      /* istanbul ignore next */
	      if (err) {
	        return callback(generateErrorFromResponse(err));
	      }
	      var filterFun = ddoc && ddoc.filters && ddoc.filters[filterName[1]];
	      if (!filterFun) {
	        return callback(createError(MISSING_DOC,
	          ((ddoc && ddoc.filters) ? 'missing json key: ' + filterName[1]
	            : 'missing json key: filters')));
	      }
	      opts.filter = evalFilter(filterFun);
	      self.doChanges(opts);
	    });
	  }
	};
	
	/*
	 * A generic pouch adapter
	 */
	
	function compare(left, right) {
	  return left < right ? -1 : left > right ? 1 : 0;
	}
	
	// returns first element of arr satisfying callback predicate
	function arrayFirst(arr, callback) {
	  for (var i = 0; i < arr.length; i++) {
	    if (callback(arr[i], i) === true) {
	      return arr[i];
	    }
	  }
	}
	
	// Wrapper for functions that call the bulkdocs api with a single doc,
	// if the first result is an error, return an error
	function yankError(callback) {
	  return function (err, results) {
	    if (err || (results[0] && results[0].error)) {
	      callback(err || results[0]);
	    } else {
	      callback(null, results.length ? results[0]  : results);
	    }
	  };
	}
	
	// clean docs given to us by the user
	function cleanDocs(docs) {
	  for (var i = 0; i < docs.length; i++) {
	    var doc = docs[i];
	    if (doc._deleted) {
	      delete doc._attachments; // ignore atts for deleted docs
	    } else if (doc._attachments) {
	      // filter out extraneous keys from _attachments
	      var atts = Object.keys(doc._attachments);
	      for (var j = 0; j < atts.length; j++) {
	        var att = atts[j];
	        doc._attachments[att] = pick(doc._attachments[att],
	          ['data', 'digest', 'content_type', 'length', 'revpos', 'stub']);
	      }
	    }
	  }
	}
	
	// compare two docs, first by _id then by _rev
	function compareByIdThenRev(a, b) {
	  var idCompare = compare(a._id, b._id);
	  if (idCompare !== 0) {
	    return idCompare;
	  }
	  var aStart = a._revisions ? a._revisions.start : 0;
	  var bStart = b._revisions ? b._revisions.start : 0;
	  return compare(aStart, bStart);
	}
	
	// for every node in a revision tree computes its distance from the closest
	// leaf
	function computeHeight(revs) {
	  var height = {};
	  var edges = [];
	  traverseRevTree(revs, function (isLeaf, pos, id, prnt) {
	    var rev = pos + "-" + id;
	    if (isLeaf) {
	      height[rev] = 0;
	    }
	    if (prnt !== undefined) {
	      edges.push({from: prnt, to: rev});
	    }
	    return rev;
	  });
	
	  edges.reverse();
	  edges.forEach(function (edge) {
	    if (height[edge.from] === undefined) {
	      height[edge.from] = 1 + height[edge.to];
	    } else {
	      height[edge.from] = Math.min(height[edge.from], 1 + height[edge.to]);
	    }
	  });
	  return height;
	}
	
	function allDocsKeysQuery(api, opts, callback) {
	  var keys =  ('limit' in opts) ?
	      opts.keys.slice(opts.skip, opts.limit + opts.skip) :
	      (opts.skip > 0) ? opts.keys.slice(opts.skip) : opts.keys;
	  if (opts.descending) {
	    keys.reverse();
	  }
	  if (!keys.length) {
	    return api._allDocs({limit: 0}, callback);
	  }
	  var finalResults = {
	    offset: opts.skip
	  };
	  return PouchPromise.all(keys.map(function (key) {
	    var subOpts = jsExtend.extend({key: key, deleted: 'ok'}, opts);
	    ['limit', 'skip', 'keys'].forEach(function (optKey) {
	      delete subOpts[optKey];
	    });
	    return new PouchPromise(function (resolve, reject) {
	      api._allDocs(subOpts, function (err, res) {
	        /* istanbul ignore if */
	        if (err) {
	          return reject(err);
	        }
	        finalResults.total_rows = res.total_rows;
	        resolve(res.rows[0] || {key: key, error: 'not_found'});
	      });
	    });
	  })).then(function (results) {
	    finalResults.rows = results;
	    return finalResults;
	  });
	}
	
	// all compaction is done in a queue, to avoid attaching
	// too many listeners at once
	function doNextCompaction(self) {
	  var task = self._compactionQueue[0];
	  var opts = task.opts;
	  var callback = task.callback;
	  self.get('_local/compaction').catch(function () {
	    return false;
	  }).then(function (doc) {
	    if (doc && doc.last_seq) {
	      opts.last_seq = doc.last_seq;
	    }
	    self._compact(opts, function (err, res) {
	      /* istanbul ignore if */
	      if (err) {
	        callback(err);
	      } else {
	        callback(null, res);
	      }
	      process.nextTick(function () {
	        self._compactionQueue.shift();
	        if (self._compactionQueue.length) {
	          doNextCompaction(self);
	        }
	      });
	    });
	  });
	}
	
	function attachmentNameError(name) {
	  if (name.charAt(0) === '_') {
	    return name + 'is not a valid attachment name, attachment ' +
	      'names cannot start with \'_\'';
	  }
	  return false;
	}
	
	inherits(AbstractPouchDB, events.EventEmitter);
	
	function AbstractPouchDB() {
	  events.EventEmitter.call(this);
	}
	
	AbstractPouchDB.prototype.post =
	  adapterFun('post', function (doc, opts, callback) {
	  if (typeof opts === 'function') {
	    callback = opts;
	    opts = {};
	  }
	  if (typeof doc !== 'object' || Array.isArray(doc)) {
	    return callback(createError(NOT_AN_OBJECT));
	  }
	  this.bulkDocs({docs: [doc]}, opts, yankError(callback));
	});
	
	AbstractPouchDB.prototype.put = adapterFun('put', function (doc, opts, cb) {
	  if (typeof opts === 'function') {
	    cb = opts;
	    opts = {};
	  }
	  if (typeof doc !== 'object' || Array.isArray(doc)) {
	    return cb(createError(NOT_AN_OBJECT));
	  }
	  invalidIdError(doc._id);
	  if (isLocalId(doc._id) && typeof this._putLocal === 'function') {
	    if (doc._deleted) {
	      return this._removeLocal(doc, cb);
	    } else {
	      return this._putLocal(doc, cb);
	    }
	  }
	  if (typeof this._put === 'function' && opts.new_edits !== false) {
	    this._put(doc, opts, cb);
	  } else {
	    this.bulkDocs({docs: [doc]}, opts, yankError(cb));
	  }
	});
	
	AbstractPouchDB.prototype.putAttachment =
	  adapterFun('putAttachment', function (docId, attachmentId, rev,
	                                              blob, type) {
	  var api = this;
	  if (typeof type === 'function') {
	    type = blob;
	    blob = rev;
	    rev = null;
	  }
	  // Lets fix in https://github.com/pouchdb/pouchdb/issues/3267
	  /* istanbul ignore if */
	  if (typeof type === 'undefined') {
	    type = blob;
	    blob = rev;
	    rev = null;
	  }
	
	  function createAttachment(doc) {
	    var prevrevpos = '_rev' in doc ? parseInt(doc._rev, 10) : 0;
	    doc._attachments = doc._attachments || {};
	    doc._attachments[attachmentId] = {
	      content_type: type,
	      data: blob,
	      revpos: ++prevrevpos
	    };
	    return api.put(doc);
	  }
	
	  return api.get(docId).then(function (doc) {
	    if (doc._rev !== rev) {
	      throw createError(REV_CONFLICT);
	    }
	
	    return createAttachment(doc);
	  }, function (err) {
	     // create new doc
	    /* istanbul ignore else */
	    if (err.reason === MISSING_DOC.message) {
	      return createAttachment({_id: docId});
	    } else {
	      throw err;
	    }
	  });
	});
	
	AbstractPouchDB.prototype.removeAttachment =
	  adapterFun('removeAttachment', function (docId, attachmentId, rev,
	                                                 callback) {
	  var self = this;
	  self.get(docId, function (err, obj) {
	    /* istanbul ignore if */
	    if (err) {
	      callback(err);
	      return;
	    }
	    if (obj._rev !== rev) {
	      callback(createError(REV_CONFLICT));
	      return;
	    }
	    /* istanbul ignore if */
	    if (!obj._attachments) {
	      return callback();
	    }
	    delete obj._attachments[attachmentId];
	    if (Object.keys(obj._attachments).length === 0) {
	      delete obj._attachments;
	    }
	    self.put(obj, callback);
	  });
	});
	
	AbstractPouchDB.prototype.remove =
	  adapterFun('remove', function (docOrId, optsOrRev, opts, callback) {
	  var doc;
	  if (typeof optsOrRev === 'string') {
	    // id, rev, opts, callback style
	    doc = {
	      _id: docOrId,
	      _rev: optsOrRev
	    };
	    if (typeof opts === 'function') {
	      callback = opts;
	      opts = {};
	    }
	  } else {
	    // doc, opts, callback style
	    doc = docOrId;
	    if (typeof optsOrRev === 'function') {
	      callback = optsOrRev;
	      opts = {};
	    } else {
	      callback = opts;
	      opts = optsOrRev;
	    }
	  }
	  opts = opts || {};
	  opts.was_delete = true;
	  var newDoc = {_id: doc._id, _rev: (doc._rev || opts.rev)};
	  newDoc._deleted = true;
	  if (isLocalId(newDoc._id) && typeof this._removeLocal === 'function') {
	    return this._removeLocal(doc, callback);
	  }
	  this.bulkDocs({docs: [newDoc]}, opts, yankError(callback));
	});
	
	AbstractPouchDB.prototype.revsDiff =
	  adapterFun('revsDiff', function (req, opts, callback) {
	  if (typeof opts === 'function') {
	    callback = opts;
	    opts = {};
	  }
	  var ids = Object.keys(req);
	
	  if (!ids.length) {
	    return callback(null, {});
	  }
	
	  var count = 0;
	  var missing = new _Map();
	
	  function addToMissing(id, revId) {
	    if (!missing.has(id)) {
	      missing.set(id, {missing: []});
	    }
	    missing.get(id).missing.push(revId);
	  }
	
	  function processDoc(id, rev_tree) {
	    // Is this fast enough? Maybe we should switch to a set simulated by a map
	    var missingForId = req[id].slice(0);
	    traverseRevTree(rev_tree, function (isLeaf, pos, revHash, ctx,
	      opts) {
	        var rev = pos + '-' + revHash;
	        var idx = missingForId.indexOf(rev);
	        if (idx === -1) {
	          return;
	        }
	
	        missingForId.splice(idx, 1);
	        /* istanbul ignore if */
	        if (opts.status !== 'available') {
	          addToMissing(id, rev);
	        }
	      });
	
	    // Traversing the tree is synchronous, so now `missingForId` contains
	    // revisions that were not found in the tree
	    missingForId.forEach(function (rev) {
	      addToMissing(id, rev);
	    });
	  }
	
	  ids.map(function (id) {
	    this._getRevisionTree(id, function (err, rev_tree) {
	      if (err && err.status === 404 && err.message === 'missing') {
	        missing.set(id, {missing: req[id]});
	      } else if (err) {
	        /* istanbul ignore next */
	        return callback(err);
	      } else {
	        processDoc(id, rev_tree);
	      }
	
	      if (++count === ids.length) {
	        // convert LazyMap to object
	        var missingObj = {};
	        missing.forEach(function (value, key) {
	          missingObj[key] = value;
	        });
	        return callback(null, missingObj);
	      }
	    });
	  }, this);
	});
	
	// _bulk_get API for faster replication, as described in
	// https://github.com/apache/couchdb-chttpd/pull/33
	// At the "abstract" level, it will just run multiple get()s in
	// parallel, because this isn't much of a performance cost
	// for local databases (except the cost of multiple transactions, which is
	// small). The http adapter overrides this in order
	// to do a more efficient single HTTP request.
	AbstractPouchDB.prototype.bulkGet =
	  adapterFun('bulkGet', function (opts, callback) {
	  bulkGet(this, opts, callback);
	});
	
	// compact one document and fire callback
	// by compacting we mean removing all revisions which
	// are further from the leaf in revision tree than max_height
	AbstractPouchDB.prototype.compactDocument =
	  adapterFun('compactDocument', function (docId, maxHeight, callback) {
	  var self = this;
	  this._getRevisionTree(docId, function (err, revTree) {
	    /* istanbul ignore if */
	    if (err) {
	      return callback(err);
	    }
	    var height = computeHeight(revTree);
	    var candidates = [];
	    var revs = [];
	    Object.keys(height).forEach(function (rev) {
	      if (height[rev] > maxHeight) {
	        candidates.push(rev);
	      }
	    });
	
	    traverseRevTree(revTree, function (isLeaf, pos, revHash, ctx, opts) {
	      var rev = pos + '-' + revHash;
	      if (opts.status === 'available' && candidates.indexOf(rev) !== -1) {
	        revs.push(rev);
	      }
	    });
	    self._doCompaction(docId, revs, callback);
	  });
	});
	
	// compact the whole database using single document
	// compaction
	AbstractPouchDB.prototype.compact =
	  adapterFun('compact', function (opts, callback) {
	  if (typeof opts === 'function') {
	    callback = opts;
	    opts = {};
	  }
	
	  var self = this;
	  opts = opts || {};
	
	  self._compactionQueue = self._compactionQueue || [];
	  self._compactionQueue.push({opts: opts, callback: callback});
	  if (self._compactionQueue.length === 1) {
	    doNextCompaction(self);
	  }
	});
	AbstractPouchDB.prototype._compact = function (opts, callback) {
	  var self = this;
	  var changesOpts = {
	    return_docs: false,
	    last_seq: opts.last_seq || 0
	  };
	  var promises = [];
	
	  function onChange(row) {
	    promises.push(self.compactDocument(row.id, 0));
	  }
	  function onComplete(resp) {
	    var lastSeq = resp.last_seq;
	    PouchPromise.all(promises).then(function () {
	      return upsert(self, '_local/compaction', function deltaFunc(doc) {
	        if (!doc.last_seq || doc.last_seq < lastSeq) {
	          doc.last_seq = lastSeq;
	          return doc;
	        }
	        return false; // somebody else got here first, don't update
	      });
	    }).then(function () {
	      callback(null, {ok: true});
	    }).catch(callback);
	  }
	  self.changes(changesOpts)
	    .on('change', onChange)
	    .on('complete', onComplete)
	    .on('error', callback);
	};
	
	/* Begin api wrappers. Specific functionality to storage belongs in the
	   _[method] */
	AbstractPouchDB.prototype.get = adapterFun('get', function (id, opts, cb) {
	  if (typeof opts === 'function') {
	    cb = opts;
	    opts = {};
	  }
	  if (typeof id !== 'string') {
	    return cb(createError(INVALID_ID));
	  }
	  if (isLocalId(id) && typeof this._getLocal === 'function') {
	    return this._getLocal(id, cb);
	  }
	  var leaves = [], self = this;
	
	  function finishOpenRevs() {
	    var result = [];
	    var count = leaves.length;
	    /* istanbul ignore if */
	    if (!count) {
	      return cb(null, result);
	    }
	    // order with open_revs is unspecified
	    leaves.forEach(function (leaf) {
	      self.get(id, {
	        rev: leaf,
	        revs: opts.revs,
	        attachments: opts.attachments
	      }, function (err, doc) {
	        if (!err) {
	          result.push({ok: doc});
	        } else {
	          result.push({missing: leaf});
	        }
	        count--;
	        if (!count) {
	          cb(null, result);
	        }
	      });
	    });
	  }
	
	  if (opts.open_revs) {
	    if (opts.open_revs === "all") {
	      this._getRevisionTree(id, function (err, rev_tree) {
	        if (err) {
	          return cb(err);
	        }
	        leaves = collectLeaves(rev_tree).map(function (leaf) {
	          return leaf.rev;
	        });
	        finishOpenRevs();
	      });
	    } else {
	      if (Array.isArray(opts.open_revs)) {
	        leaves = opts.open_revs;
	        for (var i = 0; i < leaves.length; i++) {
	          var l = leaves[i];
	          // looks like it's the only thing couchdb checks
	          if (!(typeof (l) === "string" && /^\d+-/.test(l))) {
	            return cb(createError(INVALID_REV));
	          }
	        }
	        finishOpenRevs();
	      } else {
	        return cb(createError(UNKNOWN_ERROR, 'function_clause'));
	      }
	    }
	    return; // open_revs does not like other options
	  }
	
	  return this._get(id, opts, function (err, result) {
	    if (err) {
	      return cb(err);
	    }
	
	    var doc = result.doc;
	    var metadata = result.metadata;
	    var ctx = result.ctx;
	
	    if (opts.conflicts) {
	      var conflicts = collectConflicts(metadata);
	      if (conflicts.length) {
	        doc._conflicts = conflicts;
	      }
	    }
	
	    if (isDeleted(metadata, doc._rev)) {
	      doc._deleted = true;
	    }
	
	    if (opts.revs || opts.revs_info) {
	      var paths = rootToLeaf(metadata.rev_tree);
	      var path = arrayFirst(paths, function (arr) {
	        return arr.ids.map(function (x) { return x.id; })
	          .indexOf(doc._rev.split('-')[1]) !== -1;
	      });
	
	      var indexOfRev = path.ids.map(function (x) {return x.id; })
	        .indexOf(doc._rev.split('-')[1]) + 1;
	      var howMany = path.ids.length - indexOfRev;
	      path.ids.splice(indexOfRev, howMany);
	      path.ids.reverse();
	
	      if (opts.revs) {
	        doc._revisions = {
	          start: (path.pos + path.ids.length) - 1,
	          ids: path.ids.map(function (rev) {
	            return rev.id;
	          })
	        };
	      }
	      if (opts.revs_info) {
	        var pos =  path.pos + path.ids.length;
	        doc._revs_info = path.ids.map(function (rev) {
	          pos--;
	          return {
	            rev: pos + '-' + rev.id,
	            status: rev.opts.status
	          };
	        });
	      }
	    }
	
	    if (opts.attachments && doc._attachments) {
	      var attachments = doc._attachments;
	      var count = Object.keys(attachments).length;
	      if (count === 0) {
	        return cb(null, doc);
	      }
	      Object.keys(attachments).forEach(function (key) {
	        this._getAttachment(doc._id, key, attachments[key], {
	          // Previously the revision handling was done in adapter.js
	          // getAttachment, however since idb-next doesnt we need to
	          // pass the rev through
	          rev: doc._rev,
	          binary: opts.binary,
	          ctx: ctx
	        }, function (err, data) {
	          var att = doc._attachments[key];
	          att.data = data;
	          delete att.stub;
	          delete att.length;
	          if (!--count) {
	            cb(null, doc);
	          }
	        });
	      }, self);
	    } else {
	      if (doc._attachments) {
	        for (var key in doc._attachments) {
	          /* istanbul ignore else */
	          if (doc._attachments.hasOwnProperty(key)) {
	            doc._attachments[key].stub = true;
	          }
	        }
	      }
	      cb(null, doc);
	    }
	  });
	});
	
	// TODO: I dont like this, it forces an extra read for every
	// attachment read and enforces a confusing api between
	// adapter.js and the adapter implementation
	AbstractPouchDB.prototype.getAttachment =
	  adapterFun('getAttachment', function (docId, attachmentId, opts, callback) {
	  var self = this;
	  if (opts instanceof Function) {
	    callback = opts;
	    opts = {};
	  }
	  this._get(docId, opts, function (err, res) {
	    if (err) {
	      return callback(err);
	    }
	    if (res.doc._attachments && res.doc._attachments[attachmentId]) {
	      opts.ctx = res.ctx;
	      opts.binary = true;
	      self._getAttachment(docId, attachmentId,
	                          res.doc._attachments[attachmentId], opts, callback);
	    } else {
	      return callback(createError(MISSING_DOC));
	    }
	  });
	});
	
	AbstractPouchDB.prototype.allDocs =
	  adapterFun('allDocs', function (opts, callback) {
	  if (typeof opts === 'function') {
	    callback = opts;
	    opts = {};
	  }
	  opts.skip = typeof opts.skip !== 'undefined' ? opts.skip : 0;
	  if (opts.start_key) {
	    opts.startkey = opts.start_key;
	  }
	  if (opts.end_key) {
	    opts.endkey = opts.end_key;
	  }
	  if ('keys' in opts) {
	    if (!Array.isArray(opts.keys)) {
	      return callback(new TypeError('options.keys must be an array'));
	    }
	    var incompatibleOpt =
	      ['startkey', 'endkey', 'key'].filter(function (incompatibleOpt) {
	      return incompatibleOpt in opts;
	    })[0];
	    if (incompatibleOpt) {
	      callback(createError(QUERY_PARSE_ERROR,
	        'Query parameter `' + incompatibleOpt +
	        '` is not compatible with multi-get'
	      ));
	      return;
	    }
	    if (this.type() !== 'http') {
	      return allDocsKeysQuery(this, opts, callback);
	    }
	  }
	
	  return this._allDocs(opts, callback);
	});
	
	AbstractPouchDB.prototype.changes = function (opts, callback) {
	  if (typeof opts === 'function') {
	    callback = opts;
	    opts = {};
	  }
	  return new Changes(this, opts, callback);
	};
	
	AbstractPouchDB.prototype.close = adapterFun('close', function (callback) {
	  this._closed = true;
	  return this._close(callback);
	});
	
	AbstractPouchDB.prototype.info = adapterFun('info', function (callback) {
	  var self = this;
	  this._info(function (err, info) {
	    if (err) {
	      return callback(err);
	    }
	    // assume we know better than the adapter, unless it informs us
	    info.db_name = info.db_name || self.name;
	    info.auto_compaction = !!(self.auto_compaction && self.type() !== 'http');
	    info.adapter = self.type();
	    callback(null, info);
	  });
	});
	
	AbstractPouchDB.prototype.id = adapterFun('id', function (callback) {
	  return this._id(callback);
	});
	
	/* istanbul ignore next */
	AbstractPouchDB.prototype.type = function () {
	  return (typeof this._type === 'function') ? this._type() : this.adapter;
	};
	
	AbstractPouchDB.prototype.bulkDocs =
	  adapterFun('bulkDocs', function (req, opts, callback) {
	  if (typeof opts === 'function') {
	    callback = opts;
	    opts = {};
	  }
	
	  opts = opts || {};
	
	  if (Array.isArray(req)) {
	    req = {
	      docs: req
	    };
	  }
	
	  if (!req || !req.docs || !Array.isArray(req.docs)) {
	    return callback(createError(MISSING_BULK_DOCS));
	  }
	
	  for (var i = 0; i < req.docs.length; ++i) {
	    if (typeof req.docs[i] !== 'object' || Array.isArray(req.docs[i])) {
	      return callback(createError(NOT_AN_OBJECT));
	    }
	  }
	
	  var attachmentError;
	  req.docs.forEach(function (doc) {
	    if (doc._attachments) {
	      Object.keys(doc._attachments).forEach(function (name) {
	        attachmentError = attachmentError || attachmentNameError(name);
	      });
	    }
	  });
	
	  if (attachmentError) {
	    return callback(createError(BAD_REQUEST, attachmentError));
	  }
	
	  if (!('new_edits' in opts)) {
	    if ('new_edits' in req) {
	      opts.new_edits = req.new_edits;
	    } else {
	      opts.new_edits = true;
	    }
	  }
	
	  if (!opts.new_edits && this.type() !== 'http') {
	    // ensure revisions of the same doc are sorted, so that
	    // the local adapter processes them correctly (#2935)
	    req.docs.sort(compareByIdThenRev);
	  }
	
	  cleanDocs(req.docs);
	
	  return this._bulkDocs(req, opts, function (err, res) {
	    if (err) {
	      return callback(err);
	    }
	    if (!opts.new_edits) {
	      // this is what couch does when new_edits is false
	      res = res.filter(function (x) {
	        return x.error;
	      });
	    }
	    callback(null, res);
	  });
	});
	
	AbstractPouchDB.prototype.registerDependentDatabase =
	  adapterFun('registerDependentDatabase', function (dependentDb,
	                                                          callback) {
	  var depDB = new this.constructor(dependentDb, this.__opts);
	
	  function diffFun(doc) {
	    doc.dependentDbs = doc.dependentDbs || {};
	    if (doc.dependentDbs[dependentDb]) {
	      return false; // no update required
	    }
	    doc.dependentDbs[dependentDb] = true;
	    return doc;
	  }
	  upsert(this, '_local/_pouch_dependentDbs', diffFun)
	    .then(function () {
	      callback(null, {db: depDB});
	    }).catch(callback);
	});
	
	AbstractPouchDB.prototype.destroy =
	  adapterFun('destroy', function (opts, callback) {
	
	  if (typeof opts === 'function') {
	    callback = opts;
	    opts = {};
	  }
	
	  var self = this;
	  var usePrefix = 'use_prefix' in self ? self.use_prefix : true;
	
	  function destroyDb() {
	    // call destroy method of the particular adaptor
	    self._destroy(opts, function (err, resp) {
	      if (err) {
	        return callback(err);
	      }
	      self._destroyed = true;
	      self.emit('destroyed');
	      callback(null, resp || { 'ok': true });
	    });
	  }
	
	  if (self.type() === 'http') {
	    // no need to check for dependent DBs if it's a remote DB
	    return destroyDb();
	  }
	
	  self.get('_local/_pouch_dependentDbs', function (err, localDoc) {
	    if (err) {
	      /* istanbul ignore if */
	      if (err.status !== 404) {
	        return callback(err);
	      } else { // no dependencies
	        return destroyDb();
	      }
	    }
	    var dependentDbs = localDoc.dependentDbs;
	    var PouchDB = self.constructor;
	    var deletedMap = Object.keys(dependentDbs).map(function (name) {
	      // use_prefix is only false in the browser
	      /* istanbul ignore next */
	      var trueName = usePrefix ?
	        name.replace(new RegExp('^' + PouchDB.prefix), '') : name;
	      return new PouchDB(trueName, self.__opts).destroy();
	    });
	    PouchPromise.all(deletedMap).then(destroyDb, callback);
	  });
	});
	
	function TaskQueue() {
	  this.isReady = false;
	  this.failed = false;
	  this.queue = [];
	}
	
	TaskQueue.prototype.execute = function () {
	  var fun;
	  if (this.failed) {
	    while ((fun = this.queue.shift())) {
	      fun(this.failed);
	    }
	  } else {
	    while ((fun = this.queue.shift())) {
	      fun();
	    }
	  }
	};
	
	TaskQueue.prototype.fail = function (err) {
	  this.failed = err;
	  this.execute();
	};
	
	TaskQueue.prototype.ready = function (db) {
	  this.isReady = true;
	  this.db = db;
	  this.execute();
	};
	
	TaskQueue.prototype.addTask = function (fun) {
	  this.queue.push(fun);
	  if (this.failed) {
	    this.execute();
	  }
	};
	
	function parseAdapter(name, opts) {
	  var match = name.match(/([a-z\-]*):\/\/(.*)/);
	  if (match) {
	    // the http adapter expects the fully qualified name
	    name = /http(s?)/.test(match[1]) ? match[1] + '://' + match[2] : match[2];
	    return {name: name, adapter: match[1]};
	  }
	
	  // check for browsers that have been upgraded from websql-only to websql+idb
	  var skipIdb = 'idb' in PouchDB.adapters && 'websql' in PouchDB.adapters &&
	    hasLocalStorage() &&
	    localStorage['_pouch__websqldb_' + PouchDB.prefix + name];
	
	  var adapterName;
	
	  if (opts.adapter) {
	    adapterName = opts.adapter;
	  } else if (typeof opts !== 'undefined' && opts.db) {
	    adapterName = 'leveldb';
	  } else { // automatically determine adapter
	    for (var i = 0; i < PouchDB.preferredAdapters.length; ++i) {
	      adapterName = PouchDB.preferredAdapters[i];
	      /* istanbul ignore if */
	      if (skipIdb && adapterName === 'idb') {
	        // log it, because this can be confusing during development
	        guardedConsole('log', 'PouchDB is downgrading "' + name + '" to WebSQL to' +
	          ' avoid data loss, because it was already opened with WebSQL.');
	        continue; // keep using websql to avoid user data loss
	      }
	      break;
	    }
	  }
	
	  var adapter = PouchDB.adapters[adapterName];
	
	  // if adapter is invalid, then an error will be thrown later
	  var usePrefix = (adapter && 'use_prefix' in adapter) ?
	    adapter.use_prefix : true;
	
	  return {
	    name: usePrefix ? (PouchDB.prefix + name) : name,
	    adapter: adapterName
	  };
	}
	
	// OK, so here's the deal. Consider this code:
	//     var db1 = new PouchDB('foo');
	//     var db2 = new PouchDB('foo');
	//     db1.destroy();
	// ^ these two both need to emit 'destroyed' events,
	// as well as the PouchDB constructor itself.
	// So we have one db object (whichever one got destroy() called on it)
	// responsible for emitting the initial event, which then gets emitted
	// by the constructor, which then broadcasts it to any other dbs
	// that may have been created with the same name.
	function prepareForDestruction(self) {
	
	  var destructionListeners = self.constructor._destructionListeners;
	
	  function onDestroyed() {
	    self.constructor.emit('destroyed', self.name);
	  }
	
	  function onConstructorDestroyed() {
	    self.removeListener('destroyed', onDestroyed);
	    self.emit('destroyed', self);
	  }
	
	  self.once('destroyed', onDestroyed);
	
	  // in setup.js, the constructor is primed to listen for destroy events
	  if (!destructionListeners.has(self.name)) {
	    destructionListeners.set(self.name, []);
	  }
	  destructionListeners.get(self.name).push(onConstructorDestroyed);
	}
	
	inherits(PouchDB, AbstractPouchDB);
	function PouchDB(name, opts) {
	  // In Node our test suite only tests this for PouchAlt unfortunately
	  /* istanbul ignore if */
	  if (!(this instanceof PouchDB)) {
	    return new PouchDB(name, opts);
	  }
	
	  var self = this;
	  opts = opts || {};
	
	  if (name && typeof name === 'object') {
	    opts = name;
	    name = opts.name;
	    delete opts.name;
	  }
	
	  this.__opts = opts = clone(opts);
	
	  self.auto_compaction = opts.auto_compaction;
	  self.prefix = PouchDB.prefix;
	
	  if (typeof name !== 'string') {
	    throw new Error('Missing/invalid DB name');
	  }
	
	  var prefixedName = (opts.prefix || '') + name;
	  var backend = parseAdapter(prefixedName, opts);
	
	  opts.name = backend.name;
	  opts.adapter = opts.adapter || backend.adapter;
	
	  self.name = name;
	  self._adapter = opts.adapter;
	  debug('pouchdb:adapter')('Picked adapter: ' + opts.adapter);
	
	  if (!PouchDB.adapters[opts.adapter] ||
	      !PouchDB.adapters[opts.adapter].valid()) {
	    throw new Error('Invalid Adapter: ' + opts.adapter);
	  }
	
	  AbstractPouchDB.call(self);
	  self.taskqueue = new TaskQueue();
	
	  self.adapter = opts.adapter;
	
	  PouchDB.adapters[opts.adapter].call(self, opts, function (err) {
	    if (err) {
	      return self.taskqueue.fail(err);
	    }
	    prepareForDestruction(self);
	
	    self.emit('created', self);
	    PouchDB.emit('created', self.name);
	    self.taskqueue.ready(self);
	  });
	
	}
	
	PouchDB.debug = debug;
	
	PouchDB.adapters = {};
	PouchDB.preferredAdapters = [];
	
	PouchDB.prefix = '_pouch_';
	
	var eventEmitter = new events.EventEmitter();
	
	function setUpEventEmitter(Pouch) {
	  Object.keys(events.EventEmitter.prototype).forEach(function (key) {
	    if (typeof events.EventEmitter.prototype[key] === 'function') {
	      Pouch[key] = eventEmitter[key].bind(eventEmitter);
	    }
	  });
	
	  // these are created in constructor.js, and allow us to notify each DB with
	  // the same name that it was destroyed, via the constructor object
	  var destructListeners = Pouch._destructionListeners = new _Map();
	  Pouch.on('destroyed', function onConstructorDestroyed(name) {
	    destructListeners.get(name).forEach(function (callback) {
	      callback();
	    });
	    destructListeners.delete(name);
	  });
	}
	
	setUpEventEmitter(PouchDB);
	
	PouchDB.adapter = function (id, obj, addToPreferredAdapters) {
	  /* istanbul ignore else */
	  if (obj.valid()) {
	    PouchDB.adapters[id] = obj;
	    if (addToPreferredAdapters) {
	      PouchDB.preferredAdapters.push(id);
	    }
	  }
	};
	
	PouchDB.plugin = function (obj) {
	  if (typeof obj === 'function') { // function style for plugins
	    obj(PouchDB);
	  } else if (typeof obj !== 'object' || Object.keys(obj).length === 0){
	    throw new Error('Invalid plugin: object passed in is empty or not an object');
	  } else {
	    Object.keys(obj).forEach(function (id) { // object style for plugins
	      PouchDB.prototype[id] = obj[id];
	    });
	  }
	  return PouchDB;
	};
	
	PouchDB.defaults = function (defaultOpts) {
	  function PouchAlt(name, opts) {
	    if (!(this instanceof PouchAlt)) {
	      return new PouchAlt(name, opts);
	    }
	
	    opts = opts || {};
	
	    if (name && typeof name === 'object') {
	      opts = name;
	      name = opts.name;
	      delete opts.name;
	    }
	
	    opts = jsExtend.extend({}, defaultOpts, opts);
	    PouchDB.call(this, name, opts);
	  }
	
	  inherits(PouchAlt, PouchDB);
	
	  PouchAlt.preferredAdapters = PouchDB.preferredAdapters.slice();
	  Object.keys(PouchDB).forEach(function (key) {
	    if (!(key in PouchAlt)) {
	      PouchAlt[key] = PouchDB[key];
	    }
	  });
	
	  return PouchAlt;
	};
	
	// managed automatically by set-version.js
	var version = "6.0.6";
	
	PouchDB.version = version;
	
	function toObject(array) {
	  return array.reduce(function (obj, item) {
	    obj[item] = true;
	    return obj;
	  }, {});
	}
	// List of top level reserved words for doc
	var reservedWords = toObject([
	  '_id',
	  '_rev',
	  '_attachments',
	  '_deleted',
	  '_revisions',
	  '_revs_info',
	  '_conflicts',
	  '_deleted_conflicts',
	  '_local_seq',
	  '_rev_tree',
	  //replication documents
	  '_replication_id',
	  '_replication_state',
	  '_replication_state_time',
	  '_replication_state_reason',
	  '_replication_stats',
	  // Specific to Couchbase Sync Gateway
	  '_removed'
	]);
	
	// List of reserved words that should end up the document
	var dataWords = toObject([
	  '_attachments',
	  //replication documents
	  '_replication_id',
	  '_replication_state',
	  '_replication_state_time',
	  '_replication_state_reason',
	  '_replication_stats'
	]);
	
	function parseRevisionInfo(rev) {
	  if (!/^\d+\-./.test(rev)) {
	    return createError(INVALID_REV);
	  }
	  var idx = rev.indexOf('-');
	  var left = rev.substring(0, idx);
	  var right = rev.substring(idx + 1);
	  return {
	    prefix: parseInt(left, 10),
	    id: right
	  };
	}
	
	function makeRevTreeFromRevisions(revisions, opts) {
	  var pos = revisions.start - revisions.ids.length + 1;
	
	  var revisionIds = revisions.ids;
	  var ids = [revisionIds[0], opts, []];
	
	  for (var i = 1, len = revisionIds.length; i < len; i++) {
	    ids = [revisionIds[i], {status: 'missing'}, [ids]];
	  }
	
	  return [{
	    pos: pos,
	    ids: ids
	  }];
	}
	
	// Preprocess documents, parse their revisions, assign an id and a
	// revision for new writes that are missing them, etc
	function parseDoc(doc, newEdits) {
	
	  var nRevNum;
	  var newRevId;
	  var revInfo;
	  var opts = {status: 'available'};
	  if (doc._deleted) {
	    opts.deleted = true;
	  }
	
	  if (newEdits) {
	    if (!doc._id) {
	      doc._id = uuid();
	    }
	    newRevId = uuid(32, 16).toLowerCase();
	    if (doc._rev) {
	      revInfo = parseRevisionInfo(doc._rev);
	      if (revInfo.error) {
	        return revInfo;
	      }
	      doc._rev_tree = [{
	        pos: revInfo.prefix,
	        ids: [revInfo.id, {status: 'missing'}, [[newRevId, opts, []]]]
	      }];
	      nRevNum = revInfo.prefix + 1;
	    } else {
	      doc._rev_tree = [{
	        pos: 1,
	        ids : [newRevId, opts, []]
	      }];
	      nRevNum = 1;
	    }
	  } else {
	    if (doc._revisions) {
	      doc._rev_tree = makeRevTreeFromRevisions(doc._revisions, opts);
	      nRevNum = doc._revisions.start;
	      newRevId = doc._revisions.ids[0];
	    }
	    if (!doc._rev_tree) {
	      revInfo = parseRevisionInfo(doc._rev);
	      if (revInfo.error) {
	        return revInfo;
	      }
	      nRevNum = revInfo.prefix;
	      newRevId = revInfo.id;
	      doc._rev_tree = [{
	        pos: nRevNum,
	        ids: [newRevId, opts, []]
	      }];
	    }
	  }
	
	  invalidIdError(doc._id);
	
	  doc._rev = nRevNum + '-' + newRevId;
	
	  var result = {metadata : {}, data : {}};
	  for (var key in doc) {
	    /* istanbul ignore else */
	    if (Object.prototype.hasOwnProperty.call(doc, key)) {
	      var specialKey = key[0] === '_';
	      if (specialKey && !reservedWords[key]) {
	        var error = createError(DOC_VALIDATION, key);
	        error.message = DOC_VALIDATION.message + ': ' + key;
	        throw error;
	      } else if (specialKey && !dataWords[key]) {
	        result.metadata[key.slice(1)] = doc[key];
	      } else {
	        result.data[key] = doc[key];
	      }
	    }
	  }
	  return result;
	}
	
	var atob$1 = function (str) {
	  return atob(str);
	};
	
	var btoa$1 = function (str) {
	  return btoa(str);
	};
	
	// Abstracts constructing a Blob object, so it also works in older
	// browsers that don't support the native Blob constructor (e.g.
	// old QtWebKit versions, Android < 4.4).
	function createBlob(parts, properties) {
	  /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
	  parts = parts || [];
	  properties = properties || {};
	  try {
	    return new Blob(parts, properties);
	  } catch (e) {
	    if (e.name !== "TypeError") {
	      throw e;
	    }
	    var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder :
	                  typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder :
	                  typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder :
	                  WebKitBlobBuilder;
	    var builder = new Builder();
	    for (var i = 0; i < parts.length; i += 1) {
	      builder.append(parts[i]);
	    }
	    return builder.getBlob(properties.type);
	  }
	}
	
	// From http://stackoverflow.com/questions/14967647/ (continues on next line)
	// encode-decode-image-with-base64-breaks-image (2013-04-21)
	function binaryStringToArrayBuffer(bin) {
	  var length = bin.length;
	  var buf = new ArrayBuffer(length);
	  var arr = new Uint8Array(buf);
	  for (var i = 0; i < length; i++) {
	    arr[i] = bin.charCodeAt(i);
	  }
	  return buf;
	}
	
	function binStringToBluffer(binString, type) {
	  return createBlob([binaryStringToArrayBuffer(binString)], {type: type});
	}
	
	function b64ToBluffer(b64, type) {
	  return binStringToBluffer(atob$1(b64), type);
	}
	
	//Can't find original post, but this is close
	//http://stackoverflow.com/questions/6965107/ (continues on next line)
	//converting-between-strings-and-arraybuffers
	function arrayBufferToBinaryString(buffer) {
	  var binary = '';
	  var bytes = new Uint8Array(buffer);
	  var length = bytes.byteLength;
	  for (var i = 0; i < length; i++) {
	    binary += String.fromCharCode(bytes[i]);
	  }
	  return binary;
	}
	
	// shim for browsers that don't support it
	function readAsBinaryString(blob, callback) {
	  if (typeof FileReader === 'undefined') {
	    // fix for Firefox in a web worker
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=901097
	    return callback(arrayBufferToBinaryString(
	      new FileReaderSync().readAsArrayBuffer(blob)));
	  }
	
	  var reader = new FileReader();
	  var hasBinaryString = typeof reader.readAsBinaryString === 'function';
	  reader.onloadend = function (e) {
	    var result = e.target.result || '';
	    if (hasBinaryString) {
	      return callback(result);
	    }
	    callback(arrayBufferToBinaryString(result));
	  };
	  if (hasBinaryString) {
	    reader.readAsBinaryString(blob);
	  } else {
	    reader.readAsArrayBuffer(blob);
	  }
	}
	
	function blobToBinaryString(blobOrBuffer, callback) {
	  readAsBinaryString(blobOrBuffer, function (bin) {
	    callback(bin);
	  });
	}
	
	function blobToBase64(blobOrBuffer, callback) {
	  blobToBinaryString(blobOrBuffer, function (base64) {
	    callback(btoa$1(base64));
	  });
	}
	
	// simplified API. universal browser support is assumed
	function readAsArrayBuffer(blob, callback) {
	  if (typeof FileReader === 'undefined') {
	    // fix for Firefox in a web worker:
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=901097
	    return callback(new FileReaderSync().readAsArrayBuffer(blob));
	  }
	
	  var reader = new FileReader();
	  reader.onloadend = function (e) {
	    var result = e.target.result || new ArrayBuffer(0);
	    callback(result);
	  };
	  reader.readAsArrayBuffer(blob);
	}
	
	var setImmediateShim = global.setImmediate || global.setTimeout;
	var MD5_CHUNK_SIZE = 32768;
	
	function rawToBase64(raw) {
	  return btoa$1(raw);
	}
	
	function sliceBlob(blob, start, end) {
	  if (blob.webkitSlice) {
	    return blob.webkitSlice(start, end);
	  }
	  return blob.slice(start, end);
	}
	
	function appendBlob(buffer, blob, start, end, callback) {
	  if (start > 0 || end < blob.size) {
	    // only slice blob if we really need to
	    blob = sliceBlob(blob, start, end);
	  }
	  readAsArrayBuffer(blob, function (arrayBuffer) {
	    buffer.append(arrayBuffer);
	    callback();
	  });
	}
	
	function appendString(buffer, string, start, end, callback) {
	  if (start > 0 || end < string.length) {
	    // only create a substring if we really need to
	    string = string.substring(start, end);
	  }
	  buffer.appendBinary(string);
	  callback();
	}
	
	function binaryMd5(data, callback) {
	  var inputIsString = typeof data === 'string';
	  var len = inputIsString ? data.length : data.size;
	  var chunkSize = Math.min(MD5_CHUNK_SIZE, len);
	  var chunks = Math.ceil(len / chunkSize);
	  var currentChunk = 0;
	  var buffer = inputIsString ? new Md5() : new Md5.ArrayBuffer();
	
	  var append = inputIsString ? appendString : appendBlob;
	
	  function next() {
	    setImmediateShim(loadNextChunk);
	  }
	
	  function done() {
	    var raw = buffer.end(true);
	    var base64 = rawToBase64(raw);
	    callback(base64);
	    buffer.destroy();
	  }
	
	  function loadNextChunk() {
	    var start = currentChunk * chunkSize;
	    var end = start + chunkSize;
	    currentChunk++;
	    if (currentChunk < chunks) {
	      append(buffer, data, start, end, next);
	    } else {
	      append(buffer, data, start, end, done);
	    }
	  }
	  loadNextChunk();
	}
	
	function stringMd5(string) {
	  return Md5.hash(string);
	}
	
	function parseBase64(data) {
	  try {
	    return atob$1(data);
	  } catch (e) {
	    var err = createError(BAD_ARG,
	      'Attachment is not a valid base64 string');
	    return {error: err};
	  }
	}
	
	function preprocessString(att, blobType, callback) {
	  var asBinary = parseBase64(att.data);
	  if (asBinary.error) {
	    return callback(asBinary.error);
	  }
	
	  att.length = asBinary.length;
	  if (blobType === 'blob') {
	    att.data = binStringToBluffer(asBinary, att.content_type);
	  } else if (blobType === 'base64') {
	    att.data = btoa$1(asBinary);
	  } else { // binary
	    att.data = asBinary;
	  }
	  binaryMd5(asBinary, function (result) {
	    att.digest = 'md5-' + result;
	    callback();
	  });
	}
	
	function preprocessBlob(att, blobType, callback) {
	  binaryMd5(att.data, function (md5) {
	    att.digest = 'md5-' + md5;
	    // size is for blobs (browser), length is for buffers (node)
	    att.length = att.data.size || att.data.length || 0;
	    if (blobType === 'binary') {
	      blobToBinaryString(att.data, function (binString) {
	        att.data = binString;
	        callback();
	      });
	    } else if (blobType === 'base64') {
	      blobToBase64(att.data, function (b64) {
	        att.data = b64;
	        callback();
	      });
	    } else {
	      callback();
	    }
	  });
	}
	
	function preprocessAttachment(att, blobType, callback) {
	  if (att.stub) {
	    return callback();
	  }
	  if (typeof att.data === 'string') { // input is a base64 string
	    preprocessString(att, blobType, callback);
	  } else { // input is a blob
	    preprocessBlob(att, blobType, callback);
	  }
	}
	
	function preprocessAttachments(docInfos, blobType, callback) {
	
	  if (!docInfos.length) {
	    return callback();
	  }
	
	  var docv = 0;
	  var overallErr;
	
	  docInfos.forEach(function (docInfo) {
	    var attachments = docInfo.data && docInfo.data._attachments ?
	      Object.keys(docInfo.data._attachments) : [];
	    var recv = 0;
	
	    if (!attachments.length) {
	      return done();
	    }
	
	    function processedAttachment(err) {
	      overallErr = err;
	      recv++;
	      if (recv === attachments.length) {
	        done();
	      }
	    }
	
	    for (var key in docInfo.data._attachments) {
	      if (docInfo.data._attachments.hasOwnProperty(key)) {
	        preprocessAttachment(docInfo.data._attachments[key],
	          blobType, processedAttachment);
	      }
	    }
	  });
	
	  function done() {
	    docv++;
	    if (docInfos.length === docv) {
	      if (overallErr) {
	        callback(overallErr);
	      } else {
	        callback();
	      }
	    }
	  }
	}
	
	function updateDoc(revLimit, prev, docInfo, results,
	                   i, cb, writeDoc, newEdits) {
	
	  if (revExists(prev.rev_tree, docInfo.metadata.rev)) {
	    results[i] = docInfo;
	    return cb();
	  }
	
	  // sometimes this is pre-calculated. historically not always
	  var previousWinningRev = prev.winningRev || winningRev(prev);
	  var previouslyDeleted = 'deleted' in prev ? prev.deleted :
	    isDeleted(prev, previousWinningRev);
	  var deleted = 'deleted' in docInfo.metadata ? docInfo.metadata.deleted :
	    isDeleted(docInfo.metadata);
	  var isRoot = /^1-/.test(docInfo.metadata.rev);
	
	  if (previouslyDeleted && !deleted && newEdits && isRoot) {
	    var newDoc = docInfo.data;
	    newDoc._rev = previousWinningRev;
	    newDoc._id = docInfo.metadata.id;
	    docInfo = parseDoc(newDoc, newEdits);
	  }
	
	  var merged = merge(prev.rev_tree, docInfo.metadata.rev_tree[0], revLimit);
	
	  var inConflict = newEdits && (((previouslyDeleted && deleted) ||
	    (!previouslyDeleted && merged.conflicts !== 'new_leaf') ||
	    (previouslyDeleted && !deleted && merged.conflicts === 'new_branch')));
	
	  if (inConflict) {
	    var err = createError(REV_CONFLICT);
	    results[i] = err;
	    return cb();
	  }
	
	  var newRev = docInfo.metadata.rev;
	  docInfo.metadata.rev_tree = merged.tree;
	  docInfo.stemmedRevs = merged.stemmedRevs || [];
	  /* istanbul ignore else */
	  if (prev.rev_map) {
	    docInfo.metadata.rev_map = prev.rev_map; // used only by leveldb
	  }
	
	  // recalculate
	  var winningRev$$ = winningRev(docInfo.metadata);
	  var winningRevIsDeleted = isDeleted(docInfo.metadata, winningRev$$);
	
	  // calculate the total number of documents that were added/removed,
	  // from the perspective of total_rows/doc_count
	  var delta = (previouslyDeleted === winningRevIsDeleted) ? 0 :
	    previouslyDeleted < winningRevIsDeleted ? -1 : 1;
	
	  var newRevIsDeleted;
	  if (newRev === winningRev$$) {
	    // if the new rev is the same as the winning rev, we can reuse that value
	    newRevIsDeleted = winningRevIsDeleted;
	  } else {
	    // if they're not the same, then we need to recalculate
	    newRevIsDeleted = isDeleted(docInfo.metadata, newRev);
	  }
	
	  writeDoc(docInfo, winningRev$$, winningRevIsDeleted, newRevIsDeleted,
	    true, delta, i, cb);
	}
	
	function rootIsMissing(docInfo) {
	  return docInfo.metadata.rev_tree[0].ids[1].status === 'missing';
	}
	
	function processDocs(revLimit, docInfos, api, fetchedDocs, tx, results,
	                     writeDoc, opts, overallCallback) {
	
	  // Default to 1000 locally
	  revLimit = revLimit || 1000;
	
	  function insertDoc(docInfo, resultsIdx, callback) {
	    // Cant insert new deleted documents
	    var winningRev$$ = winningRev(docInfo.metadata);
	    var deleted = isDeleted(docInfo.metadata, winningRev$$);
	    if ('was_delete' in opts && deleted) {
	      results[resultsIdx] = createError(MISSING_DOC, 'deleted');
	      return callback();
	    }
	
	    // 4712 - detect whether a new document was inserted with a _rev
	    var inConflict = newEdits && rootIsMissing(docInfo);
	
	    if (inConflict) {
	      var err = createError(REV_CONFLICT);
	      results[resultsIdx] = err;
	      return callback();
	    }
	
	    var delta = deleted ? 0 : 1;
	
	    writeDoc(docInfo, winningRev$$, deleted, deleted, false,
	      delta, resultsIdx, callback);
	  }
	
	  var newEdits = opts.new_edits;
	  var idsToDocs = new _Map();
	
	  var docsDone = 0;
	  var docsToDo = docInfos.length;
	
	  function checkAllDocsDone() {
	    if (++docsDone === docsToDo && overallCallback) {
	      overallCallback();
	    }
	  }
	
	  docInfos.forEach(function (currentDoc, resultsIdx) {
	
	    if (currentDoc._id && isLocalId(currentDoc._id)) {
	      var fun = currentDoc._deleted ? '_removeLocal' : '_putLocal';
	      api[fun](currentDoc, {ctx: tx}, function (err, res) {
	        results[resultsIdx] = err || res;
	        checkAllDocsDone();
	      });
	      return;
	    }
	
	    var id = currentDoc.metadata.id;
	    if (idsToDocs.has(id)) {
	      docsToDo--; // duplicate
	      idsToDocs.get(id).push([currentDoc, resultsIdx]);
	    } else {
	      idsToDocs.set(id, [[currentDoc, resultsIdx]]);
	    }
	  });
	
	  // in the case of new_edits, the user can provide multiple docs
	  // with the same id. these need to be processed sequentially
	  idsToDocs.forEach(function (docs, id) {
	    var numDone = 0;
	
	    function docWritten() {
	      if (++numDone < docs.length) {
	        nextDoc();
	      } else {
	        checkAllDocsDone();
	      }
	    }
	    function nextDoc() {
	      var value = docs[numDone];
	      var currentDoc = value[0];
	      var resultsIdx = value[1];
	
	      if (fetchedDocs.has(id)) {
	        updateDoc(revLimit, fetchedDocs.get(id), currentDoc, results,
	          resultsIdx, docWritten, writeDoc, newEdits);
	      } else {
	        // Ensure stemming applies to new writes as well
	        var merged = merge([], currentDoc.metadata.rev_tree[0], revLimit);
	        currentDoc.metadata.rev_tree = merged.tree;
	        currentDoc.stemmedRevs = merged.stemmedRevs || [];
	        insertDoc(currentDoc, resultsIdx, docWritten);
	      }
	    }
	    nextDoc();
	  });
	}
	
	// IndexedDB requires a versioned database structure, so we use the
	// version here to manage migrations.
	var ADAPTER_VERSION = 5;
	
	// The object stores created for each database
	// DOC_STORE stores the document meta data, its revision history and state
	// Keyed by document id
	var DOC_STORE = 'document-store';
	// BY_SEQ_STORE stores a particular version of a document, keyed by its
	// sequence id
	var BY_SEQ_STORE = 'by-sequence';
	// Where we store attachments
	var ATTACH_STORE = 'attach-store';
	// Where we store many-to-many relations
	// between attachment digests and seqs
	var ATTACH_AND_SEQ_STORE = 'attach-seq-store';
	
	// Where we store database-wide meta data in a single record
	// keyed by id: META_STORE
	var META_STORE = 'meta-store';
	// Where we store local documents
	var LOCAL_STORE = 'local-store';
	// Where we detect blob support
	var DETECT_BLOB_SUPPORT_STORE = 'detect-blob-support';
	
	function slowJsonParse(str) {
	  try {
	    return JSON.parse(str);
	  } catch (e) {
	    /* istanbul ignore next */
	    return vuvuzela.parse(str);
	  }
	}
	
	function safeJsonParse(str) {
	  // try/catch is deoptimized in V8, leading to slower
	  // times than we'd like to have. Most documents are _not_
	  // huge, and do not require a slower code path just to parse them.
	  // We can be pretty sure that a document under 50000 characters
	  // will not be so deeply nested as to throw a stack overflow error
	  // (depends on the engine and available memory, though, so this is
	  // just a hunch). 50000 was chosen based on the average length
	  // of this string in our test suite, to try to find a number that covers
	  // most of our test cases (26 over this size, 26378 under it).
	  if (str.length < 50000) {
	    return JSON.parse(str);
	  }
	  return slowJsonParse(str);
	}
	
	function safeJsonStringify(json) {
	  try {
	    return JSON.stringify(json);
	  } catch (e) {
	    /* istanbul ignore next */
	    return vuvuzela.stringify(json);
	  }
	}
	
	function tryCode(fun, that, args, PouchDB) {
	  try {
	    fun.apply(that, args);
	  } catch (err) {
	    // Shouldn't happen, but in some odd cases
	    // IndexedDB implementations might throw a sync
	    // error, in which case this will at least log it.
	    PouchDB.emit('error', err);
	  }
	}
	
	var taskQueue = {
	  running: false,
	  queue: []
	};
	
	function applyNext(PouchDB) {
	  if (taskQueue.running || !taskQueue.queue.length) {
	    return;
	  }
	  taskQueue.running = true;
	  var item = taskQueue.queue.shift();
	  item.action(function (err, res) {
	    tryCode(item.callback, this, [err, res], PouchDB);
	    taskQueue.running = false;
	    process.nextTick(function () {
	      applyNext(PouchDB);
	    });
	  });
	}
	
	function idbError(callback) {
	  return function (evt) {
	    var message = 'unknown_error';
	    if (evt.target && evt.target.error) {
	      message = evt.target.error.name || evt.target.error.message;
	    }
	    callback(createError(IDB_ERROR, message, evt.type));
	  };
	}
	
	// Unfortunately, the metadata has to be stringified
	// when it is put into the database, because otherwise
	// IndexedDB can throw errors for deeply-nested objects.
	// Originally we just used JSON.parse/JSON.stringify; now
	// we use this custom vuvuzela library that avoids recursion.
	// If we could do it all over again, we'd probably use a
	// format for the revision trees other than JSON.
	function encodeMetadata(metadata, winningRev, deleted) {
	  return {
	    data: safeJsonStringify(metadata),
	    winningRev: winningRev,
	    deletedOrLocal: deleted ? '1' : '0',
	    seq: metadata.seq, // highest seq for this doc
	    id: metadata.id
	  };
	}
	
	function decodeMetadata(storedObject) {
	  if (!storedObject) {
	    return null;
	  }
	  var metadata = safeJsonParse(storedObject.data);
	  metadata.winningRev = storedObject.winningRev;
	  metadata.deleted = storedObject.deletedOrLocal === '1';
	  metadata.seq = storedObject.seq;
	  return metadata;
	}
	
	// read the doc back out from the database. we don't store the
	// _id or _rev because we already have _doc_id_rev.
	function decodeDoc(doc) {
	  if (!doc) {
	    return doc;
	  }
	  var idx = doc._doc_id_rev.lastIndexOf(':');
	  doc._id = doc._doc_id_rev.substring(0, idx - 1);
	  doc._rev = doc._doc_id_rev.substring(idx + 1);
	  delete doc._doc_id_rev;
	  return doc;
	}
	
	// Read a blob from the database, encoding as necessary
	// and translating from base64 if the IDB doesn't support
	// native Blobs
	function readBlobData(body, type, asBlob, callback) {
	  if (asBlob) {
	    if (!body) {
	      callback(createBlob([''], {type: type}));
	    } else if (typeof body !== 'string') { // we have blob support
	      callback(body);
	    } else { // no blob support
	      callback(b64ToBluffer(body, type));
	    }
	  } else { // as base64 string
	    if (!body) {
	      callback('');
	    } else if (typeof body !== 'string') { // we have blob support
	      readAsBinaryString(body, function (binary) {
	        callback(btoa$1(binary));
	      });
	    } else { // no blob support
	      callback(body);
	    }
	  }
	}
	
	function fetchAttachmentsIfNecessary(doc, opts, txn, cb) {
	  var attachments = Object.keys(doc._attachments || {});
	  if (!attachments.length) {
	    return cb && cb();
	  }
	  var numDone = 0;
	
	  function checkDone() {
	    if (++numDone === attachments.length && cb) {
	      cb();
	    }
	  }
	
	  function fetchAttachment(doc, att) {
	    var attObj = doc._attachments[att];
	    var digest = attObj.digest;
	    var req = txn.objectStore(ATTACH_STORE).get(digest);
	    req.onsuccess = function (e) {
	      attObj.body = e.target.result.body;
	      checkDone();
	    };
	  }
	
	  attachments.forEach(function (att) {
	    if (opts.attachments && opts.include_docs) {
	      fetchAttachment(doc, att);
	    } else {
	      doc._attachments[att].stub = true;
	      checkDone();
	    }
	  });
	}
	
	// IDB-specific postprocessing necessary because
	// we don't know whether we stored a true Blob or
	// a base64-encoded string, and if it's a Blob it
	// needs to be read outside of the transaction context
	function postProcessAttachments(results, asBlob) {
	  return PouchPromise.all(results.map(function (row) {
	    if (row.doc && row.doc._attachments) {
	      var attNames = Object.keys(row.doc._attachments);
	      return PouchPromise.all(attNames.map(function (att) {
	        var attObj = row.doc._attachments[att];
	        if (!('body' in attObj)) { // already processed
	          return;
	        }
	        var body = attObj.body;
	        var type = attObj.content_type;
	        return new PouchPromise(function (resolve) {
	          readBlobData(body, type, asBlob, function (data) {
	            row.doc._attachments[att] = jsExtend.extend(
	              pick(attObj, ['digest', 'content_type']),
	              {data: data}
	            );
	            resolve();
	          });
	        });
	      }));
	    }
	  }));
	}
	
	function compactRevs(revs, docId, txn) {
	
	  var possiblyOrphanedDigests = [];
	  var seqStore = txn.objectStore(BY_SEQ_STORE);
	  var attStore = txn.objectStore(ATTACH_STORE);
	  var attAndSeqStore = txn.objectStore(ATTACH_AND_SEQ_STORE);
	  var count = revs.length;
	
	  function checkDone() {
	    count--;
	    if (!count) { // done processing all revs
	      deleteOrphanedAttachments();
	    }
	  }
	
	  function deleteOrphanedAttachments() {
	    if (!possiblyOrphanedDigests.length) {
	      return;
	    }
	    possiblyOrphanedDigests.forEach(function (digest) {
	      var countReq = attAndSeqStore.index('digestSeq').count(
	        IDBKeyRange.bound(
	          digest + '::', digest + '::\uffff', false, false));
	      countReq.onsuccess = function (e) {
	        var count = e.target.result;
	        if (!count) {
	          // orphaned
	          attStore.delete(digest);
	        }
	      };
	    });
	  }
	
	  revs.forEach(function (rev) {
	    var index = seqStore.index('_doc_id_rev');
	    var key = docId + "::" + rev;
	    index.getKey(key).onsuccess = function (e) {
	      var seq = e.target.result;
	      if (typeof seq !== 'number') {
	        return checkDone();
	      }
	      seqStore.delete(seq);
	
	      var cursor = attAndSeqStore.index('seq')
	        .openCursor(IDBKeyRange.only(seq));
	
	      cursor.onsuccess = function (event) {
	        var cursor = event.target.result;
	        if (cursor) {
	          var digest = cursor.value.digestSeq.split('::')[0];
	          possiblyOrphanedDigests.push(digest);
	          attAndSeqStore.delete(cursor.primaryKey);
	          cursor.continue();
	        } else { // done
	          checkDone();
	        }
	      };
	    };
	  });
	}
	
	function openTransactionSafely(idb, stores, mode) {
	  try {
	    return {
	      txn: idb.transaction(stores, mode)
	    };
	  } catch (err) {
	    return {
	      error: err
	    };
	  }
	}
	
	function idbBulkDocs(dbOpts, req, opts, api, idb, idbChanges, callback) {
	  var docInfos = req.docs;
	  var txn;
	  var docStore;
	  var bySeqStore;
	  var attachStore;
	  var attachAndSeqStore;
	  var docInfoError;
	  var docCountDelta = 0;
	
	  for (var i = 0, len = docInfos.length; i < len; i++) {
	    var doc = docInfos[i];
	    if (doc._id && isLocalId(doc._id)) {
	      continue;
	    }
	    doc = docInfos[i] = parseDoc(doc, opts.new_edits);
	    if (doc.error && !docInfoError) {
	      docInfoError = doc;
	    }
	  }
	
	  if (docInfoError) {
	    return callback(docInfoError);
	  }
	
	  var results = new Array(docInfos.length);
	  var fetchedDocs = new _Map();
	  var preconditionErrored = false;
	  var blobType = api._meta.blobSupport ? 'blob' : 'base64';
	
	  preprocessAttachments(docInfos, blobType, function (err) {
	    if (err) {
	      return callback(err);
	    }
	    startTransaction();
	  });
	
	  function startTransaction() {
	
	    var stores = [
	      DOC_STORE, BY_SEQ_STORE,
	      ATTACH_STORE,
	      LOCAL_STORE, ATTACH_AND_SEQ_STORE
	    ];
	    var txnResult = openTransactionSafely(idb, stores, 'readwrite');
	    if (txnResult.error) {
	      return callback(txnResult.error);
	    }
	    txn = txnResult.txn;
	    txn.onabort = idbError(callback);
	    txn.ontimeout = idbError(callback);
	    txn.oncomplete = complete;
	    docStore = txn.objectStore(DOC_STORE);
	    bySeqStore = txn.objectStore(BY_SEQ_STORE);
	    attachStore = txn.objectStore(ATTACH_STORE);
	    attachAndSeqStore = txn.objectStore(ATTACH_AND_SEQ_STORE);
	
	    verifyAttachments(function (err) {
	      if (err) {
	        preconditionErrored = true;
	        return callback(err);
	      }
	      fetchExistingDocs();
	    });
	  }
	
	  function idbProcessDocs() {
	    processDocs(dbOpts.revs_limit, docInfos, api, fetchedDocs,
	                txn, results, writeDoc, opts);
	  }
	
	  function fetchExistingDocs() {
	
	    if (!docInfos.length) {
	      return;
	    }
	
	    var numFetched = 0;
	
	    function checkDone() {
	      if (++numFetched === docInfos.length) {
	        idbProcessDocs();
	      }
	    }
	
	    function readMetadata(event) {
	      var metadata = decodeMetadata(event.target.result);
	
	      if (metadata) {
	        fetchedDocs.set(metadata.id, metadata);
	      }
	      checkDone();
	    }
	
	    for (var i = 0, len = docInfos.length; i < len; i++) {
	      var docInfo = docInfos[i];
	      if (docInfo._id && isLocalId(docInfo._id)) {
	        checkDone(); // skip local docs
	        continue;
	      }
	      var req = docStore.get(docInfo.metadata.id);
	      req.onsuccess = readMetadata;
	    }
	  }
	
	  function complete() {
	    if (preconditionErrored) {
	      return;
	    }
	
	    idbChanges.notify(api._meta.name);
	    api._meta.docCount += docCountDelta;
	    callback(null, results);
	  }
	
	  function verifyAttachment(digest, callback) {
	
	    var req = attachStore.get(digest);
	    req.onsuccess = function (e) {
	      if (!e.target.result) {
	        var err = createError(MISSING_STUB,
	          'unknown stub attachment with digest ' +
	          digest);
	        err.status = 412;
	        callback(err);
	      } else {
	        callback();
	      }
	    };
	  }
	
	  function verifyAttachments(finish) {
	
	
	    var digests = [];
	    docInfos.forEach(function (docInfo) {
	      if (docInfo.data && docInfo.data._attachments) {
	        Object.keys(docInfo.data._attachments).forEach(function (filename) {
	          var att = docInfo.data._attachments[filename];
	          if (att.stub) {
	            digests.push(att.digest);
	          }
	        });
	      }
	    });
	    if (!digests.length) {
	      return finish();
	    }
	    var numDone = 0;
	    var err;
	
	    function checkDone() {
	      if (++numDone === digests.length) {
	        finish(err);
	      }
	    }
	    digests.forEach(function (digest) {
	      verifyAttachment(digest, function (attErr) {
	        if (attErr && !err) {
	          err = attErr;
	        }
	        checkDone();
	      });
	    });
	  }
	
	  function writeDoc(docInfo, winningRev, winningRevIsDeleted, newRevIsDeleted,
	                    isUpdate, delta, resultsIdx, callback) {
	
	    docCountDelta += delta;
	
	    docInfo.metadata.winningRev = winningRev;
	    docInfo.metadata.deleted = winningRevIsDeleted;
	
	    var doc = docInfo.data;
	    doc._id = docInfo.metadata.id;
	    doc._rev = docInfo.metadata.rev;
	
	    if (newRevIsDeleted) {
	      doc._deleted = true;
	    }
	
	    var hasAttachments = doc._attachments &&
	      Object.keys(doc._attachments).length;
	    if (hasAttachments) {
	      return writeAttachments(docInfo, winningRev, winningRevIsDeleted,
	        isUpdate, resultsIdx, callback);
	    }
	
	    finishDoc(docInfo, winningRev, winningRevIsDeleted,
	      isUpdate, resultsIdx, callback);
	  }
	
	  function finishDoc(docInfo, winningRev, winningRevIsDeleted,
	                     isUpdate, resultsIdx, callback) {
	
	    var doc = docInfo.data;
	    var metadata = docInfo.metadata;
	
	    doc._doc_id_rev = metadata.id + '::' + metadata.rev;
	    delete doc._id;
	    delete doc._rev;
	
	    function afterPutDoc(e) {
	      var revsToDelete = docInfo.stemmedRevs || [];
	
	      if (isUpdate && api.auto_compaction) {
	        revsToDelete = revsToDelete.concat(compactTree(docInfo.metadata));
	      }
	
	      if (revsToDelete && revsToDelete.length) {
	        compactRevs(revsToDelete, docInfo.metadata.id, txn);
	      }
	
	      metadata.seq = e.target.result;
	      // Current _rev is calculated from _rev_tree on read
	      delete metadata.rev;
	      var metadataToStore = encodeMetadata(metadata, winningRev,
	        winningRevIsDeleted);
	      var metaDataReq = docStore.put(metadataToStore);
	      metaDataReq.onsuccess = afterPutMetadata;
	    }
	
	    function afterPutDocError(e) {
	      // ConstraintError, need to update, not put (see #1638 for details)
	      e.preventDefault(); // avoid transaction abort
	      e.stopPropagation(); // avoid transaction onerror
	      var index = bySeqStore.index('_doc_id_rev');
	      var getKeyReq = index.getKey(doc._doc_id_rev);
	      getKeyReq.onsuccess = function (e) {
	        var putReq = bySeqStore.put(doc, e.target.result);
	        putReq.onsuccess = afterPutDoc;
	      };
	    }
	
	    function afterPutMetadata() {
	      results[resultsIdx] = {
	        ok: true,
	        id: metadata.id,
	        rev: winningRev
	      };
	      fetchedDocs.set(docInfo.metadata.id, docInfo.metadata);
	      insertAttachmentMappings(docInfo, metadata.seq, callback);
	    }
	
	    var putReq = bySeqStore.put(doc);
	
	    putReq.onsuccess = afterPutDoc;
	    putReq.onerror = afterPutDocError;
	  }
	
	  function writeAttachments(docInfo, winningRev, winningRevIsDeleted,
	                            isUpdate, resultsIdx, callback) {
	
	
	    var doc = docInfo.data;
	
	    var numDone = 0;
	    var attachments = Object.keys(doc._attachments);
	
	    function collectResults() {
	      if (numDone === attachments.length) {
	        finishDoc(docInfo, winningRev, winningRevIsDeleted,
	          isUpdate, resultsIdx, callback);
	      }
	    }
	
	    function attachmentSaved() {
	      numDone++;
	      collectResults();
	    }
	
	    attachments.forEach(function (key) {
	      var att = docInfo.data._attachments[key];
	      if (!att.stub) {
	        var data = att.data;
	        delete att.data;
	        att.revpos = parseInt(winningRev, 10);
	        var digest = att.digest;
	        saveAttachment(digest, data, attachmentSaved);
	      } else {
	        numDone++;
	        collectResults();
	      }
	    });
	  }
	
	  // map seqs to attachment digests, which
	  // we will need later during compaction
	  function insertAttachmentMappings(docInfo, seq, callback) {
	
	    var attsAdded = 0;
	    var attsToAdd = Object.keys(docInfo.data._attachments || {});
	
	    if (!attsToAdd.length) {
	      return callback();
	    }
	
	    function checkDone() {
	      if (++attsAdded === attsToAdd.length) {
	        callback();
	      }
	    }
	
	    function add(att) {
	      var digest = docInfo.data._attachments[att].digest;
	      var req = attachAndSeqStore.put({
	        seq: seq,
	        digestSeq: digest + '::' + seq
	      });
	
	      req.onsuccess = checkDone;
	      req.onerror = function (e) {
	        // this callback is for a constaint error, which we ignore
	        // because this docid/rev has already been associated with
	        // the digest (e.g. when new_edits == false)
	        e.preventDefault(); // avoid transaction abort
	        e.stopPropagation(); // avoid transaction onerror
	        checkDone();
	      };
	    }
	    for (var i = 0; i < attsToAdd.length; i++) {
	      add(attsToAdd[i]); // do in parallel
	    }
	  }
	
	  function saveAttachment(digest, data, callback) {
	
	
	    var getKeyReq = attachStore.count(digest);
	    getKeyReq.onsuccess = function (e) {
	      var count = e.target.result;
	      if (count) {
	        return callback(); // already exists
	      }
	      var newAtt = {
	        digest: digest,
	        body: data
	      };
	      var putReq = attachStore.put(newAtt);
	      putReq.onsuccess = callback;
	    };
	  }
	}
	
	function createKeyRange(start, end, inclusiveEnd, key, descending) {
	  try {
	    if (start && end) {
	      if (descending) {
	        return IDBKeyRange.bound(end, start, !inclusiveEnd, false);
	      } else {
	        return IDBKeyRange.bound(start, end, false, !inclusiveEnd);
	      }
	    } else if (start) {
	      if (descending) {
	        return IDBKeyRange.upperBound(start);
	      } else {
	        return IDBKeyRange.lowerBound(start);
	      }
	    } else if (end) {
	      if (descending) {
	        return IDBKeyRange.lowerBound(end, !inclusiveEnd);
	      } else {
	        return IDBKeyRange.upperBound(end, !inclusiveEnd);
	      }
	    } else if (key) {
	      return IDBKeyRange.only(key);
	    }
	  } catch (e) {
	    return {error: e};
	  }
	  return null;
	}
	
	function handleKeyRangeError(api, opts, err, callback) {
	  if (err.name === "DataError" && err.code === 0) {
	    // data error, start is less than end
	    return callback(null, {
	      total_rows: api._meta.docCount,
	      offset: opts.skip,
	      rows: []
	    });
	  }
	  callback(createError(IDB_ERROR, err.name, err.message));
	}
	
	function idbAllDocs(opts, api, idb, callback) {
	
	  function allDocsQuery(opts, callback) {
	    var start = 'startkey' in opts ? opts.startkey : false;
	    var end = 'endkey' in opts ? opts.endkey : false;
	    var key = 'key' in opts ? opts.key : false;
	    var skip = opts.skip || 0;
	    var limit = typeof opts.limit === 'number' ? opts.limit : -1;
	    var inclusiveEnd = opts.inclusive_end !== false;
	    var descending = 'descending' in opts && opts.descending ? 'prev' : null;
	
	    var keyRange = createKeyRange(start, end, inclusiveEnd, key, descending);
	    if (keyRange && keyRange.error) {
	      return handleKeyRangeError(api, opts, keyRange.error, callback);
	    }
	
	    var stores = [DOC_STORE, BY_SEQ_STORE];
	
	    if (opts.attachments) {
	      stores.push(ATTACH_STORE);
	    }
	    var txnResult = openTransactionSafely(idb, stores, 'readonly');
	    if (txnResult.error) {
	      return callback(txnResult.error);
	    }
	    var txn = txnResult.txn;
	    var docStore = txn.objectStore(DOC_STORE);
	    var seqStore = txn.objectStore(BY_SEQ_STORE);
	    var cursor = descending ?
	      docStore.openCursor(keyRange, descending) :
	      docStore.openCursor(keyRange);
	    var docIdRevIndex = seqStore.index('_doc_id_rev');
	    var results = [];
	    var docCount = 0;
	
	    // if the user specifies include_docs=true, then we don't
	    // want to block the main cursor while we're fetching the doc
	    function fetchDocAsynchronously(metadata, row, winningRev) {
	      var key = metadata.id + "::" + winningRev;
	      docIdRevIndex.get(key).onsuccess =  function onGetDoc(e) {
	        row.doc = decodeDoc(e.target.result);
	        if (opts.conflicts) {
	          row.doc._conflicts = collectConflicts(metadata);
	        }
	        fetchAttachmentsIfNecessary(row.doc, opts, txn);
	      };
	    }
	
	    function allDocsInner(cursor, winningRev, metadata) {
	      var row = {
	        id: metadata.id,
	        key: metadata.id,
	        value: {
	          rev: winningRev
	        }
	      };
	      var deleted = metadata.deleted;
	      if (opts.deleted === 'ok') {
	        results.push(row);
	        // deleted docs are okay with "keys" requests
	        if (deleted) {
	          row.value.deleted = true;
	          row.doc = null;
	        } else if (opts.include_docs) {
	          fetchDocAsynchronously(metadata, row, winningRev);
	        }
	      } else if (!deleted && skip-- <= 0) {
	        results.push(row);
	        if (opts.include_docs) {
	          fetchDocAsynchronously(metadata, row, winningRev);
	        }
	        if (--limit === 0) {
	          return;
	        }
	      }
	      cursor.continue();
	    }
	
	    function onGetCursor(e) {
	      docCount = api._meta.docCount; // do this within the txn for consistency
	      var cursor = e.target.result;
	      if (!cursor) {
	        return;
	      }
	      var metadata = decodeMetadata(cursor.value);
	      var winningRev = metadata.winningRev;
	
	      allDocsInner(cursor, winningRev, metadata);
	    }
	
	    function onResultsReady() {
	      callback(null, {
	        total_rows: docCount,
	        offset: opts.skip,
	        rows: results
	      });
	    }
	
	    function onTxnComplete() {
	      if (opts.attachments) {
	        postProcessAttachments(results, opts.binary).then(onResultsReady);
	      } else {
	        onResultsReady();
	      }
	    }
	
	    txn.oncomplete = onTxnComplete;
	    cursor.onsuccess = onGetCursor;
	  }
	
	  function allDocs(opts, callback) {
	
	    if (opts.limit === 0) {
	      return callback(null, {
	        total_rows: api._meta.docCount,
	        offset: opts.skip,
	        rows: []
	      });
	    }
	    allDocsQuery(opts, callback);
	  }
	
	  allDocs(opts, callback);
	}
	
	//
	// Blobs are not supported in all versions of IndexedDB, notably
	// Chrome <37 and Android <5. In those versions, storing a blob will throw.
	//
	// Various other blob bugs exist in Chrome v37-42 (inclusive).
	// Detecting them is expensive and confusing to users, and Chrome 37-42
	// is at very low usage worldwide, so we do a hacky userAgent check instead.
	//
	// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
	// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
	// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
	//
	function checkBlobSupport(txn) {
	  return new PouchPromise(function (resolve) {
	    var blob = createBlob(['']);
	    txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');
	
	    txn.onabort = function (e) {
	      // If the transaction aborts now its due to not being able to
	      // write to the database, likely due to the disk being full
	      e.preventDefault();
	      e.stopPropagation();
	      resolve(false);
	    };
	
	    txn.oncomplete = function () {
	      var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
	      var matchedEdge = navigator.userAgent.match(/Edge\//);
	      // MS Edge pretends to be Chrome 42:
	      // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
	      resolve(matchedEdge || !matchedChrome ||
	        parseInt(matchedChrome[1], 10) >= 43);
	    };
	  }).catch(function () {
	    return false; // error, so assume unsupported
	  });
	}
	
	var cachedDBs = new _Map();
	var blobSupportPromise;
	var idbChanges = new Changes$1();
	var openReqList = new _Map();
	
	function IdbPouch(opts, callback) {
	  var api = this;
	
	  taskQueue.queue.push({
	    action: function (thisCallback) {
	      init(api, opts, thisCallback);
	    },
	    callback: callback
	  });
	  applyNext(api.constructor);
	}
	
	function init(api, opts, callback) {
	
	  var dbName = opts.name;
	
	  var idb = null;
	  api._meta = null;
	
	  // called when creating a fresh new database
	  function createSchema(db) {
	    var docStore = db.createObjectStore(DOC_STORE, {keyPath : 'id'});
	    db.createObjectStore(BY_SEQ_STORE, {autoIncrement: true})
	      .createIndex('_doc_id_rev', '_doc_id_rev', {unique: true});
	    db.createObjectStore(ATTACH_STORE, {keyPath: 'digest'});
	    db.createObjectStore(META_STORE, {keyPath: 'id', autoIncrement: false});
	    db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
	
	    // added in v2
	    docStore.createIndex('deletedOrLocal', 'deletedOrLocal', {unique : false});
	
	    // added in v3
	    db.createObjectStore(LOCAL_STORE, {keyPath: '_id'});
	
	    // added in v4
	    var attAndSeqStore = db.createObjectStore(ATTACH_AND_SEQ_STORE,
	      {autoIncrement: true});
	    attAndSeqStore.createIndex('seq', 'seq');
	    attAndSeqStore.createIndex('digestSeq', 'digestSeq', {unique: true});
	  }
	
	  // migration to version 2
	  // unfortunately "deletedOrLocal" is a misnomer now that we no longer
	  // store local docs in the main doc-store, but whaddyagonnado
	  function addDeletedOrLocalIndex(txn, callback) {
	    var docStore = txn.objectStore(DOC_STORE);
	    docStore.createIndex('deletedOrLocal', 'deletedOrLocal', {unique : false});
	
	    docStore.openCursor().onsuccess = function (event) {
	      var cursor = event.target.result;
	      if (cursor) {
	        var metadata = cursor.value;
	        var deleted = isDeleted(metadata);
	        metadata.deletedOrLocal = deleted ? "1" : "0";
	        docStore.put(metadata);
	        cursor.continue();
	      } else {
	        callback();
	      }
	    };
	  }
	
	  // migration to version 3 (part 1)
	  function createLocalStoreSchema(db) {
	    db.createObjectStore(LOCAL_STORE, {keyPath: '_id'})
	      .createIndex('_doc_id_rev', '_doc_id_rev', {unique: true});
	  }
	
	  // migration to version 3 (part 2)
	  function migrateLocalStore(txn, cb) {
	    var localStore = txn.objectStore(LOCAL_STORE);
	    var docStore = txn.objectStore(DOC_STORE);
	    var seqStore = txn.objectStore(BY_SEQ_STORE);
	
	    var cursor = docStore.openCursor();
	    cursor.onsuccess = function (event) {
	      var cursor = event.target.result;
	      if (cursor) {
	        var metadata = cursor.value;
	        var docId = metadata.id;
	        var local = isLocalId(docId);
	        var rev = winningRev(metadata);
	        if (local) {
	          var docIdRev = docId + "::" + rev;
	          // remove all seq entries
	          // associated with this docId
	          var start = docId + "::";
	          var end = docId + "::~";
	          var index = seqStore.index('_doc_id_rev');
	          var range = IDBKeyRange.bound(start, end, false, false);
	          var seqCursor = index.openCursor(range);
	          seqCursor.onsuccess = function (e) {
	            seqCursor = e.target.result;
	            if (!seqCursor) {
	              // done
	              docStore.delete(cursor.primaryKey);
	              cursor.continue();
	            } else {
	              var data = seqCursor.value;
	              if (data._doc_id_rev === docIdRev) {
	                localStore.put(data);
	              }
	              seqStore.delete(seqCursor.primaryKey);
	              seqCursor.continue();
	            }
	          };
	        } else {
	          cursor.continue();
	        }
	      } else if (cb) {
	        cb();
	      }
	    };
	  }
	
	  // migration to version 4 (part 1)
	  function addAttachAndSeqStore(db) {
	    var attAndSeqStore = db.createObjectStore(ATTACH_AND_SEQ_STORE,
	      {autoIncrement: true});
	    attAndSeqStore.createIndex('seq', 'seq');
	    attAndSeqStore.createIndex('digestSeq', 'digestSeq', {unique: true});
	  }
	
	  // migration to version 4 (part 2)
	  function migrateAttsAndSeqs(txn, callback) {
	    var seqStore = txn.objectStore(BY_SEQ_STORE);
	    var attStore = txn.objectStore(ATTACH_STORE);
	    var attAndSeqStore = txn.objectStore(ATTACH_AND_SEQ_STORE);
	
	    // need to actually populate the table. this is the expensive part,
	    // so as an optimization, check first that this database even
	    // contains attachments
	    var req = attStore.count();
	    req.onsuccess = function (e) {
	      var count = e.target.result;
	      if (!count) {
	        return callback(); // done
	      }
	
	      seqStore.openCursor().onsuccess = function (e) {
	        var cursor = e.target.result;
	        if (!cursor) {
	          return callback(); // done
	        }
	        var doc = cursor.value;
	        var seq = cursor.primaryKey;
	        var atts = Object.keys(doc._attachments || {});
	        var digestMap = {};
	        for (var j = 0; j < atts.length; j++) {
	          var att = doc._attachments[atts[j]];
	          digestMap[att.digest] = true; // uniq digests, just in case
	        }
	        var digests = Object.keys(digestMap);
	        for (j = 0; j < digests.length; j++) {
	          var digest = digests[j];
	          attAndSeqStore.put({
	            seq: seq,
	            digestSeq: digest + '::' + seq
	          });
	        }
	        cursor.continue();
	      };
	    };
	  }
	
	  // migration to version 5
	  // Instead of relying on on-the-fly migration of metadata,
	  // this brings the doc-store to its modern form:
	  // - metadata.winningrev
	  // - metadata.seq
	  // - stringify the metadata when storing it
	  function migrateMetadata(txn) {
	
	    function decodeMetadataCompat(storedObject) {
	      if (!storedObject.data) {
	        // old format, when we didn't store it stringified
	        storedObject.deleted = storedObject.deletedOrLocal === '1';
	        return storedObject;
	      }
	      return decodeMetadata(storedObject);
	    }
	
	    // ensure that every metadata has a winningRev and seq,
	    // which was previously created on-the-fly but better to migrate
	    var bySeqStore = txn.objectStore(BY_SEQ_STORE);
	    var docStore = txn.objectStore(DOC_STORE);
	    var cursor = docStore.openCursor();
	    cursor.onsuccess = function (e) {
	      var cursor = e.target.result;
	      if (!cursor) {
	        return; // done
	      }
	      var metadata = decodeMetadataCompat(cursor.value);
	
	      metadata.winningRev = metadata.winningRev ||
	        winningRev(metadata);
	
	      function fetchMetadataSeq() {
	        // metadata.seq was added post-3.2.0, so if it's missing,
	        // we need to fetch it manually
	        var start = metadata.id + '::';
	        var end = metadata.id + '::\uffff';
	        var req = bySeqStore.index('_doc_id_rev').openCursor(
	          IDBKeyRange.bound(start, end));
	
	        var metadataSeq = 0;
	        req.onsuccess = function (e) {
	          var cursor = e.target.result;
	          if (!cursor) {
	            metadata.seq = metadataSeq;
	            return onGetMetadataSeq();
	          }
	          var seq = cursor.primaryKey;
	          if (seq > metadataSeq) {
	            metadataSeq = seq;
	          }
	          cursor.continue();
	        };
	      }
	
	      function onGetMetadataSeq() {
	        var metadataToStore = encodeMetadata(metadata,
	          metadata.winningRev, metadata.deleted);
	
	        var req = docStore.put(metadataToStore);
	        req.onsuccess = function () {
	          cursor.continue();
	        };
	      }
	
	      if (metadata.seq) {
	        return onGetMetadataSeq();
	      }
	
	      fetchMetadataSeq();
	    };
	
	  }
	
	  api.type = function () {
	    return 'idb';
	  };
	
	  api._id = toPromise(function (callback) {
	    callback(null, api._meta.instanceId);
	  });
	
	  api._bulkDocs = function idb_bulkDocs(req, reqOpts, callback) {
	    idbBulkDocs(opts, req, reqOpts, api, idb, idbChanges, callback);
	  };
	
	  // First we look up the metadata in the ids database, then we fetch the
	  // current revision(s) from the by sequence store
	  api._get = function idb_get(id, opts, callback) {
	    var doc;
	    var metadata;
	    var err;
	    var txn = opts.ctx;
	    if (!txn) {
	      var txnResult = openTransactionSafely(idb,
	        [DOC_STORE, BY_SEQ_STORE, ATTACH_STORE], 'readonly');
	      if (txnResult.error) {
	        return callback(txnResult.error);
	      }
	      txn = txnResult.txn;
	    }
	
	    function finish() {
	      callback(err, {doc: doc, metadata: metadata, ctx: txn});
	    }
	
	    txn.objectStore(DOC_STORE).get(id).onsuccess = function (e) {
	      metadata = decodeMetadata(e.target.result);
	      // we can determine the result here if:
	      // 1. there is no such document
	      // 2. the document is deleted and we don't ask about specific rev
	      // When we ask with opts.rev we expect the answer to be either
	      // doc (possibly with _deleted=true) or missing error
	      if (!metadata) {
	        err = createError(MISSING_DOC, 'missing');
	        return finish();
	      }
	      if (isDeleted(metadata) && !opts.rev) {
	        err = createError(MISSING_DOC, "deleted");
	        return finish();
	      }
	      var objectStore = txn.objectStore(BY_SEQ_STORE);
	
	      var rev = opts.rev || metadata.winningRev;
	      var key = metadata.id + '::' + rev;
	
	      objectStore.index('_doc_id_rev').get(key).onsuccess = function (e) {
	        doc = e.target.result;
	        if (doc) {
	          doc = decodeDoc(doc);
	        }
	        if (!doc) {
	          err = createError(MISSING_DOC, 'missing');
	          return finish();
	        }
	        finish();
	      };
	    };
	  };
	
	  api._getAttachment = function (docId, attachId, attachment, opts, callback) {
	    var txn;
	    if (opts.ctx) {
	      txn = opts.ctx;
	    } else {
	      var txnResult = openTransactionSafely(idb,
	        [DOC_STORE, BY_SEQ_STORE, ATTACH_STORE], 'readonly');
	      if (txnResult.error) {
	        return callback(txnResult.error);
	      }
	      txn = txnResult.txn;
	    }
	    var digest = attachment.digest;
	    var type = attachment.content_type;
	
	    txn.objectStore(ATTACH_STORE).get(digest).onsuccess = function (e) {
	      var body = e.target.result.body;
	      readBlobData(body, type, opts.binary, function (blobData) {
	        callback(null, blobData);
	      });
	    };
	  };
	
	  api._info = function idb_info(callback) {
	
	    if (idb === null || !cachedDBs.has(dbName)) {
	      var error = new Error('db isn\'t open');
	      error.id = 'idbNull';
	      return callback(error);
	    }
	    var updateSeq;
	    var docCount;
	
	    var txnResult = openTransactionSafely(idb, [BY_SEQ_STORE], 'readonly');
	    if (txnResult.error) {
	      return callback(txnResult.error);
	    }
	    var txn = txnResult.txn;
	    var cursor = txn.objectStore(BY_SEQ_STORE).openCursor(null, 'prev');
	    cursor.onsuccess = function (event) {
	      var cursor = event.target.result;
	      updateSeq = cursor ? cursor.key : 0;
	      // count within the same txn for consistency
	      docCount = api._meta.docCount;
	    };
	
	    txn.oncomplete = function () {
	      callback(null, {
	        doc_count: docCount,
	        update_seq: updateSeq,
	        // for debugging
	        idb_attachment_format: (api._meta.blobSupport ? 'binary' : 'base64')
	      });
	    };
	  };
	
	  api._allDocs = function idb_allDocs(opts, callback) {
	    idbAllDocs(opts, api, idb, callback);
	  };
	
	  api._changes = function (opts) {
	    opts = clone(opts);
	
	    if (opts.continuous) {
	      var id = dbName + ':' + uuid();
	      idbChanges.addListener(dbName, id, api, opts);
	      idbChanges.notify(dbName);
	      return {
	        cancel: function () {
	          idbChanges.removeListener(dbName, id);
	        }
	      };
	    }
	
	    var docIds = opts.doc_ids && new _Set(opts.doc_ids);
	
	    opts.since = opts.since || 0;
	    var lastSeq = opts.since;
	
	    var limit = 'limit' in opts ? opts.limit : -1;
	    if (limit === 0) {
	      limit = 1; // per CouchDB _changes spec
	    }
	    var returnDocs;
	    if ('return_docs' in opts) {
	      returnDocs = opts.return_docs;
	    } else if ('returnDocs' in opts) {
	      // TODO: Remove 'returnDocs' in favor of 'return_docs' in a future release
	      returnDocs = opts.returnDocs;
	    } else {
	      returnDocs = true;
	    }
	
	    var results = [];
	    var numResults = 0;
	    var filter = filterChange(opts);
	    var docIdsToMetadata = new _Map();
	
	    var txn;
	    var bySeqStore;
	    var docStore;
	    var docIdRevIndex;
	
	    function onGetCursor(cursor) {
	
	      var doc = decodeDoc(cursor.value);
	      var seq = cursor.key;
	
	      if (docIds && !docIds.has(doc._id)) {
	        return cursor.continue();
	      }
	
	      var metadata;
	
	      function onGetMetadata() {
	        if (metadata.seq !== seq) {
	          // some other seq is later
	          return cursor.continue();
	        }
	
	        lastSeq = seq;
	
	        if (metadata.winningRev === doc._rev) {
	          return onGetWinningDoc(doc);
	        }
	
	        fetchWinningDoc();
	      }
	
	      function fetchWinningDoc() {
	        var docIdRev = doc._id + '::' + metadata.winningRev;
	        var req = docIdRevIndex.get(docIdRev);
	        req.onsuccess = function (e) {
	          onGetWinningDoc(decodeDoc(e.target.result));
	        };
	      }
	
	      function onGetWinningDoc(winningDoc) {
	
	        var change = opts.processChange(winningDoc, metadata, opts);
	        change.seq = metadata.seq;
	
	        var filtered = filter(change);
	        if (typeof filtered === 'object') {
	          return opts.complete(filtered);
	        }
	
	        if (filtered) {
	          numResults++;
	          if (returnDocs) {
	            results.push(change);
	          }
	          // process the attachment immediately
	          // for the benefit of live listeners
	          if (opts.attachments && opts.include_docs) {
	            fetchAttachmentsIfNecessary(winningDoc, opts, txn, function () {
	              postProcessAttachments([change], opts.binary).then(function () {
	                opts.onChange(change);
	              });
	            });
	          } else {
	            opts.onChange(change);
	          }
	        }
	        if (numResults !== limit) {
	          cursor.continue();
	        }
	      }
	
	      metadata = docIdsToMetadata.get(doc._id);
	      if (metadata) { // cached
	        return onGetMetadata();
	      }
	      // metadata not cached, have to go fetch it
	      docStore.get(doc._id).onsuccess = function (event) {
	        metadata = decodeMetadata(event.target.result);
	        docIdsToMetadata.set(doc._id, metadata);
	        onGetMetadata();
	      };
	    }
	
	    function onsuccess(event) {
	      var cursor = event.target.result;
	
	      if (!cursor) {
	        return;
	      }
	      onGetCursor(cursor);
	    }
	
	    function fetchChanges() {
	      var objectStores = [DOC_STORE, BY_SEQ_STORE];
	      if (opts.attachments) {
	        objectStores.push(ATTACH_STORE);
	      }
	      var txnResult = openTransactionSafely(idb, objectStores, 'readonly');
	      if (txnResult.error) {
	        return opts.complete(txnResult.error);
	      }
	      txn = txnResult.txn;
	      txn.onabort = idbError(opts.complete);
	      txn.oncomplete = onTxnComplete;
	
	      bySeqStore = txn.objectStore(BY_SEQ_STORE);
	      docStore = txn.objectStore(DOC_STORE);
	      docIdRevIndex = bySeqStore.index('_doc_id_rev');
	
	      var req;
	
	      if (opts.descending) {
	        req = bySeqStore.openCursor(null, 'prev');
	      } else {
	        req = bySeqStore.openCursor(IDBKeyRange.lowerBound(opts.since, true));
	      }
	
	      req.onsuccess = onsuccess;
	    }
	
	    fetchChanges();
	
	    function onTxnComplete() {
	
	      function finish() {
	        opts.complete(null, {
	          results: results,
	          last_seq: lastSeq
	        });
	      }
	
	      if (!opts.continuous && opts.attachments) {
	        // cannot guarantee that postProcessing was already done,
	        // so do it again
	        postProcessAttachments(results).then(finish);
	      } else {
	        finish();
	      }
	    }
	  };
	
	  api._close = function (callback) {
	    if (idb === null) {
	      return callback(createError(NOT_OPEN));
	    }
	
	    // https://developer.mozilla.org/en-US/docs/IndexedDB/IDBDatabase#close
	    // "Returns immediately and closes the connection in a separate thread..."
	    idb.close();
	    cachedDBs.delete(dbName);
	    idb = null;
	    callback();
	  };
	
	  api._getRevisionTree = function (docId, callback) {
	    var txnResult = openTransactionSafely(idb, [DOC_STORE], 'readonly');
	    if (txnResult.error) {
	      return callback(txnResult.error);
	    }
	    var txn = txnResult.txn;
	    var req = txn.objectStore(DOC_STORE).get(docId);
	    req.onsuccess = function (event) {
	      var doc = decodeMetadata(event.target.result);
	      if (!doc) {
	        callback(createError(MISSING_DOC));
	      } else {
	        callback(null, doc.rev_tree);
	      }
	    };
	  };
	
	  // This function removes revisions of document docId
	  // which are listed in revs and sets this document
	  // revision to to rev_tree
	  api._doCompaction = function (docId, revs, callback) {
	    var stores = [
	      DOC_STORE,
	      BY_SEQ_STORE,
	      ATTACH_STORE,
	      ATTACH_AND_SEQ_STORE
	    ];
	    var txnResult = openTransactionSafely(idb, stores, 'readwrite');
	    if (txnResult.error) {
	      return callback(txnResult.error);
	    }
	    var txn = txnResult.txn;
	
	    var docStore = txn.objectStore(DOC_STORE);
	
	    docStore.get(docId).onsuccess = function (event) {
	      var metadata = decodeMetadata(event.target.result);
	      traverseRevTree(metadata.rev_tree, function (isLeaf, pos,
	                                                         revHash, ctx, opts) {
	        var rev = pos + '-' + revHash;
	        if (revs.indexOf(rev) !== -1) {
	          opts.status = 'missing';
	        }
	      });
	      compactRevs(revs, docId, txn);
	      var winningRev = metadata.winningRev;
	      var deleted = metadata.deleted;
	      txn.objectStore(DOC_STORE).put(
	        encodeMetadata(metadata, winningRev, deleted));
	    };
	    txn.onabort = idbError(callback);
	    txn.oncomplete = function () {
	      callback();
	    };
	  };
	
	
	  api._getLocal = function (id, callback) {
	    var txnResult = openTransactionSafely(idb, [LOCAL_STORE], 'readonly');
	    if (txnResult.error) {
	      return callback(txnResult.error);
	    }
	    var tx = txnResult.txn;
	    var req = tx.objectStore(LOCAL_STORE).get(id);
	
	    req.onerror = idbError(callback);
	    req.onsuccess = function (e) {
	      var doc = e.target.result;
	      if (!doc) {
	        callback(createError(MISSING_DOC));
	      } else {
	        delete doc['_doc_id_rev']; // for backwards compat
	        callback(null, doc);
	      }
	    };
	  };
	
	  api._putLocal = function (doc, opts, callback) {
	    if (typeof opts === 'function') {
	      callback = opts;
	      opts = {};
	    }
	    delete doc._revisions; // ignore this, trust the rev
	    var oldRev = doc._rev;
	    var id = doc._id;
	    if (!oldRev) {
	      doc._rev = '0-1';
	    } else {
	      doc._rev = '0-' + (parseInt(oldRev.split('-')[1], 10) + 1);
	    }
	
	    var tx = opts.ctx;
	    var ret;
	    if (!tx) {
	      var txnResult = openTransactionSafely(idb, [LOCAL_STORE], 'readwrite');
	      if (txnResult.error) {
	        return callback(txnResult.error);
	      }
	      tx = txnResult.txn;
	      tx.onerror = idbError(callback);
	      tx.oncomplete = function () {
	        if (ret) {
	          callback(null, ret);
	        }
	      };
	    }
	
	    var oStore = tx.objectStore(LOCAL_STORE);
	    var req;
	    if (oldRev) {
	      req = oStore.get(id);
	      req.onsuccess = function (e) {
	        var oldDoc = e.target.result;
	        if (!oldDoc || oldDoc._rev !== oldRev) {
	          callback(createError(REV_CONFLICT));
	        } else { // update
	          var req = oStore.put(doc);
	          req.onsuccess = function () {
	            ret = {ok: true, id: doc._id, rev: doc._rev};
	            if (opts.ctx) { // return immediately
	              callback(null, ret);
	            }
	          };
	        }
	      };
	    } else { // new doc
	      req = oStore.add(doc);
	      req.onerror = function (e) {
	        // constraint error, already exists
	        callback(createError(REV_CONFLICT));
	        e.preventDefault(); // avoid transaction abort
	        e.stopPropagation(); // avoid transaction onerror
	      };
	      req.onsuccess = function () {
	        ret = {ok: true, id: doc._id, rev: doc._rev};
	        if (opts.ctx) { // return immediately
	          callback(null, ret);
	        }
	      };
	    }
	  };
	
	  api._removeLocal = function (doc, opts, callback) {
	    if (typeof opts === 'function') {
	      callback = opts;
	      opts = {};
	    }
	    var tx = opts.ctx;
	    if (!tx) {
	      var txnResult = openTransactionSafely(idb, [LOCAL_STORE], 'readwrite');
	      if (txnResult.error) {
	        return callback(txnResult.error);
	      }
	      tx = txnResult.txn;
	      tx.oncomplete = function () {
	        if (ret) {
	          callback(null, ret);
	        }
	      };
	    }
	    var ret;
	    var id = doc._id;
	    var oStore = tx.objectStore(LOCAL_STORE);
	    var req = oStore.get(id);
	
	    req.onerror = idbError(callback);
	    req.onsuccess = function (e) {
	      var oldDoc = e.target.result;
	      if (!oldDoc || oldDoc._rev !== doc._rev) {
	        callback(createError(MISSING_DOC));
	      } else {
	        oStore.delete(id);
	        ret = {ok: true, id: id, rev: '0-0'};
	        if (opts.ctx) { // return immediately
	          callback(null, ret);
	        }
	      }
	    };
	  };
	
	  api._destroy = function (opts, callback) {
	    idbChanges.removeAllListeners(dbName);
	
	    //Close open request for "dbName" database to fix ie delay.
	    var openReq = openReqList.get(dbName);
	    if (openReq && openReq.result) {
	      openReq.result.close();
	      cachedDBs.delete(dbName);
	    }
	    var req = indexedDB.deleteDatabase(dbName);
	
	    req.onsuccess = function () {
	      //Remove open request from the list.
	      openReqList.delete(dbName);
	      if (hasLocalStorage() && (dbName in localStorage)) {
	        delete localStorage[dbName];
	      }
	      callback(null, { 'ok': true });
	    };
	
	    req.onerror = idbError(callback);
	  };
	
	  var cached = cachedDBs.get(dbName);
	
	  if (cached) {
	    idb = cached.idb;
	    api._meta = cached.global;
	    process.nextTick(function () {
	      callback(null, api);
	    });
	    return;
	  }
	
	  var req;
	  if (opts.storage) {
	    req = tryStorageOption(dbName, opts.storage);
	  } else {
	    req = indexedDB.open(dbName, ADAPTER_VERSION);
	  }
	
	  openReqList.set(dbName, req);
	
	  req.onupgradeneeded = function (e) {
	    var db = e.target.result;
	    if (e.oldVersion < 1) {
	      return createSchema(db); // new db, initial schema
	    }
	    // do migrations
	
	    var txn = e.currentTarget.transaction;
	    // these migrations have to be done in this function, before
	    // control is returned to the event loop, because IndexedDB
	
	    if (e.oldVersion < 3) {
	      createLocalStoreSchema(db); // v2 -> v3
	    }
	    if (e.oldVersion < 4) {
	      addAttachAndSeqStore(db); // v3 -> v4
	    }
	
	    var migrations = [
	      addDeletedOrLocalIndex, // v1 -> v2
	      migrateLocalStore,      // v2 -> v3
	      migrateAttsAndSeqs,     // v3 -> v4
	      migrateMetadata         // v4 -> v5
	    ];
	
	    var i = e.oldVersion;
	
	    function next() {
	      var migration = migrations[i - 1];
	      i++;
	      if (migration) {
	        migration(txn, next);
	      }
	    }
	
	    next();
	  };
	
	  req.onsuccess = function (e) {
	
	    idb = e.target.result;
	
	    idb.onversionchange = function () {
	      idb.close();
	      cachedDBs.delete(dbName);
	    };
	
	    idb.onabort = function (e) {
	      guardedConsole('error', 'Database has a global failure', e.target.error);
	      idb.close();
	      cachedDBs.delete(dbName);
	    };
	
	    var txn = idb.transaction([
	      META_STORE,
	      DETECT_BLOB_SUPPORT_STORE,
	      DOC_STORE
	    ], 'readwrite');
	
	    var req = txn.objectStore(META_STORE).get(META_STORE);
	
	    var blobSupport = null;
	    var docCount = null;
	    var instanceId = null;
	
	    req.onsuccess = function (e) {
	
	      var checkSetupComplete = function () {
	        if (blobSupport === null || docCount === null ||
	            instanceId === null) {
	          return;
	        } else {
	          api._meta = {
	            name: dbName,
	            instanceId: instanceId,
	            blobSupport: blobSupport,
	            docCount: docCount
	          };
	
	          cachedDBs.set(dbName, {
	            idb: idb,
	            global: api._meta
	          });
	          callback(null, api);
	        }
	      };
	
	      //
	      // fetch/store the id
	      //
	
	      var meta = e.target.result || {id: META_STORE};
	      if (dbName  + '_id' in meta) {
	        instanceId = meta[dbName + '_id'];
	        checkSetupComplete();
	      } else {
	        instanceId = uuid();
	        meta[dbName + '_id'] = instanceId;
	        txn.objectStore(META_STORE).put(meta).onsuccess = function () {
	          checkSetupComplete();
	        };
	      }
	
	      //
	      // check blob support
	      //
	
	      if (!blobSupportPromise) {
	        // make sure blob support is only checked once
	        blobSupportPromise = checkBlobSupport(txn);
	      }
	
	      blobSupportPromise.then(function (val) {
	        blobSupport = val;
	        checkSetupComplete();
	      });
	
	      //
	      // count docs
	      //
	
	      var index = txn.objectStore(DOC_STORE).index('deletedOrLocal');
	      index.count(IDBKeyRange.only('0')).onsuccess = function (e) {
	        docCount = e.target.result;
	        checkSetupComplete();
	      };
	
	    };
	  };
	
	  req.onerror = function () {
	    var msg = 'Failed to open indexedDB, are you in private browsing mode?';
	    guardedConsole('error', msg);
	    callback(createError(IDB_ERROR, msg));
	  };
	}
	
	IdbPouch.valid = function () {
	  // Issue #2533, we finally gave up on doing bug
	  // detection instead of browser sniffing. Safari brought us
	  // to our knees.
	  var isSafari = typeof openDatabase !== 'undefined' &&
	    /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) &&
	    !/Chrome/.test(navigator.userAgent) &&
	    !/BlackBerry/.test(navigator.platform);
	
	  // some outdated implementations of IDB that appear on Samsung
	  // and HTC Android devices <4.4 are missing IDBKeyRange
	  return !isSafari && typeof indexedDB !== 'undefined' &&
	    typeof IDBKeyRange !== 'undefined';
	};
	
	function tryStorageOption(dbName, storage) {
	  try { // option only available in Firefox 26+
	    return indexedDB.open(dbName, {
	      version: ADAPTER_VERSION,
	      storage: storage
	    });
	  } catch(err) {
	      return indexedDB.open(dbName, ADAPTER_VERSION);
	  }
	}
	
	function IDBPouch (PouchDB) {
	  PouchDB.adapter('idb', IdbPouch, true);
	}
	
	//
	// Parsing hex strings. Yeah.
	//
	// So basically we need this because of a bug in WebSQL:
	// https://code.google.com/p/chromium/issues/detail?id=422690
	// https://bugs.webkit.org/show_bug.cgi?id=137637
	//
	// UTF-8 and UTF-16 are provided as separate functions
	// for meager performance improvements
	//
	
	function decodeUtf8(str) {
	  return decodeURIComponent(escape(str));
	}
	
	function hexToInt(charCode) {
	  // '0'-'9' is 48-57
	  // 'A'-'F' is 65-70
	  // SQLite will only give us uppercase hex
	  return charCode < 65 ? (charCode - 48) : (charCode - 55);
	}
	
	
	// Example:
	// pragma encoding=utf8;
	// select hex('A');
	// returns '41'
	function parseHexUtf8(str, start, end) {
	  var result = '';
	  while (start < end) {
	    result += String.fromCharCode(
	      (hexToInt(str.charCodeAt(start++)) << 4) |
	        hexToInt(str.charCodeAt(start++)));
	  }
	  return result;
	}
	
	// Example:
	// pragma encoding=utf16;
	// select hex('A');
	// returns '4100'
	// notice that the 00 comes after the 41 (i.e. it's swizzled)
	function parseHexUtf16(str, start, end) {
	  var result = '';
	  while (start < end) {
	    // UTF-16, so swizzle the bytes
	    result += String.fromCharCode(
	      (hexToInt(str.charCodeAt(start + 2)) << 12) |
	        (hexToInt(str.charCodeAt(start + 3)) << 8) |
	        (hexToInt(str.charCodeAt(start)) << 4) |
	        hexToInt(str.charCodeAt(start + 1)));
	    start += 4;
	  }
	  return result;
	}
	
	function parseHexString(str, encoding) {
	  if (encoding === 'UTF-8') {
	    return decodeUtf8(parseHexUtf8(str, 0, str.length));
	  } else {
	    return parseHexUtf16(str, 0, str.length);
	  }
	}
	
	function quote(str) {
	  return "'" + str + "'";
	}
	
	var ADAPTER_VERSION$1 = 7; // used to manage migrations
	
	// The object stores created for each database
	// DOC_STORE stores the document meta data, its revision history and state
	var DOC_STORE$1 = quote('document-store');
	// BY_SEQ_STORE stores a particular version of a document, keyed by its
	// sequence id
	var BY_SEQ_STORE$1 = quote('by-sequence');
	// Where we store attachments
	var ATTACH_STORE$1 = quote('attach-store');
	var LOCAL_STORE$1 = quote('local-store');
	var META_STORE$1 = quote('metadata-store');
	// where we store many-to-many relations between attachment
	// digests and seqs
	var ATTACH_AND_SEQ_STORE$1 = quote('attach-seq-store');
	
	// escapeBlob and unescapeBlob are workarounds for a websql bug:
	// https://code.google.com/p/chromium/issues/detail?id=422690
	// https://bugs.webkit.org/show_bug.cgi?id=137637
	// The goal is to never actually insert the \u0000 character
	// in the database.
	function escapeBlob(str) {
	  return str
	    .replace(/\u0002/g, '\u0002\u0002')
	    .replace(/\u0001/g, '\u0001\u0002')
	    .replace(/\u0000/g, '\u0001\u0001');
	}
	
	function unescapeBlob(str) {
	  return str
	    .replace(/\u0001\u0001/g, '\u0000')
	    .replace(/\u0001\u0002/g, '\u0001')
	    .replace(/\u0002\u0002/g, '\u0002');
	}
	
	function stringifyDoc(doc) {
	  // don't bother storing the id/rev. it uses lots of space,
	  // in persistent map/reduce especially
	  delete doc._id;
	  delete doc._rev;
	  return JSON.stringify(doc);
	}
	
	function unstringifyDoc(doc, id, rev) {
	  doc = JSON.parse(doc);
	  doc._id = id;
	  doc._rev = rev;
	  return doc;
	}
	
	// question mark groups IN queries, e.g. 3 -> '(?,?,?)'
	function qMarks(num) {
	  var s = '(';
	  while (num--) {
	    s += '?';
	    if (num) {
	      s += ',';
	    }
	  }
	  return s + ')';
	}
	
	function select(selector, table, joiner, where, orderBy) {
	  return 'SELECT ' + selector + ' FROM ' +
	    (typeof table === 'string' ? table : table.join(' JOIN ')) +
	    (joiner ? (' ON ' + joiner) : '') +
	    (where ? (' WHERE ' +
	    (typeof where === 'string' ? where : where.join(' AND '))) : '') +
	    (orderBy ? (' ORDER BY ' + orderBy) : '');
	}
	
	function compactRevs$1(revs, docId, tx) {
	
	  if (!revs.length) {
	    return;
	  }
	
	  var numDone = 0;
	  var seqs = [];
	
	  function checkDone() {
	    if (++numDone === revs.length) { // done
	      deleteOrphans();
	    }
	  }
	
	  function deleteOrphans() {
	    // find orphaned attachment digests
	
	    if (!seqs.length) {
	      return;
	    }
	
	    var sql = 'SELECT DISTINCT digest AS digest FROM ' +
	      ATTACH_AND_SEQ_STORE$1 + ' WHERE seq IN ' + qMarks(seqs.length);
	
	    tx.executeSql(sql, seqs, function (tx, res) {
	
	      var digestsToCheck = [];
	      for (var i = 0; i < res.rows.length; i++) {
	        digestsToCheck.push(res.rows.item(i).digest);
	      }
	      if (!digestsToCheck.length) {
	        return;
	      }
	
	      var sql = 'DELETE FROM ' + ATTACH_AND_SEQ_STORE$1 +
	        ' WHERE seq IN (' +
	        seqs.map(function () { return '?'; }).join(',') +
	        ')';
	      tx.executeSql(sql, seqs, function (tx) {
	
	        var sql = 'SELECT digest FROM ' + ATTACH_AND_SEQ_STORE$1 +
	          ' WHERE digest IN (' +
	          digestsToCheck.map(function () { return '?'; }).join(',') +
	          ')';
	        tx.executeSql(sql, digestsToCheck, function (tx, res) {
	          var nonOrphanedDigests = new _Set();
	          for (var i = 0; i < res.rows.length; i++) {
	            nonOrphanedDigests.add(res.rows.item(i).digest);
	          }
	          digestsToCheck.forEach(function (digest) {
	            if (nonOrphanedDigests.has(digest)) {
	              return;
	            }
	            tx.executeSql(
	              'DELETE FROM ' + ATTACH_AND_SEQ_STORE$1 + ' WHERE digest=?',
	              [digest]);
	            tx.executeSql(
	              'DELETE FROM ' + ATTACH_STORE$1 + ' WHERE digest=?', [digest]);
	          });
	        });
	      });
	    });
	  }
	
	  // update by-seq and attach stores in parallel
	  revs.forEach(function (rev) {
	    var sql = 'SELECT seq FROM ' + BY_SEQ_STORE$1 +
	      ' WHERE doc_id=? AND rev=?';
	
	    tx.executeSql(sql, [docId, rev], function (tx, res) {
	      if (!res.rows.length) { // already deleted
	        return checkDone();
	      }
	      var seq = res.rows.item(0).seq;
	      seqs.push(seq);
	
	      tx.executeSql(
	        'DELETE FROM ' + BY_SEQ_STORE$1 + ' WHERE seq=?', [seq], checkDone);
	    });
	  });
	}
	
	function websqlError(callback) {
	  return function (event) {
	    guardedConsole('error', 'WebSQL threw an error', event);
	    // event may actually be a SQLError object, so report is as such
	    var errorNameMatch = event && event.constructor.toString()
	        .match(/function ([^\(]+)/);
	    var errorName = (errorNameMatch && errorNameMatch[1]) || event.type;
	    var errorReason = event.target || event.message;
	    callback(createError(WSQ_ERROR, errorReason, errorName));
	  };
	}
	
	function getSize(opts) {
	  if ('size' in opts) {
	    // triggers immediate popup in iOS, fixes #2347
	    // e.g. 5000001 asks for 5 MB, 10000001 asks for 10 MB,
	    return opts.size * 1000000;
	  }
	  // In iOS, doesn't matter as long as it's <= 5000000.
	  // Except that if you request too much, our tests fail
	  // because of the native "do you accept?" popup.
	  // In Android <=4.3, this value is actually used as an
	  // honest-to-god ceiling for data, so we need to
	  // set it to a decently high number.
	  var isAndroid = typeof navigator !== 'undefined' &&
	    /Android/.test(navigator.userAgent);
	  return isAndroid ? 5000000 : 1; // in PhantomJS, if you use 0 it will crash
	}
	
	function websqlBulkDocs(dbOpts, req, opts, api, db, websqlChanges, callback) {
	  var newEdits = opts.new_edits;
	  var userDocs = req.docs;
	
	  // Parse the docs, give them a sequence number for the result
	  var docInfos = userDocs.map(function (doc) {
	    if (doc._id && isLocalId(doc._id)) {
	      return doc;
	    }
	    var newDoc = parseDoc(doc, newEdits);
	    return newDoc;
	  });
	
	  var docInfoErrors = docInfos.filter(function (docInfo) {
	    return docInfo.error;
	  });
	  if (docInfoErrors.length) {
	    return callback(docInfoErrors[0]);
	  }
	
	  var tx;
	  var results = new Array(docInfos.length);
	  var fetchedDocs = new _Map();
	
	  var preconditionErrored;
	  function complete() {
	    if (preconditionErrored) {
	      return callback(preconditionErrored);
	    }
	    websqlChanges.notify(api._name);
	    api._docCount = -1; // invalidate
	    callback(null, results);
	  }
	
	  function verifyAttachment(digest, callback) {
	    var sql = 'SELECT count(*) as cnt FROM ' + ATTACH_STORE$1 +
	      ' WHERE digest=?';
	    tx.executeSql(sql, [digest], function (tx, result) {
	      if (result.rows.item(0).cnt === 0) {
	        var err = createError(MISSING_STUB,
	          'unknown stub attachment with digest ' +
	          digest);
	        callback(err);
	      } else {
	        callback();
	      }
	    });
	  }
	
	  function verifyAttachments(finish) {
	    var digests = [];
	    docInfos.forEach(function (docInfo) {
	      if (docInfo.data && docInfo.data._attachments) {
	        Object.keys(docInfo.data._attachments).forEach(function (filename) {
	          var att = docInfo.data._attachments[filename];
	          if (att.stub) {
	            digests.push(att.digest);
	          }
	        });
	      }
	    });
	    if (!digests.length) {
	      return finish();
	    }
	    var numDone = 0;
	    var err;
	
	    function checkDone() {
	      if (++numDone === digests.length) {
	        finish(err);
	      }
	    }
	    digests.forEach(function (digest) {
	      verifyAttachment(digest, function (attErr) {
	        if (attErr && !err) {
	          err = attErr;
	        }
	        checkDone();
	      });
	    });
	  }
	
	  function writeDoc(docInfo, winningRev, winningRevIsDeleted, newRevIsDeleted,
	                    isUpdate, delta, resultsIdx, callback) {
	
	    function finish() {
	      var data = docInfo.data;
	      var deletedInt = newRevIsDeleted ? 1 : 0;
	
	      var id = data._id;
	      var rev = data._rev;
	      var json = stringifyDoc(data);
	      var sql = 'INSERT INTO ' + BY_SEQ_STORE$1 +
	        ' (doc_id, rev, json, deleted) VALUES (?, ?, ?, ?);';
	      var sqlArgs = [id, rev, json, deletedInt];
	
	      // map seqs to attachment digests, which
	      // we will need later during compaction
	      function insertAttachmentMappings(seq, callback) {
	        var attsAdded = 0;
	        var attsToAdd = Object.keys(data._attachments || {});
	
	        if (!attsToAdd.length) {
	          return callback();
	        }
	        function checkDone() {
	          if (++attsAdded === attsToAdd.length) {
	            callback();
	          }
	          return false; // ack handling a constraint error
	        }
	        function add(att) {
	          var sql = 'INSERT INTO ' + ATTACH_AND_SEQ_STORE$1 +
	            ' (digest, seq) VALUES (?,?)';
	          var sqlArgs = [data._attachments[att].digest, seq];
	          tx.executeSql(sql, sqlArgs, checkDone, checkDone);
	          // second callback is for a constaint error, which we ignore
	          // because this docid/rev has already been associated with
	          // the digest (e.g. when new_edits == false)
	        }
	        for (var i = 0; i < attsToAdd.length; i++) {
	          add(attsToAdd[i]); // do in parallel
	        }
	      }
	
	      tx.executeSql(sql, sqlArgs, function (tx, result) {
	        var seq = result.insertId;
	        insertAttachmentMappings(seq, function () {
	          dataWritten(tx, seq);
	        });
	      }, function () {
	        // constraint error, recover by updating instead (see #1638)
	        var fetchSql = select('seq', BY_SEQ_STORE$1, null,
	          'doc_id=? AND rev=?');
	        tx.executeSql(fetchSql, [id, rev], function (tx, res) {
	          var seq = res.rows.item(0).seq;
	          var sql = 'UPDATE ' + BY_SEQ_STORE$1 +
	            ' SET json=?, deleted=? WHERE doc_id=? AND rev=?;';
	          var sqlArgs = [json, deletedInt, id, rev];
	          tx.executeSql(sql, sqlArgs, function (tx) {
	            insertAttachmentMappings(seq, function () {
	              dataWritten(tx, seq);
	            });
	          });
	        });
	        return false; // ack that we've handled the error
	      });
	    }
	
	    function collectResults(attachmentErr) {
	      if (!err) {
	        if (attachmentErr) {
	          err = attachmentErr;
	          callback(err);
	        } else if (recv === attachments.length) {
	          finish();
	        }
	      }
	    }
	
	    var err = null;
	    var recv = 0;
	
	    docInfo.data._id = docInfo.metadata.id;
	    docInfo.data._rev = docInfo.metadata.rev;
	    var attachments = Object.keys(docInfo.data._attachments || {});
	
	
	    if (newRevIsDeleted) {
	      docInfo.data._deleted = true;
	    }
	
	    function attachmentSaved(err) {
	      recv++;
	      collectResults(err);
	    }
	
	    attachments.forEach(function (key) {
	      var att = docInfo.data._attachments[key];
	      if (!att.stub) {
	        var data = att.data;
	        delete att.data;
	        att.revpos = parseInt(winningRev, 10);
	        var digest = att.digest;
	        saveAttachment(digest, data, attachmentSaved);
	      } else {
	        recv++;
	        collectResults();
	      }
	    });
	
	    if (!attachments.length) {
	      finish();
	    }
	
	    function dataWritten(tx, seq) {
	      var id = docInfo.metadata.id;
	
	      var revsToCompact = docInfo.stemmedRevs || [];
	      if (isUpdate && api.auto_compaction) {
	        revsToCompact = compactTree(docInfo.metadata).concat(revsToCompact);
	      }
	      if (revsToCompact.length) {
	        compactRevs$1(revsToCompact, id, tx);
	      }
	
	      docInfo.metadata.seq = seq;
	      delete docInfo.metadata.rev;
	
	      var sql = isUpdate ?
	      'UPDATE ' + DOC_STORE$1 +
	      ' SET json=?, max_seq=?, winningseq=' +
	      '(SELECT seq FROM ' + BY_SEQ_STORE$1 +
	      ' WHERE doc_id=' + DOC_STORE$1 + '.id AND rev=?) WHERE id=?'
	        : 'INSERT INTO ' + DOC_STORE$1 +
	      ' (id, winningseq, max_seq, json) VALUES (?,?,?,?);';
	      var metadataStr = safeJsonStringify(docInfo.metadata);
	      var params = isUpdate ?
	        [metadataStr, seq, winningRev, id] :
	        [id, seq, seq, metadataStr];
	      tx.executeSql(sql, params, function () {
	        results[resultsIdx] = {
	          ok: true,
	          id: docInfo.metadata.id,
	          rev: winningRev
	        };
	        fetchedDocs.set(id, docInfo.metadata);
	        callback();
	      });
	    }
	  }
	
	  function websqlProcessDocs() {
	    processDocs(dbOpts.revs_limit, docInfos, api, fetchedDocs, tx,
	                results, writeDoc, opts);
	  }
	
	  function fetchExistingDocs(callback) {
	    if (!docInfos.length) {
	      return callback();
	    }
	
	    var numFetched = 0;
	
	    function checkDone() {
	      if (++numFetched === docInfos.length) {
	        callback();
	      }
	    }
	
	    docInfos.forEach(function (docInfo) {
	      if (docInfo._id && isLocalId(docInfo._id)) {
	        return checkDone(); // skip local docs
	      }
	      var id = docInfo.metadata.id;
	      tx.executeSql('SELECT json FROM ' + DOC_STORE$1 +
	      ' WHERE id = ?', [id], function (tx, result) {
	        if (result.rows.length) {
	          var metadata = safeJsonParse(result.rows.item(0).json);
	          fetchedDocs.set(id, metadata);
	        }
	        checkDone();
	      });
	    });
	  }
	
	  function saveAttachment(digest, data, callback) {
	    var sql = 'SELECT digest FROM ' + ATTACH_STORE$1 + ' WHERE digest=?';
	    tx.executeSql(sql, [digest], function (tx, result) {
	      if (result.rows.length) { // attachment already exists
	        return callback();
	      }
	      // we could just insert before selecting and catch the error,
	      // but my hunch is that it's cheaper not to serialize the blob
	      // from JS to C if we don't have to (TODO: confirm this)
	      sql = 'INSERT INTO ' + ATTACH_STORE$1 +
	      ' (digest, body, escaped) VALUES (?,?,1)';
	      tx.executeSql(sql, [digest, escapeBlob(data)], function () {
	        callback();
	      }, function () {
	        // ignore constaint errors, means it already exists
	        callback();
	        return false; // ack we handled the error
	      });
	    });
	  }
	
	  preprocessAttachments(docInfos, 'binary', function (err) {
	    if (err) {
	      return callback(err);
	    }
	    db.transaction(function (txn) {
	      tx = txn;
	      verifyAttachments(function (err) {
	        if (err) {
	          preconditionErrored = err;
	        } else {
	          fetchExistingDocs(websqlProcessDocs);
	        }
	      });
	    }, websqlError(callback), complete);
	  });
	}
	
	var cachedDatabases = new _Map();
	
	// openDatabase passed in through opts (e.g. for node-websql)
	function openDatabaseWithOpts(opts) {
	  return opts.websql(opts.name, opts.version, opts.description, opts.size);
	}
	
	function openDBSafely(opts) {
	  try {
	    return {
	      db: openDatabaseWithOpts(opts)
	    };
	  } catch (err) {
	    return {
	      error: err
	    };
	  }
	}
	
	function openDB$1(opts) {
	  var cachedResult = cachedDatabases.get(opts.name);
	  if (!cachedResult) {
	    cachedResult = openDBSafely(opts);
	    cachedDatabases.set(opts.name, cachedResult);
	  }
	  return cachedResult;
	}
	
	var websqlChanges = new Changes$1();
	
	function fetchAttachmentsIfNecessary$1(doc, opts, api, txn, cb) {
	  var attachments = Object.keys(doc._attachments || {});
	  if (!attachments.length) {
	    return cb && cb();
	  }
	  var numDone = 0;
	
	  function checkDone() {
	    if (++numDone === attachments.length && cb) {
	      cb();
	    }
	  }
	
	  function fetchAttachment(doc, att) {
	    var attObj = doc._attachments[att];
	    var attOpts = {binary: opts.binary, ctx: txn};
	    api._getAttachment(doc._id, att, attObj, attOpts, function (_, data) {
	      doc._attachments[att] = jsExtend.extend(
	        pick(attObj, ['digest', 'content_type']),
	        { data: data }
	      );
	      checkDone();
	    });
	  }
	
	  attachments.forEach(function (att) {
	    if (opts.attachments && opts.include_docs) {
	      fetchAttachment(doc, att);
	    } else {
	      doc._attachments[att].stub = true;
	      checkDone();
	    }
	  });
	}
	
	var POUCH_VERSION = 1;
	
	// these indexes cover the ground for most allDocs queries
	var BY_SEQ_STORE_DELETED_INDEX_SQL =
	  'CREATE INDEX IF NOT EXISTS \'by-seq-deleted-idx\' ON ' +
	  BY_SEQ_STORE$1 + ' (seq, deleted)';
	var BY_SEQ_STORE_DOC_ID_REV_INDEX_SQL =
	  'CREATE UNIQUE INDEX IF NOT EXISTS \'by-seq-doc-id-rev\' ON ' +
	    BY_SEQ_STORE$1 + ' (doc_id, rev)';
	var DOC_STORE_WINNINGSEQ_INDEX_SQL =
	  'CREATE INDEX IF NOT EXISTS \'doc-winningseq-idx\' ON ' +
	  DOC_STORE$1 + ' (winningseq)';
	var ATTACH_AND_SEQ_STORE_SEQ_INDEX_SQL =
	  'CREATE INDEX IF NOT EXISTS \'attach-seq-seq-idx\' ON ' +
	    ATTACH_AND_SEQ_STORE$1 + ' (seq)';
	var ATTACH_AND_SEQ_STORE_ATTACH_INDEX_SQL =
	  'CREATE UNIQUE INDEX IF NOT EXISTS \'attach-seq-digest-idx\' ON ' +
	    ATTACH_AND_SEQ_STORE$1 + ' (digest, seq)';
	
	var DOC_STORE_AND_BY_SEQ_JOINER = BY_SEQ_STORE$1 +
	  '.seq = ' + DOC_STORE$1 + '.winningseq';
	
	var SELECT_DOCS = BY_SEQ_STORE$1 + '.seq AS seq, ' +
	  BY_SEQ_STORE$1 + '.deleted AS deleted, ' +
	  BY_SEQ_STORE$1 + '.json AS data, ' +
	  BY_SEQ_STORE$1 + '.rev AS rev, ' +
	  DOC_STORE$1 + '.json AS metadata';
	
	function WebSqlPouch$1(opts, callback) {
	  var api = this;
	  var instanceId = null;
	  var size = getSize(opts);
	  var idRequests = [];
	  var encoding;
	
	  api._docCount = -1; // cache sqlite count(*) for performance
	  api._name = opts.name;
	
	  // extend the options here, because sqlite plugin has a ton of options
	  // and they are constantly changing, so it's more prudent to allow anything
	  var websqlOpts = jsExtend.extend({}, opts, {
	    version: POUCH_VERSION,
	    description: opts.name,
	    size: size
	  });
	  var openDBResult = openDB$1(websqlOpts);
	  if (openDBResult.error) {
	    return websqlError(callback)(openDBResult.error);
	  }
	  var db = openDBResult.db;
	  if (typeof db.readTransaction !== 'function') {
	    // doesn't exist in sqlite plugin
	    db.readTransaction = db.transaction;
	  }
	
	  function dbCreated() {
	    // note the db name in case the browser upgrades to idb
	    if (hasLocalStorage()) {
	      window.localStorage['_pouch__websqldb_' + api._name] = true;
	    }
	    callback(null, api);
	  }
	
	  // In this migration, we added the 'deleted' and 'local' columns to the
	  // by-seq and doc store tables.
	  // To preserve existing user data, we re-process all the existing JSON
	  // and add these values.
	  // Called migration2 because it corresponds to adapter version (db_version) #2
	  function runMigration2(tx, callback) {
	    // index used for the join in the allDocs query
	    tx.executeSql(DOC_STORE_WINNINGSEQ_INDEX_SQL);
	
	    tx.executeSql('ALTER TABLE ' + BY_SEQ_STORE$1 +
	      ' ADD COLUMN deleted TINYINT(1) DEFAULT 0', [], function () {
	      tx.executeSql(BY_SEQ_STORE_DELETED_INDEX_SQL);
	      tx.executeSql('ALTER TABLE ' + DOC_STORE$1 +
	        ' ADD COLUMN local TINYINT(1) DEFAULT 0', [], function () {
	        tx.executeSql('CREATE INDEX IF NOT EXISTS \'doc-store-local-idx\' ON ' +
	          DOC_STORE$1 + ' (local, id)');
	
	        var sql = 'SELECT ' + DOC_STORE$1 + '.winningseq AS seq, ' + DOC_STORE$1 +
	          '.json AS metadata FROM ' + BY_SEQ_STORE$1 + ' JOIN ' + DOC_STORE$1 +
	          ' ON ' + BY_SEQ_STORE$1 + '.seq = ' + DOC_STORE$1 + '.winningseq';
	
	        tx.executeSql(sql, [], function (tx, result) {
	
	          var deleted = [];
	          var local = [];
	
	          for (var i = 0; i < result.rows.length; i++) {
	            var item = result.rows.item(i);
	            var seq = item.seq;
	            var metadata = JSON.parse(item.metadata);
	            if (isDeleted(metadata)) {
	              deleted.push(seq);
	            }
	            if (isLocalId(metadata.id)) {
	              local.push(metadata.id);
	            }
	          }
	          tx.executeSql('UPDATE ' + DOC_STORE$1 + 'SET local = 1 WHERE id IN ' +
	            qMarks(local.length), local, function () {
	            tx.executeSql('UPDATE ' + BY_SEQ_STORE$1 +
	              ' SET deleted = 1 WHERE seq IN ' +
	              qMarks(deleted.length), deleted, callback);
	          });
	        });
	      });
	    });
	  }
	
	  // in this migration, we make all the local docs unversioned
	  function runMigration3(tx, callback) {
	    var local = 'CREATE TABLE IF NOT EXISTS ' + LOCAL_STORE$1 +
	      ' (id UNIQUE, rev, json)';
	    tx.executeSql(local, [], function () {
	      var sql = 'SELECT ' + DOC_STORE$1 + '.id AS id, ' +
	        BY_SEQ_STORE$1 + '.json AS data ' +
	        'FROM ' + BY_SEQ_STORE$1 + ' JOIN ' +
	        DOC_STORE$1 + ' ON ' + BY_SEQ_STORE$1 + '.seq = ' +
	        DOC_STORE$1 + '.winningseq WHERE local = 1';
	      tx.executeSql(sql, [], function (tx, res) {
	        var rows = [];
	        for (var i = 0; i < res.rows.length; i++) {
	          rows.push(res.rows.item(i));
	        }
	        function doNext() {
	          if (!rows.length) {
	            return callback(tx);
	          }
	          var row = rows.shift();
	          var rev = JSON.parse(row.data)._rev;
	          tx.executeSql('INSERT INTO ' + LOCAL_STORE$1 +
	              ' (id, rev, json) VALUES (?,?,?)',
	              [row.id, rev, row.data], function (tx) {
	            tx.executeSql('DELETE FROM ' + DOC_STORE$1 + ' WHERE id=?',
	                [row.id], function (tx) {
	              tx.executeSql('DELETE FROM ' + BY_SEQ_STORE$1 + ' WHERE seq=?',
	                  [row.seq], function () {
	                doNext();
	              });
	            });
	          });
	        }
	        doNext();
	      });
	    });
	  }
	
	  // in this migration, we remove doc_id_rev and just use rev
	  function runMigration4(tx, callback) {
	
	    function updateRows(rows) {
	      function doNext() {
	        if (!rows.length) {
	          return callback(tx);
	        }
	        var row = rows.shift();
	        var doc_id_rev = parseHexString(row.hex, encoding);
	        var idx = doc_id_rev.lastIndexOf('::');
	        var doc_id = doc_id_rev.substring(0, idx);
	        var rev = doc_id_rev.substring(idx + 2);
	        var sql = 'UPDATE ' + BY_SEQ_STORE$1 +
	          ' SET doc_id=?, rev=? WHERE doc_id_rev=?';
	        tx.executeSql(sql, [doc_id, rev, doc_id_rev], function () {
	          doNext();
	        });
	      }
	      doNext();
	    }
	
	    var sql = 'ALTER TABLE ' + BY_SEQ_STORE$1 + ' ADD COLUMN doc_id';
	    tx.executeSql(sql, [], function (tx) {
	      var sql = 'ALTER TABLE ' + BY_SEQ_STORE$1 + ' ADD COLUMN rev';
	      tx.executeSql(sql, [], function (tx) {
	        tx.executeSql(BY_SEQ_STORE_DOC_ID_REV_INDEX_SQL, [], function (tx) {
	          var sql = 'SELECT hex(doc_id_rev) as hex FROM ' + BY_SEQ_STORE$1;
	          tx.executeSql(sql, [], function (tx, res) {
	            var rows = [];
	            for (var i = 0; i < res.rows.length; i++) {
	              rows.push(res.rows.item(i));
	            }
	            updateRows(rows);
	          });
	        });
	      });
	    });
	  }
	
	  // in this migration, we add the attach_and_seq table
	  // for issue #2818
	  function runMigration5(tx, callback) {
	
	    function migrateAttsAndSeqs(tx) {
	      // need to actually populate the table. this is the expensive part,
	      // so as an optimization, check first that this database even
	      // contains attachments
	      var sql = 'SELECT COUNT(*) AS cnt FROM ' + ATTACH_STORE$1;
	      tx.executeSql(sql, [], function (tx, res) {
	        var count = res.rows.item(0).cnt;
	        if (!count) {
	          return callback(tx);
	        }
	
	        var offset = 0;
	        var pageSize = 10;
	        function nextPage() {
	          var sql = select(
	            SELECT_DOCS + ', ' + DOC_STORE$1 + '.id AS id',
	            [DOC_STORE$1, BY_SEQ_STORE$1],
	            DOC_STORE_AND_BY_SEQ_JOINER,
	            null,
	            DOC_STORE$1 + '.id '
	          );
	          sql += ' LIMIT ' + pageSize + ' OFFSET ' + offset;
	          offset += pageSize;
	          tx.executeSql(sql, [], function (tx, res) {
	            if (!res.rows.length) {
	              return callback(tx);
	            }
	            var digestSeqs = {};
	            function addDigestSeq(digest, seq) {
	              // uniq digest/seq pairs, just in case there are dups
	              var seqs = digestSeqs[digest] = (digestSeqs[digest] || []);
	              if (seqs.indexOf(seq) === -1) {
	                seqs.push(seq);
	              }
	            }
	            for (var i = 0; i < res.rows.length; i++) {
	              var row = res.rows.item(i);
	              var doc = unstringifyDoc(row.data, row.id, row.rev);
	              var atts = Object.keys(doc._attachments || {});
	              for (var j = 0; j < atts.length; j++) {
	                var att = doc._attachments[atts[j]];
	                addDigestSeq(att.digest, row.seq);
	              }
	            }
	            var digestSeqPairs = [];
	            Object.keys(digestSeqs).forEach(function (digest) {
	              var seqs = digestSeqs[digest];
	              seqs.forEach(function (seq) {
	                digestSeqPairs.push([digest, seq]);
	              });
	            });
	            if (!digestSeqPairs.length) {
	              return nextPage();
	            }
	            var numDone = 0;
	            digestSeqPairs.forEach(function (pair) {
	              var sql = 'INSERT INTO ' + ATTACH_AND_SEQ_STORE$1 +
	                ' (digest, seq) VALUES (?,?)';
	              tx.executeSql(sql, pair, function () {
	                if (++numDone === digestSeqPairs.length) {
	                  nextPage();
	                }
	              });
	            });
	          });
	        }
	        nextPage();
	      });
	    }
	
	    var attachAndRev = 'CREATE TABLE IF NOT EXISTS ' +
	      ATTACH_AND_SEQ_STORE$1 + ' (digest, seq INTEGER)';
	    tx.executeSql(attachAndRev, [], function (tx) {
	      tx.executeSql(
	        ATTACH_AND_SEQ_STORE_ATTACH_INDEX_SQL, [], function (tx) {
	          tx.executeSql(
	            ATTACH_AND_SEQ_STORE_SEQ_INDEX_SQL, [],
	            migrateAttsAndSeqs);
	        });
	    });
	  }
	
	  // in this migration, we use escapeBlob() and unescapeBlob()
	  // instead of reading out the binary as HEX, which is slow
	  function runMigration6(tx, callback) {
	    var sql = 'ALTER TABLE ' + ATTACH_STORE$1 +
	      ' ADD COLUMN escaped TINYINT(1) DEFAULT 0';
	    tx.executeSql(sql, [], callback);
	  }
	
	  // issue #3136, in this migration we need a "latest seq" as well
	  // as the "winning seq" in the doc store
	  function runMigration7(tx, callback) {
	    var sql = 'ALTER TABLE ' + DOC_STORE$1 +
	      ' ADD COLUMN max_seq INTEGER';
	    tx.executeSql(sql, [], function (tx) {
	      var sql = 'UPDATE ' + DOC_STORE$1 + ' SET max_seq=(SELECT MAX(seq) FROM ' +
	        BY_SEQ_STORE$1 + ' WHERE doc_id=id)';
	      tx.executeSql(sql, [], function (tx) {
	        // add unique index after filling, else we'll get a constraint
	        // error when we do the ALTER TABLE
	        var sql =
	          'CREATE UNIQUE INDEX IF NOT EXISTS \'doc-max-seq-idx\' ON ' +
	          DOC_STORE$1 + ' (max_seq)';
	        tx.executeSql(sql, [], callback);
	      });
	    });
	  }
	
	  function checkEncoding(tx, cb) {
	    // UTF-8 on chrome/android, UTF-16 on safari < 7.1
	    tx.executeSql('SELECT HEX("a") AS hex', [], function (tx, res) {
	        var hex = res.rows.item(0).hex;
	        encoding = hex.length === 2 ? 'UTF-8' : 'UTF-16';
	        cb();
	      }
	    );
	  }
	
	  function onGetInstanceId() {
	    while (idRequests.length > 0) {
	      var idCallback = idRequests.pop();
	      idCallback(null, instanceId);
	    }
	  }
	
	  function onGetVersion(tx, dbVersion) {
	    if (dbVersion === 0) {
	      // initial schema
	
	      var meta = 'CREATE TABLE IF NOT EXISTS ' + META_STORE$1 +
	        ' (dbid, db_version INTEGER)';
	      var attach = 'CREATE TABLE IF NOT EXISTS ' + ATTACH_STORE$1 +
	        ' (digest UNIQUE, escaped TINYINT(1), body BLOB)';
	      var attachAndRev = 'CREATE TABLE IF NOT EXISTS ' +
	        ATTACH_AND_SEQ_STORE$1 + ' (digest, seq INTEGER)';
	      // TODO: migrate winningseq to INTEGER
	      var doc = 'CREATE TABLE IF NOT EXISTS ' + DOC_STORE$1 +
	        ' (id unique, json, winningseq, max_seq INTEGER UNIQUE)';
	      var seq = 'CREATE TABLE IF NOT EXISTS ' + BY_SEQ_STORE$1 +
	        ' (seq INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' +
	        'json, deleted TINYINT(1), doc_id, rev)';
	      var local = 'CREATE TABLE IF NOT EXISTS ' + LOCAL_STORE$1 +
	        ' (id UNIQUE, rev, json)';
	
	      // creates
	      tx.executeSql(attach);
	      tx.executeSql(local);
	      tx.executeSql(attachAndRev, [], function () {
	        tx.executeSql(ATTACH_AND_SEQ_STORE_SEQ_INDEX_SQL);
	        tx.executeSql(ATTACH_AND_SEQ_STORE_ATTACH_INDEX_SQL);
	      });
	      tx.executeSql(doc, [], function () {
	        tx.executeSql(DOC_STORE_WINNINGSEQ_INDEX_SQL);
	        tx.executeSql(seq, [], function () {
	          tx.executeSql(BY_SEQ_STORE_DELETED_INDEX_SQL);
	          tx.executeSql(BY_SEQ_STORE_DOC_ID_REV_INDEX_SQL);
	          tx.executeSql(meta, [], function () {
	            // mark the db version, and new dbid
	            var initSeq = 'INSERT INTO ' + META_STORE$1 +
	              ' (db_version, dbid) VALUES (?,?)';
	            instanceId = uuid();
	            var initSeqArgs = [ADAPTER_VERSION$1, instanceId];
	            tx.executeSql(initSeq, initSeqArgs, function () {
	              onGetInstanceId();
	            });
	          });
	        });
	      });
	    } else { // version > 0
	
	      var setupDone = function () {
	        var migrated = dbVersion < ADAPTER_VERSION$1;
	        if (migrated) {
	          // update the db version within this transaction
	          tx.executeSql('UPDATE ' + META_STORE$1 + ' SET db_version = ' +
	            ADAPTER_VERSION$1);
	        }
	        // notify db.id() callers
	        var sql = 'SELECT dbid FROM ' + META_STORE$1;
	        tx.executeSql(sql, [], function (tx, result) {
	          instanceId = result.rows.item(0).dbid;
	          onGetInstanceId();
	        });
	      };
	
	      // would love to use promises here, but then websql
	      // ends the transaction early
	      var tasks = [
	        runMigration2,
	        runMigration3,
	        runMigration4,
	        runMigration5,
	        runMigration6,
	        runMigration7,
	        setupDone
	      ];
	
	      // run each migration sequentially
	      var i = dbVersion;
	      var nextMigration = function (tx) {
	        tasks[i - 1](tx, nextMigration);
	        i++;
	      };
	      nextMigration(tx);
	    }
	  }
	
	  function setup() {
	    db.transaction(function (tx) {
	      // first check the encoding
	      checkEncoding(tx, function () {
	        // then get the version
	        fetchVersion(tx);
	      });
	    }, websqlError(callback), dbCreated);
	  }
	
	  function fetchVersion(tx) {
	    var sql = 'SELECT sql FROM sqlite_master WHERE tbl_name = ' + META_STORE$1;
	    tx.executeSql(sql, [], function (tx, result) {
	      if (!result.rows.length) {
	        // database hasn't even been created yet (version 0)
	        onGetVersion(tx, 0);
	      } else if (!/db_version/.test(result.rows.item(0).sql)) {
	        // table was created, but without the new db_version column,
	        // so add it.
	        tx.executeSql('ALTER TABLE ' + META_STORE$1 +
	          ' ADD COLUMN db_version INTEGER', [], function () {
	          // before version 2, this column didn't even exist
	          onGetVersion(tx, 1);
	        });
	      } else { // column exists, we can safely get it
	        tx.executeSql('SELECT db_version FROM ' + META_STORE$1,
	          [], function (tx, result) {
	          var dbVersion = result.rows.item(0).db_version;
	          onGetVersion(tx, dbVersion);
	        });
	      }
	    });
	  }
	
	  setup();
	
	  api.type = function () {
	    return 'websql';
	  };
	
	  api._id = toPromise(function (callback) {
	    callback(null, instanceId);
	  });
	
	  api._info = function (callback) {
	    db.readTransaction(function (tx) {
	      countDocs(tx, function (docCount) {
	        var sql = 'SELECT MAX(seq) AS seq FROM ' + BY_SEQ_STORE$1;
	        tx.executeSql(sql, [], function (tx, res) {
	          var updateSeq = res.rows.item(0).seq || 0;
	          callback(null, {
	            doc_count: docCount,
	            update_seq: updateSeq,
	            websql_encoding: encoding
	          });
	        });
	      });
	    }, websqlError(callback));
	  };
	
	  api._bulkDocs = function (req, reqOpts, callback) {
	    websqlBulkDocs(opts, req, reqOpts, api, db, websqlChanges, callback);
	  };
	
	  api._get = function (id, opts, callback) {
	    var doc;
	    var metadata;
	    var err;
	    var tx = opts.ctx;
	    if (!tx) {
	      return db.readTransaction(function (txn) {
	        api._get(id, jsExtend.extend({ctx: txn}, opts), callback);
	      });
	    }
	
	    function finish() {
	      callback(err, {doc: doc, metadata: metadata, ctx: tx});
	    }
	
	    var sql;
	    var sqlArgs;
	    if (opts.rev) {
	      sql = select(
	        SELECT_DOCS,
	        [DOC_STORE$1, BY_SEQ_STORE$1],
	        DOC_STORE$1 + '.id=' + BY_SEQ_STORE$1 + '.doc_id',
	        [BY_SEQ_STORE$1 + '.doc_id=?', BY_SEQ_STORE$1 + '.rev=?']);
	      sqlArgs = [id, opts.rev];
	    } else {
	      sql = select(
	        SELECT_DOCS,
	        [DOC_STORE$1, BY_SEQ_STORE$1],
	        DOC_STORE_AND_BY_SEQ_JOINER,
	        DOC_STORE$1 + '.id=?');
	      sqlArgs = [id];
	    }
	    tx.executeSql(sql, sqlArgs, function (a, results) {
	      if (!results.rows.length) {
	        err = createError(MISSING_DOC, 'missing');
	        return finish();
	      }
	      var item = results.rows.item(0);
	      metadata = safeJsonParse(item.metadata);
	      if (item.deleted && !opts.rev) {
	        err = createError(MISSING_DOC, 'deleted');
	        return finish();
	      }
	      doc = unstringifyDoc(item.data, metadata.id, item.rev);
	      finish();
	    });
	  };
	
	  function countDocs(tx, callback) {
	
	    if (api._docCount !== -1) {
	      return callback(api._docCount);
	    }
	
	    // count the total rows
	    var sql = select(
	      'COUNT(' + DOC_STORE$1 + '.id) AS \'num\'',
	      [DOC_STORE$1, BY_SEQ_STORE$1],
	      DOC_STORE_AND_BY_SEQ_JOINER,
	      BY_SEQ_STORE$1 + '.deleted=0');
	
	    tx.executeSql(sql, [], function (tx, result) {
	      api._docCount = result.rows.item(0).num;
	      callback(api._docCount);
	    });
	  }
	
	  api._allDocs = function (opts, callback) {
	    var results = [];
	    var totalRows;
	
	    var start = 'startkey' in opts ? opts.startkey : false;
	    var end = 'endkey' in opts ? opts.endkey : false;
	    var key = 'key' in opts ? opts.key : false;
	    var descending = 'descending' in opts ? opts.descending : false;
	    var limit = 'limit' in opts ? opts.limit : -1;
	    var offset = 'skip' in opts ? opts.skip : 0;
	    var inclusiveEnd = opts.inclusive_end !== false;
	
	    var sqlArgs = [];
	    var criteria = [];
	
	    if (key !== false) {
	      criteria.push(DOC_STORE$1 + '.id = ?');
	      sqlArgs.push(key);
	    } else if (start !== false || end !== false) {
	      if (start !== false) {
	        criteria.push(DOC_STORE$1 + '.id ' + (descending ? '<=' : '>=') + ' ?');
	        sqlArgs.push(start);
	      }
	      if (end !== false) {
	        var comparator = descending ? '>' : '<';
	        if (inclusiveEnd) {
	          comparator += '=';
	        }
	        criteria.push(DOC_STORE$1 + '.id ' + comparator + ' ?');
	        sqlArgs.push(end);
	      }
	      if (key !== false) {
	        criteria.push(DOC_STORE$1 + '.id = ?');
	        sqlArgs.push(key);
	      }
	    }
	
	    if (opts.deleted !== 'ok') {
	      // report deleted if keys are specified
	      criteria.push(BY_SEQ_STORE$1 + '.deleted = 0');
	    }
	
	    db.readTransaction(function (tx) {
	
	      // first count up the total rows
	      countDocs(tx, function (count) {
	        totalRows = count;
	
	        if (limit === 0) {
	          return;
	        }
	
	        // then actually fetch the documents
	        var sql = select(
	          SELECT_DOCS,
	          [DOC_STORE$1, BY_SEQ_STORE$1],
	          DOC_STORE_AND_BY_SEQ_JOINER,
	          criteria,
	          DOC_STORE$1 + '.id ' + (descending ? 'DESC' : 'ASC')
	          );
	        sql += ' LIMIT ' + limit + ' OFFSET ' + offset;
	
	        tx.executeSql(sql, sqlArgs, function (tx, result) {
	          for (var i = 0, l = result.rows.length; i < l; i++) {
	            var item = result.rows.item(i);
	            var metadata = safeJsonParse(item.metadata);
	            var id = metadata.id;
	            var data = unstringifyDoc(item.data, id, item.rev);
	            var winningRev = data._rev;
	            var doc = {
	              id: id,
	              key: id,
	              value: {rev: winningRev}
	            };
	            if (opts.include_docs) {
	              doc.doc = data;
	              doc.doc._rev = winningRev;
	              if (opts.conflicts) {
	                doc.doc._conflicts = collectConflicts(metadata);
	              }
	              fetchAttachmentsIfNecessary$1(doc.doc, opts, api, tx);
	            }
	            if (item.deleted) {
	              if (opts.deleted === 'ok') {
	                doc.value.deleted = true;
	                doc.doc = null;
	              } else {
	                continue;
	              }
	            }
	            results.push(doc);
	          }
	        });
	      });
	    }, websqlError(callback), function () {
	      callback(null, {
	        total_rows: totalRows,
	        offset: opts.skip,
	        rows: results
	      });
	    });
	  };
	
	  api._changes = function (opts) {
	    opts = clone(opts);
	
	    if (opts.continuous) {
	      var id = api._name + ':' + uuid();
	      websqlChanges.addListener(api._name, id, api, opts);
	      websqlChanges.notify(api._name);
	      return {
	        cancel: function () {
	          websqlChanges.removeListener(api._name, id);
	        }
	      };
	    }
	
	    var descending = opts.descending;
	
	    // Ignore the `since` parameter when `descending` is true
	    opts.since = opts.since && !descending ? opts.since : 0;
	
	    var limit = 'limit' in opts ? opts.limit : -1;
	    if (limit === 0) {
	      limit = 1; // per CouchDB _changes spec
	    }
	
	    var returnDocs;
	    if ('return_docs' in opts) {
	      returnDocs = opts.return_docs;
	    } else if ('returnDocs' in opts) {
	      // TODO: Remove 'returnDocs' in favor of 'return_docs' in a future release
	      returnDocs = opts.returnDocs;
	    } else {
	      returnDocs = true;
	    }
	    var results = [];
	    var numResults = 0;
	
	    function fetchChanges() {
	
	      var selectStmt =
	        DOC_STORE$1 + '.json AS metadata, ' +
	        DOC_STORE$1 + '.max_seq AS maxSeq, ' +
	        BY_SEQ_STORE$1 + '.json AS winningDoc, ' +
	        BY_SEQ_STORE$1 + '.rev AS winningRev ';
	
	      var from = DOC_STORE$1 + ' JOIN ' + BY_SEQ_STORE$1;
	
	      var joiner = DOC_STORE$1 + '.id=' + BY_SEQ_STORE$1 + '.doc_id' +
	        ' AND ' + DOC_STORE$1 + '.winningseq=' + BY_SEQ_STORE$1 + '.seq';
	
	      var criteria = ['maxSeq > ?'];
	      var sqlArgs = [opts.since];
	
	      if (opts.doc_ids) {
	        criteria.push(DOC_STORE$1 + '.id IN ' + qMarks(opts.doc_ids.length));
	        sqlArgs = sqlArgs.concat(opts.doc_ids);
	      }
	
	      var orderBy = 'maxSeq ' + (descending ? 'DESC' : 'ASC');
	
	      var sql = select(selectStmt, from, joiner, criteria, orderBy);
	
	      var filter = filterChange(opts);
	      if (!opts.view && !opts.filter) {
	        // we can just limit in the query
	        sql += ' LIMIT ' + limit;
	      }
	
	      var lastSeq = opts.since || 0;
	      db.readTransaction(function (tx) {
	        tx.executeSql(sql, sqlArgs, function (tx, result) {
	          function reportChange(change) {
	            return function () {
	              opts.onChange(change);
	            };
	          }
	          for (var i = 0, l = result.rows.length; i < l; i++) {
	            var item = result.rows.item(i);
	            var metadata = safeJsonParse(item.metadata);
	            lastSeq = item.maxSeq;
	
	            var doc = unstringifyDoc(item.winningDoc, metadata.id,
	              item.winningRev);
	            var change = opts.processChange(doc, metadata, opts);
	            change.seq = item.maxSeq;
	
	            var filtered = filter(change);
	            if (typeof filtered === 'object') {
	              return opts.complete(filtered);
	            }
	
	            if (filtered) {
	              numResults++;
	              if (returnDocs) {
	                results.push(change);
	              }
	              // process the attachment immediately
	              // for the benefit of live listeners
	              if (opts.attachments && opts.include_docs) {
	                fetchAttachmentsIfNecessary$1(doc, opts, api, tx,
	                  reportChange(change));
	              } else {
	                reportChange(change)();
	              }
	            }
	            if (numResults === limit) {
	              break;
	            }
	          }
	        });
	      }, websqlError(opts.complete), function () {
	        if (!opts.continuous) {
	          opts.complete(null, {
	            results: results,
	            last_seq: lastSeq
	          });
	        }
	      });
	    }
	
	    fetchChanges();
	  };
	
	  api._close = function (callback) {
	    //WebSQL databases do not need to be closed
	    callback();
	  };
	
	  api._getAttachment = function (docId, attachId, attachment, opts, callback) {
	    var res;
	    var tx = opts.ctx;
	    var digest = attachment.digest;
	    var type = attachment.content_type;
	    var sql = 'SELECT escaped, ' +
	      'CASE WHEN escaped = 1 THEN body ELSE HEX(body) END AS body FROM ' +
	      ATTACH_STORE$1 + ' WHERE digest=?';
	    tx.executeSql(sql, [digest], function (tx, result) {
	      // websql has a bug where \u0000 causes early truncation in strings
	      // and blobs. to work around this, we used to use the hex() function,
	      // but that's not performant. after migration 6, we remove \u0000
	      // and add it back in afterwards
	      var item = result.rows.item(0);
	      var data = item.escaped ? unescapeBlob(item.body) :
	        parseHexString(item.body, encoding);
	      if (opts.binary) {
	        res = binStringToBluffer(data, type);
	      } else {
	        res = btoa$1(data);
	      }
	      callback(null, res);
	    });
	  };
	
	  api._getRevisionTree = function (docId, callback) {
	    db.readTransaction(function (tx) {
	      var sql = 'SELECT json AS metadata FROM ' + DOC_STORE$1 + ' WHERE id = ?';
	      tx.executeSql(sql, [docId], function (tx, result) {
	        if (!result.rows.length) {
	          callback(createError(MISSING_DOC));
	        } else {
	          var data = safeJsonParse(result.rows.item(0).metadata);
	          callback(null, data.rev_tree);
	        }
	      });
	    });
	  };
	
	  api._doCompaction = function (docId, revs, callback) {
	    if (!revs.length) {
	      return callback();
	    }
	    db.transaction(function (tx) {
	
	      // update doc store
	      var sql = 'SELECT json AS metadata FROM ' + DOC_STORE$1 + ' WHERE id = ?';
	      tx.executeSql(sql, [docId], function (tx, result) {
	        var metadata = safeJsonParse(result.rows.item(0).metadata);
	        traverseRevTree(metadata.rev_tree, function (isLeaf, pos,
	                                                           revHash, ctx, opts) {
	          var rev = pos + '-' + revHash;
	          if (revs.indexOf(rev) !== -1) {
	            opts.status = 'missing';
	          }
	        });
	
	        var sql = 'UPDATE ' + DOC_STORE$1 + ' SET json = ? WHERE id = ?';
	        tx.executeSql(sql, [safeJsonStringify(metadata), docId]);
	      });
	
	      compactRevs$1(revs, docId, tx);
	    }, websqlError(callback), function () {
	      callback();
	    });
	  };
	
	  api._getLocal = function (id, callback) {
	    db.readTransaction(function (tx) {
	      var sql = 'SELECT json, rev FROM ' + LOCAL_STORE$1 + ' WHERE id=?';
	      tx.executeSql(sql, [id], function (tx, res) {
	        if (res.rows.length) {
	          var item = res.rows.item(0);
	          var doc = unstringifyDoc(item.json, id, item.rev);
	          callback(null, doc);
	        } else {
	          callback(createError(MISSING_DOC));
	        }
	      });
	    });
	  };
	
	  api._putLocal = function (doc, opts, callback) {
	    if (typeof opts === 'function') {
	      callback = opts;
	      opts = {};
	    }
	    delete doc._revisions; // ignore this, trust the rev
	    var oldRev = doc._rev;
	    var id = doc._id;
	    var newRev;
	    if (!oldRev) {
	      newRev = doc._rev = '0-1';
	    } else {
	      newRev = doc._rev = '0-' + (parseInt(oldRev.split('-')[1], 10) + 1);
	    }
	    var json = stringifyDoc(doc);
	
	    var ret;
	    function putLocal(tx) {
	      var sql;
	      var values;
	      if (oldRev) {
	        sql = 'UPDATE ' + LOCAL_STORE$1 + ' SET rev=?, json=? ' +
	          'WHERE id=? AND rev=?';
	        values = [newRev, json, id, oldRev];
	      } else {
	        sql = 'INSERT INTO ' + LOCAL_STORE$1 + ' (id, rev, json) VALUES (?,?,?)';
	        values = [id, newRev, json];
	      }
	      tx.executeSql(sql, values, function (tx, res) {
	        if (res.rowsAffected) {
	          ret = {ok: true, id: id, rev: newRev};
	          if (opts.ctx) { // return immediately
	            callback(null, ret);
	          }
	        } else {
	          callback(createError(REV_CONFLICT));
	        }
	      }, function () {
	        callback(createError(REV_CONFLICT));
	        return false; // ack that we handled the error
	      });
	    }
	
	    if (opts.ctx) {
	      putLocal(opts.ctx);
	    } else {
	      db.transaction(putLocal, websqlError(callback), function () {
	        if (ret) {
	          callback(null, ret);
	        }
	      });
	    }
	  };
	
	  api._removeLocal = function (doc, opts, callback) {
	    if (typeof opts === 'function') {
	      callback = opts;
	      opts = {};
	    }
	    var ret;
	
	    function removeLocal(tx) {
	      var sql = 'DELETE FROM ' + LOCAL_STORE$1 + ' WHERE id=? AND rev=?';
	      var params = [doc._id, doc._rev];
	      tx.executeSql(sql, params, function (tx, res) {
	        if (!res.rowsAffected) {
	          return callback(createError(MISSING_DOC));
	        }
	        ret = {ok: true, id: doc._id, rev: '0-0'};
	        if (opts.ctx) { // return immediately
	          callback(null, ret);
	        }
	      });
	    }
	
	    if (opts.ctx) {
	      removeLocal(opts.ctx);
	    } else {
	      db.transaction(removeLocal, websqlError(callback), function () {
	        if (ret) {
	          callback(null, ret);
	        }
	      });
	    }
	  };
	
	  api._destroy = function (opts, callback) {
	    websqlChanges.removeAllListeners(api._name);
	    db.transaction(function (tx) {
	      var stores = [DOC_STORE$1, BY_SEQ_STORE$1, ATTACH_STORE$1, META_STORE$1,
	        LOCAL_STORE$1, ATTACH_AND_SEQ_STORE$1];
	      stores.forEach(function (store) {
	        tx.executeSql('DROP TABLE IF EXISTS ' + store, []);
	      });
	    }, websqlError(callback), function () {
	      if (hasLocalStorage()) {
	        delete window.localStorage['_pouch__websqldb_' + api._name];
	        delete window.localStorage[api._name];
	      }
	      callback(null, {'ok': true});
	    });
	  };
	}
	
	function canOpenTestDB() {
	  try {
	    openDatabase('_pouch_validate_websql', 1, '', 1);
	    return true;
	  } catch (err) {
	    return false;
	  }
	}
	
	// WKWebView had a bug where WebSQL would throw a DOM Exception 18
	// (see https://bugs.webkit.org/show_bug.cgi?id=137760 and
	// https://github.com/pouchdb/pouchdb/issues/5079)
	// This has been fixed in latest WebKit, so we try to detect it here.
	function isValidWebSQL() {
	  // WKWebView UA:
	  //   Mozilla/5.0 (iPhone; CPU iPhone OS 9_2 like Mac OS X)
	  //   AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13C75
	  // Chrome for iOS UA:
	  //   Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en)
	  //   AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60
	  //   Mobile/9B206 Safari/7534.48.3
	  // Firefox for iOS UA:
	  //   Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4
	  //   (KHTML, like Gecko) FxiOS/1.0 Mobile/12F69 Safari/600.1.4
	
	  // indexedDB is null on some UIWebViews and undefined in others
	  // see: https://bugs.webkit.org/show_bug.cgi?id=137034
	  if (typeof indexedDB === 'undefined' || indexedDB === null ||
	      !/iP(hone|od|ad)/.test(navigator.userAgent)) {
	    // definitely not WKWebView, avoid creating an unnecessary database
	    return true;
	  }
	  // Cache the result in LocalStorage. Reason we do this is because if we
	  // call openDatabase() too many times, Safari craps out in SauceLabs and
	  // starts throwing DOM Exception 14s.
	  var hasLS = hasLocalStorage();
	  // Include user agent in the hash, so that if Safari is upgraded, we don't
	  // continually think it's broken.
	  var localStorageKey = '_pouch__websqldb_valid_' + navigator.userAgent;
	  if (hasLS && localStorage[localStorageKey]) {
	    return localStorage[localStorageKey] === '1';
	  }
	  var openedTestDB = canOpenTestDB();
	  if (hasLS) {
	    localStorage[localStorageKey] = openedTestDB ? '1' : '0';
	  }
	  return openedTestDB;
	}
	
	function valid() {
	  if (typeof openDatabase !== 'function') {
	    return false;
	  }
	  return isValidWebSQL();
	}
	
	function openDB(name, version, description, size) {
	  // Traditional WebSQL API
	  return openDatabase(name, version, description, size);
	}
	
	function WebSQLPouch(opts, callback) {
	  var _opts = jsExtend.extend({
	    websql: openDB
	  }, opts);
	
	  WebSqlPouch$1.call(this, _opts, callback);
	}
	
	WebSQLPouch.valid = valid;
	
	WebSQLPouch.use_prefix = true;
	
	function WebSqlPouch (PouchDB) {
	  PouchDB.adapter('websql', WebSQLPouch, true);
	}
	
	/* global fetch */
	/* global Headers */
	function wrappedFetch() {
	  var wrappedPromise = {};
	
	  var promise = new PouchPromise(function (resolve, reject) {
	    wrappedPromise.resolve = resolve;
	    wrappedPromise.reject = reject;
	  });
	
	  var args = new Array(arguments.length);
	
	  for (var i = 0; i < args.length; i++) {
	    args[i] = arguments[i];
	  }
	
	  wrappedPromise.promise = promise;
	
	  PouchPromise.resolve().then(function () {
	    return fetch.apply(null, args);
	  }).then(function (response) {
	    wrappedPromise.resolve(response);
	  }).catch(function (error) {
	    wrappedPromise.reject(error);
	  });
	
	  return wrappedPromise;
	}
	
	function fetchRequest(options, callback) {
	  var wrappedPromise, timer, response;
	
	  var headers = new Headers();
	
	  var fetchOptions = {
	    method: options.method,
	    credentials: 'include',
	    headers: headers
	  };
	
	  if (options.json) {
	    headers.set('Accept', 'application/json');
	    headers.set('Content-Type', options.headers['Content-Type'] ||
	      'application/json');
	  }
	
	  if (options.body && (options.body instanceof Blob)) {
	    readAsArrayBuffer(options.body, function (arrayBuffer) {
	      fetchOptions.body = arrayBuffer;
	    });
	  } else if (options.body &&
	             options.processData &&
	             typeof options.body !== 'string') {
	    fetchOptions.body = JSON.stringify(options.body);
	  } else if ('body' in options) {
	    fetchOptions.body = options.body;
	  } else {
	    fetchOptions.body = null;
	  }
	
	  Object.keys(options.headers).forEach(function (key) {
	    if (options.headers.hasOwnProperty(key)) {
	      headers.set(key, options.headers[key]);
	    }
	  });
	
	  wrappedPromise = wrappedFetch(options.url, fetchOptions);
	
	  if (options.timeout > 0) {
	    timer = setTimeout(function () {
	      wrappedPromise.reject(new Error('Load timeout for resource: ' +
	        options.url));
	    }, options.timeout);
	  }
	
	  wrappedPromise.promise.then(function (fetchResponse) {
	    response = {
	      statusCode: fetchResponse.status
	    };
	
	    if (options.timeout > 0) {
	      clearTimeout(timer);
	    }
	
	    if (response.statusCode >= 200 && response.statusCode < 300) {
	      return options.binary ? fetchResponse.blob() : fetchResponse.text();
	    }
	
	    return fetchResponse.json();
	  }).then(function (result) {
	    if (response.statusCode >= 200 && response.statusCode < 300) {
	      callback(null, response, result);
	    } else {
	      callback(result, response);
	    }
	  }).catch(function (error) {
	    callback(error, response);
	  });
	
	  return {abort: wrappedPromise.reject};
	}
	
	function xhRequest(options, callback) {
	
	  var xhr, timer;
	  var timedout = false;
	
	  var abortReq = function () {
	    xhr.abort();
	    cleanUp();
	  };
	
	  var timeoutReq = function () {
	    timedout = true;
	    xhr.abort();
	    cleanUp();
	  };
	
	  var ret = {abort: abortReq};
	
	  var cleanUp = function () {
	    clearTimeout(timer);
	    ret.abort = function () {};
	    if (xhr) {
	      xhr.onprogress = undefined;
	      if (xhr.upload) {
	        xhr.upload.onprogress = undefined;
	      }
	      xhr.onreadystatechange = undefined;
	      xhr = undefined;
	    }
	  };
	
	  if (options.xhr) {
	    xhr = new options.xhr();
	  } else {
	    xhr = new XMLHttpRequest();
	  }
	
	  try {
	    xhr.open(options.method, options.url);
	  } catch (exception) {
	    return callback(new Error(exception.name || 'Url is invalid'));
	  }
	
	  xhr.withCredentials = ('withCredentials' in options) ?
	    options.withCredentials : true;
	
	  if (options.method === 'GET') {
	    delete options.headers['Content-Type'];
	  } else if (options.json) {
	    options.headers.Accept = 'application/json';
	    options.headers['Content-Type'] = options.headers['Content-Type'] ||
	      'application/json';
	    if (options.body &&
	        options.processData &&
	        typeof options.body !== "string") {
	      options.body = JSON.stringify(options.body);
	    }
	  }
	
	  if (options.binary) {
	    xhr.responseType = 'arraybuffer';
	  }
	
	  if (!('body' in options)) {
	    options.body = null;
	  }
	
	  for (var key in options.headers) {
	    if (options.headers.hasOwnProperty(key)) {
	      xhr.setRequestHeader(key, options.headers[key]);
	    }
	  }
	
	  if (options.timeout > 0) {
	    timer = setTimeout(timeoutReq, options.timeout);
	    xhr.onprogress = function () {
	      clearTimeout(timer);
	      if(xhr.readyState !== 4) {
	        timer = setTimeout(timeoutReq, options.timeout);
	      }
	    };
	    if (typeof xhr.upload !== 'undefined') { // does not exist in ie9
	      xhr.upload.onprogress = xhr.onprogress;
	    }
	  }
	
	  xhr.onreadystatechange = function () {
	    if (xhr.readyState !== 4) {
	      return;
	    }
	
	    var response = {
	      statusCode: xhr.status
	    };
	
	    if (xhr.status >= 200 && xhr.status < 300) {
	      var data;
	      if (options.binary) {
	        data = createBlob([xhr.response || ''], {
	          type: xhr.getResponseHeader('Content-Type')
	        });
	      } else {
	        data = xhr.responseText;
	      }
	      callback(null, response, data);
	    } else {
	      var err = {};
	      if (timedout) {
	        err = new Error('ETIMEDOUT');
	        err.code = 'ETIMEDOUT';
	      } else if (typeof xhr.response === 'string') {
	        try {
	          err = JSON.parse(xhr.response);
	        } catch(e) {}
	      }
	      err.status = xhr.status;
	      callback(err);
	    }
	    cleanUp();
	  };
	
	  if (options.body && (options.body instanceof Blob)) {
	    readAsArrayBuffer(options.body, function (arrayBuffer) {
	      xhr.send(arrayBuffer);
	    });
	  } else {
	    xhr.send(options.body);
	  }
	
	  return ret;
	}
	
	function testXhr() {
	  try {
	    new XMLHttpRequest();
	    return true;
	  } catch (err) {
	    return false;
	  }
	}
	
	var hasXhr = testXhr();
	
	function ajax$1(options, callback) {
	  if (hasXhr || options.xhr) {
	    return xhRequest(options, callback);
	  } else {
	    return fetchRequest(options, callback);
	  }
	}
	
	// the blob already has a type; do nothing
	var res$2 = function () {};
	
	function defaultBody() {
	  return '';
	}
	
	function ajaxCore(options, callback) {
	
	  options = clone(options);
	
	  var defaultOptions = {
	    method : "GET",
	    headers: {},
	    json: true,
	    processData: true,
	    timeout: 10000,
	    cache: false
	  };
	
	  options = jsExtend.extend(defaultOptions, options);
	
	  function onSuccess(obj, resp, cb) {
	    if (!options.binary && options.json && typeof obj === 'string') {
	      /* istanbul ignore next */
	      try {
	        obj = JSON.parse(obj);
	      } catch (e) {
	        // Probably a malformed JSON from server
	        return cb(e);
	      }
	    }
	    if (Array.isArray(obj)) {
	      obj = obj.map(function (v) {
	        if (v.error || v.missing) {
	          return generateErrorFromResponse(v);
	        } else {
	          return v;
	        }
	      });
	    }
	    if (options.binary) {
	      res$2(obj, resp);
	    }
	    cb(null, obj, resp);
	  }
	
	  if (options.json) {
	    if (!options.binary) {
	      options.headers.Accept = 'application/json';
	    }
	    options.headers['Content-Type'] = options.headers['Content-Type'] ||
	      'application/json';
	  }
	
	  if (options.binary) {
	    options.encoding = null;
	    options.json = false;
	  }
	
	  if (!options.processData) {
	    options.json = false;
	  }
	
	  return ajax$1(options, function (err, response, body) {
	
	    if (err) {
	      return callback(generateErrorFromResponse(err));
	    }
	
	    var error;
	    var content_type = response.headers && response.headers['content-type'];
	    var data = body || defaultBody();
	
	    // CouchDB doesn't always return the right content-type for JSON data, so
	    // we check for ^{ and }$ (ignoring leading/trailing whitespace)
	    if (!options.binary && (options.json || !options.processData) &&
	        typeof data !== 'object' &&
	        (/json/.test(content_type) ||
	         (/^[\s]*\{/.test(data) && /\}[\s]*$/.test(data)))) {
	      try {
	        data = JSON.parse(data.toString());
	      } catch (e) {}
	    }
	
	    if (response.statusCode >= 200 && response.statusCode < 300) {
	      onSuccess(data, response, callback);
	    } else {
	      error = generateErrorFromResponse(data);
	      error.status = response.statusCode;
	      callback(error);
	    }
	  });
	}
	
	function ajax(opts, callback) {
	
	  // cache-buster, specifically designed to work around IE's aggressive caching
	  // see http://www.dashbay.com/2011/05/internet-explorer-caches-ajax/
	  // Also Safari caches POSTs, so we need to cache-bust those too.
	  var ua = (navigator && navigator.userAgent) ?
	    navigator.userAgent.toLowerCase() : '';
	
	  var isSafari = ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1;
	  var isIE = ua.indexOf('msie') !== -1;
	  var isEdge = ua.indexOf('edge') !== -1;
	
	  // it appears the new version of safari also caches GETs,
	  // see https://github.com/pouchdb/pouchdb/issues/5010
	  var shouldCacheBust = (isSafari ||
	    ((isIE || isEdge) && opts.method === 'GET'));
	
	  var cache = 'cache' in opts ? opts.cache : true;
	
	  var isBlobUrl = /^blob:/.test(opts.url); // don't append nonces for blob URLs
	
	  if (!isBlobUrl && (shouldCacheBust || !cache)) {
	    var hasArgs = opts.url.indexOf('?') !== -1;
	    opts.url += (hasArgs ? '&' : '?') + '_nonce=' + Date.now();
	  }
	
	  return ajaxCore(opts, callback);
	}
	
	var CHANGES_BATCH_SIZE = 25;
	var MAX_SIMULTANEOUS_REVS = 50;
	
	var supportsBulkGetMap = {};
	
	var log$1 = debug('pouchdb:http');
	
	function readAttachmentsAsBlobOrBuffer(row) {
	  var atts = row.doc && row.doc._attachments;
	  if (!atts) {
	    return;
	  }
	  Object.keys(atts).forEach(function (filename) {
	    var att = atts[filename];
	    att.data = b64ToBluffer(att.data, att.content_type);
	  });
	}
	
	function encodeDocId(id) {
	  if (/^_design/.test(id)) {
	    return '_design/' + encodeURIComponent(id.slice(8));
	  }
	  if (/^_local/.test(id)) {
	    return '_local/' + encodeURIComponent(id.slice(7));
	  }
	  return encodeURIComponent(id);
	}
	
	function preprocessAttachments$1(doc) {
	  if (!doc._attachments || !Object.keys(doc._attachments)) {
	    return PouchPromise.resolve();
	  }
	
	  return PouchPromise.all(Object.keys(doc._attachments).map(function (key) {
	    var attachment = doc._attachments[key];
	    if (attachment.data && typeof attachment.data !== 'string') {
	      return new PouchPromise(function (resolve) {
	        blobToBase64(attachment.data, resolve);
	      }).then(function (b64) {
	        attachment.data = b64;
	      });
	    }
	  }));
	}
	
	function hasUrlPrefix(opts) {
	  if (!opts.prefix) {
	    return false;
	  }
	
	  var protocol = parseUri(opts.prefix).protocol;
	
	  return protocol === 'http' || protocol === 'https';
	}
	
	// Get all the information you possibly can about the URI given by name and
	// return it as a suitable object.
	function getHost(name, opts) {
	
	  // encode db name if opts.prefix is a url (#5574)
	  if (hasUrlPrefix(opts)) {
	    var dbName = opts.name.substr(opts.prefix.length);
	    name = opts.prefix + encodeURIComponent(dbName);
	  }
	
	  // Prase the URI into all its little bits
	  var uri = parseUri(name);
	
	  // Store the user and password as a separate auth object
	  if (uri.user || uri.password) {
	    uri.auth = {username: uri.user, password: uri.password};
	  }
	
	  // Split the path part of the URI into parts using '/' as the delimiter
	  // after removing any leading '/' and any trailing '/'
	  var parts = uri.path.replace(/(^\/|\/$)/g, '').split('/');
	
	  // Store the first part as the database name and remove it from the parts
	  // array
	  uri.db = parts.pop();
	  // Prevent double encoding of URI component
	  if (uri.db.indexOf('%') === -1) {
	    uri.db = encodeURIComponent(uri.db);
	  }
	
	  // Restore the path by joining all the remaining parts (all the parts
	  // except for the database name) with '/'s
	  uri.path = parts.join('/');
	
	  return uri;
	}
	
	// Generate a URL with the host data given by opts and the given path
	function genDBUrl(opts, path) {
	  return genUrl(opts, opts.db + '/' + path);
	}
	
	// Generate a URL with the host data given by opts and the given path
	function genUrl(opts, path) {
	  // If the host already has a path, then we need to have a path delimiter
	  // Otherwise, the path delimiter is the empty string
	  var pathDel = !opts.path ? '' : '/';
	
	  // If the host already has a path, then we need to have a path delimiter
	  // Otherwise, the path delimiter is the empty string
	  return opts.protocol + '://' + opts.host +
	         (opts.port ? (':' + opts.port) : '') +
	         '/' + opts.path + pathDel + path;
	}
	
	function paramsToStr(params) {
	  return '?' + Object.keys(params).map(function (k) {
	    return k + '=' + encodeURIComponent(params[k]);
	  }).join('&');
	}
	
	// Implements the PouchDB API for dealing with CouchDB instances over HTTP
	function HttpPouch(opts, callback) {
	
	  // The functions that will be publicly available for HttpPouch
	  var api = this;
	
	  var host = getHost(opts.name, opts);
	  var dbUrl = genDBUrl(host, '');
	
	  opts = clone(opts);
	  var ajaxOpts = opts.ajax || {};
	
	  if (opts.auth || host.auth) {
	    var nAuth = opts.auth || host.auth;
	    var str = nAuth.username + ':' + nAuth.password;
	    var token = btoa$1(unescape(encodeURIComponent(str)));
	    ajaxOpts.headers = ajaxOpts.headers || {};
	    ajaxOpts.headers.Authorization = 'Basic ' + token;
	  }
	
	  // Not strictly necessary, but we do this because numerous tests
	  // rely on swapping ajax in and out.
	  api._ajax = ajax;
	
	  function ajax$$(userOpts, options, callback) {
	    var reqAjax = userOpts.ajax || {};
	    var reqOpts = jsExtend.extend(clone(ajaxOpts), reqAjax, options);
	    log$1(reqOpts.method + ' ' + reqOpts.url);
	    return api._ajax(reqOpts, callback);
	  }
	
	  function ajaxPromise(userOpts, opts) {
	    return new PouchPromise(function (resolve, reject) {
	      ajax$$(userOpts, opts, function (err, res) {
	        /* istanbul ignore if */
	        if (err) {
	          return reject(err);
	        }
	        resolve(res);
	      });
	    });
	  }
	
	  function adapterFun$$(name, fun) {
	    return adapterFun(name, getArguments(function (args) {
	      setup().then(function () {
	        return fun.apply(this, args);
	      }).catch(function (e) {
	        var callback = args.pop();
	        callback(e);
	      });
	    }));
	  }
	
	  var setupPromise;
	
	  function setup() {
	    // TODO: Remove `skipSetup` in favor of `skip_setup` in a future release
	    if (opts.skipSetup || opts.skip_setup) {
	      return PouchPromise.resolve();
	    }
	
	    // If there is a setup in process or previous successful setup
	    // done then we will use that
	    // If previous setups have been rejected we will try again
	    if (setupPromise) {
	      return setupPromise;
	    }
	
	    var checkExists = {method: 'GET', url: dbUrl};
	    setupPromise = ajaxPromise({}, checkExists).catch(function (err) {
	      if (err && err.status && err.status === 404) {
	        // Doesnt exist, create it
	        explainError(404, 'PouchDB is just detecting if the remote exists.');
	        return ajaxPromise({}, {method: 'PUT', url: dbUrl});
	      } else {
	        return PouchPromise.reject(err);
	      }
	    }).catch(function (err) {
	      // If we try to create a database that already exists, skipped in
	      // istanbul since its catching a race condition.
	      /* istanbul ignore if */
	      if (err && err.status && err.status === 412) {
	        return true;
	      }
	      return PouchPromise.reject(err);
	    });
	
	    setupPromise.catch(function () {
	      setupPromise = null;
	    });
	
	    return setupPromise;
	  }
	
	  setTimeout(function () {
	    callback(null, api);
	  });
	
	  api.type = function () {
	    return 'http';
	  };
	
	  api.id = adapterFun$$('id', function (callback) {
	    ajax$$({}, {method: 'GET', url: genUrl(host, '')}, function (err, result) {
	      var uuid = (result && result.uuid) ?
	        (result.uuid + host.db) : genDBUrl(host, '');
	      callback(null, uuid);
	    });
	  });
	
	  api.request = adapterFun$$('request', function (options, callback) {
	    options.url = genDBUrl(host, options.url);
	    ajax$$({}, options, callback);
	  });
	
	  // Sends a POST request to the host calling the couchdb _compact function
	  //    version: The version of CouchDB it is running
	  api.compact = adapterFun$$('compact', function (opts, callback) {
	    if (typeof opts === 'function') {
	      callback = opts;
	      opts = {};
	    }
	    opts = clone(opts);
	    ajax$$(opts, {
	      url: genDBUrl(host, '_compact'),
	      method: 'POST'
	    }, function () {
	      function ping() {
	        api.info(function (err, res) {
	          if (res && !res.compact_running) {
	            callback(null, {ok: true});
	          } else {
	            setTimeout(ping, opts.interval || 200);
	          }
	        });
	      }
	      // Ping the http if it's finished compaction
	      ping();
	    });
	  });
	
	  api.bulkGet = adapterFun('bulkGet', function (opts, callback) {
	    var self = this;
	
	    function doBulkGet(cb) {
	      var params = {};
	      if (opts.revs) {
	        params.revs = true;
	      }
	      if (opts.attachments) {
	        /* istanbul ignore next */
	        params.attachments = true;
	      }
	      ajax$$({}, {
	        url: genDBUrl(host, '_bulk_get' + paramsToStr(params)),
	        method: 'POST',
	        body: { docs: opts.docs}
	      }, cb);
	    }
	
	    function doBulkGetShim() {
	      // avoid "url too long error" by splitting up into multiple requests
	      var batchSize = MAX_SIMULTANEOUS_REVS;
	      var numBatches = Math.ceil(opts.docs.length / batchSize);
	      var numDone = 0;
	      var results = new Array(numBatches);
	
	      function onResult(batchNum) {
	        return function (err, res) {
	          // err is impossible because shim returns a list of errs in that case
	          results[batchNum] = res.results;
	          if (++numDone === numBatches) {
	            callback(null, {results: flatten(results)});
	          }
	        };
	      }
	
	      for (var i = 0; i < numBatches; i++) {
	        var subOpts = pick(opts, ['revs', 'attachments']);
	        subOpts.ajax = ajaxOpts;
	        subOpts.docs = opts.docs.slice(i * batchSize,
	          Math.min(opts.docs.length, (i + 1) * batchSize));
	        bulkGet(self, subOpts, onResult(i));
	      }
	    }
	
	    // mark the whole database as either supporting or not supporting _bulk_get
	    var dbUrl = genUrl(host, '');
	    var supportsBulkGet = supportsBulkGetMap[dbUrl];
	
	    if (typeof supportsBulkGet !== 'boolean') {
	      // check if this database supports _bulk_get
	      doBulkGet(function (err, res) {
	        /* istanbul ignore else */
	        if (err) {
	          var status = Math.floor(err.status / 100);
	          /* istanbul ignore else */
	          if (status === 4 || status === 5) { // 40x or 50x
	            supportsBulkGetMap[dbUrl] = false;
	            explainError(
	              err.status,
	              'PouchDB is just detecting if the remote ' +
	              'supports the _bulk_get API.'
	            );
	            doBulkGetShim();
	          } else {
	            callback(err);
	          }
	        } else {
	          supportsBulkGetMap[dbUrl] = true;
	          callback(null, res);
	        }
	      });
	    } else if (supportsBulkGet) {
	      /* istanbul ignore next */
	      doBulkGet(callback);
	    } else {
	      doBulkGetShim();
	    }
	  });
	
	  // Calls GET on the host, which gets back a JSON string containing
	  //    couchdb: A welcome string
	  //    version: The version of CouchDB it is running
	  api._info = function (callback) {
	    setup().then(function () {
	      ajax$$({}, {
	        method: 'GET',
	        url: genDBUrl(host, '')
	      }, function (err, res) {
	        /* istanbul ignore next */
	        if (err) {
	        return callback(err);
	        }
	        res.host = genDBUrl(host, '');
	        callback(null, res);
	      });
	    }).catch(callback);
	  };
	
	  // Get the document with the given id from the database given by host.
	  // The id could be solely the _id in the database, or it may be a
	  // _design/ID or _local/ID path
	  api.get = adapterFun$$('get', function (id, opts, callback) {
	    // If no options were given, set the callback to the second parameter
	    if (typeof opts === 'function') {
	      callback = opts;
	      opts = {};
	    }
	    opts = clone(opts);
	
	    // List of parameters to add to the GET request
	    var params = {};
	
	    if (opts.revs) {
	      params.revs = true;
	    }
	
	    if (opts.revs_info) {
	      params.revs_info = true;
	    }
	
	    if (opts.open_revs) {
	      if (opts.open_revs !== "all") {
	        opts.open_revs = JSON.stringify(opts.open_revs);
	      }
	      params.open_revs = opts.open_revs;
	    }
	
	    if (opts.rev) {
	      params.rev = opts.rev;
	    }
	
	    if (opts.conflicts) {
	      params.conflicts = opts.conflicts;
	    }
	
	    id = encodeDocId(id);
	
	    // Set the options for the ajax call
	    var options = {
	      method: 'GET',
	      url: genDBUrl(host, id + paramsToStr(params))
	    };
	
	    function fetchAttachments(doc) {
	      var atts = doc._attachments;
	      var filenames = atts && Object.keys(atts);
	      if (!atts || !filenames.length) {
	        return;
	      }
	      // we fetch these manually in separate XHRs, because
	      // Sync Gateway would normally send it back as multipart/mixed,
	      // which we cannot parse. Also, this is more efficient than
	      // receiving attachments as base64-encoded strings.
	      function fetch() {
	
	        if (!filenames.length) {
	          return null;
	        }
	
	        var filename = filenames.pop();
	        var att = atts[filename];
	        var path = encodeDocId(doc._id) + '/' + encodeAttachmentId(filename) +
	          '?rev=' + doc._rev;
	        return ajaxPromise(opts, {
	          method: 'GET',
	          url: genDBUrl(host, path),
	          binary: true
	        }).then(function (blob) {
	          if (opts.binary) {
	            return blob;
	          }
	          return new PouchPromise(function (resolve) {
	            blobToBase64(blob, resolve);
	          });
	        }).then(function (data) {
	          delete att.stub;
	          delete att.length;
	          att.data = data;
	        });
	      }
	
	      // This limits the number of parallel xhr requests to 5 any time
	      // to avoid issues with maximum browser request limits
	      return new PromisePool(fetch, 5, {promise: PouchPromise}).start();
	    }
	
	    function fetchAllAttachments(docOrDocs) {
	      if (Array.isArray(docOrDocs)) {
	        return PouchPromise.all(docOrDocs.map(function (doc) {
	          if (doc.ok) {
	            return fetchAttachments(doc.ok);
	          }
	        }));
	      }
	      return fetchAttachments(docOrDocs);
	    }
	
	    ajaxPromise(opts, options).then(function (res) {
	      return PouchPromise.resolve().then(function () {
	        if (opts.attachments) {
	          return fetchAllAttachments(res);
	        }
	      }).then(function () {
	        callback(null, res);
	      });
	    }).catch(callback);
	  });
	
	  // Delete the document given by doc from the database given by host.
	  api.remove = adapterFun$$('remove',
	      function (docOrId, optsOrRev, opts, callback) {
	    var doc;
	    if (typeof optsOrRev === 'string') {
	      // id, rev, opts, callback style
	      doc = {
	        _id: docOrId,
	        _rev: optsOrRev
	      };
	      if (typeof opts === 'function') {
	        callback = opts;
	        opts = {};
	      }
	    } else {
	      // doc, opts, callback style
	      doc = docOrId;
	      if (typeof optsOrRev === 'function') {
	        callback = optsOrRev;
	        opts = {};
	      } else {
	        callback = opts;
	        opts = optsOrRev;
	      }
	    }
	
	    var rev = (doc._rev || opts.rev);
	
	    // Delete the document
	    ajax$$(opts, {
	      method: 'DELETE',
	      url: genDBUrl(host, encodeDocId(doc._id)) + '?rev=' + rev
	    }, callback);
	  });
	
	  function encodeAttachmentId(attachmentId) {
	    return attachmentId.split("/").map(encodeURIComponent).join("/");
	  }
	
	  // Get the attachment
	  api.getAttachment =
	    adapterFun$$('getAttachment', function (docId, attachmentId, opts,
	                                                callback) {
	    if (typeof opts === 'function') {
	      callback = opts;
	      opts = {};
	    }
	    var params = opts.rev ? ('?rev=' + opts.rev) : '';
	    var url = genDBUrl(host, encodeDocId(docId)) + '/' +
	      encodeAttachmentId(attachmentId) + params;
	    ajax$$(opts, {
	      method: 'GET',
	      url: url,
	      binary: true
	    }, callback);
	  });
	
	  // Remove the attachment given by the id and rev
	  api.removeAttachment =
	    adapterFun$$('removeAttachment', function (docId, attachmentId, rev,
	                                                   callback) {
	
	    var url = genDBUrl(host, encodeDocId(docId) + '/' +
	      encodeAttachmentId(attachmentId)) + '?rev=' + rev;
	
	    ajax$$({}, {
	      method: 'DELETE',
	      url: url
	    }, callback);
	  });
	
	  // Add the attachment given by blob and its contentType property
	  // to the document with the given id, the revision given by rev, and
	  // add it to the database given by host.
	  api.putAttachment =
	    adapterFun$$('putAttachment', function (docId, attachmentId, rev, blob,
	                                                type, callback) {
	    if (typeof type === 'function') {
	      callback = type;
	      type = blob;
	      blob = rev;
	      rev = null;
	    }
	    var id = encodeDocId(docId) + '/' + encodeAttachmentId(attachmentId);
	    var url = genDBUrl(host, id);
	    if (rev) {
	      url += '?rev=' + rev;
	    }
	
	    if (typeof blob === 'string') {
	      // input is assumed to be a base64 string
	      var binary;
	      try {
	        binary = atob$1(blob);
	      } catch (err) {
	        return callback(createError(BAD_ARG,
	                        'Attachment is not a valid base64 string'));
	      }
	      blob = binary ? binStringToBluffer(binary, type) : '';
	    }
	
	    var opts = {
	      headers: {'Content-Type': type},
	      method: 'PUT',
	      url: url,
	      processData: false,
	      body: blob,
	      timeout: ajaxOpts.timeout || 60000
	    };
	    // Add the attachment
	    ajax$$({}, opts, callback);
	  });
	
	  // Update/create multiple documents given by req in the database
	  // given by host.
	  api._bulkDocs = function (req, opts, callback) {
	    // If new_edits=false then it prevents the database from creating
	    // new revision numbers for the documents. Instead it just uses
	    // the old ones. This is used in database replication.
	    req.new_edits = opts.new_edits;
	
	    setup().then(function () {
	      return PouchPromise.all(req.docs.map(preprocessAttachments$1));
	    }).then(function () {
	      // Update/create the documents
	      ajax$$(opts, {
	        method: 'POST',
	        url: genDBUrl(host, '_bulk_docs'),
	        timeout: opts.timeout,
	        body: req
	      }, function (err, results) {
	        if (err) {
	          return callback(err);
	        }
	        results.forEach(function (result) {
	          result.ok = true; // smooths out cloudant not adding this
	        });
	        callback(null, results);
	      });
	    }).catch(callback);
	  };
	
	
	  // Update/create document
	  api._put = function (doc, opts, callback) {
	    setup().then(function () {
	      return preprocessAttachments$1(doc);
	    }).then(function () {
	      // Update/create the document
	      ajax$$(opts, {
	        method: 'PUT',
	        url: genDBUrl(host, encodeDocId(doc._id)),
	        body: doc
	      }, function (err, result) {
	        if (err) {
	          return callback(err);
	        }
	        callback(null, result);
	      });
	    }).catch(callback);
	  };
	
	
	  // Get a listing of the documents in the database given
	  // by host and ordered by increasing id.
	  api.allDocs = adapterFun$$('allDocs', function (opts, callback) {
	    if (typeof opts === 'function') {
	      callback = opts;
	      opts = {};
	    }
	    opts = clone(opts);
	
	    // List of parameters to add to the GET request
	    var params = {};
	    var body;
	    var method = 'GET';
	
	    if (opts.conflicts) {
	      params.conflicts = true;
	    }
	
	    if (opts.descending) {
	      params.descending = true;
	    }
	
	    if (opts.include_docs) {
	      params.include_docs = true;
	    }
	
	    // added in CouchDB 1.6.0
	    if (opts.attachments) {
	      params.attachments = true;
	    }
	
	    if (opts.key) {
	      params.key = JSON.stringify(opts.key);
	    }
	
	    if (opts.start_key) {
	      opts.startkey = opts.start_key;
	    }
	
	    if (opts.startkey) {
	      params.startkey = JSON.stringify(opts.startkey);
	    }
	
	    if (opts.end_key) {
	      opts.endkey = opts.end_key;
	    }
	
	    if (opts.endkey) {
	      params.endkey = JSON.stringify(opts.endkey);
	    }
	
	    if (typeof opts.inclusive_end !== 'undefined') {
	      params.inclusive_end = !!opts.inclusive_end;
	    }
	
	    if (typeof opts.limit !== 'undefined') {
	      params.limit = opts.limit;
	    }
	
	    if (typeof opts.skip !== 'undefined') {
	      params.skip = opts.skip;
	    }
	
	    var paramStr = paramsToStr(params);
	
	    if (typeof opts.keys !== 'undefined') {
	      method = 'POST';
	      body = {keys: opts.keys};
	    }
	
	    // Get the document listing
	    ajaxPromise(opts, {
	      method: method,
	      url: genDBUrl(host, '_all_docs' + paramStr),
	      body: body
	    }).then(function (res) {
	      if (opts.include_docs && opts.attachments && opts.binary) {
	        res.rows.forEach(readAttachmentsAsBlobOrBuffer);
	      }
	      callback(null, res);
	    }).catch(callback);
	  });
	
	  // Get a list of changes made to documents in the database given by host.
	  // TODO According to the README, there should be two other methods here,
	  // api.changes.addListener and api.changes.removeListener.
	  api._changes = function (opts) {
	
	    // We internally page the results of a changes request, this means
	    // if there is a large set of changes to be returned we can start
	    // processing them quicker instead of waiting on the entire
	    // set of changes to return and attempting to process them at once
	    var batchSize = 'batch_size' in opts ? opts.batch_size : CHANGES_BATCH_SIZE;
	
	    opts = clone(opts);
	    opts.timeout = ('timeout' in opts) ? opts.timeout :
	      ('timeout' in ajaxOpts) ? ajaxOpts.timeout :
	      30 * 1000;
	
	    // We give a 5 second buffer for CouchDB changes to respond with
	    // an ok timeout (if a timeout it set)
	    var params = opts.timeout ? {timeout: opts.timeout - (5 * 1000)} : {};
	    var limit = (typeof opts.limit !== 'undefined') ? opts.limit : false;
	    var returnDocs;
	    if ('return_docs' in opts) {
	      returnDocs = opts.return_docs;
	    } else if ('returnDocs' in opts) {
	      // TODO: Remove 'returnDocs' in favor of 'return_docs' in a future release
	      returnDocs = opts.returnDocs;
	    } else {
	      returnDocs = true;
	    }
	    //
	    var leftToFetch = limit;
	
	    if (opts.style) {
	      params.style = opts.style;
	    }
	
	    if (opts.include_docs || opts.filter && typeof opts.filter === 'function') {
	      params.include_docs = true;
	    }
	
	    if (opts.attachments) {
	      params.attachments = true;
	    }
	
	    if (opts.continuous) {
	      params.feed = 'longpoll';
	    }
	
	    if (opts.conflicts) {
	      params.conflicts = true;
	    }
	
	    if (opts.descending) {
	      params.descending = true;
	    }
	
	    if ('heartbeat' in opts) {
	      // If the heartbeat value is false, it disables the default heartbeat
	      if (opts.heartbeat) {
	        params.heartbeat = opts.heartbeat;
	      }
	    } else {
	      // Default heartbeat to 10 seconds
	      params.heartbeat = 10000;
	    }
	
	    if (opts.filter && typeof opts.filter === 'string') {
	      params.filter = opts.filter;
	    }
	
	    if (opts.view && typeof opts.view === 'string') {
	      params.filter = '_view';
	      params.view = opts.view;
	    }
	
	    // If opts.query_params exists, pass it through to the changes request.
	    // These parameters may be used by the filter on the source database.
	    if (opts.query_params && typeof opts.query_params === 'object') {
	      for (var param_name in opts.query_params) {
	        /* istanbul ignore else */
	        if (opts.query_params.hasOwnProperty(param_name)) {
	          params[param_name] = opts.query_params[param_name];
	        }
	      }
	    }
	
	    var method = 'GET';
	    var body;
	
	    if (opts.doc_ids) {
	      // set this automagically for the user; it's annoying that couchdb
	      // requires both a "filter" and a "doc_ids" param.
	      params.filter = '_doc_ids';
	      method = 'POST';
	      body = {doc_ids: opts.doc_ids };
	    }
	
	    var xhr;
	    var lastFetchedSeq;
	
	    // Get all the changes starting wtih the one immediately after the
	    // sequence number given by since.
	    var fetch = function (since, callback) {
	      if (opts.aborted) {
	        return;
	      }
	      params.since = since;
	      // "since" can be any kind of json object in Coudant/CouchDB 2.x
	      /* istanbul ignore next */
	      if (typeof params.since === "object") {
	        params.since = JSON.stringify(params.since);
	      }
	
	      if (opts.descending) {
	        if (limit) {
	          params.limit = leftToFetch;
	        }
	      } else {
	        params.limit = (!limit || leftToFetch > batchSize) ?
	          batchSize : leftToFetch;
	      }
	
	      // Set the options for the ajax call
	      var xhrOpts = {
	        method: method,
	        url: genDBUrl(host, '_changes' + paramsToStr(params)),
	        timeout: opts.timeout,
	        body: body
	      };
	      lastFetchedSeq = since;
	
	      /* istanbul ignore if */
	      if (opts.aborted) {
	        return;
	      }
	
	      // Get the changes
	      setup().then(function () {
	        xhr = ajax$$(opts, xhrOpts, callback);
	      }).catch(callback);
	    };
	
	    // If opts.since exists, get all the changes from the sequence
	    // number given by opts.since. Otherwise, get all the changes
	    // from the sequence number 0.
	    var results = {results: []};
	
	    var fetched = function (err, res) {
	      if (opts.aborted) {
	        return;
	      }
	      var raw_results_length = 0;
	      // If the result of the ajax call (res) contains changes (res.results)
	      if (res && res.results) {
	        raw_results_length = res.results.length;
	        results.last_seq = res.last_seq;
	        // For each change
	        var req = {};
	        req.query = opts.query_params;
	        res.results = res.results.filter(function (c) {
	          leftToFetch--;
	          var ret = filterChange(opts)(c);
	          if (ret) {
	            if (opts.include_docs && opts.attachments && opts.binary) {
	              readAttachmentsAsBlobOrBuffer(c);
	            }
	            if (returnDocs) {
	              results.results.push(c);
	            }
	            opts.onChange(c);
	          }
	          return ret;
	        });
	      } else if (err) {
	        // In case of an error, stop listening for changes and call
	        // opts.complete
	        opts.aborted = true;
	        opts.complete(err);
	        return;
	      }
	
	      // The changes feed may have timed out with no results
	      // if so reuse last update sequence
	      if (res && res.last_seq) {
	        lastFetchedSeq = res.last_seq;
	      }
	
	      var finished = (limit && leftToFetch <= 0) ||
	        (res && raw_results_length < batchSize) ||
	        (opts.descending);
	
	      if ((opts.continuous && !(limit && leftToFetch <= 0)) || !finished) {
	        // Queue a call to fetch again with the newest sequence number
	        setTimeout(function () { fetch(lastFetchedSeq, fetched); }, 0);
	      } else {
	        // We're done, call the callback
	        opts.complete(null, results);
	      }
	    };
	
	    fetch(opts.since || 0, fetched);
	
	    // Return a method to cancel this method from processing any more
	    return {
	      cancel: function () {
	        opts.aborted = true;
	        if (xhr) {
	          xhr.abort();
	        }
	      }
	    };
	  };
	
	  // Given a set of document/revision IDs (given by req), tets the subset of
	  // those that do NOT correspond to revisions stored in the database.
	  // See http://wiki.apache.org/couchdb/HttpPostRevsDiff
	  api.revsDiff = adapterFun$$('revsDiff', function (req, opts, callback) {
	    // If no options were given, set the callback to be the second parameter
	    if (typeof opts === 'function') {
	      callback = opts;
	      opts = {};
	    }
	
	    // Get the missing document/revision IDs
	    ajax$$(opts, {
	      method: 'POST',
	      url: genDBUrl(host, '_revs_diff'),
	      body: req
	    }, callback);
	  });
	
	  api._close = function (callback) {
	    callback();
	  };
	
	  api._destroy = function (options, callback) {
	    ajax$$(options, {
	      url: genDBUrl(host, ''),
	      method: 'DELETE'
	    }, function (err, resp) {
	      if (err && err.status && err.status !== 404) {
	        return callback(err);
	      }
	      callback(null, resp);
	    });
	  };
	}
	
	// HttpPouch is a valid adapter.
	HttpPouch.valid = function () {
	  return true;
	};
	
	function HttpPouch$1 (PouchDB) {
	  PouchDB.adapter('http', HttpPouch, false);
	  PouchDB.adapter('https', HttpPouch, false);
	}
	
	function pad(str, padWith, upToLength) {
	  var padding = '';
	  var targetLength = upToLength - str.length;
	  /* istanbul ignore next */
	  while (padding.length < targetLength) {
	    padding += padWith;
	  }
	  return padding;
	}
	
	function padLeft(str, padWith, upToLength) {
	  var padding = pad(str, padWith, upToLength);
	  return padding + str;
	}
	
	var MIN_MAGNITUDE = -324; // verified by -Number.MIN_VALUE
	var MAGNITUDE_DIGITS = 3; // ditto
	var SEP = ''; // set to '_' for easier debugging 
	
	function collate(a, b) {
	
	  if (a === b) {
	    return 0;
	  }
	
	  a = normalizeKey(a);
	  b = normalizeKey(b);
	
	  var ai = collationIndex(a);
	  var bi = collationIndex(b);
	  if ((ai - bi) !== 0) {
	    return ai - bi;
	  }
	  if (a === null) {
	    return 0;
	  }
	  switch (typeof a) {
	    case 'number':
	      return a - b;
	    case 'boolean':
	      return a === b ? 0 : (a < b ? -1 : 1);
	    case 'string':
	      return stringCollate(a, b);
	  }
	  return Array.isArray(a) ? arrayCollate(a, b) : objectCollate(a, b);
	}
	
	// couch considers null/NaN/Infinity/-Infinity === undefined,
	// for the purposes of mapreduce indexes. also, dates get stringified.
	function normalizeKey(key) {
	  switch (typeof key) {
	    case 'undefined':
	      return null;
	    case 'number':
	      if (key === Infinity || key === -Infinity || isNaN(key)) {
	        return null;
	      }
	      return key;
	    case 'object':
	      var origKey = key;
	      if (Array.isArray(key)) {
	        var len = key.length;
	        key = new Array(len);
	        for (var i = 0; i < len; i++) {
	          key[i] = normalizeKey(origKey[i]);
	        }
	      /* istanbul ignore next */
	      } else if (key instanceof Date) {
	        return key.toJSON();
	      } else if (key !== null) { // generic object
	        key = {};
	        for (var k in origKey) {
	          if (origKey.hasOwnProperty(k)) {
	            var val = origKey[k];
	            if (typeof val !== 'undefined') {
	              key[k] = normalizeKey(val);
	            }
	          }
	        }
	      }
	  }
	  return key;
	}
	
	function indexify(key) {
	  if (key !== null) {
	    switch (typeof key) {
	      case 'boolean':
	        return key ? 1 : 0;
	      case 'number':
	        return numToIndexableString(key);
	      case 'string':
	        // We've to be sure that key does not contain \u0000
	        // Do order-preserving replacements:
	        // 0 -> 1, 1
	        // 1 -> 1, 2
	        // 2 -> 2, 2
	        return key
	          .replace(/\u0002/g, '\u0002\u0002')
	          .replace(/\u0001/g, '\u0001\u0002')
	          .replace(/\u0000/g, '\u0001\u0001');
	      case 'object':
	        var isArray = Array.isArray(key);
	        var arr = isArray ? key : Object.keys(key);
	        var i = -1;
	        var len = arr.length;
	        var result = '';
	        if (isArray) {
	          while (++i < len) {
	            result += toIndexableString(arr[i]);
	          }
	        } else {
	          while (++i < len) {
	            var objKey = arr[i];
	            result += toIndexableString(objKey) +
	                toIndexableString(key[objKey]);
	          }
	        }
	        return result;
	    }
	  }
	  return '';
	}
	
	// convert the given key to a string that would be appropriate
	// for lexical sorting, e.g. within a database, where the
	// sorting is the same given by the collate() function.
	function toIndexableString(key) {
	  var zero = '\u0000';
	  key = normalizeKey(key);
	  return collationIndex(key) + SEP + indexify(key) + zero;
	}
	
	function parseNumber(str, i) {
	  var originalIdx = i;
	  var num;
	  var zero = str[i] === '1';
	  if (zero) {
	    num = 0;
	    i++;
	  } else {
	    var neg = str[i] === '0';
	    i++;
	    var numAsString = '';
	    var magAsString = str.substring(i, i + MAGNITUDE_DIGITS);
	    var magnitude = parseInt(magAsString, 10) + MIN_MAGNITUDE;
	    /* istanbul ignore next */
	    if (neg) {
	      magnitude = -magnitude;
	    }
	    i += MAGNITUDE_DIGITS;
	    while (true) {
	      var ch = str[i];
	      if (ch === '\u0000') {
	        break;
	      } else {
	        numAsString += ch;
	      }
	      i++;
	    }
	    numAsString = numAsString.split('.');
	    if (numAsString.length === 1) {
	      num = parseInt(numAsString, 10);
	    } else {
	      /* istanbul ignore next */
	      num = parseFloat(numAsString[0] + '.' + numAsString[1]);
	    }
	    /* istanbul ignore next */
	    if (neg) {
	      num = num - 10;
	    }
	    /* istanbul ignore next */
	    if (magnitude !== 0) {
	      // parseFloat is more reliable than pow due to rounding errors
	      // e.g. Number.MAX_VALUE would return Infinity if we did
	      // num * Math.pow(10, magnitude);
	      num = parseFloat(num + 'e' + magnitude);
	    }
	  }
	  return {num: num, length : i - originalIdx};
	}
	
	// move up the stack while parsing
	// this function moved outside of parseIndexableString for performance
	function pop(stack, metaStack) {
	  var obj = stack.pop();
	
	  if (metaStack.length) {
	    var lastMetaElement = metaStack[metaStack.length - 1];
	    if (obj === lastMetaElement.element) {
	      // popping a meta-element, e.g. an object whose value is another object
	      metaStack.pop();
	      lastMetaElement = metaStack[metaStack.length - 1];
	    }
	    var element = lastMetaElement.element;
	    var lastElementIndex = lastMetaElement.index;
	    if (Array.isArray(element)) {
	      element.push(obj);
	    } else if (lastElementIndex === stack.length - 2) { // obj with key+value
	      var key = stack.pop();
	      element[key] = obj;
	    } else {
	      stack.push(obj); // obj with key only
	    }
	  }
	}
	
	function parseIndexableString(str) {
	  var stack = [];
	  var metaStack = []; // stack for arrays and objects
	  var i = 0;
	
	  /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
	  while (true) {
	    var collationIndex = str[i++];
	    if (collationIndex === '\u0000') {
	      if (stack.length === 1) {
	        return stack.pop();
	      } else {
	        pop(stack, metaStack);
	        continue;
	      }
	    }
	    switch (collationIndex) {
	      case '1':
	        stack.push(null);
	        break;
	      case '2':
	        stack.push(str[i] === '1');
	        i++;
	        break;
	      case '3':
	        var parsedNum = parseNumber(str, i);
	        stack.push(parsedNum.num);
	        i += parsedNum.length;
	        break;
	      case '4':
	        var parsedStr = '';
	        /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
	        while (true) {
	          var ch = str[i];
	          if (ch === '\u0000') {
	            break;
	          }
	          parsedStr += ch;
	          i++;
	        }
	        // perform the reverse of the order-preserving replacement
	        // algorithm (see above)
	        parsedStr = parsedStr.replace(/\u0001\u0001/g, '\u0000')
	          .replace(/\u0001\u0002/g, '\u0001')
	          .replace(/\u0002\u0002/g, '\u0002');
	        stack.push(parsedStr);
	        break;
	      case '5':
	        var arrayElement = { element: [], index: stack.length };
	        stack.push(arrayElement.element);
	        metaStack.push(arrayElement);
	        break;
	      case '6':
	        var objElement = { element: {}, index: stack.length };
	        stack.push(objElement.element);
	        metaStack.push(objElement);
	        break;
	      /* istanbul ignore next */
	      default:
	        throw new Error(
	          'bad collationIndex or unexpectedly reached end of input: ' +
	            collationIndex);
	    }
	  }
	}
	
	function arrayCollate(a, b) {
	  var len = Math.min(a.length, b.length);
	  for (var i = 0; i < len; i++) {
	    var sort = collate(a[i], b[i]);
	    if (sort !== 0) {
	      return sort;
	    }
	  }
	  return (a.length === b.length) ? 0 :
	    (a.length > b.length) ? 1 : -1;
	}
	function stringCollate(a, b) {
	  // See: https://github.com/daleharvey/pouchdb/issues/40
	  // This is incompatible with the CouchDB implementation, but its the
	  // best we can do for now
	  return (a === b) ? 0 : ((a > b) ? 1 : -1);
	}
	function objectCollate(a, b) {
	  var ak = Object.keys(a), bk = Object.keys(b);
	  var len = Math.min(ak.length, bk.length);
	  for (var i = 0; i < len; i++) {
	    // First sort the keys
	    var sort = collate(ak[i], bk[i]);
	    if (sort !== 0) {
	      return sort;
	    }
	    // if the keys are equal sort the values
	    sort = collate(a[ak[i]], b[bk[i]]);
	    if (sort !== 0) {
	      return sort;
	    }
	
	  }
	  return (ak.length === bk.length) ? 0 :
	    (ak.length > bk.length) ? 1 : -1;
	}
	// The collation is defined by erlangs ordered terms
	// the atoms null, true, false come first, then numbers, strings,
	// arrays, then objects
	// null/undefined/NaN/Infinity/-Infinity are all considered null
	function collationIndex(x) {
	  var id = ['boolean', 'number', 'string', 'object'];
	  var idx = id.indexOf(typeof x);
	  //false if -1 otherwise true, but fast!!!!1
	  if (~idx) {
	    if (x === null) {
	      return 1;
	    }
	    if (Array.isArray(x)) {
	      return 5;
	    }
	    return idx < 3 ? (idx + 2) : (idx + 3);
	  }
	  /* istanbul ignore next */
	  if (Array.isArray(x)) {
	    return 5;
	  }
	}
	
	// conversion:
	// x yyy zz...zz
	// x = 0 for negative, 1 for 0, 2 for positive
	// y = exponent (for negative numbers negated) moved so that it's >= 0
	// z = mantisse
	function numToIndexableString(num) {
	
	  if (num === 0) {
	    return '1';
	  }
	
	  // convert number to exponential format for easier and
	  // more succinct string sorting
	  var expFormat = num.toExponential().split(/e\+?/);
	  var magnitude = parseInt(expFormat[1], 10);
	
	  var neg = num < 0;
	
	  var result = neg ? '0' : '2';
	
	  // first sort by magnitude
	  // it's easier if all magnitudes are positive
	  var magForComparison = ((neg ? -magnitude : magnitude) - MIN_MAGNITUDE);
	  var magString = padLeft((magForComparison).toString(), '0', MAGNITUDE_DIGITS);
	
	  result += SEP + magString;
	
	  // then sort by the factor
	  var factor = Math.abs(parseFloat(expFormat[0])); // [1..10)
	  /* istanbul ignore next */
	  if (neg) { // for negative reverse ordering
	    factor = 10 - factor;
	  }
	
	  var factorStr = factor.toFixed(20);
	
	  // strip zeros from the end
	  factorStr = factorStr.replace(/\.?0+$/, '');
	
	  result += SEP + factorStr;
	
	  return result;
	}
	
	/*
	 * Simple task queue to sequentialize actions. Assumes
	 * callbacks will eventually fire (once).
	 */
	
	function TaskQueue$1() {
	  this.promise = new PouchPromise(function (fulfill) {fulfill(); });
	}
	TaskQueue$1.prototype.add = function (promiseFactory) {
	  this.promise = this.promise.catch(function () {
	    // just recover
	  }).then(function () {
	    return promiseFactory();
	  });
	  return this.promise;
	};
	TaskQueue$1.prototype.finish = function () {
	  return this.promise;
	};
	
	function createView(opts) {
	  var sourceDB = opts.db;
	  var viewName = opts.viewName;
	  var mapFun = opts.map;
	  var reduceFun = opts.reduce;
	  var temporary = opts.temporary;
	
	  // the "undefined" part is for backwards compatibility
	  var viewSignature = mapFun.toString() + (reduceFun && reduceFun.toString()) +
	    'undefined';
	
	  var cachedViews;
	  if (!temporary) {
	    // cache this to ensure we don't try to update the same view twice
	    cachedViews = sourceDB._cachedViews = sourceDB._cachedViews || {};
	    if (cachedViews[viewSignature]) {
	      return cachedViews[viewSignature];
	    }
	  }
	
	  var promiseForView = sourceDB.info().then(function (info) {
	
	    var depDbName = info.db_name + '-mrview-' +
	      (temporary ? 'temp' : stringMd5(viewSignature));
	
	    // save the view name in the source db so it can be cleaned up if necessary
	    // (e.g. when the _design doc is deleted, remove all associated view data)
	    function diffFunction(doc) {
	      doc.views = doc.views || {};
	      var fullViewName = viewName;
	      if (fullViewName.indexOf('/') === -1) {
	        fullViewName = viewName + '/' + viewName;
	      }
	      var depDbs = doc.views[fullViewName] = doc.views[fullViewName] || {};
	      /* istanbul ignore if */
	      if (depDbs[depDbName]) {
	        return; // no update necessary
	      }
	      depDbs[depDbName] = true;
	      return doc;
	    }
	    return upsert(sourceDB, '_local/mrviews', diffFunction).then(function () {
	      return sourceDB.registerDependentDatabase(depDbName).then(function (res) {
	        var db = res.db;
	        db.auto_compaction = true;
	        var view = {
	          name: depDbName,
	          db: db,
	          sourceDB: sourceDB,
	          adapter: sourceDB.adapter,
	          mapFun: mapFun,
	          reduceFun: reduceFun
	        };
	        return view.db.get('_local/lastSeq').catch(function (err) {
	          /* istanbul ignore if */
	          if (err.status !== 404) {
	            throw err;
	          }
	        }).then(function (lastSeqDoc) {
	          view.seq = lastSeqDoc ? lastSeqDoc.seq : 0;
	          if (cachedViews) {
	            view.db.once('destroyed', function () {
	              delete cachedViews[viewSignature];
	            });
	          }
	          return view;
	        });
	      });
	    });
	  });
	
	  if (cachedViews) {
	    cachedViews[viewSignature] = promiseForView;
	  }
	  return promiseForView;
	}
	
	function QueryParseError(message) {
	  this.status = 400;
	  this.name = 'query_parse_error';
	  this.message = message;
	  this.error = true;
	  try {
	    Error.captureStackTrace(this, QueryParseError);
	  } catch (e) {}
	}
	
	inherits(QueryParseError, Error);
	
	function NotFoundError(message) {
	  this.status = 404;
	  this.name = 'not_found';
	  this.message = message;
	  this.error = true;
	  try {
	    Error.captureStackTrace(this, NotFoundError);
	  } catch (e) {}
	}
	
	inherits(NotFoundError, Error);
	
	function BuiltInError(message) {
	  this.status = 500;
	  this.name = 'invalid_value';
	  this.message = message;
	  this.error = true;
	  try {
	    Error.captureStackTrace(this, BuiltInError);
	  } catch (e) {}
	}
	
	inherits(BuiltInError, Error);
	
	function createBuiltInError(name) {
	  var message = 'builtin ' + name +
	    ' function requires map values to be numbers' +
	    ' or number arrays';
	  return new BuiltInError(message);
	}
	
	function sum(values) {
	  var result = 0;
	  for (var i = 0, len = values.length; i < len; i++) {
	    var num = values[i];
	    if (typeof num !== 'number') {
	      if (Array.isArray(num)) {
	        // lists of numbers are also allowed, sum them separately
	        result = typeof result === 'number' ? [result] : result;
	        for (var j = 0, jLen = num.length; j < jLen; j++) {
	          var jNum = num[j];
	          if (typeof jNum !== 'number') {
	            throw createBuiltInError('_sum');
	          } else if (typeof result[j] === 'undefined') {
	            result.push(jNum);
	          } else {
	            result[j] += jNum;
	          }
	        }
	      } else { // not array/number
	        throw createBuiltInError('_sum');
	      }
	    } else if (typeof result === 'number') {
	      result += num;
	    } else { // add number to array
	      result[0] += num;
	    }
	  }
	  return result;
	}
	
	var log$2 = guardedConsole.bind(null, 'log');
	var isArray = Array.isArray;
	var toJSON = JSON.parse;
	
	function evalFunctionWithEval(func, emit) {
	  return scopedEval(
	    "return (" + func.replace(/;\s*$/, "") + ");",
	    {
	      emit: emit,
	      sum: sum,
	      log: log$2,
	      isArray: isArray,
	      toJSON: toJSON
	    }
	  );
	}
	
	var promisedCallback = function (promise, callback) {
	  if (callback) {
	    promise.then(function (res) {
	      process.nextTick(function () {
	        callback(null, res);
	      });
	    }, function (reason) {
	      process.nextTick(function () {
	        callback(reason);
	      });
	    });
	  }
	  return promise;
	};
	
	var callbackify = function (fun) {
	  return getArguments(function (args) {
	    var cb = args.pop();
	    var promise = fun.apply(this, args);
	    if (typeof cb === 'function') {
	      promisedCallback(promise, cb);
	    }
	    return promise;
	  });
	};
	
	// Promise finally util similar to Q.finally
	var fin = function (promise, finalPromiseFactory) {
	  return promise.then(function (res) {
	    return finalPromiseFactory().then(function () {
	      return res;
	    });
	  }, function (reason) {
	    return finalPromiseFactory().then(function () {
	      throw reason;
	    });
	  });
	};
	
	var sequentialize = function (queue, promiseFactory) {
	  return function () {
	    var args = arguments;
	    var that = this;
	    return queue.add(function () {
	      return promiseFactory.apply(that, args);
	    });
	  };
	};
	
	// uniq an array of strings, order not guaranteed
	// similar to underscore/lodash _.uniq
	var uniq = function (arr) {
	  var map = {};
	
	  for (var i = 0, len = arr.length; i < len; i++) {
	    map['$' + arr[i]] = true;
	  }
	
	  var keys = Object.keys(map);
	  var output = new Array(keys.length);
	
	  for (i = 0, len = keys.length; i < len; i++) {
	    output[i] = keys[i].substring(1);
	  }
	  return output;
	};
	
	var persistentQueues = {};
	var tempViewQueue = new TaskQueue$1();
	var CHANGES_BATCH_SIZE$1 = 50;
	
	function parseViewName(name) {
	  // can be either 'ddocname/viewname' or just 'viewname'
	  // (where the ddoc name is the same)
	  return name.indexOf('/') === -1 ? [name, name] : name.split('/');
	}
	
	function isGenOne(changes) {
	  // only return true if the current change is 1-
	  // and there are no other leafs
	  return changes.length === 1 && /^1-/.test(changes[0].rev);
	}
	
	function emitError(db, e) {
	  try {
	    db.emit('error', e);
	  } catch (err) {
	    guardedConsole('error',
	      'The user\'s map/reduce function threw an uncaught error.\n' +
	      'You can debug this error by doing:\n' +
	      'myDatabase.on(\'error\', function (err) { debugger; });\n' +
	      'Please double-check your map/reduce function.');
	    guardedConsole('error', e);
	  }
	}
	
	function tryCode$1(db, fun, args) {
	  // emit an event if there was an error thrown by a map/reduce function.
	  // putting try/catches in a single function also avoids deoptimizations.
	  try {
	    return {
	      output : fun.apply(null, args)
	    };
	  } catch (e) {
	    emitError(db, e);
	    return {error: e};
	  }
	}
	
	function sortByKeyThenValue(x, y) {
	  var keyCompare = collate(x.key, y.key);
	  return keyCompare !== 0 ? keyCompare : collate(x.value, y.value);
	}
	
	function sliceResults(results, limit, skip) {
	  skip = skip || 0;
	  if (typeof limit === 'number') {
	    return results.slice(skip, limit + skip);
	  } else if (skip > 0) {
	    return results.slice(skip);
	  }
	  return results;
	}
	
	function rowToDocId(row) {
	  var val = row.value;
	  // Users can explicitly specify a joined doc _id, or it
	  // defaults to the doc _id that emitted the key/value.
	  var docId = (val && typeof val === 'object' && val._id) || row.id;
	  return docId;
	}
	
	function readAttachmentsAsBlobOrBuffer$1(res) {
	  res.rows.forEach(function (row) {
	    var atts = row.doc && row.doc._attachments;
	    if (!atts) {
	      return;
	    }
	    Object.keys(atts).forEach(function (filename) {
	      var att = atts[filename];
	      atts[filename].data = b64ToBluffer(att.data, att.content_type);
	    });
	  });
	}
	
	function postprocessAttachments(opts) {
	  return function (res) {
	    if (opts.include_docs && opts.attachments && opts.binary) {
	      readAttachmentsAsBlobOrBuffer$1(res);
	    }
	    return res;
	  };
	}
	
	var builtInReduce = {
	  _sum: function (keys, values) {
	    return sum(values);
	  },
	
	  _count: function (keys, values) {
	    return values.length;
	  },
	
	  _stats: function (keys, values) {
	    // no need to implement rereduce=true, because Pouch
	    // will never call it
	    function sumsqr(values) {
	      var _sumsqr = 0;
	      for (var i = 0, len = values.length; i < len; i++) {
	        var num = values[i];
	        _sumsqr += (num * num);
	      }
	      return _sumsqr;
	    }
	    return {
	      sum     : sum(values),
	      min     : Math.min.apply(null, values),
	      max     : Math.max.apply(null, values),
	      count   : values.length,
	      sumsqr : sumsqr(values)
	    };
	  }
	};
	
	function addHttpParam(paramName, opts, params, asJson) {
	  // add an http param from opts to params, optionally json-encoded
	  var val = opts[paramName];
	  if (typeof val !== 'undefined') {
	    if (asJson) {
	      val = encodeURIComponent(JSON.stringify(val));
	    }
	    params.push(paramName + '=' + val);
	  }
	}
	
	function coerceInteger(integerCandidate) {
	  if (typeof integerCandidate !== 'undefined') {
	    var asNumber = Number(integerCandidate);
	    // prevents e.g. '1foo' or '1.1' being coerced to 1
	    if (!isNaN(asNumber) && asNumber === parseInt(integerCandidate, 10)) {
	      return asNumber;
	    } else {
	      return integerCandidate;
	    }
	  }
	}
	
	function coerceOptions(opts) {
	  opts.group_level = coerceInteger(opts.group_level);
	  opts.limit = coerceInteger(opts.limit);
	  opts.skip = coerceInteger(opts.skip);
	  return opts;
	}
	
	function checkPositiveInteger(number) {
	  if (number) {
	    if (typeof number !== 'number') {
	      return  new QueryParseError('Invalid value for integer: "' +
	      number + '"');
	    }
	    if (number < 0) {
	      return new QueryParseError('Invalid value for positive integer: ' +
	        '"' + number + '"');
	    }
	  }
	}
	
	function checkQueryParseError(options, fun) {
	  var startkeyName = options.descending ? 'endkey' : 'startkey';
	  var endkeyName = options.descending ? 'startkey' : 'endkey';
	
	  if (typeof options[startkeyName] !== 'undefined' &&
	    typeof options[endkeyName] !== 'undefined' &&
	    collate(options[startkeyName], options[endkeyName]) > 0) {
	    throw new QueryParseError('No rows can match your key range, ' +
	    'reverse your start_key and end_key or set {descending : true}');
	  } else if (fun.reduce && options.reduce !== false) {
	    if (options.include_docs) {
	      throw new QueryParseError('{include_docs:true} is invalid for reduce');
	    } else if (options.keys && options.keys.length > 1 &&
	        !options.group && !options.group_level) {
	      throw new QueryParseError('Multi-key fetches for reduce views must use ' +
	      '{group: true}');
	    }
	  }
	  ['group_level', 'limit', 'skip'].forEach(function (optionName) {
	    var error = checkPositiveInteger(options[optionName]);
	    if (error) {
	      throw error;
	    }
	  });
	}
	
	function httpQuery(db, fun, opts) {
	  // List of parameters to add to the PUT request
	  var params = [];
	  var body;
	  var method = 'GET';
	
	  // If opts.reduce exists and is defined, then add it to the list
	  // of parameters.
	  // If reduce=false then the results are that of only the map function
	  // not the final result of map and reduce.
	  addHttpParam('reduce', opts, params);
	  addHttpParam('include_docs', opts, params);
	  addHttpParam('attachments', opts, params);
	  addHttpParam('limit', opts, params);
	  addHttpParam('descending', opts, params);
	  addHttpParam('group', opts, params);
	  addHttpParam('group_level', opts, params);
	  addHttpParam('skip', opts, params);
	  addHttpParam('stale', opts, params);
	  addHttpParam('conflicts', opts, params);
	  addHttpParam('startkey', opts, params, true);
	  addHttpParam('start_key', opts, params, true);
	  addHttpParam('endkey', opts, params, true);
	  addHttpParam('end_key', opts, params, true);
	  addHttpParam('inclusive_end', opts, params);
	  addHttpParam('key', opts, params, true);
	
	  // Format the list of parameters into a valid URI query string
	  params = params.join('&');
	  params = params === '' ? '' : '?' + params;
	
	  // If keys are supplied, issue a POST to circumvent GET query string limits
	  // see http://wiki.apache.org/couchdb/HTTP_view_API#Querying_Options
	  if (typeof opts.keys !== 'undefined') {
	    var MAX_URL_LENGTH = 2000;
	    // according to http://stackoverflow.com/a/417184/680742,
	    // the de facto URL length limit is 2000 characters
	
	    var keysAsString =
	      'keys=' + encodeURIComponent(JSON.stringify(opts.keys));
	    if (keysAsString.length + params.length + 1 <= MAX_URL_LENGTH) {
	      // If the keys are short enough, do a GET. we do this to work around
	      // Safari not understanding 304s on POSTs (see pouchdb/pouchdb#1239)
	      params += (params[0] === '?' ? '&' : '?') + keysAsString;
	    } else {
	      method = 'POST';
	      if (typeof fun === 'string') {
	        body = {keys: opts.keys};
	      } else { // fun is {map : mapfun}, so append to this
	        fun.keys = opts.keys;
	      }
	    }
	  }
	
	  // We are referencing a query defined in the design doc
	  if (typeof fun === 'string') {
	    var parts = parseViewName(fun);
	    return db.request({
	      method: method,
	      url: '_design/' + parts[0] + '/_view/' + parts[1] + params,
	      body: body
	    }).then(postprocessAttachments(opts));
	  }
	
	  // We are using a temporary view, terrible for performance, good for testing
	  body = body || {};
	  Object.keys(fun).forEach(function (key) {
	    if (Array.isArray(fun[key])) {
	      body[key] = fun[key];
	    } else {
	      body[key] = fun[key].toString();
	    }
	  });
	  return db.request({
	    method: 'POST',
	    url: '_temp_view' + params,
	    body: body
	  }).then(postprocessAttachments(opts));
	}
	
	// custom adapters can define their own api._query
	// and override the default behavior
	/* istanbul ignore next */
	function customQuery(db, fun, opts) {
	  return new PouchPromise(function (resolve, reject) {
	    db._query(fun, opts, function (err, res) {
	      if (err) {
	        return reject(err);
	      }
	      resolve(res);
	    });
	  });
	}
	
	// custom adapters can define their own api._viewCleanup
	// and override the default behavior
	/* istanbul ignore next */
	function customViewCleanup(db) {
	  return new PouchPromise(function (resolve, reject) {
	    db._viewCleanup(function (err, res) {
	      if (err) {
	        return reject(err);
	      }
	      resolve(res);
	    });
	  });
	}
	
	function defaultsTo(value) {
	  return function (reason) {
	    /* istanbul ignore else */
	    if (reason.status === 404) {
	      return value;
	    } else {
	      throw reason;
	    }
	  };
	}
	
	// returns a promise for a list of docs to update, based on the input docId.
	// the order doesn't matter, because post-3.2.0, bulkDocs
	// is an atomic operation in all three adapters.
	function getDocsToPersist(docId, view, docIdsToChangesAndEmits) {
	  var metaDocId = '_local/doc_' + docId;
	  var defaultMetaDoc = {_id: metaDocId, keys: []};
	  var docData = docIdsToChangesAndEmits[docId];
	  var indexableKeysToKeyValues = docData.indexableKeysToKeyValues;
	  var changes = docData.changes;
	
	  function getMetaDoc() {
	    if (isGenOne(changes)) {
	      // generation 1, so we can safely assume initial state
	      // for performance reasons (avoids unnecessary GETs)
	      return PouchPromise.resolve(defaultMetaDoc);
	    }
	    return view.db.get(metaDocId).catch(defaultsTo(defaultMetaDoc));
	  }
	
	  function getKeyValueDocs(metaDoc) {
	    if (!metaDoc.keys.length) {
	      // no keys, no need for a lookup
	      return PouchPromise.resolve({rows: []});
	    }
	    return view.db.allDocs({
	      keys: metaDoc.keys,
	      include_docs: true
	    });
	  }
	
	  function processKvDocs(metaDoc, kvDocsRes) {
	    var kvDocs = [];
	    var oldKeysMap = {};
	
	    for (var i = 0, len = kvDocsRes.rows.length; i < len; i++) {
	      var row = kvDocsRes.rows[i];
	      var doc = row.doc;
	      if (!doc) { // deleted
	        continue;
	      }
	      kvDocs.push(doc);
	      oldKeysMap[doc._id] = true;
	      doc._deleted = !indexableKeysToKeyValues[doc._id];
	      if (!doc._deleted) {
	        var keyValue = indexableKeysToKeyValues[doc._id];
	        if ('value' in keyValue) {
	          doc.value = keyValue.value;
	        }
	      }
	    }
	
	    var newKeys = Object.keys(indexableKeysToKeyValues);
	    newKeys.forEach(function (key) {
	      if (!oldKeysMap[key]) {
	        // new doc
	        var kvDoc = {
	          _id: key
	        };
	        var keyValue = indexableKeysToKeyValues[key];
	        if ('value' in keyValue) {
	          kvDoc.value = keyValue.value;
	        }
	        kvDocs.push(kvDoc);
	      }
	    });
	    metaDoc.keys = uniq(newKeys.concat(metaDoc.keys));
	    kvDocs.push(metaDoc);
	
	    return kvDocs;
	  }
	
	  return getMetaDoc().then(function (metaDoc) {
	    return getKeyValueDocs(metaDoc).then(function (kvDocsRes) {
	      return processKvDocs(metaDoc, kvDocsRes);
	    });
	  });
	}
	
	// updates all emitted key/value docs and metaDocs in the mrview database
	// for the given batch of documents from the source database
	function saveKeyValues(view, docIdsToChangesAndEmits, seq) {
	  var seqDocId = '_local/lastSeq';
	  return view.db.get(seqDocId)
	  .catch(defaultsTo({_id: seqDocId, seq: 0}))
	  .then(function (lastSeqDoc) {
	    var docIds = Object.keys(docIdsToChangesAndEmits);
	    return PouchPromise.all(docIds.map(function (docId) {
	      return getDocsToPersist(docId, view, docIdsToChangesAndEmits);
	    })).then(function (listOfDocsToPersist) {
	      var docsToPersist = flatten(listOfDocsToPersist);
	      lastSeqDoc.seq = seq;
	      docsToPersist.push(lastSeqDoc);
	      // write all docs in a single operation, update the seq once
	      return view.db.bulkDocs({docs : docsToPersist});
	    });
	  });
	}
	
	function getQueue(view) {
	  var viewName = typeof view === 'string' ? view : view.name;
	  var queue = persistentQueues[viewName];
	  if (!queue) {
	    queue = persistentQueues[viewName] = new TaskQueue$1();
	  }
	  return queue;
	}
	
	function updateView(view) {
	  return sequentialize(getQueue(view), function () {
	    return updateViewInQueue(view);
	  })();
	}
	
	function updateViewInQueue(view) {
	  // bind the emit function once
	  var mapResults;
	  var doc;
	
	  function emit(key, value) {
	    var output = {id: doc._id, key: normalizeKey(key)};
	    // Don't explicitly store the value unless it's defined and non-null.
	    // This saves on storage space, because often people don't use it.
	    if (typeof value !== 'undefined' && value !== null) {
	      output.value = normalizeKey(value);
	    }
	    mapResults.push(output);
	  }
	
	  var mapFun;
	  // for temp_views one can use emit(doc, emit), see #38
	  if (typeof view.mapFun === "function" && view.mapFun.length === 2) {
	    var origMap = view.mapFun;
	    mapFun = function (doc) {
	      return origMap(doc, emit);
	    };
	  } else {
	    mapFun = evalFunctionWithEval(view.mapFun.toString(), emit);
	  }
	
	  var currentSeq = view.seq || 0;
	
	  function processChange(docIdsToChangesAndEmits, seq) {
	    return function () {
	      return saveKeyValues(view, docIdsToChangesAndEmits, seq);
	    };
	  }
	
	  var queue = new TaskQueue$1();
	  // TODO(neojski): https://github.com/daleharvey/pouchdb/issues/1521
	
	  return new PouchPromise(function (resolve, reject) {
	
	    function complete() {
	      queue.finish().then(function () {
	        view.seq = currentSeq;
	        resolve();
	      });
	    }
	
	    function processNextBatch() {
	      view.sourceDB.changes({
	        conflicts: true,
	        include_docs: true,
	        style: 'all_docs',
	        since: currentSeq,
	        limit: CHANGES_BATCH_SIZE$1
	      }).on('complete', function (response) {
	        var results = response.results;
	        if (!results.length) {
	          return complete();
	        }
	        var docIdsToChangesAndEmits = {};
	        for (var i = 0, l = results.length; i < l; i++) {
	          var change = results[i];
	          if (change.doc._id[0] !== '_') {
	            mapResults = [];
	            doc = change.doc;
	
	            if (!doc._deleted) {
	              tryCode$1(view.sourceDB, mapFun, [doc]);
	            }
	            mapResults.sort(sortByKeyThenValue);
	
	            var indexableKeysToKeyValues = {};
	            var lastKey;
	            for (var j = 0, jl = mapResults.length; j < jl; j++) {
	              var obj = mapResults[j];
	              var complexKey = [obj.key, obj.id];
	              if (collate(obj.key, lastKey) === 0) {
	                complexKey.push(j); // dup key+id, so make it unique
	              }
	              var indexableKey = toIndexableString(complexKey);
	              indexableKeysToKeyValues[indexableKey] = obj;
	              lastKey = obj.key;
	            }
	            docIdsToChangesAndEmits[change.doc._id] = {
	              indexableKeysToKeyValues: indexableKeysToKeyValues,
	              changes: change.changes
	            };
	          }
	          currentSeq = change.seq;
	        }
	        queue.add(processChange(docIdsToChangesAndEmits, currentSeq));
	        if (results.length < CHANGES_BATCH_SIZE$1) {
	          return complete();
	        }
	        return processNextBatch();
	      }).on('error', onError);
	      /* istanbul ignore next */
	      function onError(err) {
	        reject(err);
	      }
	    }
	
	    processNextBatch();
	  });
	}
	
	function reduceView(view, results, options) {
	  if (options.group_level === 0) {
	    delete options.group_level;
	  }
	
	  var shouldGroup = options.group || options.group_level;
	
	  var reduceFun;
	  if (builtInReduce[view.reduceFun]) {
	    reduceFun = builtInReduce[view.reduceFun];
	  } else {
	    reduceFun = evalFunctionWithEval(view.reduceFun.toString());
	  }
	
	  var groups = [];
	  var lvl = isNaN(options.group_level) ? Number.POSITIVE_INFINITY :
	    options.group_level;
	  results.forEach(function (e) {
	    var last = groups[groups.length - 1];
	    var groupKey = shouldGroup ? e.key : null;
	
	    // only set group_level for array keys
	    if (shouldGroup && Array.isArray(groupKey)) {
	      groupKey = groupKey.slice(0, lvl);
	    }
	
	    if (last && collate(last.groupKey, groupKey) === 0) {
	      last.keys.push([e.key, e.id]);
	      last.values.push(e.value);
	      return;
	    }
	    groups.push({
	      keys: [[e.key, e.id]],
	      values: [e.value],
	      groupKey: groupKey
	    });
	  });
	  results = [];
	  for (var i = 0, len = groups.length; i < len; i++) {
	    var e = groups[i];
	    var reduceTry = tryCode$1(view.sourceDB, reduceFun,
	      [e.keys, e.values, false]);
	    if (reduceTry.error && reduceTry.error instanceof BuiltInError) {
	      // CouchDB returns an error if a built-in errors out
	      throw reduceTry.error;
	    }
	    results.push({
	      // CouchDB just sets the value to null if a non-built-in errors out
	      value: reduceTry.error ? null : reduceTry.output,
	      key: e.groupKey
	    });
	  }
	  // no total_rows/offset when reducing
	  return {rows: sliceResults(results, options.limit, options.skip)};
	}
	
	function queryView(view, opts) {
	  return sequentialize(getQueue(view), function () {
	    return queryViewInQueue(view, opts);
	  })();
	}
	
	function queryViewInQueue(view, opts) {
	  var totalRows;
	  var shouldReduce = view.reduceFun && opts.reduce !== false;
	  var skip = opts.skip || 0;
	  if (typeof opts.keys !== 'undefined' && !opts.keys.length) {
	    // equivalent query
	    opts.limit = 0;
	    delete opts.keys;
	  }
	
	  function fetchFromView(viewOpts) {
	    viewOpts.include_docs = true;
	    return view.db.allDocs(viewOpts).then(function (res) {
	      totalRows = res.total_rows;
	      return res.rows.map(function (result) {
	
	        // implicit migration - in older versions of PouchDB,
	        // we explicitly stored the doc as {id: ..., key: ..., value: ...}
	        // this is tested in a migration test
	        /* istanbul ignore next */
	        if ('value' in result.doc && typeof result.doc.value === 'object' &&
	            result.doc.value !== null) {
	          var keys = Object.keys(result.doc.value).sort();
	          // this detection method is not perfect, but it's unlikely the user
	          // emitted a value which was an object with these 3 exact keys
	          var expectedKeys = ['id', 'key', 'value'];
	          if (!(keys < expectedKeys || keys > expectedKeys)) {
	            return result.doc.value;
	          }
	        }
	
	        var parsedKeyAndDocId = parseIndexableString(result.doc._id);
	        return {
	          key: parsedKeyAndDocId[0],
	          id: parsedKeyAndDocId[1],
	          value: ('value' in result.doc ? result.doc.value : null)
	        };
	      });
	    });
	  }
	
	  function onMapResultsReady(rows) {
	    var finalResults;
	    if (shouldReduce) {
	      finalResults = reduceView(view, rows, opts);
	    } else {
	      finalResults = {
	        total_rows: totalRows,
	        offset: skip,
	        rows: rows
	      };
	    }
	    if (opts.include_docs) {
	      var docIds = uniq(rows.map(rowToDocId));
	
	      return view.sourceDB.allDocs({
	        keys: docIds,
	        include_docs: true,
	        conflicts: opts.conflicts,
	        attachments: opts.attachments,
	        binary: opts.binary
	      }).then(function (allDocsRes) {
	        var docIdsToDocs = {};
	        allDocsRes.rows.forEach(function (row) {
	          if (row.doc) {
	            docIdsToDocs['$' + row.id] = row.doc;
	          }
	        });
	        rows.forEach(function (row) {
	          var docId = rowToDocId(row);
	          var doc = docIdsToDocs['$' + docId];
	          if (doc) {
	            row.doc = doc;
	          }
	        });
	        return finalResults;
	      });
	    } else {
	      return finalResults;
	    }
	  }
	
	  if (typeof opts.keys !== 'undefined') {
	    var keys = opts.keys;
	    var fetchPromises = keys.map(function (key) {
	      var viewOpts = {
	        startkey : toIndexableString([key]),
	        endkey   : toIndexableString([key, {}])
	      };
	      return fetchFromView(viewOpts);
	    });
	    return PouchPromise.all(fetchPromises).then(flatten).then(onMapResultsReady);
	  } else { // normal query, no 'keys'
	    var viewOpts = {
	      descending : opts.descending
	    };
	    if (opts.start_key) {
	        opts.startkey = opts.start_key;
	    }
	    if (opts.end_key) {
	        opts.endkey = opts.end_key;
	    }
	    if (typeof opts.startkey !== 'undefined') {
	      viewOpts.startkey = opts.descending ?
	        toIndexableString([opts.startkey, {}]) :
	        toIndexableString([opts.startkey]);
	    }
	    if (typeof opts.endkey !== 'undefined') {
	      var inclusiveEnd = opts.inclusive_end !== false;
	      if (opts.descending) {
	        inclusiveEnd = !inclusiveEnd;
	      }
	
	      viewOpts.endkey = toIndexableString(
	        inclusiveEnd ? [opts.endkey, {}] : [opts.endkey]);
	    }
	    if (typeof opts.key !== 'undefined') {
	      var keyStart = toIndexableString([opts.key]);
	      var keyEnd = toIndexableString([opts.key, {}]);
	      if (viewOpts.descending) {
	        viewOpts.endkey = keyStart;
	        viewOpts.startkey = keyEnd;
	      } else {
	        viewOpts.startkey = keyStart;
	        viewOpts.endkey = keyEnd;
	      }
	    }
	    if (!shouldReduce) {
	      if (typeof opts.limit === 'number') {
	        viewOpts.limit = opts.limit;
	      }
	      viewOpts.skip = skip;
	    }
	    return fetchFromView(viewOpts).then(onMapResultsReady);
	  }
	}
	
	function httpViewCleanup(db) {
	  return db.request({
	    method: 'POST',
	    url: '_view_cleanup'
	  });
	}
	
	function localViewCleanup(db) {
	  return db.get('_local/mrviews').then(function (metaDoc) {
	    var docsToViews = {};
	    Object.keys(metaDoc.views).forEach(function (fullViewName) {
	      var parts = parseViewName(fullViewName);
	      var designDocName = '_design/' + parts[0];
	      var viewName = parts[1];
	      docsToViews[designDocName] = docsToViews[designDocName] || {};
	      docsToViews[designDocName][viewName] = true;
	    });
	    var opts = {
	      keys : Object.keys(docsToViews),
	      include_docs : true
	    };
	    return db.allDocs(opts).then(function (res) {
	      var viewsToStatus = {};
	      res.rows.forEach(function (row) {
	        var ddocName = row.key.substring(8);
	        Object.keys(docsToViews[row.key]).forEach(function (viewName) {
	          var fullViewName = ddocName + '/' + viewName;
	          /* istanbul ignore if */
	          if (!metaDoc.views[fullViewName]) {
	            // new format, without slashes, to support PouchDB 2.2.0
	            // migration test in pouchdb's browser.migration.js verifies this
	            fullViewName = viewName;
	          }
	          var viewDBNames = Object.keys(metaDoc.views[fullViewName]);
	          // design doc deleted, or view function nonexistent
	          var statusIsGood = row.doc && row.doc.views &&
	            row.doc.views[viewName];
	          viewDBNames.forEach(function (viewDBName) {
	            viewsToStatus[viewDBName] =
	              viewsToStatus[viewDBName] || statusIsGood;
	          });
	        });
	      });
	      var dbsToDelete = Object.keys(viewsToStatus).filter(
	        function (viewDBName) { return !viewsToStatus[viewDBName]; });
	      var destroyPromises = dbsToDelete.map(function (viewDBName) {
	        return sequentialize(getQueue(viewDBName), function () {
	          return new db.constructor(viewDBName, db.__opts).destroy();
	        })();
	      });
	      return PouchPromise.all(destroyPromises).then(function () {
	        return {ok: true};
	      });
	    });
	  }, defaultsTo({ok: true}));
	}
	
	var viewCleanup = callbackify(function () {
	  var db = this;
	  if (db.type() === 'http') {
	    return httpViewCleanup(db);
	  }
	  /* istanbul ignore next */
	  if (typeof db._viewCleanup === 'function') {
	    return customViewCleanup(db);
	  }
	  return localViewCleanup(db);
	});
	
	function queryPromised(db, fun, opts) {
	  if (db.type() === 'http') {
	    return httpQuery(db, fun, opts);
	  }
	
	  /* istanbul ignore next */
	  if (typeof db._query === 'function') {
	    return customQuery(db, fun, opts);
	  }
	
	  if (typeof fun !== 'string') {
	    // temp_view
	    checkQueryParseError(opts, fun);
	
	    var createViewOpts = {
	      db : db,
	      viewName : 'temp_view/temp_view',
	      map : fun.map,
	      reduce : fun.reduce,
	      temporary : true
	    };
	    tempViewQueue.add(function () {
	      return createView(createViewOpts).then(function (view) {
	        function cleanup() {
	          return view.db.destroy();
	        }
	        return fin(updateView(view).then(function () {
	          return queryView(view, opts);
	        }), cleanup);
	      });
	    });
	    return tempViewQueue.finish();
	  } else {
	    // persistent view
	    var fullViewName = fun;
	    var parts = parseViewName(fullViewName);
	    var designDocName = parts[0];
	    var viewName = parts[1];
	    return db.get('_design/' + designDocName).then(function (doc) {
	      var fun = doc.views && doc.views[viewName];
	
	      if (!fun || typeof fun.map !== 'string') {
	        throw new NotFoundError('ddoc ' + designDocName +
	        ' has no view named ' + viewName);
	      }
	      checkQueryParseError(opts, fun);
	
	      var createViewOpts = {
	        db : db,
	        viewName : fullViewName,
	        map : fun.map,
	        reduce : fun.reduce
	      };
	      return createView(createViewOpts).then(function (view) {
	        if (opts.stale === 'ok' || opts.stale === 'update_after') {
	          if (opts.stale === 'update_after') {
	            process.nextTick(function () {
	              updateView(view);
	            });
	          }
	          return queryView(view, opts);
	        } else { // stale not ok
	          return updateView(view).then(function () {
	            return queryView(view, opts);
	          });
	        }
	      });
	    });
	  }
	}
	
	var query = function (fun, opts, callback) {
	  if (typeof opts === 'function') {
	    callback = opts;
	    opts = {};
	  }
	  opts = opts ? coerceOptions(opts) : {};
	
	  if (typeof fun === 'function') {
	    fun = {map : fun};
	  }
	
	  var db = this;
	  var promise = PouchPromise.resolve().then(function () {
	    return queryPromised(db, fun, opts);
	  });
	  promisedCallback(promise, callback);
	  return promise;
	};
	
	
	var mapreduce = {
	  query: query,
	  viewCleanup: viewCleanup
	};
	
	function isGenOne$1(rev) {
	  return /^1-/.test(rev);
	}
	
	function fileHasChanged(localDoc, remoteDoc, filename) {
	  return !localDoc._attachments ||
	         !localDoc._attachments[filename] ||
	         localDoc._attachments[filename].digest !== remoteDoc._attachments[filename].digest;
	}
	
	function getDocAttachments(db, doc) {
	  var filenames = Object.keys(doc._attachments);
	  return PouchPromise.all(filenames.map(function (filename) {
	    return db.getAttachment(doc._id, filename, {rev: doc._rev});
	  }));
	}
	
	function getDocAttachmentsFromTargetOrSource(target, src, doc) {
	  var doCheckForLocalAttachments = src.type() === 'http' && target.type() !== 'http';
	  var filenames = Object.keys(doc._attachments);
	
	  if (!doCheckForLocalAttachments) {
	    return getDocAttachments(src, doc);
	  }
	
	  return target.get(doc._id).then(function (localDoc) {
	    return PouchPromise.all(filenames.map(function (filename) {
	      if (fileHasChanged(localDoc, doc, filename)) {
	        return src.getAttachment(doc._id, filename);
	      }
	
	      return target.getAttachment(localDoc._id, filename);
	    }));
	  }).catch(function (error) {
	    /* istanbul ignore if */
	    if (error.status !== 404) {
	      throw error;
	    }
	
	    return getDocAttachments(src, doc);
	  });
	}
	
	function createBulkGetOpts(diffs) {
	  var requests = [];
	  Object.keys(diffs).forEach(function (id) {
	    var missingRevs = diffs[id].missing;
	    missingRevs.forEach(function (missingRev) {
	      requests.push({
	        id: id,
	        rev: missingRev
	      });
	    });
	  });
	
	  return {
	    docs: requests,
	    revs: true
	  };
	}
	
	//
	// Fetch all the documents from the src as described in the "diffs",
	// which is a mapping of docs IDs to revisions. If the state ever
	// changes to "cancelled", then the returned promise will be rejected.
	// Else it will be resolved with a list of fetched documents.
	//
	function getDocs(src, target, diffs, state) {
	  diffs = clone(diffs); // we do not need to modify this
	
	  var resultDocs = [],
	      ok = true;
	
	  function getAllDocs() {
	
	    var bulkGetOpts = createBulkGetOpts(diffs);
	
	    if (!bulkGetOpts.docs.length) { // optimization: skip empty requests
	      return;
	    }
	
	    return src.bulkGet(bulkGetOpts).then(function (bulkGetResponse) {
	      /* istanbul ignore if */
	      if (state.cancelled) {
	        throw new Error('cancelled');
	      }
	      return PouchPromise.all(bulkGetResponse.results.map(function (bulkGetInfo) {
	        return PouchPromise.all(bulkGetInfo.docs.map(function (doc) {
	          var remoteDoc = doc.ok;
	
	          if (doc.error) {
	            // when AUTO_COMPACTION is set, docs can be returned which look
	            // like this: {"missing":"1-7c3ac256b693c462af8442f992b83696"}
	            ok = false;
	          }
	
	          if (!remoteDoc || !remoteDoc._attachments) {
	            return remoteDoc;
	          }
	
	          return getDocAttachmentsFromTargetOrSource(target, src, remoteDoc).then(function (attachments) {
	            var filenames = Object.keys(remoteDoc._attachments);
	            attachments.forEach(function (attachment, i) {
	              var att = remoteDoc._attachments[filenames[i]];
	              delete att.stub;
	              delete att.length;
	              att.data = attachment;
	            });
	
	            return remoteDoc;
	          });
	        }));
	      }))
	
	      .then(function (results) {
	        resultDocs = resultDocs.concat(flatten(results).filter(Boolean));
	      });
	    });
	  }
	
	  function hasAttachments(doc) {
	    return doc._attachments && Object.keys(doc._attachments).length > 0;
	  }
	
	  function fetchRevisionOneDocs(ids) {
	    // Optimization: fetch gen-1 docs and attachments in
	    // a single request using _all_docs
	    return src.allDocs({
	      keys: ids,
	      include_docs: true
	    }).then(function (res) {
	      if (state.cancelled) {
	        throw new Error('cancelled');
	      }
	      res.rows.forEach(function (row) {
	        if (row.deleted || !row.doc || !isGenOne$1(row.value.rev) ||
	            hasAttachments(row.doc)) {
	          // if any of these conditions apply, we need to fetch using get()
	          return;
	        }
	
	        // the doc we got back from allDocs() is sufficient
	        resultDocs.push(row.doc);
	        delete diffs[row.id];
	      });
	    });
	  }
	
	  function getRevisionOneDocs() {
	    // filter out the generation 1 docs and get them
	    // leaving the non-generation one docs to be got otherwise
	    var ids = Object.keys(diffs).filter(function (id) {
	      var missing = diffs[id].missing;
	      return missing.length === 1 && isGenOne$1(missing[0]);
	    });
	    if (ids.length > 0) {
	      return fetchRevisionOneDocs(ids);
	    }
	  }
	
	  function returnResult() {
	    return { ok:ok, docs:resultDocs };
	  }
	
	  return PouchPromise.resolve()
	    .then(getRevisionOneDocs)
	    .then(getAllDocs)
	    .then(returnResult);
	}
	
	var CHECKPOINT_VERSION = 1;
	var REPLICATOR = "pouchdb";
	// This is an arbitrary number to limit the
	// amount of replication history we save in the checkpoint.
	// If we save too much, the checkpoing docs will become very big,
	// if we save fewer, we'll run a greater risk of having to
	// read all the changes from 0 when checkpoint PUTs fail
	// CouchDB 2.0 has a more involved history pruning,
	// but let's go for the simple version for now.
	var CHECKPOINT_HISTORY_SIZE = 5;
	var LOWEST_SEQ = 0;
	
	function updateCheckpoint(db, id, checkpoint, session, returnValue) {
	  return db.get(id).catch(function (err) {
	    if (err.status === 404) {
	      if (db.type() === 'http') {
	        explainError(
	          404, 'PouchDB is just checking if a remote checkpoint exists.'
	        );
	      }
	      return {
	        session_id: session,
	        _id: id,
	        history: [],
	        replicator: REPLICATOR,
	        version: CHECKPOINT_VERSION
	      };
	    }
	    throw err;
	  }).then(function (doc) {
	    if (returnValue.cancelled) {
	      return;
	    }
	
	    // if the checkpoint has not changed, do not update
	    if (doc.last_seq === checkpoint) {
	      return;
	    }
	
	    // Filter out current entry for this replication
	    doc.history = (doc.history || []).filter(function (item) {
	      return item.session_id !== session;
	    });
	
	    // Add the latest checkpoint to history
	    doc.history.unshift({
	      last_seq: checkpoint,
	      session_id: session
	    });
	
	    // Just take the last pieces in history, to
	    // avoid really big checkpoint docs.
	    // see comment on history size above
	    doc.history = doc.history.slice(0, CHECKPOINT_HISTORY_SIZE);
	
	    doc.version = CHECKPOINT_VERSION;
	    doc.replicator = REPLICATOR;
	
	    doc.session_id = session;
	    doc.last_seq = checkpoint;
	
	    return db.put(doc).catch(function (err) {
	      if (err.status === 409) {
	        // retry; someone is trying to write a checkpoint simultaneously
	        return updateCheckpoint(db, id, checkpoint, session, returnValue);
	      }
	      throw err;
	    });
	  });
	}
	
	function Checkpointer(src, target, id, returnValue) {
	  this.src = src;
	  this.target = target;
	  this.id = id;
	  this.returnValue = returnValue;
	}
	
	Checkpointer.prototype.writeCheckpoint = function (checkpoint, session) {
	  var self = this;
	  return this.updateTarget(checkpoint, session).then(function () {
	    return self.updateSource(checkpoint, session);
	  });
	};
	
	Checkpointer.prototype.updateTarget = function (checkpoint, session) {
	  return updateCheckpoint(this.target, this.id, checkpoint,
	    session, this.returnValue);
	};
	
	Checkpointer.prototype.updateSource = function (checkpoint, session) {
	  var self = this;
	  if (this.readOnlySource) {
	    return PouchPromise.resolve(true);
	  }
	  return updateCheckpoint(this.src, this.id, checkpoint,
	    session, this.returnValue)
	    .catch(function (err) {
	      if (isForbiddenError(err)) {
	        self.readOnlySource = true;
	        return true;
	      }
	      throw err;
	    });
	};
	
	var comparisons = {
	  "undefined": function (targetDoc, sourceDoc) {
	    // This is the previous comparison function
	    if (collate(targetDoc.last_seq, sourceDoc.last_seq) === 0) {
	      return sourceDoc.last_seq;
	    }
	    /* istanbul ignore next */
	    return 0;
	  },
	  "1": function (targetDoc, sourceDoc) {
	    // This is the comparison function ported from CouchDB
	    return compareReplicationLogs(sourceDoc, targetDoc).last_seq;
	  }
	};
	
	Checkpointer.prototype.getCheckpoint = function () {
	  var self = this;
	  return self.target.get(self.id).then(function (targetDoc) {
	    if (self.readOnlySource) {
	      return PouchPromise.resolve(targetDoc.last_seq);
	    }
	
	    return self.src.get(self.id).then(function (sourceDoc) {
	      // Since we can't migrate an old version doc to a new one
	      // (no session id), we just go with the lowest seq in this case
	      /* istanbul ignore if */
	      if (targetDoc.version !== sourceDoc.version) {
	        return LOWEST_SEQ;
	      }
	
	      var version;
	      if (targetDoc.version) {
	        version = targetDoc.version.toString();
	      } else {
	        version = "undefined";
	      }
	
	      if (version in comparisons) {
	        return comparisons[version](targetDoc, sourceDoc);
	      }
	      /* istanbul ignore next */
	      return LOWEST_SEQ;
	    }, function (err) {
	      if (err.status === 404 && targetDoc.last_seq) {
	        return self.src.put({
	          _id: self.id,
	          last_seq: LOWEST_SEQ
	        }).then(function () {
	          return LOWEST_SEQ;
	        }, function (err) {
	          if (isForbiddenError(err)) {
	            self.readOnlySource = true;
	            return targetDoc.last_seq;
	          }
	          /* istanbul ignore next */
	          return LOWEST_SEQ;
	        });
	      }
	      throw err;
	    });
	  }).catch(function (err) {
	    if (err.status !== 404) {
	      throw err;
	    }
	    return LOWEST_SEQ;
	  });
	};
	// This checkpoint comparison is ported from CouchDBs source
	// they come from here:
	// https://github.com/apache/couchdb-couch-replicator/blob/master/src/couch_replicator.erl#L863-L906
	
	function compareReplicationLogs(srcDoc, tgtDoc) {
	  if (srcDoc.session_id === tgtDoc.session_id) {
	    return {
	      last_seq: srcDoc.last_seq,
	      history: srcDoc.history
	    };
	  }
	
	  return compareReplicationHistory(srcDoc.history, tgtDoc.history);
	}
	
	function compareReplicationHistory(sourceHistory, targetHistory) {
	  // the erlang loop via function arguments is not so easy to repeat in JS
	  // therefore, doing this as recursion
	  var S = sourceHistory[0];
	  var sourceRest = sourceHistory.slice(1);
	  var T = targetHistory[0];
	  var targetRest = targetHistory.slice(1);
	
	  if (!S || targetHistory.length === 0) {
	    return {
	      last_seq: LOWEST_SEQ,
	      history: []
	    };
	  }
	
	  var sourceId = S.session_id;
	  /* istanbul ignore if */
	  if (hasSessionId(sourceId, targetHistory)) {
	    return {
	      last_seq: S.last_seq,
	      history: sourceHistory
	    };
	  }
	
	  var targetId = T.session_id;
	  if (hasSessionId(targetId, sourceRest)) {
	    return {
	      last_seq: T.last_seq,
	      history: targetRest
	    };
	  }
	
	  return compareReplicationHistory(sourceRest, targetRest);
	}
	
	function hasSessionId(sessionId, history) {
	  var props = history[0];
	  var rest = history.slice(1);
	
	  if (!sessionId || history.length === 0) {
	    return false;
	  }
	
	  if (sessionId === props.session_id) {
	    return true;
	  }
	
	  return hasSessionId(sessionId, rest);
	}
	
	function isForbiddenError(err) {
	  return typeof err.status === 'number' && Math.floor(err.status / 100) === 4;
	}
	
	var STARTING_BACK_OFF = 0;
	
	function backOff(opts, returnValue, error, callback) {
	  if (opts.retry === false) {
	    returnValue.emit('error', error);
	    returnValue.removeAllListeners();
	    return;
	  }
	  if (typeof opts.back_off_function !== 'function') {
	    opts.back_off_function = defaultBackOff;
	  }
	  returnValue.emit('requestError', error);
	  if (returnValue.state === 'active' || returnValue.state === 'pending') {
	    returnValue.emit('paused', error);
	    returnValue.state = 'stopped';
	    var backOffSet = function backoffTimeSet() {
	      opts.current_back_off = STARTING_BACK_OFF;
	    };
	    var removeBackOffSetter = function removeBackOffTimeSet() {
	      returnValue.removeListener('active', backOffSet);
	    };
	    returnValue.once('paused', removeBackOffSetter);
	    returnValue.once('active', backOffSet);
	  }
	
	  opts.current_back_off = opts.current_back_off || STARTING_BACK_OFF;
	  opts.current_back_off = opts.back_off_function(opts.current_back_off);
	  setTimeout(callback, opts.current_back_off);
	}
	
	function sortObjectPropertiesByKey(queryParams) {
	  return Object.keys(queryParams).sort(collate).reduce(function (result, key) {
	    result[key] = queryParams[key];
	    return result;
	  }, {});
	}
	
	// Generate a unique id particular to this replication.
	// Not guaranteed to align perfectly with CouchDB's rep ids.
	function generateReplicationId(src, target, opts) {
	  var docIds = opts.doc_ids ? opts.doc_ids.sort(collate) : '';
	  var filterFun = opts.filter ? opts.filter.toString() : '';
	  var queryParams = '';
	  var filterViewName =  '';
	
	  if (opts.filter && opts.query_params) {
	    queryParams = JSON.stringify(sortObjectPropertiesByKey(opts.query_params));
	  }
	
	  if (opts.filter && opts.filter === '_view') {
	    filterViewName = opts.view.toString();
	  }
	
	  return PouchPromise.all([src.id(), target.id()]).then(function (res) {
	    var queryData = res[0] + res[1] + filterFun + filterViewName +
	      queryParams + docIds;
	    return new PouchPromise(function (resolve) {
	      binaryMd5(queryData, resolve);
	    });
	  }).then(function (md5sum) {
	    // can't use straight-up md5 alphabet, because
	    // the char '/' is interpreted as being for attachments,
	    // and + is also not url-safe
	    md5sum = md5sum.replace(/\//g, '.').replace(/\+/g, '_');
	    return '_local/' + md5sum;
	  });
	}
	
	function replicate$1(src, target, opts, returnValue, result) {
	  var batches = [];               // list of batches to be processed
	  var currentBatch;               // the batch currently being processed
	  var pendingBatch = {
	    seq: 0,
	    changes: [],
	    docs: []
	  }; // next batch, not yet ready to be processed
	  var writingCheckpoint = false;  // true while checkpoint is being written
	  var changesCompleted = false;   // true when all changes received
	  var replicationCompleted = false; // true when replication has completed
	  var last_seq = 0;
	  var continuous = opts.continuous || opts.live || false;
	  var batch_size = opts.batch_size || 100;
	  var batches_limit = opts.batches_limit || 10;
	  var changesPending = false;     // true while src.changes is running
	  var doc_ids = opts.doc_ids;
	  var repId;
	  var checkpointer;
	  var changedDocs = [];
	  // Like couchdb, every replication gets a unique session id
	  var session = uuid();
	
	  result = result || {
	    ok: true,
	    start_time: new Date(),
	    docs_read: 0,
	    docs_written: 0,
	    doc_write_failures: 0,
	    errors: []
	  };
	
	  var changesOpts = {};
	  returnValue.ready(src, target);
	
	  function initCheckpointer() {
	    if (checkpointer) {
	      return PouchPromise.resolve();
	    }
	    return generateReplicationId(src, target, opts).then(function (res) {
	      repId = res;
	      checkpointer = new Checkpointer(src, target, repId, returnValue);
	    });
	  }
	
	  function writeDocs() {
	    changedDocs = [];
	
	    if (currentBatch.docs.length === 0) {
	      return;
	    }
	    var docs = currentBatch.docs;
	    var bulkOpts = {timeout: opts.timeout};
	    return target.bulkDocs({docs: docs, new_edits: false}, bulkOpts).then(function (res) {
	      /* istanbul ignore if */
	      if (returnValue.cancelled) {
	        completeReplication();
	        throw new Error('cancelled');
	      }
	
	      // `res` doesn't include full documents (which live in `docs`), so we create a map of 
	      // (id -> error), and check for errors while iterating over `docs`
	      var errorsById = Object.create(null);
	      res.forEach(function (res) {
	        if (res.error) {
	          errorsById[res.id] = res;
	        }
	      });
	
	      var errorsNo = Object.keys(errorsById).length;
	      result.doc_write_failures += errorsNo;
	      result.docs_written += docs.length - errorsNo;
	
	      docs.forEach(function (doc) {
	        var error = errorsById[doc._id];
	        if (error) {
	          result.errors.push(error);
	          if (error.name === 'unauthorized' || error.name === 'forbidden') {
	            returnValue.emit('denied', clone(error));
	          } else {
	            throw error;
	          }
	        } else {
	          changedDocs.push(doc);
	        }
	      });
	
	    }, function (err) {
	      result.doc_write_failures += docs.length;
	      throw err;
	    });
	  }
	
	  function finishBatch() {
	    if (currentBatch.error) {
	      throw new Error('There was a problem getting docs.');
	    }
	    result.last_seq = last_seq = currentBatch.seq;
	    var outResult = clone(result);
	    if (changedDocs.length) {
	      outResult.docs = changedDocs;
	      returnValue.emit('change', outResult);
	    }
	    writingCheckpoint = true;
	    return checkpointer.writeCheckpoint(currentBatch.seq,
	        session).then(function () {
	      writingCheckpoint = false;
	      /* istanbul ignore if */
	      if (returnValue.cancelled) {
	        completeReplication();
	        throw new Error('cancelled');
	      }
	      currentBatch = undefined;
	      getChanges();
	    }).catch(function (err) {
	      onCheckpointError(err);
	      throw err;
	    });
	  }
	
	  function getDiffs() {
	    var diff = {};
	    currentBatch.changes.forEach(function (change) {
	      // Couchbase Sync Gateway emits these, but we can ignore them
	      /* istanbul ignore if */
	      if (change.id === "_user/") {
	        return;
	      }
	      diff[change.id] = change.changes.map(function (x) {
	        return x.rev;
	      });
	    });
	    return target.revsDiff(diff).then(function (diffs) {
	      /* istanbul ignore if */
	      if (returnValue.cancelled) {
	        completeReplication();
	        throw new Error('cancelled');
	      }
	      // currentBatch.diffs elements are deleted as the documents are written
	      currentBatch.diffs = diffs;
	    });
	  }
	
	  function getBatchDocs() {
	    return getDocs(src, target, currentBatch.diffs, returnValue).then(function (got) {
	      currentBatch.error = !got.ok;
	      got.docs.forEach(function (doc) {
	        delete currentBatch.diffs[doc._id];
	        result.docs_read++;
	        currentBatch.docs.push(doc);
	      });
	    });
	  }
	
	  function startNextBatch() {
	    if (returnValue.cancelled || currentBatch) {
	      return;
	    }
	    if (batches.length === 0) {
	      processPendingBatch(true);
	      return;
	    }
	    currentBatch = batches.shift();
	    getDiffs()
	      .then(getBatchDocs)
	      .then(writeDocs)
	      .then(finishBatch)
	      .then(startNextBatch)
	      .catch(function (err) {
	        abortReplication('batch processing terminated with error', err);
	      });
	  }
	
	
	  function processPendingBatch(immediate) {
	    if (pendingBatch.changes.length === 0) {
	      if (batches.length === 0 && !currentBatch) {
	        if ((continuous && changesOpts.live) || changesCompleted) {
	          returnValue.state = 'pending';
	          returnValue.emit('paused');
	        }
	        if (changesCompleted) {
	          completeReplication();
	        }
	      }
	      return;
	    }
	    if (
	      immediate ||
	      changesCompleted ||
	      pendingBatch.changes.length >= batch_size
	    ) {
	      batches.push(pendingBatch);
	      pendingBatch = {
	        seq: 0,
	        changes: [],
	        docs: []
	      };
	      if (returnValue.state === 'pending' || returnValue.state === 'stopped') {
	        returnValue.state = 'active';
	        returnValue.emit('active');
	      }
	      startNextBatch();
	    }
	  }
	
	
	  function abortReplication(reason, err) {
	    if (replicationCompleted) {
	      return;
	    }
	    if (!err.message) {
	      err.message = reason;
	    }
	    result.ok = false;
	    result.status = 'aborting';
	    batches = [];
	    pendingBatch = {
	      seq: 0,
	      changes: [],
	      docs: []
	    };
	    completeReplication(err);
	  }
	
	
	  function completeReplication(fatalError) {
	    if (replicationCompleted) {
	      return;
	    }
	    /* istanbul ignore if */
	    if (returnValue.cancelled) {
	      result.status = 'cancelled';
	      if (writingCheckpoint) {
	        return;
	      }
	    }
	    result.status = result.status || 'complete';
	    result.end_time = new Date();
	    result.last_seq = last_seq;
	    replicationCompleted = true;
	
	    if (fatalError) {
	      fatalError.result = result;
	
	      if (fatalError.name === 'unauthorized' || fatalError.name === 'forbidden') {
	        returnValue.emit('error', fatalError);
	        returnValue.removeAllListeners();
	      } else {
	        backOff(opts, returnValue, fatalError, function () {
	          replicate$1(src, target, opts, returnValue);
	        });
	      }
	    } else {
	      returnValue.emit('complete', result);
	      returnValue.removeAllListeners();
	    }
	  }
	
	
	  function onChange(change) {
	    /* istanbul ignore if */
	    if (returnValue.cancelled) {
	      return completeReplication();
	    }
	    var filter = filterChange(opts)(change);
	    if (!filter) {
	      return;
	    }
	    pendingBatch.seq = change.seq;
	    pendingBatch.changes.push(change);
	    processPendingBatch(batches.length === 0 && changesOpts.live);
	  }
	
	
	  function onChangesComplete(changes) {
	    changesPending = false;
	    /* istanbul ignore if */
	    if (returnValue.cancelled) {
	      return completeReplication();
	    }
	
	    // if no results were returned then we're done,
	    // else fetch more
	    if (changes.results.length > 0) {
	      changesOpts.since = changes.last_seq;
	      getChanges();
	      processPendingBatch(true);
	    } else {
	
	      var complete = function () {
	        if (continuous) {
	          changesOpts.live = true;
	          getChanges();
	        } else {
	          changesCompleted = true;
	        }
	        processPendingBatch(true);
	      };
	
	      // update the checkpoint so we start from the right seq next time
	      if (!currentBatch && changes.results.length === 0) {
	        writingCheckpoint = true;
	        checkpointer.writeCheckpoint(changes.last_seq,
	            session).then(function () {
	          writingCheckpoint = false;
	          result.last_seq = last_seq = changes.last_seq;
	          complete();
	        })
	        .catch(onCheckpointError);
	      } else {
	        complete();
	      }
	    }
	  }
	
	
	  function onChangesError(err) {
	    changesPending = false;
	    /* istanbul ignore if */
	    if (returnValue.cancelled) {
	      return completeReplication();
	    }
	    abortReplication('changes rejected', err);
	  }
	
	
	  function getChanges() {
	    if (!(
	      !changesPending &&
	      !changesCompleted &&
	      batches.length < batches_limit
	      )) {
	      return;
	    }
	    changesPending = true;
	    function abortChanges() {
	      changes.cancel();
	    }
	    function removeListener() {
	      returnValue.removeListener('cancel', abortChanges);
	    }
	
	    if (returnValue._changes) { // remove old changes() and listeners
	      returnValue.removeListener('cancel', returnValue._abortChanges);
	      returnValue._changes.cancel();
	    }
	    returnValue.once('cancel', abortChanges);
	
	    var changes = src.changes(changesOpts)
	      .on('change', onChange);
	    changes.then(removeListener, removeListener);
	    changes.then(onChangesComplete)
	      .catch(onChangesError);
	
	    if (opts.retry) {
	      // save for later so we can cancel if necessary
	      returnValue._changes = changes;
	      returnValue._abortChanges = abortChanges;
	    }
	  }
	
	
	  function startChanges() {
	    initCheckpointer().then(function () {
	      /* istanbul ignore if */
	      if (returnValue.cancelled) {
	        completeReplication();
	        return;
	      }
	      return checkpointer.getCheckpoint().then(function (checkpoint) {
	        last_seq = checkpoint;
	        changesOpts = {
	          since: last_seq,
	          limit: batch_size,
	          batch_size: batch_size,
	          style: 'all_docs',
	          doc_ids: doc_ids,
	          return_docs: true // required so we know when we're done
	        };
	        if (opts.filter) {
	          if (typeof opts.filter !== 'string') {
	            // required for the client-side filter in onChange
	            changesOpts.include_docs = true;
	          } else { // ddoc filter
	            changesOpts.filter = opts.filter;
	          }
	        }
	        if ('heartbeat' in opts) {
	          changesOpts.heartbeat = opts.heartbeat;
	        }
	        if ('timeout' in opts) {
	          changesOpts.timeout = opts.timeout;
	        }
	        if (opts.query_params) {
	          changesOpts.query_params = opts.query_params;
	        }
	        if (opts.view) {
	          changesOpts.view = opts.view;
	        }
	        getChanges();
	      });
	    }).catch(function (err) {
	      abortReplication('getCheckpoint rejected with ', err);
	    });
	  }
	
	  /* istanbul ignore next */
	  function onCheckpointError(err) {
	    writingCheckpoint = false;
	    abortReplication('writeCheckpoint completed with error', err);
	  }
	
	  /* istanbul ignore if */
	  if (returnValue.cancelled) { // cancelled immediately
	    completeReplication();
	    return;
	  }
	
	  if (!returnValue._addedListeners) {
	    returnValue.once('cancel', completeReplication);
	
	    if (typeof opts.complete === 'function') {
	      returnValue.once('error', opts.complete);
	      returnValue.once('complete', function (result) {
	        opts.complete(null, result);
	      });
	    }
	    returnValue._addedListeners = true;
	  }
	
	  if (typeof opts.since === 'undefined') {
	    startChanges();
	  } else {
	    initCheckpointer().then(function () {
	      writingCheckpoint = true;
	      return checkpointer.writeCheckpoint(opts.since, session);
	    }).then(function () {
	      writingCheckpoint = false;
	      /* istanbul ignore if */
	      if (returnValue.cancelled) {
	        completeReplication();
	        return;
	      }
	      last_seq = opts.since;
	      startChanges();
	    }).catch(onCheckpointError);
	  }
	}
	
	// We create a basic promise so the caller can cancel the replication possibly
	// before we have actually started listening to changes etc
	inherits(Replication, events.EventEmitter);
	function Replication() {
	  events.EventEmitter.call(this);
	  this.cancelled = false;
	  this.state = 'pending';
	  var self = this;
	  var promise = new PouchPromise(function (fulfill, reject) {
	    self.once('complete', fulfill);
	    self.once('error', reject);
	  });
	  self.then = function (resolve, reject) {
	    return promise.then(resolve, reject);
	  };
	  self.catch = function (reject) {
	    return promise.catch(reject);
	  };
	  // As we allow error handling via "error" event as well,
	  // put a stub in here so that rejecting never throws UnhandledError.
	  self.catch(function () {});
	}
	
	Replication.prototype.cancel = function () {
	  this.cancelled = true;
	  this.state = 'cancelled';
	  this.emit('cancel');
	};
	
	Replication.prototype.ready = function (src, target) {
	  var self = this;
	  if (self._readyCalled) {
	    return;
	  }
	  self._readyCalled = true;
	
	  function onDestroy() {
	    self.cancel();
	  }
	  src.once('destroyed', onDestroy);
	  target.once('destroyed', onDestroy);
	  function cleanup() {
	    src.removeListener('destroyed', onDestroy);
	    target.removeListener('destroyed', onDestroy);
	  }
	  self.once('complete', cleanup);
	};
	
	function toPouch(db, opts) {
	  var PouchConstructor = opts.PouchConstructor;
	  if (typeof db === 'string') {
	    return new PouchConstructor(db, opts);
	  } else {
	    return db;
	  }
	}
	
	function replicate(src, target, opts, callback) {
	
	  if (typeof opts === 'function') {
	    callback = opts;
	    opts = {};
	  }
	  if (typeof opts === 'undefined') {
	    opts = {};
	  }
	
	  if (opts.doc_ids && !Array.isArray(opts.doc_ids)) {
	    throw createError(BAD_REQUEST,
	                       "`doc_ids` filter parameter is not a list.");
	  }
	
	  opts.complete = callback;
	  opts = clone(opts);
	  opts.continuous = opts.continuous || opts.live;
	  opts.retry = ('retry' in opts) ? opts.retry : false;
	  /*jshint validthis:true */
	  opts.PouchConstructor = opts.PouchConstructor || this;
	  var replicateRet = new Replication(opts);
	  var srcPouch = toPouch(src, opts);
	  var targetPouch = toPouch(target, opts);
	  replicate$1(srcPouch, targetPouch, opts, replicateRet);
	  return replicateRet;
	}
	
	inherits(Sync, events.EventEmitter);
	function sync(src, target, opts, callback) {
	  if (typeof opts === 'function') {
	    callback = opts;
	    opts = {};
	  }
	  if (typeof opts === 'undefined') {
	    opts = {};
	  }
	  opts = clone(opts);
	  /*jshint validthis:true */
	  opts.PouchConstructor = opts.PouchConstructor || this;
	  src = toPouch(src, opts);
	  target = toPouch(target, opts);
	  return new Sync(src, target, opts, callback);
	}
	
	function Sync(src, target, opts, callback) {
	  var self = this;
	  this.canceled = false;
	
	  var optsPush = opts.push ? jsExtend.extend({}, opts, opts.push) : opts;
	  var optsPull = opts.pull ? jsExtend.extend({}, opts, opts.pull) : opts;
	
	  this.push = replicate(src, target, optsPush);
	  this.pull = replicate(target, src, optsPull);
	
	  this.pushPaused = true;
	  this.pullPaused = true;
	
	  function pullChange(change) {
	    self.emit('change', {
	      direction: 'pull',
	      change: change
	    });
	  }
	  function pushChange(change) {
	    self.emit('change', {
	      direction: 'push',
	      change: change
	    });
	  }
	  function pushDenied(doc) {
	    self.emit('denied', {
	      direction: 'push',
	      doc: doc
	    });
	  }
	  function pullDenied(doc) {
	    self.emit('denied', {
	      direction: 'pull',
	      doc: doc
	    });
	  }
	  function pushPaused() {
	    self.pushPaused = true;
	    /* istanbul ignore if */
	    if (self.pullPaused) {
	      self.emit('paused');
	    }
	  }
	  function pullPaused() {
	    self.pullPaused = true;
	    /* istanbul ignore if */
	    if (self.pushPaused) {
	      self.emit('paused');
	    }
	  }
	  function pushActive() {
	    self.pushPaused = false;
	    /* istanbul ignore if */
	    if (self.pullPaused) {
	      self.emit('active', {
	        direction: 'push'
	      });
	    }
	  }
	  function pullActive() {
	    self.pullPaused = false;
	    /* istanbul ignore if */
	    if (self.pushPaused) {
	      self.emit('active', {
	        direction: 'pull'
	      });
	    }
	  }
	
	  var removed = {};
	
	  function removeAll(type) { // type is 'push' or 'pull'
	    return function (event, func) {
	      var isChange = event === 'change' &&
	        (func === pullChange || func === pushChange);
	      var isDenied = event === 'denied' &&
	        (func === pullDenied || func === pushDenied);
	      var isPaused = event === 'paused' &&
	        (func === pullPaused || func === pushPaused);
	      var isActive = event === 'active' &&
	        (func === pullActive || func === pushActive);
	
	      if (isChange || isDenied || isPaused || isActive) {
	        if (!(event in removed)) {
	          removed[event] = {};
	        }
	        removed[event][type] = true;
	        if (Object.keys(removed[event]).length === 2) {
	          // both push and pull have asked to be removed
	          self.removeAllListeners(event);
	        }
	      }
	    };
	  }
	
	  if (opts.live) {
	    this.push.on('complete', self.pull.cancel.bind(self.pull));
	    this.pull.on('complete', self.push.cancel.bind(self.push));
	  }
	
	  this.on('newListener', function (event) {
	    if (event === 'change') {
	      self.pull.on('change', pullChange);
	      self.push.on('change', pushChange);
	    } else if (event === 'denied') {
	      self.pull.on('denied', pullDenied);
	      self.push.on('denied', pushDenied);
	    } else if (event === 'active') {
	      self.pull.on('active', pullActive);
	      self.push.on('active', pushActive);
	    } else if (event === 'paused') {
	      self.pull.on('paused', pullPaused);
	      self.push.on('paused', pushPaused);
	    }
	  });
	
	  this.on('removeListener', function (event) {
	    if (event === 'change') {
	      self.pull.removeListener('change', pullChange);
	      self.push.removeListener('change', pushChange);
	    } else if (event === 'denied') {
	      self.pull.removeListener('denied', pullDenied);
	      self.push.removeListener('denied', pushDenied);
	    } else if (event === 'active') {
	      self.pull.removeListener('active', pullActive);
	      self.push.removeListener('active', pushActive);
	    } else if (event === 'paused') {
	      self.pull.removeListener('paused', pullPaused);
	      self.push.removeListener('paused', pushPaused);
	    }
	  });
	
	  this.pull.on('removeListener', removeAll('pull'));
	  this.push.on('removeListener', removeAll('push'));
	
	  var promise = PouchPromise.all([
	    this.push,
	    this.pull
	  ]).then(function (resp) {
	    var out = {
	      push: resp[0],
	      pull: resp[1]
	    };
	    self.emit('complete', out);
	    if (callback) {
	      callback(null, out);
	    }
	    self.removeAllListeners();
	    return out;
	  }, function (err) {
	    self.cancel();
	    if (callback) {
	      // if there's a callback, then the callback can receive
	      // the error event
	      callback(err);
	    } else {
	      // if there's no callback, then we're safe to emit an error
	      // event, which would otherwise throw an unhandled error
	      // due to 'error' being a special event in EventEmitters
	      self.emit('error', err);
	    }
	    self.removeAllListeners();
	    if (callback) {
	      // no sense throwing if we're already emitting an 'error' event
	      throw err;
	    }
	  });
	
	  this.then = function (success, err) {
	    return promise.then(success, err);
	  };
	
	  this.catch = function (err) {
	    return promise.catch(err);
	  };
	}
	
	Sync.prototype.cancel = function () {
	  if (!this.canceled) {
	    this.canceled = true;
	    this.push.cancel();
	    this.pull.cancel();
	  }
	};
	
	function replication(PouchDB) {
	  PouchDB.replicate = replicate;
	  PouchDB.sync = sync;
	
	  Object.defineProperty(PouchDB.prototype, 'replicate', {
	    get: function () {
	      var self = this;
	      return {
	        from: function (other, opts, callback) {
	          return self.constructor.replicate(other, self, opts, callback);
	        },
	        to: function (other, opts, callback) {
	          return self.constructor.replicate(self, other, opts, callback);
	        }
	      };
	    }
	  });
	
	  PouchDB.prototype.sync = function (dbName, opts, callback) {
	    return this.constructor.sync(this, dbName, opts, callback);
	  };
	}
	
	PouchDB.plugin(IDBPouch)
	  .plugin(WebSqlPouch)
	  .plugin(HttpPouch$1)
	  .plugin(mapreduce)
	  .plugin(replication);
	
	// Pull from src because pouchdb-node/pouchdb-browser themselves
	// are aggressively optimized and jsnext:main would normally give us this
	// aggressive bundle.
	
	module.exports = PouchDB;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294), (function() { return this; }())))

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	(function(factory) {
	  if(true) {
	    factory(exports);
	  } else {
	    factory(this);
	  }
	}).call(this, function(root) { 
	
	  var slice   = Array.prototype.slice,
	      each    = Array.prototype.forEach;
	
	  var extend = function(obj) {
	    if(typeof obj !== 'object') throw obj + ' is not an object' ;
	
	    var sources = slice.call(arguments, 1); 
	
	    each.call(sources, function(source) {
	      if(source) {
	        for(var prop in source) {
	          if(typeof source[prop] === 'object' && obj[prop]) {
	            extend.call(obj, obj[prop], source[prop]);
	          } else {
	            obj[prop] = source[prop];
	          }
	        } 
	      }
	    });
	
	    return obj;
	  }
	
	  root.extend = extend;
	});


/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = __webpack_require__(302);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();
	
	/**
	 * Colors.
	 */
	
	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];
	
	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */
	
	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}
	
	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */
	
	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};
	
	
	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */
	
	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;
	
	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);
	
	  if (!useColors) return args;
	
	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));
	
	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });
	
	  args.splice(lastC, 0, c);
	  return args;
	}
	
	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */
	
	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}
	
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */
	
	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}
	
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */
	
	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}
	
	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */
	
	exports.enable(load());
	
	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */
	
	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(303);
	
	/**
	 * The currently active debug mode names, and names to skip.
	 */
	
	exports.names = [];
	exports.skips = [];
	
	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */
	
	exports.formatters = {};
	
	/**
	 * Previously assigned color.
	 */
	
	var prevColor = 0;
	
	/**
	 * Previous log timestamp.
	 */
	
	var prevTime;
	
	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */
	
	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}
	
	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */
	
	function debug(namespace) {
	
	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;
	
	  // define the `enabled` version
	  function enabled() {
	
	    var self = enabled;
	
	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;
	
	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();
	
	    var args = Array.prototype.slice.call(arguments);
	
	    args[0] = exports.coerce(args[0]);
	
	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }
	
	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);
	
	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });
	
	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;
	
	  var fn = exports.enabled(namespace) ? enabled : disabled;
	
	  fn.namespace = namespace;
	
	  return fn;
	}
	
	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */
	
	function enable(namespaces) {
	  exports.save(namespaces);
	
	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;
	
	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}
	
	/**
	 * Disable debug output.
	 *
	 * @api public
	 */
	
	function disable() {
	  exports.enable('');
	}
	
	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */
	
	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */
	
	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 303 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */
	
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;
	
	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */
	
	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};
	
	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */
	
	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}
	
	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}
	
	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}
	
	/**
	 * Pluralization helper.
	 */
	
	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 304 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var immediate = __webpack_require__(306);
	
	/* istanbul ignore next */
	function INTERNAL() {}
	
	var handlers = {};
	
	var REJECTED = ['REJECTED'];
	var FULFILLED = ['FULFILLED'];
	var PENDING = ['PENDING'];
	
	module.exports = Promise;
	
	function Promise(resolver) {
	  if (typeof resolver !== 'function') {
	    throw new TypeError('resolver must be a function');
	  }
	  this.state = PENDING;
	  this.queue = [];
	  this.outcome = void 0;
	  if (resolver !== INTERNAL) {
	    safelyResolveThenable(this, resolver);
	  }
	}
	
	Promise.prototype["catch"] = function (onRejected) {
	  return this.then(null, onRejected);
	};
	Promise.prototype.then = function (onFulfilled, onRejected) {
	  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
	    typeof onRejected !== 'function' && this.state === REJECTED) {
	    return this;
	  }
	  var promise = new this.constructor(INTERNAL);
	  if (this.state !== PENDING) {
	    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
	    unwrap(promise, resolver, this.outcome);
	  } else {
	    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
	  }
	
	  return promise;
	};
	function QueueItem(promise, onFulfilled, onRejected) {
	  this.promise = promise;
	  if (typeof onFulfilled === 'function') {
	    this.onFulfilled = onFulfilled;
	    this.callFulfilled = this.otherCallFulfilled;
	  }
	  if (typeof onRejected === 'function') {
	    this.onRejected = onRejected;
	    this.callRejected = this.otherCallRejected;
	  }
	}
	QueueItem.prototype.callFulfilled = function (value) {
	  handlers.resolve(this.promise, value);
	};
	QueueItem.prototype.otherCallFulfilled = function (value) {
	  unwrap(this.promise, this.onFulfilled, value);
	};
	QueueItem.prototype.callRejected = function (value) {
	  handlers.reject(this.promise, value);
	};
	QueueItem.prototype.otherCallRejected = function (value) {
	  unwrap(this.promise, this.onRejected, value);
	};
	
	function unwrap(promise, func, value) {
	  immediate(function () {
	    var returnValue;
	    try {
	      returnValue = func(value);
	    } catch (e) {
	      return handlers.reject(promise, e);
	    }
	    if (returnValue === promise) {
	      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
	    } else {
	      handlers.resolve(promise, returnValue);
	    }
	  });
	}
	
	handlers.resolve = function (self, value) {
	  var result = tryCatch(getThen, value);
	  if (result.status === 'error') {
	    return handlers.reject(self, result.value);
	  }
	  var thenable = result.value;
	
	  if (thenable) {
	    safelyResolveThenable(self, thenable);
	  } else {
	    self.state = FULFILLED;
	    self.outcome = value;
	    var i = -1;
	    var len = self.queue.length;
	    while (++i < len) {
	      self.queue[i].callFulfilled(value);
	    }
	  }
	  return self;
	};
	handlers.reject = function (self, error) {
	  self.state = REJECTED;
	  self.outcome = error;
	  var i = -1;
	  var len = self.queue.length;
	  while (++i < len) {
	    self.queue[i].callRejected(error);
	  }
	  return self;
	};
	
	function getThen(obj) {
	  // Make sure we only access the accessor once as required by the spec
	  var then = obj && obj.then;
	  if (obj && typeof obj === 'object' && typeof then === 'function') {
	    return function appyThen() {
	      then.apply(obj, arguments);
	    };
	  }
	}
	
	function safelyResolveThenable(self, thenable) {
	  // Either fulfill, reject or reject with error
	  var called = false;
	  function onError(value) {
	    if (called) {
	      return;
	    }
	    called = true;
	    handlers.reject(self, value);
	  }
	
	  function onSuccess(value) {
	    if (called) {
	      return;
	    }
	    called = true;
	    handlers.resolve(self, value);
	  }
	
	  function tryToUnwrap() {
	    thenable(onSuccess, onError);
	  }
	
	  var result = tryCatch(tryToUnwrap);
	  if (result.status === 'error') {
	    onError(result.value);
	  }
	}
	
	function tryCatch(func, value) {
	  var out = {};
	  try {
	    out.value = func(value);
	    out.status = 'success';
	  } catch (e) {
	    out.status = 'error';
	    out.value = e;
	  }
	  return out;
	}
	
	Promise.resolve = resolve;
	function resolve(value) {
	  if (value instanceof this) {
	    return value;
	  }
	  return handlers.resolve(new this(INTERNAL), value);
	}
	
	Promise.reject = reject;
	function reject(reason) {
	  var promise = new this(INTERNAL);
	  return handlers.reject(promise, reason);
	}
	
	Promise.all = all;
	function all(iterable) {
	  var self = this;
	  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
	    return this.reject(new TypeError('must be an array'));
	  }
	
	  var len = iterable.length;
	  var called = false;
	  if (!len) {
	    return this.resolve([]);
	  }
	
	  var values = new Array(len);
	  var resolved = 0;
	  var i = -1;
	  var promise = new this(INTERNAL);
	
	  while (++i < len) {
	    allResolver(iterable[i], i);
	  }
	  return promise;
	  function allResolver(value, i) {
	    self.resolve(value).then(resolveFromAll, function (error) {
	      if (!called) {
	        called = true;
	        handlers.reject(promise, error);
	      }
	    });
	    function resolveFromAll(outValue) {
	      values[i] = outValue;
	      if (++resolved === len && !called) {
	        called = true;
	        handlers.resolve(promise, values);
	      }
	    }
	  }
	}
	
	Promise.race = race;
	function race(iterable) {
	  var self = this;
	  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
	    return this.reject(new TypeError('must be an array'));
	  }
	
	  var len = iterable.length;
	  var called = false;
	  if (!len) {
	    return this.resolve([]);
	  }
	
	  var i = -1;
	  var promise = new this(INTERNAL);
	
	  while (++i < len) {
	    resolver(iterable[i]);
	  }
	  return promise;
	  function resolver(value) {
	    self.resolve(value).then(function (response) {
	      if (!called) {
	        called = true;
	        handlers.resolve(promise, response);
	      }
	    }, function (error) {
	      if (!called) {
	        called = true;
	        handlers.reject(promise, error);
	      }
	    });
	  }
	}


/***/ },
/* 306 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	var Mutation = global.MutationObserver || global.WebKitMutationObserver;
	
	var scheduleDrain;
	
	{
	  if (Mutation) {
	    var called = 0;
	    var observer = new Mutation(nextTick);
	    var element = global.document.createTextNode('');
	    observer.observe(element, {
	      characterData: true
	    });
	    scheduleDrain = function () {
	      element.data = (called = ++called % 2);
	    };
	  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
	    var channel = new global.MessageChannel();
	    channel.port1.onmessage = nextTick;
	    scheduleDrain = function () {
	      channel.port2.postMessage(0);
	    };
	  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
	    scheduleDrain = function () {
	
	      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	      var scriptEl = global.document.createElement('script');
	      scriptEl.onreadystatechange = function () {
	        nextTick();
	
	        scriptEl.onreadystatechange = null;
	        scriptEl.parentNode.removeChild(scriptEl);
	        scriptEl = null;
	      };
	      global.document.documentElement.appendChild(scriptEl);
	    };
	  } else {
	    scheduleDrain = function () {
	      setTimeout(nextTick, 0);
	    };
	  }
	}
	
	var draining;
	var queue = [];
	//named nextTick for less confusing stack traces
	function nextTick() {
	  draining = true;
	  var i, oldQueue;
	  var len = queue.length;
	  while (len) {
	    oldQueue = queue;
	    queue = [];
	    i = -1;
	    while (++i < len) {
	      oldQueue[i]();
	    }
	    len = queue.length;
	  }
	  draining = false;
	}
	
	module.exports = immediate;
	function immediate(task) {
	  if (queue.push(task) === 1 && !draining) {
	    scheduleDrain();
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 307 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 308 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = argsArray;
	
	function argsArray(fun) {
	  return function () {
	    var len = arguments.length;
	    if (len) {
	      var args = [];
	      var i = -1;
	      while (++i < len) {
	        args[i] = arguments[i];
	      }
	      return fun.call(this, args);
	    } else {
	      return fun.call(this, []);
	    }
	  };
	}

/***/ },
/* 309 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.9.2
	(function() {
	  var hasProp = {}.hasOwnProperty,
	    slice = [].slice;
	
	  module.exports = function(source, scope) {
	    var key, keys, value, values;
	    keys = [];
	    values = [];
	    for (key in scope) {
	      if (!hasProp.call(scope, key)) continue;
	      value = scope[key];
	      if (key === 'this') {
	        continue;
	      }
	      keys.push(key);
	      values.push(value);
	    }
	    return Function.apply(null, slice.call(keys).concat([source])).apply(scope["this"], values);
	  };
	
	}).call(this);


/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	(function (factory) {
	    if (true) {
	        // Node/CommonJS
	        module.exports = factory();
	    } else if (typeof define === 'function' && define.amd) {
	        // AMD
	        define(factory);
	    } else {
	        // Browser globals (with support for web workers)
	        var glob;
	
	        try {
	            glob = window;
	        } catch (e) {
	            glob = self;
	        }
	
	        glob.SparkMD5 = factory();
	    }
	}(function (undefined) {
	
	    'use strict';
	
	    /*
	     * Fastest md5 implementation around (JKM md5).
	     * Credits: Joseph Myers
	     *
	     * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
	     * @see http://jsperf.com/md5-shootout/7
	     */
	
	    /* this function is much faster,
	      so if possible we use it. Some IEs
	      are the only ones I know of that
	      need the idiotic second function,
	      generated by an if clause.  */
	    var add32 = function (a, b) {
	        return (a + b) & 0xFFFFFFFF;
	    },
	        hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
	
	
	    function cmn(q, a, b, x, s, t) {
	        a = add32(add32(a, q), add32(x, t));
	        return add32((a << s) | (a >>> (32 - s)), b);
	    }
	
	    function ff(a, b, c, d, x, s, t) {
	        return cmn((b & c) | ((~b) & d), a, b, x, s, t);
	    }
	
	    function gg(a, b, c, d, x, s, t) {
	        return cmn((b & d) | (c & (~d)), a, b, x, s, t);
	    }
	
	    function hh(a, b, c, d, x, s, t) {
	        return cmn(b ^ c ^ d, a, b, x, s, t);
	    }
	
	    function ii(a, b, c, d, x, s, t) {
	        return cmn(c ^ (b | (~d)), a, b, x, s, t);
	    }
	
	    function md5cycle(x, k) {
	        var a = x[0],
	            b = x[1],
	            c = x[2],
	            d = x[3];
	
	        a = ff(a, b, c, d, k[0], 7, -680876936);
	        d = ff(d, a, b, c, k[1], 12, -389564586);
	        c = ff(c, d, a, b, k[2], 17, 606105819);
	        b = ff(b, c, d, a, k[3], 22, -1044525330);
	        a = ff(a, b, c, d, k[4], 7, -176418897);
	        d = ff(d, a, b, c, k[5], 12, 1200080426);
	        c = ff(c, d, a, b, k[6], 17, -1473231341);
	        b = ff(b, c, d, a, k[7], 22, -45705983);
	        a = ff(a, b, c, d, k[8], 7, 1770035416);
	        d = ff(d, a, b, c, k[9], 12, -1958414417);
	        c = ff(c, d, a, b, k[10], 17, -42063);
	        b = ff(b, c, d, a, k[11], 22, -1990404162);
	        a = ff(a, b, c, d, k[12], 7, 1804603682);
	        d = ff(d, a, b, c, k[13], 12, -40341101);
	        c = ff(c, d, a, b, k[14], 17, -1502002290);
	        b = ff(b, c, d, a, k[15], 22, 1236535329);
	
	        a = gg(a, b, c, d, k[1], 5, -165796510);
	        d = gg(d, a, b, c, k[6], 9, -1069501632);
	        c = gg(c, d, a, b, k[11], 14, 643717713);
	        b = gg(b, c, d, a, k[0], 20, -373897302);
	        a = gg(a, b, c, d, k[5], 5, -701558691);
	        d = gg(d, a, b, c, k[10], 9, 38016083);
	        c = gg(c, d, a, b, k[15], 14, -660478335);
	        b = gg(b, c, d, a, k[4], 20, -405537848);
	        a = gg(a, b, c, d, k[9], 5, 568446438);
	        d = gg(d, a, b, c, k[14], 9, -1019803690);
	        c = gg(c, d, a, b, k[3], 14, -187363961);
	        b = gg(b, c, d, a, k[8], 20, 1163531501);
	        a = gg(a, b, c, d, k[13], 5, -1444681467);
	        d = gg(d, a, b, c, k[2], 9, -51403784);
	        c = gg(c, d, a, b, k[7], 14, 1735328473);
	        b = gg(b, c, d, a, k[12], 20, -1926607734);
	
	        a = hh(a, b, c, d, k[5], 4, -378558);
	        d = hh(d, a, b, c, k[8], 11, -2022574463);
	        c = hh(c, d, a, b, k[11], 16, 1839030562);
	        b = hh(b, c, d, a, k[14], 23, -35309556);
	        a = hh(a, b, c, d, k[1], 4, -1530992060);
	        d = hh(d, a, b, c, k[4], 11, 1272893353);
	        c = hh(c, d, a, b, k[7], 16, -155497632);
	        b = hh(b, c, d, a, k[10], 23, -1094730640);
	        a = hh(a, b, c, d, k[13], 4, 681279174);
	        d = hh(d, a, b, c, k[0], 11, -358537222);
	        c = hh(c, d, a, b, k[3], 16, -722521979);
	        b = hh(b, c, d, a, k[6], 23, 76029189);
	        a = hh(a, b, c, d, k[9], 4, -640364487);
	        d = hh(d, a, b, c, k[12], 11, -421815835);
	        c = hh(c, d, a, b, k[15], 16, 530742520);
	        b = hh(b, c, d, a, k[2], 23, -995338651);
	
	        a = ii(a, b, c, d, k[0], 6, -198630844);
	        d = ii(d, a, b, c, k[7], 10, 1126891415);
	        c = ii(c, d, a, b, k[14], 15, -1416354905);
	        b = ii(b, c, d, a, k[5], 21, -57434055);
	        a = ii(a, b, c, d, k[12], 6, 1700485571);
	        d = ii(d, a, b, c, k[3], 10, -1894986606);
	        c = ii(c, d, a, b, k[10], 15, -1051523);
	        b = ii(b, c, d, a, k[1], 21, -2054922799);
	        a = ii(a, b, c, d, k[8], 6, 1873313359);
	        d = ii(d, a, b, c, k[15], 10, -30611744);
	        c = ii(c, d, a, b, k[6], 15, -1560198380);
	        b = ii(b, c, d, a, k[13], 21, 1309151649);
	        a = ii(a, b, c, d, k[4], 6, -145523070);
	        d = ii(d, a, b, c, k[11], 10, -1120210379);
	        c = ii(c, d, a, b, k[2], 15, 718787259);
	        b = ii(b, c, d, a, k[9], 21, -343485551);
	
	        x[0] = add32(a, x[0]);
	        x[1] = add32(b, x[1]);
	        x[2] = add32(c, x[2]);
	        x[3] = add32(d, x[3]);
	    }
	
	    function md5blk(s) {
	        var md5blks = [],
	            i; /* Andy King said do it this way. */
	
	        for (i = 0; i < 64; i += 4) {
	            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
	        }
	        return md5blks;
	    }
	
	    function md5blk_array(a) {
	        var md5blks = [],
	            i; /* Andy King said do it this way. */
	
	        for (i = 0; i < 64; i += 4) {
	            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
	        }
	        return md5blks;
	    }
	
	    function md51(s) {
	        var n = s.length,
	            state = [1732584193, -271733879, -1732584194, 271733878],
	            i,
	            length,
	            tail,
	            tmp,
	            lo,
	            hi;
	
	        for (i = 64; i <= n; i += 64) {
	            md5cycle(state, md5blk(s.substring(i - 64, i)));
	        }
	        s = s.substring(i - 64);
	        length = s.length;
	        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	        for (i = 0; i < length; i += 1) {
	            tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
	        }
	        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
	        if (i > 55) {
	            md5cycle(state, tail);
	            for (i = 0; i < 16; i += 1) {
	                tail[i] = 0;
	            }
	        }
	
	        // Beware that the final length might not fit in 32 bits so we take care of that
	        tmp = n * 8;
	        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
	        lo = parseInt(tmp[2], 16);
	        hi = parseInt(tmp[1], 16) || 0;
	
	        tail[14] = lo;
	        tail[15] = hi;
	
	        md5cycle(state, tail);
	        return state;
	    }
	
	    function md51_array(a) {
	        var n = a.length,
	            state = [1732584193, -271733879, -1732584194, 271733878],
	            i,
	            length,
	            tail,
	            tmp,
	            lo,
	            hi;
	
	        for (i = 64; i <= n; i += 64) {
	            md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
	        }
	
	        // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
	        // containing the last element of the parent array if the sub array specified starts
	        // beyond the length of the parent array - weird.
	        // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
	        a = (i - 64) < n ? a.subarray(i - 64) : new Uint8Array(0);
	
	        length = a.length;
	        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	        for (i = 0; i < length; i += 1) {
	            tail[i >> 2] |= a[i] << ((i % 4) << 3);
	        }
	
	        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
	        if (i > 55) {
	            md5cycle(state, tail);
	            for (i = 0; i < 16; i += 1) {
	                tail[i] = 0;
	            }
	        }
	
	        // Beware that the final length might not fit in 32 bits so we take care of that
	        tmp = n * 8;
	        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
	        lo = parseInt(tmp[2], 16);
	        hi = parseInt(tmp[1], 16) || 0;
	
	        tail[14] = lo;
	        tail[15] = hi;
	
	        md5cycle(state, tail);
	
	        return state;
	    }
	
	    function rhex(n) {
	        var s = '',
	            j;
	        for (j = 0; j < 4; j += 1) {
	            s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
	        }
	        return s;
	    }
	
	    function hex(x) {
	        var i;
	        for (i = 0; i < x.length; i += 1) {
	            x[i] = rhex(x[i]);
	        }
	        return x.join('');
	    }
	
	    // In some cases the fast add32 function cannot be used..
	    if (hex(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') {
	        add32 = function (x, y) {
	            var lsw = (x & 0xFFFF) + (y & 0xFFFF),
	                msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	            return (msw << 16) | (lsw & 0xFFFF);
	        };
	    }
	
	    // ---------------------------------------------------
	
	    /**
	     * ArrayBuffer slice polyfill.
	     *
	     * @see https://github.com/ttaubert/node-arraybuffer-slice
	     */
	
	    if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
	        (function () {
	            function clamp(val, length) {
	                val = (val | 0) || 0;
	
	                if (val < 0) {
	                    return Math.max(val + length, 0);
	                }
	
	                return Math.min(val, length);
	            }
	
	            ArrayBuffer.prototype.slice = function (from, to) {
	                var length = this.byteLength,
	                    begin = clamp(from, length),
	                    end = length,
	                    num,
	                    target,
	                    targetArray,
	                    sourceArray;
	
	                if (to !== undefined) {
	                    end = clamp(to, length);
	                }
	
	                if (begin > end) {
	                    return new ArrayBuffer(0);
	                }
	
	                num = end - begin;
	                target = new ArrayBuffer(num);
	                targetArray = new Uint8Array(target);
	
	                sourceArray = new Uint8Array(this, begin, num);
	                targetArray.set(sourceArray);
	
	                return target;
	            };
	        })();
	    }
	
	    // ---------------------------------------------------
	
	    /**
	     * Helpers.
	     */
	
	    function toUtf8(str) {
	        if (/[\u0080-\uFFFF]/.test(str)) {
	            str = unescape(encodeURIComponent(str));
	        }
	
	        return str;
	    }
	
	    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
	        var length = str.length,
	           buff = new ArrayBuffer(length),
	           arr = new Uint8Array(buff),
	           i;
	
	        for (i = 0; i < length; i += 1) {
	            arr[i] = str.charCodeAt(i);
	        }
	
	        return returnUInt8Array ? arr : buff;
	    }
	
	    function arrayBuffer2Utf8Str(buff) {
	        return String.fromCharCode.apply(null, new Uint8Array(buff));
	    }
	
	    function concatenateArrayBuffers(first, second, returnUInt8Array) {
	        var result = new Uint8Array(first.byteLength + second.byteLength);
	
	        result.set(new Uint8Array(first));
	        result.set(new Uint8Array(second), first.byteLength);
	
	        return returnUInt8Array ? result : result.buffer;
	    }
	
	    function hexToBinaryString(hex) {
	        var bytes = [],
	            length = hex.length,
	            x;
	
	        for (x = 0; x < length - 1; x += 2) {
	            bytes.push(parseInt(hex.substr(x, 2), 16));
	        }
	
	        return String.fromCharCode.apply(String, bytes);
	    }
	
	    // ---------------------------------------------------
	
	    /**
	     * SparkMD5 OOP implementation.
	     *
	     * Use this class to perform an incremental md5, otherwise use the
	     * static methods instead.
	     */
	
	    function SparkMD5() {
	        // call reset to init the instance
	        this.reset();
	    }
	
	    /**
	     * Appends a string.
	     * A conversion will be applied if an utf8 string is detected.
	     *
	     * @param {String} str The string to be appended
	     *
	     * @return {SparkMD5} The instance itself
	     */
	    SparkMD5.prototype.append = function (str) {
	        // Converts the string to utf8 bytes if necessary
	        // Then append as binary
	        this.appendBinary(toUtf8(str));
	
	        return this;
	    };
	
	    /**
	     * Appends a binary string.
	     *
	     * @param {String} contents The binary string to be appended
	     *
	     * @return {SparkMD5} The instance itself
	     */
	    SparkMD5.prototype.appendBinary = function (contents) {
	        this._buff += contents;
	        this._length += contents.length;
	
	        var length = this._buff.length,
	            i;
	
	        for (i = 64; i <= length; i += 64) {
	            md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
	        }
	
	        this._buff = this._buff.substring(i - 64);
	
	        return this;
	    };
	
	    /**
	     * Finishes the incremental computation, reseting the internal state and
	     * returning the result.
	     *
	     * @param {Boolean} raw True to get the raw string, false to get the hex string
	     *
	     * @return {String} The result
	     */
	    SparkMD5.prototype.end = function (raw) {
	        var buff = this._buff,
	            length = buff.length,
	            i,
	            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	            ret;
	
	        for (i = 0; i < length; i += 1) {
	            tail[i >> 2] |= buff.charCodeAt(i) << ((i % 4) << 3);
	        }
	
	        this._finish(tail, length);
	        ret = hex(this._hash);
	
	        if (raw) {
	            ret = hexToBinaryString(ret);
	        }
	
	        this.reset();
	
	        return ret;
	    };
	
	    /**
	     * Resets the internal state of the computation.
	     *
	     * @return {SparkMD5} The instance itself
	     */
	    SparkMD5.prototype.reset = function () {
	        this._buff = '';
	        this._length = 0;
	        this._hash = [1732584193, -271733879, -1732584194, 271733878];
	
	        return this;
	    };
	
	    /**
	     * Gets the internal state of the computation.
	     *
	     * @return {Object} The state
	     */
	    SparkMD5.prototype.getState = function () {
	        return {
	            buff: this._buff,
	            length: this._length,
	            hash: this._hash
	        };
	    };
	
	    /**
	     * Gets the internal state of the computation.
	     *
	     * @param {Object} state The state
	     *
	     * @return {SparkMD5} The instance itself
	     */
	    SparkMD5.prototype.setState = function (state) {
	        this._buff = state.buff;
	        this._length = state.length;
	        this._hash = state.hash;
	
	        return this;
	    };
	
	    /**
	     * Releases memory used by the incremental buffer and other additional
	     * resources. If you plan to use the instance again, use reset instead.
	     */
	    SparkMD5.prototype.destroy = function () {
	        delete this._hash;
	        delete this._buff;
	        delete this._length;
	    };
	
	    /**
	     * Finish the final calculation based on the tail.
	     *
	     * @param {Array}  tail   The tail (will be modified)
	     * @param {Number} length The length of the remaining buffer
	     */
	    SparkMD5.prototype._finish = function (tail, length) {
	        var i = length,
	            tmp,
	            lo,
	            hi;
	
	        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
	        if (i > 55) {
	            md5cycle(this._hash, tail);
	            for (i = 0; i < 16; i += 1) {
	                tail[i] = 0;
	            }
	        }
	
	        // Do the final computation based on the tail and length
	        // Beware that the final length may not fit in 32 bits so we take care of that
	        tmp = this._length * 8;
	        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
	        lo = parseInt(tmp[2], 16);
	        hi = parseInt(tmp[1], 16) || 0;
	
	        tail[14] = lo;
	        tail[15] = hi;
	        md5cycle(this._hash, tail);
	    };
	
	    /**
	     * Performs the md5 hash on a string.
	     * A conversion will be applied if utf8 string is detected.
	     *
	     * @param {String}  str The string
	     * @param {Boolean} raw True to get the raw string, false to get the hex string
	     *
	     * @return {String} The result
	     */
	    SparkMD5.hash = function (str, raw) {
	        // Converts the string to utf8 bytes if necessary
	        // Then compute it using the binary function
	        return SparkMD5.hashBinary(toUtf8(str), raw);
	    };
	
	    /**
	     * Performs the md5 hash on a binary string.
	     *
	     * @param {String}  content The binary string
	     * @param {Boolean} raw     True to get the raw string, false to get the hex string
	     *
	     * @return {String} The result
	     */
	    SparkMD5.hashBinary = function (content, raw) {
	        var hash = md51(content),
	            ret = hex(hash);
	
	        return raw ? hexToBinaryString(ret) : ret;
	    };
	
	    // ---------------------------------------------------
	
	    /**
	     * SparkMD5 OOP implementation for array buffers.
	     *
	     * Use this class to perform an incremental md5 ONLY for array buffers.
	     */
	    SparkMD5.ArrayBuffer = function () {
	        // call reset to init the instance
	        this.reset();
	    };
	
	    /**
	     * Appends an array buffer.
	     *
	     * @param {ArrayBuffer} arr The array to be appended
	     *
	     * @return {SparkMD5.ArrayBuffer} The instance itself
	     */
	    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
	        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
	            length = buff.length,
	            i;
	
	        this._length += arr.byteLength;
	
	        for (i = 64; i <= length; i += 64) {
	            md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
	        }
	
	        this._buff = (i - 64) < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
	
	        return this;
	    };
	
	    /**
	     * Finishes the incremental computation, reseting the internal state and
	     * returning the result.
	     *
	     * @param {Boolean} raw True to get the raw string, false to get the hex string
	     *
	     * @return {String} The result
	     */
	    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
	        var buff = this._buff,
	            length = buff.length,
	            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	            i,
	            ret;
	
	        for (i = 0; i < length; i += 1) {
	            tail[i >> 2] |= buff[i] << ((i % 4) << 3);
	        }
	
	        this._finish(tail, length);
	        ret = hex(this._hash);
	
	        if (raw) {
	            ret = hexToBinaryString(ret);
	        }
	
	        this.reset();
	
	        return ret;
	    };
	
	    /**
	     * Resets the internal state of the computation.
	     *
	     * @return {SparkMD5.ArrayBuffer} The instance itself
	     */
	    SparkMD5.ArrayBuffer.prototype.reset = function () {
	        this._buff = new Uint8Array(0);
	        this._length = 0;
	        this._hash = [1732584193, -271733879, -1732584194, 271733878];
	
	        return this;
	    };
	
	    /**
	     * Gets the internal state of the computation.
	     *
	     * @return {Object} The state
	     */
	    SparkMD5.ArrayBuffer.prototype.getState = function () {
	        var state = SparkMD5.prototype.getState.call(this);
	
	        // Convert buffer to a string
	        state.buff = arrayBuffer2Utf8Str(state.buff);
	
	        return state;
	    };
	
	    /**
	     * Gets the internal state of the computation.
	     *
	     * @param {Object} state The state
	     *
	     * @return {SparkMD5.ArrayBuffer} The instance itself
	     */
	    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
	        // Convert string to buffer
	        state.buff = utf8Str2ArrayBuffer(state.buff, true);
	
	        return SparkMD5.prototype.setState.call(this, state);
	    };
	
	    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
	
	    SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
	
	    /**
	     * Performs the md5 hash on an array buffer.
	     *
	     * @param {ArrayBuffer} arr The array buffer
	     * @param {Boolean}     raw True to get the raw string, false to get the hex one
	     *
	     * @return {String} The result
	     */
	    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
	        var hash = md51_array(new Uint8Array(arr)),
	            ret = hex(hash);
	
	        return raw ? hexToBinaryString(ret) : ret;
	    };
	
	    return SparkMD5;
	}));


/***/ },
/* 311 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Stringify/parse functions that don't operate
	 * recursively, so they avoid call stack exceeded
	 * errors.
	 */
	exports.stringify = function stringify(input) {
	  var queue = [];
	  queue.push({obj: input});
	
	  var res = '';
	  var next, obj, prefix, val, i, arrayPrefix, keys, k, key, value, objPrefix;
	  while ((next = queue.pop())) {
	    obj = next.obj;
	    prefix = next.prefix || '';
	    val = next.val || '';
	    res += prefix;
	    if (val) {
	      res += val;
	    } else if (typeof obj !== 'object') {
	      res += typeof obj === 'undefined' ? null : JSON.stringify(obj);
	    } else if (obj === null) {
	      res += 'null';
	    } else if (Array.isArray(obj)) {
	      queue.push({val: ']'});
	      for (i = obj.length - 1; i >= 0; i--) {
	        arrayPrefix = i === 0 ? '' : ',';
	        queue.push({obj: obj[i], prefix: arrayPrefix});
	      }
	      queue.push({val: '['});
	    } else { // object
	      keys = [];
	      for (k in obj) {
	        if (obj.hasOwnProperty(k)) {
	          keys.push(k);
	        }
	      }
	      queue.push({val: '}'});
	      for (i = keys.length - 1; i >= 0; i--) {
	        key = keys[i];
	        value = obj[key];
	        objPrefix = (i > 0 ? ',' : '');
	        objPrefix += JSON.stringify(key) + ':';
	        queue.push({obj: value, prefix: objPrefix});
	      }
	      queue.push({val: '{'});
	    }
	  }
	  return res;
	};
	
	// Convenience function for the parse function.
	// This pop function is basically copied from
	// pouchCollate.parseIndexableString
	function pop(obj, stack, metaStack) {
	  var lastMetaElement = metaStack[metaStack.length - 1];
	  if (obj === lastMetaElement.element) {
	    // popping a meta-element, e.g. an object whose value is another object
	    metaStack.pop();
	    lastMetaElement = metaStack[metaStack.length - 1];
	  }
	  var element = lastMetaElement.element;
	  var lastElementIndex = lastMetaElement.index;
	  if (Array.isArray(element)) {
	    element.push(obj);
	  } else if (lastElementIndex === stack.length - 2) { // obj with key+value
	    var key = stack.pop();
	    element[key] = obj;
	  } else {
	    stack.push(obj); // obj with key only
	  }
	}
	
	exports.parse = function (str) {
	  var stack = [];
	  var metaStack = []; // stack for arrays and objects
	  var i = 0;
	  var collationIndex,parsedNum,numChar;
	  var parsedString,lastCh,numConsecutiveSlashes,ch;
	  var arrayElement, objElement;
	  while (true) {
	    collationIndex = str[i++];
	    if (collationIndex === '}' ||
	        collationIndex === ']' ||
	        typeof collationIndex === 'undefined') {
	      if (stack.length === 1) {
	        return stack.pop();
	      } else {
	        pop(stack.pop(), stack, metaStack);
	        continue;
	      }
	    }
	    switch (collationIndex) {
	      case ' ':
	      case '\t':
	      case '\n':
	      case ':':
	      case ',':
	        break;
	      case 'n':
	        i += 3; // 'ull'
	        pop(null, stack, metaStack);
	        break;
	      case 't':
	        i += 3; // 'rue'
	        pop(true, stack, metaStack);
	        break;
	      case 'f':
	        i += 4; // 'alse'
	        pop(false, stack, metaStack);
	        break;
	      case '0':
	      case '1':
	      case '2':
	      case '3':
	      case '4':
	      case '5':
	      case '6':
	      case '7':
	      case '8':
	      case '9':
	      case '-':
	        parsedNum = '';
	        i--;
	        while (true) {
	          numChar = str[i++];
	          if (/[\d\.\-e\+]/.test(numChar)) {
	            parsedNum += numChar;
	          } else {
	            i--;
	            break;
	          }
	        }
	        pop(parseFloat(parsedNum), stack, metaStack);
	        break;
	      case '"':
	        parsedString = '';
	        lastCh = void 0;
	        numConsecutiveSlashes = 0;
	        while (true) {
	          ch = str[i++];
	          if (ch !== '"' || (lastCh === '\\' &&
	              numConsecutiveSlashes % 2 === 1)) {
	            parsedString += ch;
	            lastCh = ch;
	            if (lastCh === '\\') {
	              numConsecutiveSlashes++;
	            } else {
	              numConsecutiveSlashes = 0;
	            }
	          } else {
	            break;
	          }
	        }
	        pop(JSON.parse('"' + parsedString + '"'), stack, metaStack);
	        break;
	      case '[':
	        arrayElement = { element: [], index: stack.length };
	        stack.push(arrayElement.element);
	        metaStack.push(arrayElement);
	        break;
	      case '{':
	        objElement = { element: {}, index: stack.length };
	        stack.push(objElement.element);
	        metaStack.push(objElement);
	        break;
	      default:
	        throw new Error(
	          'unexpectedly reached end of input: ' + collationIndex);
	    }
	  }
	};


/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	  /* istanbul ignore next */
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  } else if (typeof exports === 'object') {
	    module.exports = factory()
	  } else {
	    root.PromisePool = factory()
	    // Legacy API
	    root.promisePool = root.PromisePool
	  }
	})(this, function () {
	  'use strict'
	
	  var EventTarget = function () {
	    this._listeners = {}
	  }
	
	  EventTarget.prototype.addEventListener = function (type, listener) {
	    this._listeners[type] = this._listeners[type] || []
	    if (this._listeners[type].indexOf(listener) < 0) {
	      this._listeners[type].push(listener)
	    }
	  }
	
	  EventTarget.prototype.removeEventListener = function (type, listener) {
	    if (this._listeners[type]) {
	      var p = this._listeners[type].indexOf(listener)
	      if (p >= 0) {
	        this._listeners[type].splice(p, 1)
	      }
	    }
	  }
	
	  EventTarget.prototype.dispatchEvent = function (evt) {
	    if (this._listeners[evt.type] && this._listeners[evt.type].length) {
	      var listeners = this._listeners[evt.type].slice()
	      for (var i = 0, l = listeners.length; i < l; ++i) {
	        listeners[i].call(this, evt)
	      }
	    }
	  }
	
	  var isGenerator = function (func) {
	    return (typeof func.constructor === 'function' &&
	      func.constructor.name === 'GeneratorFunction')
	  }
	
	  var functionToIterator = function (func) {
	    return {
	      next: function () {
	        var promise = func()
	        return promise ? {value: promise} : {done: true}
	      }
	    }
	  }
	
	  var promiseToIterator = function (promise) {
	    var called = false
	    return {
	      next: function () {
	        if (called) {
	          return {done: true}
	        }
	        called = true
	        return {value: promise}
	      }
	    }
	  }
	
	  var toIterator = function (obj, Promise) {
	    var type = typeof obj
	    if (type === 'object') {
	      if (typeof obj.next === 'function') {
	        return obj
	      }
	      /* istanbul ignore else */
	      if (typeof obj.then === 'function') {
	        return promiseToIterator(obj)
	      }
	    }
	    if (type === 'function') {
	      return isGenerator(obj) ? obj() : functionToIterator(obj)
	    }
	    return promiseToIterator(Promise.resolve(obj))
	  }
	
	  var PromisePoolEvent = function (target, type, data) {
	    this.target = target
	    this.type = type
	    this.data = data
	  }
	
	  var PromisePool = function (source, concurrency, options) {
	    EventTarget.call(this)
	    if (typeof concurrency !== 'number' ||
	        Math.floor(concurrency) !== concurrency ||
	        concurrency < 1) {
	      throw new Error('Invalid concurrency')
	    }
	    this._concurrency = concurrency
	    this._options = options || {}
	    this._options.promise = this._options.promise || Promise
	    this._iterator = toIterator(source, this._options.promise)
	    this._done = false
	    this._size = 0
	    this._promise = null
	    this._callbacks = null
	  }
	  PromisePool.prototype = new EventTarget()
	  PromisePool.prototype.constructor = PromisePool
	
	  PromisePool.prototype.concurrency = function (value) {
	    if (typeof value !== 'undefined') {
	      this._concurrency = value
	      if (this.active()) {
	        this._proceed()
	      }
	    }
	    return this._concurrency
	  }
	
	  PromisePool.prototype.size = function () {
	    return this._size
	  }
	
	  PromisePool.prototype.active = function () {
	    return !!this._promise
	  }
	
	  PromisePool.prototype.promise = function () {
	    return this._promise
	  }
	
	  PromisePool.prototype.start = function () {
	    var that = this
	    var Promise = this._options.promise
	    this._promise = new Promise(function (resolve, reject) {
	      that._callbacks = {
	        reject: reject,
	        resolve: resolve
	      }
	      that._proceed()
	    })
	    return this._promise
	  }
	
	  PromisePool.prototype._fireEvent = function (type, data) {
	    this.dispatchEvent(new PromisePoolEvent(this, type, data))
	  }
	
	  PromisePool.prototype._settle = function (error) {
	    if (error) {
	      this._callbacks.reject(error)
	    } else {
	      this._callbacks.resolve()
	    }
	    this._promise = null
	    this._callbacks = null
	  }
	
	  PromisePool.prototype._onPooledPromiseFulfilled = function (promise, result) {
	    this._size--
	    if (this.active()) {
	      this._fireEvent('fulfilled', {
	        promise: promise,
	        result: result
	      })
	      this._proceed()
	    }
	  }
	
	  PromisePool.prototype._onPooledPromiseRejected = function (promise, error) {
	    this._size--
	    if (this.active()) {
	      this._fireEvent('rejected', {
	        promise: promise,
	        error: error
	      })
	      this._settle(error || new Error('Unknown error'))
	    }
	  }
	
	  PromisePool.prototype._trackPromise = function (promise) {
	    var that = this
	    promise
	      .then(function (result) {
	        that._onPooledPromiseFulfilled(promise, result)
	      }, function (error) {
	        that._onPooledPromiseRejected(promise, error)
	      })['catch'](function (err) {
	        that._settle(new Error('Promise processing failed: ' + err))
	      })
	  }
	
	  PromisePool.prototype._proceed = function () {
	    if (!this._done) {
	      var result = null
	      while (this._size < this._concurrency &&
	          !(result = this._iterator.next()).done) {
	        this._size++
	        this._trackPromise(result.value)
	      }
	      this._done = (result === null || !!result.done)
	    }
	    if (this._done && this._size === 0) {
	      this._settle()
	    }
	  }
	
	  PromisePool.PromisePoolEvent = PromisePoolEvent
	  // Legacy API
	  PromisePool.PromisePool = PromisePool
	
	  return PromisePool
	})


/***/ }
/******/ ])
});
;
//# sourceMappingURL=database.js.map