export function shuffle<T>(values: readonly T[]): T[] {
	const array = [...values];

	let currentIndex = array.length;
	let temporaryValue: T;
	let randomIndex: number;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex]!;
		array[currentIndex] = array[randomIndex]!;
		array[randomIndex] = temporaryValue;
	}

	return array;
}
