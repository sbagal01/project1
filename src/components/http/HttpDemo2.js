import React, { Component } from 'react'
import axios from 'axios';
export default class HttpDemo2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:[]
      }
    }

    getData=async function(){
        let url="https://jsonplaceholder.typicode.com/users";
        let response=await axios.get(url);
        this.setState({users:response.data})
        console.log("Response duration is "+ response.durationInMs);
    }
    componentDidMount(){
        this.getData();
    }
    render() {
    return (
      <>
      <h3>HTTP Demo2</h3>
      <table className="table table-striped table-bordered table-hovered">
        <tbody>
            {
                this.state.users.map((user)=>{
                    return (
                        <tr key={user.id}>
                           <td>{user.id}</td>
                           <td>{user.name}</td>
                           <td>{user.email}</td>
                           <td>{user.address.city}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
      </>
    )
  }
}
