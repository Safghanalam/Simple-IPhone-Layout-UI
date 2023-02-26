let btn = document.getElementById('btn');
let wallpaper = document.getElementById('wallpaper');
let icons = document.getElementsByClassName('icon_icon');


// btn.addEventListener('click',fucntion toggle()=>{
//     if(btn.style.backgroundColor!=('white'){
//         btn.style.backgroundColor!=('white');
//     }
//     else{
//         btn.style.backgroundColor!=('black');
//     }
// })

// function toggle(){
//     if(btn.style.backgroundColor==('white')){
//         btn.style.backgroundColor=('black');
//         btn.style.color=('white');
//     }
//     else{
//         btn.style.backgroundColor=('white');
//         btn.style.color=('black');
//     }
// }

btn.addEventListener('click',()=>{
    if(btn.style.backgroundColor==('white')){
        btn.style.backgroundColor=('black');
        btn.style.color=('white');

    }
    else{
        btn.style.backgroundColor=('white');
        btn.style.color=('black');
    }
})


function togglewall(){
    if(btn.style.backgroundColor==('white')){
        wallpaper.setAttribute('src','./Images/wall1.jpeg');
    }
    else{
        wallpaper.setAttribute('src','./Images/wall2.jpg');
    }
}

for (let index = 0; index < icons.length; index++) {
    icons[index].addEventListener('click',()=>{
        console.log("clicked")
    })
}