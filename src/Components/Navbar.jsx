import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav">
        <div className="logo">
            <img src="https://img.freepik.com/free-vector/shopping-cart-logo-shopping-basket-design-vector-illustration_460848-8933.jpg?size=626&ext=jpg&ga=GA1.2.2121943271.1690438396&semt=ais" alt="" />

        </div>
        <div className="option">
             <div className="wishlist">
                <Link><h3>WishList</h3></Link>
             </div>
             <div className="search">
                <input type="text" placeholder='search for product, brands,..' />
                <button className='btn btn-info py-0'>submit</button>

             </div>
             <div className="profile">
               <img src="https://cdn3.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="" />
               <div className="sub">

                <Link to="/viewuser" id="l1">View profile</Link>
                <Link to="/edituser" id="l1">Edit profile</Link>
                <Link to="" id="l2">Check Order</Link>
                <Link to="" id="l3">Update Address</Link>
                <Link to="" id="l4">Logout</Link>
               </div>
             </div>
             <div className="hambarger">
              <img src="" alt="" />
             </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
