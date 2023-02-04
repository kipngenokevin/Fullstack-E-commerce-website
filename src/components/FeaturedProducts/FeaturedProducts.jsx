import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'

const FeaturedProducts = ({type}) => {

  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/7755459/pexels-photo-7755459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img2: 'https://images.pexels.com/photos/8580001/pexels-photo-8580001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Summer Dress',
      isNew: true,
      oldPrice: 13,
      price: 9.99
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/12698490/pexels-photo-12698490.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Kimono dress',
      oldPrice: 25,
      price: 23
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/12560384/pexels-photo-12560384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Sheath dress',
      oldPrice: 30,
      price: 29
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/9580324/pexels-photo-9580324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Spotted top',
      oldPrice: 15.5,
      price: 14.45
    },
    {
      id: 5,
      img: 'https://images.pexels.com/photos/6794112/pexels-photo-6794112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Ankara top',
      oldPrice: 23,
      price: 12.30
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