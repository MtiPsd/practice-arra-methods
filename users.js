const users = [
  {
    id: "1",
    firstName: "Artur",
    lastName: "Apedaile",
    country: "Russia",
    age: 24,
    email: "aapedaile0@flickr.com",
    gender: "Male",
    balance: 431761.65,
  },
  {
    id: "2",
    firstName: "Hayden",
    lastName: "Bolle",
    country: "Russia",
    age: 18,
    email: "hbolle1@bloglines.com",
    gender: "Male",
    balance: 758044.46,
  },
  {
    id: "3",
    firstName: "Fina",
    lastName: "Schroeder",
    country: "China",
    age: 32,
    email: "fschroeder2@nyu.edu",
    gender: "Polygender",
    balance: 627773.7,
  },
  {
    id: "4",
    firstName: "Husain",
    lastName: "Calderbank",
    country: "Iran",
    age: 69,
    email: "hcalderbank3@sohu.com",
    gender: "Male",
    balance: 995002.07,
  },
  {
    id: "5",
    firstName: "Paola",
    lastName: "Pandey",
    country: "France",
    age: 34,
    email: "ppandey4@cbslocal.com",
    gender: "Genderfluid",
    balance: 766005.4,
  },
  {
    id: "6",
    firstName: "Roosevelt",
    lastName: "Piscopiello",
    country: "China",
    age: 24,
    email: "rpiscopiello5@fotki.com",
    gender: "Male",
    balance: 85694.25,
  },
  {
    id: "7",
    firstName: "Kizzee",
    lastName: "Pleace",
    country: "Russia",
    age: 52,
    email: "kpleace6@dailymotion.com",
    gender: "Female",
    balance: 565294.64,
  },
  {
    id: "8",
    firstName: "Syman",
    lastName: "Pickwell",
    country: "Russia",
    age: 23,
    email: "spickwell7@weibo.com",
    gender: "Male",
    balance: 450181,
  },
  {
    id: "9",
    firstName: "Husein",
    lastName: "Steptowe",
    country: "China",
    age: 46,
    email: "hsteptowe8@homestead.com",
    gender: "Male",
    balance: 752099.6,
  },
  {
    id: "10",
    firstName: "Stillman",
    lastName: "Adamkiewicz",
    country: "Russia",
    age: 40,
    email: "sadamkiewicz9@slashdot.org",
    gender: "Male",
    balance: 542909.73,
  },
  {
    id: "11",
    firstName: "Martie",
    lastName: "Gronowe",
    country: "China",
    age: 20,
    email: "mgronowej@1und1.de",
    gender: "Male",
    balance: 141936.61,
  },
  {
    id: "12",
    firstName: "Emmeline",
    lastName: "Foker",
    country: "China",
    age: 24,
    email: "efokerk@oracle.com",
    gender: "Female",
    balance: 100753.14,
  },
  {
    id: "13",
    firstName: "Kaila",
    lastName: "Leveret",
    country: "Russia",
    age: 42,
    email: "kleveretl@europa.eu",
    gender: "Female",
    balance: 948553.54,
  },
  {
    id: "14",
    firstName: "Ailina",
    lastName: "Caston",
    country: "China",
    age: 30,
    email: "acastonm@chronoengine.com",
    gender: "Female",
    balance: 328030.92,
  },
  {
    id: "15",
    firstName: "Shem",
    lastName: "Ballantine",
    country: "China",
    age: 70,
    email: "sballantinen@twitter.com",
    gender: "Male",
    balance: 260237.42,
  },
  {
    id: "16",
    firstName: "Leah",
    lastName: "Chell",
    country: "China",
    age: 33,
    email: "lchello@marriott.com",
    gender: "Female",
    balance: 14131.35,
  },
  {
    id: "17",
    firstName: "Darren",
    lastName: "Inglese",
    country: "France",
    age: 40,
    email: "dinglesep@acquirethisname.com",
    gender: "Male",
    balance: 859278.98,
  },
  {
    id: "18",
    firstName: "Suzy",
    lastName: "Carmel",
    country: "China",
    age: 28,
    email: "scarmelq@nyu.edu",
    gender: "Female",
    balance: 321260.33,
  },
  {
    id: "19",
    firstName: "Janean",
    lastName: "Woodnutt",
    country: "France",
    age: 37,
    email: "jwoodnuttr@harvard.edu",
    gender: "Female",
    balance: 672405.31,
  },
  {
    id: "20",
    firstName: "Josefa",
    lastName: "Evenden",
    country: "United States",
    age: 40,
    email: "jevendens@google.nl",
    gender: "Non-binary",
    balance: 672471.38,
  },
  {
    id: "21",
    firstName: "Jordain",
    lastName: "Mazzei",
    country: "France",
    age: 29,
    email: "jmazzeit@rambler.ru",
    gender: "Female",
    balance: 221556.25,
  },
  {
    id: "22",
    firstName: "Adelheid",
    lastName: "Duffyn",
    country: "United States",
    age: 33,
    email: "aduffynu@biblegateway.com",
    gender: "Female",
    balance: 815183.97,
  },
  {
    id: "23",
    firstName: "Niccolo",
    lastName: "Loblie",
    country: "France",
    age: 49,
    email: "nlobliev@ibm.com",
    gender: "Male",
    balance: 576795.91,
  },
  {
    id: "24",
    firstName: "Loreen",
    lastName: "Corah",
    country: "China",
    age: 36,
    email: "lcorahw@nature.com",
    gender: "Female",
    balance: 676196.55,
  },
  {
    id: "25",
    firstName: "Dorita",
    lastName: "Royle",
    country: "Russia",
    age: 23,
    email: "droyle18@about.com",
    gender: "Female",
    balance: 152949.72,
  },
  {
    id: "26",
    firstName: "Karil",
    lastName: "Tulloch",
    country: "Iran",
    age: 25,
    email: "ktulloch19@addtoany.com",
    gender: "Female",
    balance: 378215.55,
  },
  {
    id: "27",
    firstName: "Theda",
    lastName: "Tidgewell",
    country: "United States",
    age: 60,
    email: "ttidgewell1a@myspace.com",
    gender: "Female",
    balance: 638139.43,
  },
  {
    id: "28",
    firstName: "Seumas",
    lastName: "Briar",
    country: "France",
    birthDate: 55,
    email: "sbriar1d@wordpress.org",
    gender: "Male",
    balance: 470423.32,
  },
  {
    id: "29",
    firstName: "Trenton",
    lastName: "Pocklington",
    country: "Iran",
    age: 46,
    email: "tpocklington1e@phoca.cz",
    gender: "Male",
    balance: 31722.61,
  },
  {
    id: "30",
    firstName: "Rusty",
    lastName: "Whitsey",
    country: "Iran",
    age: 26,
    email: "rwhitsey1f@flavors.me",
    gender: "Male",
    balance: 651451.6,
  },
  {
    id: "31",
    firstName: "Elita",
    lastName: "Hawthorn",
    country: "Russia",
    age: 41,
    email: "ehawthorn1g@gravatar.com",
    gender: "Female",
    balance: 300364.36,
  },
  {
    id: "32",
    firstName: "Tresa",
    lastName: "Leighton",
    country: "Russia",
    age: 44,
    email: "tleighton1h@acquirethisname.com",
    gender: "Female",
    balance: 159642.87,
  },
  {
    id: "33",
    firstName: "Ike",
    lastName: "Guerro",
    country: "France",
    age: 32,
    email: "iguerro2g@meetup.com",
    gender: "Male",
    balance: 750976.28,
  },
  {
    id: "34",
    firstName: "Shae",
    lastName: "Grayham",
    country: "China",
    age: 29,
    email: "sgrayham2h@omniture.com",
    gender: "Polygender",
    balance: 738356.43,
  },
  {
    id: "35",
    firstName: "Ellerey",
    lastName: "Crutchley",
    country: "Russia",
    age: 38,
    email: "ecrutchley2i@spotify.com",
    gender: "Male",
    balance: 725210.85,
  },
  {
    id: "36",
    firstName: "Elwira",
    lastName: "Iacovucci",
    country: "United States",
    age: 45,
    email: "eiacovucci2j@webmd.com",
    gender: "Female",
    balance: 348365.14,
  },
  {
    id: "37",
    firstName: "Kassandra",
    lastName: "Stirman",
    country: "Russia",
    age: 22,
    email: "kstirman2k@discuz.net",
    gender: "Female",
    balance: 267640.63,
  },
  {
    id: "38",
    firstName: "Annie",
    lastName: "Snoding",
    country: "China",
    age: 52,
    email: "asnoding2l@cyberchimps.com",
    gender: "Female",
    balance: 438416.79,
  },
  {
    id: "39",
    firstName: "Aida",
    lastName: "Whitloe",
    country: "Iran",
    age: 22,
    email: "rwhitloe2m@cafepress.com",
    gender: "Female",
    balance: 877242.67,
  },
  {
    id: "40",
    firstName: "Rene",
    lastName: "Sallis",
    country: "United States",
    age: 64,
    email: "rsallis2n@businessinsider.com",
    gender: "Male",
    balance: 251863.83,
  },
];

