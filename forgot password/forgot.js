const nav = document.getElementById("nav2")
function showMenu(e){
	e.classList.add("hide");
	e.nextElementSibling.classList.remove("hide");
	nav.classList.remove("hidden");
	nav.style.width = "100%";
}
function hideMenu(e){
	e.classList.add('hide');
	e.previousElementSibling.classList.remove('hide');
	nav.classList.add('hidden');
	nav.style.width = "0%";
}