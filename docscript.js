const responsive = () => {
    const tela = window.screen.width
    const changeDOM = document.querySelector('#container')
    if (tela <= 620){
        changeDOM.style.gridTemplateRows = '10vh 30vh auto';
    }else {
        changeDOM.style.gridTemplateRows = '10vh 90vh auto';
    }
    
}
window.onload = responsive()
window.onresize = responsive()


function toggle() {
    scroll(0,0)     
    } 

// old hide and show function to trash
/*
function toggle(id, id2) {
    var state = document.getElementById(id).style.display;
        if (state == 'block') {
            document.getElementById(id).style.display = 'none';
        } else {    
            document.getElementById(id).style.display = 'block';
            document.getElementById(id2).style.gridTemplateRows = '10vh 20vh auto';
        }
        event.preventDefault()
        scroll(0,0)   
    } 
*/