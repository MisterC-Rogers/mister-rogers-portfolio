import conway from "./ConwaysGOL.jpg";
import paginated from "./PaginateUser.jpg";
import simon from "./SimonSays.jpg";
import cocktails from "./CocktailMePlease.jpg";

const data = [
  {
    title: "Charlie's Game of Life",
    description:
      "I built Conway's Game of Life in honour of his passing. Built with React",
    image: conway,
    url: "https://charlies-game-of-life.netlify.app",
    width: 400,
    height: 400,
  },
  {
    title: "Paginated User",
    description:
      "Paginated a user database with the ability to download a current page or the user page. Built with React",
    image: paginated,
    url: "https://paginated-usercards.netlify.app",
    width: 400,
    height: 400,
  },
  {
    title: "Simon Says",
    description:
      "Project I built for the freecodecamp curriculum. Built with HTML, CSS, and jQuery",
    image: simon,
    url: "https://mister-rogers-says.netlify.app",
    width: 400,
    height: 400,
  },
  {
    title: "Cocktail Me Please",
    description:
      "Using an free api I grab data and display it. Built with React",
    image: cocktails,
    url: "https://cocktailsplease.netlify.app",
    width: 400,
    height: 400,
  },
];

export default data;
