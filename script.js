//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

const downloadimage = (image)=>{
	return new Promise((resolve,reject)=>{
		const img = new Image();
	img.src=image.url;

		img.onload =()=>resolve(img);
		img.onerror=()=>reject(new Error(`failed to load image's URL ${image.url}`))
	})
}
btn.addEventListener("click",()=>{
	output.innerHTML='';

	Promise.all(images.map(downloadimage)).then((imageelements)=>{
		imageelements.forEach((img)=>{
			output.appendChild(img);
		})
	}).catch((error)=>{
		 output.innerHTML = `<p style="color: red;">${error.message}</p>`;
	})
})
