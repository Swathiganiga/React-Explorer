
        // const element = React.createElement('h1', null, 'Hello React from app.js');
        // const root = ReactDOM.createRoot(document.getElementById('root'));
        // root.render(element);


    //      nested elements noe
    //     <div id='parent1'>
    //         <div id='child1'>
    //             <h1>Im h1 tag</h1>
    //             <h1>Im h2 tag</h1>
    //         </div>
    //     </div>
    //      <div id='parent2'>
    //      <div id='child2'>
    //          <h1>Im h1 tag</h1>
    //          <h1>Im h2 tag</h1>
    //      </div>
    //  </div>

    const element =React.createElement('div',{id:'main'},
       [ React.createElement('div',{id:'parent1'},
        React.createElement('div',{id:'child1'},
        [React.createElement('h1',null,'Im h1 tag'),
        React.createElement('h1',null,'Im h2 tag')])
    ), React.createElement('div',{id:'parent2'},
        React.createElement('div',{id:'child2'},
        [React.createElement('h1',null,'Im h3 tag'),
        React.createElement('h1',null,'Im h4 tag')])
    )]
    )

    ReactDOM.render(element,document.getElementById('root'));