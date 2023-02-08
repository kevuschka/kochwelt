

// Alle Rezepte
const bicmacSalad = [
  [6, 1, 1, 6, 500, 500, ''], 
  [" ", "kleiner", "Pck.", " ", "g", "g", " "], 
  ["Hamburgerbrötchen mit Sesam", "Eisbergsalat(e)", "Schmelzkäsescheibe(n) (Chester)", "Gewürzgurke(n)", "Hackfleisch, gemischt", "Rinderhackfleisch", "Salz und Pfeffer"]
];
const bigmacSaladSauce = [
  [0.5, 0.5, 6, 8 , 2, 6, 2, 2, 1, 2],
  ["Glas", "Tube/n", "EL", "EL", "TL", "EL", "TL", "TL", "TL", "EL"],
  ["Salatcreme (Miracel Whip)", "Mayonnaise", "French Dressing mit wenig Dill", 	"Gewürzgurke(n), fein gewürfelt", "Zucker", "	Zwiebel(n), getrocknete, fein gewürfelt","Essig", "Tomatenketchup", "Salz", "Gurkenrelish, süß-sauer" ]
];
const frenchCroissants = [
  [12, 125, 500, 50, 25, 250, 200, 40],
  ["g", "ml", "g", "g", "g", "g", "g", "g"],
  ["Salz", "Milch", "Mehl (Typ 550)", "Mehl (zusätzlich)", "Hefe (frisch)", "Butter", "Wasser", "Zucker"]
];
const greeSalad = [
  [1, 2, 500, 2, 200, 1, 125, 1, '',''],
  ["", "", "g", "", "g", "", "ml", "", "", ""],
  ["Salatgurke(n)", "Paprikaschote, rot und grün", "Tomate(n)", "Zwiebeln", "Schafskäse", "Glas Oliven (ca. 100g)", "Olivenöl", "Zitrone", "Salz und Pfeffer", "Oregano"]
];
const peanutSoup = [
  [0.5, 2, 2, 1, 0.5, 0.5, 1, 1, 4, 1, 250, 1, 1, 50, ''],
  ["", "", "TL", "TL", "TL", "TL", "", "", "EL", "", "ml", "EL", "", "ml", ""],
  ["Weißkohl", "Möhren", "Cayennpfeffer", "Thymian", "Paprikapulver", "Senf", "kl. Dose Kidneybohnen", "Dose(n) Mais", "Erdnussbutter", "pck. Tomaten (passiert)", "Gemüsebrühe", "Kreuzkümmel", "Zwiebel", "Mangosaft", "Salz und Pfeffer"]
];
const baconCheeseMuffin = [
  [150, 1, 250, 200, 1, 100, 100, 1, 3, 250, 3],
  ["g", "TL", "g", "g", "TL","g", "g", "TL", "EL", "ml", ""],
  ["Bacon", "Rapsöl", "Weizenmehl", "Backpulver", "Paprikapulver", "Cheddarkäse", "Walnüsse", "Thymian", "Olivenöl", "Magermilch", "Eier"]
];
const waffles = [
  [500, 500, 10, 2, 1, 1000, 1, 1],
  ["g", "g", "", "", "", "g", "TL", ""],
  ["Zucker", "Margarine", "Ei(er)", "Vanillezucker Päckchen", "Schuss Rum", "Mehl", "Milch", "Backpulver Päckchen"]
];
const raspberryDessert = [
  [750, 3, 300, 200, 325], 
  ["g", "", "ml", "g", "g"], 
  ["Quark (magerstufe)", "Vanillezucker Päckchen", "Schlagsahne", "Puderzucker", "Himbeeren"]
];


// "receptList" Länge == "idList" Länge
// Reihenfolge hier ist wichtig! Muss der Reihenfolge in der "receptList" entsprechen!
idList = [
  'bicmacSaladIngredients',
  'bismacSaladSauceIngredients',
  'frenchCroissantsIngredients',
  'greeSaladIngredients',
  'peanutSoupIngredients',
  'baconCheeseMuffinIngredients',
  'wafflesIngredients',
  'raspberryDessertIngredients'
  
];

