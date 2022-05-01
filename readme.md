# Pure React

No Jsx is used in this project, pure react has been used. This was made possible through the use of React.createElement and factories to create React elements.

## React.createElement

Takes 3 arguments, in which all can be null except the first.

- 1st argument - node that is to be displayed.
- 2nd argument - any properties that accompany the node.
- 3rd argument - The children the are in the node.

### React.createElement Examples

```javascript
// Example 1
React.createElement(h1, { style: { color: red } }, "Heading 1");

// Example 2
React.createElement(p, null, "You can createa long paragraph");

// Example 3
const header1 = React.createElement(h1, { style: { color: red } }, "Heading 1");

const paragrph1 = React.createElement(
  p,
  null,
  "You can createa long paragraph"
);

React.createElement(section, null, header1, paragrph1);
```

## Factories

Takes 2 arguments, in which all can be null except the first.

- 1st argument - any properties that accompany the node.
- 2nd argument - The children the are in the node.

### Factories Examples

```javascript
// Example 1
React.DOM.h1({ style: { color: red } }, "Heading 1");

// Example 2
React.DOM.p(null, "You can createa long paragraph");

// Example 3
const header1 = React.DOM.h1({ style: { color: red } }, "Heading 1");

const paragrph1 = React.DOM.p(null, "You can createa long paragraph");

React.DOM.section(null, header1, paragrph1);
```

## ReactDOM.render

Enables all react alements created through React.createElement or factories to be displayed to the DOM.

It takes 2 arguments.

1st - node to be displayed. Starting from 2017 version it can support an array of several nodes.

2nd - The node in the DOM to be replaced.

### ReactDOM.render examples

```javascript
// Single node
ReactDOM.render(<header1 />, document.getElementById("root"))

// Multiple nodes
ReactDOM.render([<header1 />, <paragrph1>], document.getElementById("root"))

```

## Also demonstrated

- The use of depreciated React.createClass. This is just to show you the root of our beloved react.
- Creating a component using React.Component plus extends. Class components that inherit properties from it.
- Stateless function components. The now common method to write a react component.

## Summary

Knowledge of pure react can be very crutual mostly debugging and can help you land a job in an interview.

Happy coding our beloved react!
