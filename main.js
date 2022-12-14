import "./style.css";

//inputs
let nameProduct = document.querySelector("#nameProduct");
let amountProduct = document.querySelector("#amountProduct");
let priceProduct = document.querySelector("#priceProduct");
let percentProduct = document.querySelector("#percentProduct");

//list
let productList = document.querySelector("#productList");

class Product {
  constructor(name, amount, price, percent) {
    this.name = name;
    this.amount = amount;
    this.price = price;
    this.percent = percent;
  }
}

let products = [
  {name: 'Feijão', amount: 0, price: 6.20, percent: 0},
  {name: 'Batata', amount: 10, price: 5.50, percent: 0}
];

let productsSelling = []

let buttonSubmit = document.querySelector("#addProduct");
buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    nameProduct.value == "" ||
    amountProduct.value == "" ||
    priceProduct.value == "" ||
    percentProduct.value == ""
  ) {
    alert("Preencha os campos.");
  } else {
    let product = new Product(
      nameProduct.value,
      amountProduct.value,
      priceProduct.value,
      percentProduct.value
    );

    products.push(product);

    //Criação da lista
    let trItem = document.createElement("tr");
    let tdId = document.createElement("td");
    let tdName = document.createElement("td");
    let tdAmount = document.createElement("td");
    let tdPrice = document.createElement("td");
    let tdPercent = document.createElement("td");

    products.forEach((element, index) => {
      tdId.setAttribute("class", "w-1/3 text-left py-3 px-4");
      tdId.innerText = index + 1;
      trItem.appendChild(tdId);

      tdName.setAttribute("class", "w-1/3 text-left py-3 px-4");
      tdName.innerText = element.name;
      trItem.appendChild(tdName);

      tdAmount.setAttribute("class", "text-center py-3 px-4");
      tdAmount.innerText = element.amount;
      trItem.appendChild(tdAmount);

      tdPrice.setAttribute("class", "text-center py-3 px-4");
      tdPrice.innerText = `R$${element.price}`;
      trItem.appendChild(tdPrice);

      tdPercent.setAttribute("class", "text-center py-3 px-4");
      tdPercent.innerText = `${element.percent}%`;
      trItem.appendChild(tdPercent);

      productList.appendChild(trItem);
    });

    nameProduct.value = "";
    amountProduct.value = "";
    priceProduct.value = "";
    percentProduct.value = "";
    nameProduct.focus();
  }
});

let IdProductSell = document.querySelector("#IdProductSell");
let nameProductSell = document.querySelector("#nameProductSell");

IdProductSell.addEventListener("change", () => {
  products.forEach((element, index) => {
    if (IdProductSell.value == index + 1) {
      nameProductSell.value = element.name;
    }
  });
});

let productListSell = document.querySelector("#productListSell");
let sellProduct = document.querySelector("#sellProduct");
let amountProductSell = document.querySelector("#amountProductSell");

// sellProduct.addEventListener("click", () => {
//   products.forEach((element, index) => {
//     if(IdProductSell.value == index + 1 && element.amount > 0){
//       element.amount -= amountProductSell.value;
//       productsSelling.push(element);
//       console.log(productsSelling)
//       console.log(`Estoque atualizado: ${element.name} ${element.amount}`);
//     } else{
//       alert("Produto sem estoque");
//     }
//   });
// });

//----- Modal ------
let modal = document.querySelector("#my-modal");
let modalSale = document.querySelector("#modalSale");
let openSaveModal = document.querySelector("#open-btn");
let xCloseModal = document.querySelector("#XcloseModal");

let openSaleModal = document.querySelector("#openModalSale");
let xCloseModalSell = document.querySelector("#xCloseModalSell");
let cancelCloseModalSell = document.querySelector("#cancelCloseModalSell");

openSaveModal.addEventListener("click", () => {
  modal.style.display = "block";
});

xCloseModal.addEventListener("click", () => {
  modal.style.display = "none";
});

cancelCloseModal.addEventListener("click", () => {
  modal.style.display = "none";
});

openSaleModal.addEventListener("click", () => {
  modalSale.style.display = "block";
});

xCloseModalSell.addEventListener("click", () => {
  modalSale.style.display = "none";
});

cancelCloseModalSell.addEventListener("click", () => {
  modalSale.style.display = "none";
});
//-----  ------
