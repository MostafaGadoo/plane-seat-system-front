import ViewAllTickets from './ViewAllTickets';

const TicketsList = (props) => {
  return (
    <div className="grid grid-row-2 gap-5 justify-center items-center">
      {props.products.map((p) => (
        <ViewAllTickets product={p} key={p._id} />
      ))}
    </div>
  );
};

export default TicketsList;
