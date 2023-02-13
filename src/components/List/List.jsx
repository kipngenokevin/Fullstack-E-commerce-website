import React from 'react'
import Card from './../Card/Card'
import './List.scss'

const List = () => {

  const data = [
    {
      id: 1,
      img: 'https://www.bragmybags.to/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/y/c/ycc24gonon.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img2: 'https://www.bragmybags.to/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/y/c/ycc24gonon-1.jpg',
      title: 'Saint Laurent College Medium All Black Matelasse Leather Bag',
      oldPrice: 23,
      price: 12.30
    },
    {
      id: 2,
      img: 'http://www.hothandbag.cn/UploadFile/20220225/JIL SANDER-shoes-JSX00019-02.jpg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'http://www.hothandbag.cn/UploadFile/20220225/JIL SANDER-shoes-JSX00019-01.jpg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Jil Sander shoes JSX00019 Heel 8CM',
      oldPrice: 25,
      price: 23
    },
    {
      id: 3,
      img: 'http://www.hothandbag.cn/UploadFile/20220407/Audemars Piguet-Watch-APW00079-2-01.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Audemars Piguet Watch APW00079-2',
      oldPrice: 30,
      price: 29
    },
    {
      id: 4,
      img: 'https://www.bragmybags.to/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/y/h/yhs32grta.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Saint Laurent Small Sac de Jour Souple Bag In Taupe Grained Leather',
      oldPrice: 15.5,
      price: 14.45
    },
    {
      id: 5,
      img: 'http://www.hothandbag.cn/UploadFile/20200129/Hermes-Bracelet-HM6398.jpg',
      title: 'Hermes Bracelet HM6398',
      oldPrice: 23,
      price: 12.30
    },
    
  ]

  return (
    <div className='list'> 
        {data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))}

    </div>
  )
}

export default List