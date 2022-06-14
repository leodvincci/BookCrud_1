import axios from "axios";
import {useEffect, useState} from "react";
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


    useEffect(
        ()=>{
            getLibby()
        },[]
    )


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

    function saveTheBook(){

        const resp =  axios.post("http://localhost:8080/api/v1/books/savebook",{
                ibn:document.getElementById("ibn").value,title:document.getElementById("title").value,author:document.getElementById("author_input").value
            }
        )

    }


    return(

            <div>
        <h1 style={{paddingBottom:"75px"}}>Libby</h1>

                <div style={{textAlign:"center",height:"400px",margin:"25px",overflow:"scroll"}}>

                {libdata.map( d=>(

                   <div style={{backgroundColor:"beige"}}>
                       <hr/>
                       <p style={{color:"darkblue",fontSize:"20px",fontWeight:"bold"}}>{d.title} </p>
                       <p style={{fontSize:"16px"}}>{d.author} </p>


                       <div >
                           {/*{element_2}*/}

                           <div onMouseUp={getLibby} onMouseDown={()=>removeBook(d.ibn)} style={{width:"1%", marginLeft:"50%"}} onMouseOver={changeBackground} onMouseOut={changeBackground_2}>
                               {element}
                           </div>

                           <hr/>
                       </div>


                   </div>


                ) )}
                </div>



                <div>
                    <form action="">

                        <div>

                            <input id={"ibn"} placeholder={"enter ibn"} type="text"/>
                        </div>

                        <input id={"title"} placeholder={"enter title"} type="text"/>

                        <div>
                            <input id={"author_input"} placeholder={"enter author"} type="text"/>
                        </div>

                    </form>
                </div>

                <div style={{textAlign: "center"}}>
                    <button  onMouseDown={()=>{saveTheBook()}} onMouseUp={getLibby} > Add Book</button>

                </div>



            </div>

    )






}
export default BookLibraryComponent;