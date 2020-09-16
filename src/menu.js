function renderItems($menu) {
  const menuItems = [
    {
      id: "pizza-mozza",
      imgSrc: "./images/pizza-mozzarella.png",
      description: "Pizza de mozzarella y albaca",
    },
    {
      id: "emp-carne",
      imgSrc: "./images/empanadas-carne.png",
      description: "Empanadas de carne",
    },
    {
      id: "pizza-longa",
      imgSrc: "./images/pizza-longaniza.png",
      description: "Pizza de mozzarella y longaniza",
    },
    {
      id: "pizza-provenzal",
      imgSrc: "./images/pizza-provenzal.png",
      description: "Pizza de provenzal",
    },
    {
      id: "pizza-brocoli",
      imgSrc: "./images/pizza-brocoli.png",
      description: "Pizza de brocoli",
    },
    {
      id: "pizza-anchoas",
      imgSrc: "./images/pizza-anchoas.png",
      description: "Pizza de anchoas",
    },
  ];

  menuItems.forEach((item) => {
    const $item = document.createElement("div");
    $item.setAttribute("id", `${item.id}`);
    $item.setAttribute("class", "item");
    const $itemImg = document.createElement("img");
    $itemImg.setAttribute("src", `${item.imgSrc}`);
    const $itemText = document.createElement("p");
    $itemText.innerText = `${item.description}`;
    $item.appendChild($itemImg);
    $item.appendChild($itemText);
    $menu.appendChild($item);
  });
}

export default function createMenu() {
  const $menu = document.createElement("div");
  $menu.setAttribute("id", "main-content-menu");
  renderItems($menu);

  return $menu;
}
