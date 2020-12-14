# Tour of Heroes Top Trumps

## What is Top Trumps?

Top Trumps is a card game originally created in the 1960s. Each card contains a list of numerical data, and the aim of the game is to compare these values to try to trump and win an opponent's card. Over the years Top Trumps have released many themes from cars to superheroes.

## Tour of Heroes

The Tour of Heroes tutorial is Angular’s means to introducing developers new to Angular to the syntax and concepts of the JavaScript framework (see https://angular.io/tutorial). John Papa, who wrote the original Tour of Heroes, has also adapted it to React and Vue. For this exercise we will be making use of the Vue implementation of Tour of Heroes: https://github.com/johnpapa/heroes-vue

## Let Battle Commence!

Your task is to extend the Vue Tour of Heroes code sample to simulate a round of Top Trumps.
Your requirements are to:
-	Add superpowers for Speed, Strength, and Intelligence to our heroes and villains
-	Create a new “Battle” view where a player can take part in a single round of top trumps
-	When initiating a new battle, the human player’s card must be visible but the computer player’s card must be hidden initially
-	Player cards can be selected however you like, but the human player must play as a hero and the computer as a villain
-	The human player must be able to select one of the superpowers on the card they have been dealt, which is then to be compared to the computer player’s card – at this point the computer player’s card can be revealed
-	Declare a winner for the round based on the player with the highest value

Note: there is no need for a player to have a hand of cards as only a single round is to be played
The primary objective is to ensure your application is functional. However, additional plaudits will be won for code structuring and simple but appropriate styling, animation, etc.


## Getting Started

1. Clone this repository

   ```bash
   git clone https://github.com/netcall-liberty/top-trumps-vue.git
   cd top-trumps-vue
   ```

1. Install the npm packages

   ```bash
   npm install
   ```

2. Run the app

   ```bash
   npm run quick
   ```


## Appendix A: Superhero Powers
In order for you to not spend time worrying about what values to give each character, the list below can be used.
| Hero/Villain              | Speed | Strength | Intelligence |
| ------------------------- | ----- | -------- | ------------ |
| Aslaug                    | 34    | 42       | 11           |
| Bjorn Ironside            | 44    | 23       | 62           |
| Ivar the Boneless         | 5     | 86       | 32           |
| Lagertha the Shieldmaiden | 35    | 12       | 54           |
| Thora Town-hart           | 61    | 50       | 24           |
| Madelyn                   | 78    | 36       | 31           |
| Heidrek                   | 59    | 54       | 25           |
| Ella                      | 14    | 7        | 95           |
| Landon                    | 27    | 82       | 29           |
| Ragnar Lothbrok           | 98    | 47       | 19           |

