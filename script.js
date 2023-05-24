function getFormvalue() {
    let arr = document.getElementsByTagName("input");
	let str = arr[0].value + " " + arr[1].value;
	alert(`${str}`);

}
