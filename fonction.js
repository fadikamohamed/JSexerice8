//Déclaration de la fontion
function majority() {
  //Déclaration de la variable
  var age = document.getElementById('age').value;
  //Déclaration du regex et intégration dans une variable
  var regexAge = /^[1-9][\d]?$/;
  //Déclaration d'une condition et test de la variable avec les regex
  if (regexAge.test(age) == false) {
    alert('Mauvaise saisie');
  } else {
    if (age >= 18) {
      alert('Vous etes majeur');
    } else {
      alert('Vous etes mineur');
      }
    }
}
