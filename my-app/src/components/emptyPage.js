import React,{ Component } from "react";
import { useNavigate,useLocation } from "react-router-dom";

function EmptyPage(){
    const Navigate = useNavigate();
    const location = useLocation();
    const user = location.state;



    return( 
        <div>
        <button onClick={()=>{Navigate('/table')}}>Back</button>
        {user?(<>
        <h1>{user.id}</h1>
        <h1>{user.name}</h1>
        <h1>{user.amount}</h1>
        <h1>{user.spendDate}</h1>
        <h1>{user.category}</h1>
        </>):(<h1>there is no data</h1>)
        }


        

        </div>

         
         
            
        
    )
}
export default EmptyPage;


