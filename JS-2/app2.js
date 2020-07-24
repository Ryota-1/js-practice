//　くり返し処理while文
var max = 278;
var num = 1;
var count = 0;

while(num < max){
	num = num * 2;
	count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');
// do while文にすると始めから条件がfalseの場合でも１回は処理が行なわれる。
// do{最低１回は行なわれる処理}while(条件式);