const min_price = document.getElementById("minprice");
const max_price = document.getElementById("maxprice");
const priceRange = document.getElementById("price-range");

function updatePriceRange() {
  const min = parseInt(min_price.value);
  const max = parseInt(max_price.value);
  if (min > max) {
    min_price.value = max;
  } else if (max < min) {
    max_price.value = min;
  }
  priceRange.textContent = `${min_price.value}-${max_price.value}`;
  min_price.addEventListener("input", updatePriceRange);
  max_price.addEventListener("input", updatePriceRange);
  updatePriceRange();
}
