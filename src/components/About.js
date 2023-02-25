import React, {useState} from "react";

export default function About() {

    const [toggolMode, setToggolMode] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [toggolModeBtn, setToggolModeBtn] = useState("Enable Dark Mode")
    
    const toggolOnClick = () => {
        if (toggolMode.color === 'black') {
            setToggolMode({
                color: 'white',
                backgroundColor: 'black'
            })
            setToggolModeBtn("Enable Light Mode");
            setSwitchText("Enable Light Mode");
            setSwitchBtn(true);
        }
        else {
            setToggolMode({
                color: 'black',
                backgroundColor: 'white'
            })
            setToggolModeBtn("Enable Dark Mode");
            setSwitchText("Enable Dark Mode");
            setSwitchBtn(false);
        }
    }

    const [switchText, setSwitchText] = useState("Enable Dark Mode")
    const [switchBtn, setSwitchBtn] = useState(false)

    const switchOnChange = () => {
        if (toggolMode.color === 'black') {
            setToggolMode({
                color: 'white',
                backgroundColor: 'black'
            })
            setToggolModeBtn("Enable Light Mode");
            setSwitchText("Enable Light Mode"); 
            setSwitchBtn(true);
        }
        else {
            setToggolMode({
                color: 'black',
                backgroundColor: 'white'
            })
            setToggolModeBtn("Enable Dark Mode");
            setSwitchText("Enable Dark Mode");
            setSwitchBtn(false);
        }
    }


    return (
        <div className="container mt-3" style={toggolMode}>
            <div className="row">
                <div className="col-md-12">
                    <h1>About Us</h1>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item" style={toggolMode}>
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" style={toggolMode} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item" style={toggolMode}>
                            <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" style={toggolMode} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item" style={toggolMode}>
                            <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" style={toggolMode} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-info text-white mt-3 mb-3" onClick={toggolOnClick}>{toggolModeBtn}</button>
                    <div className="form-check form-switch mb-3">
                        <input className="form-check-input" type="checkbox" role="switch" checked={switchBtn} id="flexSwitchCheckDefault" onChange={switchOnChange} />
                        <label className="form-check-label">{switchText}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}