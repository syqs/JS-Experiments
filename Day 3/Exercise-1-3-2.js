var n = 100, song ='';

while (n>=0){
	if (n !== 0){
		song = song + ' ' + n + " bottles of beer on the wall! chug, chug, chug";
	}else{
		song+=" no bottles of beer! stumble, stumble, stumble...";
	}
	n--;
}

document.querySelector('#lyrics').textContent = song;  