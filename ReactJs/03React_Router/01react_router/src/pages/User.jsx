import { useParams } from 'react-router-dom'

function User() {
    const params = useParams();

    return (
        <>
            <h1>User Page</h1>
            <p>User id: {params.id}</p>
        </>
    )
}

export default User;