const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const searchForm = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const cityData = [];

async function fetchData() {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    if (response.ok) {
      cityData.push(...data);
      addSearchListener();
    } else {
      throw(data);
    }
  } catch(err) {
    console.log('Error: ', err);
  }
}

function addSearchListener() {
  searchForm.addEventListener('input', handleSearchInput)
}

function handleSearchInput() {
  // could use match and regex instead here
  const searchTerm = this.value.toLowerCase();
  const filteredCities = cityData.filter((i) => i.city.toLowerCase().includes(searchTerm) || i.state.toLowerCase().includes(searchTerm));
  appendToList(filteredCities, this.value); // pass in unmodified searchTerm
}

function insertCommas(numStr) {
  return numStr.replace( /\d{1,3}(?=(\d{3})+(?!\d))/g , "$&,");
}

function appendToList(filteredCities, searchTerm) {
  const regex = new RegExp(searchTerm, 'gi');
  // while(suggestions.hasChildNodes()) {
  //   suggestions.removeChild(suggestions.lastChild);
  // }

  const html = filteredCities.map((e) => {
    const city = e.city.replace(regex, `<span class="hl">${searchTerm}</span>`);
    const state = e.state.replace(regex, `<span class="hl">${searchTerm}</span>`);
    return `
      <li>
        <span class="name">${city}, ${state}</span>
        <span class="population">${insertCommas(e.population)}</span>
      </li>
    `
  }).join('');
  suggestions.innerHTML = html;
}

fetchData();
