fetch("https://click-tracker-z9ik.onrender.com/clicks")
.then(res => res.json())
.then(data => {

    let login = 0;
    let register = 0;
    let card1 = 0;
    let card2 = 0;
    let card3 = 0;
    let empty = 0;

    data.forEach(click => {

        if (click.elementId === "loginBtn") {

            login++;

        }
        else if (click.elementId === "registerBtn") {

            register++;

        }
        else if (click.elementId === "card1") {

            card1++;

        }
        else if (click.elementId === "card2") {

            card2++;

        }
        else if (click.elementId === "card3") {

            card3++;

        }
        else {

            empty++;

        }

    });

    document.getElementById("totalClicks").innerText = data.length;
    document.getElementById("loginClicks").innerText = login;
    document.getElementById("registerClicks").innerText = register;
    document.getElementById("card1Clicks").innerText = card1;
    document.getElementById("card2Clicks").innerText = card2;
    document.getElementById("card3Clicks").innerText = card3;
    document.getElementById("emptyClicks").innerText = empty;

});

setInterval(() => {
    location.reload();
}, 3000);