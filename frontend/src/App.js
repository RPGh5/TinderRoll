import './App.css';
import Card from 'react-bootstrap/Card';
import data from './data/data.json';

function mode_checker() {
    
}
function mode() {

}

function button_like() {
    return (<button></button>)
}
function button_super(){
    return (<button></button>)
}
function button_no(){
    return (<button></button>)
}

function button_bar(){
    return (
        <div id="button_bar_div">
            {button_like}{button_super}{button_no}
        </div>
    )
}
const newdata = data.map((data) => {
    let phto_name = data.photo;
    return (
        <Card key={data.id}>
            <Card.Body>
                <Card.Title>{data.name} {data.nickname} {data.surname}</Card.Title>
                <Card.Text>{data.hobbies[0]} {data.hobbies[1]} {data.hobbies[2]}</Card.Text>
                <img src={data.photo} />
                {button_bar}
            </Card.Body>
        </Card>
    )
})


function App() {
    return (<div>{newdata}</div>
  );
}

export default App;
