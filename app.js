
const loadPlayerData=()=>{
    const fieldText = document.getElementById('Search-field');
    const fieldValue = fieldText.value;
    // input Erro handling
    if(fieldValue !==''){
        const dataUrl = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${fieldValue}`;
    // console.log(dataUrl)
    fetch(dataUrl)
    .then(res => res.json())
    .then(data =>displayPlayer(data.player))
    fieldText.value=''
    }
    else{ alert("Please Enter Player Name !!")}
    
}

const displayPlayer = (player) =>{
// console.log(player)
    const displayField= document.getElementById('player-container')
    displayField.textContent ='';
    document.getElementById('detail-container').textContent ='';
    document.getElementById('spin').style.display='block';
    player.forEach( data1 =>{
        const name = data1.strPlayer;
        const country = data1.strNationality;
        const picture = data1.strThumb;
        const id = data1.idPlayer;
        // console.log(id)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML =`
        <div class=" border border-info card p-2 h-100">
        <img src="${picture}" class="card-img-top" alt=" picture of ${name}">
        <div class="card-body">
          <h4 class="card-title">Name:- ${name}</h4>
          <h5 class="card-text text-center"> ${country}</h5>
          <div class="text-center">
          <button class="btn btn-success" onclick=" PlayerDetail(${id})">Detail</button>
          <button class="btn btn-danger m-2">Delete</button></div>
        </div>`
        displayField.appendChild(div);
        document.getElementById('spin').style.display='none';

    })
}


const PlayerDetail = (name) =>{
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${name}`
    // console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then( data => displaySinglePlayer(data.players[0]))
}

const displaySinglePlayer = (data2)=>{
    // console.log(data2)
    const detailDisplay = document.getElementById('detail-container')
    detailDisplay.textContent =''
    
    // for(const player of data2){
        const name = data2.strPlayer;
        console.log(name)
        const banar = data2.strThumb;
        const birthPlace = data2.strBirthLocation;
        const descrip =data2.strDescriptionEN;
        const sport = data2.strSport;

        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML =`
        <div class=" border border-info card p-2 h-100 bg-warning">
        <img src="${banar}" class="card-img-top" alt=" picture of ${name}">
        <div class="card-body">
          <h4 class="card-title">Name:- ${name}</h4>
          <h5 class="card-text">Birth-Place:- ${birthPlace}</h5>
          <h5 class="card-text">sport:- ${sport}</h5>
          <P >${descrip}</P>
          
        </div>`
        detailDisplay.appendChild(div)
        

    }

