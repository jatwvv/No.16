const form = document.getElementById("form");
const username = document.getElementById("username");
const usernameTwo = document.getElementById("usernameTwo");
const email = document.getElementById("email");
const radioOne = document.getElementById("radioOne");
const radioTow = document.getElementById("radioTow");
const textarea = document.getElementById("textarea");
const checkbox = document.getElementById("checkbox");

//to prevent submit btn from working till it validates
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});
//setting err message
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
//remove all white spaces that the input has
const validateInputs = () => {
  const usernameValue = username.value.trim();
  const usernameTwoValue = usernameTwo.value.trim();
  const emailValue = email.value.trim();
  const radioOneValue = radioOne.value.trim();
  const radioTowValue = radioTow.value.trim();
  const textareaValue = textarea.value.trim();
  const checkboxValue = checkbox.value.trim();

  if (usernameValue === "") {
    setError(username, "This Field is Required");
  } else {
    setSuccess(username);
  }
  if (usernameTwoValue === "") {
    setError(usernameTwo, "This Field is Required");
  } else {
    setSuccess(usernameTwo);
  }
  if (emailValue === "") {
    setError(email, "This field is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Please enter a valid email address");
  } else {
    setSuccess(email);
  }
  if (textareaValue === "") {
    setError(textarea, "This Field is Required");
  } else {
    setSuccess(usernameTwo);
  }
  if (radioOneValue === "") {
    setError(radioOneValue, "This Field is Required");
  } else {
    setSuccess(usernameTwo);
  }
};
