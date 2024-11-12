(() => {
  let stop = false;
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "stop" && !stop) {  
      stop = true;
      console.log("Stopped");  
      sendResponse({ status: "stopped"}); 
    }
  });

  async function sendConnectionRequests() {
    stop = false;

    const buttons = Array.from(document.querySelectorAll("button"));

    for (const button of buttons) {
      if (stop) break;
      
      if (button.innerText === "Connect") {
        
        button.scrollIntoView({ behavior: "smooth", block: "center" });
        
        const delay = Math.floor(Math.random() * 5000) + 5000;
        
        button.click();
        console.log("Clicked Connect button.");
        
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        const sendWithoutNoteButton = document.querySelector("button[aria-label='Send without a note']");
        if (sendWithoutNoteButton) {
          sendWithoutNoteButton.click();
          console.log("Clicked Send without a note button.");
        }

        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        
        console.log("Skipped a button (not a Connect button).");
      }
    }

    if (!stop) {
      console.log("All connect buttons are clicked.");
      chrome.runtime.sendMessage({ action: "allClicked" });
    }
  }

  sendConnectionRequests();
})();
