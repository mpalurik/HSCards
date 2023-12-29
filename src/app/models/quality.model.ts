export interface Quality {
  cardId:        string;
  dbfId:         number;
  name:          string;
  cardSet:       CardSet;
  type:          Type;
  faction?:      Faction;
  rarity:        Rarity;
  health?:       number;
  armor?:        string;
  artist?:       string;
  playerClass:   PlayerClass;
  img?:          string;
  imgGold?:      string;
  locale:        Locale;
  collectible?:  boolean;
  flavor?:       string;
  text?:         string;
  cost?:         number;
  spellSchool?:  SpellSchool;
  mechanics?:    Mechanic[];
  attack?:       number;
  race?:         Race;
  durability?:   number;
  howToGetGold?: string;
}

export enum CardSet {
  AshesOfOutland = "Ashes of Outland",
  Basic = "Basic",
  Battlegrounds = "Battlegrounds",
  DescentOfDragons = "Descent of Dragons",
  ForgedInTheBarrens = "Forged in the Barrens",
  FracturedInAlteracValley = "Fractured in Alterac Valley",
  HeroSkins = "Hero Skins",
  Legacy = "Legacy",
  MarchOfTheLichKing = "March of the Lich King",
  Missions = "Missions",
  RiseOfShadows = "Rise of Shadows",
  TavernBrawl = "Tavern Brawl",
  TheBoomsdayProject = "The Boomsday Project",
  TheLeagueOfExplorers = "The League of Explorers",
  Titans = "TITANS",
  Vanilla = "Vanilla",
}

export enum Faction {
  Alliance = "Alliance",
  Horde = "Horde",
  Neutral = "Neutral",
}

export enum Locale {
  EnUS = "enUS",
}

export interface Mechanic {
  name: string;
}

export enum PlayerClass {
  DeathKnight = "Death Knight",
  DemonHunter = "Demon Hunter",
  Druid = "Druid",
  Hunter = "Hunter",
  Mage = "Mage",
  Neutral = "Neutral",
  Paladin = "Paladin",
  Priest = "Priest",
  Rogue = "Rogue",
  Shaman = "Shaman",
  Warlock = "Warlock",
  Warrior = "Warrior",
  Whizbang = "Whizbang",
}

export enum Race {
  Beast = "Beast",
  Demon = "Demon",
  Elemental = "Elemental",
  Murloc = "Murloc",
  Naga = "Naga",
  Totem = "Totem",
  Undead = "Undead",
}

export enum Rarity {
  Free = "Free",
}

export enum SpellSchool {
  Arcane = "Arcane",
  Fel = "Fel",
  Fire = "Fire",
  Frost = "Frost",
  Holy = "Holy",
  Nature = "Nature",
  Shadow = "Shadow",
}

export enum Type {
  Hero = "Hero",
  HeroPower = "Hero Power",
  Minion = "Minion",
  Spell = "Spell",
  Weapon = "Weapon",
}
