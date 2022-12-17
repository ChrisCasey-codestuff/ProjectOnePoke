pokeList = [];
userTeam = {health_1: 100, health_2: 100, health_3: 100, health_4: 100};
enemyTeam = {health_1: 100, health_2: 100, health_3: 100, health_4: 100};
let targets
let enemyTargets
let quoteData, userInput

handleGetData();


$("#battle").on("submit", battle)
$("#getTeam").on("submit", assembleTeam)
$('#encounterEnemy').on('submit', encounterEnemy)


function assembleTeam() {
  event.preventDefault()
  userTeam.health_1 = 100;
  userTeam.health_2 = 100;
  userTeam.health_3 = 100;
  userTeam.health_4 = 100;
  $('#memOne').show();
  $('#memTwo').show();
  $('#memThree').show();
  $('#memFour').show();
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
      $('teamMemOne').below('<p>' + pokemonUnoData.name + '</p>');
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
}

function encounterEnemy() {
  event.preventDefault()
  enemyTeam.health_1 = 100;
  enemyTeam.health_2 = 100;
  enemyTeam.health_3 = 100;
  enemyTeam.health_4 = 100;
  $('#enemyPokeFour').show();
  $('#enemyPokeThree').show();
  $('#enemyPokeTwo').show();
  $('#enemyPokeOne').show();
  handleGetData();
   enemyTeam.pokeOne =  pokeList[0].results[Math.floor(Math.random() * 300)].url
   enemyTeam.pokeTwo = pokeList[0].results[Math.floor(Math.random() * 300)].url
   enemyTeam.pokeThree = pokeList[0].results[Math.floor(Math.random() * 300)].url
   enemyTeam.pokeFour = pokeList[0].results[Math.floor(Math.random() * 300)].url
   $.ajax({
    url: enemyTeam.pokeOne,
  }).then(
    (data) => {
      pokemonOneData = data;
      $('#enemyPokeOne').attr('src', pokemonOneData.sprites.front_default);
      $('#enemyPokeOne').attr('alt',  pokemonOneData.name);
    },
    (error) => {
      console.log("bad request", error)
    }
  )
  $.ajax({
    url: enemyTeam.pokeTwo,
  }).then(
    (data) => {
      pokemonTwoData = data;
      $('#enemyPokeTwo').attr('src', pokemonTwoData.sprites.front_default);
    },
    (error) => {
      console.log("bad request", error)
    }
  )
  $.ajax({
    url: enemyTeam.pokeThree,
  }).then(
    (data) => {
      pokemonThreeData = data;
      $('#enemyPokeThree').attr('src', pokemonThreeData.sprites.front_default);
    },
    (error) => {
      console.log("bad request", error)
    }
  )
  $.ajax({
    url: enemyTeam.pokeFour,
  }).then(
    (data) => {
      pokemonFourData = data;
      $('#enemyPokeFour').attr('src', pokemonFourData.sprites.front_default);
    },
    (error) => {
      console.log("bad request", error)
    }

  )

   $(".enemyPoke").show();
}

