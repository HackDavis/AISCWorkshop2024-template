import axios from "axios"
import {useState, useEffect} from "react";

const IndexMSG =  () => {
    const [msg, setMsg] = useState();
    const backend_api = "http://localhost:8080"
    useEffect(() => {
        const fetchMsg = async()=> {
            try{
                const res = await axios.get(backend_api)
                console.log("RES", res);
                setMsg(res.data);
            } catch (error){
                console.log(error)
            }
        }
        fetchMsg();
    }, [])

    return(
        <div>
            <h1>dummy Data Dummy</h1>
            {msg ? (
                <div>
                    <h1>{msg.message}</h1>
                    {msg.people.map((person,  index) => (
                        <h1 key = {index}>{person}</h1>
                    ))}
                </div>
            ): (
                <h1>Loading...</h1>
            )}
        </div>
    )
}

export default IndexMSG;