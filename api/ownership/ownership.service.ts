import Axios from '../axios';
import IOwnership from './ownership.struct';

export async function getOwnerships(): Promise<IOwnership[]> {
  const { data } = await Axios
    .get<IOwnership[]>('/ownership');

  return data;
}

export async function getNewOwnership(courseId: string) {
  const { status } = await Axios
    .put(`/ownership/new/${courseId}`);

  return Math.floor(status / 10) === 20;
}

export async function setUse(courseId: string) {
  const { status } = await Axios
    .get(`/ownership/${courseId}/use`);

  return Math.floor(status / 10) === 20;
}

export default {
  getOwnerships,
  // tslint:disable-next-line: object-literal-sort-keys
  getNewOwnership,
  setUse,
};
