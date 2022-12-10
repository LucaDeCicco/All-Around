import React from 'react';
import './lucaStyle.css';
import './facebook.css';
import './booking.css'

const Luca = () => {
    // return (
    //     <div className="Mare">
    //         <div className="centered">
    //             <div className="rotating">luca</div>
    //         </div>
    //     </div>
    // );



    // return (
    //     <div className="App">
    //         <div className="header">
    //             <div className="logo">Facebook</div>
    //             <div className="search-bar">
    //                 <input type="text" placeholder="Search" />
    //             </div>
    //             <div className="user-menu">
    //                 <button>Home</button>
    //                 <button>Profile</button>
    //                 <button>Messages</button>
    //                 <button>Notifications</button>
    //             </div>
    //         </div>
    //         <div className="body">
    //             <div className="sidebar">
    //                 <h3>Trending</h3>
    //                 <ul>
    //                     <li>#reactjs</li>
    //                     <li>#javascript</li>
    //                     <li>#webdevelopment</li>
    //                 </ul>
    //             </div>
    //             <div className="content">
    //                 <h2>Welcome to Facebook</h2>
    //                 <p>This is an example of a simple Facebook-like page created with ReactJS.</p>
    //             </div>
    //         </div>
    //     </div>
    // );


    return (
        <div className="booking-page">
            <h1>Book Your Stay</h1>
            <form>
                <label>
                    Check-in Date:
                    <input type="date" />
                </label>
                <label>
                    Check-out Date:
                    <input type="date" />
                </label>
                <label>
                    Number of Guests:
                    <input type="number" />
                </label>
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default Luca;