/////////////////// A - 1 ///////////////////

const emailsArray = users.map(user => user.email);

/////////////////// A - 2 ///////////////////

const iranians = users.filter(user => user.country === "Iran");
const iranianNames = iranians.map(
  iranian => `${iranian.firstName} - ${iranian.lastName}`,
);

/////////////////// A - 3 ///////////////////

const polygenderUsers = users.filter(
  user =>
    user.gender.toLowerCase() !== "Male".toLowerCase() &&
    user.gender.toLowerCase() !== "Female".toLowerCase(),
);

const polygenderUsersBalance = polygenderUsers.map(
  user => user.balance,
);

/////////////////// A - 4 ///////////////////

const richUsersFromUSA = users.filter(
  user =>
    user.country.toLowerCase() === "United States".toLowerCase() &&
    Number(user.balance) > 500000,
);

const usaUserEmails = richUsersFromUSA.map(user => user.email);

/////////////////// A - 5 ///////////////////

const chineseUsers = users.filter(
  users => users.country.toLowerCase() === "China".toLowerCase(),
);

const sortedUsersBaseOnBalance = chineseUsers
  .slice()
  .sort((a, b) => b.balance - a.balance);

/////////////////// A - 6 ///////////////////

const usersWithLongEmail = users.filter(
  user => user.email.length > 30,
);

