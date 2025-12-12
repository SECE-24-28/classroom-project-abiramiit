import { useParams } from "react-router-dom"
export default Invoice()
{
    const data = useParams()
    return(
       <h1>{data.id}</h1>
    )
}