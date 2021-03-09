// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../Cargo.toml":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__wbindgen_closure_wrapper12773 = exports.__wbindgen_closure_wrapper9482 = exports.__wbindgen_rethrow = exports.__wbindgen_throw = exports.__wbindgen_debug_string = exports.__wbindgen_string_get = exports.__wbg_set_3afd31f38e771338 = exports.__wbg_global_1c436164a66c9c22 = exports.__wbg_window_51dac01569f1ba70 = exports.__wbg_self_77eca7b42660e1bb = exports.__wbg_globalThis_34bac2d08ebb9b58 = exports.__wbg_then_3d9a54b0affdf26d = exports.__wbg_then_b4358f6ec1ee6657 = exports.__wbg_resolve_9b0f9ddf5f89cb1e = exports.__wbg_new_bae826039151b559 = exports.__wbg_new_dc5b27cfd2149b8f = exports.__wbg_is_e8ad5aa6da4b8c83 = exports.__wbg_new0_1dc5063f3422cdfe = exports.__wbg_getTimezoneOffset_98f9d354772d45bf = exports.__wbg_getTime_6e1051297e199ada = exports.__wbg_call_7a2b5e98ac536644 = exports.__wbg_call_ab183a630df3a257 = exports.__wbg_newnoargs_ab5e899738c0eff4 = exports.__wbg_removeChild_51369e223cb8a779 = exports.__wbg_insertBefore_5886cc01dc0233e3 = exports.__wbg_appendChild_98dedaeac24501f2 = exports.__wbg_textContent_8c1def1e3477ec2e = exports.__wbg_setnodeValue_7404ea475784eb1c = exports.__wbg_lastChild_5fc52139f307fbaa = exports.__wbg_hash_0522c66963abec0e = exports.__wbg_search_fe6bd2ae061a51fa = exports.__wbg_pathname_64dbb2cc59d827b3 = exports.__wbg_state_a3024a8a1af2c159 = exports.__wbg_instanceof_PopStateEvent_95152e2939b0b1f6 = exports.__wbg_replaceState_452a5e828796c789 = exports.__wbg_pushState_14bda476a428fd88 = exports.__wbg_back_5dfdb24282f7e9ce = exports.__wbg_state_9ad78c8079223a86 = exports.__wbg_warn_a53fd622a8636f05 = exports.__wbg_log_74b99b8aa17dd3e9 = exports.__wbg_log_2e875b1d2f6f87ac = exports.__wbg_info_acc842bdd3caace9 = exports.__wbg_error_c20eff071be69905 = exports.__wbg_error_9783be44659339ea = exports.__wbg_debug_0cf9a9e5ff51a633 = exports.__wbg_setAttribute_b638fce95071fff6 = exports.__wbg_scrollIntoView_f31fa35fce7c66cc = exports.__wbg_removeAttribute_43b052e0560d223b = exports.__wbg_namespaceURI_5ab9ad8edd6b745e = exports.__wbg_setvalue_4f1af4fbd0b9942b = exports.__wbg_value_e27a74c3db49694f = exports.__wbg_settype_2628aa2562917c8e = exports.__wbg_setchecked_1fe693236b4c24f3 = exports.__wbg_instanceof_HtmlInputElement_bd1ce15e756a8ae2 = exports.__wbg_removeEventListener_0007cd1449f82876 = exports.__wbg_addEventListener_e8fdfac380f9ea25 = exports.__wbg_settype_ad8678a602cc664d = exports.__wbg_instanceof_HtmlButtonElement_56d6508cc80478bf = exports.__wbg_newwithstrandinit_ddb9c1fa02972c36 = exports.__wbg_headers_7fa1db3bfec6d840 = exports.__wbg_setvalue_e3b8a9c5a4ad0114 = exports.__wbg_value_41a8d072fc94a8a4 = exports.__wbg_instanceof_HtmlTextAreaElement_ceec64505a6bc087 = exports.__wbg_json_8a281f7fa4b3e519 = exports.__wbg_instanceof_Response_692fcbbfbfd64a77 = exports.__wbg_set_6676dcd9a717a04d = exports.__wbg_querySelector_be2514e5de79507f = exports.__wbg_createTextNode_bbff6f9f6e6b38bf = exports.__wbg_createElementNS_ae76308e06470c87 = exports.__wbg_createElement_7cbe07ad3289abea = exports.__wbg_fetch_99437343e599cf5a = exports.__wbg_history_4a086e80d4814e51 = exports.__wbg_location_df2a42f020b6b0fe = exports.__wbg_document_2b44f2a86e03665a = exports.__wbg_instanceof_Window_fbe0320f34c4cd31 = exports.__wbindgen_is_undefined = exports.__wbg_stack_558ba5917b466edd = exports.__wbg_new_59cb74e423758ede = exports.__wbindgen_object_drop_ref = exports.__wbg_error_4bb6c2a97407129a = exports.__wbindgen_cb_drop = exports.__wbindgen_object_clone_ref = exports.__wbindgen_string_new = exports.__wbindgen_json_serialize = exports.fetch = exports.run = exports.default = void 0;

