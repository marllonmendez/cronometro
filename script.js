window.onload = function(){
    
    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById('tens');
    var appendSeconds = document.getElementById('seconds');
    var btStart = document.getElementById('bt-start');
    var btStop = document.getElementById('bt-stop');
    var btReset = document.getElementById('bt-reset');
    var interval ;

    btStart.onclick = function(){
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    btStop.onclick = function(){
        clearInterval(interval);
    }

    btReset.onclick = function(){
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }

    function startTimer(){
        tens++;

        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }
        
        if(tens > 9){
            appendTens.innerHTML = tens;
        }
        
        if(tens > 99){
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
    }
}

