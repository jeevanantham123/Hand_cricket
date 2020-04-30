$(document).ready(function(){
    localStorage.setItem("choice","no choice");
    $("#link").hide();
    $("#bat").click(function () {
        localStorage.setItem("choice", "bat");
        $('#c').html("Batting");
        $("#link").show();


    })
    $("#bowl").click(function () {
        localStorage.setItem("choice", "bowl");
        $('#c').html("Bowling");
        $("#link").show();

    })
})
