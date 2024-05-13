import { useState } from 'react'
import './TwitterFollowCardStyles.css'

export function TwitterFollowCard({ children, username = 'Anonymous', name = 'Unknown' }) {

    const [isFollowing, setIsFollowing] = useState(false)

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }


    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    return (
        <article className="tw-followcard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar"
                    alt="User profile image"
                    src={`https://unavatar.io/${username}`} />
                <div className="tw-followCard-info">
                    {children ?? <strong>{name}</strong>}
                    <span className='tw-followCard-info-username'>@{username}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>{text}</button>
            </aside>
        </article>
    )
}