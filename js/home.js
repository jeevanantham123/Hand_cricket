var user_rand;
var score = 0;
var comp_score = 0;
$(document).ready(function () {

         $("img").hide();
         $(".out").hide();
         setTimeout(function(){alert("Instructions:\nClick a number to play")},100);
        function redirect(){
           setTimeout(function(){ window.location="index.html"},1000);
        }
        $("#q").click(function(){redirect();})
        function play() {
            if (user_rand > 0) {
                var rand = Math.floor(Math.random() * 6) + 1;
                if (rand == user_rand) {
                    $(".out").show();
                    $("#" + rand).fadeToggle();
                    $("#u" + user_rand).fadeToggle();
                    $("#" + rand).fadeToggle(1000);
                    $("#u" + user_rand).fadeToggle(1000);
                    if (localStorage.getItem("choice") == "bat") {
                        alert("your score:"+score);
                        score = 0;
                        user_rand=0;
                        localStorage.setItem("choice", "no choice");
                        $('#c').html("");
                        $("#cscore").html("");
                        setTimeout(function(){redirect()},300);

                    }
                    else if (localStorage.getItem("choice") == "bowl") {
                        alert("opponent score:"+comp_score);
                        comp_score = 0;
                        user_rand=0;
                        localStorage.setItem("choice", "no choice");
                        $('#c').html("");
                        $("#cscore").html("");
                        setTimeout(function(){redirect()},300);

                    }
                } else {

                    if (localStorage.getItem("choice") == "no choice") {
                        console.log("null");
                        alert("select bat or bowl option");
                        user_rand=0;
                    } else if (localStorage.getItem("choice") == "bat") {
                        $("#" + rand).fadeToggle();
                        $("#u" + user_rand).fadeToggle();
                        $("#" + rand).fadeToggle(1000);
                        $("#u" + user_rand).fadeToggle(1000);
                        score = score + Number(user_rand);
                        $("#cscore").html("Batting:User&nbsp;&nbsp;&nbsp;Bowling:Computer&nbsp;&nbsp;&nbsp;Score:"+score);
                        user_rand = 0;
                    } else if (localStorage.getItem("choice") == "bowl") {
                        $("#" + rand).fadeToggle();
                        $("#u" + user_rand).fadeToggle();
                        $("#" + rand).fadeToggle(1000);
                        $("#u" + user_rand).fadeToggle(1000);
                        comp_score = comp_score + Number(rand);
                        $("#cscore").html("Batting:Computer&nbsp;&nbsp;&nbsp;Bowling:User&nbsp;&nbsp;&nbsp;Score:"+comp_score);
                        user_rand = 0;
                    }


                }

            } else {
                alert("select a number");
            }
        }
        $("#one").click(function () {
            user_rand = "1";
            play();
        })
        $("#two").click(function () {
            user_rand = "2";
            play();
        })
        $("#three").click(function () {
            user_rand = "3";
            play();
        })
        $("#four").click(function () {
            user_rand = "4";
            play();
        })
        $("#five").click(function () {
            user_rand = "5";
            play();
        })
        $("#six").click(function () {
            user_rand = "6";
            play();
        })
    }

);