var guest = ['Zahid', 'Anwar', 'Jawaid'];
for (var i = 0; i < guest.length; i++) {
    guest[i];
    console.log(guest[i]);
}
for (var i = 0; i < guest.length; i++) {
    if (guest[i] === 'Anwar') {
        console.log("\n Absent Guest...".concat(guest[i]));
        var Absent = guest[i];
        guest[i] = 'Iqbal';
        console.log("".concat(Absent, ", is replaced by ").concat(guest[i], "."));
    }
}
console.log("\n Our new guest list...");
for (var i = 0; i < guest.length; i++) {
    console.log(guest[i] + ", is invited");
}
console.log("\nI found a bigger dinner table.");
guest.unshift("Daniyal");
guest.splice(2, 0, "Waqar");
guest.push("Samad");
for (var i = 0; i < guest.length; i++) {
    console.log(guest[i] + ",is invited.");
}
console.log("\nI can invite only two people.");
while (guest.length > 2) {
    var remGuest = guest.pop();
    if (remGuest) {
        console.log("Sorry! ".concat(remGuest, ", you are no longer invited to dinner."));
    }
}
for (var i = 0; i < guest.length; i++) {
    console.log(guest[i] + ", is invited.");
}
guest.splice(0, 2);
console.log(guest);
