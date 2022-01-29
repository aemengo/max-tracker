// Reset velocity if needed
let configuredVelocity = null;
let stopUpdating = false;

const observer = new MutationObserver(function (mutations) {
    if (configuredVelocity === null) {
        chrome.storage.sync.get("velocity", ({velocity}) => {
            configuredVelocity = velocity;
        });
    }

    mutations.forEach(function (_) {
        if (configuredVelocity !== null && stopUpdating !== true) {
            let velocityBtn = document.querySelector('[type="button"][title="Velocity"][data-aid="VelocityIndicator"]');
            if (velocityBtn !== null) {
                velocityBtn.click();

                let velocityInput = document.getElementById('velocity_overridden_velocity');
                let submitBtn = document.querySelector('[type="submit"][title="Apply"]');
                if (velocityInput !== null && submitBtn !== null) {
                    velocityInput.value = configuredVelocity;
                    submitBtn.click();

                    observer.disconnect();
                    stopUpdating = true;
                    console.log("[maxt] set", `velocity: ${configuredVelocity}`);
                }
            }
        }
    })
});

chrome.storage.sync.get("enabled", ({enabled}) => {
    if (enabled) {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        setTimeout(function () {
            observer.disconnect();
        }, 5000);
    }
});
