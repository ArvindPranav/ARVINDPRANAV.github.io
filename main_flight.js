document.addEventListener('DOMContentLoaded', function () {
    // Date picker initialization for departure and return fields
    var departureDatePicker = new Pikaday({
        field: document.getElementById('departure-date'),
        format: 'YYYY-MM-DD'
    });

    var returnDatePicker = new Pikaday({
        field: document.getElementById('return-date'),
        format: 'YYYY-MM-DD'
    });

    // Autocomplete functionality for the airport inputs
    const airports = [
        'Chennai International Airport: MAA',
        'Chhatrapati Shivaji International Airport: BOM',
        'Indira Gandhi International Airport: DEL',
        'Mysore Mandakalli Airport: MYQ',
        'Sardar Vallabhai Patel International Airport: AMD'
    ];

    const suggestionsBox = document.getElementById('suggestions');
    document.getElementById('from').addEventListener('keyup', function () {
        autocomplete(this.value, this.id);
    });

    document.getElementById('to').addEventListener('keyup', function () {
        autocomplete(this.value, this.id);
    });

    function autocomplete(value, inputId) {
        const inputField = document.getElementById(inputId);
        suggestionsBox.innerHTML = ''; // Clear previous suggestions
        suggestionsBox.style.display = 'none'; // Hide suggestions by default

        if (!value) {
            return;
        }

        let suggestions = airports.filter(airport => airport.toLowerCase().includes(value.toLowerCase()));

        if (suggestions.length > 0) {
            suggestionsBox.style.display = 'block';
            suggestions.forEach(airport => {
                const div = document.createElement('div');
                div.innerHTML = airport;
                div.addEventListener('click', function () {
                    inputField.value = this.innerHTML;
                    suggestionsBox.style.display = 'none';
                });
                suggestionsBox.appendChild(div);
            });
        }
    }

    // Event handler for the search button click
    document.getElementById('searchButton').addEventListener('click', function () {
        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;
        const departureDate = departureDatePicker.toString();
        const returnDate = returnDatePicker.toString();
        const travelerCount = document.getElementById('travelerCount').value;
        const coachClass = document.getElementById('coach-class').value;

        // Dummy function for now, implement accordingly
        searchFlights(from, to, departureDate, returnDate, travelerCount, coachClass);
    });

    function searchFlights(from, to, departureDate, returnDate, travelerCount, coachClass) {
        // Here you would implement the logic to search for flights
        // and display them on a new webpage or a section of the current page.
        // For now, let's just log the inputs.
        console.log(`Searching flights from ${from} to ${to} on ${departureDate} returning on ${returnDate} for ${travelerCount} travelers in ${coachClass} class.`);
    }

    // Event handler for clicks outside of the suggestions box to close it
    document.addEventListener('click', function (event) {
        if (!event.target.matches('#from') && !event.target.matches('#to')) {
            suggestionsBox.style.display = 'none';
        }
    });

    // Additional event handlers and functions can go here
});
