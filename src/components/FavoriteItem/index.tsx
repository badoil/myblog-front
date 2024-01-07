import defaultProfileImage from "../../assets/image/default-profile-image.png";
import FavoriteListItem from "../../types/interface/favorite-list-item.interface";
import './style.css'

interface Props {
    favoriteListItem: FavoriteListItem
}

export default function FavoriteItem({ favoriteListItem }: Props) {

    const { profileImage, nickname } = favoriteListItem

    return (
        <div className='favorite-item-list'>
            <div className='favorite-item-list-profile-box'>
                <div className='favorite-item-list-profile-image' style={{backgroundImage: `url(${profileImage? profileImage: defaultProfileImage})`}}></div>
            </div>
            <div className='favorite-item-list-nickname'>{nickname}</div>
        </div>
    )
};