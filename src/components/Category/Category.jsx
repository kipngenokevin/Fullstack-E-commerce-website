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
                            Bags
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/9982469/pexels-photo-9982469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <button>
                                <Link className='link' to="/products/1">
                                    CLASS
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/11034410/pexels-photo-11034410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <button>
                                <Link className='link' to="/products/2">
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