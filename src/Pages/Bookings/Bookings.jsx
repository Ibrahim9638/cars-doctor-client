import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingTable from "./BookingTable";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = id =>{
    const proceed = confirm ('Are You Sure You Want to Delete');
    if(proceed){
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: "DELETE"
        })
        .then(res=> res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Data Delete Successfully');
                const remaining = bookings.filter(booking => booking._id !== id);
                setBookings(remaining);
            }
        })
    }
  }

 const handleBookingConfirm = id =>{
    fetch(`http://localhost:5000/bookings/${id}`, {
        method: "PATCH",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'confirm'})
    })
    .then(res =>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount > 0){
            // update status
            const remaining = bookings.filter(booking => booking._id !== id);
            const update = bookings.find(booking=> booking._id === id);
            update.status = 'confirm';
            const newBooking = [update, ...remaining];
            setBookings(newBooking);
        }
    })
 }

  return (
    <div>
      <h2>All The Booking Members: {bookings.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
              </th>
              <th>Picture</th>
              <th>Name</th>
              <th>Service</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingTable 
              key={booking._id} 
              booking={booking}
              handleDelete = {handleDelete}
              handleBookingConfirm = {handleBookingConfirm}
              >
              </BookingTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
