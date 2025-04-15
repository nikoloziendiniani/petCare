
const dogs = [
    {
        name: "Golden Retriever",
        src: "https://media.npr.org/assets/img/2019/10/25/dog-1_custom-b4535cb019d318a5abced07fa0a4e05b635e448f.jpg",
        text: "Buddy is a playful golden retriever who loves fetching balls."
    },
    {
        name: "Husky",
        src: "https://th.bing.com/th/id/R.8a040b14a7e8372b2f32a5dd47d154fb?rik=YFNxjVqANrO2Lw&riu=http%3a%2f%2fwww.indiacelebrating.com%2fwp-content%2fuploads%2fDog.jpg&ehk=jEjwMK%2fow5DHuKJR%2fJIvCoqot5abXJG0w%2bxDDOK86PM%3d&risl=&pid=ImgRaw&r=0",
        text: "Luna is a curious husky with striking blue eyes and a mischievous personality."
    },
    {
        name: "Beagle",
        src: "https://th.bing.com/th/id/OIP.nEIjlERWWT1xcTLko5-JAwHaFH?rs=1&pid=ImgDetMain",
        text: "Charlie is a friendly beagle who enjoys sniffing around the park."
    },
    {
        name: "German Shepherd",
        src: "https://media.npr.org/assets/img/2013/07/10/istock-3422492-dog-beach-australia_wide-4d5305b7b208a606a484dd33ddbf243fa190c79e.jpg?s=1400",
        text: "Max is a loyal German shepherd trained in search and rescue."
    },
    {
        name: "Dachshund",
        src: "https://th.bing.com/th/id/OIP.iJZH4BI5dTW82evprTpbBAHaE7?rs=1&pid=ImgDetMain",
        text: "Bella is a small but brave dachshund who loves cuddles."
    },
    {
        name: "Border Collie",
        src: "https://s.abcnews.com/images/Lifestyle/231115_abcnl_930am_dogvirus_hpMain_16x9_1600.jpg",
        text: "Rocky is an energetic border collie who excels in agility training."
    }
];

const cats = [
    {
        name: "Tabby",
        src: "https://placehold.co/100x100",
        text: "Whiskers is a playful tabby cat who loves chasing laser pointers."
    },
    {
        name: "Persian",
        src: "https://placehold.co/100x100",
        text: "Mittens is a fluffy Persian cat who enjoys lounging in the sun."
    },
    {
        name: "Black Cat",
        src: "https://placehold.co/100x100",
        text: "Shadow is a sneaky black cat who loves to hide in unexpected places."
    },
    {
        name: "Maine Coon",
        src: "https://placehold.co/100x100",
        text: "Simba is a majestic Maine Coon with a lion-like mane."
    },
    {
        name: "Siamese",
        src: "https://placehold.co/100x100",
        text: "Luna is a curious Siamese cat who enjoys chatting with her humans."
    },
    {
        name: "Orange Tabby",
        src: "https://placehold.co/100x100",
        text: "Garfield is a lazy orange cat who is obsessed with lasagna."
    }
];

const parrots = [
    {
        name: "Blue Macaw",
        src: "https://placehold.co/100x100",
        text: "Rio is a vibrant blue macaw who loves to dance."
    },
    {
        name: "Green Parrot",
        src: "https://placehold.co/100x100",
        text: "Polly is a classic green parrot who enjoys mimicking words."
    },
    {
        name: "African Grey",
        src: "https://placehold.co/100x100",
        text: "Coco is a playful African grey with an incredible vocabulary."
    },
    {
        name: "Parakeet",
        src: "https://placehold.co/100x100",
        text: "Kiwi is a colorful parakeet who loves chirping along to music."
    },
    {
        name: "Sun Conure",
        src: "https://placehold.co/100x100",
        text: "Sunny is a cheerful sun conure with a bright orange and yellow coat."
    },
    {
        name: "Amazon Parrot",
        src: "https://placehold.co/100x100",
        text: "Mango is a curious Amazon parrot that enjoys solving puzzles."
    }
];


const animalsContainer = document.getElementById("animals")
const iconDog = document.getElementById("icon-1")
const iconCat = document.getElementById("icon-2")
const iconParrot = document.getElementById("icon-3")

var dog = dogs.map((val, index) => {
    const dogCard = document.createElement("div");
    const dogName = document.createElement("div");
    const dogImgContainer = document.createElement("div");
    const dogImg = document.createElement("img");
    const dogText = document.createElement("div");

    dogCard.classList.add("card");
    dogName.classList.add("title");
    dogImgContainer.classList.add("image");
    dogText.classList.add("text")

    dogName.textContent = val.name;
    dogImg.src = val.src;
    dogText.textContent = val.text

    dogCard.append(dogName, dogImgContainer, dogText);
    dogImgContainer.appendChild(dogImg);

    return dogCard
})

var cat = cats.map((val, index) => {
    const catCard = document.createElement("div");
    const catName = document.createElement("div");
    const catImgContainer = document.createElement("div");
    const catImg = document.createElement("img");
    const catText = document.createElement("div");

    catCard.classList.add("card");
    catName.classList.add("title");
    catImgContainer.classList.add("image");
    catText.classList.add("text")

    catName.textContent = val.name;
    catImg.src = val.src;
    catText.textContent = val.text

    catCard.append(catName, catImgContainer, catText);
    catImgContainer.appendChild(catImg);

    return catCard
})

var parrot = parrots.map((val, index) => {
    const parrotCard = document.createElement("div");
    const parrotName = document.createElement("div");
    const parrotImgContainer = document.createElement("div");
    const parrotImg = document.createElement("img");
    const parrotText = document.createElement("div");

    parrotCard.classList.add("card");
    parrotName.classList.add("title");
    parrotImgContainer.classList.add("image");
    parrotText.classList.add("text")

    parrotName.textContent = val.name;
    parrotImg.src = val.src;
    parrotText.textContent = val.text

    parrotCard.append(parrotName, parrotImgContainer, parrotText);
    parrotImgContainer.appendChild(parrotImg);

    return parrotCard
})



function add(cards) {
    if(cards === dog){
        iconDog.classList.add("active");
        iconCat.classList.remove("active");
        iconParrot.classList.remove("active");
    }else if(cards === cat){
        iconCat.classList.add("active");
        iconDog.classList.remove("active");
        iconParrot.classList.remove("active");
    }else{
        iconParrot.classList.add("active");
        iconDog.classList.remove("active");
        iconCat.classList.remove("active");
    }

    animalsContainer.innerHTML = ""
    cards.map((card) => {
        animalsContainer.appendChild(card)
    })
}
console.log(dog)
add(dog)


