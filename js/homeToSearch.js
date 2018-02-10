var recipes = {};

function LoadSearchPage(){
	foundRecipes = [];

	var target = window.location.href;
	var allTerms = target.split("=");
	var searchIngredients = allTerms[1].split("+");
	console.log(searchIngredients);


}