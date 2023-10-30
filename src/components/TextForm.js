import React,{useState} from 'react'      //rfc react function based component
                                        //importing usestate from react check the documentation

export default function TextForm(props) {

const handleUpClick =()=>{
  //console.log("uppercase was clicked"+text);
  let newText= text.toUpperCase();
  setText(newText);  // changing the value of the text and storing it in the setText
  props.showAlert("converted to uppcase","success")
}

const handleUpClick2 =()=>{
  //console.log("lowercase was clicked"+text);
  let newText= text.toLowerCase();
  setText(newText);  // changing the value of the text and storing it in the setText
  props.showAlert("converted to lowercase","success")
}


const handleOnChange =(event)=>{    //we use this whenever we have to take input and texts
  //console.log("on change");
  setText(event.target.value);   //we are setting the new value with the help of setText to text 
}


  const [text, setText] = useState(''); //text is a variable which will contain the value inside 
                                                    //usetext and whenever we will update the text we will do it 
                                                     //with the help of setText function
  return (
    <>
    <div>
      <h1>{props.heading} </h1>
<div className="mb-3">
 
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} id="mybox" rows="3" >
 
    </textarea>                                                                                       {/*the 
  
                                                                                   value of the textarea will the 
                                                                                same as the value of the {text}}*/}
</div>
<button className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button> {/* using the function 
                                                                                         inside onClick */}

<button className="btn btn-primary" onClick={handleUpClick2}>convert to lowercase</button> {/* using the function 
                                                                                            inside onClick */}
</div>
<div className="container my-2"></div> {/*my-2 is a bootstrap class which provides the spacing in y coordinate */}
<h1>your text summary</h1>
<p>{text.split(" ").length} words,{text.length} characters</p>
{/*split method gives us an array with the words which have been splitted by a space "" */}

</>
  )
}
// onchange and onclick are events 
// on change event is important because it enables us to type otherwise we wouldn't be able to change the text
