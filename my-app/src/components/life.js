import React,{Component} from "react";
import '../Css/life.css';


class LifecycleDemo extends Component{
    constructor(probs){
        super(probs)
        this.state = {
            data:null,
            loading:true,
        }
        console.log('constructor')
    }

    componentWillMount(){
        console.log('componentWillMount')
    }

    componentDidMount(){
        console.log('componentDidMount')
        this.fetchData()
    }

    fetchData(){
        setTimeout(()=>{
            this.setState({
                data:[{id:1,name:'AHMAD'},{id:2,name:'MOHAMMAD'}],
                loading:false,
            })
            console.log('it fetch the data')
        },2000)
       

    }

    render(){
        console.log('render')
        const {data,loading} = this.state;
        return(
            <>
                <h1>life cycle demo</h1>
                {loading?<h1>loading....</h1>:<h1>{this.renderTable(data)}</h1>}
            </>
        )

    }

    renderTable(tableData){
        return(
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                    </tr>
                </thead>

                <tbody>
                    {tableData.map(item=>(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default LifecycleDemo;