import React from 'react'
import Document from './_document';
import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner, UnderBanner } from "../components"

const Home = ({ products, bannerData }) => {
  return (
    <>



      <div>

        <UnderBanner />
        <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

        <div className='products-heading'>
          <h2>Meilleures Ventes</h2>
          <p>touts petits prix!</p>
        </div>

        <div className='products-container'>
          {products?.map((product) => <Product key={product._id} product={product} />)}
        </div>
        <FooterBanner footerBanner={bannerData && bannerData[0]} />
      </div>
    </>

  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }


}

export default Home;