
export interface cardSearch {
  cardId:             string;
  dbfId:              number;
  name:               string;
  cardSet:            string;
  text?:              string;
  spellSchool?:       string;
  health?:            number;
  artist?:            string;
  collectible?:       boolean;
  cost?:              number;
  attack?:            number;
  flavor?:            string;
  img?:               string;
  imgGold?:           string;
  elite?:             boolean;
  howToGet?:          string;
  howToGetGold?:      string;
  multiClassGroup?:   string;
  classes?:           string[];
  durability?:        number;
  howToGetSignature?: string;
}
