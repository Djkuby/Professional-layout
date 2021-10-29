

function init() {
    let button = document.getElementById('burger');

    let navigation = document.getElementById('menu');

    let closure = document.getElementById('closure')
    
    
    button.addEventListener('click', function(){
        navigation.classList.toggle('visibility-visible');
    
    })
    closure.addEventListener('click', function(){
        navigation.classList.toggle('visibility-visible');
    
    })
}
window.onload = init