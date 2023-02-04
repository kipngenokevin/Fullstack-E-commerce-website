import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import './Products.scss'

const Products = () => {

  const catId = parseInt(useParams().id)

  const [maxPrice, setMaxPrice] = useState(10000)

  const [sort, setSort] = useState(null)

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">

          <h2>Product Categories</h2>

          {/*====== Input category checkboxes */}

          <div className="inputitem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>

          <div className="inputitem">
            <input type="checkbox" id="2" value={1} />
            <label htmlFor="2">Skirts</label>
          </div>

          <div className="inputitem">
            <input type="checkbox" id="3" value={1} />
            <label htmlFor="3">Coats</label>
          </div>

          {/*======= End of category checkboxes*/}

        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputitem">
            <span>0</span>
            <input type="range" min={0} max={10000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>

          <div className="inputitem">
            <input type='radio' id='asc' value='asc' name='price' onChange={e=>setSort("asc")}/>
            <label htmlFor='asc'>Price(Lowest First)</label>
          </div>

          <div className="inputitem">
            <input type='radio' id='desc' value='desc' name='price' onChange={e=>setSort("desc")}/>
            <label htmlFor='desc'>Price(Highest First)</label>
          </div>

        </div>
      </div>

      {/*===== The product section ====*/}
      <div className="right">
        <img className='catImg' src='https://images.pexels.com/photos/1204464/pexels-photo-1204464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
      {/*==== End of product section =====*/}
    </div>
  )
}

export default Products