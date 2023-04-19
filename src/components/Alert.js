import React from "react";


export default function Alert(props) {
    const closeBtn = () => {
        props.closeBtn(null);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong> : {props.alert.msg}
            <button type="button" className="btn-close" onClick={closeBtn} data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}