function openNav() {
    if(screen.width>600){
        document.getElementById("mySidenav").style.width = "30%";
        }
        else{
            document.getElementById("mySidenav").style.width = "100%";
        }
    document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
    document.getElementById("use").style.backgroundColor =  "rgba(0,0,0,0.3)";


}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("use").style.backgroundColor =  "orange";
}