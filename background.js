initialise();

function initialise() {
    if (chrome.extension.inIncognitoContext) {
        chrome.action.onClicked.addListener((tab) => {
            chrome.tabs.create({ url: "calendar.html", active: true });
        });
    }
}
