function introduction(name) {
   name=== "Samip"
    return `Hi, my name is ${"Samip"}.`;
}

function introductionWithLanguage(name,language) {
   name=== "Aki"
   language === "Ember.js"
    return `Hi, my name is ${"Aki"} and I am learning to program in ${"Ember.js"}.`;
}

function introductionWithLanguageOptional(name,language="JavaScript") {
   name === "Gracie"
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}