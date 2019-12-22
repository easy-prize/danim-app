import IActivity from '../activity/activity.struct';
import ILink from '../link/link.struct';
import IReview from '../review/review.struct';
import IThumbnail from '../thumbnail/thumbnail.struct';
import IUser from '../user/user.struct';

export default interface ICourse {
  name: string;
  activities: [IActivity];
  author: IUser;
  reviews: [IReview];
  thumbnails: [IThumbnail];
  links: [ILink];
}
