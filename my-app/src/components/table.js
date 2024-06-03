import '../App.css';
import '../Css/table.css'
import { useNavigate } from 'react-router-dom'

function Table({}){

const items = [
    {id:1,name:'khaled',amount:100,spendDate:'01-01-2021',category:'category1'},
    {id:2,name:'ahmad',amount:100,spendDate:'01-01-2021',category:'category2'},
    {id:3,name:'mohmammad',amount:100,spendDate:'01-01-2021',category:'category3'},
    {id:4,name:'sameer',amount:100,spendDate:'01-01-2021',category:'category4'}
]

    const navigate = useNavigate();
    var seeDetails =()=>{
        navigate('/emptyPage')
    }
    const listItems = items.map(item=>(
        
        <tr className='bord'>
        <td className='bord'>{item.id}</td>
        <td className='bord'>{item.name}</td>
        <td className='bord'>{item.amount}</td>
        <td className='bord'>{item.spendDate}</td>
        <td className='bord'>{item.category}</td>
        <td className='bord'><button onClick={()=>{seeDetails()}}>MoreInfo</button></td>

    </tr>
    ))


    return(
        <div id="tableDiv">
            <table class="styled-table">
        <thead>
            <tr>
                <th classNames='bord'>id</th>
                <th classNames='bord'>name</th>
                <th classNames='bord'>amount</th>
                <th classNames='bord'>spendDate</th>
                <th classNames='bord'>category</th>
                <th classNames='bord'>MoreInfo</th>
            </tr>
        </thead>
        <tbody>
            {listItems}
        </tbody>
    </table>

        </div>
        
    )
    

}

export default Table;