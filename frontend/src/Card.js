//imports
import './Card.css';
import data from './data/data.json';
import button from './button.js'

//global data


const newdata = data.map((data) => {
    if (data.key == button.optional_match)
        return (
            <div id='card'>
                <header><h2><b>{data.name} {data.nickname} {data.surname}</b></h2></header>
                <p id="hobbies"><b>{data.hobbies[0]} {data.hobbies[1]} {data.hobbies[2]}</b></p>
                <img src={data.photo} id='avatar'/>
            <button.button_bar/>
        </div>
    )
})


function User_card() {
    return (
        <div id="card">
            {newdata}
            <button.button_bar />
        </div>
  );
}

export default User_card;
