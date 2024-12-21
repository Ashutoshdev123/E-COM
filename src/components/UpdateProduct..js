import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [company, setCompany] = React.useState("");    

    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{        
        getProductDetails();
    },[]); 
    
    const getProductDetails = async ()=>{
        //console.log(params);
        let result = await fetch(`http://localhost:5000/products/${params.id}`,{
            headers:{
                 authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        });
        result = await result.json();
       // console.log(result);

       setName(result.name);
       setPrice(result.price);
       setCategory(result.category);
       setCompany(result.company);

    } 

   const updateProduct = async () =>{
     let result = await fetch(`http://localhost:5000/updateProduct/${params.id}`,{
        method:'put',
        body: JSON.stringify({name,price,category,company}),
        headers: {
            'Content-Type':"application/json",
             authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
        }      

     });
     result = await result.json();
     if(result){
        navigate("/")
     }
     else{
        alert("Product has been not updated!");
     }
  
    }

    

    return (
        <div>
             <form className="form-container">
            <h2>Update Product</h2>
            <div>
                    <input type="text" placeholder="Enter Product Name" onChange={(e)=>setName(e.target.value)} value={name} />
                   
                </div>

                <div>
                    <input type="text" placeholder="Enter Product Price" onChange={(e)=>setPrice(e.target.value)} value={price} />
                    
                </div>
                <div>
                    <input type="text" placeholder="Enter Product Category" onChange={(e)=>setCategory(e.target.value)} value={category} />
                   
                </div>
                <div>
                    <input type="text" placeholder="Enter Product Company" onChange={(e)=>setCompany(e.target.value)} value={company} />
                   
                </div>

                <button type="button" onClick={updateProduct}>Update Product</button>
                </form>
        </div>
    )
}

export default UpdateProduct;

