import '../App.css';
import '../Css/table.css'
import { useNavigate } from 'react-router-dom';



function Table(){

const allUsers = [
    {id:1,name:'Ahmad',amount:2,spendDate:'6/6/1998',category:'category1'},
    {id:2,name:'Mohammad',amount:2,spendDate:'4/2/1998',category:'category2'},
    {id:3,name:'Ibrahem',amount:2,spendDate:'2/6/1998',category:'category3'},
    {id:4,name:'Samer',amount:2,spendDate:'8/8/1998',category:'category4'}
]
    var navigate = useNavigate();
    var moreInfo=(user)=>{
        console.log(user)
        navigate('/emptyPage',{state:user});
    }
    var listOfUsers = allUsers.map(user=>(
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.amount}</td>
            <td>{user.spendDate}</td>
            <td>{user.category}</td>
            <td><button onClick={()=>{moreInfo(user)}}>more info</button></td>

        </tr>

    ))


    return(
        <div>
            <table id='tableColor'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>amount</th>
                        <th>spendDate</th>
                        <th>category</th>
                        <th>more info</th>

                    </tr>

                </thead>

                <tbody>
                    {listOfUsers}


                  
                </tbody>
            </table>
        </div>
    )
}

export default Table;