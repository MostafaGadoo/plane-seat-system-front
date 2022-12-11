import ViewAllFlights from './ViewAllFlights';

const FlightList = (props) => {
  return (
    <div className="grid grid-row-2 gap-5 justify-center items-center">
      {props.flights.map((p) => (
        <ViewAllFlights flights={p} key={p._id} />
      ))}
    </div>
  );
};

export default FlightList;