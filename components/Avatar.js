import avatar from '../assets/photo.jpeg'
import '../App.css';

const Avatar = (props) => {
    return (
        <>
        <div className="avatar-container">
            <img className='avatar' src={avatar} alt='avatar'></img>
        </div>
        </>
    )
}

export default Avatar