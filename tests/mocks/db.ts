import { Hero, Villain } from '@/store/modules/models';

const heroes: Array<Hero> = [
  {
    id: 'HeroAslaug',
    name: 'Aslaug',
    description: 'warrior queen',
  },
  {
    id: 'HeroBjorn',
    name: 'Bjorn Ironside',
    description: 'king of 9th century Sweden',
  },
  {
    id: 'HeroIvar',
    name: 'Ivar the Boneless',
    description: 'commander of the Great Heathen Army',
  },
  {
    id: 'HeroLagertha',
    name: 'Lagertha the Shieldmaiden',
    description: 'aka Hlaðgerðr',
  },
  {
    id: 'HeroThora',
    name: 'Thora Town-hart',
    description: 'daughter of Earl Herrauðr of Götaland',
  },
];

const villains: Array<Villain> = [
  {
    id: 'VillainMadelyn',
    name: 'Madelyn',
    description: 'the cat whisperer',
  },
  {
    id: 'VillainHeidrik',
    name: 'Heidrik',
    description: 'pen wielder',
  },
  {
    id: 'VillainElla',
    name: 'Ella',
    description: 'fashionista',
  },
  {
    id: 'VillainLandon',
    name: 'Landon',
    description: 'Mandalorian mauler',
  },
  {
    id: 'VillainRagnar',
    name: 'Ragnar Lothbrok',
    description: 'aka Ragnar Sigurdsson',
  },
];

export const data = { heroes, villains };