var _yew_app_bg = _interopRequireDefault(require("./pkg/yew_app_bg.wasm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _yew_app_bg.default;
exports.default = _default;
var run = _yew_app_bg.default.run;
exports.run = run;
var fetch = _yew_app_bg.default.fetch;
exports.fetch = fetch;
var __wbindgen_json_serialize = _yew_app_bg.default.__wbindgen_json_serialize;
exports.__wbindgen_json_serialize = __wbindgen_json_serialize;
var __wbindgen_string_new = _yew_app_bg.default.__wbindgen_string_new;
exports.__wbindgen_string_new = __wbindgen_string_new;
var __wbindgen_object_clone_ref = _yew_app_bg.default.__wbindgen_object_clone_ref;
exports.__wbindgen_object_clone_ref = __wbindgen_object_clone_ref;
var __wbindgen_cb_drop = _yew_app_bg.default.__wbindgen_cb_drop;
exports.__wbindgen_cb_drop = __wbindgen_cb_drop;
var __wbg_error_4bb6c2a97407129a = _yew_app_bg.default.__wbg_error_4bb6c2a97407129a;
exports.__wbg_error_4bb6c2a97407129a = __wbg_error_4bb6c2a97407129a;
var __wbindgen_object_drop_ref = _yew_app_bg.default.__wbindgen_object_drop_ref;
exports.__wbindgen_object_drop_ref = __wbindgen_object_drop_ref;
var __wbg_new_59cb74e423758ede = _yew_app_bg.default.__wbg_new_59cb74e423758ede;
exports.__wbg_new_59cb74e423758ede = __wbg_new_59cb74e423758ede;
var __wbg_stack_558ba5917b466edd = _yew_app_bg.default.__wbg_stack_558ba5917b466edd;
exports.__wbg_stack_558ba5917b466edd = __wbg_stack_558ba5917b466edd;
var __wbindgen_is_undefined = _yew_app_bg.default.__wbindgen_is_undefined;
exports.__wbindgen_is_undefined = __wbindgen_is_undefined;
var __wbg_instanceof_Window_fbe0320f34c4cd31 = _yew_app_bg.default.__wbg_instanceof_Window_fbe0320f34c4cd31;
exports.__wbg_instanceof_Window_fbe0320f34c4cd31 = __wbg_instanceof_Window_fbe0320f34c4cd31;
var __wbg_document_2b44f2a86e03665a = _yew_app_bg.default.__wbg_document_2b44f2a86e03665a;
exports.__wbg_document_2b44f2a86e03665a = __wbg_document_2b44f2a86e03665a;
var __wbg_location_df2a42f020b6b0fe = _yew_app_bg.default.__wbg_location_df2a42f020b6b0fe;
exports.__wbg_location_df2a42f020b6b0fe = __wbg_location_df2a42f020b6b0fe;
var __wbg_history_4a086e80d4814e51 = _yew_app_bg.default.__wbg_history_4a086e80d4814e51;
exports.__wbg_history_4a086e80d4814e51 = __wbg_history_4a086e80d4814e51;
var __wbg_fetch_99437343e599cf5a = _yew_app_bg.default.__wbg_fetch_99437343e599cf5a;
exports.__wbg_fetch_99437343e599cf5a = __wbg_fetch_99437343e599cf5a;
var __wbg_createElement_7cbe07ad3289abea = _yew_app_bg.default.__wbg_createElement_7cbe07ad3289abea;
exports.__wbg_createElement_7cbe07ad3289abea = __wbg_createElement_7cbe07ad3289abea;
var __wbg_createElementNS_ae76308e06470c87 = _yew_app_bg.default.__wbg_createElementNS_ae76308e06470c87;
exports.__wbg_createElementNS_ae76308e06470c87 = __wbg_createElementNS_ae76308e06470c87;
var __wbg_createTextNode_bbff6f9f6e6b38bf = _yew_app_bg.default.__wbg_createTextNode_bbff6f9f6e6b38bf;
exports.__wbg_createTextNode_bbff6f9f6e6b38bf = __wbg_createTextNode_bbff6f9f6e6b38bf;
var __wbg_querySelector_be2514e5de79507f = _yew_app_bg.default.__wbg_querySelector_be2514e5de79507f;
exports.__wbg_querySelector_be2514e5de79507f = __wbg_querySelector_be2514e5de79507f;
var __wbg_set_6676dcd9a717a04d = _yew_app_bg.default.__wbg_set_6676dcd9a717a04d;
exports.__wbg_set_6676dcd9a717a04d = __wbg_set_6676dcd9a717a04d;
var __wbg_instanceof_Response_692fcbbfbfd64a77 = _yew_app_bg.default.__wbg_instanceof_Response_692fcbbfbfd64a77;
exports.__wbg_instanceof_Response_692fcbbfbfd64a77 = __wbg_instanceof_Response_692fcbbfbfd64a77;
var __wbg_json_8a281f7fa4b3e519 = _yew_app_bg.default.__wbg_json_8a281f7fa4b3e519;
exports.__wbg_json_8a281f7fa4b3e519 = __wbg_json_8a281f7fa4b3e519;
var __wbg_instanceof_HtmlTextAreaElement_ceec64505a6bc087 = _yew_app_bg.default.__wbg_instanceof_HtmlTextAreaElement_ceec64505a6bc087;
exports.__wbg_instanceof_HtmlTextAreaElement_ceec64505a6bc087 = __wbg_instanceof_HtmlTextAreaElement_ceec64505a6bc087;
var __wbg_value_41a8d072fc94a8a4 = _yew_app_bg.default.__wbg_value_41a8d072fc94a8a4;
exports.__wbg_value_41a8d072fc94a8a4 = __wbg_value_41a8d072fc94a8a4;
var __wbg_setvalue_e3b8a9c5a4ad0114 = _yew_app_bg.default.__wbg_setvalue_e3b8a9c5a4ad0114;
exports.__wbg_setvalue_e3b8a9c5a4ad0114 = __wbg_setvalue_e3b8a9c5a4ad0114;
var __wbg_headers_7fa1db3bfec6d840 = _yew_app_bg.default.__wbg_headers_7fa1db3bfec6d840;
exports.__wbg_headers_7fa1db3bfec6d840 = __wbg_headers_7fa1db3bfec6d840;
var __wbg_newwithstrandinit_ddb9c1fa02972c36 = _yew_app_bg.default.__wbg_newwithstrandinit_ddb9c1fa02972c36;
exports.__wbg_newwithstrandinit_ddb9c1fa02972c36 = __wbg_newwithstrandinit_ddb9c1fa02972c36;
var __wbg_instanceof_HtmlButtonElement_56d6508cc80478bf = _yew_app_bg.default.__wbg_instanceof_HtmlButtonElement_56d6508cc80478bf;
exports.__wbg_instanceof_HtmlButtonElement_56d6508cc80478bf = __wbg_instanceof_HtmlButtonElement_56d6508cc80478bf;
var __wbg_settype_ad8678a602cc664d = _yew_app_bg.default.__wbg_settype_ad8678a602cc664d;
exports.__wbg_settype_ad8678a602cc664d = __wbg_settype_ad8678a602cc664d;
var __wbg_addEventListener_e8fdfac380f9ea25 = _yew_app_bg.default.__wbg_addEventListener_e8fdfac380f9ea25;
exports.__wbg_addEventListener_e8fdfac380f9ea25 = __wbg_addEventListener_e8fdfac380f9ea25;
var __wbg_removeEventListener_0007cd1449f82876 = _yew_app_bg.default.__wbg_removeEventListener_0007cd1449f82876;
exports.__wbg_removeEventListener_0007cd1449f82876 = __wbg_removeEventListener_0007cd1449f82876;
var __wbg_instanceof_HtmlInputElement_bd1ce15e756a8ae2 = _yew_app_bg.default.__wbg_instanceof_HtmlInputElement_bd1ce15e756a8ae2;
exports.__wbg_instanceof_HtmlInputElement_bd1ce15e756a8ae2 = __wbg_instanceof_HtmlInputElement_bd1ce15e756a8ae2;
var __wbg_setchecked_1fe693236b4c24f3 = _yew_app_bg.default.__wbg_setchecked_1fe693236b4c24f3;
exports.__wbg_setchecked_1fe693236b4c24f3 = __wbg_setchecked_1fe693236b4c24f3;
var __wbg_settype_2628aa2562917c8e = _yew_app_bg.default.__wbg_settype_2628aa2562917c8e;
exports.__wbg_settype_2628aa2562917c8e = __wbg_settype_2628aa2562917c8e;
var __wbg_value_e27a74c3db49694f = _yew_app_bg.default.__wbg_value_e27a74c3db49694f;
exports.__wbg_value_e27a74c3db49694f = __wbg_value_e27a74c3db49694f;
var __wbg_setvalue_4f1af4fbd0b9942b = _yew_app_bg.default.__wbg_setvalue_4f1af4fbd0b9942b;
exports.__wbg_setvalue_4f1af4fbd0b9942b = __wbg_setvalue_4f1af4fbd0b9942b;
var __wbg_namespaceURI_5ab9ad8edd6b745e = _yew_app_bg.default.__wbg_namespaceURI_5ab9ad8edd6b745e;
exports.__wbg_namespaceURI_5ab9ad8edd6b745e = __wbg_namespaceURI_5ab9ad8edd6b745e;
var __wbg_removeAttribute_43b052e0560d223b = _yew_app_bg.default.__wbg_removeAttribute_43b052e0560d223b;
exports.__wbg_removeAttribute_43b052e0560d223b = __wbg_removeAttribute_43b052e0560d223b;
var __wbg_scrollIntoView_f31fa35fce7c66cc = _yew_app_bg.default.__wbg_scrollIntoView_f31fa35fce7c66cc;
exports.__wbg_scrollIntoView_f31fa35fce7c66cc = __wbg_scrollIntoView_f31fa35fce7c66cc;
var __wbg_setAttribute_b638fce95071fff6 = _yew_app_bg.default.__wbg_setAttribute_b638fce95071fff6;
exports.__wbg_setAttribute_b638fce95071fff6 = __wbg_setAttribute_b638fce95071fff6;
var __wbg_debug_0cf9a9e5ff51a633 = _yew_app_bg.default.__wbg_debug_0cf9a9e5ff51a633;
exports.__wbg_debug_0cf9a9e5ff51a633 = __wbg_debug_0cf9a9e5ff51a633;
var __wbg_error_9783be44659339ea = _yew_app_bg.default.__wbg_error_9783be44659339ea;
exports.__wbg_error_9783be44659339ea = __wbg_error_9783be44659339ea;
var __wbg_error_c20eff071be69905 = _yew_app_bg.default.__wbg_error_c20eff071be69905;
exports.__wbg_error_c20eff071be69905 = __wbg_error_c20eff071be69905;
var __wbg_info_acc842bdd3caace9 = _yew_app_bg.default.__wbg_info_acc842bdd3caace9;
exports.__wbg_info_acc842bdd3caace9 = __wbg_info_acc842bdd3caace9;
var __wbg_log_2e875b1d2f6f87ac = _yew_app_bg.default.__wbg_log_2e875b1d2f6f87ac;
exports.__wbg_log_2e875b1d2f6f87ac = __wbg_log_2e875b1d2f6f87ac;
var __wbg_log_74b99b8aa17dd3e9 = _yew_app_bg.default.__wbg_log_74b99b8aa17dd3e9;
exports.__wbg_log_74b99b8aa17dd3e9 = __wbg_log_74b99b8aa17dd3e9;
var __wbg_warn_a53fd622a8636f05 = _yew_app_bg.default.__wbg_warn_a53fd622a8636f05;
exports.__wbg_warn_a53fd622a8636f05 = __wbg_warn_a53fd622a8636f05;
var __wbg_state_9ad78c8079223a86 = _yew_app_bg.default.__wbg_state_9ad78c8079223a86;
exports.__wbg_state_9ad78c8079223a86 = __wbg_state_9ad78c8079223a86;
var __wbg_back_5dfdb24282f7e9ce = _yew_app_bg.default.__wbg_back_5dfdb24282f7e9ce;
exports.__wbg_back_5dfdb24282f7e9ce = __wbg_back_5dfdb24282f7e9ce;
var __wbg_pushState_14bda476a428fd88 = _yew_app_bg.default.__wbg_pushState_14bda476a428fd88;
exports.__wbg_pushState_14bda476a428fd88 = __wbg_pushState_14bda476a428fd88;
var __wbg_replaceState_452a5e828796c789 = _yew_app_bg.default.__wbg_replaceState_452a5e828796c789;
exports.__wbg_replaceState_452a5e828796c789 = __wbg_replaceState_452a5e828796c789;
var __wbg_instanceof_PopStateEvent_95152e2939b0b1f6 = _yew_app_bg.default.__wbg_instanceof_PopStateEvent_95152e2939b0b1f6;
exports.__wbg_instanceof_PopStateEvent_95152e2939b0b1f6 = __wbg_instanceof_PopStateEvent_95152e2939b0b1f6;
var __wbg_state_a3024a8a1af2c159 = _yew_app_bg.default.__wbg_state_a3024a8a1af2c159;
exports.__wbg_state_a3024a8a1af2c159 = __wbg_state_a3024a8a1af2c159;
var __wbg_pathname_64dbb2cc59d827b3 = _yew_app_bg.default.__wbg_pathname_64dbb2cc59d827b3;
exports.__wbg_pathname_64dbb2cc59d827b3 = __wbg_pathname_64dbb2cc59d827b3;
var __wbg_search_fe6bd2ae061a51fa = _yew_app_bg.default.__wbg_search_fe6bd2ae061a51fa;
exports.__wbg_search_fe6bd2ae061a51fa = __wbg_search_fe6bd2ae061a51fa;
var __wbg_hash_0522c66963abec0e = _yew_app_bg.default.__wbg_hash_0522c66963abec0e;
exports.__wbg_hash_0522c66963abec0e = __wbg_hash_0522c66963abec0e;
var __wbg_lastChild_5fc52139f307fbaa = _yew_app_bg.default.__wbg_lastChild_5fc52139f307fbaa;
exports.__wbg_lastChild_5fc52139f307fbaa = __wbg_lastChild_5fc52139f307fbaa;
var __wbg_setnodeValue_7404ea475784eb1c = _yew_app_bg.default.__wbg_setnodeValue_7404ea475784eb1c;
exports.__wbg_setnodeValue_7404ea475784eb1c = __wbg_setnodeValue_7404ea475784eb1c;
var __wbg_textContent_8c1def1e3477ec2e = _yew_app_bg.default.__wbg_textContent_8c1def1e3477ec2e;
exports.__wbg_textContent_8c1def1e3477ec2e = __wbg_textContent_8c1def1e3477ec2e;
var __wbg_appendChild_98dedaeac24501f2 = _yew_app_bg.default.__wbg_appendChild_98dedaeac24501f2;
exports.__wbg_appendChild_98dedaeac24501f2 = __wbg_appendChild_98dedaeac24501f2;
var __wbg_insertBefore_5886cc01dc0233e3 = _yew_app_bg.default.__wbg_insertBefore_5886cc01dc0233e3;
exports.__wbg_insertBefore_5886cc01dc0233e3 = __wbg_insertBefore_5886cc01dc0233e3;
var __wbg_removeChild_51369e223cb8a779 = _yew_app_bg.default.__wbg_removeChild_51369e223cb8a779;
exports.__wbg_removeChild_51369e223cb8a779 = __wbg_removeChild_51369e223cb8a779;
var __wbg_newnoargs_ab5e899738c0eff4 = _yew_app_bg.default.__wbg_newnoargs_ab5e899738c0eff4;
exports.__wbg_newnoargs_ab5e899738c0eff4 = __wbg_newnoargs_ab5e899738c0eff4;
var __wbg_call_ab183a630df3a257 = _yew_app_bg.default.__wbg_call_ab183a630df3a257;
exports.__wbg_call_ab183a630df3a257 = __wbg_call_ab183a630df3a257;
var __wbg_call_7a2b5e98ac536644 = _yew_app_bg.default.__wbg_call_7a2b5e98ac536644;
exports.__wbg_call_7a2b5e98ac536644 = __wbg_call_7a2b5e98ac536644;
var __wbg_getTime_6e1051297e199ada = _yew_app_bg.default.__wbg_getTime_6e1051297e199ada;
exports.__wbg_getTime_6e1051297e199ada = __wbg_getTime_6e1051297e199ada;
var __wbg_getTimezoneOffset_98f9d354772d45bf = _yew_app_bg.default.__wbg_getTimezoneOffset_98f9d354772d45bf;
exports.__wbg_getTimezoneOffset_98f9d354772d45bf = __wbg_getTimezoneOffset_98f9d354772d45bf;
var __wbg_new0_1dc5063f3422cdfe = _yew_app_bg.default.__wbg_new0_1dc5063f3422cdfe;
exports.__wbg_new0_1dc5063f3422cdfe = __wbg_new0_1dc5063f3422cdfe;
var __wbg_is_e8ad5aa6da4b8c83 = _yew_app_bg.default.__wbg_is_e8ad5aa6da4b8c83;
exports.__wbg_is_e8ad5aa6da4b8c83 = __wbg_is_e8ad5aa6da4b8c83;
var __wbg_new_dc5b27cfd2149b8f = _yew_app_bg.default.__wbg_new_dc5b27cfd2149b8f;
exports.__wbg_new_dc5b27cfd2149b8f = __wbg_new_dc5b27cfd2149b8f;
var __wbg_new_bae826039151b559 = _yew_app_bg.default.__wbg_new_bae826039151b559;
exports.__wbg_new_bae826039151b559 = __wbg_new_bae826039151b559;
var __wbg_resolve_9b0f9ddf5f89cb1e = _yew_app_bg.default.__wbg_resolve_9b0f9ddf5f89cb1e;
exports.__wbg_resolve_9b0f9ddf5f89cb1e = __wbg_resolve_9b0f9ddf5f89cb1e;
var __wbg_then_b4358f6ec1ee6657 = _yew_app_bg.default.__wbg_then_b4358f6ec1ee6657;
exports.__wbg_then_b4358f6ec1ee6657 = __wbg_then_b4358f6ec1ee6657;
var __wbg_then_3d9a54b0affdf26d = _yew_app_bg.default.__wbg_then_3d9a54b0affdf26d;
exports.__wbg_then_3d9a54b0affdf26d = __wbg_then_3d9a54b0affdf26d;
var __wbg_globalThis_34bac2d08ebb9b58 = _yew_app_bg.default.__wbg_globalThis_34bac2d08ebb9b58;
exports.__wbg_globalThis_34bac2d08ebb9b58 = __wbg_globalThis_34bac2d08ebb9b58;
var __wbg_self_77eca7b42660e1bb = _yew_app_bg.default.__wbg_self_77eca7b42660e1bb;
exports.__wbg_self_77eca7b42660e1bb = __wbg_self_77eca7b42660e1bb;
var __wbg_window_51dac01569f1ba70 = _yew_app_bg.default.__wbg_window_51dac01569f1ba70;
exports.__wbg_window_51dac01569f1ba70 = __wbg_window_51dac01569f1ba70;
var __wbg_global_1c436164a66c9c22 = _yew_app_bg.default.__wbg_global_1c436164a66c9c22;
exports.__wbg_global_1c436164a66c9c22 = __wbg_global_1c436164a66c9c22;
var __wbg_set_3afd31f38e771338 = _yew_app_bg.default.__wbg_set_3afd31f38e771338;
exports.__wbg_set_3afd31f38e771338 = __wbg_set_3afd31f38e771338;
var __wbindgen_string_get = _yew_app_bg.default.__wbindgen_string_get;
exports.__wbindgen_string_get = __wbindgen_string_get;
var __wbindgen_debug_string = _yew_app_bg.default.__wbindgen_debug_string;
exports.__wbindgen_debug_string = __wbindgen_debug_string;
var __wbindgen_throw = _yew_app_bg.default.__wbindgen_throw;
exports.__wbindgen_throw = __wbindgen_throw;
var __wbindgen_rethrow = _yew_app_bg.default.__wbindgen_rethrow;
exports.__wbindgen_rethrow = __wbindgen_rethrow;
var __wbindgen_closure_wrapper9482 = _yew_app_bg.default.__wbindgen_closure_wrapper9482;
exports.__wbindgen_closure_wrapper9482 = __wbindgen_closure_wrapper9482;
var __wbindgen_closure_wrapper12773 = _yew_app_bg.default.__wbindgen_closure_wrapper12773;
exports.__wbindgen_closure_wrapper12773 = __wbindgen_closure_wrapper12773;
},{"./pkg/yew_app_bg.wasm":"../pkg/yew_app_bg.wasm"}],"index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Cargo_toml_1 = require("../Cargo.toml");

