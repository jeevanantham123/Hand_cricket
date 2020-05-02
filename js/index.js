$(document).ready(function(){
    
    localStorage.setItem("choice","no choice");
    $("#link").hide();
    setTimeout(function(){alert("Instructions:\n Choose one option to start the game")},500);
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
