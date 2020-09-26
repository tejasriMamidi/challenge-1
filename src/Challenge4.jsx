import React, { Component } from 'react'

export class Challenge4 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             clicked :false
        }
    }
    hello = ()=>{
        this.setState(this.state={clicked:true} )
    }
    render() {
        return (
            <div>
            
                {this.state.clicked ? "Button Clicked" : <button onClick={this.hello}>Click Me </button>  }
            </div>
        )
    }
}

export default Challenge4
