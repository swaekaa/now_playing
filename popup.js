chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const tab = tabs[0];
  if (!tab) return;

  chrome.runtime.sendMessage(
    { type: "GET_NOW_PLAYING", tabId: tab.id },
    (response = {}) => {
      const { title, videoId } = response;

      const titleEl = document.getElementById("title");
      const thumbnailEl = document.getElementById("thumbnail");

      if (title && videoId) {
        titleEl.style.display = "block";
        thumbnailEl.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        titleEl.textContent = title;
      } else {
        titleEl.style.display = "none"; // hide text
        thumbnailEl.src = "not_playing.png"; // your placeholder image
      }
    }
  );
});
