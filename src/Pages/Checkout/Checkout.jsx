import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'

const Checkout = () => {
  const service = useLoaderData();
  const {user}= useContext(AuthContext);

  const { title,price, _id, img } = service;
  const handleService = event =>{
    event.preventDefault();
    const name = event.target.name.value;
    const date = event.target.date.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const booking = {
        customerName: name,
        date,
        email,
        phone,
        img,
        price: price,
        service: title,
        service_id: _id,
        
    }
    console.log(booking);
    fetch('http://localhost:5000/bookings', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
       if(data.insertedId){
        Swal.fire({
            title: 'Are you sure to insert data?',
            text: "You will be able to insert this!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, insert it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'success!',
                'Your file has been inserted.',
                'success'
              )
            }
          })
       }
    })

  }
  return (
    <div>
      <h2 className="text-center font-extrabold text-xl ">Our Services: {title}</h2> 
        <form onSubmit={handleService}>
        <div className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              placeholder="Date"
              name="date"
              defaultValue={user?.date}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              defaultValue={user?.email}
              name="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">phone</span>
            </label>
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              className="input input-bordered"
            />
          </div>
 
            </div>
            <div className="form-control mt-6">
            <input className="btn btn-secondary" type="submit" value="Order Confirm" />
          </div>

        </div>
        </form>
     
   
    </div>
  );
};

export default Checkout;
