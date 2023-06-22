// frafment  retunr multiple Element  where  render method return one element only

import React , {Component}  from  "react";

class App extends Component{

    render() {
        return (
            <React.Fragment>
                <h1> This is  heading 1  or element 1 </h1>
                <h2> This is element 2 so we can rertun multiple  element with React Fragment</h2>
            </React.Fragment>
        );
    }


}

export default  App;