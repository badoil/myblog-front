import React from 'react';
import './App.css';
import BoardListItem from "components/BoardListItem";
import latesBoardListMock from "./mocks/latest-board--list.mock";
import Top3Item from "./components/Top3Item";
import top3BoardListMock from "./mocks/top-3-board-list.mock";
import CommentItem from "./components/CommentItem";
import commentListMock from "./mocks/comment-list.mock";
import favoriteListMock from "./mocks/favorite-list.mock";
import FavoriteItem from "./components/FavoriteItem";

function App() {
  return (
    <>
        {/*{latesBoardListMock.map(boardItem => <BoardListItem boardListItem={boardItem} />)}*/}

        {/*<div style={{display: "flex", justifyContent: "center", gap: "24px"}}>*/}
        {/*    {top3BoardListMock.map(boardItem => <Top3Item top3ListItem={boardItem}/>)}*/}
        {/*</div>*/}

        {/*<div style={{padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '30px'}}>*/}
        {/*    {commentListMock.map(comment => <CommentItem commentListItem={comment}/>)}*/}
        {/*</div>*/}
        <div style={{display: 'flex', columnGap: '30px', rowGap: '20px'}}>
            {favoriteListMock.map(favorite => <FavoriteItem favoriteListItem={favorite}/>)}
        </div>
    </>
  );
}

export default App;
