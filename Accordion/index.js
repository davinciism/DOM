const accordion = document.getElementsByClassName('content') //The 3 accordions


for(i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}