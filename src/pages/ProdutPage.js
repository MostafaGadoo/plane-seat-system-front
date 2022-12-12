// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ProdutPage = () => {
//   const [product, setProduct] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   // use the useParams hook in React Router to allow us to access dynamic segments in our dynamic route
//   const params = useParams();
//   // our dynamic segment was called productId, so we can access it as follows:
//   const ticketId = params.ticketId;

//   // now simply use useEffect to fetch the product's data

//   useEffect(() => {
//     const fetchAbortController = new AbortController();
//     const fetchSignal = fetchAbortController.signal;

//     const fetchProductDetails = async () => {
//       try {
//         // send an HTTP GET request to the get products route we defined in our Express REST API
//         const response = await fetch(
//           `https://plane-management.azurewebsites.net/tickets/${ticketId}`,
//           {
//             signal: fetchSignal
//           }
//         );
//         // parse the response content to JSON and store it into data variable
//         const data = await response.json();

//         // If there is an HTTP error (the response is NOT ok), throw the error message we get from the REST API.
//         if (!response.ok) {
//           // remember, in our REST API we return an error message in our response that has the key 'error'.
//           throw Error(data.error);
//         }

//         // we now need to set our component state to the products we fetched
//         setProduct(data.ticket);

//         // after we set the products' state, let's set the loading state to false
//         setIsLoading(false);
//       } catch (err) {
//         console.log(err.message);
//       }
//     };

//     fetchProductDetails();

//     return () => {
//       fetchAbortController.abort();
//     };
//   }, [ticketId]);

//   if (isLoading) {
//     return <h1>Please wait while loading product details...</h1>;
//   }

//   if (!product) {
//     return <h1>Couldn't find product...</h1>;
//   }

//   return (
//     <div class ="ticketDisplay">
//           <div class= "ticketsView"> {product.date}</div>
//           <div class= "ticketsView"> {product.date}</div>
//           <div class= "ticketsView"> {product.date}</div>

//     </div>
   
//   );
// };

// export default ProdutPage;
