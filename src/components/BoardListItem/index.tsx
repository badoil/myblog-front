import './style.css'
import BoardListItemInterface from "../../types/interface/board-list-item.interface";
import {useNavigate} from "react-router-dom";
import defaultProfileImage from 'assets/image/default-profile-image.png';

interface Props {
    boardListItem: BoardListItemInterface
}

// board list item component
export default function BoardListItem({ boardListItem }: Props) {

    // properties
    const { boardNumber, title, content, boardTitleImage, favoriteCount, viewCount, commnetCount, writerProfileImage, writerNickname, writerDatetime} = boardListItem;

    // navigate function
    // const navigator = useNavigate();

    const onClickHandler = () => {
        // navigator(boardNumber)
    }

    // board list rendering
    return (
        <div className="board-list-item" onClick={onClickHandler}>
            <div className="board-list-item-main-box">
                <div className="board-list-item-top">
                    <div className="board-list-item-profile-box">
                        <div className="board-list-item-profile-image" style={{backgroundImage: `url(${writerProfileImage ? writerProfileImage : defaultProfileImage})`}}></div>
                    </div>
                    <div className="board-list-item-write-box">
                        <div className="board-list-item-nickname">{writerNickname}</div>
                        <div className="board-list-item-write-date">{writerDatetime}</div>
                    </div>
                </div>
                <div className="board-list-item-middle">
                    <div className="board-list-item-title">{title}</div>
                    <div className="board-list-item-content">{content}</div>
                </div>
                <div className="board-list-item-bottom">
                    <div className="board-list-item-counts">
                        {`댓글 ${commnetCount} 좋아요 ${favoriteCount} 조회수 ${viewCount}`}
                    </div>
                </div>
            </div>
            {boardTitleImage !== null && (
                <div className="board-list-item-image-box">
                    <div className="board-list-item-image" style={{backgroundImage: `url(${boardTitleImage})`}}></div>
                </div>
            )}
        </div>
    )
};