export function calculateScrabbleScore(word) {
	const point1 = ["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"];
	const point2 = ["D", "G"];
	const point3 = ["B", "C", "M", "P"];
	const point4 = ["F", "H", "V", "W", "Y"];
	const point5 = ["K"];
	const point6 = ["J", "X"];
	const point7 = ["Q", "Z"];
	const points = [point1, point2, point3, point4, point5, point6, point7];
	let pointsIndex = 0;

	for (let i = 0; i <= points[pointsIndex].length; i++) {
		console.log(points[pointsIndex][i]);
		if (word === points[pointsIndex][i]) {
			return 1;
		}
	}

	// if (word === "A") {
	// 	return 1;
	// } else if (word === "B") {
	// 	return 3;
	// }
}

// 1 = A, E, I, L, N, O, R, S, T, U
// 2 = D, G
// 3 = B, C, M, P
// 4 = F, H, V, W, Y
// 5 = K
// 8 = J, X
// 10 = Q, Z
