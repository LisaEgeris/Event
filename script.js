// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}
// Tjek om vi er på opsamlingssiden
if (document.querySelector("#vis-navn")) {
  // Hent oplysninger fra URL'en
  const params = new URLSearchParams(window.location.search);

  const navn = params.get("name");
  const email = params.get("email");
  const telefon = params.get("phone");
  const dato = params.get("date");
  const kage = params.get("cake");

  // Oversæt datoen
  const datoTekst = {
    dato1: "1/12-2026",
    dato2: "15/12-2026",
  };

  // Oversæt kagen
  const kageTekst = {
    Roulade: "Roulade",
    lagkage: "Lagkage",
    småkager: "Småkager",
  };
  // Billeder af de valgte kager
  const kageBilleder = {
    Roulade: "./EventBilleder/Roulade.svg",
    lagkage: "./EventBilleder/Lagkage.svg",
    småkager: "./EventBilleder/småkager.svg",
  };

  // Find billedet på opsamlingssiden
  const kageBillede = document.querySelector("#EventBilleder");

  // Vis det rigtige billede
  kageBillede.src = kageBilleder[kage];

  // Vis oplysningerne på siden
  document.querySelector("#vis-navn").textContent = navn;
  document.querySelector("#vis-email").textContent = email;
  document.querySelector("#vis-telefon").textContent = telefon;
  document.querySelector("#vis-dato").textContent = datoTekst[dato];
  document.querySelector("#vis-kage").textContent = kageTekst[kage];
}
// Interaktiv tekst på historiesiden

// NR. 1 - KAFFEKANDEN

const topicButton = document.querySelector("#topicbutton1");
console.log(topicButton);

topicButton.addEventListener("click", clicked1);

function clicked1() {
  console.log("clicked1");

  if (document.querySelector(".kaffekande").style.filter !== "") {
    document.querySelector(".kaffekande").style.filter = "";
  } else {
    document.querySelector(".kaffekande").style.filter =
      "sepia(1) saturate(3) hue-rotate(300deg)";
  }
}

// NR. 2 - TALLERKENEN

const topicButton2 = document.querySelector("#topicbutton2");

topicButton2.addEventListener("click", clicked2);

function clicked2() {
  console.log("clicked2");

  if (document.querySelector(".tallerken").style.filter !== "") {
    document.querySelector(".tallerken").style.filter = "";
  } else {
    document.querySelector(".tallerken").style.filter =
      "sepia(1) saturate(3) hue-rotate(300deg)";
  }
}

// NR. 3 - KOPPEN

const topicButton3 = document.querySelector("#topicbutton3");

topicButton3.addEventListener("click", clicked3);

function clicked3() {
  console.log("clicked3");

  if (document.querySelector(".kop").style.filter !== "") {
    document.querySelector(".kop").style.filter = "";
  } else {
    document.querySelector(".kop").style.filter =
      "sepia(1) saturate(3) hue-rotate(300deg)";
  }
}
