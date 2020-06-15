class UI {
    static changeTab (el) {
        if(el.classList.contains('signuptab')){
            document.querySelector('.signintab').style.borderBottomColor = 'rgb(92, 50, 50)';
            document.querySelector('.signintab').style.fontWeight = 'normal';
            document.querySelector('#signinform').style.display = 'none';
            document.querySelector('.signuptab').style.borderBottomColor = 'rgb(253, 212, 212)';
            document.querySelector('.signuptab').style.fontWeight = 'bold';
            document.querySelector('#signupform').style.display = 'block';
        }
        else{
            document.querySelector('.signuptab').style.borderBottomColor = 'rgb(92, 50, 50)';
            document.querySelector('.signuptab').style.fontWeight = 'normal';
            document.querySelector('#signupform').style.display = 'none';
            document.querySelector('.signintab').style.borderBottomColor = 'rgb(253, 212, 212)';
            document.querySelector('.signintab').style.fontWeight = 'bold';
            document.querySelector('#signinform').style.display = 'block';
        }
    }
}

//event listeners
document.querySelector('.tabs').addEventListener('click', (e) =>{
        UI.changeTab(e.target);
})