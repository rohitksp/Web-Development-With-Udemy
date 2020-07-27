//var tell = prompt("Your name is Rohit?");
//while(tell.indexOf("Yes") === -1) {
//    var tell = prompt("Your name is Rohit?");
//}
//  alert("OKAY THANKS!!");

var tell = prompt("Your name is Rohit?");
while (tell !== "Yes" && tell !== "Ya") {
    var tell = prompt("Your name is Rohit?");
    console.log(tell);
}
alert("OKAY THANKS!!");
