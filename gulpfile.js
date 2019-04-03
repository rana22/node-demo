const files = [
    "./gulpfile.ts"
];
files.forEach(function(file) { eval(require("typescript").transpile(require("fs").readFileSync(file).toString())) });