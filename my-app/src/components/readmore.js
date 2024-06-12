import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Card from "./card";

function ReadMore() { 
    const navigate = useNavigate();
    const location = useLocation();
    var query = new URLSearchParams(location.search)
    var goBack = ()=>
        {
            navigate('/card')
        }
        return(<>
        


        <h1 >{query.get('name')}</h1>
        <h1 >{query.get('age')}</h1>
        <h1 >{query.get('weight')}</h1>
        <a href="#" >{query.get('height')}</a>
        <button class="styled-button" onClick={()=>{
                goBack()
        }
        }>Back</button>
    </>)
    
 }

 export default ReadMore;
