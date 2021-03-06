import './App.css';
import axios from "axios";
import {useState} from "react";

function AddBookComponent() {
    const [mydata, setMydata] = useState([]);
    const [newBookData,setNewBookData] = useState([]);




    function getTheDamData() {

        axios({
            method: 'get',
            url: 'http://localhost:8080/api/v1/books/listbooks',
        })
            .then(function (response) {
                console.log(response.data)
                setMydata(response.data)
            });
    }

    function saveTheBook(){

        const resp =  axios.post("http://localhost:8080/api/v1/books/savebook",{
                ibn:document.getElementById("ibn").value,title:document.getElementById("title").value,author:document.getElementById("author_input").value
            }
        )

    }





    return (
        <div className="App">

            <h1>Hello</h1>

            <h1 id="author" style={{textAlign: "center", color: "crimson"}}>Book Search</h1>

            {mydata.map(
                d =>(
                    <div>
                        <h1>{ d.title + " By: " + d.author}</h1>
                    </div>

                )
            )}


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
                <button  onClick={()=>{saveTheBook()}} > Add Book</button>

            </div>


        </div>
    );


}

export default AddBookComponent;
