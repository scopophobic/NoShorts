chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url.includes("youtube.com/shorts")) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: () => {
        if (window.location.href.includes("youtube.com/shorts")) {
          window.location.href = chrome.runtime.getURL("blocked.html");
        }
      }
    });
  }
});
