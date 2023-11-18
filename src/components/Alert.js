import React from 'react'

function Alert(props) {

    const captilize = (word) => {

        const a = word.toLowerCase();
        return a.charAt(0).toUpperCase()+a.slice(1);
    }
  return (
    
      props.yashAlert &&  <div className={`alert alert-${props.yashAlert.type} alert-dismissible fade show`} role="alert">
            <strong>{captilize(props.yashAlert.type)}</strong> : {props.yashAlert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    
  )
}

export default Alert
