import { useNavigate } from "react-router-dom";
function emptyPage(){
    const Navigate = useNavigate();

    return( 
        <>
            <button onClick={()=>{Navigate('/table')}}>Back</button>
        </>
         
            
        
    )
}
export default emptyPage;