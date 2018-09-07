
function compareABC(A, B, C){
	let resA = A * C;
	let resB = B;
	let tax = 0.1;
	return resA * (1 - tax) - resB
}
console.log('Res : ' + compareABC(4228, 90790, 22.11));
