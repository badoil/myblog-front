import React from 'react';
import './App.css';
import BoardListItem from "components/BoardListItem";
import latesBoardListMock from "./mocks/latest-board--list.mock";
import Top3Item from "./components/Top3Item";
import top3BoardListMock from "./mocks/top-3-board-list.mock";

function App() {
  return (
    <>
        {/*{latesBoardListMock.map(boardItem => <BoardListItem boardListItem={boardItem} />)}*/}
      <div style={{display: "flex", justifyContent: "center", gap: "24px"}}>
          {top3BoardListMock.map(boardItem => <Top3Item top3ListItem={boardItem}/>)}
      </div>
    </>
  );
}

export default App;
