var rootElement = document.getElementById('root');
var root = ReactDOM.createRoot(rootElement);
// const headingElement = React.createElement('h1', {}, 'Hello from React');
// const heading2Element = React.createElement('h2', {}, 'Hello from React 2');
// const headerElement = React.createElement('header', {}, headingElement, heading2Element)
var headerElement = React.createElement(
    "div",
    null,
    React.createElement(
        "header",
        { className: "header" },
        React.createElement(
            "h1",
            null,
            "Hello from React"
        ),
        React.createElement(
            "h2",
            null,
            "Hello from React 2"
        )
    ),
    React.createElement("button", null)
);

root.render(headerElement);