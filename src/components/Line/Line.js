import Timeline from '@mui/lab/Timeline';
import LineItem from './LineItem';
import LineHeader from './LineHeader';
const Line = (props) => {
  return (
    <div className='ticketTimeline'>
      <LineHeader 
      woNum={props.data.woNum} 
      woStatusText={props.data.woStatusText}
      cancelable={props.data.cancelable}
      reopenable={props.data.reopenable}
      creationDate={props.data.creationDate}
      />
      <Timeline>
         <LineItem data={props.data.activities} />
      </Timeline>
    </div>
  );
}

export default Line
