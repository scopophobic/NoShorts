chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.url.includes("youtube.com/shorts")
  ) {
    chrome.tabs.update(tabId, { url: chrome.runtime.getURL("blocked.html") });
  }
});
