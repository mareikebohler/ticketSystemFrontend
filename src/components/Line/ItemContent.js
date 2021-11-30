import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
    <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        •
    </Box>
);

const ItemContent = (props) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.data.activityCode} <b>{props.data.status}</b>
                </Typography>
            
                <Typography sx={{ fontSize: 11 }}>
                   Started at:  {props.data.activityStart.startDate} {bull} {props.data.activityStart.startTime}
                </Typography>

                <Typography sx={{ fontSize: 11 }} hidden={props.data.status !== 'completed'} component="div">
                 Completed at: {props.data.activityFinish.finishDate} {bull} {props.data.activityFinish.finishTime}
                </Typography>
                
                <Typography variant="body2" sx={{ mt: 1.5 }}>
                {props.data.customerMessage}
                </Typography>
            </CardContent>
        </Card>
    )
}


export default ItemContent