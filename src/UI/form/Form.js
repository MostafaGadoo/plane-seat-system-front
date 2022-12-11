const Form=(props)=> {
  return (
   <div className="margin-left: 138px padding-left: 125px padding-bottom: 10px margin-top: 58px width: 80% background-color: #FAF9F6 border: 3px solid #FAF9F6 border-radius: 10px box-shadow: 3px 3px 3px 3px gray">
     {props.children}
   </div>
  )
}

export default Form