function validate() {
  let geboorteJaar = document.getElementById("geboorte-jaar").value;
  let geboorteMaand = document.getElementById("geboorte-maand").value;
  let geboorteDag = document.getElementById("geboorte-dag").value;
  let geboorteDatum = (geboorteJaar + "/" + geboorteMaand + "/" + geboorteDag);
  let mijnLeeftijd = leeftijdBerekenen(geboorteDatum);
  
  return document.getElementById("leeftijd").innerHTML = "Your age is: " + mijnLeeftijd;
  
  function leeftijdBerekenen(dateString) {
		let vandaag = new Date();
    let verjaardag = new Date(dateString);
    let leeftijd = vandaag.getFullYear() - verjaardag.getFullYear();
    let maand = vandaag.getMonth() - verjaardag.getMonth();
    if ( maand < 0 || (maand === 0 && vandaag.getDate() < verjaardag.getDate())) {
    		leeftijd--;
    }
    return leeftijd;
    }
    
}
