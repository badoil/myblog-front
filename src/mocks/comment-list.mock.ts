import CommentListItemInterface from "../types/interface/comment-list-item.interface";

const commentListMock: CommentListItemInterface[] = [
    {
        nickname: "User1",
        profileImage: "profile1.jpg",
        content: "This is the first comment.",
        writeDatetime: "2024-01-07 12:00:00",
    },
    {
        nickname: "User2",
        profileImage: null,
        content: "Another comment here.",
        writeDatetime: "2024-01-07 12:30:00",
    },
    {
        nickname: "User3",
        profileImage: "profile3.jpg",
        content: "Yet another comment.",
        writeDatetime: "2024-01-07 13:00:00",
    },
];

export default commentListMock;