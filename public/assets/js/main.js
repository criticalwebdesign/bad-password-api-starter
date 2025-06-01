// main.js - client-side code to connect to the bad password API

// REFERENCES
let password = document.querySelector("#password");
let button = document.querySelector("#submit");

// EVENTS
window.addEventListener("load", updatePassword);
document.addEventListener("submit", (e) => {
  e.preventDefault();
  updatePassword();
});

// add a change event listener to each option
document.querySelectorAll("input[type=radio]").forEach((ele) => {
  ele.addEventListener("change", updatePassword);
});

// called from load and user events
async function updatePassword() {
  // 👉 add code inside this function (from Chapter 9) ...

  // get the value from both groups
  let group1 = document.querySelector("input[name=group1]:checked");
  let group2 = document.querySelector("input[name=group2]:checked");

  // base url for API
  // let url = "https://bad-password-api.glitch.me/api";
  let url = "/api";
  // append options to the end
  url += "/custom?params=" + group1.value + "," + group2.value;
  // console.log(url);

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

// /**
//  * Copy to clipboard
//  */
// password.addEventListener("click", async function (event) {
//   try {
//     await navigator.clipboard.writeText(this.value);
//     displayInfo("password copied");
//   } catch (err) {
//     displayInfo("password failed to copy! " + err);
//   }
// });

// /**
//  * Display info message
//  */
// let timeout;
// function displayInfo(str) {
//   clearTimeout(timeout);
//   // if (info.innerHTML != "") return;
//   info.innerHTML = str;
//   timeout = setTimeout(function () {
//     info.innerHTML = "";
//     timeout = undefined;
//   }, 2000);
// }
// displayInfo(`Don't you want ${getSynonym()} password?`);

// function getSynonym() {
//   let str = randomFromArray(badSynonyms);
//   if (/^[aeiou]$/i.test(str.charAt(0))) str = "an " + str;
//   else str = "a " + str;
//   return str;
// }
// let badSynonyms = `bad
//         atrocious
//         awful
//         cheap
//         crummy
//         dreadful
//         regrettable
//         dreadful
//         unusable
//         lousy
//         poor
//         sad
//         unacceptable
//         garbage
//         imperfect
//         inferior
//         abominable
//         careless
//         crappy
//         defective
//         deficient
//         erroneous
//         fallacious
//         faulty
//         inadequate
//         slipshod
//         substandard
//         unsatisfactory
//         `
//   .trim()
//   .split(/\W+/);
// function randomFromArray(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

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
