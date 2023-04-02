        // Get the "Other" radio button and "Other Title" input field
        const otherRadio = document.getElementById("title-other");
        const otherTitleInput = document.getElementById("other-title");

        // Add an event listener to the "Other" radio button
        otherRadio.addEventListener("click", () => {
          // If the "Other" radio button is checked, show the "Other Title" input field
          if (otherRadio.checked) {
            otherTitleInput.style.display = "block";
          } else {
            otherTitleInput.style.display = "none";
          }
        });
        // Get the form element
        const form = document.getElementById('add-user-form');

        // Listen for the form submission event
        form.addEventListener('submit', (event) => {
          // Prevent the default form submission behavior
          event.preventDefault();

          // Get the user input values
          const title = document.querySelector('input[name="title"]:checked').value;
          const firstName = document.getElementById('FirstName').value;
          const lastName = document.getElementById('Surname').value;
          const Email = document.getElementById('Email').value;
          const mobile = document.getElementById('mobile').value;


          // Send an AJAX request to the server to add the new user
          const xhr = new XMLHttpRequest();
          xhr.open('POST', 'add_user.php');
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          xhr.onload = function () {
            if (xhr.status === 200) {
              console.log(xhr.responseText);
              alert('User added successfully!');
              form.reset();
            } else {
              console.log('Request failed.  Returned status of ' + xhr.status);
            }
          };
          xhr.send(`title=${title}&first_name=${firstName}&surname=${lastName}&email=${Email}&mobile=${mobile}`);
        });
        
//----------------------------------------------------------------------------------------------------------------------------------------------------------
// SEARCH METHOD
//----------------------------------------------------------------------------------------------------------------------------------------------------------


// Get the form element
// Get the search form element
const searchForm = document.getElementById('search-user-form');

// Listen for the form submission event
searchForm.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the search query value
  const searchQuery = document.getElementById('search-name').value;

  // Send an AJAX request to the server to search for the user
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'search_user.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Parse the response as JSON
      const response = JSON.parse(xhr.responseText);
  
      // Get the table element
      const table = document.querySelector('table');
  
      // Remove any existing rows from the table
      while (table.rows.length > 1) {
        table.deleteRow(1);
      }
  
      // Loop through the response and create a new row for each record
      for (let i = 0; i < response.length; i++) {
        const record = response[i];
        const row = table.insertRow();
  
        // Add the data to the row
        row.insertCell().textContent = record.UserID;
        row.insertCell().textContent = record.Title;
        row.insertCell().textContent = record.FirstName;
        row.insertCell().textContent = record.Surname;
        row.insertCell().textContent = record.Mobile;
        row.insertCell().textContent = record.Email;
        row.insertCell().textContent = record.AddressLine1;
        row.insertCell().textContent = record.AddressLine2;
        row.insertCell().textContent = record.Town;
        row.insertCell().textContent = record.County;
        row.insertCell().textContent = record.Eircode;
      }
    } else {
      console.log('Request failed.  Returned status of ' + xhr.status);
    }
  };
  
  xhr.send(`search_query=${searchQuery}`);
});






