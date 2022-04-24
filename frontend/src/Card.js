//imports
import './Card.css';
import data from './data/data.json';
//import ButtonBar from './button.js'

//global data
class UserCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { optional_match: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState = { optional_match: optionalmatch + 1 };
    }
    render() {
        newdata = data.map((data) => {
            if (data.key == optional_match) {
                return (
                    <div id='card'>
                        <header><h2><b>{data.name} {data.nickname} {data.surname}</b></h2></header>
                        <p id="hobbies"><b>{data.hobbies[0]} {data.hobbies[1]} {data.hobbies[2]}</b></p>
                        <img src={data.photo} id='avatar' /><br />
                        <button onClick={handleClick} id="like" > <img src='/icons/dark/like.png' id="btn_photo" /></button>
                        <button onClick={handleClick} id="super" ><img src='/icons/dark/super.png' id="btn_photo" /></button>
                        <button onClick={handleClick} id="no" > <img src='/icons/dark/no.png' id="btn_photo" /></button>
                    </div>
                )
            }
        })
    }
}





export default UserCard;
