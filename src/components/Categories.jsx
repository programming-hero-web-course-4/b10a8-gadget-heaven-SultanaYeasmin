import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  
  return (
    <div className="border border-[#09080F]/10 p-4 rounded-2xl ">
      {
          categories.map((category, i)=>
              <NavLink
                  key={category.category}
                  to={`/category/${category.category}`}
                   className={({ isActive }) =>
                       `btn btn-wide my-6 rounded-3xl text-lg ${isActive ? "bg-[#9538E2] text-white font-extrabold": "font-medium text-[#09080F]/60"}`
                      }  >
                   <button key={i}>
               {category.category}
               </button>
              </NavLink>
             

         
          )
      }
    </div>
  );
};

export default Categories;





//                 style={({ isActive}) =>{
//                   background-color:isActive ? "#9538E2" : "" ;
// color:isActive ? "white" : "rgba(9, 8, 15, 0.6)";
// font-size: isActive ?"18px": "18px";
// font-weight: isActive ?"800px":"600px"/ 










// // {
//     categories.map(category =>

//         <NavLink
//             key={category.category}
//             to={`/category/${category.category}`}
          
//             className={({ isActive }) =>
//                 `tab text-2xl font-thin ${isActive ? 'tab-active' : ''}`
//             }                        >


//            <div>
//            <button> {category.category}</button>
//            </div>

//         </NavLink>)
// }

// #category11 a.active {
//   background-color:#9538E2 ;
//   color: white;
//   font-size: 18px;
//   font-weight: 800px;

// }
// .category1  {
 
//   color: rgba(9, 8, 15, 0.6);
//   font-size: 18px;
//   font-weight: 500px;

// }