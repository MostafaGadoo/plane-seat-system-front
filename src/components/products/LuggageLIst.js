import ViewAllLuaggageReport from './ViewAllLuaggageReport';

const LuggageLIst = (props) => {
  return (
    <div className="grid grid-row-2 gap-5 justify-center items-center">
      {props.luggage.map((p) => (
        <ViewAllLuaggageReport luggage={p} key={p._id} />
      ))}
    </div>
  );
};

export default LuggageLIst;