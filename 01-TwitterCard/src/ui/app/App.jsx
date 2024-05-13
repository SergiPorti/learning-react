import { TwitterFollowCard } from "../TwitterFollowCard/TwitterFollowCard"

export function App() {

    const users = [
        {
            "userName": "illojuan",
            "name": "Juan Alberto Garcia",
            "isFollowing": true
        },
        {
            "userName": "elbokeron",
            "name": "Andres Elbokeron",
            "isFollowing": true
        },
        {
            "userName": "EvilAFM",
            "name": "Alejandro EvilAFM",
            "isFollowing": false
        }
    ]

    return (
        <section className='App'>

            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        // That component uses an element like a property (<strong>) and is very common to use and helpful
                        <TwitterFollowCard
                            key={userName}
                            username={userName}
                            initialIsFollowing={isFollowing} >
                            <strong>{name}</strong>
                        </TwitterFollowCard>
                    )
                })
            }
            <TwitterFollowCard username="menos_trece" name="Menos Trece whatever" initialIsFollowing={true} />
            <code style={{ "fontSize": 10 }}>Another way to render something, that doesnt need <br /> the children property and we give the information
                <br /> directly to the property without an element
            </code>

        </section >
    )
}