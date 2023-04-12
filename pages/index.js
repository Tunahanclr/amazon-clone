import Head from 'next/head';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import ProductFeed from '@/components/ProductFeed';
import axios from 'axios';

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Amazon</title>
      </Head>
      <Header />
      <main className='max-w-screen-2xl mx-auto'>
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get('https://fakestoreapi.com/products');
  return {
    props: {
      products: data,
    },
  };
}
