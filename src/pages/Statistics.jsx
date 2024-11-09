import React from 'react';
import DocumentTitle from '../utilities/DocumentTitle';
import CommonHeading from '../components/CommonHeading';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';
const products = [
  { product_id: 1, product_title: "MacBookPro14", price: 2499.99, rating: 4.8, total: 2499.99 },
  { product_id: 2, product_title: "DellXPS13", price: 1399.99, rating: 4.4, total: 1399.99 },
  { product_id: 3, product_title: "iPhone14Pro", price: 1099.99, rating: 4.7, total: 1099.99 },
  { product_id: 4, product_title: "SamsungGalaxyS23", price: 999.99, rating: 4.5, total: 999.99 },
  { product_id: 5, product_title: "GooglePixel7", price: 899.99, rating: 4.6, total: 899.99 },
  { product_id: 6, product_title: "OnePlus11", price: 799.99, rating: 4.4, total: 799.99 },
  { product_id: 7, product_title: "SonyXperia", price: 1199.99, rating: 4.3, total: 1199.99 },
  { product_id: 8, product_title: "XiaomiMi12", price: 749.99, rating: 4.5, total: 749.99 },
  { product_id: 9, product_title: "AppleWatchS8", price: 399.99, rating: 4.6, total: 399.99 },
  { product_id: 10, product_title: "SamsungGalaxy5", price: 279.99, rating: 4.5, total: 279.99 },
  { product_id: 11, product_title: "Sony WH-1000XM4", price: 349.99, rating: 4.6, total: 349.99 },
  { product_id: 12, product_title: "Anker PowerCore 26800mAh", price: 65.99, rating: 4.8, total: 65.99 },
  { product_id: 13, product_title: "Nokia G20", price: 349.99, rating: 4.1, total: 349.99 },
  { product_id: 14, product_title: "Motorola Moto G Power", price: 249.99, rating: 4.2, total: 249.99 },
  { product_id: 15, product_title: "Asus Zenfone 9", price: 699.99, rating: 4.5, total: 699.99 },
  { product_id: 16, product_title: "Realme GT 2 Pro", price: 599.99, rating: 4.4, total: 599.99 },
  { product_id: 17, product_title: "MacBook Air M2", price: 1199.99, rating: 4.7, total: 1199.99 },
  { product_id: 18, product_title: "MacBook Pro 14", price: 2499.99, rating: 4.8, total: 2499.99 },
  { product_id: 19, product_title: "iPhone 14 Pro", price: 1099.99, rating: 4.8, total: 1099.99 },
  { product_id: 20, product_title: "iPhone 14", price: 799.99, rating: 4.6, total: 799.99 },
  { product_id: 21, product_title: "iPhone 13 Pro", price: 999.99, rating: 4.7, total: 999.99 },
  { product_id: 22, product_title: "iPhone SE (3rd Gen)", price: 429.99, rating: 4.4, total: 429.99 },
  { product_id: 23, product_title: "iPhone 12", price: 699.99, rating: 4.5, total: 699.99 }
];


const Statistics = () => {
  DocumentTitle("GadgetHeaven_Statistics")

  return (
   <div>   
    <div className='bg-[#9538E2]'>
    <div className='flex justify-center text-white py-10' >
        <CommonHeading
            title='Statistics'
            subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'
        ></CommonHeading>
    </div>

   
</div>
   <div className='h-[500px] container m-20 mx-auto'>
    
      <ResponsiveContainer width="100%" height="100%" >
        <ComposedChart
        width={500}
         height={250}
          data={products}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
         
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="product_title" scale="band" fontSize={6}  />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="total" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="price" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="price" stroke="#ff7800" />
          <Scatter dataKey="rating" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
      </div>   </div> 
  );
};

export default Statistics;
{/* <Line type="monotone" dataKey="price" stroke="#ff7300" /> */}