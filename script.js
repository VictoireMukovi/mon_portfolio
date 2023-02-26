let darkmode=false;
function changeDarkMode() {
    if (darkmode) {
        darkmode=false;
        document.documentElement.style.setProperty("--text-color","black");
        document.documentElement.style.setProperty("--background-color","#efe7e5");
        document.getElementById("dark_light_mode").innerHTML="Dark mode";
    }else{
        darkmode=true;
        document.documentElement.style.setProperty("--text-color","white");
        document.documentElement.style.setProperty("--background-color","black");
        document.getElementById("dark_light_mode").innerHTML="Light mode";

    }
}