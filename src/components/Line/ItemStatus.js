import React from 'react'
import { RunCircle, CheckCircle } from '@mui/icons-material';
import TimelineDot from '@mui/lab/TimelineDot';
const ItemStatus = (props) => {

    var status;
    var color = 'grey';
    console.log(props.status);
    switch (props.status) {
        case ('completed'):
            status = <CheckCircle/>;
            color= 'success'
            break;
        case ('active'):
                status = <RunCircle />;
                color='info'
            break;    
    }
    return (
       <>
       <TimelineDot color={color}>
        { status }
        </TimelineDot>
        </>
    )
}

export default ItemStatus
