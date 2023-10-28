// // import 't Orders.css'
// import { useContext } from "react";
// import Context from "../../context/Context";

// function OrderDetails() {
//   const { summaryList, setSummaryList } = useContext(Context);

//   const removeOneSummaryList = (id) => {
//     const filteredWithOutProduct = summaryList.filter((product) => product.id != id);
//     setSummaryList(filteredWithOutProduct);
//   };

//   const removeAllSummaryList = () => {
//     setSummaryList([]);
//   };

//   return (
//     <>
//       {!summaryList.length ? (<p>Nenhum produto adicionado</p>)
//       :(
//         <div>
//           <h1>Resumo dos pedidos</h1>
//           {summaryList.map((product) => (
//             <div key={product.id}>
//               <p>{product.name}</p>
//               {product.ingredientes.map((ingrediente, idx)=>(
//                 <div key={idx}>
//                   <p>{ingrediente}</p>
//                 </div>
//               ))}
//               <p>{`R$ ${product.price.toFixed(2)}`}</p>
//               <button
//                 onClick={()=> removeOneSummaryList(product.id)}
//               >
//                 Remover
//               </button>
//             </div>
//           ))}
//           <h2>Total de pedido:</h2>
//           <h2>{`R$ ${summaryList.reduce((acc, product) => {
//               acc += product.price;
//               return acc;
//             }, 0).toFixed(2)}`}
//           </h2>
//           <button
//             type="button"
//             // onClick={removeAllSummaryList}
//           >
//             Voltar
//           </button>
//           <button
//             type="button"
//             // onClick={removeAllSummaryList}
//           >
//             Continuar Adicionando
//           </button>
//         </div>
//       )}
//     </>
//   )
// }

// export default OrderDetails
