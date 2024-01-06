import BoardListItem from "types/interface/board-list-item.interface";

const top3BoardListMock: BoardListItem[] = [
    {
        boardNumber: 1,
        title: "First Board",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        boardTitleImage: "https://images.app.goo.gl/1AY5i8vbDEWdzUTZ6",
        favoriteCount: 15,
        commnetCount: 7,
        viewCount: 120,
        writerDatetime: "2024-01-06T10:30:00",
        writerNickname: "User1",
        writerProfileImage: null,
    },
    {
        boardNumber: 2,
        title: "Second Board",
        content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        boardTitleImage: "https://images.app.goo.gl/1AY5i8vbDEWdzUTZ6",
        favoriteCount: 8,
        commnetCount: 4,
        viewCount: 80,
        writerDatetime: "2024-01-07T12:45:00",
        writerNickname: "User2",
        writerProfileImage: null,
    },
    {
        boardNumber: 3,
        title: "Third Board",
        content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        boardTitleImage: 'https://images.app.goo.gl/1AY5i8vbDEWdzUTZ6',
        favoriteCount: 12,
        commnetCount: 6,
        viewCount: 100,
        writerDatetime: "2024-01-08T15:15:00",
        writerNickname: "User3",
        writerProfileImage: null,
    },
];

export default top3BoardListMock;