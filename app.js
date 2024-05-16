const heading=React.createElement("div",{id:"parent"},
       [React.createElement("div",{id:"child"},
      [ React.createElement("h1",{id:"heading1"},"iam h1 tag"), React.createElement("h2",{id:"heading2"},"iam h2 tag") ]),
      React.createElement("div",{id:"child"},
      [ React.createElement("h1",{id:"heading1"},"iam h1 tag"), React.createElement("h2",{id:"heading2"},"iam h2 tag") ])]);
       const root=ReactDOM.createRoot(document.getElementById("root"));
       root.render(heading);