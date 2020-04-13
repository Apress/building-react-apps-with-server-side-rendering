import React from "react";
import axios from 'axios';
import "../style.css";

export default class extends React.Component {
    static async getInitialProps() {
        try {
            const res = await axios.get(this.getAPIURL(),
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

    static getAPIURL(){
        if(process.env.NODE_ENV === 'production'){
            return process.env.URL_TestAPI_Prod;
        }
        else{
            return process.env.URL_TestAPI_Dev;
        }
    }
    
    render() {
        return (
            <div>
                <h1>
                    Hello from {process.env.NODE_ENV} server
                </h1>
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