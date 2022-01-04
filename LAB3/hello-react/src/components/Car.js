import React from "react";

//stateful

class Wheel extends React.Component{
      constructor(){
          super();
          const state = [2, 4, 6, 8, 10];
      }
    render(){
        return<>I have 4 wheel</>;      
    }
}

class Car extends React.Component {
    constructor(props){
      super(props);
      this.state = { brand: "Toyota"};
      }
      changeBrand = (msg) => {
          this.setState({ brand: "Mazda"});
          alert(msg)

      };
    render() {
      return (
        <>
        <Wheel />
            <p>
                My car is <span>{this.state.brand}</span>, {this.props.age}
                <br />
                Eye color is {this.props.eye}
            </p>
            <button onClick={() => this.changeBrand("Hi !!")}>Click Me !!</button>
        </>
      );
    }      
}
export default Car;