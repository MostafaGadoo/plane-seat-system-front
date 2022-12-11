import Card from '../../UI/card/Card';
import CardBody from '../../UI/card/CardBody';
import CardHeader from '../../UI/card/CardHeader';
import CardActions from '../../UI/card/CardActions';
import { useNavigate } from 'react-router-dom';


const ViewAllFlights = (props) => {

  const navigate = useNavigate();
  
  const editFlight = async () => {
    //navigate(`/Viewpropertiesup/${props.product._id}`);
    navigate(`/editflight/${props.flights._id}`);
}; 

  return (
    <Card>
      <CardHeader>
      <h5 className='font-bold w-18'>Flight Number: {props.flights.Plane_No} </h5>
      </CardHeader>
      <CardHeader>
      <h5 className='font-bold w-18'>Date: {props.flights.Date} </h5>
      </CardHeader>
      <CardBody>
      <h5>At: {props.flights.Departure_Time} </h5>
      </CardBody>
      <CardBody>
      <h5>From: {props.flights.Departure_loc} </h5>
      </CardBody>
      <CardBody>
      <h5>To: {props.flights.Arrival_loc} </h5>
      </CardBody>
      <CardActions>
        <button
          class ="cardButton"
          onClick={editFlight}
        >
          Edit
        </button>
      </CardActions>
    </Card>

    
  );
  
};
export default ViewAllFlights;
