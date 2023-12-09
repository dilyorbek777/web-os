fetch("/data.json")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log(data.icons);
        data.icons.forEach(element => {
            document.querySelector("#pc-screen").innerHTML += `<div class="hover:bg-purple-300/20 hover:shadow-md hover:shadow-purple-400 icon-screen flex flex-col items-center justify-center  w-28 h-28 rounded-lg px-3">
        <img src="${element.img}" class="w-20" alt="">
        <p class="text-white font-medium">${element.name}</p>
    </div>`

        });
        data.taskbar.forEach(el => {
            document.getElementById("taskbar").innerHTML += `<div class="hover:bg-purple-300/20 hover:shadow-md hover:shadow-purple-400 flex flex-col items-center justify-center  h-full rounded-lg px-3">
            <img src="${el.img}" class="h-full" title="${el.name}" id=${el.name.split(" ").join("-").toLowerCase()} alt="">
        </div>`
        })

        data.social.forEach(el => {
            document.getElementById("icons-media").innerHTML += `   <div class="flex flex-col w-full items-center">
            <img src="${el.img}" class="w-16" alt="">
            <p class="text-white text-center">${el.name}</p>
        </div>`
        })
        task()
    })


function task() {
    document.getElementById("web-os").addEventListener('click', () => {
        document.querySelector("#fle").classList.toggle("flo")
        document.querySelector("#fle").classList.toggle("fle")
    })
}