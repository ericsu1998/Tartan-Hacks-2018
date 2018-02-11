function getRecipeName(){
	var link = window.location.href;
	var recipeName = link.split("=")[1];
	return recipeName;
}

function displayRecipe(recipeName){
	console.log(recipeName);
	var recipe = recipe_list[recipeName];
	var recipeContainer = document.getElementById("recipe");
	var temp = document.createElement("div");
	var name = document.createElement("h2");
	var image = document.createElement("img");
	name.innerHTML = recipeName;
	image.src = recipe.picture;

	recipeContainer.appendChild(temp);
	temp.appendChild(name);
	temp.appendChild(image);

}

var recipeName = getRecipeName();
displayRecipe(recipeName);