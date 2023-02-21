import React, {useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here"); 

    const upperOnClick = () => {
        setText(text.toUpperCase());
    }

    const lowerOnClick = () => {
        setText(text.toLowerCase());
    }

    const handleonChange = (event) => {
        setText(event.target.value);
    }

    let wordLength;

    if (text.length <= 0) {
        wordLength = 0;
    }
    else{
        wordLength = text.split(" ").length;
    }

    return(
    <>
        <div className="mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div class="mb-3">
                            <h3>{props.heading}</h3>
                            <textarea name="title" value={text} onChange={handleonChange} className="form-control" rows="10"></textarea>
                        </div>
                        <button className="btn btn-success" onClick={upperOnClick}>Change Upper Case</button>
                        <button className="btn btn-danger" onClick={lowerOnClick}>Change Lower Case</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md 12">
                    <h3>Your Text Summary</h3>
                    <p>{wordLength} words, {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes Need to read.</p>

                    <h3>Preview</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    </>
    )
}