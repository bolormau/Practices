const sharks = [
  {
    name: "Elon Musk",
    career: "CEO of Tesla, SpaceX, xAI",
    netWorth: 342000000000,
    universities: ["University of Pretoria", "University of Pennsylvania"],
    majors: ["Physics", "Economics"],
    email: "elon.musk@sharkmail.com",
    birthdayMs: 46915200000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Jeff Bezos",
    career: "Founder of Amazon & Blue Origin",
    netWorth: 215000000000,
    universities: ["Princeton University"],
    majors: ["Electrical Engineering", "Computer Science"],
    email: "jeff.bezos@sharkmail.com",
    birthdayMs: -188438400000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Mark Zuckerberg",
    career: "CEO of Meta",
    netWorth: 216000000000,
    universities: ["Harvard University"],
    majors: ["Computer Science", "Psychology"],
    email: "mark.zuckerberg@sharkmail.com",
    birthdayMs: 453340800000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Bill Gates",
    career: "Co-founder of Microsoft",
    netWorth: 175000000000,
    universities: ["Harvard University"],
    majors: ["Mathematics", "Computer Science"],
    email: "bill.gates@sharkmail.com",
    birthdayMs: -447465600000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Warren Buffett",
    career: "Chairman of Berkshire Hathaway",
    netWorth: 117000000000,
    universities: ["University of Nebraska", "Columbia Business School"],
    majors: ["Business Administration", "Economics"],
    email: "warren.buffett@sharkmail.com",
    birthdayMs: -1241481600000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Larry Page",
    career: "Co-founder of Google",
    netWorth: 144000000000,
    universities: ["University of Michigan", "Stanford University"],
    majors: ["Computer Engineering", "Computer Science"],
    email: "larry.page@sharkmail.com",
    birthdayMs: 101952000000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Sergey Brin",
    career: "Co-founder of Google",
    netWorth: 138000000000,
    universities: ["University of Maryland", "Stanford University"],
    majors: ["Mathematics", "Computer Science"],
    email: "sergey.brin@sharkmail.com",
    birthdayMs: 114739200000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Satya Nadella",
    career: "CEO of Microsoft",
    netWorth: 750000000,
    universities: [
      "Manipal Institute of Technology",
      "University of Wisconsin–Milwaukee",
      "University of Chicago Booth",
    ],
    majors: ["Electrical Engineering", "Computer Science", "MBA"],
    email: "satya.nadella@sharkmail.com",
    birthdayMs: -74822400000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Tim Cook",
    career: "CEO of Apple",
    netWorth: 1800000000,
    universities: ["Auburn University", "Duke University"],
    majors: ["Industrial Engineering", "MBA"],
    email: "tim.cook@sharkmail.com",
    birthdayMs: -289267200000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Sundar Pichai",
    career: "CEO of Alphabet & Google",
    netWorth: 1500000000,
    universities: [
      "IIT Kharagpur",
      "Stanford University",
      "University of Pennsylvania",
    ],
    majors: ["Metallurgical Engineering", "Materials Science", "MBA"],
    email: "sundar.pichai@sharkmail.com",
    birthdayMs: 76982400000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Jensen Huang",
    career: "CEO of NVIDIA",
    netWorth: 117500000000,
    universities: ["Oregon State University", "Stanford University"],
    majors: ["Electrical Engineering"],
    email: "jensen.huang@sharkmail.com",
    birthdayMs: -216864000000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Michael Dell",
    career: "Founder & CEO of Dell Technologies",
    netWorth: 136000000000,
    universities: ["University of Texas at Austin"],
    majors: ["Business"],
    email: "michael.dell@sharkmail.com",
    birthdayMs: -153187200000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Andy Jassy",
    career: "CEO of Amazon",
    netWorth: 500000000,
    universities: ["Harvard University"],
    majors: ["Government"],
    email: "andy.jassy@sharkmail.com",
    birthdayMs: -62121600000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Ginni Rometty",
    career: "Former CEO of IBM",
    netWorth: 200000000,
    universities: ["Northwestern University"],
    majors: ["Computer Science", "Electrical Engineering"],
    email: "ginni.rometty@sharkmail.com",
    birthdayMs: -392169600000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Brian Chesky",
    career: "Co-founder & CEO of Airbnb",
    netWorth: 68000000000,
    universities: ["Rhode Island School of Design"],
    majors: ["Industrial Design"],
    email: "brian.chesky@sharkmail.com",
    birthdayMs: 367891200000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Dara Khosrowshahi",
    career: "CEO of Uber",
    netWorth: 500000000,
    universities: ["Brown University"],
    majors: ["Electrical Engineering"],
    email: "dara.khosrowshahi@sharkmail.com",
    birthdayMs: -18835200000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Daniel Ek",
    career: "Co-founder & CEO of Spotify",
    netWorth: 3000000000,
    universities: [],
    majors: [],
    email: "daniel.ek@sharkmail.com",
    birthdayMs: 414633600000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Dustin Moskovitz",
    career: "Co-founder of Facebook",
    netWorth: 19200000000,
    universities: ["Harvard University"],
    majors: ["Economics"],
    email: "dustin.moskovitz@sharkmail.com",
    birthdayMs: 454060800000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Patrick Collison",
    career: "Co-founder & CEO of Stripe",
    netWorth: 2100000000,
    universities: ["MIT"],
    majors: ["Mathematics"],
    email: "patrick.collison@sharkmail.com",
    birthdayMs: 589248000000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Palmer Luckey",
    career: "Founder of Oculus, CEO of Anduril",
    netWorth: 1000000000,
    universities: [],
    majors: [],
    email: "palmer.luckey@sharkmail.com",
    birthdayMs: 716774400000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Jack Dorsey",
    career: "Co-founder of Twitter & Block",
    netWorth: 11000000000,
    universities: [],
    majors: [],
    email: "jack.dorsey@sharkmail.com",
    birthdayMs: 217036800000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Eric Schmidt",
    career: "Former CEO of Google",
    netWorth: 25200000000,
    universities: ["Princeton University", "UC Berkeley"],
    majors: ["Electrical Engineering", "Computer Science"],
    email: "eric.schmidt@sharkmail.com",
    birthdayMs: -457228800000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Jack Ma",
    career: "Founder of Alibaba",
    netWorth: 27200000000,
    universities: ["Hangzhou Normal University"],
    majors: ["English"],
    email: "jack.ma@sharkmail.com",
    birthdayMs: -179625600000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Ma Huateng",
    career: "Founder & CEO of Tencent",
    netWorth: 51600000000,
    universities: ["Shenzhen University"],
    majors: ["Computer Science"],
    email: "ma.huateng@sharkmail.com",
    birthdayMs: 565516800000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Evan Spiegel",
    career: "Co-founder & CEO of Snap",
    netWorth: 2600000000,
    universities: ["Stanford University"],
    majors: ["Product Design"],
    email: "evan.spiegel@sharkmail.com",
    birthdayMs: 643766400000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Reed Hastings",
    career: "Co-founder & Chairman of Netflix",
    netWorth: 8500000000,
    universities: ["Bowdoin College", "Stanford University"],
    majors: ["Mathematics", "Computer Science"],
    email: "reed.hastings@sharkmail.com",
    birthdayMs: -307756800000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Sheryl Sandberg",
    career: "Former COO of Meta",
    netWorth: 1600000000,
    universities: ["Harvard University", "Harvard Business School"],
    majors: ["Economics", "MBA"],
    email: "sheryl.sandberg@sharkmail.com",
    birthdayMs: -12700800000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Larry Ellison",
    career: "Executive Chairman & CTO of Oracle",
    netWorth: 192000000000,
    universities: [],
    majors: [],
    email: "larry.ellison@sharkmail.com",
    birthdayMs: -788256000000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Steve Ballmer",
    career: "Former CEO of Microsoft",
    netWorth: 118000000000,
    universities: ["Harvard University"],
    majors: ["Applied Math", "Economics"],
    email: "steve.ballmer@sharkmail.com",
    birthdayMs: -411523200000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Susan Wojcicki",
    career: "Former CEO of YouTube",
    netWorth: 550000000,
    universities: ["Harvard University", "UCLA Anderson"],
    majors: ["History & Literature", "MBA"],
    email: "susan.wojcicki@sharkmail.com",
    birthdayMs: -578419200000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Sam Altman",
    career: "CEO of OpenAI",
    netWorth: 1800000000,
    universities: ["Stanford University"],
    majors: ["Computer Science"],
    email: "sam.altman@sharkmail.com",
    birthdayMs: 483724800000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Demis Hassabis",
    career: "Co-founder & CEO of DeepMind",
    netWorth: 100000000,
    universities: ["University of Cambridge", "UCL"],
    majors: ["Computer Science", "Cognitive Neuroscience"],
    email: "demis.hassabis@sharkmail.com",
    birthdayMs: 207936000000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Peter Thiel",
    career: "Co-founder of PayPal & Palantir",
    netWorth: 9300000000,
    universities: ["Stanford University", "Stanford Law School"],
    majors: ["Philosophy", "Law"],
    email: "peter.thiel@sharkmail.com",
    birthdayMs: -70243200000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Marc Andreessen",
    career: "Co-founder of Netscape & a16z",
    netWorth: 1600000000,
    universities: ["University of Illinois Urbana–Champaign"],
    majors: ["Computer Science"],
    email: "marc.andreessen@sharkmail.com",
    birthdayMs: 47865600000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Ben Horowitz",
    career: "Co-founder of a16z",
    netWorth: 4000000000,
    universities: ["Columbia University", "UCLA"],
    majors: ["Computer Science", "Computer Science"],
    email: "ben.horowitz@sharkmail.com",
    birthdayMs: -112147200000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Garrett Camp",
    career: "Co-founder of Uber",
    netWorth: 3000000000,
    universities: ["University of Calgary"],
    majors: ["Electrical & Computer Engineering"],
    email: "garrett.camp@sharkmail.com",
    birthdayMs: 276307200000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Travis Kalanick",
    career: "Co-founder of Uber",
    netWorth: 2500000000,
    universities: ["UCLA"],
    majors: ["Computer Engineering"],
    email: "travis.kalanick@sharkmail.com",
    birthdayMs: 208137600000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Brian Armstrong",
    career: "Co-founder & CEO of Coinbase",
    netWorth: 6000000000,
    universities: ["Rice University"],
    majors: ["Economics", "Computer Science"],
    email: "brian.armstrong@sharkmail.com",
    birthdayMs: 412300800000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Vitalik Buterin",
    career: "Co-founder of Ethereum",
    netWorth: 1000000000,
    universities: ["University of Waterloo"],
    majors: ["Computer Science"],
    email: "vitalik.buterin@sharkmail.com",
    birthdayMs: 759974400000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Max Levchin",
    career: "Co-founder of PayPal & CEO of Affirm",
    netWorth: 1200000000,
    universities: ["University of Illinois Urbana–Champaign"],
    majors: ["Computer Science"],
    email: "max.levchin@sharkmail.com",
    birthdayMs: 174268800000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Drew Houston",
    career: "Co-founder & CEO of Dropbox",
    netWorth: 2400000000,
    universities: ["MIT"],
    majors: ["Computer Science"],
    email: "drew.houston@sharkmail.com",
    birthdayMs: 415584000000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Stewart Butterfield",
    career: "Co-founder of Slack",
    netWorth: 1200000000,
    universities: ["University of Victoria", "University of Cambridge"],
    majors: ["Philosophy"],
    email: "stewart.butterfield@sharkmail.com",
    birthdayMs: 101520000000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Meg Whitman",
    career: "Former CEO of eBay & HP",
    netWorth: 3400000000,
    universities: ["Princeton University", "Harvard Business School"],
    majors: ["Economics", "MBA"],
    email: "meg.whitman@sharkmail.com",
    birthdayMs: -423187200000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Marissa Mayer",
    career: "Former CEO of Yahoo",
    netWorth: 620000000,
    universities: ["Stanford University"],
    majors: ["Symbolic Systems", "Computer Science"],
    email: "marissa.mayer@sharkmail.com",
    birthdayMs: 170640000000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Anne Wojcicki",
    career: "Co-founder & CEO of 23andMe",
    netWorth: 800000000,
    universities: ["Yale University"],
    majors: ["Biology"],
    email: "anne.wojcicki@sharkmail.com",
    birthdayMs: 112665600000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Jeff Weiner",
    career: "Executive Chairman & former CEO of LinkedIn",
    netWorth: 600000000,
    universities: ["Wharton School"],
    majors: ["Economics"],
    email: "jeff.weiner@sharkmail.com",
    birthdayMs: 4406400000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Reid Hoffman",
    career: "Co-founder of LinkedIn",
    netWorth: 2200000000,
    universities: ["Stanford University", "Oxford University"],
    majors: ["Symbolic Systems", "Philosophy"],
    email: "reid.hoffman@sharkmail.com",
    birthdayMs: -76032000000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Eric Yuan",
    career: "Founder & CEO of Zoom",
    netWorth: 16000000000,
    universities: [
      "Shandong University of Science and Technology",
      "China University of Mining and Technology",
    ],
    majors: ["Applied Mathematics", "Computer Science"],
    email: "eric.yuan@sharkmail.com",
    birthdayMs: 4320000000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Adam Neumann",
    career: "Co-founder of WeWork",
    netWorth: 2300000000,
    universities: ["Baruch College"],
    majors: ["Business (incomplete)"],
    email: "adam.neumann@sharkmail.com",
    birthdayMs: 293846400000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Kevin Systrom",
    career: "Co-founder of Instagram",
    netWorth: 1600000000,
    universities: ["Stanford University"],
    majors: ["Management Science & Engineering"],
    email: "kevin.systrom@sharkmail.com",
    birthdayMs: 441590400000,
    extraInfo1: null,
    extraInfo2: null,
  },

  {
    name: "Evan Williams",
    career: "Co-founder of Twitter & Blogger",
    netWorth: 2400000000,
    universities: ["University of Nebraska–Lincoln"],
    majors: ["Computer Science (incomplete)"],
    email: "evan.williams@sharkmail.com",
    birthdayMs: 69033600000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Jan Koum",
    career: "Co-founder of WhatsApp",
    netWorth: 14000000000,
    universities: ["San Jose State University"],
    majors: ["Math & Computer Science (incomplete)"],
    email: "jan.koum@sharkmail.com",
    birthdayMs: 194486400000,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Brian Acton",
    career: "Co-founder of WhatsApp",
    netWorth: 2900000000,
    universities: ["Stanford University"],
    majors: ["Computer Science"],
    email: "brian.acton@sharkmail.com",
    birthdayMs: 64536960000,
    extraInfo1: null,
    extraInfo2: null,
  },

  {
    name: "Pavel Durov",
    career: "Founder & CEO of Telegram",
    netWorth: 15500000000,
    universities: ["Saint Petersburg State University"],
    majors: ["Philology"],
    email: "pavel.durov@sharkmail.com",
    birthdayMs: 466214400000,
    extraInfo1: null,
    extraInfo2: null,
  },

  {
    name: "Lei Jun",
    career: "Founder & CEO of Xiaomi",
    netWorth: 11000000000,
    universities: ["Wuhan University"],
    majors: ["Computer Science"],
    email: "lei.jun@sharkmail.com",
    birthdayMs: -40629600000,
    extraInfo1: null,
    extraInfo2: null,
  },

  {
    name: "Neal Mohan",
    career: "CEO of YouTube",
    netWorth: 300000000,
    universities: ["Stanford University"],
    majors: ["Electrical Engineering"],
    email: "neal.mohan@sharkmail.com",
    birthdayMs: 0,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Arvind Krishna",
    career: "CEO of IBM",
    netWorth: 400000000,
    universities: ["IIT Kanpur", "University of Illinois Urbana–Champaign"],
    majors: ["Electrical Engineering", "Computer Science"],
    email: "arvind.krishna@sharkmail.com",
    birthdayMs: 0,
    extraInfo1: null,
    extraInfo2: null,
  },

  {
    name: "Alexandr Wang",
    career: "Co-founder & CEO of Scale AI",
    netWorth: 2000000000,
    universities: ["MIT"],
    majors: ["Mathematics", "Computer Science (incomplete)"],
    email: "alexandr.wang@sharkmail.com",
    birthdayMs: 0,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Lucy Guo",
    career: "Co-founder of Scale AI, Founder of Passes",
    netWorth: 1200000000,
    universities: ["Carnegie Mellon University"],
    majors: ["Computer Science (incomplete)"],
    email: "lucy.guo@sharkmail.com",
    birthdayMs: 0,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Dylan Field",
    career: "Co-founder & CEO of Figma",
    netWorth: 6000000000,
    universities: ["Brown University"],
    majors: ["Computer Science (incomplete)"],
    email: "dylan.field@sharkmail.com",
    birthdayMs: 0,
    extraInfo1: null,
    extraInfo2: null,
  },
  {
    name: "Austin Russell",
    career: "Founder of Luminar Technologies",
    netWorth: 2500000000,
    universities: ["Stanford University"],
    majors: ["Physics (incomplete)"],
    email: "austin.russell@sharkmail.com",
    birthdayMs: 0,
    extraInfo1: null,
    extraInfo2: null,
  },
];

