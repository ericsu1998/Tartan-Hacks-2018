
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

	
}