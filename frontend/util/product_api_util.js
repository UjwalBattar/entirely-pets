export const fetchProducts = filters => {
  return $.ajax({
    method: "GET",
    url: "/api/products",
    data: { filters }
  });
};
