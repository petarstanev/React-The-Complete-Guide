import { useState } from "react"

import Output from "./Output";

const Greetings = ()=>{
    const [changedText, setChangedText] = useState(false);
    const changeTextHandler = () => {
        setChangedText(true);
    }

    return <div>
        <h2>Hello World</h2>
        {!changedText && <Output>Glad to see you</Output>}
        {changedText && <Output>Changed!</Output>}
        <button onClick={changeTextHandler}>Change text</button>
    </div>
}

export default Greetings