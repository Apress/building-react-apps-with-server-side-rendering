import React from "react";
import axios from 'axios';
import "../style.css";

export default class extends React.Component {
    static async getInitialProps() {
        try {
            const res = await axios.get('http://localhost:3000/api/testapi',
                                        { 
                                            data: { 
                                                query: `{
                                                    name,
                                                    address
                                                }` 
                                            } 
                                        });
            return { data: res.data, error: null }
        } catch (e) {
            return { data: '', error: e }
        }
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <table>
                    {Object.keys(this.props.data).map((key, index) => (
                        <tr key={index}>
                            <td>{key}:</td>
                            <td>{this.props.data[key]}</td>
                        </tr>
                    ))}
                </table>
            </div>
        );
    }
}