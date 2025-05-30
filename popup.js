chrome.runtime.onMessage.addListener((message) => {
  if (message.title && message.artist) {
    document.getElementById("track-title").innerText = message.title;
    document.getElementById("track-artist").innerText = message.artist;
  }
});

function sendAction(action) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: action });
  });
}

document
  .getElementById("play-button")
  .addEventListener("click", () => sendAction("playPause"));
document
  .getElementById("next-button")
  .addEventListener("click", () => sendAction("nextTrack"));
document
  .getElementById("previous-button")
  .addEventListener("click", () => sendAction("previousTrack"));

function sendAction(action) {
  chrome.tabs.query({ url: "https://open.spotify.com/*" }, (tabs) => {
    if (tabs.length > 0) {
      chrome.tabs.sendMessage(tabs[0].id, { action: action });
    } else {
      console.log("Spotify tab not found!");
    }
  });
}

document
  .getElementById("play-button")
  .addEventListener("click", () => sendAction("playPause"));
document
  .getElementById("next-button")
  .addEventListener("click", () => sendAction("nextTrack"));
document
  .getElementById("previous-button")
  .addEventListener("click", () => sendAction("previousTrack"));
