// import { useEffect, useState } from 'react';
// import { Navigate, useParams } from 'react-router-dom';

// const Bookticket = () => {
//   // let's define a state for products
  

//   // let's define a state for loading
//   const [isLoading, setIsLoading] = useState(true);
//   const params = useParams();
//   const ticketId = params.ticketId;

//   useEffect(() => {
//     const fetchAbortController = new AbortController();
//     // const fetchSignal = fetchAbortController.signal; 

   
//     const Bookticket = async() => {
//         console.log(ticketId);
//     try{
//         const response = await fetch('http://localhost:3000/tickets/bookticket/'+ ticketId,{ 
//             method:'PUT',
//             // signal: fetchSignal,
//         });

//         const data = await response.json();

//         if(!response.ok){
//             throw Error(data.error);
//         }
//         Navigate(`/`);
//         setIsLoading(false);
//         // showPopUp();
//         console.log("done");

//     }catch(err){
//         console.log(err.message);
//         alert("Cannot update status");
//     }
// }

// Bookticket();

//     return () => {
//       fetchAbortController.abort();
//     };
//   }, []);

//   if (isLoading) {
//     return <p>Please wait while we are loading data...</p>;
//   }
//   return <div>

//   </div>
// };

// export default Bookticket;
import { useEffect, useState } from 'react';
import ProductsList from '../components/products/ProductsList';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Bookticket = () => {
  // let's define a state for products
  const [products, setProducts] = useState([]);

  // let's define a state for loading
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const params = useParams();
  const ticketId = params.ticketId;
  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchProducts = async () => {
      try {
        // send an HTTP GET request to the get products route we defined in our Express REST API
        const response = await fetch('http://localhost:3000/tickets/bookticket/' + ticketId,  {
          method:'PUT',
          signal: fetchSignal
        });
        // parse the response content to JSON and store it into data variable
        const data = await response.json();

        // If there is an HTTP error (the response is NOT ok), throw the error message we get from the REST API.
        if (!response.ok) {
          throw Error(data.error);
        }else{
          navigate(`/tickets`);
        }
        // we now need to set our component state to the products we fetched
        setProducts(data.ticektBooked);
        
        // after we set the products' state, let's set the loading state to false
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchProducts();

    return () => {
      fetchAbortController.abort();
    };
  }, []);

  if (isLoading) {
    return <p>Please wait while we are loading data...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <ProductsList products={products} />
    </div>
  );
};

export default Bookticket;