// "receptList" Länge == "idList" Länge
receptList = [
  bicmacSalad,      // 0
  bigmacSaladSauce, // 1
  frenchCroissants, // 2
  greeSalad,        // 3
  peanutSoup,       // 4
  baconCheeseMuffin,// 5
  waffles,          // 6
  raspberryDessert  // 7
];



//Liste (=Tabelle, da es sich in der HTML um eine table handelt) laden 
function getList() {
  // Zugriff auf das jeweilige (G)ericht in der "receptList":
  for (let g = 0; g < receptList.length; g++) {
    if (watchOutForId(g)) { // Nur wenn die html-Datei mit dieser id geöffnet ist, dann wird der if-Block ausgeführt
      // Zugriff auf die (d)aten in dem Gericht:
      filling(g);
    }
  }
}

//Menge Berechnen
function getPortionenCalculation() {
  let userValue = +document.getElementById("portionen").value;
  reset(); //Liste leeren
  if (userValue > 0) {
    for (let g = 0; g < receptList.length; g++) {
      if (document.getElementById(idList[g])) {
        // Zugriff auf die (d)aten in dem Gericht:
        filling(g,userValue); // Liste füllen
      }
    }
    userValue = 0;
  } else {
    info(); // Info Meldung
    reset(); // Liste leeren
    getList(); // Liste laden
  }
}



// Sonstige Funktionen werden hier definiert ----------------------------------------------------------------------

function watchOutForId(a) { // Prüft, ob die html-Datei mit dieser Id geöffnet ist. Ist die jeweilige Datei geöffnet, wird die if-Abfrage positiv.
  if (document.getElementById(idList[a])) {
    return true;
  } else {
    return false;
  }
}

// Wird aufgerufen beim "normalen" Laden der Liste sowie bei Berechnung, daher zusätzlich "value" als zweiten Funktionsparameter
function filling(x,value) { //füllen der Liste mit Zutaten
  for (let d = 0; d < receptList[x][0].length; d++) { // die Länge des ersten Arrays im Gericht entspricht ja der Anzahl der Zutaten, deshalb hier "0" fest gewählt
    if (receptList[x][0][d] == ''){
      fillingWithException(x,d);
    } else if (value > 0) {
        document.getElementById(idList[x]).innerHTML += `<tr><td>${receptList[x][0][d]*value}
        <span>${receptList[x][1][d]}</span>
        <span>${receptList[x][2][d]}</span>
        </td></tr>`;
    } else {
        document.getElementById(idList[x]).innerHTML += `<tr><td>${receptList[x][0][d]}
        <span>${receptList[x][1][d]}</span>
        <span>${receptList[x][2][d]}</span>
        </td></tr>`;
    }
  }
}

function fillingWithException(x,y) { // Bei Zutaten wie "Salz und Pfeffer" ohne Mengenangabe, entsteht durch die Berechnungsfunktion sonst eine "0" vor der Zutat.
  document.getElementById(idList[x]).innerHTML += `<tr><td>
            <span>${receptList[x][1][y]}</span>
            <span>${receptList[x][2][y]}</span>
            </td></tr>`;
}

function info() { // Bei ungültiger Eingabe erscheint eine Meldung
  alert("Gib bitte eine gültige Portionsmenge ein!");
  document.getElementById("portionen").value = "";  // input Feld wieder leer machen
}

function reset() { //Leert die ganze "table"
  for (let g = 0; g < receptList.length; g++) {
    if (document.getElementById(idList[g])) {
      document.getElementById(idList[g]).innerHTML = ""; //Liste leeren
    }
  }
}

// Für die Templates "Header" und "Footer"
async function includeHTML() {
  let includeElements = document.querySelectorAll('[w3-include-html]');
  for (let i = 0; i < includeElements.length; i++) {
      const element = includeElements[i];
      file = element.getAttribute("w3-include-html"); // "includes/header.html"
      let resp = await fetch(file);
      if (resp.ok) {
          element.innerHTML = await resp.text();
      } else {
          element.innerHTML = 'Page not found';
      }
  }
}


