startGame = () =>{
    let birthYear = prompt("What year were you born....Good friend?");
    let h1 = document.createElement('h1');
    let ans;
    if(!isNaN(birthYear) && birthYear != ""){
        let days = ageInDays(birthYear);
        ans = document.createTextNode(`Your are ${days} days old`);
    } else{
        ans = `The value you entered was not a number`;
    }
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(ans);
    document.getElementById('result').appendChild(h1);
}

resetAll = () =>{
    document.getElementById("ageInDays").remove();
}

ageInDays = (birthYear) =>{
    let d = new Date();
    let currentYear = d.getFullYear();
    let days = (currentYear - birthYear) * 365;
    return days;
}