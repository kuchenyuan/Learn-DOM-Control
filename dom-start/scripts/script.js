
document.querySelector('.selectAll').addEventListener("click", function (evt) {
    evt.preventDefault();
    selectallskills();
});
document.querySelector('#minusItem').onclick = function (evt) {
    evt.preventDefault();
    addp (-1);
};
document.querySelector('#addItem').onclick = function (evt) {
    evt.preventDefault();
    addp (1);
};
function selectallskills () {
    var skills = document.querySelectorAll('.skill');
    // 全選功能:
    for (var i = 0; i < skills.length; i++) {
        var s = skills[i];
        s.checked = true;   //將s變數內的物件勾選 (checked設定為true)
    }
}
var addclick = addEventListener(click)
function addp (amount) {
    var priceField = document.querySelector('#item1Price');
    var quantityField = document.querySelector('#item1Quantity');
    var quantityInt = parseInt(quantityField.innerHTML);  //轉換為數字因<span>是html所以不是使用value使用innerHTML
    quantityInt += amount; //等於quantityInt = quantityInt + amount
    if (quantityInt < 0) {quantityInt = 0};
    quantityField.innerHTML = quantityInt;
    priceField.innerHTML = quantityInt * 300;

}