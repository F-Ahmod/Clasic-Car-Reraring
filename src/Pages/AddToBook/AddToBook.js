import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const AddToBook = () => {
    
    const {id}= useParams()
    const [book,setBook]=useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${id}`)
        .then(res => res.json())
        .then(data=>setBook(data))
    },[])
    return (
        <div className="d-flex justify-content-center mt-5">
            <div class="card" style={{width: "18rem"}}>
  <img src={book.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{book.name}</h5>
    <h4 class="card-text">{book.description}</h4>
    <p class="card-text">{book.price}</p>
    <Link to="home" class="btn btn-primary">Go somewhere</Link>
  </div>
</div>
        </div>
    );
};

export default AddToBook;
