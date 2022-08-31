const loadMeal = (search) => {
   const url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals =>{
 const mealContainer = document.getElementById('meals-container');
 mealContainer.innerHTML = ''
 meals.forEach(meal => {
    const mealsCol = document.createElement('div')
    mealsCol.classList.add('col');
    mealsCol.innerHTML = `
    <div class="card" onclick="loadDetails(${meal.idMeal})">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Name: ${meal.strMeal}</h5>
                      <p class="card-text">Details: ${meal.strInstructions.slice(0,200)}</p>
                    </div>
                  </div>
    
    `
    mealContainer.appendChild(mealsCol);
 });
}

const searchFood= () =>{
    const input = document.getElementById('search-food');
    const inputValue = input.value;
    loadMeal(inputValue);
    input.value = '';    
}

const loadDetails= (idMeal) => {
    const url= `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.meals[0]))
}

const displayDetails = meals =>{
  const mealDetails = document.getElementById('meal-details');
  mealDetails.innerHTML = ''
  const meal =document.createElement('div')
  meal.classList.add('col');
  meal.innerHTML = `
    <div class="card">
      <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Name: ${meals.strMeal}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>`
  mealDetails.appendChild(meal)
}
loadMeal('')