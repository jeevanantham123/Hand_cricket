var user_rand;
var score = 0;
var comp_score = 0;
$(document).ready(function () {
         $("img").hide();
         $(".out").hide();
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
                    $("#" + rand).fadeToggle();
                    $("#u" + user_rand).fadeToggle();
                    if (localStorage.getItem("choice") == "bat") {
                        alert("your score:"+score);
                        score = 0;
                        user_rand=0;
                        localStorage.setItem("choice", "no choice");
                        $('#c').html("");
                        $("#cscore").html("");
                        redirect();

                    }
                    else if (localStorage.getItem("choice") == "bowl") {
                        alert("opponent score:"+comp_score);
                        comp_score = 0;
                        user_rand=0;
                        localStorage.setItem("choice", "no choice");
                        $('#c').html("");
                        $("#cscore").html("");
                        redirect();

                    }
                } else {

                    if (localStorage.getItem("choice") == "no choice") {
                        console.log("null");
                        alert("select bat or bowl option");
                        user_rand=0;
                    } else if (localStorage.getItem("choice") == "bat") {
                        $("#" + rand).fadeToggle();
                        $("#u" + user_rand).fadeToggle();
                        $("#" + rand).fadeToggle();
                        $("#u" + user_rand).fadeToggle();
                        score = score + Number(user_rand);
                        $("#cscore").html("<h4>Batting:User&nbsp;&nbsp;&nbsp;Bowling:Computer&nbsp;&nbsp;&nbsp;Score:"+score+"</h4>");
                        user_rand = 0;
                    } else if (localStorage.getItem("choice") == "bowl") {
                        $("#" + rand).fadeToggle();
                        $("#u" + user_rand).fadeToggle();
                        $("#" + rand).fadeToggle();
                        $("#u" + user_rand).fadeToggle();
                        comp_score = comp_score + Number(rand);
                        $("#cscore").html("<h4>Batting:Computer&nbsp;&nbsp;&nbsp;Bowling:User&nbsp;&nbsp;&nbsp;Score:"+comp_score+"</h4>");
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