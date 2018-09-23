window.onload = function() {
    $("#start").on("click", stopwatch.start);
    $("#done").on("click", stopwatch.stop);
};
  
  var intervalId;
  var clockRunning = false;

  
  var stopwatch = {
    time: 10,
    
    start: function() {
        $(".contentQ").fadeIn();
        $("#start").hide();
        if (!clockRunning) {                                    
          intervalId = setInterval(stopwatch.count, 1000);      // CUENTA DE UN SEGUNDO EN UN SEGUNDO
          clockRunning = true;
        }
    },
    stop: function() {
        clearInterval(intervalId);
        clockRunning = false;
        $("#alldone").fadeIn();
        correct = 0;
        incorrect = 0;
        noAnswer = 0;

        one = $('input:radio[name=one]:checked').val(); console.log(one);
            if (isNaN(one)){
                noAnswer += 1;
            }
            else if (one == 0 ) {
                incorrect += 1;
            }
            else {
                correct += 1;
            };

        two = $('input:radio[name=two]:checked').val(); console.log(two);
            if (isNaN(two)){
                noAnswer += 1;
            }
            else if (two == 0 ) {
                incorrect += 1;
            }
            else {
                correct += 1;
            };
        tree = $('input:radio[name=tree]:checked').val(); console.log(tree);
            if (isNaN(tree)){
                noAnswer += 1;
            }
            else if (tree == 0 ) {
                incorrect += 1;
            }
            else {
                correct += 1;
            };
        four = $('input:radio[name=four]:checked').val(); console.log(four);
            if (isNaN(four)){
                noAnswer += 1;
            }
            else if (four == 0 ) {
                incorrect += 1;
            }
            else {
                correct += 1;
            };
        five = $('input:radio[name=five]:checked').val(); console.log(five);
            if (isNaN(five)){
                noAnswer += 1;
            }
            else if (five == 0 ) {
                incorrect += 1;
            }
            else {
                correct += 1;
            };

        $("#correct").text("Correct: " + correct);
        $("#incorrect").text("Incorrect: " + incorrect);
        $("#noAnswer").text("Unaswer: " + noAnswer);
      },
    
    count: function() {
        stopwatch.time--;                                  
        var converted = stopwatch.timeConverter(stopwatch.time);  
        $("#display").text("Time remaining: " + converted);
        
        if (converted == "00:00"){
            clearInterval(intervalId);
            clockRunning = false;

            $("#display").text(converted + "    TIME OVER").css({"color":"yellow", "font-size":"120%","font-weight":"bold"});
            $("#alldone").fadeIn();
            correct = 0;
            incorrect = 0;
            noAnswer = 0;

            one = $('input:radio[name=one]:checked').val(); console.log(one);
                if (isNaN(one)){
                    noAnswer += 1;
                }
                else if (one == 0 ) {
                    incorrect += 1;
                }
                else {
                    correct += 1;
                };

            two = $('input:radio[name=two]:checked').val(); console.log(two);
                if (isNaN(two)){
                    noAnswer += 1;
                }
                else if (two == 0 ) {
                    incorrect += 1;
                }
                else {
                    correct += 1;
                };
            tree = $('input:radio[name=tree]:checked').val(); console.log(tree);
                if (isNaN(tree)){
                    noAnswer += 1;
                }
                else if (tree == 0 ) {
                    incorrect += 1;
                }
                else {
                    correct += 1;
                };
            four = $('input:radio[name=four]:checked').val(); console.log(four);
                if (isNaN(four)){
                    noAnswer += 1;
                }
                else if (four == 0 ) {
                    incorrect += 1;
                }
                else {
                    correct += 1;
                };
            five = $('input:radio[name=five]:checked').val(); console.log(five);
                if (isNaN(five)){
                    noAnswer += 1;
                }
                else if (five == 0 ) {
                    incorrect += 1;
                }
                else {
                    correct += 1;
                };

            $("#correct").text("Correct: " + correct);
            $("#incorrect").text("Incorrect: " + incorrect);
            $("#noAnswer").text("Unaswer: " + noAnswer);
        }                                                 
    },
    timeConverter: function(t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        }       
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
        
      },
     
    };
  
  
    
  
  
  
    
  