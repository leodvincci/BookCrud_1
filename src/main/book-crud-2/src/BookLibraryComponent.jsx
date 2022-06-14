import axios from "axios";
import {useState} from "react";

function BookLibraryComponent() {

    const [libdata, setLibData] = useState([]);


    function getLibby() {
        axios.get("http://localhost:8080/api/v1/books/listbooks")
            .then(function (response) {
                console.log(response.data)
                setLibData(response.data)
            });
    }



    return(

            <div>
                <h1>Library View</h1>



                <button onClick={getLibby}>View Library</button>
                <div style={{textAlign:"center",height:"200px",width:"500px",margin:"50px",overflow:"scroll"}}>

                {libdata.map( d=>(
                    <h3>{d.title} </h3>
                ) )}
                </div>


            </div>

    )






}
export default BookLibraryComponent;