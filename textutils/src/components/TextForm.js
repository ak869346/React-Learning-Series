import React , {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=> {
        // console.log("Uppercase is Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=> {
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text Here");
    // text = "new Text" Wrong way to change State;
    // setText("New Text"); correct way to set Text
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}
