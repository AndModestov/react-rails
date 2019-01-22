function runSafe(cb) {
  try {
    return cb();
  }
  catch(e) {
  }
}

export function saveBasket(basket = []) {
  runSafe(() => localStorage["basket"] = JSON.stringify(basket));
}

export function getBasket() {
  let basket = runSafe(() => JSON.parse(localStorage["basket"]));
  return basket || [];
}
