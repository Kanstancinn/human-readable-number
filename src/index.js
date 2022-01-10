module.exports = function toReadable (number) {
    let str = String(number);
	let u = Number(str[str.length-1]);
	let d = Number(str[str.length-2]);
	let h = Number(str[str.length-3]);
function units (dig){
return dig == 1 ? 'one':
       dig == 2 ?  'two':
	   dig == 3 ?  'three':
	   dig == 4 ?  'four':
	   dig == 5 ?  'five':
	   dig == 6 ?  'six':
	   dig == 7 ?  'seven':
	   dig == 8 ?  'eight':
	   dig == 9 ?  'nine': 
	   dig == 10 ?  'ten':
	   dig == 11 ?  'eleven':
	   dig == 12 ?  'twelve':
	   dig == 13 ?  'thirteen':	   
	   dig == 14 ?  'fourteen':	 
	   dig == 15 ?  'fifteen':
	   dig == 16 ?  'sixteen':
	   dig == 17 ?  'seventeen':
	   dig == 18 ?  'eighteen':
	   dig == 19 ? 'nineteen': '';   
}
function dozens (doz){
return doz == 2 ? 'twenty':
		doz == 3 ? 'thirty':
		doz == 4 ? 'forty':
		doz == 5 ? 'fifty':
		doz == 6 ? 'sixty':
		doz == 7 ? 'seventy':
		doz == 8 ? 'eighty': 
		doz == 9 ? 'ninety': '';
}function hundreds (hund){
	return units(hund) + ' hundred';
}
let res = `${hundreds(h)} ${dozens(d)} ${units(u)}`;
if (number < 1) {return 'zero'};
if (number< 20) {return units(number)};
if (number < 100) {res = `${dozens(d)} ${units(u)}`};
if (d === 1 && number>99) {res = `${hundreds(h)} ${units(number%100)}`};
if (d === 0) {res =`${hundreds(h)} ${units(u)}`};
return res.trim();
}
