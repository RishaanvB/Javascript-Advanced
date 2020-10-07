function huiswerkMaken(vak, callback) {
	console.log(`1:Ok, ok ik ga nu mijn ${vak} huiswerk maken.`);
	

	 setTimeout(()=> {callback()}, 1000);

}
function klaarMetHuiswerk() {
	console.log(`6:Kijk! Ik ben klaar met mijn huiswerk`);
}
huiswerkMaken("wiskunde", klaarMetHuiswerk);
