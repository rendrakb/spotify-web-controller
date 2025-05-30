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
