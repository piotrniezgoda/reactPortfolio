import React from "react";

class button extends React.Component  {

  constructor() {
    super();
    this.state = {
      clickedButton: null,
    }
  }


 changeState = (props) =>  {
   this.setState({
     clickedButton: this.props.name
   })

  }

  cheekState(props) {
    console.log(this.state.clickedButton);
  }

  render(name) {
    return (
      <>
      <button className={styles.moreInfoBtn} name={name} onClick={this.changeState}>More info</button>
      <button onClick={this.cheekState}>state</button>
      </>
    )
  }
}

export default button;