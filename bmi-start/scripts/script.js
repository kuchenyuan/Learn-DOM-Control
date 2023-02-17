// 程式碼寫在這裡
function BMI(height, weight) {
    var h = parseInt(height) / 100;  //從13行document抓出來時為文件使用parseInt轉換為整數(Int為整數縮寫)
    var w = parseInt(weight);

    // return (weight / ((height /100) * (height / 100)));
    return (w / (h * h)).toFixed(2);
}
var calculate = document.querySelector('#calculate');
calculate.addEventListener("click", evt);
function evt (evt) {
    evt.preventDefault();
    calculateBMI();
    };



function calculateBMI() {
    var height = document.querySelector('#bodyHeight').value;
    var weight = document.querySelector('#bodyWeight').value; 
    var result = document.querySelector('#resultText');
    var body = document.querySelector('#over');

    if ((height != '') && (weight != '')) {
        result.innerHTML = BMI(height, weight);
    } else {
        alert('請輸入資料');
    }

    if (BMI(height, weight) > 24) {
        body.innerHTML = '該運動囉!'
    } else {
        body.innerHTML = '請繼續保持~'
    }

    // console.log(BMI(height, weight));
    // result.innerHTML = BMI(height, weight);
}
// var body = document.querySelector('#over');

//     if (result > 24) {
//         body.innerHTML = '該運動囉!'
//     } else {
//         body.innerHTML = '請繼續保持~'
//     }