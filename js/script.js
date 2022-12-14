pokeOneWeight = 0;
pokeTwoWeight = 0;
pokeList = [];
userTeam = {health_1: 100, health_2: 100, health_3: 100, health_4: 100};
enemyTeam = {health_1: 100, health_2: 100, health_3: 100, health_4: 100};

let quoteData, userInput
handleGetData();
$("#battle").on("submit", battle)
$("#getTeam").on("submit", assembleTeam)
$('#encounterEnemy').on('submit', encounterEnemy)
function assembleTeam() {
  event.preventDefault()
  handleGetData();
   userTeam.pokeOne =  pokeList[0].results[Math.floor(Math.random() * 300)].url
   userTeam.pokeTwo = pokeList[0].results[Math.floor(Math.random() * 300)].url
   userTeam.pokeThree = pokeList[0].results[Math.floor(Math.random() * 300)].url
   userTeam.pokeFour = pokeList[0].results[Math.floor(Math.random() * 300)].url
   $.ajax({
    url: userTeam.pokeOne,
  }).then(
    (data) => {
      pokemonUnoData = data;
      $('#teamMemOne').attr('src', pokemonUnoData.sprites.back_default);
      $('#teamMemOne').attr('alt',  pokemonUnoData.name);
    },
    (error) => {
      console.log("bad request", error)
    }
  )
  $.ajax({
    url: userTeam.pokeTwo,
  }).then(
    (data) => {
      pokemonDosData = data;
      $('#teamMemTwo').attr('src', pokemonDosData.sprites.back_default);
    },
    (error) => {
      console.log("bad request", error)
    }
  )
  $.ajax({
    url: userTeam.pokeThree,
  }).then(
    (data) => {
      pokemonTresData = data;
      $('#teamMemThree').attr('src', pokemonTresData.sprites.back_default);
    },
    (error) => {
      console.log("bad request", error)
    }
  )
  $.ajax({
    url: userTeam.pokeFour,
  }).then(
    (data) => {
      pokemonQuatroData = data;
      $('#teamMemFour').attr('src', pokemonQuatroData.sprites.back_default);
    },
    (error) => {
      console.log("bad request", error)
    }
  )
   //$('#pokeImgOne').attr('src', userTeam.pokeOne.sprites.back_default);
   //$('#pokeImgTwo').attr('src', userTeam.pokeTwo.sprites.back_default);
   //$('#pokeImgTwo').attr('src', userTeam.pokeThree.sprites.back_default);
   //$('#pokeImgTwo').attr('src', userTeam.pokeFour.sprites.back_default);
   console.log(userTeam);
}

function encounterEnemy() {
  event.preventDefault()
  handleGetData();
   enemyTeam.pokeOne =  pokeList[0].results[Math.floor(Math.random() * 300)].url
   enemyTeam.pokeTwo = pokeList[0].results[Math.floor(Math.random() * 300)].url
   enemyTeam.pokeThree = pokeList[0].results[Math.floor(Math.random() * 300)].url
   enemyTeam.pokeFour = pokeList[0].results[Math.floor(Math.random() * 300)].url
   $.ajax({
    url: enemyTeam.pokeOne,
  }).then(
    (data) => {
      pokemonUnoData = data;
      $('#enemyPokeOne').attr('src', pokemonUnoData.sprites.front_default);
      $('#enemyPokeOne').attr('alt',  pokemonUnoData.name);
    },
    (error) => {
      console.log("bad request", error)
    }
  )
  $.ajax({
    url: enemyTeam.pokeTwo,
  }).then(
    (data) => {
      pokemonDosData = data;
      $('#enemyPokeTwo').attr('src', pokemonDosData.sprites.front_default);
    },
    (error) => {
      console.log("bad request", error)
    }
  )
  $.ajax({
    url: enemyTeam.pokeThree,
  }).then(
    (data) => {
      pokemonTresData = data;
      $('#enemyPokeThree').attr('src', pokemonTresData.sprites.front_default);
    },
    (error) => {
      console.log("bad request", error)
    }
  )
  $.ajax({
    url: enemyTeam.pokeFour,
  }).then(
    (data) => {
      pokemonQuatroData = data;
      $('#enemyPokeFour').attr('src', pokemonQuatroData.sprites.front_default);
    },
    (error) => {
      console.log("bad request", error)
    }
  )
   //$('#pokeImgOne').attr('src', userTeam.pokeOne.sprites.back_default);
   //$('#pokeImgTwo').attr('src', userTeam.pokeTwo.sprites.back_default);
   //$('#pokeImgTwo').attr('src', userTeam.pokeThree.sprites.back_default);
   //$('#pokeImgTwo').attr('src', userTeam.pokeFour.sprites.back_default);
   console.log(userTeam);
}

function battle () {
  event.preventDefault()
  $('#getTeam').replaceWith( ('<button id="flee">Flee from battle</button>') );
  $('#encounterEnemy').replaceWith( ('<button id="attack">Attack with this pokemon</button>') );
  //change buttons: remove assemble buttons, add 4 'attack with this pokemon' buttons
  //attack buttons will on click subtract 30 health from poopsing pokemon"
  //if pokemon health hits 0 alert message saying pokemon has fainted.
}

function handleGetData(event) {
  $.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/?limit=300offset=300",
  }).then(
    (data) => {
      pokemonList = data;
      pokeList.push(data);
      pokemonOne = data.results[Math.floor(Math.random() * 300)].url;
      pokemonTwo = data.results[Math.floor(Math.random() * 300)].url;
    },
    (error) => {
      console.log("bad request", error)
    }
  )
}
/*
function renderOneStats() {
  $.ajax({
    url: pokemonOne,
  }).then(
    (data) => {
      pokemonOneStats = data;
      console.log(pokemonOneStats)
      pokeOneWeight += pokemonOneStats.weight;
      renderTwoStats();
    },
    (error) => {
      console.log("bad request", error)
    }
  )
}
/*
function renderTwoStats() {
  $.ajax({
    url: pokemonTwo,
  }).then(
    (data) => {
      pokemonTwoStats = data;
      console.log(pokemonTwoStats)
      pokeTwoWeight += pokemonTwoStats.weight;
      //$('#pokeImgOne').attr('src', pokemonOneStats.sprites.front_default);
     // $('#pokeImgTwo').attr('src', pokemonTwoStats.sprites.back_default);

    },
    (error) => {
      console.log("bad request", error)
    }
  )

}
*/

let decideWinner = function() {
  if (pokeOneWeight > pokeTwoWeight) {
    alert(pokemonOneStats.name + ' is the larger pokemon and thus has defeated ' + pokemonTwoStats.name + '. See bleow for some fun stats on these Pokemon');
  } else if (pokeTwoWeight > pokeOneWeight) {
    alert(pokemonTwoStats.name + ' is the larger pokemon and thus has defeated ' + pokemonOneStats.name + '. See below for some fun stats on these spunky lil guys!');
  } else {
    alert('We have a tie! Everybody wins!')
  }
  $('#pokeImgOne').attr('src', pokemonOneStats.sprites.front_default);
  $('#pokeImgTwo').attr('src', pokemonTwoStats.sprites.back_default);
}


