var path = location.pathname.split('/')[1];

console.log(path);

function setActive(){
	if (!path){
		path = 'home';
	}
	$('#' + path).addClass('active');

	if (path == "checkout"){
		$cart_btn.addClass('active')
	}
}

setActive();
