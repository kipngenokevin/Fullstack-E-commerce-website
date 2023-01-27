import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'

const FeaturedProducts = ({type}) => {

  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img2: 'https://images.pexels.com/photos/8580001/pexels-photo-8580001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: '',
      isNew: true,
      oldPrice: 1300,
      price: 999
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/12698490/pexels-photo-12698490.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: '',
      oldPrice: 2500,
      price: 2300
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/12560384/pexels-photo-12560384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: '',
      oldPrice: 3000,
      price: 2900
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/9580324/pexels-photo-9580324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: '',
      oldPrice: 15500,
      price: 14450
    },
    {
      id: 5,
      img: 'https://images.pexels.com/photos/6794112/pexels-photo-6794112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: '',
      oldPrice: 2300,
      price: 1230
    },
    
  ]

  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} Products</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tellus eros, suscipit quis vulputate non, tincidunt quis mi. 
        Integer tempus arcu efficitur, euismod lectus nec, vestibulum neque. Sed sit amet felis eget purus vehicula lacinia nec in dolor. 
        Praesent mattis venenatis efficitur. Etiam a turpis finibus, semper nibh id, finibus mauris. 
        </p>
      </div>
      <div className="bottom">
        {data.map(item=>(
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts