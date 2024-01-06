import './style.css';
import defaultProfileImage from "assets/image/default-profile-image.png";
import BoardListItemInterface from "../../types/interface/board-list-item.interface";

interface Props {
    top3ListItem: BoardListItemInterface
}

export default function Top3Item({ top3ListItem }: Props) {

    const { boardNumber, title, content, boardTitleImage, favoriteCount, viewCount, commnetCount, writerProfileImage, writerNickname, writerDatetime} = top3ListItem;

    // navigate function
    // const navigator = useNavigate();

    const onClickHandler = () => {
        // navigator(boardNumber)
    }

    return (
        <div className="top-3-list-item" style={{backgroundImage: `url(${boardTitleImage})`}} onClick={onClickHandler}>
            <div className="top-3-list-item-main-box">
                <div className="top-3-list-item-top">
                    <div className="top-3-list-item-profile-box">
                        <div className="top-3-list-item-profile-image" style={{backgroundImage: `url(${writerProfileImage ? writerProfileImage : defaultProfileImage})`}}></div>
                    </div>
                    <div className="top-3-list-item-write-box">
                        <div className="top-3-list-item-nickname">{writerNickname}</div>
                        <div className="top-3-list-item-write-date">{writerDatetime}</div>
                    </div>
                </div>
                <div className="top-3-list-item-middle">
                    <div className="top-3-list-item-title">{title}</div>
                    <div className="top-3-list-item-content">{content}</div>
                </div>
                <div className="top-3-list-item-bottom">
                    <div className="top-3-list-item-counts">
                        {`댓글 ${commnetCount} 좋아요 ${favoriteCount} 조회수 ${viewCount}`}
                    </div>
                </div>
            </div>
        </div>
    )
}