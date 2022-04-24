//global variables
let optional_match = 1;


//like
function button_like_action() {
    optional_match += 1;
}
function button_like() {
    return (<button onClick={button_like_action}><img src='/icons/dark/like.png' /></button>)
}

//super
function button_super_action() {
    optional_match += 1;
}
function button_super() {
    return (<button onClick={button_super_action}><img src='/icons/dark/super.png'/></button>)
}

//no
function button_no_action() {
    optional_match += 1;
}
function button_no() {
    return (<button onClick={button_no_action}><img src='/icons/dark/no.png' /></button>)
}

//button bar
function button_bar() {
    return (
        <div id="button_bar_div">
            {button_like}{button_super}{button_no}
        </div>
    )
}

export default {
    button_bar,
    optional_match
}