const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showCountry(data))
}

loadCountry();

const showCountry = countries => {
    const row = document.getElementById('country-card')
   countries.forEach(country => {
    const col = document.createElement('div')
    col.classList.add('col')
    col.innerHTML = `
   
              <div class="card">
                 <img src="${country.flags.png}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Name: ${country.name.common}</h5>
                  <h6 class="card-title">Capital:${country.capital ? country.capital[0]: 'No Capital' }</h6>
                  
            <button class="btn btn-primary" onclick="displayCountryDetails('${country.cca3}')">Details</button>
                  </div>
              </div>
    `;
    row.appendChild(col);
    
   });
   
   }
   
const displayCountryDetails = ( code) => {
    const url= `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetail(data[0]))
}

 const showCountryDetail = country => {
    const countryDetail = document.getElementById('country-details')
    countryDetail.innerHTML = `
    <div class= "card" >
    <img src="${country.flags.svg}" class="card-img-top" alt="...">
    <h4 class="card-title">Name: ${country.name.common} </h4>
    </div>
    `
 }