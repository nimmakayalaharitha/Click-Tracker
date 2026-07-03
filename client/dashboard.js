fetch("http://localhost:5000/clicks")
.then(res => res.json())
.then(data => {

    let login = 0;
    let register = 0;
    let card = 0;
    let empty = 0;

    data.forEach(click => {

        if (click.elementId === "loginBtn") {

            login++;

        }
        else if (click.elementId === "registerBtn") {

            register++;

        }
        else if (click.class && click.class.includes("card")) {

            card++;

        }
        else {

            empty++;

        }

    });

    document.getElementById("totalClicks").innerText = data.length;
    document.getElementById("loginClicks").innerText = login;
    document.getElementById("registerClicks").innerText = register;
    document.getElementById("cardClicks").innerText = card;
    document.getElementById("emptyClicks").innerText = empty;

});
setInterval(() => {
    location.reload();
}, 3000);