import React, { Component } from 'react';

class Teste extends Component{

  msg = () => {
    return 'o trabalho duro ganha do talento sempre que o talento não trabalha duro'
  }

  msgNumber = (n) =>{
    return n * 2
  }

  render(){
    return(
      <div>
        <h1>{this.msg()}</h1>
        {this.msgNumber(10)}
      </div>
    )
  }
}

export default Teste;