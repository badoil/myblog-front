import React from 'react';
import './App.css';
import BoardListItem from "components/BoardListItem";
import latesBoardListMock from "./mocks/board-item-list.mock";

function App() {
  return (
    <>
        {latesBoardListMock.map(boardItem => <BoardListItem boardListItem={boardItem} />)}
    </>
  );
}

export default App;
