function handleAuth() {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;

  if (!name || !email || !password || !dob) {
    alert("Please fill all fields");
    return;
  }

  const age = calculateAge(dob);
  const role = assignRole(age);

  const user = {
    name,
    email,
    dob,
    age,
    role,
    xp: 0,
    streak: 1,
    videosWatched: 0
  };

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("ageGroup", role);

  // redirect to dashboard
  window.location.href = "dashboard.html";
}

/* AGE CALCULATION */
function calculateAge(dob) {
  const birth = new Date(dob);
  const diff = Date.now() - birth.getTime();
  return new Date(diff).getUTCFullYear() - 1970;
}

/* ROLE ENGINE */
function assignRole(age) {
  if (age <= 12) return "kids";
  if (age <= 19) return "teens";
  return "adults";
}