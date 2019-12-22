import IThumbnail from '../thumbnail/thumbnail.struct';

export default interface ILink {
  activity: string;
  name: string;
  description: string;
  thumbnail: [IThumbnail];
}
