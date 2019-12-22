import Axios from '../axios';
import IActivity from './activity.struct';

export async function addActivity(
  title: string,
  description: string,
  image: string,
  agency: string|null = null,
) {
  const { status } = await Axios.put('/activity', {
    title,
    description, // tslint:disable-line: object-literal-sort-keys
    image,
    agency,
  });

  return Math.floor(status / 10) === 20;
}

export async function getMyActivity(): Promise<IActivity[]> {
  const { data } = await Axios
    .get<IActivity[]>('/activity');

  return data;
}

export async function getActivityById(id: string) {
  const { data } = await Axios
    .get<IActivity>(`/activity/${id}`);

  return data;
}

export async function getActivitySearch(name: string): Promise<IActivity[]> {
  const { data } = await Axios
    .get<IActivity[]>(`/activity/search/${encodeURI(name)}`);

  return data;
}

export default {
  addActivity,
  getMyActivity,
  getActivityById,
  getActivitySearch
};
