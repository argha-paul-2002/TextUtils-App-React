import React from "react";
import { useState } from "react";

export default function About(props) {

    // const [myStyle,setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
        borderRadius: '20px',
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'#585858':'white'
    }
    let mybStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'rgb(131 131 131)':'white'
    }
    let mytStyle = {
        color: props.mode === 'dark'?'black':'black',
        backgroundColor: props.mode === 'dark'?'#b7b7b7':'white'
    }

    
return (
<div className="container pb-3" style={myStyle}>
    <h1 className="my-3">About Us</h1>
    <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={mytStyle}>
            <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne" style={mybStyle}>
                    <strong>Analyze your text</strong>
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" >
                Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or copy text.
                </div>
            </div>
        </div>
        <div className="accordion-item" style={mytStyle}>
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mybStyle}>
                    <strong>Free to use</strong>
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                </div>
            </div>
        </div>
        <div className="accordion-item" style={mytStyle}>
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mybStyle}>
                    <strong>Browser Compatible</strong>
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                </div>
            </div>
        </div>
        {/* <div className="container">
            <button onClick={toggleStyle} type="button" className="my-3 btn btn-primary">{btntext}</button>
        </div> */}
    </div>
</div>
);
}