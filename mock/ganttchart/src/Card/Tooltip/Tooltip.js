import { useState } from 'react';
import './Tooltip.css'

const Tooltip = ({ children , content }) => {
    const [show, setShow] = useState(false);
    return (
        <div class="container">
            <div
            onMouseOver={()=>setShow(true)}
            onMouseLeave={()=>setShow(false)}
            >
                {children}
            </div>
            {show && <div className="right">{content}</div>}
        </div>
    )
}

export default Tooltip;