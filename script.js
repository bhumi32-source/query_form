document.getElementById("queryForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get user query
    var query = document.getElementById("queryInput").value;
  
    // Simulate server response (replace with actual server request)
    var answer = "This is the answer to your query: " + query;
  
    // Display answer
    document.getElementById("answerText").innerText = answer;
    document.getElementById("answer").classList.remove("hidden");
  });
  