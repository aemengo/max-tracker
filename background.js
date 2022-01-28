// background.js

let velocity = "1";
let enabled = false;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ velocity });
  chrome.storage.sync.set({ enabled });
  console.log('[maxt] saved', `velocity: ${velocity},`, `enabled: ${enabled}`);
});
