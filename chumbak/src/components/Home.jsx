import React from 'react';
import '../components/Style.css';


const Home = () => {
    return (
        <div className='Home'>
            <div className="card ">
                <img src="/Assets/Img1.webp" className="card-img" alt="..." />
            </div>
            <div className="card ">
                <img src="/Assets/Img2.webp" className="card-img" alt="..." />
            </div>
            <div className=" col-6 d-flex">
                <img src="/Assets/Img3(1).jpg" className="card-img" alt="..." />
                <img src="/Assets/Img3(2).webp" className="card-img" alt="..." />
            </div>
            <div className="card ">
                <img src="/Assets/Img4.webp" className="card-img" alt="..." />
            </div>
            <div className=" col-6 d-flex">
                <img src="/Assets/Img5i.webp" className="card-img" alt="..." />
                <img src="/Assets/Img5ii.webp" className="card-img" alt="..." />
            </div>
            <div className="card ">
                <img src="/Assets/Img6.webp" className="card-img" alt="..." />
            </div>
            <div className="card ">
                <img src="/Assets/img7.webp" className="card-img" alt="..." />
            </div>

            <div className="card text-bg-dark">
                <img src="/Assets/img8.webp" className="card-img" alt="..." />
                <div className="card-img-overlay ">
                    <h5 className="card-title mt-5 ">HEAR IT FIRST</h5>
                    <p className="card-text">Subscribe to get the latest updates on New Collections, Events &  more</p>
                    <input type="email" placeholder='E-mail'/> <button>SUBSCRIBE</button>
                </div>
            </div>

            <div className="card ">
                <img src="/Assets/img9.webp" className="card-img" alt="..." />
            </div>

            <div className="card ">
            <img src="/Assets/img10.webp" className="card-img" alt="..." />
        </div>

        </div>
    )
}

export default Home
