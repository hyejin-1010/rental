import React from 'react';
import ReactDOM from 'react-dom'

import SendEmail from './SendEmail.jsx'

class App extends React.Component {
    setEmail(email){
        fetch('/email', {
            method: 'POST',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: 'email='+email
        })
        .then((response) => { return response.json(); })
        .then((json) => { this.setState({ user: json.user });});
    }

    render(){
        return (
            <div>
                <h1> Email </h1>
                <SendEmail placeholder="Enter your email" onSubmit={this.setEmail} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)