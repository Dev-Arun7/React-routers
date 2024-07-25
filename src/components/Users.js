import { useSearchParams } from 'react-router-dom'

function Users() {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
    return (
        <>
            <h2> User1 </h2>
            <h2> User2 </h2>
            <h2> User3 </h2>
            <div>
                <button onClick={() => setSearchParams({ filter: 'active' })} >
                    Active Users</button>
                <button onClick={() => setSearchParams({})} >
                    Reset filter </button>
            </div>
            {showActiveUsers ? (<h2> Showing Active Users</h2>) :
                (<h2> Reset Filter </h2>)}
        </>
    )
}

export default Users