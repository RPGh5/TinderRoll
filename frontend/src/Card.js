//imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import './Card.css';
import { data } from './data/data.js';

//global data
class UserCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { optional_match: 0, };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let res = this.state.optional_match + 1;
        this.setState = { optional_match: res };
    }
    render() {
        return (
            data.map((data) => {
                if (data.key == this.state.optional_match) {
                    return (
                        <div id='card'>
                            <header><h2><b>{data.name} {data.nickname} {data.surname}</b></h2></header>
                            <p id="hobbies"><b>{data.hobbies[0]} {data.hobbies[1]} {data.hobbies[2]}</b></p>
                            <img src={data.photo} id='avatar' /><br />
                            <button onClick={this.handleClick} id="like" > <img src='/icons/dark/like.png' id="btn_photo" /></button>
                            <button onClick={this.handleClick} id="super" ><img src='/icons/dark/super.png' id="btn_photo" /></button>
                            <button onClick={this.handleClick} id="no" > <img src='/icons/dark/no.png' id="btn_photo" /></button>
                        </div>
                    )
                }
            })
        )
    }
}

export default UserCard;
