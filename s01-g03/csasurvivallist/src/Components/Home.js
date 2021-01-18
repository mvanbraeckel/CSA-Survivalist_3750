import React, { Component } from 'react';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            login: '',
            password: '',
        }
    }

render(){

    return(
            <h1>
                Hello world
            </h1>
    )

}


}

export default Home;