document.addEventListener('DOMContentLoaded', function() {
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const travelDaysInput = document.getElementById('travelDays');

    // Function to calculate end date based on start date and travel days
    function calculateEndDate() {
        if (startDateInput.value && travelDaysInput.value) {
            const startDate = new Date(startDateInput.value);
            const travelDays = parseInt(travelDaysInput.value);
            const endDate = new Date(startDate.getTime() + travelDays * 24 * 60 * 60 * 1000);
            endDateInput.value = endDate.toISOString().split('T')[0];
        }
    }

    // Function to calculate travel days based on start and end dates
    function calculateTravelDays() {
        if (startDateInput.value && endDateInput.value) {
            const startDate = new Date(startDateInput.value);
            const endDate = new Date(endDateInput.value);
            const travelDays = Math.round((endDate - startDate) / (1000 * 3600 * 24));
            travelDaysInput.value = travelDays;
        }
    }

    // Event listeners for input changes
    startDateInput.addEventListener('change', function() {
        calculateTravelDays();
        calculateEndDate();
    });

    endDateInput.addEventListener('change', function() {
        calculateTravelDays();
    });

    travelDaysInput.addEventListener('input', function() {
        calculateEndDate();
    });

    // Additional event listener for keyup to ensure real-time updates
    travelDaysInput.addEventListener('keyup', function() {
        calculateEndDate();
    });

    endDateInput.addEventListener('keyup', function() {
        calculateTravelDays();
    });
});
