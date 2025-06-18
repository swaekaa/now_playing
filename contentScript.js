function sendNowPlaying() {
  const urlParams = new URLSearchParams(window.location.search);
  const videoId = urlParams.get("v");
  const title = document.title.replace(" - YouTube", "");

  if (videoId) {
    chrome.runtime.sendMessage({
      type: "SET_NOW_PLAYING",
      title,
      videoId,
    });
  }
}

sendNowPlaying();

window.addEventListener("yt-navigate-finish", () => {
  sendNowPlaying();
});
