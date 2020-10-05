//nameFirst
//nameLast
//age
//phone
//email
//address
//classes

if ("students" in localStorage) {
  var students = JSON.parse(localStorage.getItem("students"));
  console.log(students);
} else {
  var students = {
    Students: [],
  };
}

// var students = {
//   Students: [],
// };

function clicklisten() {
  console.log("clicked");

  var newFirst = document.getElementById("firstName").value;
  var newLast = document.getElementById("lastName").value;
  var newAge = document.getElementById("age").value;
  var newPhone = document.getElementById("phone").value;
  var newEmail = document.getElementById("email").value;
  var newAddress = document.getElementById("address").value;
  var newClasses = document.getElementById("classes").value;

  students.Students.push({
    nameFirst: newFirst,
    nameLast: newLast,
    age: newAge,
    phone: newPhone,
    email: newEmail,
    address: newAddress,
    classes: newClasses,
  });
  localStorage.setItem("students", JSON.stringify(students));

  var register = JSON.parse(localStorage.getItem("students"));
  console.log(register);

  var i = "";

  for (i in register.Students) {
    document.getElementById("content").innerHTML = "";
    document.getElementById("content").innerHTML +=
      "<h2>Name: " +
      register.Students[i].nameFirst +
      " " +
      register.Students[i].nameLast +
      "</h2>" +
      "<p> Age: " +
      register.Students[i].age +
      "</p>" +
      "<p> Phone Number:" +
      register.Students[i].phone +
      "</p>" +
      "<p>Email:" +
      register.Students[i].email +
      "</p>" +
      "<p>Address" +
      register.Students[i].address +
      "</p>" +
      "<p>Classes" +
      register.Students[i].classes +
      "</p>";
  }
}

function clickShow() {
  document.getElementById("content").innerHTML = "";
  var register = JSON.parse(localStorage.getItem("students"));
  console.log(register);

  var i = "";

  for (i in register.Students) {
    console.log(register.Students[i].nameFirst);
    document.getElementById("content").innerHTML +=
      "<h2>Name: " +
      register.Students[i].nameFirst +
      " " +
      register.Students[i].nameLast +
      "</h2>" +
      "<p> Age: " +
      register.Students[i].age +
      "</p>" +
      "<p> Phone Number:" +
      register.Students[i].phone +
      "</p>" +
      "<p>Email:" +
      register.Students[i].email +
      "</p>" +
      "<p>Address" +
      register.Students[i].address +
      "</p>" +
      "<p>Classes" +
      register.Students[i].classes +
      "</p>";
  }
}
