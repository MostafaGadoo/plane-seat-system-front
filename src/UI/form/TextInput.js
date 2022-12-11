const TextInput = (props) => {
  return (
    <div class="flex flex-col justify-center gap-2">
      <label className="padding-top: 50px padding-bottom: 58px margin-left: -30px font-size: 80px font-family: 'Abril Fatface', cursive; color: darkgreen;">{props.label}</label>
      <input
        className=" width: 250px margin-left: -131px margin-right: 103px padding-left: 44px margin-top: 30px align-self: center"
        type={props.type}
        {...props.register(props.name, props.validation)}
      />
    </div>
  );
};

export default TextInput;
