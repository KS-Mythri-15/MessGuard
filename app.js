function submitData() {
    const rating = document.getElementById("rating").value;
    const feedback = document.getElementById("feedback").value;

    let data = JSON.parse(localStorage.getItem("ratings")) || [];

    data.push({ rating: Number(rating), feedback });

    localStorage.setItem("ratings", JSON.stringify(data));

    alert("Submitted!");
}

// Stats Page Logic
if (window.location.pathname.includes("stats_page.html")) {

    let data = JSON.parse(localStorage.getItem("ratings")) || [];

    if (data.length > 0) {
        let sum = data.reduce((a, b) => a + b.rating, 0);
        let avg = (sum / data.length).toFixed(1);

        document.getElementById("avg").innerText = avg;

        let status = "";
        if (avg >= 4) status = "🟢 Good";
        else if (avg >= 2) status = "🟡 Moderate";
        else status = "🔴 Bad";

        document.getElementById("status").innerText = status;
    } else {
        document.getElementById("avg").innerText = "No data";
        document.getElementById("status").innerText = "-";
    }
}