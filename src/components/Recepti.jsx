import { Fragment } from "react";
const recipes = [
  {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    ingredients: [
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ],
  },
  {
    id: "hummus",
    name: "Hummus",
    ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
  },
];

export default function RecipeList() {
  const zaPrikaz = recipes.map((recept) => (
    <Fragment key={recept.id}>
      <h2> {recept.name}</h2>
      <ul>
        {recept.ingredients.map((sastojak) => (
          <li key={sastojak}> {sastojak}</li>
        ))}
      </ul>
    </Fragment>
  ));

  return (
    <div>
      <h1>Recipes</h1>
      <ul>{zaPrikaz}</ul>
    </div>
  );
}
