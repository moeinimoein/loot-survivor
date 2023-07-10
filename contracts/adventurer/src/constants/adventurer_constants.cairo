const STARTING_GOLD: u16 = 40;
const MAX_GOLD: u16 = 511; // 2^9 - 1

const STARTING_HEALTH: u16 = 100;
const MAX_ADVENTURER_HEALTH: u16 = 511; // 2^9 - 1

const VITALITY_HEALTH_INCREASE: u8 = 20;

const POTION_PRICE: u16 = 2;
const POTION_HEALTH_AMOUNT: u16 = 10;
const MINIMUM_POTION_PRICE: u16 = 2;

const CHARISMA_ITEM_DISCOUNT: u16 = 2;
const CHARISMA_POTION_DISCOUNT: u16 = 2;
const MINIMUM_ITEM_PRICE: u16 = 2;

const MAX_STAT_VALUE: u8 = 31; // 2^5 - 1
const MAX_STAT_UPGRADES: u8 = 7; // 2^3 - 1
const MAX_XP: u16 = 8191; // 2^13 - 1
const MAX_ADVENTURER_BLOCKS: u16 = 512; // 2^9

// controls how much faster items level up compared to the player
const ITEM_XP_MULTIPLIER: u16 = 4;
const ITEM_MAX_GREATNESS: u8 = 20;

mod StatisticIndex {
    const STRENGTH: u8 = 0;
    const DEXTERITY: u8 = 1;
    const VITALITY: u8 = 2;
    const INTELLIGENCE: u8 = 3;
    const WISDOM: u8 = 4;
    const CHARISMA: u8 = 5;
}
