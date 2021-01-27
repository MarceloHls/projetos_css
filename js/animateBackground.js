function bubbles(){
    const count = 200;
    const local = document.querySelector(".containerBubles")
    for(let i = 0; i < count; i++){

        let bubble = document.createElement("div");
        bubble.classList.add("bubble")
        let x = Math.floor(Math.random() * window.innerWidth * 2);
        let y = Math.floor(Math.random() * window.innerHeight * 2);

        bubble.style.left = `${y}px`;
        bubble.style.top = `${x}px`;
        bubble.style.height = `${40}px`;
        bubble.style.width = `${40}px`;

        local.appendChild(bubble)

    }
}

bubbles()