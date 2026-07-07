let totalClicks = 0;

document.addEventListener("click", async function (event) {

    totalClicks++;

    const element = event.target;

    // Find the nearest parent having class="card"
    const card = element.closest(".card");

    const clickData = {

        totalClicks: totalClicks,

        tag: element.tagName,

        text: card ? card.innerText.trim() : element.innerText.trim(),
        elementId: card ? card.id : element.id,

        class: card ? "card" : element.className,

        x: event.clientX,

        y: event.clientY,

        page: window.location.pathname,

        time: new Date().toLocaleString()

    };

    console.log("Card Found:", card);
    console.log("Card ID:", card ? card.id : "No Card");
    console.log(clickData);
    try {

        const response = await fetch("https://click-tracker-z9ik.onrender.com/click", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(clickData)

        });

        const result = await response.json();

        console.log(result);

    }
    catch (error) {

        console.error(error);

    }

});