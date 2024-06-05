import { useNavigate } from "react-router-dom";
function EmptyPage(){
    const Navigate = useNavigate();

    return( 
        <>
            <button onClick={()=>{Navigate('/table')}}>Back</button>
        </>
         
            
        
    )
}
export default EmptyPage;