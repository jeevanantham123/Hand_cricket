var user_rand;
var score = 0;
var comp_score = 0;
$(document).ready(function () {
    var usertarget=localStorage.getItem("usertarget");
    var computertarget=localStorage.getItem("computertarget");
    var aud=document.getElementById("ipl");
    var hit=document.getElementById("hit");
    function playAudio() {
        aud.play();
      }
      
      function hitAudio() {
        hit.play();
      }
         $("img").hide();
         $(".out").hide();
         if(localStorage.getItem("choice")=="bat"){
             if(usertarget!="null"){
           setTimeout(function(){alert("\nInstructions:\n1:you are batting now! \n2:Your target:"+Number(usertarget)+"\n3:Click a number to play")},100);
             }
             if(usertarget=="null"){
                setTimeout(function(){alert("\nInstructions:\n1:you are batting now!  \n2:Click a number to play")},100);
             }
         }
         if(localStorage.getItem("choice")=="bowl"){
            if(computertarget!="null"){
                setTimeout(function(){alert("\nInstructions:\n1:you are bowling now! \n2:Computer target:"+Number(computertarget)+"\n3:Click a number to play")},100);
                  }
                  if(computertarget=="null"){
                     setTimeout(function(){alert("\nInstructions:\n1:you are bowling now!  \n2:Click a number to play")},100);
                  }             }
        function redirect(){
           setTimeout(function(){ window.location="index.html"},1000);
        }
        function redirect_home(){
            if (localStorage.getItem("choice") == "bat")
            { 
            localStorage.setItem("choice","bowl");
            setTimeout(function(){ window.location="home.html"},1000);
            }
            else if (localStorage.getItem("choice") == "bowl")
            { localStorage.setItem("choice","bat");
            setTimeout(function(){ window.location="home.html"},1000);
            }
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
                        localStorage.setItem("computertarget",score+1);
                        if(usertarget!=null){
                            if(score<usertarget){
                            setTimeout(function(){alert("you lose")},300);
                            setTimeout(function(){redirect()},100);
                            }
                        }
                        setTimeout(function(){redirect_home()},300);
                        alert("your score:"+score);
                        score = 0;
                        user_rand=0;
                        $('#c').html("");
                        $("#cscore").html("");
                    }
                    else if (localStorage.getItem("choice") == "bowl") {
                        localStorage.setItem("usertarget",comp_score+1);                        
                        if(computertarget!=null){
                            if(comp_score<computertarget){
                                playAudio();
                                setTimeout(function(){alert("you win")},300);
                                setTimeout(function(){redirect()},100);
                            }
                        }
                        setTimeout(function(){redirect_home()},300);
                        alert("Computer score:"+comp_score);
                        comp_score = 0;
                        user_rand=0;
                        $('#c').html("");
                        $("#cscore").html("");

                    }
                } else {
                    hitAudio();
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
                        if(usertarget!=null){
                            if(score>=usertarget){
                                playAudio();
                                setTimeout(function(){alert("you win")},1000);
                                setTimeout(function(){redirect()},300);
                        }
                        }
                        user_rand = 0;
                    } else if (localStorage.getItem("choice") == "bowl") {
                        $("#" + rand).fadeToggle();
                        $("#u" + user_rand).fadeToggle();
                        $("#" + rand).fadeToggle(1000);
                        $("#u" + user_rand).fadeToggle(1000);
                        comp_score = comp_score + Number(rand);
                        $("#cscore").html("Batting:Computer&nbsp;&nbsp;&nbsp;Bowling:User&nbsp;&nbsp;&nbsp;Score:"+comp_score);
                        if(computertarget!=null){
                            console.log(computertarget);
                            if(comp_score>=computertarget){
                                setTimeout(function(){alert("you lose")},1000);
                                setTimeout(function(){redirect()},300);
                        }
                        }
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