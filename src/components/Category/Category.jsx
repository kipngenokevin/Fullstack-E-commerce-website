import React from 'react'
import { Link } from 'react-router-dom'
import './Category.scss'

const Category = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="http://www.hothandbag.cn/UploadFile/20140605/MCM-Small-Flag-of-UK-Backpack-MC5173S-Beige_1.jpg" alt="" />
                    <button>
                        <Link className='link' to="/products/1">
                            New Arrival
                        </Link>
                    </button>
                </div>
                <div className="row">
                    <img src="http://www.hothandbag.cn/UploadFile/20211229/Chanel-Necklace-CN32706.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className='link' to="/products/1">
                            Jewelry
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="http://www.hothandbag.cn/UploadFile/20210825/miu-miu-Denim-Shoulder-Bag-5ND223-blue-0623.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
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
                            <img src="http://www.hothandbag.cn/UploadFile/20191123/Miu-Miu-Shoes-MIUMIU714TZC-3_1.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <button>
                                <Link className='link' to="/products/1">
                                    Shoes
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/6786616/pexels-photo-6786616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <button>
                                <Link className='link' to="/products/1">
                                    Best Price
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src= "http://www.hothandbag.cn/UploadFile/20141114/Rolex-Day-Date-Replica-Watch-RO8008L_1.jpg" alt="" />
                    <button>
                        <Link className='link' to="/products/1">
                            Watches
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Category