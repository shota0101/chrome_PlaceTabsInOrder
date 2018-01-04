chrome.tabs.onCreated.addListener(function(tab){
  sendTabs();
});
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  sendTabs();
});
chrome.tabs.onRemoved.addListener(function(tabId, removeInfo){
  sendTabs();
});

function sendTabs(){
  chrome.windows.getAll({populate: true}, function(windows){
    for(let window of windows) {
      for(let i in window.tabs) {
	var tab = window.tabs[i];

	// タブのタイトルの先頭の順番を付与
	chrome.tabs.sendMessage(
	  tab.id,
	  {tabNum: i}, // タブの順番（左から数えて何番目か）
	  function(response){
	  });
      }
    }
  });
}

