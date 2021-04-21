import React from 'react';

//const cardTitle = 'MY SON TIHAMI IS A GIFT FOR ME'; 
function Routine(props){
    return(
        <div>
            <div>
                <h4 className="cardTitleStyle">{props.cardTitle}</h4>
                <p className="cardBodyStyle" >{props.cardContent}</p>
            </div>
            
            
        </div>
    );
}

export default Routine;