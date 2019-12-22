import IUser from '../user/user.struct';

export default interface IReview {
  title: string;
  content: string;
  author: IUser;
}
