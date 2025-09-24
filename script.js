document.getElementById("formvalid").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  checkUsername(username);
  checkemail(email);
  checkage(age);
});

function checkUsername(username) {
  if (username.length <= 5) {
    console.log("Username Must be longer than 5 characters");
  }
}

function checkemail(email) {
  let newemail = Array.from(email);
  let checkchar = newemail.findIndex((e) => e == "@");
  let checkstop = newemail.findIndex((e) => e == ".");
  let checkafter = newemail.length - checkstop;

  let diff = checkstop - checkchar;
  if (checkchar <= 2 || diff <= 3 || checkafter <= 3) {
    console.log(
      "Must have two characters before @ and between '@' and '.' and after '.'"
    );
  } else {
    console.log("success");
  }
}

function checkage(age) {
  if (age <= 18) {
    console.log("Age must be over 18");
  }
}
