document.addEventListener("DOMContentLoaded", () => {
  const itemDetails = document.getElementById("itemDetails");

  // Get item ID from URL
  const params = new URLSearchParams(window.location.search);
  const itemId = params.get("id");

  // Get items from localStorage
  let items = JSON.parse(localStorage.getItem("items")) || [];

  // Find the item by ID
  const item = items.find(i => i.id == itemId);

  if (!item) {
    itemDetails.innerHTML = "<p>Item not found.</p>";
    return;
  }

  // Render item details
  itemDetails.innerHTML = `
    <div class="item-card">
      <img src="${item.image}" alt="${item.title}">
      <h2>${item.title}</h2>
      <p><strong>Price:</strong> $${item.price}</p>
      <p><strong>Description:</strong> ${item.description}</p>
      <button id="contactSellerBtn">Contact Seller</button>
    </div>
  `;

  // Contact Seller button (placeholder)
  const contactBtn = document.getElementById("contactSellerBtn");
  contactBtn.addEventListener("click", () => {
    alert("Contacting seller feature coming soon!");
  });
});