// To-Dos
// arrow function
// ternory operator - specify the non-existing things (key)
// array sorting
// loop by map and forEach
// html combine by mapping

// Add time last logged in

// filter return true / false
// one search bar for everything
// on active change on buttons

// Things to change in html, css
// arrow button to order net worth and name, school (rank)

// LIST CUSTOMization
// let output = "";

// DEFAULT FUNCTIONS
// ----------------------------------------
// 1. renderStudents(students)
// 2. tableGenerator(index, ceo)

let tableGenerator = (shark, index) => {
  let result = `
    <tr class="person">
      <td class="name">${shark.name}</td>
      <td class="career">${shark.career}</td>
      <td class="net-worth">${shark.netWorth / 1000000000}B</td>
      <td class="univs">${shark.universities.join(" • ")}</td>
      <td class="majors">${shark.majors.join(" • ")}</td>
      <td class="note null-value">${shark.note || "-"}</td>
      <td class="email">${shark.email.split("@")[0]}</td>
      <td class="bd">${new Date(shark.birthdayMs).toISOString().split('T')[0]}</td>
    </tr>
  `;
  return result;
};

function rendersharks(sharks) {
  const output = sharks
    .map((shark, index) => tableGenerator(shark, index))
    .join("\n");

  document.getElementById("table-content").innerHTML = output;
}
// ------------------------------------
// console.log(sharks[0].birthdayMs);
// const allCeoFilter = sharks.filter((sharks) => )

