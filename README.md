# Local Signal Storage

Local storage adapter serves enables developers to receive to local storage update events in the same tab. 🙂

In order to use it import localSignalStorage from this package and call it as you would call localStorage. For every update a localSignalStorage event will be dispatched on window. Remember to register event proxy if you wish to receive updates from the other tabs.🙂

## Installation
```
yarn install local-signal-storage
```
Or
```
npm install local-signal-storage
```

## Usage
```
import localSignalStorage from 'local-signal-storage';

/* Necessary to forward default localStorage events. */
localSignalStorage.registerEventProxy();

window.addEventListener('localSignalStorage', () => {
  console.log('Storage updated!');
});

localSignalStorage.setItem('key', 'value');
```
