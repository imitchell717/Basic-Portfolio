function w3_open() {
    document.getElementById("main").style.marginLeft = "25%";
 
    document.getElementById("mysidebar").style.width = "25%";

    document.getElementById("mysidebar").style.display = "block";

    document.getElementById("openNav").style.display = "none";
    $(document).ready(function() {
        $("body").on('click', '.top', function() {
            $("nav.menu").toggleClass("menu_show");
        });
    });
}

function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";

    document.getElementById("mysidebar").style.display = "none";

    document.getElementById("openNav").style.display = "inline-block";
}
