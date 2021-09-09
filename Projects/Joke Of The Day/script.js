let joke = [];
joke[0] = "Where are average things manufactured? <br>The satisfactory.";
joke[1] = "What kind of exercise do lazy people do? <br> Diddly-squats.";
joke[2] = "What do you call a pony with a cough?<br> A little horse!";
joke[3] = "What is Forrest Gump's password?<br> 1Forrest1.";
joke[4] = "Why did the M&M go to school?<br> He wanted to be a Smartie.";
joke[5] = "What did one traffic light say to the other?<br> Stop looking at me, I'm changing!";
joke[6] = "What do you call bears with no ears?<br> B.";
joke[7] = "What's a foot long and slippery?<br> A slipper!";
joke[8] = "Why do French people eat snails? <br>They don't like fast food!";
joke[9] = "What's red and moves up and down?<br> A tomato in an elevator!";
joke[10] = "I invented a new word today:<br> Plagiarism.";
joke[11] = "What is sticky and brown?<br> A stick!";
joke[12] = "How does a rabbi make coffee?<br> Hebrews it!";
joke[13] = "Rest in peace boiling water.<br> You will be mist!";
joke[14] = "How do you throw a space party?<br> You planet!";
joke[15] = "Want to hear a construction joke?<br> Oh never mind, I'm still working on that one.";
joke[16] = "Why don't scientists trust atoms? <br>Because they make up everything!";
joke[17] = "I hate Russian dolls… <br>they're so full of themselves!";
joke[18] = "Talk is cheap?<br> Have you ever talked to a lawyer?";
joke[19] = "Why did the gym close down?<br> It just didn't work out!";
joke[20] = "Two artists had an art contest.<br> It ended in a draw!";
joke[21] = "A plateau is the highest form of flattery.";
joke[22] = "What did 0 say to 8?<br> Nice belt!";
joke[23] = "What are a shark's two most favorite words?<br> Man overboard!";
joke[24] = "My girlfriend treats me like a god.<br> She ignores my existence and only talks to me when she needs something.";
joke[25] = "What does the man in the moon do when his hair gets too long?<br> Eclipse it!";

document.getElementById('joke').innerHTML = joke[0];
let x = 26;


function generateNextJoke() {
    ++x;
    x %= 26;
    document.getElementById('joke').innerHTML = joke[x];
}

function generatePreviousJoke() {
    --x;
    x %= 26;
    document.getElementById('joke').innerHTML = joke[x];
}