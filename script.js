let styleSheet = document.createElement("style");
document.head.append(styleSheet);

let sheet = styleSheet.sheet;
let sheetFont = "@font-face {\n" +
     "    font-family: 'Monofett';\n" +
     "    src: url('Monofett-Regular.woff2') format('woff2'), /* If you have a WOFF2 version */\n" +
     "         url('Monofett-Regular.woff') format('woff'),   /* If you have a WOFF version */\n" +
     "         url('Monofett-Regular.ttf') format('truetype'); /* Fallback for older browsers */\n" +
     "    font-weight: normal;\n" +
     "    font-style: normal;\n" +
     "}\n" +
     "\n";
let sheetBody =
    "body {\n" +
    "    background-color: blueviolet;\n" +
    "    font-family: 'Monofett';\n" +
    "    font-size: 45px;\n" +
    "    text-align: center;\n" +
    "}\n" +
    "\n";

let sheetH1 =
    "h1 {\n" +
    "    border-width: 10px;\n" +
    "    border-style: dashed;\n" +
    "    border-color: orangered;\n" +
    "}\n" +
    "\n";

    // "p {\n" +
    // "    font-family: Verdana;\n" +
    // "    background-color: black;\n" +
    // "    border-color: white;\n" +
    // "    border-radius: 8px;\n" +
    // "    border-width: 10px;\n" +
    // "    border-color: white;\n" +
    // "    font-size: 30px;\n" +
    // "    text-align: center;\n" +
    // "    text-shadow:\n" +
    // "        0 0 3px greenyellow,\n" +
    // "        3px 0 0 plum,\n" +
    // "        0 3px 0 lightskyblue,\n" +
    // "        0 0 7px lightgreen;\n" +
    // "}\n" +
    // "\n" +
    // "ul {\n" +
    // "    font-family: sans-serif;\n" +
    // "}\n" +
    // "\n" +
    // "ol {\n" +
    // "    font-family: cursive;\n" +
    // "}\n" +
    // "\n" +
    // "li {\n" +
    // "    text-align: start;\n" +
    // "}";

let styleRules = [sheetFont, sheetBody, sheetH1];
for(let value of styleRules) {
    sheet.insertRule(value, sheet.cssRules.length);
}
//sheet.insertRule(sheetFont, sheet.cssRules.length);


let htmlMainHeader = document.createElement("h1");

htmlMainHeader.innerText = "This header has a border!";

document.body.appendChild(htmlMainHeader);
// htmlMainHeader.setAttribute()

