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
            
                {this.state.clicked ? <h1 className="text">Button Clicked</h1> : <button id="button" onClick={this.hello}>Click Me </button>  }
            </div>
        )
    }
}

export default Challenge4
