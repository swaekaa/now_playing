# 🎵 Now Playing: YouTube Web Extension

A lightweight Chrome extension that shows the currently playing YouTube video — including the **title** and **thumbnail** — in the popup window. Automatically updates across **multiple tabs**, supports **autoplay, mixes, radio**, and falls back to a default image when nothing is playing.

---

## 🚀 Features

- 🎬 Shows title and thumbnail of the currently playing YouTube video
- 🔄 Auto-updates even on YouTube autoplay or playlist transitions
- 🧠 Works across multiple tabs
- 📷 Displays a custom image when nothing is playing
- 💡 No need to reload pages manually

---

## 📁 Folder Structure

```
your-extension/
├── background.js        # Stores per-tab now playing info and handles navigation
├── contentScript.js     # Extracts title and videoId from the YouTube page
├── popup.html           # UI shown in the extension popup
├── popup.js             # Handles popup logic and communicates with background
├── default.jpg          # Fallback image if no video is detected
├── icon.png             # Optional extension icon
└── manifest.json        # Chrome extension config
```



---

## 🧠 How It Works

- `contentScript.js` extracts video title and ID from YouTube pages
- It sends updates via `chrome.runtime.sendMessage()`
- `background.js` listens and stores the now playing data per tab
- `popup.js` queries the current tab and shows the relevant video info
- If no video is detected, `default.jpg` is shown and text is hidden

---

## 🛠️ Installation (For Developers)

1. Download or clone this repo
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select the `your-extension/` folder

---

## 📷 Customization

- Replace `default.jpg` with any placeholder image you like
- Replace `icon.png` with your preferred extension icon
- Change styling via `popup.html`'s `<style>` section

---

## 📦 Permissions Used

```json
"permissions": [
  "tabs",
  "scripting",
  "webNavigation"
],
"host_permissions": [
  "*://www.youtube.com/*"
]
