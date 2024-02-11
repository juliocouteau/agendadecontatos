const form = document.getElementById('contactForm');
    const table = document.getElementById('contactTable');

    form.addEventListener('submit', function(event) {
    event.preventDefault();

    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    
    const newRow = table.insertRow(-1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    
    cell1.textContent = name;
    cell2.textContent = phone;

    
    form.reset();
    });