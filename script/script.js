// Start Header events/interations
var btnnavbar = document.querySelector('#btnnavbar') ;
var nav = document.querySelector('#navbar') ;

function changeNavbar() {
    document.querySelector('body').classList.toggle('active') ;
    nav.classList.toggle('active') ;
    btnnavbar.classList.toggle('fa-times') ;
} ;

window.onscroll = () => {
    if (nav.classList == 'active'){
        changeNavbar() ;
    }
} ;

window.onresize = () => {
    if (window.innerWidth > 950 && nav.classList == 'active'){
        changeNavbar() ;
    } ;
} ;

document.querySelectorAll('#navbar a').forEach(item => item.addEventListener('click',function() {
    if (nav.classList == 'active') {
        changeNavbar() ;
    } ;
})) ;

btnnavbar.addEventListener('click',changeNavbar) ;
// Ends Header events/interations

