 const heading = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"Hello world from React!"),React.createElement("h2",{},"I am sibling of h1!")]),
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"Hello world from React!"),React.createElement("h2",{},"I am sibling of h1!")])]);
 const createRoot = ReactDOM.createRoot(document.getElementById("root"))
 createRoot.render(heading)