document.addEventListener("DOMContentLoaded", handleFunctionality);

function handleFunctionality() {
  let myForm = document.getElementById("myForm");
  let greetingText = document.getElementById("greeting");
  let clearName = document.getElementById("clearName");

  //Checks if the user's name is stored on page load
  const savedName = localStorage.getItem("userName");
  if (savedName) {
    greetUser(savedName);
  };

  //Event listener for form submission.
  myForm.addEventListener('submit', handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();
    let userNameInput = document.getElementById('name');
    let userName = userNameInput.value.trim();

    if (userName !== '') {
      localStorage.setItem('userName', userName);
      greetUser(userName);
    }
  };

  //Event listener to clear saved name
  clearName.addEventListener('click', performClear);

  function performClear() {
    localStorage.clear('userName');
    greetUser(null);
  };

  function greetUser(name) {
    if (name) {
      greetingText.innerHTML = `Welcome ${name}! It's nice to meet you😊.`;
    } else {
      greetingText.innerHTML = `Hello there👋, Please enter your name.`
    }
  }
};