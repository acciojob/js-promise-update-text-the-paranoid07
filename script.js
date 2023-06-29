//your JS code here. If required.

function callme() {
	return new Promise((resolve)=>{
		setTimeOut(()=>{
			resolve("Hello, world!");
		},1000)
	})
}

callme().then( (data) => {
	const htmlDoc=document.getElementById("output");
	htmlDoc.innerText=data;
})
