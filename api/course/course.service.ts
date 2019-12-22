import Axios from 'axios';
import ICourse from './course.struct';

export async function getMyCourse(): Promise<ICourse[]> {
  const { data } = await Axios.get<ICourse[]>('/course');

  return data;
}

export async function createCourse(
  title: string,
  body: string,
  thumbnail: string,
) {
  const { status } = await Axios
    .put('/course', { title, body, thumbnail });

  return Math.floor(status / 10) === 20;
}

export async function searchCourse(query: string): Promise<ICourse[]> {
  const { data } = await Axios
    .put<ICourse[]>(`/course/search/${encodeURI(query)}`);

  return data;
}

export async function getCourseById(id: string): Promise<ICourse> {
  const { data } = await Axios
    .get<ICourse>(`/course/${id}`);

  return data;
}

export async function addActivityById(id: string, activities: string[]) {
  const { status } = await Axios
    .put(`/course/${id}`, { activities });

  return Math.floor(status / 10) === 20;
}

export default {
  getMyCourse,
  createCourse,
  searchCourse,
  getCourseById
};