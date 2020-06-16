"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var localStorageAdapterEvent = new Event('localStorageAdapter');

var dispatchEventReturn = function dispatchEventReturn(result) {
  window.dispatchEvent(localStorageAdapterEvent);
  return result;
};

var eventProxy = function eventProxy() {
  window.dispatchEvent(localStorageAdapterEvent);
};

var LocalStorageAdapter = /*#__PURE__*/function () {
  function LocalStorageAdapter() {
    _classCallCheck(this, LocalStorageAdapter);
  }

  _createClass(LocalStorageAdapter, [{
    key: "registerEventProxy",
    value: function registerEventProxy() {
      this.unregisterEventProxy();
      window.addEventListener('storage', eventProxy);
    }
  }, {
    key: "unregisterEventProxy",
    value: function unregisterEventProxy() {
      window.removeEventListener('storage', eventProxy);
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      return dispatchEventReturn(localStorage.setItem(key, value));
    }
  }, {
    key: "getItem",
    value: function getItem(key) {
      return dispatchEventReturn(localStorage.getItem(key));
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      return dispatchEventReturn(localStorage.removeItem(key));
    }
  }, {
    key: "clear",
    value: function clear() {
      return dispatchEventReturn(localStorage.clear());
    }
  }]);

  return LocalStorageAdapter;
}();

var _default = new LocalStorageAdapter();

exports["default"] = _default;