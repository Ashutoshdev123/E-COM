import React from 'react';

const AddProduct = () => {
    
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [error, setError] = React.useState(false);

   const addProduct = async () =>{
      if(!name || !price || !category || !company){
        setError(true);
        return false;
      }
     //console.log(name, price, category, company);
       const userId = JSON.parse(localStorage.getItem("user"))._id;
       let result = await fetch('http://localhost:5000/add-product',{
        method: 'post',
        body: JSON.stringify({name,price,category,company,userId}),
        headers: {"content-type" : "application/json",
             authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
       });

       result = await result.json();
       console.log(result);
    }

    

    return (
        <div>
             <form className="form-container">
            <h2>Add Product</h2>
            <div>
                    <input type="text" placeholder="Enter Product Name" onChange={(e)=>setName(e.target.value)} value={name} />
                   { error && !name && <span className='product-page-error'>Enter Product Name</span> }
                </div>

                <div>
                    <input type="text" placeholder="Enter Product Price" onChange={(e)=>setPrice(e.target.value)} value={price} />
                    { error && !price && <span className='product-page-error'>Enter Product Price</span> }
                </div>
                <div>
                    <input type="text" placeholder="Enter Product Category" onChange={(e)=>setCategory(e.target.value)} value={category} />
                    { error && !category &&  <span className='product-page-error'>Enter Product Category</span> }
                </div>
                <div>
                    <input type="text" placeholder="Enter Product Company" onChange={(e)=>setCompany(e.target.value)} value={company} />
                    { error && !company &&  <span className='product-page-error'>Enter Product Company</span> }
                </div>

                <button type="button" onClick={addProduct}>Add Product</button>
                </form>
        </div>
    )
}

export default AddProduct;

