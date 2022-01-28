// Initialize form with default velocity
let inputVelocity = document.getElementById("input");
let changeVelocity = document.getElementById("apply");
let revertVelocity = document.getElementById("revert");

chrome.storage.sync.get("velocity", ({ velocity }) => {
    inputVelocity.value = velocity
});

chrome.storage.sync.get("rEnabled", ({ rEnabled }) => {
    revertVelocity.disabled = !rEnabled
});

changeVelocity.addEventListener("click", async () => {
    let velocity = inputVelocity.value
    let rEnabled = true

    chrome.storage.sync.set({ velocity });
    chrome.storage.sync.set({ rEnabled });
    revertVelocity.disabled = false
    console.log('[maxt] set:', `velocity: ${velocity}`, `revert-enabled: ${rEnabled}`);
})

revertVelocity.addEventListener("click", async () => {
    let rEnabled = false
    chrome.storage.sync.set({ rEnabled });
    revertVelocity.disabled = true
    console.log('[maxt] set:', `revert-enabled: ${rEnabled}`);
})
