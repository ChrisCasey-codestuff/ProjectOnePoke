pokeOneWeight = 0;
pokeTwoWeight = 0;


let quoteData, userInput

$("form").on("submit", handleGetData)

function handleGetData(event) {
  event.preventDefault()
  $.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/?limit=300offset=300",
  }).then(
    (data) => {
      pokemonList = data;
      pokemonOne = data.results[Math.floor(Math.random() * 300)].url;
      pokemonTwo = data.results[Math.floor(Math.random() * 300)].url;
      renderOneStats();
    },
    (error) => {
      console.log("bad request", error)
    }
  )
}

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

function renderTwoStats() {
  $.ajax({
    url: pokemonTwo,
  }).then(
    (data) => {
      pokemonTwoStats = data;
      console.log(pokemonTwoStats)
      pokeTwoWeight += pokemonTwoStats.weight;
      decideWinner();
    },
    (error) => {
      console.log("bad request", error)
    }
  )

}

let decideWinner = function() {
  if (pokeOneWeight > pokeTwoWeight) {
    alert(pokemonOneStats.name + ' is the larger pokemon and thus has defeated ' + pokemonTwoStats.name + '. See bleow for some fun stats on these Pokemon');
  } else if (pokeTwoWeight > pokeOneWeight) {
    alert(pokemonTwoStats.name + ' is the larger pokemon and thus has defeated ' + pokemonOneStats.name + '. See below for some fun stats on these spunky lil guys!');
  } else {
    alert('We have a tie! Everybody wins!')
  }
}


