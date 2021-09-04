import {useState, useEffect} from "react"
const apiURL = process.env.REACT_APP_API_URL 

export const SearchPanel = () => {
    const [param, setParam] = useState({project_name:"",manager_id:""})
    const [managers,setManagers] = useState([])

    useEffect(()=>{
        fetch(`${apiURL}/managers`).then(async (res)=>{
            if(res.ok){
                setManagers(await res.json())
            }
        })
    },[])
    return <form>
        <input type="text" value={param.project_name} onChange={
            (evt)=>{
                setParam({
                    ...param,
                    project_name:evt.target.value
                })
            }
        }/>
        <select value={param.manager_id} onChange={(evt)=>{
            setParam({
                ...param,
                manager_id:evt.target.value
            })
        }}>
            <option value="">Manager</option>
            {managers.map((manager)=>(
                <option value={manager.id} key={manager.id}>
                    {manager.name}
                </option>
            ))}
        </select>
    </form>
}