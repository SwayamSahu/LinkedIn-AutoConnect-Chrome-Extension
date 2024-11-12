document.getElementById('start-button').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ['content.js']
    }).then(() => {
      console.log("Content script injected and started.");
    }).catch((error) => console.error("Failed to inject content script:", error));
  });
  document.getElementById('start-button').disabled = true;
  document.getElementById('stop-button').disabled = false;
  document.getElementById('status').textContent = "Sending connection requests...";
});

document.getElementById('stop-button').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "stop" }, (response) => {
      if (chrome.runtime.lastError) {
        console.error("Error:", chrome.runtime.lastError.message);
      } else {
        console.log("Content script stopped.", response.status);
      }
    });
  });
  document.getElementById('start-button').disabled = false;
  document.getElementById('stop-button').disabled = true;
  document.getElementById('status').textContent = "Stopped.";
});


chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "allClicked") {
      document.getElementById('start-button').disabled = false;
      document.getElementById('stop-button').disabled = true;
      document.getElementById('status').textContent = "All connection requests sent.";
      console.log("All buttons are clicked."); 
    }
});
