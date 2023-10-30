import React from 'react'

export default function Alert(props) {
  return (
    //whenever we use this type of syntax firstly the code before && will be executed and if it is false or null the code after the && will not be executed and is the fist one is true the secone code will also be executed this happens as all the JSX will be converted to javaScript calls!
    
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}  role="alert">
    <strong>{props.alert.type}</strong>: {props.alert.mesg}
      
      </div>
    
  )
}
