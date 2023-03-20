import './Card.css'

const Card = (data) => {
    //adding classes
    const classes = 'card ' + data.className;

    return(
        <div className={classes}>{data.children}</div>
    );
}

export default Card;