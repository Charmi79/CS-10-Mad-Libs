// Create a mad lib assignment

// Event Listener
document.getElementById("btn1").addEventListener("click", MadLib);
// Function
function MadLib() {
  // Input
  let animal = document.getElementById("animal-in").value;
  let action = document.getElementById("action-in").value;
  let location = document.getElementById("location-in").value;

  // Process
  let msg = `The ${animal} decides to ${action} at ${location}.`;

  // Output
  document.getElementById("output").innerHTML = msg;
}
