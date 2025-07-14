fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
	res.json().then((data) => console.log(data))
);

async function getToDos(){
	const response = await fetch("https://jsonplaceholder.typicode.com/todos"); // javascript will not move onto next line when 'await' exists
	const data = await response.json();
	console.log(data)
}

getToDos();