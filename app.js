function changeMode(){
    let myBody = document.body;
    myBody.classList.toggle('myDark');
    let mode = document.getElementById('mode');
    mode.innerHTML='Light Mode';
    if(!myBody.classList.contains('myDark')){
        mode.innerHTML='Dark Mode';
    }
}