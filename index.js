const readline = require("readline");
const opn = require("opn");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter English word: ", word => {
  opn(`https://dictionary.cambridge.org/dictionary/english-vietnamese/${word}`);
  opn(
    `https://translate.google.com.au/?um=1&ie=UTF-8&hl=en&client=tw-ob#en/vi/${word}`
  );
  opn(`https://vdict.com/${word},1,0,0.html`);
  opn(`https://forvo.com/word/${word}`);
  opn(`http://images.google.com/search?q=${word}&sout=1&tbm=isch/`);
  opn("http://images.google.com/search?q=hello&sout=1&tbm=isch");

  rl.close();
});
