

function openPDF() {
    // Replace 'path/to/your-pdf-file.pdf' with the actual path to your PDF file
    window.open('C:\Users\hp\Desktop\Github\Minor_Project\home\Lecture1_py.pdf', '_blank');
}
document.addEventListener("DOMContentLoaded", function () {
    // Get modal element and close button
    var modal = document.getElementById("subscriptionModal");
    var closeButton = document.querySelector(".close-btn");

    // Function to show the modal
    function showModal() {
        modal.style.display = "flex"; // Make modal visible
    }

    // Show modal when the page loads
    setTimeout(showModal, 1000); // Adjust time to your preference (e.g., 1000ms = 1 second)

    // Function to close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Close the modal when the user clicks on the close button
    closeButton.addEventListener("click", closeModal);

    // Close the modal when the user clicks outside of the modal content
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            closeModal();
        }
    });

    // Optional: Prevent form submission to keep modal open for demo
    document.getElementById("subscriptionForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Subscription successful!");
        closeModal();
    });
});
// premium
document.querySelector(".btn-premium").addEventListener("click", function () {
    // Trigger a modal, navigate to premium page, or display a message
    alert("Redirecting to Purchase Premium page...");
    // window.location.href = "/premium"; // Use this for navigation
});
document.querySelector(".btn-premium").addEventListener("click", function () {
    window.location.href = "/premium.html"; // Adjust this to your file path
});
// view 
function openModal(bookId) {
    const modal = document.getElementById(bookId);
    modal.style.display = "block";
}


function closeModal(bookId) {
    const modal = document.getElementById(bookId);
    modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

document.querySelector(".mylib").addEventListener("click", function () {
    window.location.href = "/mylib.html"; // Adjust this to your file path
});