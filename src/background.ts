// src/background.ts

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "VERIFY_NEWS") {
      console.log("Am primit titlul pentru verificare:", message.title);
      
      // Momentan simulăm o căutare
      // În pasul următor vom adăuga fetch-ul către Google Fact Check API
    }
  });