import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export default async function request(subject) {
    const { data } = await axios(`${baseUrl}/${subject}`);

    return data;
}
