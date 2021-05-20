fullURL = "https://codeforces.com/api/user.info?handles=DmitriyH;Fefer_Ivan"

getHandleData = (handleName) =>{
    const URL = "https://codeforces.com/api/user.info?handles";
    const FULL_URL = `${URL}=${handleName};Fefer_Ivan`;
    const handlePromise = fetch(FULL_URL);
    return handlePromise.then((response) =>{
        return response.json();
    })

}

searchHandle = () =>{
    const handleName = document.getElementById('handle-input').value;
    getHandleData(handleName)
    .then((response) =>{
        showHandleInfo(response);
        console.log(response);
    }).catch((error) =>{
        console.log('error');
        console.log('Something gone wrong');
    })
}

showHandleInfo = (handleData) =>{
    let fullName;
    let fName = handleData.result[0].firstName;
    let lName = handleData.result[0].lastName;
    fullName = `${fName} ${lName}`;
    document.getElementById('handle-name').innerText = handleData.result[0].handle;
    document.getElementById('cur-rating').innerText = handleData.result[0].rating;
    document.getElementById('cur-rank').innerText = handleData.result[0].rank;
    document.getElementById('max-rating').innerText = handleData.result[0].maxRating;
    document.getElementById('max-rank').innerText = handleData.result[0].maxRank;
    document.getElementById('name').innerText = fullName;
    document.getElementById('org').innerText = handleData.result[0].organization;
    document.getElementById('city').innerText = handleData.result[0].city;
    document.getElementById('country').innerText = handleData.result[0].country;
    document.getElementById('friend').innerText = handleData.result[0].friendOfCount;
}