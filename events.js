function toggleEventDetails(eventId) {
    document.getElementById(eventId).classList.toggle("hidden");
}

function rsvpEvent(eventName, event) {
    event.stopPropagation(); // Prevents event card click
    alert(`🎉 You have successfully RSVP'd for ${eventName}!`);
}

function filterEvents() {
    let searchValue = document.getElementById("searchBar").value.toLowerCase();
    let filterValue = document.getElementById("eventFilter").value;
    let events = document.querySelectorAll(".event-card");

    events.forEach(event => {
        let eventTitle = event.querySelector(".event-content h4").innerText.toLowerCase();
        let eventCategory = event.classList.contains("upcoming") ? "upcoming" : "past";

        event.style.display = (eventTitle.includes(searchValue) && (filterValue === "all" || filterValue === eventCategory)) ? "block" : "none";
    });
}
function filterPastEvents() {
    let searchValue = document.getElementById("searchBar").value.toLowerCase();
    let pastEvents = document.querySelectorAll(".past-events-container .event-card");

    pastEvents.forEach(event => {
        let eventTitle = event.querySelector("h3").innerText.toLowerCase();

        if (eventTitle.includes(searchValue)) {
            event.style.opacity = "1";  // Fade in effect
            event.style.visibility = "visible";
            event.style.display = "block"; // Keeps the layout intact
        } else {
            event.style.opacity = "0";  // Fade out smoothly
            setTimeout(() => {
                event.style.visibility = "hidden";
                event.style.display = "none"; 
            }, 200); // Delay to allow fade-out effect
        }
    });
}

// Attach to the search bar event
document.getElementById("searchBar").addEventListener("keyup", filterPastEvents);