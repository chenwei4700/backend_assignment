console.log("fuck you js")//console.log:印出

//變數宣告(var(global)、const(area)、let(area)),資料類型可隨意修改ex.var name = "小白"; name = 80;

var name = "小白";
var age = 87;
var sex_male = true;
document.write(name);//document.write:在HTML檔案裡寫東西
document.write("<br/>");
document.write(name.length);//長度，還有toUpperCase、charAt、indexOf...等Java的函式
document.write("<br/>");

//數字
var x = 3;
document.write(2+3*5);
document.write("<br/>");
document.write(Math.abs(x));//若需要用到數學函式要加Math.
document.write("<br/>");

//計算機prompt()=input()，prompt()預設為字串
var n1 = parseInt(prompt("請輸入數字1"));
var n2 = parseInt(prompt("請輸入數字2"));
document.write(n1 + n2)
document.write("<br/>");
