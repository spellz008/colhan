// function showSidebar(){
//     const sidebar = document.querySelector('.sidebar')
//     sidebar.style.display = 'block'
// }

const buttons = document.querySelectorAll('.accordion');

buttons.forEach(function(btn){
    btn.onclick = function() {
        const pannel = this.nextElementSibling;
        if (pannel.style.display =='block'){
            pannel.style.display = 'none'
        }else {
            pannel.style.display = 'block';
        }
    }
})