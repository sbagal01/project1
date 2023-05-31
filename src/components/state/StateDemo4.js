import React, { Component } from 'react'

export default class StateDemo4 extends Component {
    state={
        isVisible:true
    }
    visibilty=()=>{
        this.setState({isVisible:!this.state.isVisible})
    }
    render() {
    // return (
    //   <div>
    //    {this.state.isVisible===true?<p>This is Paragraph</p>:null}
    //     <button onClick={this.visibilty}>SHOW/HIDE</button>
    //   </div>
    // )
    if(this.state.isVisible){
        return (<>
        <p>This is Paragraph</p>
        <button onClick={this.visibilty}>SHOW/HIDE</button>
        </>)
    }else{
        return (<>
            
            <button onClick={this.visibilty}>SHOW/HIDE</button>
            </>)
    }
  }
}
