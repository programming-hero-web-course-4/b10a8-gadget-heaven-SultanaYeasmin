import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';




const Cards = () => {
    const products = useLoaderData();
         console.log(products)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between'>
            {
  products.map((product, idx) => <Card key={idx} product={product}></Card>)
            }
     

        </div>
    );
};

export default Cards;