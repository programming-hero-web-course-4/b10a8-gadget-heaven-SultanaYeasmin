import { NavLink } from "react-router-dom";
import './categories.css'

const Categories = ({ categories }) => {
    return (
      <div >
        {
            categories.map((category)=>
            <NavLink
                    key={category.category}
                    to={`/category/${category.category}`}
                     className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
                    // style={({ isActive}) => {
                    //   return {
                    //     backgroundColor:  isActive ? "blue" : "rgba(9, 8, 15, 0.6)",
                    //     color: isActive  ? "white" : "black",
                       
                    //   };
                    // }}
                      // className={({isActive})=>{
                      //   `btn btn-wide my-6 rounded-3xl ${isActive ? "bg-black": "bg-orange-400"}`
                      //    }  
                      //    }
                         >
               <div>
                <button className="btn btn-wide my-6 rounded-3xl" >
                  
                  {category.category}</button>
                
               </div>

            </NavLink>  
            )
        }
      </div>
    );
};

export default Categories;

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