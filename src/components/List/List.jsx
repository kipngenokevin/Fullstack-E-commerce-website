import React from 'react'
import Card from './../Card/Card'
import './List.scss'
import useFetch from '../../hooks/useFetch'

const List = ({subCats, maxPrice, sort, pageNumber, catId}) => {

  const {data, loading, error} = useFetch(
    `/products?populate=*&pagination[page]=${pageNumber}&pagination[pageSize]=30&[filters][categories][id]=${catId}${subCats.map(
     item=>`&[filters][subcategories][id][$eq]=${item}`
    )}&[filters][Price][$lte]=${maxPrice}&sort=Sale_Price:${sort}`
    )


  return (
    <div className='list'> 
        {loading ? "loading" :data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))} 

    </div>
  )
}

export default List