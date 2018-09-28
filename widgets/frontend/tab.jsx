import React from 'react';
import ReactDOM from 'react-dom';

class Tab extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tabIndex: 0
    };
    // this.selectTab = this.selectTab.bind(this);
  }

  render(){

    return(
      <section className="tab-container">
      <header>
      </header>
      <h1>Look there's tabs</h1>
      </section>
    );
  }





}

export default Tab;
