	document.getElementById('btn1').onclick = function() {
    	document.getElementById('btn1').hidden = true;
            document.getElementById('minus_1').hidden = false;
                document.getElementById('add_1').hidden = false;
    			}

	document.getElementById('btn2').onclick = function() {
    	document.getElementById('btn2').hidden = true;
        	document.getElementById('minus_2').hidden = false;
                document.getElementById('add_2').hidden = false;
				}

    document.getElementById('btn3').onclick = function() {
    	document.getElementById('btn3').hidden = true;
            document.getElementById('minus_3').hidden = false;
                document.getElementById('add_3').hidden = false;
                }

    document.getElementById('btn4').onclick = function() {
    	document.getElementById('btn4').hidden = true;
            document.getElementById('minus_4').hidden = false;
                document.getElementById('add_4').hidden = false;
                }

    document.getElementById('btn5').onclick = function() {
        document.getElementById('btn5').hidden = true;
            document.getElementById('minus_5').hidden = false;
                document.getElementById('add_5').hidden = false;
                }

    document.getElementById('btn6').onclick = function() {
	    document.getElementById('btn6').hidden = true;
            document.getElementById('minus_6').hidden = false;
                document.getElementById('add_6').hidden = false;
    			}

let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButtom.textColor = "#FFFFFF";
tg.MainButtom.color = "2cab37";

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

btn1.addEventListener("click", function() {
    if (tg.MainButtom.isVisible) {
        tg.MainButtom.hide();

    }
    else {
        tg.MainButtom.setText("Выбран товар 1");
        item = 1;
        tg.MainButtom.show();
    };
});

Telegram.WebApp.onEvent("MainButtomClicked", function(){
    tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);