import { useContext } from "react";
import MessageContext from "./MessageContext";
import "./Home.css"
function Home() {
 const [message, setMessage] = useContext(MessageContext)

    return(
        <div className="main-container">
            <p>This is our homepage</p>
            <input type="text" placeholder={message || "Enter your text here"} onChange={(e)=>setMessage(e.target.value)}></input>
        </div>
    )
}

export default Home