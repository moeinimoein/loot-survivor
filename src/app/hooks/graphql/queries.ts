import { gql } from "@apollo/client";

const getAdventurer = gql`
  query get_adventurer($owner: HexValue) {
    adventurers(where: { owner: { eq: $owner } }) {
      beastId
      charisma
      chestId
      dexterity
      feetId
      handsId
      headId
      health
      id
      imageHash1
      imageHash2
      intelligence
      level
      luck
      name
      neckId
      order
      owner
      race
      ringId
      status
      strength
      upgrading
      vitality
      waistId
      weaponId
      wisdom
      xp
      gold
    }
  }
`;

const getBeasts = gql`
  query get_beasts {
    beasts {
      adventurerId
      armorType
      attackType
      beast
      health
      id
      level
      prefix1
      prefix2
      rank
      xp
    }
  }
`;

const getLatestDiscoveries = gql`
  query get_discoveries($adventurerId: FeltValue) {
    discoveries(
      where: { adventurerId: { eq: $adventurerId } }
      limit: 10
      orderBy: { discoveryTime: { desc: true } }
    ) {
      adventurerId
      discoveryTime
      discoveryType
      entityId
      outputAmount
      subDiscoveryType
      txHash
    }
  }
`;

const getDiscoveryByTxHash = gql`
  query get_discovery($txHash: HexValue) {
    discoveries(where: { txHash: { eq: $txHash } }) {
      adventurerId
      discoveryTime
      discoveryType
      entityId
      outputAmount
      subDiscoveryType
      txHash
    }
  }
`;

const getItems = gql`
  query get_items {
    items {
      adventurerId
      bag
      bidder
      claimedTime
      createdBlock
      expiry
      greatness
      id
      item
      marketId
      material
      owner
      prefix1
      prefix2
      price
      rank
      slot
      status
      suffix
      type
      xp
    }
  }
`;

const getAdventurersByOwner = gql`
  query get_adventurers_by_owner($owner: HexValue) {
    adventurers(where: { owner: { eq: $owner } }) {
      beastId
      charisma
      chestId
      dexterity
      feetId
      handsId
      headId
      health
      id
      imageHash1
      imageHash2
      intelligence
      level
      luck
      name
      neckId
      order
      owner
      race
      ringId
      status
      strength
      upgrading
      vitality
      waistId
      weaponId
      wisdom
      xp
      gold
    }
  }
`;

const getAdventurerById = gql`
  query get_adventurer_by_id($id: FeltValue) {
    adventurers(where: { id: { eq: $id } }) {
      beastId
      charisma
      chestId
      dexterity
      feetId
      handsId
      headId
      health
      id
      imageHash1
      imageHash2
      intelligence
      level
      luck
      name
      neckId
      order
      owner
      race
      ringId
      status
      strength
      upgrading
      vitality
      waistId
      weaponId
      wisdom
      xp
      gold
    }
  }
`;

const getBeastById = gql`
  query get_beast_by_id($id: FeltValue) {
    beasts(where: { id: { eq: $id } }) {
      adventurerId
      armorType
      attackType
      beast
      health
      id
      level
      prefix1
      prefix2
      rank
      slainOnDate
      xp
    }
  }
`;

const getLatestBattlesByAdventurer = gql`
  query get_latest_batlles($adventurerId: FeltValue) {
    battles(
      limit: 10
      orderBy: { timestamp: { desc: true } }
      where: { adventurerId: { eq: $adventurerId } }
    ) {
      adventurerId
      attacker
      beastId
      damage
      goldEarned
      targetHealth
      timestamp
      txHash
      xpEarned
    }
  }
`;

const getItemsByTokenId = gql`
  query get_items($id: FeltValue) {
    items(where: { id: { eq: $id } }) {
      bag
      bidder
      claimedTime
      createdBlock
      equippedAdventurerId
      expiry
      greatness
      id
      item
      lastUpdated
      marketId
      material
      owner
      ownerAdventurerId
      prefix1
      prefix2
      price
      rank
      slot
      status
      suffix
      type
      xp
    }
  }
`;

const getLatestMarketItems = gql`
  query get_latest_market_items {
    items(
      where: { marketId: { gt: 0 } }
      limit: 20
      orderBy: { createdBlock: { desc: true } }
    ) {
      bag
      bidder
      claimedTime
      createdBlock
      equippedAdventurerId
      expiry
      greatness
      id
      item
      lastUpdated
      marketId
      material
      owner
      ownerAdventurerId
      prefix1
      prefix2
      price
      rank
      slot
      status
      suffix
      type
      xp
    }
  }
`;

const getItemsByAdventurer = gql`
  query get_items_by_adventurer($adventurer: FeltValue) {
    items(where: { ownerAdventurerId: { eq: $adventurer } }) {
      bag
      bidder
      claimedTime
      createdBlock
      equippedAdventurerId
      expiry
      greatness
      id
      item
      lastUpdated
      marketId
      material
      owner
      ownerAdventurerId
      prefix1
      prefix2
      price
      rank
      slot
      status
      suffix
      type
      xp
    }
  }
`;

const getItemsByOwner = gql`
  query get_items_by_owner($owner: HexValue) {
    items(where: { owner: { eq: $owner } }) {
      bag
      bidder
      claimedTime
      createdBlock
      equippedAdventurerId
      expiry
      greatness
      id
      item
      lastUpdated
      marketId
      material
      owner
      ownerAdventurerId
      prefix1
      prefix2
      price
      rank
      slot
      status
      suffix
      type
      xp
    }
  }
`;

export {
  getAdventurer,
  getLatestDiscoveries,
  getDiscoveryByTxHash,
  getAdventurersByOwner,
  getAdventurerById,
  getBeasts,
  getBeastById,
  getLatestBattlesByAdventurer,
  getItems,
  getItemsByTokenId,
  getLatestMarketItems,
  getItemsByOwner,
  getItemsByAdventurer,
};
