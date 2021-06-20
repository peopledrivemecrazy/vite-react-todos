const URL = "https://jsonplaceholder.typicode.com/todos/"; //query=2|3|4

export async function getData(pageNum) {
  return await fetch(URL + pageNum).then((r) => r.json());
}
