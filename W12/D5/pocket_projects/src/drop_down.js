import { htmlGenerator } from "./warmup";

const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/", 
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator (dogs) {
  const dogLinks = [];
  const dogArr = Object.keys(dogs);

  dogArr.forEach(dog => {
    const dogLi = document.createElement("li");
    const dogA = document.createElement("a");
    
    const dogName = dog;
    const dogLink = dogs[dog];
    
    dogA.innerHTML = dogName;
    dogA.href = dogLink;
    
    dogLi.classList.add("dog-link");
    
    dogLi.appendChild(dogA);
    dogLinks.push(dogLi);
  });

  return dogLinks;
}

function attachDogLinks() {
  const dogUl = document.querySelector(".drop-down-dog-list");
  const dogLinks = dogLinkCreator(dogs);

  dogLinks.forEach((link) => {
    dogUl.appendChild(link);
  });
}

attachDogLinks();

function handleEnter () {
  const dropDownLink = document.querySelectorAll(".dog-link")
  dropDownLink.forEach ((link) => {
    link.classList.add("open");
  });
}

function handleLeave() {
  const dropDownLink = document.querySelectorAll(".dog-link")
  dropDownLink.forEach((link) => {
    link.classList.remove("open");
  });
}

document.querySelector(".drop-down-dog-nav").addEventListener('mouseover', handleEnter);
document.querySelector(".drop-down-dog-nav").addEventListener('mouseout', handleLeave);