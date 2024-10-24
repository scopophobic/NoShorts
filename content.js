if (window.location.href.includes("youtube.com/shorts")) {
    window.location.href = chrome.runtime.getURL("index.html");
  }