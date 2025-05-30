chrome.action.onClicked.addListener(() => {
    chrome.windows.create({
        url: "popup.html",
        type: "popup",
        width: 300,
        height: 40
    });
});

chrome.windows.create({
    url: "popup.html",
    type: "panel",
    width: 250,
    height: 105,
    focused: true
});