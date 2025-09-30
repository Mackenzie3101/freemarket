document.addEventListener("DOMContentLoaded", () => {
  const itemsContainer = document.getElementById("itemsContainer");

  // Get items from localStorage
  let items = JSON.parse(localStorage.getItem("items")) || [];

  if (items.length === 0) {
    itemsContainer.innerHTML = "<p>No items available yet. Add one!</p>";
    return;
  }

  // Loop through items and create cards
  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("item-card");

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>$${item.price}</p>
      <a href="item.html?id=${item.id}">View Item</a>
    `;

    itemsContainer.appendChild(card);
  });
});
