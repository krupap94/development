function getans() {
  let character = document.getElementById("character");
  let result = document.getElementById("result");
  switch (character) {
    character.value == "a" ||
    character.value == "e" ||
    character.value == "i" ||
    character.value == "o" ||
    character.value == "u"
   
    result.value = "It is a Vowel";
   default 
    result.value = "It's not a vowel";
}
  
}
