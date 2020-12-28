import React from 'react';
function Newcomp(props){
   return (
     <div>
         <h1>Father is {props.fname}</h1>
         <h1>Elder Son is {props.s1name}</h1>
         <h1>Younger Son is {props.s2name}</h1>
     </div>

   );
}
export default Newcomp;