Cargo_toml_1.run();
},{"../Cargo.toml":"../Cargo.toml"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61489" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/parcel-bundler/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"../node_modules/parcel-plugin-wasm.rs/wasm-loader.js":[function(require,module,exports) {
var global = arguments[3];
var __dirname = "/Users/tangqiyuan/Code/anthhub/rust/yew-train-ticket-new/node_modules/parcel-plugin-wasm.rs";
var wasm;const __exports = {};

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let WASM_VECTOR_LEN = 0;

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (typeof(arg) !== 'string') throw new Error('expected a string argument');

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);
        if (ret.read !== arg.length) throw new Error('failed to pass whole string');
        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');

    heap[idx] = obj;
    return idx;
}

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function _assertBoolean(n) {
    if (typeof(n) !== 'boolean') {
        throw new Error('expected a boolean argument');
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);

            } else {
                state.a = a;
            }
        }
    };
    real.original = state;

    return real;
}

function logError(f) {
    return function () {
        try {
            return f.apply(this, arguments);

        } catch (e) {
            let error = (function () {
                try {
                    return e instanceof Error ? `${e.message}\n\nStack:\n${e.stack}` : e.toString();
                } catch(_) {
                    return "<failed to stringify thrown value>";
                }
            }());
            console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", error);
            throw e;
        }
    };
}

