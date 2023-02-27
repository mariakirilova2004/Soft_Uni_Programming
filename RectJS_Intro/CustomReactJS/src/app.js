const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
// const headingElement = React.createElement('h1', {}, 'Hello from React');
// const heading2Element = React.createElement('h2', {}, 'Hello from React 2');
// const headerElement = React.createElement('header', {}, headingElement, heading2Element)
const headerElement = (
    <div>
        <header className = "header">
            <h1>Hello from React</h1>
            <h2>Hello from React 2</h2>
        </header>
        <button>

        </button>
    </div>
);

root.render(headerElement);