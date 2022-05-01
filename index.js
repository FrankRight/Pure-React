// const styles = { style: { color: "red" } };

// const dishTitle = React.createElement("h1", styles, "Baked Salmon");

// var items = [
//   "1 lb Salmon",
//   "1 cup Pine Nuts",
//   "2 cups Butter Lettuce",
//   "1 Yellow Squash",
//   "1/2 cup Olive Oil",
// ];

// const ingredients = React.createElement(
//   "ul",
//   null,
//   items.map((item) => React.createElement("li", { key: item }, item))
// );

// const container = React.createElement("div", null, dishTitle, ingredients);

// ReactDOM.render(container, document.getElementById("react-container"));

//////////// Method 2 /////////////

// const IngredientsList = React.createClass({
//   displayName: "IngredientsList",

//   render() {
//     return React.createElement(
//       "ul",
//       { className: "ingredients" },
//       React.createElement("li", null, "1 lb Salmon"),
//       React.createElement("li", null, "1 cup Pine Nuts"),
//       React.createElement("li", null, "2 cups Butter Lettuce"),
//       React.createElement("li", null, "1 Yellow Squash"),
//       React.createElement("li", null, "1/2 cup Olive Oil"),
//       React.createElement("li", null, "3 cloves of Garlic")
//     );
//   },
// });

// const list = React.createElement(IngredientsList, null, null);
// ReactDOM.render(list, document.getElementById("react-container"));

///////////// Method 3 /////////////

// const IngredientsList = React.createClass({
//   displayName: "IngredientsList",

//   render() {
//     return React.createElement(
//       "ul",
//       { className: "ingredients" },
//       this.props.items.map((ingredient, i) =>
//         React.createElement("li", { key: i }, ingredient)
//       )
//     );
//   },
// });

// const items = [
//   "1 lb Salmon",
//   "1 cup Pine Nuts",
//   "2 cups Butter Lettuce",
//   "1 Yellow Squash",
//   "1/2 cup Olive Oil",
//   "3 cloves of Garlic",
// ];

// ReactDOM.render(
//   React.createElement(IngredientsList, { items }, null),
//   document.getElementById("react-container")
// );

///////////// Method 4 /////////////

// TO be displayed
// const items = [
//   "1 lb Salmon",
//   "1 cup Pine Nuts",
//   "2 cups Butter Lettuce",
//   "1 Yellow Squash",
//   "1/2 cup Olive Oil",
//   "3 cloves of Garlic",
// ];

// List created using react component
// class IngredientsList extends React.Component {
//   renderListItem(ingredient, i) {
//     return React.createElement("li", { key: i }, ingredient);
//   }

//   render() {
//     return React.createElement(
//       "section",
//       null,
//       React.createElement("h1", { className: "title" }, "Salmon Fish"),
//       React.createElement(
//         "ul",
//         { className: "ingredients" },
//         this.props.items.map(this.renderListItem)
//       )
//     );
//   }
// }

// ReactDOM.render(
//   React.createElement(IngredientsList, { items }, null),
//   document.getElementById("react-container")
// );

// Using createfactories

const { render } = ReactDOM;

const IngredientsList = ({ list }) =>
  React.DOM.ul(
    null,
    list.map((ingredient, i) => React.DOM.li({ key: i }, ingredient)) // factory used here
  );

// exlicit use of factories
const Ingredients = React.createFactory(IngredientsList);

const list = [
  "1 lb Salmon",
  "1 cup Pine Nuts",
  "2 cups Butter Lettuce",
  "1 Yellow Squash",
  "1/2 cup Olive Oil",
  "3 cloves of Garlic",
];

render(Ingredients({ list }), document.getElementById("react-container"));
