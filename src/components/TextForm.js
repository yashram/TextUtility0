import React, {useState} from 'react'

export default function TextForm(props) {
  const onClickHandle0 = ()=> {
    
    //console.log(text)
    let newText = text.toUpperCase();
    setText(newText);
    props.yashShowAlert("text changed to upper case", "success");
  };

  const onClickHandle1 = ()=> {
    
    //console.log(text)
    let newText = text.toLowerCase();
    setText(newText);
    props.yashShowAlert("text changed to lower case", "success");
  };

  const onClickHandle2 = ()=> {
    
    //console.log(text)
   let newText = document.getElementById("myText");
   newText.select();
    navigator.clipboard.writeText(newText.value);
    props.yashShowAlert("text copied to clipboard", "success");
  };

  const onClickHandle3 = ()=> {
    
    //console.log(text)
    let newText = "";
    setText(newText);
    props.yashShowAlert("text is cleared", "success");
  };

    const onchangeHandle = (event)=> {

      //console.log("text chnaged")
      setText(event.target.value);

    }

    const onClickHandle4 = () => {

     // console.log("extra space")
      
      let newText = text.split(/[ ]+/);

      setText(newText.join(" "));

      props.yashShowAlert("extra space deleted", "success");
    }


  const [text, setText] = useState("enter the text");
  return (
    <>
<div className="container" style={{ color: props.yashmode === 'dark' ? 'white':'dark' }}>
      <h1 > {props.headingYash}</h1>
              <div className="mb-3">
                 <textarea className="form-control" id="myText" onChange = {onchangeHandle} rows = "5" value={text} style={{ backgroundColor: props.yashmode === 'dark' ? '#1372a75c':'White', color: props.yashmode === 'dark' ? 'white':'dark' }}></textarea>
              </div>
              <button className= "btn btn-primary mx-1" onClick= {onClickHandle0}>convertToUpperCase</button>
              <button className= "btn btn-primary mx-1" onClick= {onClickHandle1}>convertToLowerCase</button>
              <button className= "btn btn-primary mx-1" onClick= {onClickHandle2}>copy</button>
              <button className= "btn btn-primary mx-1" onClick= {onClickHandle3}>clear</button>
              <button className= "btn btn-primary mx-1" onClick= {onClickHandle4}>clearExtraSpace</button>
</div>

<div className="container my-3" style={{ color: props.yashmode === 'dark' ? 'white':'dark' }}>
      <h1>Your text Summary</h1>
      <p>{text.split(" ").filter(function(num){ return num !==""}).length} words and {text.length} letter</p>
      <p> {0.008 *text.split(" ").filter(function(num){ return num !==""}).length}  minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text:"Enter text to preview"}</p>

</div>
</>
  )
}
