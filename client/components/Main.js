import React, {useState, useLocation} from 'react';
import { Redirect } from 'react-router-dom';
// import TripCard from './TripCard'

function Main() {
  return (
    <div>
    <h1>I am from Main</h1>
    </div>
  )
}
//   const location = useLocation();
//   if (!location.state.tripsArray.length)
//     return (
//       <div>
//         <h2>You Have Not Saved Anything Yet. Start Your Search!</h2>
//       </div>
//     );

//   const tripsArrayEl = location.state.tripsArray.map((eachSave, i) => {
//     return (
//       <TripCard
//         key={i}
//         info={eachSave}
//       />
//     );
//   });
//   // console.log('I am from the Main Page');
//   return (
//     <section className='mainSection'>
//         <header className='pageHeader'>
//           <h2> Search! </h2>
//         </header>
//       <div className='tripCardContainer'>{tripsArrayEl}</div>
//     </section>
//   );
// }

export default Main;