function _assertNum(n) {
    if (typeof(n) !== 'number') throw new Error('expected a number argument');
}
function __wbg_adapter_22(arg0, arg1, arg2) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h63b0ebe18e7475cb(arg0, arg1, addHeapObject(arg2));
}

let stack_pointer = 32;

function addBorrowedObject(obj) {
    if (stack_pointer == 1) throw new Error('out of js stack');
    heap[--stack_pointer] = obj;
    return stack_pointer;
}
function __wbg_adapter_25(arg0, arg1, arg2) {
    try {
        _assertNum(arg0);
        _assertNum(arg1);
        wasm._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h2fc4894e0a9e2050(arg0, arg1, addBorrowedObject(arg2));
    } finally {
        heap[stack_pointer++] = undefined;
    }
}

/**
*/
__exports. run = function() {
    wasm.run();
}

/**
* @param {string} url
* @param {string} method
* @returns {any}
*/
__exports. fetch = function(url, method) {
    var ptr0 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(method, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ret = wasm.fetch(ptr0, len0, ptr1, len1);
    return takeObject(ret);
}

function handleError(f) {
    return function () {
        try {
            return f.apply(this, arguments);

        } catch (e) {
            wasm.__wbindgen_exn_store(addHeapObject(e));
        }
    };
}
function __wbg_adapter_154(arg0, arg1, arg2, arg3) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm.wasm_bindgen__convert__closures__invoke2_mut__h6e65478eb3bd8ae0(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}

__exports.__wbindgen_json_serialize = function(arg0, arg1) {
    const obj = getObject(arg1);
    var ret = JSON.stringify(obj === undefined ? null : obj);
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

__exports.__wbindgen_string_new = function(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

__exports.__wbindgen_object_clone_ref = function(arg0) {
    var ret = getObject(arg0);
    return addHeapObject(ret);
};

__exports.__wbindgen_cb_drop = function(arg0) {
    const obj = takeObject(arg0).original;
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return true;
    }
    var ret = false;
    _assertBoolean(ret);
    return ret;
};

__exports.__wbg_error_4bb6c2a97407129a = logError(function(arg0, arg1) {
    try {
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_free(arg0, arg1);
    }
});

__exports.__wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

__exports.__wbg_new_59cb74e423758ede = logError(function() {
    var ret = new Error();
    return addHeapObject(ret);
});

__exports.__wbg_stack_558ba5917b466edd = logError(function(arg0, arg1) {
    var ret = getObject(arg1).stack;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
});

__exports.__wbindgen_is_undefined = function(arg0) {
    var ret = getObject(arg0) === undefined;
    _assertBoolean(ret);
    return ret;
};

__exports.__wbg_instanceof_Window_fbe0320f34c4cd31 = logError(function(arg0) {
    var ret = getObject(arg0) instanceof Window;
    _assertBoolean(ret);
    return ret;
});

__exports.__wbg_document_2b44f2a86e03665a = logError(function(arg0) {
    var ret = getObject(arg0).document;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

__exports.__wbg_location_df2a42f020b6b0fe = logError(function(arg0) {
    var ret = getObject(arg0).location;
    return addHeapObject(ret);
});

__exports.__wbg_history_4a086e80d4814e51 = handleError(function(arg0) {
    var ret = getObject(arg0).history;
    return addHeapObject(ret);
});

__exports.__wbg_fetch_99437343e599cf5a = logError(function(arg0, arg1) {
    var ret = getObject(arg0).fetch(getObject(arg1));
    return addHeapObject(ret);
});

__exports.__wbg_createElement_7cbe07ad3289abea = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).createElement(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
});

__exports.__wbg_createElementNS_ae76308e06470c87 = handleError(function(arg0, arg1, arg2, arg3, arg4) {
    var ret = getObject(arg0).createElementNS(arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
    return addHeapObject(ret);
});

__exports.__wbg_createTextNode_bbff6f9f6e6b38bf = logError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).createTextNode(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
});

__exports.__wbg_querySelector_be2514e5de79507f = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).querySelector(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

__exports.__wbg_set_6676dcd9a717a04d = handleError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).set(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
});

