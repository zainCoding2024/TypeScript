var Alien_color = ["Green", "red", "yellow"];
//const i = Alien_color.indexOf("Green");
for (var i = 0; i < Alien_color.length;) {
    if (Alien_color[i] == "Green") {
        console.log("The player just earned 5 points.");
    }
    if (Alien_color[i] != "Green") {
        console.log("The player just earned 15 points.");
        i++;
    }
}
