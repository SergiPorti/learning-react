import { TwitterFollowCard } from "../TwitterFollowCard/TwitterFollowCard"

export function App() {

    return (
        <section className='App'>
            <TwitterFollowCard username="illojuan" name="Juan Alberto Garcia" isFollowing />
            <TwitterFollowCard username="elbokeron" name="Andres Elbokeron" isFollowing={false} />
            <TwitterFollowCard username="EvilAFM" isFollowing >
                <strong>Alejandro EvilAFM</strong>
            </TwitterFollowCard>
        </section>
    )
}