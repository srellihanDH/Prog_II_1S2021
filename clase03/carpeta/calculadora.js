const eze = {
    sumar: (a,b) => a+b,
    restar: (a,b) => a-b,
    multiplicar: (a,b) => a*b,
    dividir: (a,b) => {
		if(b == 0)
			return a;
		else     
			return a/b;
		}
}

module.exports = eze;
