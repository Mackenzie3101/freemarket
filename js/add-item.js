document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("addItemForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Collect input values
    const title = document.getElementById("title").value.trim();
    const price = document.getElementById("price").value.trim();
    const description = document.getElementById("description").value.trim();
    const image = document.getElementById("image").value.trim() || "https://via.placeholder.com/150";

    // Create new item object
    const newItem = {
      id: Date.now(), // unique id
      title,
      price,
      description,
      image
    };

    // Get existing items from localStorage
    let items = JSON.parse(localStorage.getItem("items")) || [];

    // Add new item to array
    items.push(newItem);

    // Save back to localStorage
    localStorage.setItem("items", JSON.stringify(items));

    // Redirect to marketplace
    window.location.href = "marketplace.html";
  });
});
