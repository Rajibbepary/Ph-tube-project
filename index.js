

function getTimeString(time){
    //const day = parseInt(time / 86400 )
    const hour = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;

    return`${hour}hrs ${minute}min ${remainingSecond} sec ago`;
}




const loadCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error))
}

const loadCategoryVideos = (id) => {
    //alert(id);

    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => {

    const activeBtn = document.getElementById(`btn-${id}`);
        activeBtn.classList.add("active");
        displayVideos(data.category);
    })
    .catch((error) => console.log(error))
}


const displayCategories = (categories) => {
const categoryContainer = document.getElementById('categories')

categories.forEach((item) => {
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
    <button id='btn-${item.category_id}' onclick='loadCategoryVideos(${item.category_id})' class='btn category-btn'>${item.category}</button>
    `
    categoryContainer.append(buttonContainer);
});
};

loadCategories();

//displayCategories();





//create video categories 

const loadVideos = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error))
}



const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos');
    videoContainer.innerHTML = "";

if(videos.length == 0){
    videoContainer.classList.remove('grid');
    videoContainer.innerHTML =`
    <div class="min-h-[300px] flex flex-col gap-5 justify-center items-center">

    <img src="img/Icon.png"/>
    <h2 class="text-xl text-center font-bold">No  Content Here in this Category</h2>
    </div>
    `;
}else{
    videoContainer.classList.add('grid');
}

    videos.forEach((video) => {
        console.log(video);
        const card = document.createElement("div");
        card.classList = "card card-compact";
        card.innerHTML = `
        <figure class="h-[200px] relative">
    <img
      src=${video.thumbnail}
      alt="Shoes" class = "h-full w-full object-cover" />

      ${video.others.posted_date?.length == 0?"" :`<span class="absolute right-2 bottom-2 bg-black rounded p-1 text-white text-[11px]">${getTimeString(video.others.posted_date)}</span>`}
      
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
    <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} />
    </div>
        <div>
        <h2 class="font-bold">${video.title}</h2>
        <div class= "flex items-center gap-2">
        <P class="text-gray-400">${video.authors[0].profile_name}</P>
        ${video.authors[0].verified == true? "<img class='w-5' src = 'https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png'/>" :" "}
        </div>
        </div>

  </div>
        `;
        videoContainer.append(card);
    }) ;
};

loadVideos();

displayVideos();

