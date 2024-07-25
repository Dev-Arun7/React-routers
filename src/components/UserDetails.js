// User details page
import { useParams } from 'react-router-dom'
function UserDetails() {
    const params = useParams()
    const userId = params.userId
    return (
        <>
            <h2> User Details </h2>
            <h3> User ID: {userId}</h3>
        </>
    )
}
export default UserDetails