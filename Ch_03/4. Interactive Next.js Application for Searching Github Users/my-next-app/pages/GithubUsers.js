import React from 'react';
import axios from 'axios';
import '../style.css';

export default class extends React.Component {
    static async getInitialProps() {
        try {
            const res = await axios.get('https://api.github.com/users');
            return { data: res.data }
        } catch (e) {
            return { error: e }
        }
    }

    constructor(props) {
        super(props);
        this.state = { data: props.data, error: props.error };
    }

    GetUser = async () => {
        try {
            const res = await axios.get('https://api.github.com/users/' + document.getElementById('inputTextbox').value);
            this.setState({
                data: [res.data],
                error: null
            });
        } catch (e) {
            this.setState({
                data: null,
                error: e
            });
        }
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    <h1>Github Users</h1>
                    <br />
                    <div className='center'>
                        <input id='inputTextbox' type='text'></input>
                        <button type='button'
                            onClick={this.GetUser}>
                            Get User
                            </button>
                    </div>
                    <br />
                    <p className="error">Error: {this.state.error.message}</p>
                </div>
            );
        }
        else {
            return (
                <div>
                    <h1>Github Users</h1>
                    <br />
                    <div className='center'>
                        <input id='inputTextbox' type='text'></input>
                        <button type='button'
                            onClick={this.GetUser}>
                            Get User
                        </button>
                    </div>
                    <br />
                    {this.state.data.map((item, index) => (
                        <div key={index} className='UserBlock'>
                            <img src={item.avatar_url}
                                alt='User Icon'>
                            </img>

                            <div className='UserDetails'>
                                <p>Username: {item.login}</p>
                                <p>ID: {item.id}</p>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }
    }
}