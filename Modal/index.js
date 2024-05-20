const openButton = document.querySelector('button');
const modalContainer = document.getElementById('modal-container');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('cross');

openButton.addEventListener('click', function(){
    modalContainer.style.display  = 'block';
})

closeButton.addEventListener('click', function(){
    modalContainer.style.display  = 'none';
})

window.addEventListener('click', function(e){
    console.log(e.target +" clicked")
    if(e.target === modalContainer && e.target !== modal){
        modalContainer.style.display  = 'none';
    }
    //We are using e.target to find out where the user is clicking and we will close the modal when the e.target is ModalContainer and not the modal itself.
})

