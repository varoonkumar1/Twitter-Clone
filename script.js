function sidebar() {
    const icons = [
        "Home",
        "Search",
        "Bell",
        "Addfriend",
        "Message",
        "Grok",
        "Logo",
        "Person",
        "More",
    ];

    const sideBar = document.getElementsByClassName("first")[0].getElementsByClassName("icon")[0]

    for (let i = 0; i < icons.length; i++) {
        sideBar.innerHTML += `
                <li class="icons flex font-normal text-white gap-4 items-center p-2 mr-2 md:m-0 rounded-3xl transition-colors duration-300"><img src="icons/${icons[i].toLowerCase()}.svg" alt="" srcset=""><span class="hidden md:block">${icons[i]}</span></li>`
        
    }
    sideBar.innerHTML += `<button class="post bg-white p-2 size-9 rounded-full m-2 font-semibold text-black md:p-0 md:px-20 flex items-center justify-center md:rounded-3xl"><img class="md:hidden" src="icons/leaf.svg" alt="" srcset=""><span class="hidden md:flex">Post</span></button>`

}

function postIcons() {
    const icons = [
        "image",
        "gif",
        "grok",
        "options",
        "smile",
        "calender",
    ];

    const postIcon = document.getElementsByClassName("postIcon")[0]
    for (let i = 0; i < icons.length; i++) {
        postIcon.innerHTML += `
                <li class="posticons rounded-full p-1"><img src="icons/postIcons/${icons[i]}.svg" alt="" srcset=""></li>`
    }
}

function posted(){
    const post = document.getElementsByClassName("posted")[0]
    for(let i = 1; i < 6; i++){
        post.innerHTML += `<div class="border-gray-500 border border-t-0">
                <div class=" flex justify-between items-start p-2">
                    <div class="flex items-center gap-1">
                        <img class="rounded-full w-8 h-8 object-fill" src="download.jfif" alt="">
                        <div>
                            <span class="flex gap-1">
                                <span class="text-white text-[10px]">Massimo</span>
                                <span class="text-gray-600 text-[10px]">@Rainmaker12347</span>
                            </span>
                            <div class="text-white text-[10px] font-light">Driving licence test</div>
                        </div>
                    </div>
                    <img class="icons rounded-full p-1" src="icons/moreb.svg" alt="">

                </div>
                <div class="ml-7 m-2 border border-gray-500 rounded-2xl overflow-hidden w-3/4 h-3/4 ">
                    <img class="object-contain w-full h-full" src="posted/img${i}.jfif" alt="">
                </div>
                <div class="pl-8 flex items-start justify-between m-1">
                    <ul class="flex justify-between w-4/5 ">
                        <li class="comment text-gray-500 text-[10px] flex items-center"><img
                                class="comment  rounded-full p-1" src="icons/comment.svg" alt="">219</li>
                        <li class="repost text-gray-500 text-[10px] flex items-center"><img
                                class="repost rounded-full p-1" src="icons/repost.svg" alt="">219</li>
                        <li class="like text-gray-500 text-[10px] flex items-center"><img class="like rounded-full p-1"
                                src="icons/like.svg" alt="">219</li>
                        <li class="comment text-gray-500 text-[10px] flex items-center"><img
                                class="comment  rounded-full p-1" src="icons/Impression.svg" alt="">219</li>

                    </ul>
                    <ul class="flex">
                        <li class="comment text-gray-500 text-[10px] flex"><img class="comment rounded-full p-1"
                                src="icons/save.svg" alt=""></li>
                        <li class="comment text-gray-500 text-[10px] flex"><img class="comment rounded-full p-1"
                                src="icons/upload.svg" alt=""></li>
                    </ul>
                </div>
            </div>`
    }
}

sidebar()
postIcons()
posted()