//375
import pizzaOne375 from "../assets/images/menu-slider/pizza-one-375.webp";
import pizzaTwo375 from "../assets/images/menu-slider/pizza-two-375.webp";
import pizzaThree375 from "../assets/images/menu-slider/pizza-three-375.webp";
import SalmonPoke375 from "../assets/images/menu-slider/sushi-one-375.webp";
import VeggiePoke375 from "../assets/images/menu-slider/sushi-two-375.webp";
import MiniSalmon375 from "../assets/images/menu-slider/sushi-three-375.webp";
import ChickenAlfredo375 from "../assets/images/menu-slider/pasta-one-375.webp";
import AllaGricia375 from "../assets/images/menu-slider/pasta-two-375.webp";
import SheetPan375 from "../assets/images/menu-slider/pasta-three-375.webp";
//700
import pizzaOne700 from "../assets/images/menu-slider/pizza-one-700.webp";
import pizzaTwo700 from "../assets/images/menu-slider/pizza-two-700.webp";
import pizzaThree700 from "../assets/images/menu-slider/pizza-three-700.webp";
import SalmonPoke700 from "../assets/images/menu-slider/sushi-one-700.webp";
import VeggiePoke700 from "../assets/images/menu-slider/sushi-two-700.webp";
import MiniSalmon700 from "../assets/images/menu-slider/sushi-three-700.webp";
import ChickenAlfredo700 from "../assets/images/menu-slider/pasta-one-700.webp";
import AllaGricia700 from "../assets/images/menu-slider/pasta-two-700.webp";
import SheetPan700 from "../assets/images/menu-slider/pasta-three-700.webp";

const menuSliderCategories = [
  {
    name: "pizza",
    id: "pizza",
  },
  {
    name: "sushi",
    id: "sushi",
  },
  {
    name: "pasta",
    id: "pasta",
  },
];
const menuSliderProducts = [
  {
    id: "pepperoni-pizza",
    name: "Pizza de peperoni",
    describtion:
      "Masa de pizza: levadura, pepperoni, pasta de tomate, queso mozzarella, azúcar.",
    price: (5).toFixed(2),
    img375: pizzaOne375,
    img700: pizzaOne700,
    category: "pizza",
  },
  {
    id: "bbq-chicken-pizza",
    name: "Pizza de pollo a la barbacoa",
    describtion:
      "Pollo rostizado, masa de pizza, salsa barbacoa, queso cheddar ahumado, queso mozzarella.",
    price: (10).toFixed(2),
    img375: pizzaTwo375,
    img700: pizzaTwo700,
    category: "pizza",
  },
  {
    id: "cheese-pizza",
    name: "pizza de queso",
    describtion: "Masa de pizza, salsa de pizza, queso provolone, mozzarella.",
    price: (5).toFixed(2),
    img375: pizzaThree375,
    img700: pizzaThree700,
    category: "pizza",
  },
  {
    id: "salmon-poke",
    img375: SalmonPoke375,
    img700: SalmonPoke700,
    name: "Poke De Salmón",
    describtion:
      "Salmón, aguacate, arroz, repollo, zanahorias, cebollas verdes, sésamo.",
    price: (10).toFixed(2),
    category: "sushi",
  },

  {
    id: "veggie-poke",
    img375: VeggiePoke375,
    img700: VeggiePoke700,
    name: "Poke vegetariano",
    describtion: "Arroz, aguacate, repollo, zanahoria, jengibre, cebolla verde, sésamo.",
    price: (8).toFixed(2),
    category: "sushi",
  },
  {
    id: "mini-salmon-set-22-pcs",
    img375: MiniSalmon375,
    img700: MiniSalmon700,
    name: "Set Mini Salmón",
    describtion:
      "Rollo doble de salmón, Californication, Nigiri de salmón (2 piezas), Nigiri de anguila (2 piezas), Vulcan Gunkan (2 piezas)",
    price: (35).toFixed(2),
    category: "sushi",
  },
  {
    id: "chicken-alfredo",
    img375: ChickenAlfredo375,
    img700: ChickenAlfredo700,
    name: "Pollo AnaMar",
    describtion:
      "Pechuga de pollo sin piel, crema espesa, aceite de oliva, parmigiano reggiano, pimienta negra.",
    price: (2).toFixed(2),
    category: "pasta",
  },
  {
    id: "pasta-alla-gricia",
    img375: AllaGricia375,
    img700: AllaGricia700,
    name: "Pasta Alla Gricia",
    describtion:
      "Pasta rigatoni, panceta, aceite de oliva, pecorino romano, pimienta negra.",
    price: (9).toFixed(2),
    category: "pasta",
  },
  {
    id: "sheet-pan-burrata-caprese-gnocchi",
    img375: SheetPan375,
    img700: SheetPan700,
    name: "Burrata Caprese Gnocchi",
    describtion:
      "Pasta penne, crema agria, pollo rostizado, tomates cherry, col rizada.",
    price: (5).toFixed(2),
    category: "pasta",
  },
];

export { menuSliderProducts, menuSliderCategories };