// ALL
let allSharks = () => {
  rendersharks(sharks);
};

allSharks();

// NAME SORTER
let isNameSortedAsc = true;

const nameSorter = () => {
  const sharksSortedByName = sharks.sort((a, b) => {
    if (isNameSortedAsc) return a.name.localeCompare(b.name);
    else return b.name.localeCompare(a.name);
  });

  isNameSortedAsc = !isNameSortedAsc;
  rendersharks(sharksSortedByName);
};

// CAREER FILTER
const careerFilter = (pos) => {
  const sharksFilteredByCareer = sharks.filter((shark) => {
    if (pos === "ceo") return shark.career.includes("CEO");
    else if (pos === "founder") return shark.career.includes("Founder");
    else if (pos === "co-founder") return shark.career.includes("Co-founder");
    else if (pos === "chairman") return shark.career.includes("Chairman");
  });

  rendersharks(sharksFilteredByCareer);
};

// NET WORTH SORTER
let isNetWorthSortedAsc = true;

const netWorthSorter = () => {
  const sharksSortedByNetWorth = sharks.sort((a, b) => {
    if (isNetWorthSortedAsc) return a.netWorth - b.netWorth;
    else return b.netWorth - a.netWorth;
  });

  isNetWorthSortedAsc = !isNetWorthSortedAsc;
  rendersharks(sharksSortedByNetWorth);
};