__exports.__wbg_instanceof_Response_692fcbbfbfd64a77 = logError(function(arg0) {
    var ret = getObject(arg0) instanceof Response;
    _assertBoolean(ret);
    return ret;
});

__exports.__wbg_json_8a281f7fa4b3e519 = handleError(function(arg0) {
    var ret = getObject(arg0).json();
    return addHeapObject(ret);
});

__exports.__wbg_instanceof_HtmlTextAreaElement_ceec64505a6bc087 = logError(function(arg0) {
    var ret = getObject(arg0) instanceof HTMLTextAreaElement;
    _assertBoolean(ret);
    return ret;
});

__exports.__wbg_value_41a8d072fc94a8a4 = logError(function(arg0, arg1) {
    var ret = getObject(arg1).value;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
});

__exports.__wbg_setvalue_e3b8a9c5a4ad0114 = logError(function(arg0, arg1, arg2) {
    getObject(arg0).value = getStringFromWasm0(arg1, arg2);
});

__exports.__wbg_headers_7fa1db3bfec6d840 = logError(function(arg0) {
    var ret = getObject(arg0).headers;
    return addHeapObject(ret);
});

__exports.__wbg_newwithstrandinit_ddb9c1fa02972c36 = handleError(function(arg0, arg1, arg2) {
    var ret = new Request(getStringFromWasm0(arg0, arg1), getObject(arg2));
    return addHeapObject(ret);
});

