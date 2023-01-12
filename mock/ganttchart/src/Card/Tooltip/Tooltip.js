import { useState } from 'react';
import './Tooltip.css'
import Detail from '../../Detail/detail';

const Tooltip = ({ children , content , cardName}) => {
    const [show, setShow] = useState(false);
    const [showDetail, setShowDetail] = useState(false);

    return (
        <div class="container">
            <div
            onMouseOver={()=>setShow(true)}
            onMouseLeave={()=>setShow(false)}
            onClick={()=>setShowDetail(true)}
            >
                {children}
            </div>
            {show && <div className="right">{content}</div>}
            {showDetail &&
                <div className="detailMain">
                    <Detail cardName={cardName} cbSetShowDetail={setShowDetail} />
                </div>
            }
            {showDetail && <div className="overlay" onClick={()=>setShowDetail(false)}/>}
        </div>
    )
}

export default Tooltip;