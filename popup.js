// Initialize form with default velocity
const inputVelocity = document.getElementById("input");
const changeVelocity = document.getElementById("apply");
const revertVelocity = document.getElementById("revert");

chrome.storage.sync.get("velocity", ({ velocity }) => {
    inputVelocity.value = velocity;
});

chrome.storage.sync.get("enabled", ({ enabled }) => {
    revertVelocity.disabled = !enabled;
});

changeVelocity.addEventListener("click", async () => {
    let velocity = inputVelocity.value;
    let enabled = true;

    chrome.storage.sync.set({ velocity });
    chrome.storage.sync.set({ enabled });

    revertVelocity.disabled = false;
    console.log('[maxt] saved', `velocity: ${velocity},`, `enabled: ${enabled}`);
    window.close();
})

revertVelocity.addEventListener("click", async () => {
    let enabled = false;

    chrome.storage.sync.set({ enabled });

    revertVelocity.disabled = true;
    console.log('[maxt] saved', `enabled: ${enabled}`);
})
