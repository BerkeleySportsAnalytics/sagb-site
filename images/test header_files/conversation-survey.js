/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://static-cdn.spot.im/production/conversation-survey/tags/v0.3.3/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp_spotim_survey"] = window["webpackJsonp_spotim_survey"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcz85NTIzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/defineProperty.js\n");

/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./src/services/viewFilterService.ts\nvar viewFilterService = __webpack_require__(\"./src/services/viewFilterService.ts\");\n\n// EXTERNAL MODULE: external \"window.__SPOTIM__.SERVICES.configProvider\"\nvar external_window_SPOTIM_SERVICES_configProvider_ = __webpack_require__(\"@spotim/config-provider\");\nvar external_window_SPOTIM_SERVICES_configProvider_default = /*#__PURE__*/__webpack_require__.n(external_window_SPOTIM_SERVICES_configProvider_);\n\n// CONCATENATED MODULE: ./src/services/raffleService.ts\n\n\nvar createRaffleObject = function createRaffleObject(config) {\n  var maximumPossibleNum = Object.values(config).reduce(function (a, b) {\n    return a + b;\n  });\n  var testObjects = [];\n  var counter = 0;\n  Object.keys(config).map(function (questionId) {\n    var tempTestObject = {\n      min: counter,\n      max: counter + config[questionId],\n      questionId: questionId\n    };\n    counter = counter + config[questionId];\n    testObjects.push(tempTestObject);\n  });\n  return {\n    testObjects: testObjects,\n    maximumPossibleNum: maximumPossibleNum\n  };\n};\n\nvar pickQuestion = function pickQuestion(questions, pickedNum) {\n  var selectedQuestion = null;\n  questions.forEach(function (q) {\n    if (pickedNum > q.min && pickedNum < q.max) {\n      selectedQuestion = q.questionId;\n    }\n  });\n  return selectedQuestion;\n};\n\nvar raffleService_getQuestionConfiguration = function getQuestionConfiguration() {\n  var viewabilityPercentage = external_window_SPOTIM_SERVICES_configProvider_default.a.get(\"tenant_config.conversation-survey.viewability_percentage\", {\n    q1: 100\n  });\n  return viewabilityPercentage;\n};\n\nvar raffleQuestion = function raffleQuestion() {\n  var viewabilityPercentageConfig = raffleService_getQuestionConfiguration();\n  var raffleObject = createRaffleObject(viewabilityPercentageConfig);\n  var randomNum = Math.floor(Math.random() * (raffleObject.maximumPossibleNum + 1));\n  return pickQuestion(raffleObject.testObjects, randomNum);\n};\n// CONCATENATED MODULE: ./src/index.ts\n\n\n\nfunction initialize() {\n  window.__SPOTIM__.renderSurvey = function (config) {\n    var shouldRenderByViewFilter = Object(viewFilterService[\"a\" /* checkViewFilter */])();\n    var selectedQuestion = raffleQuestion();\n\n    if (shouldRenderByViewFilter && selectedQuestion && selectedQuestion !== \"none\") {\n      config.questionId = selectedQuestion;\n      Promise.all(/* import() */[__webpack_require__.e(2), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, \"./src/boot.tsx\")).then(function (boot) {\n        boot[\"default\"](config);\n      });\n    }\n  };\n}\n\ninitialize();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmFmZmxlU2VydmljZS50cz84ZTZlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cz9mZmI0Il0sIm5hbWVzIjpbImNyZWF0ZVJhZmZsZU9iamVjdCIsImNvbmZpZyIsIm1heGltdW1Qb3NzaWJsZU51bSIsIk9iamVjdCIsInZhbHVlcyIsInJlZHVjZSIsImEiLCJiIiwidGVzdE9iamVjdHMiLCJjb3VudGVyIiwia2V5cyIsIm1hcCIsInF1ZXN0aW9uSWQiLCJ0ZW1wVGVzdE9iamVjdCIsIm1pbiIsIm1heCIsInB1c2giLCJwaWNrUXVlc3Rpb24iLCJxdWVzdGlvbnMiLCJwaWNrZWROdW0iLCJzZWxlY3RlZFF1ZXN0aW9uIiwiZm9yRWFjaCIsInEiLCJnZXRRdWVzdGlvbkNvbmZpZ3VyYXRpb24iLCJ2aWV3YWJpbGl0eVBlcmNlbnRhZ2UiLCJjb25maWdQcm92aWRlciIsImdldCIsInExIiwicmFmZmxlUXVlc3Rpb24iLCJ2aWV3YWJpbGl0eVBlcmNlbnRhZ2VDb25maWciLCJyYWZmbGVPYmplY3QiLCJyYW5kb21OdW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpbml0aWFsaXplIiwid2luZG93IiwiX19TUE9USU1fXyIsInJlbmRlclN1cnZleSIsInNob3VsZFJlbmRlckJ5Vmlld0ZpbHRlciIsImNoZWNrVmlld0ZpbHRlciIsInRoZW4iLCJib290Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBaUJBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FDekJDLE1BRHlCLEVBRVI7QUFDakIsTUFBTUMsa0JBQWtCLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxNQUFkLEVBQXNCSSxNQUF0QixDQUE2QixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVRCxDQUFDLEdBQUdDLENBQWQ7QUFBQSxHQUE3QixDQUEzQjtBQUNBLE1BQUlDLFdBQXlCLEdBQUcsRUFBaEM7QUFDQSxNQUFJQyxPQUFPLEdBQUcsQ0FBZDtBQUNBTixRQUFNLENBQUNPLElBQVAsQ0FBWVQsTUFBWixFQUFvQlUsR0FBcEIsQ0FBd0IsVUFBQ0MsVUFBRCxFQUF3QjtBQUM5QyxRQUFJQyxjQUEwQixHQUFHO0FBQy9CQyxTQUFHLEVBQUVMLE9BRDBCO0FBRS9CTSxTQUFHLEVBQUVOLE9BQU8sR0FBR1IsTUFBTSxDQUFDVyxVQUFELENBRlU7QUFHL0JBLGdCQUFVLEVBQVZBO0FBSCtCLEtBQWpDO0FBS0FILFdBQU8sR0FBR0EsT0FBTyxHQUFHUixNQUFNLENBQUNXLFVBQUQsQ0FBMUI7QUFDQUosZUFBVyxDQUFDUSxJQUFaLENBQWlCSCxjQUFqQjtBQUNELEdBUkQ7QUFTQSxTQUFPO0FBQUVMLGVBQVcsRUFBWEEsV0FBRjtBQUFlTixzQkFBa0IsRUFBbEJBO0FBQWYsR0FBUDtBQUNELENBaEJEOztBQWtCQSxJQUFNZSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxTQUFELEVBQTBCQyxTQUExQixFQUF3RDtBQUMzRSxNQUFJQyxnQkFBd0IsR0FBRyxJQUEvQjtBQUNBRixXQUFTLENBQUNHLE9BQVYsQ0FBa0IsVUFBQUMsQ0FBQyxFQUFJO0FBQ3JCLFFBQUlILFNBQVMsR0FBR0csQ0FBQyxDQUFDUixHQUFkLElBQXFCSyxTQUFTLEdBQUdHLENBQUMsQ0FBQ1AsR0FBdkMsRUFBNEM7QUFDMUNLLHNCQUFnQixHQUFHRSxDQUFDLENBQUNWLFVBQXJCO0FBQ0Q7QUFDRixHQUpEO0FBS0EsU0FBT1EsZ0JBQVA7QUFDRCxDQVJEOztBQVVBLElBQU1HLHNDQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsR0FBbUM7QUFDbEUsTUFBTUMscUJBQWtELEdBQUdDLHdEQUFjLENBQUNDLEdBQWYsQ0FDekQsMERBRHlELEVBRXpEO0FBQUVDLE1BQUUsRUFBRTtBQUFOLEdBRnlELENBQTNEO0FBSUEsU0FBT0gscUJBQVA7QUFDRCxDQU5EOztBQVFPLElBQU1JLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBYztBQUMxQyxNQUFNQywyQkFBMkIsR0FBR04sc0NBQXdCLEVBQTVEO0FBQ0EsTUFBTU8sWUFBWSxHQUFHOUIsa0JBQWtCLENBQUM2QiwyQkFBRCxDQUF2QztBQUNBLE1BQU1FLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQ2hCRCxJQUFJLENBQUNFLE1BQUwsTUFBaUJKLFlBQVksQ0FBQzVCLGtCQUFiLEdBQWtDLENBQW5ELENBRGdCLENBQWxCO0FBR0EsU0FBT2UsWUFBWSxDQUFDYSxZQUFZLENBQUN0QixXQUFkLEVBQTJCdUIsU0FBM0IsQ0FBbkI7QUFDRCxDQVBNLEM7O0FDckRQO0FBQ0E7O0FBY0EsU0FBU0ksVUFBVCxHQUFzQjtBQUNuQkMsUUFBRCxDQUEyQkMsVUFBM0IsQ0FBdUNDLFlBQXZDLEdBQXNELFVBQ3BEckMsTUFEb0QsRUFFakQ7QUFDSCxRQUFJc0Msd0JBQWlDLEdBQUdDLG9EQUFlLEVBQXZEO0FBQ0EsUUFBSXBCLGdCQUF3QixHQUFHUSxjQUFjLEVBQTdDOztBQUNBLFFBQ0VXLHdCQUF3QixJQUN4Qm5CLGdCQURBLElBRUFBLGdCQUFnQixLQUFLLE1BSHZCLEVBSUU7QUFDQW5CLFlBQU0sQ0FBQ1csVUFBUCxHQUFvQlEsZ0JBQXBCO0FBQ0EsNklBQWlCcUIsSUFBakIsQ0FBc0IsVUFBQUMsSUFBSSxFQUFJO0FBQzVCQSxZQUFJLFdBQUosQ0FBYXpDLE1BQWI7QUFDRCxPQUZEO0FBR0Q7QUFDRixHQWZEO0FBZ0JEOztBQUVEa0MsVUFBVSIsImZpbGUiOiIuL3NyYy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWdQcm92aWRlciBmcm9tIFwiQHNwb3RpbS9jb25maWctcHJvdmlkZXJcIjtcblxuaW50ZXJmYWNlIHJhZmZsZU9iamVjdCB7XG4gIHRlc3RPYmplY3RzOiB0ZXN0T2JqZWN0W107XG4gIG1heGltdW1Qb3NzaWJsZU51bTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgdGVzdE9iamVjdCB7XG4gIG1pbjogbnVtYmVyO1xuICBtYXg6IG51bWJlcjtcbiAgcXVlc3Rpb25JZDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2Ugdmlld2FiaWxpdHlQZXJjZW50YWdlQ29uZmlnIHtcbiAgW3F1ZXN0aW9uSWQ6IHN0cmluZ106IG51bWJlcjtcbn1cblxuY29uc3QgY3JlYXRlUmFmZmxlT2JqZWN0ID0gKFxuICBjb25maWc6IHZpZXdhYmlsaXR5UGVyY2VudGFnZUNvbmZpZ1xuKTogcmFmZmxlT2JqZWN0ID0+IHtcbiAgY29uc3QgbWF4aW11bVBvc3NpYmxlTnVtID0gT2JqZWN0LnZhbHVlcyhjb25maWcpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xuICBsZXQgdGVzdE9iamVjdHM6IHRlc3RPYmplY3RbXSA9IFtdO1xuICBsZXQgY291bnRlciA9IDA7XG4gIE9iamVjdC5rZXlzKGNvbmZpZykubWFwKChxdWVzdGlvbklkOiBzdHJpbmcpID0+IHtcbiAgICBsZXQgdGVtcFRlc3RPYmplY3Q6IHRlc3RPYmplY3QgPSB7XG4gICAgICBtaW46IGNvdW50ZXIsXG4gICAgICBtYXg6IGNvdW50ZXIgKyBjb25maWdbcXVlc3Rpb25JZF0sXG4gICAgICBxdWVzdGlvbklkXG4gICAgfTtcbiAgICBjb3VudGVyID0gY291bnRlciArIGNvbmZpZ1txdWVzdGlvbklkXTtcbiAgICB0ZXN0T2JqZWN0cy5wdXNoKHRlbXBUZXN0T2JqZWN0KTtcbiAgfSk7XG4gIHJldHVybiB7IHRlc3RPYmplY3RzLCBtYXhpbXVtUG9zc2libGVOdW0gfTtcbn07XG5cbmNvbnN0IHBpY2tRdWVzdGlvbiA9IChxdWVzdGlvbnM6IHRlc3RPYmplY3RbXSwgcGlja2VkTnVtOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBsZXQgc2VsZWN0ZWRRdWVzdGlvbjogc3RyaW5nID0gbnVsbDtcbiAgcXVlc3Rpb25zLmZvckVhY2gocSA9PiB7XG4gICAgaWYgKHBpY2tlZE51bSA+IHEubWluICYmIHBpY2tlZE51bSA8IHEubWF4KSB7XG4gICAgICBzZWxlY3RlZFF1ZXN0aW9uID0gcS5xdWVzdGlvbklkO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzZWxlY3RlZFF1ZXN0aW9uO1xufTtcblxuY29uc3QgZ2V0UXVlc3Rpb25Db25maWd1cmF0aW9uID0gKCk6IHZpZXdhYmlsaXR5UGVyY2VudGFnZUNvbmZpZyA9PiB7XG4gIGNvbnN0IHZpZXdhYmlsaXR5UGVyY2VudGFnZTogdmlld2FiaWxpdHlQZXJjZW50YWdlQ29uZmlnID0gY29uZmlnUHJvdmlkZXIuZ2V0KFxuICAgIFwidGVuYW50X2NvbmZpZy5jb252ZXJzYXRpb24tc3VydmV5LnZpZXdhYmlsaXR5X3BlcmNlbnRhZ2VcIixcbiAgICB7IHExOiAxMDAgfVxuICApO1xuICByZXR1cm4gdmlld2FiaWxpdHlQZXJjZW50YWdlO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhZmZsZVF1ZXN0aW9uID0gKCk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHZpZXdhYmlsaXR5UGVyY2VudGFnZUNvbmZpZyA9IGdldFF1ZXN0aW9uQ29uZmlndXJhdGlvbigpO1xuICBjb25zdCByYWZmbGVPYmplY3QgPSBjcmVhdGVSYWZmbGVPYmplY3Qodmlld2FiaWxpdHlQZXJjZW50YWdlQ29uZmlnKTtcbiAgY29uc3QgcmFuZG9tTnVtID0gTWF0aC5mbG9vcihcbiAgICBNYXRoLnJhbmRvbSgpICogKHJhZmZsZU9iamVjdC5tYXhpbXVtUG9zc2libGVOdW0gKyAxKVxuICApO1xuICByZXR1cm4gcGlja1F1ZXN0aW9uKHJhZmZsZU9iamVjdC50ZXN0T2JqZWN0cywgcmFuZG9tTnVtKTtcbn07XG4iLCJpbXBvcnQgeyBjaGVja1ZpZXdGaWx0ZXIgfSBmcm9tIFwiLi9zZXJ2aWNlcy92aWV3RmlsdGVyU2VydmljZVwiO1xuaW1wb3J0IHsgcmFmZmxlUXVlc3Rpb24gfSBmcm9tIFwiLi9zZXJ2aWNlcy9yYWZmbGVTZXJ2aWNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJlbmRlckNvbmZpZyB7XG4gIGVsZW1lbnQ6IEVsZW1lbnQ7XG4gIHBvc3RJZDogc3RyaW5nO1xuICBxdWVzdGlvbklkOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJQ3VzdG9tV2luZG93IGV4dGVuZHMgV2luZG93IHtcbiAgX19TUE9USU1fXz86IHtcbiAgICByZW5kZXJTdXJ2ZXk6IChjb25maWc6IElSZW5kZXJDb25maWcpID0+IHZvaWQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICh3aW5kb3cgYXMgSUN1c3RvbVdpbmRvdykhLl9fU1BPVElNX18hLnJlbmRlclN1cnZleSA9IChcbiAgICBjb25maWc6IElSZW5kZXJDb25maWdcbiAgKSA9PiB7XG4gICAgbGV0IHNob3VsZFJlbmRlckJ5Vmlld0ZpbHRlcjogYm9vbGVhbiA9IGNoZWNrVmlld0ZpbHRlcigpO1xuICAgIGxldCBzZWxlY3RlZFF1ZXN0aW9uOiBzdHJpbmcgPSByYWZmbGVRdWVzdGlvbigpO1xuICAgIGlmIChcbiAgICAgIHNob3VsZFJlbmRlckJ5Vmlld0ZpbHRlciAmJlxuICAgICAgc2VsZWN0ZWRRdWVzdGlvbiAmJlxuICAgICAgc2VsZWN0ZWRRdWVzdGlvbiAhPT0gXCJub25lXCJcbiAgICApIHtcbiAgICAgIGNvbmZpZy5xdWVzdGlvbklkID0gc2VsZWN0ZWRRdWVzdGlvbjtcbiAgICAgIGltcG9ydChcIi4vYm9vdFwiKS50aGVuKGJvb3QgPT4ge1xuICAgICAgICBib290LmRlZmF1bHQoY29uZmlnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuaW5pdGlhbGl6ZSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/services/viewFilterService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return setViewFilter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return checkViewFilter; });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _spotim_config_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"@spotim/config-provider\");\n/* harmony import */ var _spotim_config_provider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_spotim_config_provider__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar CONVERSATION_SURVEY = \"SPOTIM_CONVERSATION_SURVEY\";\n\nvar getCurrentConvId = function getCurrentConvId() {\n  var spotId = _spotim_config_provider__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"spotId\");\n  var postId = _spotim_config_provider__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"postId\");\n  return \"\".concat(spotId, \"_\").concat(postId);\n};\n\nvar getTTLForAction = function getTTLForAction(actionType) {\n  if (actionType == \"click\") {\n    var click_ttl = _spotim_config_provider__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"tenant_config.conversation-survey.click_ttl\", 7);\n    return click_ttl;\n  }\n\n  if (actionType === \"exit\") {\n    var exit_ttl = _spotim_config_provider__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"tenant_config.conversation-survey.exit_ttl\", 7);\n    return exit_ttl;\n  }\n};\n\nvar setModifiedOrRemove = function setModifiedOrRemove(filteredConverations) {\n  if (Object.entries(filteredConverations).length > 0) {\n    localStorage.setItem(CONVERSATION_SURVEY, JSON.stringify(filteredConverations));\n  } else {\n    localStorage.removeItem(CONVERSATION_SURVEY);\n  }\n};\n\nvar setViewFilter = function setViewFilter(actionType) {\n  var currentConversationId = getCurrentConvId();\n  var TTLForAction = getTTLForAction(actionType);\n\n  var itemToAdd = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, currentConversationId, new Date(Date.now() + TTLForAction * 24 * 60 * 60 * 1000).getTime());\n\n  var filteredConverations = localStorage.getItem(CONVERSATION_SURVEY);\n  filteredConverations = _objectSpread({}, filteredConverations && JSON.parse(filteredConverations), {}, itemToAdd);\n  localStorage.setItem(CONVERSATION_SURVEY, JSON.stringify(filteredConverations));\n};\nvar checkViewFilter = function checkViewFilter() {\n  var currentConversationId = getCurrentConvId();\n  var filteredConverations = localStorage.getItem(CONVERSATION_SURVEY);\n\n  if (!filteredConverations) {\n    return true;\n  }\n\n  filteredConverations = JSON.parse(filteredConverations);\n  var shouldRender = false;\n  Object.keys(filteredConverations).forEach(function (convId) {\n    if (convId === currentConversationId) {\n      if (filteredConverations[convId] < new Date().getTime()) {\n        delete filteredConverations[currentConversationId];\n        setModifiedOrRemove(filteredConverations);\n        shouldRender = true;\n      }\n    }\n  });\n  return shouldRender;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdmlld0ZpbHRlclNlcnZpY2UudHM/YzM4OCJdLCJuYW1lcyI6WyJDT05WRVJTQVRJT05fU1VSVkVZIiwiZ2V0Q3VycmVudENvbnZJZCIsInNwb3RJZCIsImNvbmZpZ1Byb3ZpZGVyIiwiZ2V0IiwicG9zdElkIiwiZ2V0VFRMRm9yQWN0aW9uIiwiYWN0aW9uVHlwZSIsImNsaWNrX3R0bCIsImV4aXRfdHRsIiwic2V0TW9kaWZpZWRPclJlbW92ZSIsImZpbHRlcmVkQ29udmVyYXRpb25zIiwiT2JqZWN0IiwiZW50cmllcyIsImxlbmd0aCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicmVtb3ZlSXRlbSIsInNldFZpZXdGaWx0ZXIiLCJjdXJyZW50Q29udmVyc2F0aW9uSWQiLCJUVExGb3JBY3Rpb24iLCJpdGVtVG9BZGQiLCJEYXRlIiwibm93IiwiZ2V0VGltZSIsImdldEl0ZW0iLCJwYXJzZSIsImNoZWNrVmlld0ZpbHRlciIsInNob3VsZFJlbmRlciIsImtleXMiLCJmb3JFYWNoIiwiY29udklkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLG1CQUFtQixHQUFHLDRCQUE1Qjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw4REFBYyxDQUFDQyxHQUFmLENBQW1CLFFBQW5CLENBQWY7QUFDQSxNQUFNQyxNQUFNLEdBQUdGLDhEQUFjLENBQUNDLEdBQWYsQ0FBbUIsUUFBbkIsQ0FBZjtBQUNBLG1CQUFVRixNQUFWLGNBQW9CRyxNQUFwQjtBQUNELENBSkQ7O0FBTUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxVQUFELEVBQXdCO0FBQzlDLE1BQUlBLFVBQVUsSUFBSSxPQUFsQixFQUEyQjtBQUN6QixRQUFNQyxTQUFTLEdBQUdMLDhEQUFjLENBQUNDLEdBQWYsQ0FDaEIsNkNBRGdCLEVBRWhCLENBRmdCLENBQWxCO0FBSUEsV0FBT0ksU0FBUDtBQUNEOztBQUNELE1BQUlELFVBQVUsS0FBSyxNQUFuQixFQUEyQjtBQUN6QixRQUFNRSxRQUFRLEdBQUdOLDhEQUFjLENBQUNDLEdBQWYsQ0FDZiw0Q0FEZSxFQUVmLENBRmUsQ0FBakI7QUFJQSxXQUFPSyxRQUFQO0FBQ0Q7QUFDRixDQWZEOztBQWlCQSxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLG9CQUFELEVBQWtDO0FBQzVELE1BQUlDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlRixvQkFBZixFQUFxQ0csTUFBckMsR0FBOEMsQ0FBbEQsRUFBcUQ7QUFDbkRDLGdCQUFZLENBQUNDLE9BQWIsQ0FDRWhCLG1CQURGLEVBRUVpQixJQUFJLENBQUNDLFNBQUwsQ0FBZVAsb0JBQWYsQ0FGRjtBQUlELEdBTEQsTUFLTztBQUNMSSxnQkFBWSxDQUFDSSxVQUFiLENBQXdCbkIsbUJBQXhCO0FBQ0Q7QUFDRixDQVREOztBQVdPLElBQU1vQixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNiLFVBQUQsRUFBd0I7QUFDbkQsTUFBTWMscUJBQXFCLEdBQUdwQixnQkFBZ0IsRUFBOUM7QUFDQSxNQUFNcUIsWUFBb0IsR0FBR2hCLGVBQWUsQ0FBQ0MsVUFBRCxDQUE1Qzs7QUFFQSxNQUFNZ0IsU0FBUyxHQUFHLGlGQUNmRixxQkFEWSxFQUNZLElBQUlHLElBQUosQ0FDdkJBLElBQUksQ0FBQ0MsR0FBTCxLQUFhSCxZQUFZLEdBQUcsRUFBZixHQUFvQixFQUFwQixHQUF5QixFQUF6QixHQUE4QixJQURwQixFQUV2QkksT0FGdUIsRUFEWixDQUFmOztBQU1BLE1BQUlmLG9CQUFvQixHQUFHSSxZQUFZLENBQUNZLE9BQWIsQ0FBcUIzQixtQkFBckIsQ0FBM0I7QUFDQVcsc0JBQW9CLHFCQUNkQSxvQkFBb0IsSUFBSU0sSUFBSSxDQUFDVyxLQUFMLENBQVdqQixvQkFBWCxDQURWLE1BRWZZLFNBRmUsQ0FBcEI7QUFLQVIsY0FBWSxDQUFDQyxPQUFiLENBQ0VoQixtQkFERixFQUVFaUIsSUFBSSxDQUFDQyxTQUFMLENBQWVQLG9CQUFmLENBRkY7QUFJRCxDQXBCTTtBQXNCQSxJQUFNa0IsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQ25DLE1BQU1SLHFCQUFxQixHQUFHcEIsZ0JBQWdCLEVBQTlDO0FBRUEsTUFBSVUsb0JBQXlCLEdBQUdJLFlBQVksQ0FBQ1ksT0FBYixDQUFxQjNCLG1CQUFyQixDQUFoQzs7QUFDQSxNQUFJLENBQUNXLG9CQUFMLEVBQTJCO0FBQ3pCLFdBQU8sSUFBUDtBQUNEOztBQUNEQSxzQkFBb0IsR0FBR00sSUFBSSxDQUFDVyxLQUFMLENBQVdqQixvQkFBWCxDQUF2QjtBQUNBLE1BQUltQixZQUFZLEdBQUcsS0FBbkI7QUFDQWxCLFFBQU0sQ0FBQ21CLElBQVAsQ0FBWXBCLG9CQUFaLEVBQWtDcUIsT0FBbEMsQ0FBMEMsVUFBQUMsTUFBTSxFQUFJO0FBQ2xELFFBQUlBLE1BQU0sS0FBS1oscUJBQWYsRUFBc0M7QUFDcEMsVUFBSVYsb0JBQW9CLENBQUNzQixNQUFELENBQXBCLEdBQStCLElBQUlULElBQUosR0FBV0UsT0FBWCxFQUFuQyxFQUF5RDtBQUN2RCxlQUFPZixvQkFBb0IsQ0FBQ1UscUJBQUQsQ0FBM0I7QUFDQVgsMkJBQW1CLENBQUNDLG9CQUFELENBQW5CO0FBQ0FtQixvQkFBWSxHQUFHLElBQWY7QUFDRDtBQUNGO0FBQ0YsR0FSRDtBQVNBLFNBQU9BLFlBQVA7QUFDRCxDQW5CTSIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy92aWV3RmlsdGVyU2VydmljZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWdQcm92aWRlciBmcm9tIFwiQHNwb3RpbS9jb25maWctcHJvdmlkZXJcIjtcblxuY29uc3QgQ09OVkVSU0FUSU9OX1NVUlZFWSA9IFwiU1BPVElNX0NPTlZFUlNBVElPTl9TVVJWRVlcIjtcblxuY29uc3QgZ2V0Q3VycmVudENvbnZJZCA9ICgpID0+IHtcbiAgY29uc3Qgc3BvdElkID0gY29uZmlnUHJvdmlkZXIuZ2V0KFwic3BvdElkXCIpO1xuICBjb25zdCBwb3N0SWQgPSBjb25maWdQcm92aWRlci5nZXQoXCJwb3N0SWRcIik7XG4gIHJldHVybiBgJHtzcG90SWR9XyR7cG9zdElkfWA7XG59O1xuXG5jb25zdCBnZXRUVExGb3JBY3Rpb24gPSAoYWN0aW9uVHlwZTogc3RyaW5nKSA9PiB7XG4gIGlmIChhY3Rpb25UeXBlID09IFwiY2xpY2tcIikge1xuICAgIGNvbnN0IGNsaWNrX3R0bCA9IGNvbmZpZ1Byb3ZpZGVyLmdldChcbiAgICAgIFwidGVuYW50X2NvbmZpZy5jb252ZXJzYXRpb24tc3VydmV5LmNsaWNrX3R0bFwiLFxuICAgICAgN1xuICAgICk7XG4gICAgcmV0dXJuIGNsaWNrX3R0bDtcbiAgfVxuICBpZiAoYWN0aW9uVHlwZSA9PT0gXCJleGl0XCIpIHtcbiAgICBjb25zdCBleGl0X3R0bCA9IGNvbmZpZ1Byb3ZpZGVyLmdldChcbiAgICAgIFwidGVuYW50X2NvbmZpZy5jb252ZXJzYXRpb24tc3VydmV5LmV4aXRfdHRsXCIsXG4gICAgICA3XG4gICAgKTtcbiAgICByZXR1cm4gZXhpdF90dGw7XG4gIH1cbn07XG5cbmNvbnN0IHNldE1vZGlmaWVkT3JSZW1vdmUgPSAoZmlsdGVyZWRDb252ZXJhdGlvbnM6IG9iamVjdCkgPT4ge1xuICBpZiAoT2JqZWN0LmVudHJpZXMoZmlsdGVyZWRDb252ZXJhdGlvbnMpLmxlbmd0aCA+IDApIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIENPTlZFUlNBVElPTl9TVVJWRVksXG4gICAgICBKU09OLnN0cmluZ2lmeShmaWx0ZXJlZENvbnZlcmF0aW9ucylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKENPTlZFUlNBVElPTl9TVVJWRVkpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0Vmlld0ZpbHRlciA9IChhY3Rpb25UeXBlOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgY3VycmVudENvbnZlcnNhdGlvbklkID0gZ2V0Q3VycmVudENvbnZJZCgpO1xuICBjb25zdCBUVExGb3JBY3Rpb246IG51bWJlciA9IGdldFRUTEZvckFjdGlvbihhY3Rpb25UeXBlKTtcblxuICBjb25zdCBpdGVtVG9BZGQgPSB7XG4gICAgW2N1cnJlbnRDb252ZXJzYXRpb25JZF06IG5ldyBEYXRlKFxuICAgICAgRGF0ZS5ub3coKSArIFRUTEZvckFjdGlvbiAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgICApLmdldFRpbWUoKVxuICB9O1xuXG4gIGxldCBmaWx0ZXJlZENvbnZlcmF0aW9ucyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKENPTlZFUlNBVElPTl9TVVJWRVkpO1xuICBmaWx0ZXJlZENvbnZlcmF0aW9ucyA9IHtcbiAgICAuLi4oZmlsdGVyZWRDb252ZXJhdGlvbnMgJiYgSlNPTi5wYXJzZShmaWx0ZXJlZENvbnZlcmF0aW9ucykpLFxuICAgIC4uLml0ZW1Ub0FkZFxuICB9O1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgIENPTlZFUlNBVElPTl9TVVJWRVksXG4gICAgSlNPTi5zdHJpbmdpZnkoZmlsdGVyZWRDb252ZXJhdGlvbnMpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY2hlY2tWaWV3RmlsdGVyID0gKCkgPT4ge1xuICBjb25zdCBjdXJyZW50Q29udmVyc2F0aW9uSWQgPSBnZXRDdXJyZW50Q29udklkKCk7XG5cbiAgbGV0IGZpbHRlcmVkQ29udmVyYXRpb25zOiBhbnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShDT05WRVJTQVRJT05fU1VSVkVZKTtcbiAgaWYgKCFmaWx0ZXJlZENvbnZlcmF0aW9ucykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGZpbHRlcmVkQ29udmVyYXRpb25zID0gSlNPTi5wYXJzZShmaWx0ZXJlZENvbnZlcmF0aW9ucykgYXMgb2JqZWN0O1xuICBsZXQgc2hvdWxkUmVuZGVyID0gZmFsc2U7XG4gIE9iamVjdC5rZXlzKGZpbHRlcmVkQ29udmVyYXRpb25zKS5mb3JFYWNoKGNvbnZJZCA9PiB7XG4gICAgaWYgKGNvbnZJZCA9PT0gY3VycmVudENvbnZlcnNhdGlvbklkKSB7XG4gICAgICBpZiAoZmlsdGVyZWRDb252ZXJhdGlvbnNbY29udklkXSA8IG5ldyBEYXRlKCkuZ2V0VGltZSgpKSB7XG4gICAgICAgIGRlbGV0ZSBmaWx0ZXJlZENvbnZlcmF0aW9uc1tjdXJyZW50Q29udmVyc2F0aW9uSWRdO1xuICAgICAgICBzZXRNb2RpZmllZE9yUmVtb3ZlKGZpbHRlcmVkQ29udmVyYXRpb25zKTtcbiAgICAgICAgc2hvdWxkUmVuZGVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc2hvdWxkUmVuZGVyO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/viewFilterService.ts\n");