__exports.__wbg_instanceof_HtmlButtonElement_56d6508cc80478bf = logError(function(arg0) {
    var ret = getObject(arg0) instanceof HTMLButtonElement;
    _assertBoolean(ret);
    return ret;
});

__exports.__wbg_settype_ad8678a602cc664d = logError(function(arg0, arg1, arg2) {
    getObject(arg0).type = getStringFromWasm0(arg1, arg2);
});

__exports.__wbg_addEventListener_e8fdfac380f9ea25 = handleError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).addEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3), getObject(arg4));
});

__exports.__wbg_removeEventListener_0007cd1449f82876 = handleError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).removeEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3), arg4 !== 0);
});

__exports.__wbg_instanceof_HtmlInputElement_bd1ce15e756a8ae2 = logError(function(arg0) {
    var ret = getObject(arg0) instanceof HTMLInputElement;
    _assertBoolean(ret);
    return ret;
});

__exports.__wbg_setchecked_1fe693236b4c24f3 = logError(function(arg0, arg1) {
    getObject(arg0).checked = arg1 !== 0;
});

__exports.__wbg_settype_2628aa2562917c8e = logError(function(arg0, arg1, arg2) {
    getObject(arg0).type = getStringFromWasm0(arg1, arg2);
});

__exports.__wbg_value_e27a74c3db49694f = logError(function(arg0, arg1) {
    var ret = getObject(arg1).value;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
});

