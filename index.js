fetch("https://api.npoint.io/e586363a2a218245c1c0")
.then(res => res.json())
.then(data => {
    var a = document.getElementById("list");
    data.forEach(element => {
        a.style.height="100%";
        a.style.width="100%";
        a.style.display="flex";
        var img1 = document.createElement("img");
        img1.src = element.images;
        img1.style.width="max-content";
        img1.style.height="100px";
        img1.style.display="block";
        img1.style.padding="10px";
        var div1 = document.createElement("div");
        var label1 = document.createElement("label");
        label1.innerHTML = `${element.name}`;
        div1.style.border="1px solid black";
        div1.style.display="block";
        div1.style.margin="5px";
        div1.style.width="max-content";
        div1.style.height= "max-content";
        div1.style.padding="5px 5px";
       
        div1.appendChild(img1);
        div1.appendChild(label1);
        a.appendChild(div1);
    });
});