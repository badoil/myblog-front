export default interface BoardListItemInterface {
    boardNumber: number;
    title: string;
    content: string;
    boardTitleImage: string | null;
    favoriteCount: number;
    commnetCount: number;
    viewCount: number;
    writerDatetime: string;
    writerNickname: string;
    writerProfileImage: string | null;
}
