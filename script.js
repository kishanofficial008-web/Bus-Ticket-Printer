function generateTicket() {

    // Get Values
    let name = document.getElementById("name").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let date = document.getElementById("date").value;

    let adult = parseInt(document.getElementById("adult").value) || 0;
    let minor = parseInt(document.getElementById("minor").value) || 0;

    // Validation

    if (name == "" || from == "" || to == "" || date == "") {
        alert("Please fill all required fields.");
        return;
    }

    if (from == to) {
        alert("From and To city cannot be the same.");
        return;
    }

    if (adult == 0 && minor == 0) {
        alert("Please enter at least one ticket.");
        return;
    }

    // Ticket Price

    let total = (adult * 100) + (minor * 50);

    // Display Ticket

    document.getElementById("tname").innerHTML = name;
    document.getElementById("tfrom").innerHTML = from;
    document.getElementById("tto").innerHTML = to;
    document.getElementById("tdate").innerHTML = date;
    document.getElementById("tadult").innerHTML = adult;
    document.getElementById("tminor").innerHTML = minor;
    document.getElementById("ttotal").innerHTML = total;

    // Show Ticket

    document.getElementById("ticket").style.display = "block";

}