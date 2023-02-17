var d1 = document.getElementById('doll-1');
d1.innerHTML = '七龍珠';
var d1 = document.querySelector('#doll-1');
console.log(d1.innerHTML);
d1.innerHTML = '比斯及';
console.log(d1.innerHTML);
var d = document.querySelectorAll('.doll');
for (var i = 0; i < d.length; i++) {
    var dd = d[i];
    dd.innerHTML = '七龍珠' + (i+1);
}
//事件監聽 .addEventListener() / 預設事件取消先執行我所設定事件 .preventDefault()
var clicker = document.querySelector('#clicker');
// clicker.addEventListener(第1:事件觸發條件/動作(須加雙引號), 第2:事件動作)
clicker.addEventListener("click", evet);
function evet(evt) {
    evt.preventDefault();
    console.log('點擊事件觸發');
};

//事件寫法二: callback function
// clicker.onclick = function(evt) {
//     evt.preventDefault();
//     console.log('觸發2');
// };
