const sha512script = document.createElement("script");
sha512script.src = "../../assets/sha512.min.js";
document.head.appendChild(sha512script);

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e) => {
  const input_email = document.getElementById("email").value;
  const plainPassword = document.getElementById("password").value;
  const hashedpassword = sha512(plainPassword);
  try {
    chrome.storage.local.get(["user"], function (result) {
      var email = result.user[1];
      var password = result.user[2];
      if (password == hashedpassword && email == input_email) {
        window.location.replace("../navigator/navigator.html");
      } else {
        alert("Incorrect email or password");
      }
    });
  } catch (error) {
    alert(error);
    alert("No user found");
  }
});
