
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
   $(".enemyPoke").show();
}

function battle () {
  event.preventDefault()
  if (enemyTeam.pokeOne === null) {
    alert('There is nobody to fight you maniac!')
    return;
  }
  console.log(enemyTeam);
  console.log('hi')
  $('#getTeam').hide()
  $('#encounterEnemy').hide();
  $('#battle').replaceWith('<button id="flee"> Flee!</button>')
  $('#memOne').append('<button class="attackButt"> I choose you! Attack!</button>')
  $('#memTwo').append('<button class="attackButt"> I choose you! Attack!</button>')
  $('#memThree').append('<button class="attackButt"> I choose you! Attack!</button>')
  $('#memFour').append('<button class="attackButt"> I choose you! Attack!</button>')
  $('.attackButt').on('click', attack);
  $('#flee').on('click', function () {
    $('#flee').replaceWith('<button id="battle"> Battle!</button>')
    $('#getTeam').show()
    $('#encounterEnemy').show();
    $('.attackButt').remove();
    $('.enemyPoke').hide();
    $('#battle').on('click', battle);
    $('#assembleTeam').on('click', assembleTeam);
    $('#encounterEnemy').on('click', encounterEnemy);
    enemyTeam.pokeOne = null;
    enemyTeam.pokeTwo = null;
    enemyTeam.pokeThree = null;
    enemyTeam.pokeFour = null;

  })
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

function attack () {
 let enemytoAttack = (Math.floor(Math.random() * (8 - 3) + 3));
 if (enemytoAttack < 5) {
  alert('The attack missed');
  enemyAttack();
 } else if (enemytoAttack === 5) {
  enemyTeam.health_1 = enemyTeam.health_1 - 40;
  alert('The attack hit! Pokemon 1 took damage. This pokemon has ' + enemyTeam.health_1 + ' health remaining');
  if(enemyTeam.health_1 <= 0) {
    alert('pokemon 1 fainted');
    $("#memOne").hide();
  }
  enemyAttack();
 } else if (enemytoAttack === 6) {
  enemyTeam.health_2 = enemyTeam.health_2 - 40;
  alert('The attack hit! Pokemon 2 took damage. This pokemon has ' + enemyTeam.health_2 + ' health remaining');
  if(enemyTeam.health_2 <= 0) {
    alert('pokemon 2 fainted');
    $("#memTwo").hide();
  }
  enemyAttack();
 } else if (enemytoAttack === 7) {
  enemyTeam.health_3 = enemyTeam.health_3 - 40;
  alert('The attack hit! Pokemon 3 took damage. This pokemon has ' + enemyTeam.health_3 + ' health remaining');
  if(enemyTeam.health_3 <= 0) {
    alert('pokemon 3 fainted');
    $("#memThree").hide();
  }
  enemyAttack();
 } else if (enemytoAttack === 8) {
  enemyTeam.health_4 = enemyTeam.health_4 - 40;
  alert('The attack hit! Pokemon 4 took damage. This pokemon has ' + enemyTeam.health_4 + ' health remaining');
  if(enemyTeam.health_4 <= 0) {
    alert('pokemon 4 fainted');
    $("#memFour").hide();
  }
  enemyAttack();
 }
 console.log(enemytoAttack);
};
function enemyAttack () {
  alert('The enemy pokemon move to attack!')
  let damageTaken = (Math.floor(Math.random() * (50 - 30) + 30));
  let damageTaker = (Math.floor(Math.random() * (8 - 3) + 3));
  if (damageTaker < 5) {
    alert('The attack missed!')

  } else if (damageTaker === 5) {
    userTeam.health_1 = userTeam.health_1 - damageTaken;
    alert('The attack hit! Pokemon 1 was damaged, this pokemon now has ' + userTeam.health_1) + ' health.'
    if(userTeam.health_1 <= 0) {
      alert('pokemon 1 fainted!')
    }
  } else if (damageTaker === 6) {
    userTeam.health_2 = userTeam.health_2 - damageTaken;
    alert('The attack hit! Pokemon 2 was damaged, this pokemon now has ' + userTeam.health_2) + ' health.'
    if(userTeam.health_2 <= 0) {
      alert('pokemon 2 fainted!')
      $("#enemyPokeTwo").hide();
    }
  } else if (damageTaker === 7) {
    userTeam.health_3 = userTeam.health_3 - damageTaken;
    alert('The attack hit! Pokemon 3 was damaged, this pokemon now has ' + userTeam.health_3) + ' health.'
    if(userTeam.health_3 <= 0) {
      alert('pokemon 3 fainted!')
      $("#enemyPokeThree").hide();
    }
  } else if (damageTaker === 8) {
    userTeam.health_4 = userTeam.health_4 - damageTaken;
    alert('The attack hit! Pokemon 4 was damaged, this pokemon now has ' + userTeam.health_4) + ' health.'
    if(userTeam.health_4 <= 0) {
      alert('pokemon 1 fainted!')
      $("#enemyPokeFour").hide();
    }
  }
};

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


