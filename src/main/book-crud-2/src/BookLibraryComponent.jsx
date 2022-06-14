import axios from "axios";
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

function BookLibraryComponent() {
    const element = <FontAwesomeIcon icon={faTrash} />
    const element_2 = <FontAwesomeIcon icon={faPenToSquare} />

    const [libdata, setLibData] = useState([]);


    function getLibby() {
        axios.get("http://localhost:8080/api/v1/books/listbooks")
            .then(function (response) {
                console.log(response.data)
                setLibData(response.data)
            });
    }

    function changeBackground(e) {
        if(e.color != "red"){
            e.target.style.color = 'red';
        }else{
            e.target.style.color = 'black';
        }
    }

    function changeBackground_2(e) {
        e.target.style.color = 'black';
    }

    function removeBook(theNum){
        axios.delete(`http://localhost:8080/api/v1/books/deletebook/${theNum}`)
    }



    return(

            <div>
                <h1>Library View</h1>



                <button onClick={getLibby}>View Library</button>


                <div style={{textAlign:"center",height:"200px",margin:"50px",overflow:"scroll"}}>

                {libdata.map( d=>(

                   <div>
                       <hr/>
                       <p style={{color:"darkblue",fontSize:"20px",fontWeight:"bold"}}>{d.title} </p>


                       <div >
                           {/*{element_2}*/}

                           <div onMouseUp={()=>removeBook(d.ibn)} style={{width:"1%", marginLeft:"50%"}} onMouseOver={changeBackground} onMouseOut={changeBackground_2} onClick={removeBook}>
                               {element}
                           </div>

                           <hr/>
                       </div>


                   </div>


                ) )}
                </div>


            </div>

    )






}
export default BookLibraryComponent;