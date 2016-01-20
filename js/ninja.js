export default class Ninja {
	constructor(name) {
		this.name = name;
	}

	attack() {
		console.log(this.name + ": attacked once.");
	}
}