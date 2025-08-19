// P4 DRAFTS

// // let changeList = (output) =>
//   (document.getElementById("table-content").innerHTML = output);

// let display = () => {};

// let displayAll = () => {
//   let output = "";
//   let result = "";

//   // sharks.forEach((shark, i) => {
//   sharks.map((shark, i) => {
//     result = `
//         <tr class="person">
//           <td class="name">${shark.name}</td>
//           <td class="career">${sharks[i].career}</td>
//           <td class="net-worth">${sharks[i].netWorth / 1000000000}B</td>
//           <td class="univs">${sharks[i].universities.join(" • ")}</td>
//           <td class="major1">${sharks[i].majors.join(" • ")}</td>
//           <td class="note null-value">${sharks[i].note || "-"}</td>
//           <td class="email">${sharks[i].email.split("@")[0]}</td>
//         </tr>
//       `;

//     // result.join("\n");
//     output += result;
//   });

//   // console.log(result.join("\n"));
//   // result.join("\n");

//   return output;
// };
// changeList(displayAll());

// // output += result;

// // sharks.forEach((shark, i) => output += tableGenerator(i))
// // output += tableGenerator(i);

// // for (let i = 0; i < sharks.length; i++) {
// //   output += tableGenerator(i);
// // }

// // return output;

// // FILTERS ===========================================
// // ---------------------------------------------------

// // 1. By NAME ===========================================
// // FIX!!
// function filterByName(inputName) {
//   let lowerName = inputName.toLowerCase();

//   // sharks.forEach((shark, i))

//   for (let i = 0; i < sharks.length; i++) {
//     if (sharks[i].name.toLowerCase().contains(lowerName)) {
//       output += tableGenerator(i);
//     }
//   }

//   document.getElementById("table-content").innerHTML = output;
// }

// let nameSortingAToZ = () => {
//   let output = "";

//   let sortByName = sharks.sort((a, b) => a.name.localeCompare(b.name));

//   output = sortByName;
// };

// // BY NETWORTH =========================================
// let category = "";
// let orderNumAscending = (category) => {};

// // let gte10b = () => {
// //   let output = "";

// //   sharks.forEach((shark, i) => {
// //     if (sharks[i].netWorth >= 10000000000) {
// //       output += tableGenerator(i);
// //     }
// //   });

// //   return output;
// // };

// let ls10b = () => {
//   let output = "";

//   sharks.forEach((shark, i) => {
//     if (sharks[i].netWorth < 10000000000) {
//       output += tableGenerator(i);
//     }
//   });
//   return output;
// };

// // =============================================
// // DRAFTS --------------------------------------
// // =============================================

// // function gte10b() {
// //   let output = "";

// //   for (let i = 0; i < sharks.length; i++) {
// //     if (sharks[i].netWorth >= 10000000000) {
// //       output += tableGenerator(i);
// //     }
// //   }
// //   return output;
// // }

// function isHarvardAlumni() {
//   let output = "";

//   for (let i = 0; i < sharks.length; i++) {
//     if (ceos[i].university1 === "Harvard University") {
//       output += tableGenerator(i);
//     }
//   }

//   document.getElementById("table-content").innerHTML = output;
// }

// // isHarvardAlumni();

// const toggleBtn = document.getElementById("dark-toggle");

// toggleBtn.addEventListener("click", () => {
//   document.body.classList.toggle("dark");
//   if (document.body.classList.contains("dark")) {
//     toggleBtn.textContent = "☀️ Light Mode";
//   } else {
//     toggleBtn.textContent = "🌙 Dark Mode";
//   }
// });

// window.addEventListener("DOMContentLoaded", () => {
//   const toggleBtn = document.getElementById("dark-toggle");
//   if (toggleBtn) {
//     toggleBtn.textContent = "☀️ Light Mode";
//   }
// });