/*global chrome*/
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request.key);
});
