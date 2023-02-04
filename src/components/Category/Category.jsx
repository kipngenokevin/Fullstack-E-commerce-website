import React from 'react'
import { Link } from 'react-router-dom'
import './Category.scss'

const Category = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/3762185/pexels-photo-3762185.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button>
                        <Link className='link' to="/products/1">
                            Face
                        </Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/3756920/pexels-photo-3756920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className='link' to="/products/1">
                            New Arrival
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/3760767/pexels-photo-3760767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className='link' to="/products/1">
                            Comfortable
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/11930775/pexels-photo-11930775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <button>
                                <Link className='link' to="/products/1">
                                    Women
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/6786616/pexels-photo-6786616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <button>
                                <Link className='link' to="/products/1">
                                    T-Shirts
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/12867678/pexels-photo-12867678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className='link' to="/products/1">
                            Women
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Category