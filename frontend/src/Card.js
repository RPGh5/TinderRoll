//imports
import React, { useState } from 'react';
import './Card.css';
import { data } from './data/data.js';


let match = [];

class UserCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            optional_match: 0,
            src_path: "/icons/dark/",
        };
    }

    //like
    handleClickLike = () => {
        if (this.state.optional_match < 2) {
            const rand = 1 + Math.random() * (100 - 1);
            if (rand > 80) {
                match[this.state.optional_match] = true;
                localStorage.setItem(this.state.optional_match, match[this.state.optional_match]);
                alert('Match!');
            }
            let res = this.state.optional_match + 1;
            this.setState({ optional_match: res });
        } else {
            const rand = 1 + Math.random() * (100 - 1);
            if (rand > 80) {
                match[this.state.optional_match] = true;
                localStorage.setItem(this.state.optional_match, match[this.state.optional_match]);
                alert('Match!');
            }
            this.setState({ optional_match: 0 });
        }
    }

    //super
    handleClickSuper = () => {
        alert("You need to be a PREMIUM user!");
    }

    //no
    handleClickNo = () => {
        if (this.state.optional_match < 2) {
            let res = this.state.optional_match + 1;
            this.setState({ optional_match: res });
        } else {
            this.setState({ optional_match: 0 });
        }
        match[this.state.optional_match] = false;
        localStorage.setItem(this.state.optional_match, match[this.state.optional_match]);
    }


    //theme
    handleChange = () => {
        if (this.state.src_path == '/icons/dark/') {
            this.setState({ src_path: '/icons/bright/' });
            document.body.classList.toggle('dark');
            document.getElementById('card').classList.toggle('dark');
        } else {
            this.setState({ src_path: '/icons/dark/' })
        }
    }


    //render
    render() {
        return (
            data.map((data) => {
                if (data.key == this.state.optional_match) {
                    return (
                        <div id='card'>
                            <header><h2><b>{data.name} {data.nickname} {data.surname}</b></h2></header>
                            <p id="hobbies"><b>{data.hobbies[0]} {data.hobbies[1]} {data.hobbies[2]}</b></p>
                            <img src={data.photo} id='avatar' /><br />
                            <button onClick={() => this.handleClickLike()} id="like" > <img src={this.state.src_path + 'like.png'} id="btn_photo" /></button>
                            <button onClick={() => this.handleClickSuper()} id="super" ><img src={this.state.src_path + 'super.png'} id="btn_photo" /></button>
                            <button onClick={() => this.handleClickNo()} id="no" > <img src={this.state.src_path + 'no.png'} id="btn_photo" /></button><br />
                            <button id='switch' onClick={() => this.handleChange()}><img src='/icons/theme_icon.png' id="btn_photo" /></button>
                        </div>
                    )
                }
            })
        )
    }
}

export default UserCard;
