import React,{useState} from 'react'
import products from './products.json'
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
export default function ConditionalDemo2() {
  const[selectedProduct,setSelectedProduct]=useState({});

  const [show,setShow]=useState(false);
  const handleClose=()=>{
    setShow(false);
  }
  const handleOpen=(product)=>{
    setSelectedProduct({...product})
    setShow(true);
  }

return (
      <>
      <h2 className="text-center">Product List</h2>
      <div className="container">
      <div className="row">
      {products.map((product) => {
      return (
        <div className="col-sm-3" key={product.id}>
          <div className="card">
            <img src={product.image} className="card-img-top" alt="aa" width='200' height='150' />
            <div className="card-body text-center">
              <h5 className="card-title">{product.category}</h5>
              <p className="card-text">{product.title}</p>
              <p className="card-text">{product.price}</p>
              <p className="card-text">{product.rating.rate}</p>
              <a href="#" className="btn btn-primary" onClick={()=>{handleOpen(product)}}>
                View Details
              </a>
              <button>
                <Link to={`/productDetails/${product.id}`}>
                  Details
                </Link>
              </button>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>
<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Modal heading</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <div className="card" key={selectedProduct.id}>
            <img src={selectedProduct.image} className="card-img-top" alt="aa" width='200' height='150' />
            <div className="card-body text-center">
              <h5 className="card-title">{selectedProduct.category}</h5>
              <p className="card-text">{selectedProduct.title}</p>
              <p className="card-text">{selectedProduct.price}</p>
  </div>
  </div>
  </Modal.Body>
  <Modal.Footer>
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>handleClose}>Close</button>
  </Modal.Footer>
</Modal>
      </>
    )
  }


// return (
//   <>      
//   <h2 className="text-center">Product List</h2>
//   <div className="container">
//    <div className="row">
//   {
//     products.map((product)=>{
//       return (
//       <div className="col-sm-3" key={product.id}>
//       <section width="150" height="200">
//    <div className="container py-5">
//     <div className="row justify-content-center">
//       <div className="col-md-8 col-lg-6 col-xl-4">        <div className="card text-black">
//           <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
//           <img src={product.image}
//             className="card-img-top" alt="Apple Computer" />
//           <div className="card-body">
//             <div className="text-center">
//               <h5 className="card-title">{product.title}</h5>
//                <p className="text-muted mb-4">{product.description}</p>
//              </div>
//              <div>
              
//               <div className="d-flex justify-content-between">
//                 <span>Available Pieces</span><span>{product.rating.count}</span>
//               </div>
//               <div className="d-flex justify-content-between">
//                 <span> Rating</span><span>{product.rating.rate}</span>
//               </div>
//             </div>
//             <div className="d-flex justify-content-between total font-weight-bold mt-4">
//               <span>Price</span><span>{product.price}</span>
//             </div>
//           </div>
//         </div>
//      </div>
//     </div>
//    </div>
//  </section>
//       </div>
//       )
//     })
//   }
//     </div>
//     </div>
//    </>
// )


  


//   {products.map((product)=>{
//         return (
// <section width='200px' height='150px'>
//   <div className="container py-5">
//     <div className="row justify-content-center">
//       <div className="col-md-8 col-lg-6 col-xl-4">
//         <div className="card text-black">
//           <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
//           <img src={product.image}
//             className="card-img-top" alt="Apple Computer" />
//           <div className="card-body">
//             <div className="text-center">
//               <h5 className="card-title">{product.title}</h5>
//               <p className="text-muted mb-4">{product.description}</p>
//             </div>
//             <div>
              
//               <div className="d-flex justify-content-between">
//                 <span>Available Pieces</span><span>{product.rating.count}</span>
//               </div>
//               <div className="d-flex justify-content-between">
//                 <span> Rating</span><span>{product.rating.rate}</span>
//               </div>
//             </div>
//             <div className="d-flex justify-content-between total font-weight-bold mt-4">
//               <span>Price</span><span>{product.price}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//         )
//     }
//   )
// }
// </div>
// )

//   return (
//     <>
//     {products.map((product)=>{
//       return (
//       <div className="card main">
//     <div className="card-header">
//       Featured
//     </div>
//     <div className="card-body">
//       <h5 className="card-title">Special title treatment</h5>
//       <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//       <a href="#" className="btn btn-primary">Open </a>
//   </div>
// </div>)
//     })
//   }
//     </>
//   )