__exports.__wbg_setvalue_4f1af4fbd0b9942b = logError(function(arg0, arg1, arg2) {
    getObject(arg0).value = getStringFromWasm0(arg1, arg2);
});

__exports.__wbg_namespaceURI_5ab9ad8edd6b745e = logError(function(arg0, arg1) {
    var ret = getObject(arg1).namespaceURI;
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
});

__exports.__wbg_removeAttribute_43b052e0560d223b = handleError(function(arg0, arg1, arg2) {
    getObject(arg0).removeAttribute(getStringFromWasm0(arg1, arg2));
});

__exports.__wbg_scrollIntoView_f31fa35fce7c66cc = logError(function(arg0) {
    getObject(arg0).scrollIntoView();
});

__exports.__wbg_setAttribute_b638fce95071fff6 = handleError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
});

__exports.__wbg_debug_0cf9a9e5ff51a633 = logError(function(arg0, arg1, arg2, arg3) {
    console.debug(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
});

__exports.__wbg_error_9783be44659339ea = logError(function(arg0) {
    console.error(getObject(arg0));
});

__exports.__wbg_error_c20eff071be69905 = logError(function(arg0, arg1, arg2, arg3) {
    console.error(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
});

__exports.__wbg_info_acc842bdd3caace9 = logError(function(arg0, arg1, arg2, arg3) {
    console.info(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
});

__exports.__wbg_log_2e875b1d2f6f87ac = logError(function(arg0) {
    console.log(getObject(arg0));
});

__exports.__wbg_log_74b99b8aa17dd3e9 = logError(function(arg0, arg1, arg2, arg3) {
    console.log(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
});

__exports.__wbg_warn_a53fd622a8636f05 = logError(function(arg0, arg1, arg2, arg3) {
    console.warn(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
});

__exports.__wbg_state_9ad78c8079223a86 = handleError(function(arg0) {
    var ret = getObject(arg0).state;
    return addHeapObject(ret);
});

__exports.__wbg_back_5dfdb24282f7e9ce = handleError(function(arg0) {
    getObject(arg0).back();
});

__exports.__wbg_pushState_14bda476a428fd88 = handleError(function(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).pushState(getObject(arg1), getStringFromWasm0(arg2, arg3), arg4 === 0 ? undefined : getStringFromWasm0(arg4, arg5));
});

__exports.__wbg_replaceState_452a5e828796c789 = handleError(function(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).replaceState(getObject(arg1), getStringFromWasm0(arg2, arg3), arg4 === 0 ? undefined : getStringFromWasm0(arg4, arg5));
});

__exports.__wbg_instanceof_PopStateEvent_95152e2939b0b1f6 = logError(function(arg0) {
    var ret = getObject(arg0) instanceof PopStateEvent;
    _assertBoolean(ret);
    return ret;
});

__exports.__wbg_state_a3024a8a1af2c159 = logError(function(arg0) {
    var ret = getObject(arg0).state;
    return addHeapObject(ret);
});

__exports.__wbg_pathname_64dbb2cc59d827b3 = handleError(function(arg0, arg1) {
    var ret = getObject(arg1).pathname;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
});

__exports.__wbg_search_fe6bd2ae061a51fa = handleError(function(arg0, arg1) {
    var ret = getObject(arg1).search;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
});

__exports.__wbg_hash_0522c66963abec0e = handleError(function(arg0, arg1) {
    var ret = getObject(arg1).hash;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
});

__exports.__wbg_lastChild_5fc52139f307fbaa = logError(function(arg0) {
    var ret = getObject(arg0).lastChild;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

__exports.__wbg_setnodeValue_7404ea475784eb1c = logError(function(arg0, arg1, arg2) {
    getObject(arg0).nodeValue = arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2);
});

__exports.__wbg_textContent_8c1def1e3477ec2e = logError(function(arg0, arg1) {
    var ret = getObject(arg1).textContent;
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
});

__exports.__wbg_appendChild_98dedaeac24501f2 = handleError(function(arg0, arg1) {
    var ret = getObject(arg0).appendChild(getObject(arg1));
    return addHeapObject(ret);
});

__exports.__wbg_insertBefore_5886cc01dc0233e3 = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).insertBefore(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
});

__exports.__wbg_removeChild_51369e223cb8a779 = handleError(function(arg0, arg1) {
    var ret = getObject(arg0).removeChild(getObject(arg1));
    return addHeapObject(ret);
});

__exports.__wbg_newnoargs_ab5e899738c0eff4 = logError(function(arg0, arg1) {
    var ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
});

__exports.__wbg_call_ab183a630df3a257 = handleError(function(arg0, arg1) {
    var ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
});

__exports.__wbg_call_7a2b5e98ac536644 = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
});

