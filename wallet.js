function showcontent(id){
	var contents=document.querySelectorAll('.content');
	contents.forEach(function(content){
		content.style.display='none';
	});
	var selectedcontent=document.getElementById(id);
	if (selectedcontent){
		selectedcontent.style.display='block';
	}
}

