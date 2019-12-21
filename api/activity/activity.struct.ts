import IReview from '../review/review.struct';

export default interface IActivity {
  name: string;
  agency: string;
  description: string;
  review: [IReview];
  thumbnail: string;
}