/***/ }),

/***/ "@spotim/config-provider":
/***/ (function(module, exports) {

eval("module.exports = window.__SPOTIM__.SERVICES.configProvider;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cuX19TUE9USU1fXy5TRVJWSUNFUy5jb25maWdQcm92aWRlclwiPzZlNWMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHNwb3RpbS9jb25maWctcHJvdmlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5fX1NQT1RJTV9fLlNFUlZJQ0VTLmNvbmZpZ1Byb3ZpZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///@spotim/config-provider\n");

/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

eval("module.exports = window.__SPOTIM__.lib.classnames;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cuX19TUE9USU1fXy5saWIuY2xhc3NuYW1lc1wiP2UzYTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiY2xhc3NuYW1lcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gd2luZG93Ll9fU1BPVElNX18ubGliLmNsYXNzbmFtZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///classnames\n");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

eval("module.exports = window.__SPOTIM__.lib.react;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cuX19TUE9USU1fXy5saWIucmVhY3RcIj9lZTZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuX19TUE9USU1fXy5saWIucmVhY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom":
/***/ (function(module, exports) {

eval("module.exports = window.__SPOTIM__.lib.ReactDom;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cuX19TUE9USU1fXy5saWIuUmVhY3REb21cIj82ZGVhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWRvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gd2luZG93Ll9fU1BPVElNX18ubGliLlJlYWN0RG9tOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///react-dom\n");

/***/ })

/******/ });