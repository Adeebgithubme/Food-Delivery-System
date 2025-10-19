export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export const menuData: Record<string, MenuItem[]> = {
  Tacos: [
    {
      id: "taco-1",
      name: "Chicken Tacos",
      description: "Tender grilled chicken with fresh toppings",
      price: 180,
      image: "/chicken-tacos.png",
    },
    {
      id: "taco-2",
      name: "Veggie Tacos",
      description: "Fresh vegetables with special sauce",
      price: 150,
      image: "/veggie-tacos.jpg",
    },
    {
      id: "taco-3",
      name: "Beef Tacos",
      description: "Seasoned ground beef with crispy shell",
      price: 220,
      image: "/beef-tacos.jpg",
    },
    {
      id: "taco-4",
      name: "Fish Tacos",
      description: "Crispy fish with lime and cabbage",
      price: 200,
      image: "/fish-tacos.jpg",
    },
  ],
  Sushi: [
    {
      id: "sushi-1",
      name: "California Roll",
      description: "Crab, avocado, and cucumber",
      price: 300,
      image: "/california-roll.png",
    },
    {
      id: "sushi-2",
      name: "Spicy Tuna Roll",
      description: "Spicy tuna with jalapeño",
      price: 350,
      image: "/spicy-tuna-roll.png",
    },
    {
      id: "sushi-3",
      name: "Veg Maki Roll",
      description: "Vegetable assortment roll",
      price: 280,
      image: "/vegetable-sushi-roll.jpg",
    },
    {
      id: "sushi-4",
      name: "Salmon Nigiri",
      description: "Fresh salmon over rice",
      price: 320,
      image: "/salmon-nigiri-sushi.jpg",
    },
  ],
  Shawarma: [
    {
      id: "shawarma-1",
      name: "Chicken Shawarma Roll",
      description: "Marinated chicken with tahini sauce",
      price: 160,
      image: "/chicken-shawarma.jpg",
    },
    {
      id: "shawarma-2",
      name: "Paneer Shawarma",
      description: "Grilled paneer with vegetables",
      price: 140,
      image: "/paneer-shawarma.jpg",
    },
    {
      id: "shawarma-3",
      name: "Lebanese Chicken Wrap",
      description: "Authentic Lebanese style wrap",
      price: 180,
      image: "/lebanese-chicken-wrap.jpg",
    },
    {
      id: "shawarma-4",
      name: "Spicy Beef Shawarma",
      description: "Spiced beef with hot sauce",
      price: 200,
      image: "/spicy-beef-shawarma.jpg",
    },
  ],
  Dumplings: [
    {
      id: "dumpling-1",
      name: "Veg Momos",
      description: "Steamed vegetable dumplings",
      price: 120,
      image: "/vegetable-momos-dumplings.jpg",
    },
    {
      id: "dumpling-2",
      name: "Chicken Momos",
      description: "Steamed chicken dumplings",
      price: 140,
      image: "/chicken-momos.jpg",
    },
    {
      id: "dumpling-3",
      name: "Pan-Fried Momos",
      description: "Crispy pan-fried dumplings",
      price: 160,
      image: "/pan-fried-momos.jpg",
    },
    {
      id: "dumpling-4",
      name: "Spicy Schezwan Momos",
      description: "Spicy Schezwan flavored dumplings",
      price: 150,
      image: "/schezwan-momos.jpg",
    },
  ],
  Drinks: [
    {
      id: "drink-1",
      name: "Lemon Mint Cooler",
      description: "Refreshing lemon and mint drink",
      price: 90,
      image: "/lemon-mint-cooler.jpg",
    },
    {
      id: "drink-2",
      name: "Iced Tea",
      description: "Chilled iced tea with lemon",
      price: 100,
      image: "/iced-tea.png",
    },
    {
      id: "drink-3",
      name: "Cold Coffee",
      description: "Creamy cold coffee beverage",
      price: 120,
      image: "/cold-coffee.png",
    },
    {
      id: "drink-4",
      name: "Watermelon Juice",
      description: "Fresh watermelon juice",
      price: 110,
      image: "/watermelon-juice.png",
    },
  ],
  Desserts: [
    {
      id: "dessert-1",
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center",
      price: 180,
      image: "/chocolate-lava-cake.png",
    },
    {
      id: "dessert-2",
      name: "Mango Pudding",
      description: "Creamy mango pudding",
      price: 150,
      image: "/mango-pudding.png",
    },
    {
      id: "dessert-3",
      name: "Ice Cream Sundae",
      description: "Assorted ice cream with toppings",
      price: 130,
      image: "/ice-cream-sundae.png",
    },
    {
      id: "dessert-4",
      name: "Gulab Jamun with Ice Cream",
      description: "Traditional gulab jamun with ice cream",
      price: 160,
      image: "/gulab-jamun-ice-cream.jpg",
    },
  ],
}
