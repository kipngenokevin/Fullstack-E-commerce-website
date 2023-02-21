import React from 'react'
import { Link } from 'react-router-dom'
import './Category.scss'

const Category = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/4830925/pexels-photo-4830925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className='link' to="/products/1">
                            New Arrival
                        </Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/11655347/pexels-photo-11655347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className='link' to="/products/1">
                            Jewelry
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/4405244/pexels-photo-4405244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className='link' to="/products/1">
                            TIMELY
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/998521/pexels-photo-998521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <button>
                                <Link className='link' to="/products/1">
                                    CLASS
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/8891959/pexels-photo-8891959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <button>
                                <Link className='link' to="/products/1">
                                    STYLE
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src= "https://images.pexels.com/photos/1228626/pexels-photo-1228626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className='link' to="/products/1">
                            COMFORT
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Category