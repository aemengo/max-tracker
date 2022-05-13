// background.js

let velocity = "100";
let enabled = true;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ velocity });
  chrome.storage.sync.set({ enabled });
  console.log('[maxt] saved', `velocity: ${velocity},`, `enabled: ${enabled}`);
});
