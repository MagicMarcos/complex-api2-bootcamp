// const url = 'https://api.icndb.com/jokes/random?firstName=John&lastName=Doe';
document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
	const url = ' https://api.quotable.io/random	';
	fetch(url)
		.then(res => res.json())
		.then(data => nameGetter(data))
		.catch(err => console.log(err));
}

function nameGetter(data) {
	console.log(data.authorSlug);
	let str = data.authorSlug.split('-');
	console.log(str);
	let firstName = str[0];
	let lastName = str[str.length - 1];
	firstName = firstName[0].toUpperCase() + firstName.slice(1);
	lastName = lastName[0].toUpperCase() + lastName.slice(1);
	if (firstName === lastName) {
		lastName = '';
	}

	console.log(firstName, lastName);
	getJoke(firstName, lastName);
}

function getJoke(firstName, lastName) {
	fetch(
		`https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
	)
		.then(res => res.json())
		.then(data => {
			document.querySelector('.jokes').innerText = data.value.joke;
		})
		.catch(err => console.log(err));
}
