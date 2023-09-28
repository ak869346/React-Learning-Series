import React , {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=> {
        // console.log("Uppercase is Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = ()=> {
        // console.log("Uppercase is Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = ()=> {
        // console.log("Uppercase is Clicked" + text);
        let newText = '';
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
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} character </p>
        <p>{0.008*text.split(" ").length} to read the word.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your text to preview it."}</p>
        </div>
        </>
    )
}
