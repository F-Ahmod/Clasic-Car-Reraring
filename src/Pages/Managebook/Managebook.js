import React,{useEffect,useState} from 'react';
// import { Link } from 'react-router-dom';


const Managebook = () => {
    const [manageBook,setManageBook]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data=>setManageBook(data))

    },[]);
    const handelDelete= id=>{
      const  url=(`http://localhost:5000/services/${id}`)
      fetch(url)
      .then(res => res.json())
      .then(data =>{
          console.log(data)
          const remaing=manageBook.filter(pd => pd._id !==id)
          setManageBook(remaing)

      })
    }
    return (
        <div>
            <h2>Manage book</h2>

            
            {
                manageBook.map(pd=><div>
                    <div className="d-flex justify-content-center mt-5">
    <div class="card" style={{width: "18rem"}}>
  <img src={pd.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{pd.name}</h5>
    <h4 class="card-text">{pd.description}</h4>
    <p class="card-text">{pd.price}</p>
    {/* <Link to="home" class="btn btn-primary">Go somewhere</Link> */}
    <button onClick={()=>handelDelete(pd._id)}>delete</button>
  </div>
</div>
        </div>
                    
                    
                </div>)
             
                
            
        
                
            }
            
        </div>
    );
};

export default Managebook;