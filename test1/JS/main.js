$(document).ready(function(){
$("textarea").keydown(function(e){
	if(e.ctrlKey && e.keyCode == 13){
		startComm();
	}
});
window.onload = function(){
	document.getElementById('add').onclick = startComm;
};

function startComm(){
	var text = document.getElementById('txt').value;
	var comm = document.createElement('div');
	comm.className = "comments__item mt-3 mb-3";
	var names = document.createElement('span');
	names.className = "comments__name";
	var date = document.createElement('span');
	date.className = "comments__date";
	
	var newText = document.createTextNode(text);
	var newText2 = document.createTextNode('Вячеслав Третьяк');
	var newText3 = document.createTextNode('09 апреля 2019');
	comm.appendChild(newText);
	names.appendChild(newText2);
	date.appendChild(newText3);
	document.getElementById('comments__item').appendChild(names);
	document.getElementById('comments__item').appendChild(date);
	document.getElementById('comments__item').appendChild(comm);
	document.getElementById('txt').value = '';
	return true;
};
});
