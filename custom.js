var evnt_lstnr = document.addEventListener('scroll',runmove);
function runmove(e){
    if(e.scrollY < 100){
 document.querySelector('#sticky-header').style.backgroundColor = `blue`;
}else{
    alert('not apply');
}
}