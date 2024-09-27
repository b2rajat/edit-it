document.getElementById('logButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.executeScript(tabs[0].id, {
        code: 'document.designMode = "on"'
      });
    });
  });
  