function battle () {
  event.preventDefault()
  if (enemyTeam.pokeOne === null || enemyTeam.pokeOne === undefined) {
    alert('There is nobody to fight you maniac!')
    return;
  }
  if (userTeam.pokeOne === null || userTeam.pokeOne === undefined) {
    alert('You do not have any pokemon to ride into battle with you silly goose! Go on! Assemble a team!');
    return;
  }
  $('body').append('<audio id= "battleSong" src="./musi/1-28. Battle (Vs. Gym Leader).mp3" autoplay>')
  $('#battleSong')[0].volume = 0.04;
  userTeam.health_1 = 100;
  userTeam.health_2 = 100;
  userTeam.health_3 = 100;
  userTeam.health_4 = 100;
  enemyTeam.health_1 = 100;
  enemyTeam.health_2 = 100;
  enemyTeam.health_3 = 100;
  enemyTeam.health_4 = 100;
  $('#teamMemOne').after('<b class="healthPoints" id="userPokeOneHealth">' + userTeam.health_1 + '</b>')
  $('#teamMemTwo').after('<b class="healthPoints" id="userPokeTwoHealth">' + userTeam.health_2 + '</b>')
  $('#teamMemThree').after('<b class="healthPoints" id="userPokeThreeHealth">' + userTeam.health_3 + '</b>')
  $('#teamMemFour').after('<b class="healthPoints" id="userPokeFourHealth">' + userTeam.health_4 + '</b>')
  $('#enemyPokeOne').after('<b class="healthPoints" id="enemyPokeOneHealth">' + enemyTeam.health_1 + '</b>')
  $('#enemyPokeTwo').after('<b class="healthPoints" id="enemyPokeTwoHealth">' + enemyTeam.health_2 + '</b>')
  $('#enemyPokeThree').after('<b class="healthPoints" id="enemyPokeThreeHealth">' + enemyTeam.health_3 + '</b>')
  $('#enemyPokeFour').after('<b class="healthPoints" id="enemyPokeFourHealth">' + enemyTeam.health_4 + '</b>')
  enemyTargets = ['miss' ,'target_1', 'target_2', 'target_3', 'target_4']
  targets = ['miss' ,'target_1', 'target_2', 'target_3', 'target_4']
  if (enemyTeam.pokeOne === null) {
    alert('There is nobody to fight you maniac!')
    return;
  } else if (enemyTeam.pokeOne !== null) {
  $('#getTeam').hide()
  $('#encounterEnemy').hide();
  $('#battle').replaceWith('<button id="flee"> Flee and Heal! </button>')
  $('#memOne').append('<button class="attackButt">' + pokemonUnoData.name + ' I choose you! Attack!</button>')
  $('#memTwo').append('<button class="attackButt">' + pokemonDosData.name + ' I choose you! Attack!</button>')
  $('#memThree').append('<button class="attackButt">' + pokemonTresData.name + ' I choose you! Attack!</button>')
  $('#memFour').append('<button class="attackButt">' + pokemonQuatroData.name + ' I choose you! Attack!</button>')
  $('.attackButt').on('click', attack);
  $('#flee').on('click', function () {
    enemyTeam.pokeOne = null;
    $('#memOne').show();
    $('#memTwo').show();
    $('#memThree').show();
    $('#memFour').show();
    $('.healthPoints').remove();
    $('#battleSong').remove();
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
  }
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
  $('.healthPoints').remove();
  $('#teamMemOne').after('<b class="healthPoints" id="userPokeOneHealth">' + userTeam.health_1 + '</b>')
  $('#teamMemTwo').after('<b class="healthPoints" id="userPokeTwoHealth">' + userTeam.health_2 + '</b>')
  $('#teamMemThree').after('<b class="healthPoints" id="userPokeThreeHealth">' + userTeam.health_3 + '</b>')
  $('#teamMemFour').after('<b class="healthPoints" id="userPokeFourHealth">' + userTeam.health_4 + '</b>')
  $('#enemyPokeOne').after('<b class="healthPoints" id="enemyPokeOneHealth">' + enemyTeam.health_1 + '</b>')
  $('#enemyPokeTwo').after('<b class="healthPoints" id="enemyPokeTwoHealth">' + enemyTeam.health_2 + '</b>')
  $('#enemyPokeThree').after('<b class="healthPoints" id="enemyPokeThreeHealth">' + enemyTeam.health_3 + '</b>')
  $('#enemyPokeFour').after('<b class="healthPoints" id="enemyPokeFourHealth">' + enemyTeam.health_4 + '</b>')
  let damageTaken = (Math.floor(Math.random() * (61 - 20) + 20));
  let enemytoAttack = targets[(Math.floor(Math.random() * (targets.length - 0) + 0))];
  if (enemytoAttack === 'miss') {
    alert('Your attack missed!');
    enemyAttack();
    return;
  }
  if (enemytoAttack === 'target_1') {
    enemyTeam.health_1 = enemyTeam.health_1 - damageTaken;
    if (enemyTeam.health_1 <= 0) {
      alert('Enemy ' + pokemonOneData.name +' was hit! The pokemon fainted!')
      $('#enemyPokeOneHealth').remove();
      $('#enemyPokeTeamOne').hide();
      targets.splice(targets.indexOf('target_1'), 1);
      enemyAttack();
      if (targets.length === 1 || enemyTargets.length === 1) {
        gameOver();
        return;
      } else {
        enemyAttack();
      };

      return;
    }
    alert('The attack hit! Enemy ' + pokemonOneData.name + ' took ' + damageTaken +'. This pokemon now has ' + enemyTeam.health_1 + ' health remaining.');
    enemyAttack();
    return;
  }
  if (enemytoAttack === 'target_2') {
    enemyTeam.health_2 = enemyTeam.health_2 - damageTaken;
    if (enemyTeam.health_2 <= 0) {
      alert('Enemy ' + pokemonTwoData.name + ' was hit! The pokemon fainted!')
      $('#enemyPokeTwoHealth').remove();
      $('#enemyPokeTeamTwo').hide();
      targets.splice(targets.indexOf('target_2'), 1);
      enemyAttack();
      if (targets.length === 1 || enemyTargets.length === 1) {
        gameOver();
        return;
      } else {
        enemyAttack();
      };
      return;
    }
    alert('The attack hit! Enemy ' + pokemonTwoData.name + ' took ' + damageTaken +'. This pokemon now has ' + enemyTeam.health_2 + ' health remaining.');
    enemyAttack();
    return;
  }
  if (enemytoAttack === 'target_3') {
    enemyTeam.health_3 = enemyTeam.health_3 - damageTaken;
    if (enemyTeam.health_3 <= 0) {
      alert('Enemy ' + pokemonThreeData.name + ' was hit! The pokemon fainted!')
      $('#enemyPokeThreeHealth').remove();
      $('#enemyPokeTeamThree').hide();
      targets.splice(targets.indexOf('target_3'), 1);
      if (targets.length === 1 || enemyTargets.length === 1) {
        gameOver();
        return;
      } else {
        enemyAttack();
      };
      return;
    }
    alert('The attack hit! Enemy ' + pokemonThreeData.name + ' took ' + damageTaken +'. This pokemon now has ' + enemyTeam.health_3 + ' health remaining.');
    enemyAttack();
    return;
  }
  if (enemytoAttack === 'target_4') {
    enemyTeam.health_4 = enemyTeam.health_4 - damageTaken;
    if (enemyTeam.health_4 <= 0) {
      alert('Enemy ' + pokemonFourData.name + ' was hit! The pokemon fainted!')
      $('#enemyPokeFourHealth').remove();
      $('#enemyPokeTeamFour').hide();
      targets.splice(targets.indexOf('targets_4'), 1);
      if (targets.length === 1 || enemyTargets.length === 1) {
        gameOver();
        return;
      } else {
        enemyAttack();
      }

      return;
    }
    alert('The attack hit! Enemy ' + pokemonFourData.name + ' took ' + damageTaken +'. This pokemon now has ' + enemyTeam.health_4 + ' health remaining.');
    enemyAttack();
    return;
  }
  return;
}

function enemyAttack () {
  $('.healthPoints').remove();
  $('#teamMemOne').after('<b class="healthPoints" id="userPokeOneHealth">' + userTeam.health_1 + '</b>')
  $('#teamMemTwo').after('<b class="healthPoints" id="userPokeTwoHealth">' + userTeam.health_2 + '</b>')
  $('#teamMemThree').after('<b class="healthPoints" id="userPokeThreeHealth">' + userTeam.health_3 + '</b>')
  $('#teamMemFour').after('<b class="healthPoints" id="userPokeFourHealth">' + userTeam.health_4 + '</b>')
  $('#enemyPokeOne').after('<b class="healthPoints" id="enemyPokeOneHealth">' + enemyTeam.health_1 + '</b>')
  $('#enemyPokeTwo').after('<b class="healthPoints" id="enemyPokeTwoHealth">' + enemyTeam.health_2 + '</b>')
  $('#enemyPokeThree').after('<b class="healthPoints" id="enemyPokeThreeHealth">' + enemyTeam.health_3 + '</b>')
  $('#enemyPokeFour').after('<b class="healthPoints" id="enemyPokeFourHealth">' + enemyTeam.health_4 + '</b>')
  let damageTaken = (Math.floor(Math.random() * (61 - 20) + 20));
  let damageTaker = enemyTargets[(Math.floor(Math.random() * (enemyTargets.length - 0) + 0))];
  console.log(damageTaker);
  if(damageTaker === 'miss') {
    alert('Enemies attack missed!');
    return;
  }
  if(damageTaker === 'target_1') {
    userTeam.health_1 = userTeam.health_1 - damageTaken;
    if (userTeam.health_1 <= 0) {
      alert('Your ' + pokemonUnoData.name + ' was hit! Your pokemon fainted!');
      $('#userPokeOneHealth').hide();
      $('#memOne').hide();
      enemyTargets.splice(enemyTargets.indexOf('target_1'), 1)
      if (targets.length === 1 || enemyTargets.length === 1) {
        gameOver();
      }
      return;
    } else if (userTeam.health_1 > 0) {
    alert('Enemies attack landed! Your ' + pokemonUnoData.name + ' took ' + damageTaken + ' damage. This pokemon now has ' + userTeam.health_1 + ' health.');
    $('#userPokeOneHealth').remove();
    $('#teamMemOne').after('<b class="healthPoints" id="userPokeOneHealth">' + userTeam.health_1 + '</b>')
    return;
    }
  }
  if(damageTaker === 'target_2') {
    userTeam.health_2 = userTeam.health_2 - damageTaken;
    if (userTeam.health_2 <= 0) {
      alert('Your ' + pokemonDosData.name + ' was hit! Your pokemon fainted!');
      $('#userPokeTwoHealth').hide();
      $('#memTwo').hide();
      enemyTargets.splice(enemyTargets.indexOf('target_2'), 1)
      if (targets.length === 1 || enemyTargets.length === 1) {
        gameOver();
      }
      return;
    } else if (userTeam.health_2 > 0) {
     alert('Enemies attack landed! Your ' + pokemonDosData.name + ' took ' + damageTaken + ' damage. This pokemon now has ' + userTeam.health_2 + ' health.');
     $('#userPokeTwoHealth').remove();
     $('#teamMemTwo').after('<b class="healthPoints" id="userPokeTwoHealth">' + userTeam.health_2 + '</b>')
     return;
     }
  }
  if(damageTaker === 'target_3') {
    userTeam.health_3 = userTeam.health_3 - damageTaken;
    if (userTeam.health_3 <= 0) {
      alert('Your ' + pokemonTresData.name + ' was hit! Your pokemon fainted!');
      $('#userPokeThreeHealth').hide();
      $('#memThree').hide();
      enemyTargets.splice(enemyTargets.indexOf('target_3'), 1);
      if (targets.length === 1 || enemyTargets.length === 1) {
        gameOver();
      }
      return;
    } else if (userTeam.health_3 > 0) {
    alert('Enemies attack landed! Your ' + pokemonTresData.name + ' took ' + damageTaken + ' damage. This pokemon now has ' + userTeam.health_3 + ' health.');
    $('#userPokeThreeHealth').remove();
    $('#teamMemThree').after('<b class="healthPoints" id="userPokeThreeHealth">' + userTeam.health_3 + '</b>')
    return;
    }
  }
  if(damageTaker === 'target_4') {
    userTeam.health_4 = userTeam.health_4 - damageTaken;
    if (userTeam.health_4 <= 0) {
      alert('Your ' + pokemonQuatroData.name + ' was hit! Your pokemon fainted!');
      $('#userPokeFourHealth').hide();
      $('#memFour').hide();
      enemyTargets.splice(enemyTargets.indexOf('target_4'), 1);
      if (targets.length === 1 || enemyTargets.length === 1) {
        gameOver();
      }
      return;
    } else if (userTeam.health_4 > 0) {
    alert('Enemies attack landed! Your ' + pokemonQuatroData.name + ' took ' + damageTaken + ' damage. This pokemon now has ' + userTeam.health_4 + ' health.');
    $('#userPokeFourHealth').remove();
    $('#teamMemFour').after('<b class="healthPoints" id="userPokeFourHealth">' + userTeam.health_4 + '</b>')
    return;
    }
  }

  return;
}
  function gameOver() {
    $('.healthPoints').remove();
    if (targets.length === 1) {
      alert('You win! Rival trainer defeated!')
      function reset () {
        enemyTeam.pokeOne = null;
        $('#memOne').show();
        $('#memTwo').show();
        $('#memThree').show();
        $('#memFour').show();
        $('.healthPoints').remove();
        $('#battleSong').remove();
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
      }
      reset();
      return;
    } else if (enemyTargets.length === 1) {
      alert('You have been defeated! Best to flee now!')
      function reset () {
        enemyTeam.pokeOne = null;
        $('#memOne').show();
        $('#memTwo').show();
        $('#memThree').show();
        $('#memFour').show();
        $('.healthPoints').remove();
        $('#battleSong').remove();
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
      }
      reset();
      return;
    }
}
