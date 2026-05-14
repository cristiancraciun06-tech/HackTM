// src/content.ts
console.log("DeepCheck: Content script activat.");

function getArticleTitle(): string {
  const h1 = document.querySelector('h1')?.innerText;
  const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content');
  
  return ogTitle || h1 || document.title;
}

const newsTitle = getArticleTitle();

if (newsTitle) {
  // Trimitem titlul către Background Script pentru a fi verificat prin API
  chrome.runtime.sendMessage({ action: "VERIFY_NEWS", title: newsTitle });
}