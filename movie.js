$(document).ready(function() {
    // Listen for the form submission
    $("#rateForm").on("submit", function(e) {
      // Prevent the default form submission behavior
      e.preventDefault();
      
      // Get values from the form using 'let' instead of 'var'
      let title = $("#title").val();
      let rating = $("#rating").val();
      
      // Create a new entry with a remove button, also using 'let'
      let newEntry = $("<div class='entry'>Title: " + title + ", Rating: " + rating + "<button class='remove-btn'>Remove</button></div>");
      
      // Attach a click event to the remove button to remove this entry when clicked
      newEntry.find('.remove-btn').click(function() {
        newEntry.remove();
      });
      
      // Append the new entry to the results div
      $("#results").append(newEntry);
      
      // Clear the form fields
      $("#title").val("");
      $("#rating").val("");
    });
  });
  