const localStorageAdapterEvent = new Event('localStorageAdapter');

const dispatchEventReturn = result => {
  window.dispatchEvent(localStorageAdapterEvent);
  return result;
};

const eventProxy = () => {
  window.dispatchEvent(localStorageAdapterEvent);
};

class LocalStorageAdapter {
  static registerEventProxy() {
    LocalStorageAdapter.unregisterEventProxy();
    window.addEventListener('storage', eventProxy);
  }

  static unregisterEventProxy() {
    window.removeEventListener('storage', eventProxy);
  }

  setItem(key, value) {
    return dispatchEventReturn(localStorage.setItem(key, value));
  }

  getItem(key) {
    return dispatchEventReturn(localStorage.getItem(key));
  }

  removeItem(key) {
    return dispatchEventReturn(localStorage.removeItem(key));
  }

  clear() {
    return dispatchEventReturn(localStorage.clear());
  }
}

export default new LocalStorageAdapter();
