document.writeln("Hello World !!!");
window.alert("Hello World Again !!!");
document.getElementById("title").innerHTML = "Hello World, I like JavaScript";

let namePrompt = window.prompt("What is your name ?");

document.getElementById("name").innerHTML = namePrompt

let resp = true; window.confirm(" You like JavaScript ?")

if (resp) {
    document.getElementById("resposta").innerHTML = "Yes! the student is enjoying JavaScript class"
}

else {
    document.getElementById("resposta").innerHTML = "No! the student doesn't like JavaScript class"
}

function sendName() {
    alert("Test")
}

function sendName() {
    let nameAnswer = document.getElementById("inputName").value

    const answer = document.getElementById("containerAnswer");

    answer.innerHTML = " The name write is " + nameAnswer;

    answer.style.display = "flex";
    answer.style.height = "150px";
answer.style.backgroundImage = "linear-gradient(to right, IndianRed, LightCoral, Salmon, DarkSalmon, LightSalmon, Crimson, Red, FireBrick, DarkRed, Pink, LightPink, HotPink, DeepPink, MediumVioletRed, PaleVioletRed, OrangeRed, Tomato, DarkOrange, Orange, Yellow, Gold, LightYellow, LemonChiffon, LightGoldenrodYellow, PapayaWhip, Moccasin, PeachPuff, PaleGoldenrod, Khaki, DarkKhaki, Cornsilk, BlanchedAlmond, Bisque, NavajoWhite, Wheat, BurlyWood, Tan, RosyBrown, SandyBrown, Goldenrod, DarkGoldenrod, Peru, Chocolate, SaddleBrown, Sienna, Brown, Maroon, DarkOliveGreen, Olive, OliveDrab, YellowGreen, LimeGreen, Lime, LawnGreen, Chartreuse, GreenYellow, SpringGreen, MediumSpringGreen, LightGreen, PaleGreen, DarkSeaGreen, MediumSeaGreen, SeaGreen, ForestGreen, Green, DarkGreen, MediumAquamarine, Aquamarine, Turquoise, LightSeaGreen, MediumTurquoise, DarkTurquoise, Teal, DarkCyan, Aqua, Cyan, LightCyan, PaleTurquoise, PowderBlue, LightBlue, SkyBlue, LightSkyBlue, DeepSkyBlue, DodgerBlue, CornflowerBlue, SteelBlue, RoyalBlue, Blue, MediumBlue, DarkBlue, Navy, MidnightBlue, MediumSlateBlue, SlateBlue, DarkSlateBlue, Lavender, GhostWhite, BlueViolet, Indigo, DarkViolet, DarkOrchid, MediumOrchid, Purple, DarkMagenta, Magenta, Fuchsia, Violet, Plum, Orchid, MediumPurple, Thistle, Snow, Honeydew, MintCream, Azure, AliceBlue, LavenderBlush, MistyRose, White, WhiteSmoke, Seashell, Beige, OldLace, FloralWhite, Ivory, AntiqueWhite, Linen, Lavender, Gainsboro, LightGray, Silver, DarkGray, Gray, DimGray, DarkSlateGray, LightSlateGray, SlateGray, DarkGray, Black)";
answer.style.justifyContent = "Center"
answer.style.alignItems = "Center"

answer.style.fontSize = "20px";

    answer.style.border= "2px solid red";
}