const userNamesWithLongEmails = usersWithLongEmail.map(
  user => `${user.firstName} - ${user.lastName}`,
);

/////////////////// A - 7 ///////////////////

const usersWithSpacialEmails = users.filter(user =>
  user.email.endsWith("edu"),
);

const usersBalanceWithSpacialEmails = usersWithSpacialEmails.map(
  user => user.balance,
);

/////////////////// A - 8 ///////////////////

// with filter
const frenchUsers1 = users.filter(user => user.country === "France");

const frenchUsersCount1 = frenchUsers1.length;

// with reduce
const frenchUsers2 = users.reduce((acc, cur) => {
  const isFrench =
    cur.country.toLowerCase() === "France".toLowerCase();

  if (isFrench) {
    acc.push(cur);
  }

  return acc;
}, []);

const frenchUsersCount2 = frenchUsers2.length;

/////////////////// A - 9 ///////////////////

function getTotalBalanceOfMaleUsers(array) {
  const maleUsers = array.filter(
    user => user.gender.toLowerCase() === "Male".toLowerCase(),
  );

  return maleUsers.reduce((acc, cur) => acc + cur.balance, 0);
}

getTotalBalanceOfMaleUsers(users);

/////////////////// A - 10 ///////////////////

const teenRussians = users.filter(
  user =>
    user.country.toLowerCase() === "Russia".toLowerCase() &&
    user.age < 30,
);

const averageBalance = teenRussians.reduce(
  (acc, cur) => acc + cur.balance / teenRussians.length,
  0,
);

/////////////////// A - 11 ///////////////////

function getInfoOfYoungMembers(array) {
  const youngUsers = array.filter(user => user.age < 25);
  return youngUsers.map(
    user => `${user.firstName} - ${user.lastName}`,
  );
}

getInfoOfYoungMembers(users);

/////////////////// A - 12 ///////////////////

function getRichestUserInfo(array) {
  const richestUser = array.reduce((acc, cur) => {
    return acc.balance > cur.balance ? acc : cur;
  });

  return `${richestUser.firstName} - ${richestUser.lastName} - ${richestUser.country}`;
}

getRichestUserInfo(users);

/////////////////// A - 13 ///////////////////

function getRussianInfo(array) {
  return array.reduce((acc, cur) => {
    if (cur.country === "Russia") {
      const newInfo = {
        email: cur.email,
        age: cur.age,
      };

      acc.push(newInfo);
    }

    return acc;
  }, []);
}

getRussianInfo(users);

/////////////////// A - 14 ///////////////////

function getUsersWitchContainGr(array) {
  return array.filter(user => {
    return (
      user.firstName.toLowerCase().includes("gr") ||
      user.lastName.toLowerCase().includes("gr")
    );
  });
}

getUsersWitchContainGr(users);
