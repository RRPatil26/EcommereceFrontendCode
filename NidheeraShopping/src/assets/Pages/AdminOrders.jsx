import axios from "axios";
import { useEffect,useState } from "react";
import { Link, useNavigate  } from "react-router-dom";

function AdminOrders(){

 const [orders,setOrders]
 = useState([]);

 const loadOrders=()=>{

  axios.get(
   "http://localhost:4444/orders/admin/orders"
  )
  .then((response)=>{

   setOrders(response.data);

  });

 };

 useEffect(()=>{

  loadOrders();

 },[]);



 const updateStatus=
 async(id,status)=>{

  await axios.put(

   `http://localhost:4444/orders/admin/orders/${id}/${status}`

  );

  loadOrders();

 };
 const downloadInvoice =
async(orderId)=>{

 const response =
 await axios.get(

  `http://localhost:4444/orders/invoice/${orderId}`,

  {
   responseType:"blob"
  }

 );

 const url =
 window.URL.createObjectURL(
  new Blob([response.data])
 );

 const link =
 document.createElement("a");

 link.href = url;

 link.setAttribute(
  "download",
  `invoice_${orderId}.pdf`
 );

 document.body.appendChild(
  link
 );

 link.click();

};

 return(

  <div className="container mt-4">

   <h2>
    All Orders
   </h2>

   <table
    className="table table-bordered"
   >

    <thead>

     <tr>

      <th>Order Id</th>
      <th>Amount</th>
      <th>Status</th>
      <th>Action</th>
      <th>Invoice</th>

     </tr>

    </thead>

    <tbody>

    {
      orders.map((o)=>(

      <tr key={o.orderId}>

       <td>{o.orderId}</td>

       <td>
        ₹{o.totalAmount}
       </td>

       <td>
        {o.orderStatus}
       </td>

       <td>

        <button
         className="btn btn-warning btn-sm me-2"
         onClick={()=>
          updateStatus(
            o.orderId,
            "INPROCESS"
          )
         }
        >
         In Process
        </button>

        <button
         className="btn btn-success btn-sm"
         onClick={()=>
          updateStatus(
            o.orderId,
            "DELIVERED"
          )
         }
        >
         Delivered
        </button>


        
       </td>
       
        <td>

        {o.orderStatus ===
 "DELIVERED" && (

<button
 className="btn btn-primary btn-sm"
 onClick={() =>
  downloadInvoice(
   o.orderId
  )
 }
>
 Download PDF
</button>

)}
</td>

      </tr>

      ))
    }

    </tbody>

   </table>
   <Link
                                to="/"
                                className="ms-2"
                            >
                               Go Back to Home
                            </Link>

  </div>

 );

}

export default AdminOrders;