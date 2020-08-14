const baseUrl = 'http://localhost:5000';

export default async function request(subject) {
    const response = await fetch(`${baseUrl}/${subject}`);
    const data = await response.json();

    return data;
}
