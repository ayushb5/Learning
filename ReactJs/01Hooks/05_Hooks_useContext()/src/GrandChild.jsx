import { useContext } from 'react'
import UserContext from './context/usercontext'

function GrandChild() {
    const username = useContext(UserContext)

    return (
        <>
            <h1>Hello {username} </h1>
        </>
    )
}

export default GrandChild