(() =>{
	let animContainer = document.querySelector("#preloader");
	var animItem = bodymovin.loadAnimation({
		wrapper : animContainer,
		animType : 'svg',
		loop : true,
		autoplay : true,
		path : './cdn/drop_in_the_ocean_.json'
	});

	function playAnimation(){
		animItem.play();
	}
	animContainer.addEventListener('mouseover',playAnimation);
})();