// NET WORTH FILTER
let isNetWorthLt10 = true;

const netWorthFilter = () => {
  const sharksFilteredByNetWorth = sharks.filter((shark) => {
    if (isNetWorthLt10) return shark.netWorth < 10000000000;
    else return shark.netWorth >= 10000000000;
  });

  isNetWorthLt10 = !isNetWorthLt10;
  rendersharks(sharksFilteredByNetWorth);

  if (isNetWorthLt10) document.getElementById("10b").innerText = "+10B";
  else document.getElementById("10b").innerText = "-10B";
};

// // UNIVERSITY FILTER
// const univFilter = (category) => {
//   const sharksFilteredByUniv = sharks.filter((shark) => {
//     if(category === "ivy") {
//       const UnivFilteredByIvy = shark.universities.forEach.filter((university) => {
//         if(university === "Princeton University" ||
//         university === "Harvard University") return
//         })
//     }

//     }

//   });

//   rendersharks(sharksFilteredByCareer);
// };

let gte10b = () => {
  let output = "";

  sharks.forEach((shark, i) => {
    if (sharks[i].netWorth >= 10000000000) {
      output += tableGenerator(i);
    }
  });

  return output;
};

// NOTE FILTER
const noteFilter = () => {
  const sharksFilteredByNote = sharks.filter(
    (shark) => shark.note === "Dropped out"
  );

  rendersharks(sharksFilteredByNote);
};

// EMAIL SORTER
let isEmailSortedAsc = true;

const emailSorter = () => {
  const sharksSortedByEmail = sharks.sort((a, b) => {
    if (isEmailSortedAsc) return a.email.localeCompare(b.email);
    else return b.email.localeCompare(a.email);
  });

  isEmailSortedAsc = !isNameSortedAsc;
  rendersharks(sharksSortedByEmail);
};

// BIRTHDAY SORTER
const bdConverter = (age) => {
  // const agesConvertedToIso =
  sharks.map((shark) => {
    shark.birthdayMs;
  });
};

// let b = sharks[0].birthdayMs;
let bd = new Date(sharks[0].birthdayMs);
console.log(bd.toISOString().split('T')[0]);



// DATE

// const now = new Date();
// const yesterday = new Date("2025-08-14T11:52");
// console.log(now.toISOString);
// console.log(yesterday);
