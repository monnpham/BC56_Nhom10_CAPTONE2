var button = document.createElement("button");
button.innerHTML = "Add Product";
button.classList.add("btn", "btn-add-product");

var table = document.querySelector("table");
var row = table.rows[0];

row.appendChild(button);
function openModal(modalId) {
    // Get the modal
    data_New_add()
    var modal = document.getElementById(modalId);

    // Show the modal
    modal.style.display = "block";
}

function closeModal(modalId) {
    // Get the modal
    var modal = document.getElementById(modalId);

    // Hide the modal
    modal.style.display = "none";
}


