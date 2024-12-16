import React from 'react'
import Layout from '../components/common/layout/Layout'
import ShopNow from './components/ShopNow/ShopNow'
import Superiority from './components/superiority/Superiority'
import Collections from './components/collections/Collections'
import Titlee from './components/title/Titlee'
import Product from './components/product/Product'

const Home = () => {
  return (
    <div>
        <Layout>
          <ShopNow/>
          <Superiority/>
          <Collections/>
          <Titlee item={`Featured Products`}/>
          <Product/>

          
          
            
        </Layout>
    </div>
  )
}

export default Home