import { useState } from "react"
import "./faq.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function FAQComponent({ data = [],heading }) {

    const [select, setSelect] = useState('')
    const handleSelect = (val) => {
        if (select == val) {
            setSelect('')
        }
        else {
            setSelect(val)
        }
    }
    return (
        <div className="faq-container">
            <div className="faq-heading" >Any questions about {heading} Contractors?</div>
            <div className="faq-sub-heading" >Expert Guidance on {heading} Installation and Maintenance</div>
            <div className="question-container" >
                {data.map((item) => {
                    return (
                        <div key={item.id} onClick={() => handleSelect(item.id)} className="question-sub-container" >
                            <div className="question-section" >
                                <div className="question" >{item.question}</div>
                                <div className="faq-arrow-icon" >
                                    {select === item.id ? <KeyboardArrowUpIcon style={{ color: '#000000', fontSize: 25 }} /> :
                                        <ExpandMoreIcon style={{ color: '#000000', fontSize: 25 }} />}
                                </div>
                            </div>
                            {item.id === select &&
                                <div className="answer" >
                                    {item.answer}
                                </div>  
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}