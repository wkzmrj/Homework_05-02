export function addItem(item, next) {
  let cart = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.push({
      ...item,
      count: 1,
    });
    cart = Array.from(new Set(cart.map((product) => product._id))).map((id) =>
      cart.find((product) => product._id === id)
    );
    localStorage.setItem("cart", JSON.stringify(cart));
    next && next();
  }
}

export function getCart() {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart"));
    }
  }
  return [];
}

export function updateItem(productId, count) {
  let cart = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
      const target = cart.find((product) => product._id === productId);
      target.count = count;
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
  return cart;
}

export function deleteItem(productId) {
  let cart = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
      const index = cart.findIndex((product) => product._id === productId);
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
  return cart;
}
