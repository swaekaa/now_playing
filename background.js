const nowPlayingData = {};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // --- from content script ---
  if (message.type === "SET_NOW_PLAYING" && sender.tab?.id !== undefined) {
    nowPlayingData[sender.tab.id] = {
      title: message.title,
      videoId: message.videoId,
    };
    return; // done
  }

  // --- from popup ---
  if (message.type === "GET_NOW_PLAYING") {
    const data = nowPlayingData[message.tabId] || {};
    sendResponse(data);           // always answer
    return true;                  // keep port open until response is sent
  }
});

// reinject on SPA navigation
chrome.webNavigation.onHistoryStateUpdated.addListener((d) => {
  if (d.url.includes("youtube.com/watch"))
    chrome.scripting.executeScript({ target: { tabId: d.tabId }, files: ["contentScript.js"] });
});
