import React from 'react';
import UserService from '../services/UserService';
//import UserServiceFetch from '../services/UserServiceFetch';

class UserComponent extends React.Component{

    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data })
        });
    }
    /*componentDidMount()
    {
        UserServiceFetch.getUsers().then((res)=>{
               this.setState({users:res});
        });
    }*/
    render(){
      return(  <div>
            <h1 className='text-center' style={{backgroundColor: "lightgreen"}}> USERS LIST</h1>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <td style={{backgroundColor: "pink"}}>USER ID</td>
                        <td style={{backgroundColor: "pink"}}>USER FIRSTNAME</td>
                        <td style={{backgroundColor: "pink"}}>USER LASTNAME</td>
                        <td style={{backgroundColor: "pink"}}>USER EMAIL</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map(
                            user=>
                            <tr key = {user.id}>
                                <><td style={{backgroundColor: "lightyellow"}}> {user.id} </td><td style={{backgroundColor: "lightyellow"}}> {user.firstName}</td><td style={{backgroundColor: "lightyellow"}}>{user.lastName}</td><td style={{backgroundColor: "lightyellow"}}>{user.email}</td></>

                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
      )
    }
}

export default UserComponent