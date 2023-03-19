window.getAvailableProducts = function() {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    function getRandomItem(availableProductNames) {
      return availableProductNames[
        getRandomInt(0, availableProductNames.length - 1)
      ];
    }
  
    function getRandomProductname() {
      const preWords = [
        "Delicious",
        "Sparkling",
        "Classic",
        "Refreshing",
        "Satisfying",
        "Premium",
        "Organic",
        "Homemade",
        "Nutritious"
      ];
      const productNames = [
        "Pizza",
        "Phone case",
        "Earrings",
        "Laptop",
        "Water bottle",
        "Headphones",
        "Backpack",
        "Smartwatch",
        "Fitness tracker",
        "Television",
        "Coffee maker",
        "Guitar",
        "Camera",
        "Vacuum cleaner",
        "Air purifier"
      ];
  
      let chosenProductName = getRandomItem(productNames);
      const shouldHavePreWord = getRandomInt(0, 10) > 6;
  
      if (shouldHavePreWord) {
        const preWord = preWords[getRandomInt(0, preWords.length - 1)];
        chosenProductName = `${preWord} ${chosenProductName}`;
      }
  
      return chosenProductName;
    }
  
    const numberOfAvailableProducts = getRandomInt(0, 30);
    const availableProducts = Array.apply(
      null,
      Array(numberOfAvailableProducts)
    ).map(() => {
      const name = getRandomProductname();
      return {
        id: `${name}${getRandomInt(0, 100000)}`,
        name,
        price: getRandomInt(0, 10000),
        rating: getRandomInt(1, 10)
      };
    });
  
    return availableProducts;
  };
  