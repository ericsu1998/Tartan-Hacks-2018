
function LoadSearchPage(){
	foundRecipes = [];

	var target = window.location.href;
	var termsAll = target.split("=");
	var ingredients = termsAll[1].split("+");
	console.log(ingredients)

	for (recipe in recipe_list){
		var valid = false;

		var rec = recipe_list[recipe];
		for (i in rec["tags"]) {
			var tag = rec["tags"][i]
			for (var j = 0; j < ingredients.length; j++){
				var test = ingredients[j];
				if (tag.search(new RegExp(test, 'i') != -1)) {
					console.log("My tofu's been found!");
					valid = true;
				}
			}

		}
		if (valid){
			console.log(recipe);
			foundRecipes.push(recipe);
		}
	}

	var recipeContainer = document.getElementById("results");


	for (var i = 0; i < foundRecipes.length; i++){
		//Display recipe on page
		recipe = foundRecipes[i];
		picture = recipe_list[recipe].picture;
		var temp = document.createElement("div");
		var recipeLink = document.createElement("a");
		var recipeName = document.createElement("h3");
		var recipePic = document.createElement("img");
		recipeLink.href = "recipe.html" + "?recipe=" + recipe
		recipePic.src = picture;
		recipeName.innerHTML = recipe;
		recipeContainer.appendChild(temp);
		temp.appendChild(recipeLink);
		recipeLink.appendChild(recipeName);
		recipeLink.appendChild(recipePic);

		//Create recipe html

	}

	
}
LoadSearchPage();
	
	for(var i = 0; i < foundRecipes.length; i++) {
		AddRecipe();
	}
}

function AddRecipe() {
 	var wrapper = document.createElement("div");
 	wrapper.className = "col-xs-4 project-icon";
 	wrapper.id = "card" + index;

 	

 	// var panel = document.createElement("a");
 	// var pic = document.createElement("img");
 	// pic.className = "img-circle";
 	// panel.appendChild(pic);

 	var desc = document.createElement("p");
 	desc.innerHTML = "Project Name";

 	panel.appendChild(desc);

 	wrapper.appendChild(panel);
 	rownode.appendChild(wrapper);

}
