import React from 'react';

import Header from './header.jsx';
import Footer from './footer.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
         <Header {...this.props}/>
        <div id="content">
         
        </div>
        <Footer {...this.props}/>
      </div>
    );
  }
}

export default App;