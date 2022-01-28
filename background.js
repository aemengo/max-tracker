// background.js

let velocity = "1";
let rEnabled = false;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ velocity });
  chrome.storage.sync.set({ rEnabled });
  console.log('[maxt] set:', `velocity: ${velocity}`, `revert-enabled: ${rEnabled}`);
});
