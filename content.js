function getTrackInfo() {
  const titleElement = document.querySelector(
    '[data-testid="context-item-info-title"]'
  );
  const artistElement = document.querySelector(
    '[data-testid="context-item-info-artist"]'
  );

  if (titleElement) {
    return {
      title: titleElement.innerText,
      artist: artistElement ? artistElement.innerText : "Unknown Artist",
    };
  }
  return null;
}

setInterval(() => {
  const trackInfo = getTrackInfo();
  if (trackInfo) {
    chrome.runtime.sendMessage(trackInfo);
  }
}, 1000);

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "playPause") {
    document.querySelector('[data-testid="control-button-playpause"]')?.click();
  } else if (message.action === "nextTrack") {
    document
      .querySelector('[data-testid="control-button-skip-forward"]')
      ?.click();
  } else if (message.action === "previousTrack") {
    document.querySelector('[data-testid="control-button-skip-back"]')?.click();
  }
});
