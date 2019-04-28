//定数を定義
const yes = '了解しました。'
const no = 'キャンセルしました。'
const other = 'それ以外の答え方をしました。'

//変数を定義
var answer = window.prompt('ヘルプを見ますか？');

//条件およびカッコ内の条件式に応じた処理を行う
if (answer === 'はい'){
  window.alert(yes);
  document.getElementById('choice').textContent = 'はいと入力してOKボタンをクリックしました。'
}
else if(answer === 'いいえ'){
  window.alert(no);
  document.getElementById('choice').textContent = 'いいえと入力してOKボタンをクリックしました。'
}
else{
  window.alert(other);
  document.getElementById('choice').textContent = '「はい」又は「いいえ」を入力してOKボタンをクリックして下さい。「」は不要です。'
}


//上手くいかなった処理まとめ（要修正）
/*

*/
