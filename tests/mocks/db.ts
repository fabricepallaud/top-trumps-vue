import { Hero, Villain } from '@/store/modules/models';

const heroes: Array<Hero> = [
  {
    id: 'HeroAslaug',
    name: 'Aslaug',
    description: 'warrior queen',
    speed: '34',
    strength: '42',
    intelligence: '11'
  },
  {
    id: 'HeroBjorn',
    name: 'Bjorn Ironside',
    description: 'king of 9th century Sweden',
    speed: '44',
    strength: '23',
    intelligence: '62'
  },
  {
    id: 'HeroIvar',
    name: 'Ivar the Boneless',
    description: 'commander of the Great Heathen Army',
    speed: '5',
    strength: '86',
    intelligence: '32'
  },
  {
    id: 'HeroLagertha',
    name: 'Lagertha the Shieldmaiden',
    description: 'aka Hlaðgerðr',
    speed: '35',
    strength: '12',
    intelligence: '54'
  },
  {
    id: 'HeroThora',
    name: 'Thora Town-hart',
    description: 'daughter of Earl Herrauðr of Götaland',
    speed: '61',
    strength: '50',
    intelligence: '24'
  },
];

const villains: Array<Villain> = [
  {
    id: 'VillainMadelyn',
    name: 'Madelyn',
    description: 'the cat whisperer',
    speed: '78',
    strength: '36',
    intelligence: '31'
  },
  {
    id: 'VillainHeidrik',
    name: 'Heidrik',
    description: 'pen wielder',
    speed: '59',
    strength: '54',
    intelligence: '25'
  },
  {
    id: 'VillainElla',
    name: 'Ella',
    description: 'fashionista',
    speed: '14',
    strength: '7',
    intelligence: '95'
  },
  {
    id: 'VillainLandon',
    name: 'Landon',
    description: 'Mandalorian mauler',
    speed: '27',
    strength: '82',
    intelligence: '29'
  },
  {
    id: 'VillainRagnar',
    name: 'Ragnar Lothbrok',
    description: 'aka Ragnar Sigurdsson',
    speed: '98',
    strength: '47',
    intelligence: '19'
  },
];

export const data = { heroes, villains };
