import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {message: ''};
        this.state.currentDateAndTime = new Date().toLocaleString();
    }

    componentDidMount() {
        const url = 'http://stakater-backend/sayhello?name=Stakater';
        axios.get(url).then(response => {
            console.log('response : ');
            console.log(response);
            this.setState({message: response.data});
        }).catch(error => {
            console.log('error : ');
            console.log(error);
        });
    }

    render() {
        return (
            <div className="App">
                {this.state.currentDateAndTime} + {this.state.message}
            </div>
        );
    }
}

export default App;
