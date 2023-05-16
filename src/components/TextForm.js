import React, { useState} from 'react'

function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Upper Case", "Sucess");

    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lower Case ", "Success");

    }
    const [text, setText] = useState('');
    const [index ,setIndex]=useState('0')

    const handleOnChange = (event) => {
        
        setText(event.target.value)
        setIndex('1')
    }
    
    const handleToclick = () => {
        const newText = text.toUpperCase().split(" ").map(function (word) {
            return word.charAt(0).toLowerCase() + word.slice(1);
        })
            .join(" ");
        
        setText(newText)
        props.showAlert("Converted To tOGGLE Case Case ", "Sucess");

    };
    const handleTiclick = () => {
        var sentence = text.toLowerCase().split(" ");
        for (var i = 0; i < sentence.length; i++) {
            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
        setText(sentence.join(" "));
        props.showAlert("Converted To Sentence Case ", "Sucess");

    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text coppied ", "Sucess");


    }
    const handleExtraSpace = () => {
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "))
      props.showAlert("Extra spaces removed ", "Sucess");


    }
    const handleclear = () => {
        setText("");
        props.showAlert("Text Cleared", "Sucess")
        setIndex('0')

    }
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                
            </div>
            <div className='flex-wrap flex'>
            <button className="btn btn-primary ms-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary xs-ms-3 ms-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary sm-ms-3 ms-2 my-2" onClick={handleclear}>Reset</button>
            <button className="btn btn-primary md-ms-3 ms-2 my-2" onClick={handleToclick}>tOGGLE CASE</button>
            <button className="btn btn-primary lg-ms-3 ms-2 my-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary xl-ms-3 ms-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
            

            <div className='container my-3'>
                    <h2>Your text summary</h2>
    {index==0 && <p> 0 Word & 0 character </p>}
               { index==1 && <p>{text.split(" ").length} words and {text.length} character</p>} 
                <p>{0.008 * text.split(" ").length} Minutes</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter your something to preview it here" }</p>
            </div>
            </div>
        </>
    )
}

export default TextForm
