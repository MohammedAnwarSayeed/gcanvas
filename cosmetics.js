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

const isAdmin = true;

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-content-btn');
    

    // Show the add button only for admins
    if (isAdmin) {
        addButton.classList.remove('hidden');
    }

    addButton.addEventListener('click', () => {
        const newContent = document.createElement('div');
        newContent.textContent = 'New content added!';
       
    });
});

