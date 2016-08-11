var text = "This is a test of the \ emergency broadcast system. It was designed by Jim";
var myName = "Jim";
var hits = [];

for (var i = 0; i < text.length; i++) {
    if (text[i] === "J") {
        for (var j = i; j < (myName.length + i); j++) {
            hits.push(text[j]);
        }
    }
}

if (hits.length === 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}
