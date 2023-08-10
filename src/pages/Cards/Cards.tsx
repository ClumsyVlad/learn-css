import { InlineText, Title } from "@/components/atoms";
import { Page } from "@/components/molecules";

const pokeballImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1024px-Pok%C3%A9_Ball_icon.svg.png?20161023215848";

const pokemons = [
  {
    name: "kakuna",
    number: "#0014",
    description:
      "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
    category: "cocoon",
  },
  {
    name: "jigglypuff",
    number: "#0039",
    description:
      "When its huge eyes waver, it sings a mysteriously soothing melody that lulls its enemies to sleep.",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
    category: "balloon",
  },
  {
    name: "growlithe",
    number: "#0058",
    description:
      "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png",
    category: "puppy",
  },
  {
    name: "cubone",
    number: "#0104",
    description:
      "When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head.",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png",
    category: "lonely",
  },
  {
    name: "eevee",
    number: "#0133",
    description:
      "Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
    category: "evolution",
  },
  {
    name: "snorlax",
    number: "#0143",
    description:
      "Its stomach can digest any kind of food, even if it happens to be moldy or rotten.",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
    category: "sleeping",
  },
  {
    name: "pichu",
    number: "#0172",
    description:
      "It is unskilled at storing electric power. Any kind of shock causes it to discharge energy spontaneously.",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png",
    category: "tiny mouse",
  },
];

export const Component = () => {
  return (
    <Page title="Cards">
      <Title>Cards</Title>
      <p>
        <InlineText>Let's create some cards</InlineText>
      </p>
    </Page>
  );
};
