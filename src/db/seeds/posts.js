/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("posts").del();
  await knex("posts").insert([
    {
      id: 1,
      user_id: 1,
      name: "Smoothie Inspired",
      price: 25,
      rating: 4,
      image_src:
        "https://c4.wallpaperflare.com/wallpaper/388/379/791/flowers-food-icecream-macro-wallpaper-preview.jpg",
      details:
        "This smoothie-like ice cream is a delicious and healthy treat that's perfect for a hot summer day. Made with frozen bananas, berries, milk, and a touch of honey and vanilla extract, this recipe is easy to make and customizable to your taste preferences. Whether you're looking for a dairy-free alternative or simply want a refreshing dessert, this recipe is sure to satisfy your sweet tooth. Plus, you can add your favorite toppings like fresh berries, chopped nuts, or chocolate chips to make it even more delicious!",
      ingredients:
        "2 ripe bananas, frozen-1 cup frozen berries-1/2 cup milk (dairy or non-dairy)-1 tablespoon honey (optional)-1 teaspoon vanilla extract",
    },
    {
      id: 2,
      user_id: 2,
      name: "Dragon Fruit Surprise",
      price: 14,
      rating: 4,
      image_src:
        "https://c0.wallpaperflare.com/preview/288/501/160/italy-san-marco-venezia-suso-ice-cream.jpg",
      details:
        "Dragon fruit mixed with pistachio ice cream is a unique and delicious dessert that combines the sweet, tangy flavor of fresh dragon fruit with the rich, nutty taste of pistachios. The creamy base of heavy cream and whole milk, combined with egg yolks, gives the ice cream a smooth and luscious texture. A touch of vanilla extract and a pinch of salt balance out the flavors, while a small amount of lemon juice brightens them up. This dessert is perfect for those who want to try something new and adventurous in the world of ice cream.",
      ingredients:
        "Fresh dragon fruit-Pistachios-Heavy Cream-Whole Milk-Sugar-Egg yolks-Vanilla extract-Salt-Lemon juice-Honey",
    },
    {
      id: 3,
      user_id: 1,
      name: "Vanilla on the beach",
      price: 6,
      rating: 5,
      image_src:
        "https://c1.wallpaperflare.com/preview/627/225/223/ice-cream-cone-melting-hot-ice-cream-scoop.jpg",
      details:
        "The simple vanilla cone with chocolate bar inside is a classic and delicious dessert that's perfect for any ice cream lover. It features a crispy waffle cone filled with smooth and creamy vanilla ice cream, and a chocolate bar surprise tucked inside the center of the cone. When you take a bite, you get the perfect combination of creamy, sweet vanilla ice cream and rich, decadent chocolate. To make it even more indulgent, you can drizzle hot fudge sauce on top, add a dollop of whipped cream, and top it off with a maraschino cherry. It's a simple yet delightful treat that's sure to satisfy any sweet tooth.",
      ingredients:
        "Vanilla ice cream-Waffle cone-Chocolate bar-Hot fudge sauce-Whipped cream-Maraschino cherry",
    },
    {
      id: 4,
      user_id: 2,
      name: "Chocolate loves waffles",
      price: 15,
      rating: 4,
      image_src:
        "https://c0.wallpaperflare.com/preview/123/408/7/italy-milan-tasty-milano.jpg",
      details:
        "This dessert item is a delicious and decadent treat that combines the sweet crunch of waffle cones and almonds with the rich, smooth flavor of chocolate ice cream. The waffle cones and almonds are crushed together and coated in melted dark chocolate to create a crunchy, flavorful crust. The crust is then layered with a scoop of creamy chocolate ice cream, adding a velvety texture and intense chocolate flavor to the mix. The result is a dessert that is both sophisticated and comforting, perfect for indulging in on a hot summer day or as a special treat after dinner. With its combination of sweet and salty flavors and its satisfying crunch, this dessert is sure to delight anyone with a sweet tooth.",
      ingredients:
        "Waffle cones-Almonds, chopped or sliced-Dark chocolate chips or chocolate bar, melted-Vanilla extract-Heavy cream-Sugar-Salt-Egg yolks-Chocolate ice cream",
    },
    {
      id: 5,
      user_id: 3,
      name: "Cookies and more",
      price: 5,
      rating: 4,
      image_src:
        "https://c1.wallpaperflare.com/preview/992/624/6/cone-brick-wall-eat.jpg",
      details:
        "This dessert item is a delicious combination of waffle cones filled with creamy chocolate and Oreo ice cream, topped with a drizzle of rich caramel sauce. The waffle cones are freshly made and crispy, providing the perfect texture to complement the smooth and indulgent ice cream. The chocolate ice cream is rich and creamy, with a decadent flavor that pairs perfectly with the crunchy bits of Oreo cookie mixed throughout. The caramel topping adds a sweet and slightly salty flavor, bringing the whole dessert together in a delightful way. Overall, this dessert is a perfect treat for anyone with a sweet tooth, and a great way to enjoy a classic ice cream flavor with a fun twist.",
      ingredients:
        "1 cup all-purpose flour-1/4 cup granulated sugar-1/4 teaspoon salt-2 large eggs-1/4 cup unsalted butter, melted-1/2 teaspoon vanilla extract-1/4 cup milk",
    },
    {
      id: 6,
      user_id: 3,
      name: "Very berry pink",
      price: 8,
      rating: 3,
      image_src:
        "https://c1.wallpaperflare.com/preview/329/444/48/valentine-s-day-pink-ice-cream-hearts-pink.jpg",
      details:
        "This pink ice cream made with mixed berries is a refreshing and delicious dessert that is perfect for hot summer days. The sweet and tangy flavor of the berries pairs perfectly with the creamy and rich texture of the ice cream. It's easy to make and is sure to be a hit with anyone who loves fruity desserts.",
      ingredients:
        "2 cups of mixed berries (such as raspberries, strawberries, and blackberries)-1/2 cup of sugar-1 tablespoon of lemon juice-2 cups of heavy cream-1 cup of whole milk-1/2 teaspoon of vanilla extract",
    },
    {
      id: 7,
      user_id: 2,
      name: "Black vanilla",
      price: 12,
      rating: 4,
      image_src:
        "https://media1.popsugar-assets.com/files/thumbor/d5VBMq9Tv03QxahWYvBQTWVXZps/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/07/18/816/n/1922195/aab251b85b4f887f5553d7.56446200_/i/Weird-Ice-Cream-Flavors.jpg",
      details:
        "Black vanilla ice cream is a unique and striking dessert that combines the classic flavor of vanilla with a dramatic twist. The addition of black food coloring or activated charcoal gives the ice cream its distinct dark hue, making it a visually impressive dessert that is sure to stand out. The smooth and creamy texture of the ice cream, coupled with the rich and comforting flavor of vanilla, makes it a delicious and indulgent treat that is perfect for any occasion. Whether you serve it on its own or pair it with other desserts or toppings, black vanilla ice cream is sure to be a hit with anyone who loves ice cream.",
      ingredients:
        "Heavy cream-Whole milk-Vanilla bean or vanilla extract-Sugar-Black food coloring or activated charcoal-Cornstarch or egg yolks (for a custard base)-Salt",
    },
    {
      id: 8,
      user_id: 1,
      name: "I scream",
      price: 100,
      rating: 2,
      image_src:
        "https://media1.popsugar-assets.com/files/thumbor/d5VBMq9Tv03QxahWYvBQTWVXZps/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/07/18/816/n/1922195/aab251b85b4f887f5553d7.56446200_/i/Weird-Ice-Cream-Flavors.jpg",
      details: "I dropped this and it was the only thing bringing me joy today",
      ingredients: "",
    },
  ]);
};
