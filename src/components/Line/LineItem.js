import React from 'react'
import ItemContent from './ItemContent';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';

import ItemStatus from './ItemStatus';


const LineItem = (props) => {
    return (
        <div>
            {props.data.map((item, i) => (
                < TimelineItem  key={i}>
                    <TimelineSeparator>
                         <ItemStatus status={item.status}/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <ItemContent data={item}/>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </div >
    )
}

export default LineItem


