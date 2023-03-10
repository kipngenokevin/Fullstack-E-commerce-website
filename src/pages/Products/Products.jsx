import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import useFetch from "../../hooks/useFetch"
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import './Products.scss'
import { MenuItem } from '@mui/material';


const Products = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [pageNumber, setPageNumber] = useState(1)
  const [sort, setSort] = useState('asc')


  const [selectedSubCats, setSelectedSubCats] = useState([])

  const {data, loading, error} = useFetch(`/subcategories?[filters][categories][id][$eq]=${catId}`)

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter(item=>item !==value))
  }

  

  return (
    <div className='products'>
    <label for="menu-tap" class="menu">
        <MenuItem/>
      </label>
      <div className="left">
      
        <div className="filterItem">

          <h2>Product Categories</h2>
          <p>Check these boxes to filter your items</p>
          <br></br>

          {/*====== Input category checkboxes */}

          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} onClick={e=>setPageNumber(1)}/>
              <label htmlFor={item.id}> {item.attributes.title}</label>
            </div>
          ))}
          


          {/*======= End of category checkboxes*/}

        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputitem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
            
          <div className="inputitem">
            <input type='radio' id='asc' value='asc' name='price' onChange={e=>setSort("asc")} onClick={e=>setPageNumber(1)}/>
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
        {/*<img className='catImg' src='https://images.pexels.com/photos/4127641/pexels-photo-4127641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>*/}
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} pageNumber={pageNumber}/>
        <div className='pagenav'>
          <button onClick={() => setPageNumber((prev) => prev === 1 ? 1 : prev - 1)}>Previous</button>
          <span> Page {pageNumber}</span>
          <button onClick={() => setPageNumber((prev) => prev + 1)}>Next</button>
        </div>

      </div>
      {/*==== End of product section =====*/}
    </div>
  )
}

export default Products