__exports.__wbg_getTime_6e1051297e199ada = logError(function(arg0) {
    var ret = getObject(arg0).getTime();
    return ret;
});

__exports.__wbg_getTimezoneOffset_98f9d354772d45bf = logError(function(arg0) {
    var ret = getObject(arg0).getTimezoneOffset();
    return ret;
});

__exports.__wbg_new0_1dc5063f3422cdfe = logError(function() {
    var ret = new Date();
    return addHeapObject(ret);
});

__exports.__wbg_is_e8ad5aa6da4b8c83 = logError(function(arg0, arg1) {
    var ret = Object.is(getObject(arg0), getObject(arg1));
    _assertBoolean(ret);
    return ret;
});

__exports.__wbg_new_dc5b27cfd2149b8f = logError(function() {
    var ret = new Object();
    return addHeapObject(ret);
});

__exports.__wbg_new_bae826039151b559 = logError(function(arg0, arg1) {
    try {
        var state0 = {a: arg0, b: arg1};
        var cb0 = (arg0, arg1) => {
            const a = state0.a;
            state0.a = 0;
            try {
                return __wbg_adapter_154(a, state0.b, arg0, arg1);
            } finally {
                state0.a = a;
            }
        };
        var ret = new Promise(cb0);
        return addHeapObject(ret);
    } finally {
        state0.a = state0.b = 0;
    }
});

__exports.__wbg_resolve_9b0f9ddf5f89cb1e = logError(function(arg0) {
    var ret = Promise.resolve(getObject(arg0));
    return addHeapObject(ret);
});

__exports.__wbg_then_b4358f6ec1ee6657 = logError(function(arg0, arg1) {
    var ret = getObject(arg0).then(getObject(arg1));
    return addHeapObject(ret);
});

__exports.__wbg_then_3d9a54b0affdf26d = logError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
});

__exports.__wbg_globalThis_34bac2d08ebb9b58 = handleError(function() {
    var ret = globalThis.globalThis;
    return addHeapObject(ret);
});

__exports.__wbg_self_77eca7b42660e1bb = handleError(function() {
    var ret = self.self;
    return addHeapObject(ret);
});

__exports.__wbg_window_51dac01569f1ba70 = handleError(function() {
    var ret = window.window;
    return addHeapObject(ret);
});

__exports.__wbg_global_1c436164a66c9c22 = handleError(function() {
    var ret = global.global;
    return addHeapObject(ret);
});

__exports.__wbg_set_3afd31f38e771338 = handleError(function(arg0, arg1, arg2) {
    var ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
    _assertBoolean(ret);
    return ret;
});

__exports.__wbindgen_string_get = function(arg0, arg1) {
    const obj = getObject(arg1);
    var ret = typeof(obj) === 'string' ? obj : undefined;
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

__exports.__wbindgen_debug_string = function(arg0, arg1) {
    var ret = debugString(getObject(arg1));
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

__exports.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

__exports.__wbindgen_rethrow = function(arg0) {
    throw takeObject(arg0);
};

__exports.__wbindgen_closure_wrapper9482 = logError(function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 536, __wbg_adapter_22);
    return addHeapObject(ret);
});

__exports.__wbindgen_closure_wrapper12773 = logError(function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 624, __wbg_adapter_25);
    return addHeapObject(ret);
});



      function init(wasm_path) {
          const fetchPromise = fetch(wasm_path);
          let resultPromise;
          if (typeof WebAssembly.instantiateStreaming === 'function') {
              resultPromise = WebAssembly.instantiateStreaming(fetchPromise, { './yew_app_bg.js': __exports });
          } else {
              resultPromise = fetchPromise
              .then(response => response.arrayBuffer())
              .then(buffer => WebAssembly.instantiate(buffer, { './yew_app_bg.js': __exports }));
          }
          return resultPromise.then(({instance}) => {
              wasm = init.wasm = instance.exports;
              __exports.wasm = wasm;
              return;
          });
      };
      function init_node(wasm_path) {
          const fs = require('fs');
          return new Promise(function(resolve, reject) {
              fs.readFile(__dirname + wasm_path, function(err, data) {
                  if (err) {
                      reject(err);
                  } else {
                      resolve(data.buffer);
                  }
              });
          })
          .then(data => WebAssembly.instantiate(data, { './yew_app_bg': __exports }))
          .then(({instance}) => {
              wasm = init.wasm = instance.exports;
              __exports.wasm = wasm;
              return;
          });
      }
      const wasm_bindgen = Object.assign(false ? init_node : init, __exports);
      module.exports = function loadWASMBundle(bundle) {
            return wasm_bindgen(bundle).then(() => __exports)
      }
    
},{"fs":"../node_modules/parcel-bundler/src/builtins/_empty.js"}],0:[function(require,module,exports) {
var b=require("../node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("wasm",require("../node_modules/parcel-plugin-wasm.rs/wasm-loader.js"));b.load([["yew_app_bg.a31f2430.wasm","../pkg/yew_app_bg.wasm"]]).then(function(){require("index.ts");});
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/static.77de5100.js.map