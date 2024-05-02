const { default: gsap } = require("gsap");

window.onload = function () {
    const gallery = document.querySelector(".gallery");
    const preview = document.querySelector(".preview img");

    document.addEventListener("mousemove", (event) => {
        const x = event.clientX
        const y = event.clientY

        const centerX = window.innerWidth / 2
        const centerY = window.innerHeight / 2

        const percentX = (x - centerX) / (centerX )
        const percentY = (y - centerY) / (centerY )
        const rotateX = 55 + percentY *2
        const rotateY = percentX *2
        gsap.to(gallery, {
            duration:1,
            ease:"power2.out",
            rotateX: rotateX,
            rotateY: rotateY,
            overwrite:"auto"
        })
    })
    for (let i = 0;i<150;i++){
        const item = document.createElement("div")
        item.className = "item"
        const img = document.createElement("img")
        img.src = "/about/img"+ ((i%20)+1)+".jpeg"
        item.appendChild(img)
        gallery.appendChild(item)
    }
    const items = document.querySelectorAll(".item")
    const num = items.length
    const angleIncrement = 360 / num

    items.forEach((item, index) => {
        
        gsap.to(item, {
            rotationY:90,
            rotationZ: index * angleIncrement - 90,
            transformOrigin:"50% 400px", 
        })

    item.addEventListener("mouseenter", (event) => {
        const img = item.querySelector("img")
        preview.src = img.src

        gsap.to(item, {
            x:10,
            y:10,
            z:10,
            ease:"power2.out",
            duration:0.5,
        })
    })
    item.addEventListener("mouseout", (event) => {
        preview.src = "/about/img1.jpeg"
        gsap.to(item, {
            x:0,
            y:0,
            z:0,
            ease:"power2.out",
            duration:0.5,
        })
    })
})

ScrollTrigger.create({
    trigger: ".gallery",
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
    onRefresh: setupRotation,
    onUpdate: (self) => {
        const rotationProgress = self.progress * 360 *1;
        items.forEach((item, index) => {
            const currentAngle = index * angleIncrement -90 + rotationProgress

            gsap.to(item, {
                rotationZ: currentAngle,
                duration:1,
                ease:"power3.out",
                overwrite:"auto"
            })
        })
    }

  });
}
function setupRotation() {}