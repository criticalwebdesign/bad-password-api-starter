// main.js - client-side code to connect to the bad password API

// REFERENCES
let password = document.querySelector("#password");
let info = document.querySelector("#info");
let button = document.querySelector("#submit");
// INPUTS
let endearments = document.querySelector("#endearments");
let pets = document.querySelector("#pets");
let patterns = document.querySelector("#patterns");
let colors = document.querySelector("#colors");
let dates = document.querySelector("#dates");
let cities = document.querySelector("#cities");
let lowercase = document.querySelector("#lowercase");

// EVENTS > display a common password on load
window.addEventListener("load", updatePassword);
// EVENTS > submit listener 
document.addEventListener("submit", (e) => {
  e.preventDefault();
  updatePassword();
});

// select all checkboxes
let checkboxes = document.querySelectorAll("input[type=checkbox]");
// add a change event listener to each
checkboxes.forEach((ele) => {
  ele.addEventListener("change", handleCheck);
});

// only allow 2 custom parameters
function handleCheck(e) {
  // get all checked
  let currentlyChecked = document.querySelectorAll("input:checked");
  if (currentlyChecked.length > 2) {
    // uncheck current
    e.target.checked = false;
    displayInfo(`Don't you want ${getSynonym()} password?`);
  }
  updatePassword();
}

async function updatePassword() {
  // base url for API
  let url = "https://bad-password-api.glitch.me/api";

  // add the strings to a new array
  let formData = [];
  if (endearments.checked) formData.push("endearments");
  if (pets.checked) formData.push("pets");
  if (patterns.checked) formData.push("patterns");
  if (colors.checked) formData.push("colors");
  if (dates.checked) formData.push("dates");
  if (cities.checked) formData.push("cities");
  if (lowercase.checked) formData.push("lowercase");

  // if no options selected get a common password
  if (formData.length < 1) {
    url += "/common";
  } else {
    // join and append options to the end
    url += "/custom?params=" + formData.join(",");
    console.log(formData);
  }

  // request data
  await fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log("fetch() response", json);
      password.value = json.message;
    });
}

/*************************************
 ************* EXTRA *****************
 *************************************/

/**
 * Copy to clipboard
 */
password.addEventListener("click", async function (event) {
  try {
    await navigator.clipboard.writeText(this.value);
    displayInfo("password copied");
  } catch (err) {
    displayInfo("password failed to copy! " + err);
  }
});

/**
 * Display info message
 */
let timeout;
function displayInfo(str) {
  clearTimeout(timeout);
  // if (info.innerHTML != "") return;
  info.innerHTML = str;
  timeout = setTimeout(function () {
    info.innerHTML = "";
    timeout = undefined;
  }, 2000);
}

function getSynonym() {
  let str = randomFromArray(badSynonyms);
  if (/^[aeiou]$/i.test(str.charAt(0))) str = "an " + str;
  else str = "a " + str;
  return str;
}
let badSynonyms = `bad
        atrocious
        awful
        cheap
        crummy
        dreadful
        regrettable
        dreadful
        unusable
        lousy
        poor
        sad
        unacceptable
        garbage
        imperfect
        inferior
        abominable
        careless
        crappy
        defective
        deficient
        erroneous
        fallacious
        faulty
        inadequate
        slipshod
        substandard
        unsatisfactory
        `
  .trim()
  .split(/\W+/);
function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// // This version sends data to server in the body of a POST request
// async function updatePasswordPost() {

//     // store form data in an object to send to server
//     let formData = {
//         common: common.checked || false,
//         endearments: endearments.checked || false,
//         pets: pets.checked || false,
//         patterns: patterns.checked || false,
//         colors: colors.checked || false,
//         dates: dates.checked || false,
//         cities: cities.checked || false,
//         // lowercase: lowercase.checked || false,
//     }
//     console.log(formData)

//     // create options object to send data, options
//     let options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//     }

//     // request data
//     await fetch('https://bad-password-api.glitch.me/api/custom', options)
//         .then(response => response.json())
//         .then(json => {
//             console.log("fetch() response", json);
//             password.value = json.password;
//         });
// }
