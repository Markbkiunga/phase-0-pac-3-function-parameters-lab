let firstName = "Aki";
function introduction(firstName) {
  console.log(`Hi, my name is ${firstName}.`);
  return `Hi, my name is ${firstName}.`;
}
introduction();
let language = "Ember.js";
function introductionWithLanguage(firstName, language) {
  console.log(
    `Hi, my name is ${firstName} and I am learning to program in ${language}.`
  );
  return `Hi, my name is ${firstName} and I am learning to program in ${language}.`;
}
introductionWithLanguage();
function introductionWithLanguageOptional(
  firstName = "Gracie",
  language = "JavaScript"
) {
  console.log(
    `Hi, my name is ${firstName} and I am learning to program in ${language}.`
  );
  return `Hi, my name is ${firstName} and I am learning to program in ${language}.`;
}
introductionWithLanguageOptional();
