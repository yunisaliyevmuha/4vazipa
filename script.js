const mainContain = document.querySelector("#container-1");
const mainContain2 = document.querySelector("#container-2");
const addCardBtn = document.getElementById("add-card-btn");
const cardsContainer = document.querySelector(".cards-container");
const popupContainer = document.getElementById("popup-container");
const popup = document.querySelector(".popup");
const cancelBtn = document.getElementById("cancel");
const addCardBtnPopup = document.getElementById("add-card");
const noitem = document.querySelector(".no-item");
const heading = document.querySelector("#head");
const newText = document.querySelector("#new-text");
const head2 = document.querySelector("#head-2");


let cards = []; 


displayCards(); 


addCardBtn.addEventListener("click", () => {
  popupContainer.style.display = "block";
  noitem.style.display = "none";
});


cancelBtn.addEventListener("click", () => {
  popupContainer.style.display = "none";
});


addCardBtnPopup.addEventListener("click", () => {
  const cardName = document.getElementById("card-name").value;


  if (cardName !== "") {
    
    const card = {
      id: new Date().getTime().toString(),
      name: cardName,
      subItems: [], 
    };

    cards.push(card);

    
    document.getElementById("card-name").value = "";

    popupContainer.style.display = "none";

    
    displayCards();
  }
});


function displayCards() {

  cardsContainer.innerHTML = "";

  cards.forEach((card, index) => {
    


    
    const editBtn = cardElement.querySelector(".edit-btn");
    editBtn.addEventListener("click", () => {
      editCard(index);
    });

    const deleteBtn = cardElement.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      deleteCard(index);
    });

    const addSubItemBtn = cardElement.querySelector(".add-sub-item-btn");
    addSubItemBtn.addEventListener("click", () => {
      addSubItem(index);
    });

   
    const subItemsContainer = cardElement.querySelector(".sub-items");
    card.subItems.forEach((subItem) => {
      const subItemElement = document.createElement("li");


     
      const subItemEditBtn = subItemElement.querySelector(".edit-btn");
      subItemEditBtn.addEventListener("click", () => {
        editSubItem(index, subItem);
      });

      const subItemDeleteBtn = subItemElement.querySelector(".delete-btn");
      subItemDeleteBtn.addEventListener("click", () => {
        deleteSubItem(index, subItem);
      });
      const done = subItemElement.querySelector(".done");
      const dones = subItemElement.querySelector(".dones");
      const subBtn1 = subItemElement.querySelector(".sub-btn-1");
      const subBtn2 = subItemElement.querySelector(".sub-btn-2");
      const line = subItemElement.querySelector("#line");
     
      done.addEventListener("click", () => {
        dones.style.boeder = "none";
        dones.style.backgroundColor = "green";
        subBtn1.style.display = "none";
        subBtn2.style.display = "none";
        line.style.textDecoration = "line-through";
        done.style.marginTop = "2px";
      });
      subItemsContainer.appendChild(subItemElement);
    });

    cardsContainer.appendChild(cardElement);
  });
}

// edit a card
function editCard(index) {
  const card = cards[index];
  const cardName = prompt("Ochirvor mochimosiz:", card.name);

  if (cardName !== null) {
    card.name = cardName;

    displayCards();
  }
}

function deleteCard(index) {
  if (confirm("Ochirvor mochimosiz")) {
    cards.splice(index, 1);
    displayCards();
  }
}


function addSubItem(index) {
  const card = cards[index];
  const subItemName = prompt("Enter sub-item name:");

  if (subItemName !== null) {
    const subItem = {
      name: subItemName,
    };
    card.subItems.push(subItem);

    displayCards();
  }
}

function editSubItem(cardIndex, subItem) {
  const subItemName = prompt("Enter new sub-item name:", subItem.name);

  if (subItemName !== null) {
    subItem.name = subItemName;

    displayCards();
  }
}

function deleteSubItem(cardIndex, subItem) {
  if (confirm("Ochirvor mochimosiz")) {
    const card = cards[cardIndex];
    const subItemIndex = card.subItems.indexOf(subItem);
    card.subItems.splice(subItemIndex, 1);

    
    displayCards();
  }

function changelayout() {

  const cardElement = event.target.parentElement;

 
  if (cardElement.classList.contains("expanded")) {
   
    cardElement.classList.remove("expanded");
  } else {

    cardElement.classList.add("expanded");
  }
}
function back() {
  mainContain2.style.display = "none";
  mainContain.style.display = "block";
  const cards = document.querySelectorAll(".card");
  cards.forEach((allcards) => {
    allcards.style.display = "block";
  });
}
