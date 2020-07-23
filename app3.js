// for文　決められた回数の処理を繰り返す 例:１から１０までを繰り返し足し算する
var i;
var num = 0;

for(i = 1; i < 11; i++){
	num = num + i;
}

alert('１から１０まで足し算した結果は' + num + 'です');
// i++ は i+1 と同じonaji