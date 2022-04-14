document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = `https://mushroomobserver.org/api2/observations?format=json&detail=high`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let randomMushroom = data.results[Math.floor(Math.random() * 100)]
        console.log(randomMushroom)
        document.querySelector('h2').innerText = randomMushroom.consensus.name
        document.querySelector('#location').innerText = randomMushroom.location.name
        document.querySelector('img').src = randomMushroom.primary_image.original_url
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
