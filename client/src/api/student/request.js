import index from './index';

const api_newStudent = async (value) => {
  try {
    const { data } = await index.createStudent(value);
    console.log(data, 'succes');
  } catch (error) {
    console.log(error);
  }
};

export { api_newStudent };
