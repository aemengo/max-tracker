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
    console.log('[maxt] saved', `velocity: ${velocity},`, `enabled: ${enabled}`);

    revertVelocity.disabled = false;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs[0].url.startsWith("https://www.pivotaltracker.com/n/projects")) {
            chrome.tabs.reload(tabs[0].id);
        }
    });

    window.close();
})

revertVelocity.addEventListener("click", async () => {
    let enabled = false;

    chrome.storage.sync.set({ enabled });

    revertVelocity.disabled = true;
    console.log('[maxt] saved', `enabled: ${enabled}`);
})
