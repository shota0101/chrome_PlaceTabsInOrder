chrome.extension.onMessage.addListener(function(request, sender, sendResponse){
  
  var numChar = '';
  switch (request.tabNum) {
  case '3':
    numChar = '④';
    break;
  case '4':
    numChar = '⑤';
    break;
  case '5':
    numChar = '⑥';
    break;
  case '6':
    numChar = '⑦';
    break;
  case '7':
    numChar = '⑧';
    break;
  default:
    numChar = '';
    break;
  }

  var firstChar = document.title[0];
  var numStr = '④⑤⑥⑦⑧';
  // 既にタブの順番が先頭に付与されているかどうか
  var isNumbered = numStr.indexOf(firstChar) !== -1;

  // タブの順番を付与しない場合
  if(numChar === ''){
    if(isNumbered) // 元々順番が付与されている場合が取り除く
      document.title = document.title.slice(1);
    else
      return
  }

  // 付与しようとした順番が既に付与されている場合は終了
  if(numChar === firstChar)
    return;

  if(isNumbered)
    // 既に順番が付与されているが誤っている場合は更新（タブの順番を入れ替えた場合など）
    document.title = numChar + document.title.slice(1); // 先頭の数字(④など)を除去
  else
    document.title = numChar + document.title;
});
