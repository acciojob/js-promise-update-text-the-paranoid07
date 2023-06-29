function callme() {
	return new Promise(resolve => {
        setTimeout(()=>{

            resolve("Hello, world!");
        },1000)
    })
}

callme().then( (data) => {
	const htmlDoc=document.getElementById("output");
	htmlDoc.innerText=data;
})

callme();