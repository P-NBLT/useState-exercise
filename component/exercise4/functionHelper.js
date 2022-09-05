function AlphabetOnly(input = "PierreAlexis") {
  const regEx = /^[a-z|A-Z][a-z]{2,10}-?[a-zA-Z]{2,10}/;
  console.log(input.match(regEx));
  console.log(input == input.match(regEx));
}
AlphabetOnly();

function emailRegEx(input) {
  const regEx =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return input == input.match(regEx);
}

function numberRegEx(input) {
  const regEx = /^\d+$/;
}

function postCode() {
  const regEx = /^\d{4}\s?[A-Z]{2}/i;
  console.log("1094s".match(regEx));
}
postCode();

function streetRegEx() {
  const regEx = /[a-z\s-]+/gi;
  console.log("la hire-fewoff few".match(regEx));
}
