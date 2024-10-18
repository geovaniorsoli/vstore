export interface Elo{
    name: string
    value: number
    price: number
    src: string
}

const ferro = 5 
const bronze = 7
const prata = 10 
const ouro = 18 
const platina = 23 
const diamante = 42 
const ascendant = 59 
const imortal = 99 


export const elosInitial: Elo[] = [
    { name: "Ferro I", value: 0, price: 0,  src: "rank/Iron_1_Rank.png" },
    { name: "Ferro II", value: 1, price: ferro, src: "rank/Iron_2_Rank.png" },
    { name: "Ferro III", value: 2, price: ferro, src: "rank/Iron_3_Rank.png" },
    { name: "Bronze I", value: 3, price: ferro, src: "rank/Bronze_1_Rank.png" },
    { name: "Bronze II", value: 4, price: bronze, src: "rank/Bronze_2_Rank.png" },
    { name: "Bronze III", value: 5, price: bronze, src: "rank/Bronze_3_Rank.png" },
    { name: "Prata I", value: 6, price: bronze, src: "rank/Silver_1_Rank.png" },
    { name: "Prata II", value: 7, price: prata, src: "rank/Silver_2_Rank.png" },
    { name: "Prata III", value: 8, price: prata, src: "rank/Silver_3_Rank.png" },
    { name: "Ouro I", value: 9, price: prata, src: "rank/Gold_1_Rank.png" },
    { name: "Ouro II", value: 10, price: ouro, src: "rank/Gold_2_Rank.png" },
    { name: "Ouro III", value: 11, price: ouro, src: "rank/Gold_3_Rank.png" },
    { name: "Platina I", value: 12, price: ouro, src: "rank/Platinum_1_Rank.png" },
    { name: "Platina II", value: 13, price: platina, src: "rank/Platinum_2_Rank.png" },
    { name: "Platina III", value: 14, price: platina, src: "rank/Platinum_3_Rank.png" },
    { name: "Diamante I", value: 15, price: platina, src: "rank/Diamond_1_Rank.png" },
    { name: "Diamante II", value: 16, price: diamante, src: "rank/Diamond_2_Rank.png" },
    { name: "Diamante III", value: 17, price: diamante, src: "rank/Diamond_3_Rank.png" },
    { name: "Ascendente I", value: 18, price: diamante, src: "rank/Ascendant_1_Rank.png" },
    { name: "Ascendente II", value: 19, price: ascendant, src: "rank/Ascendant_2_Rank.png" },
    { name: "Ascendente III", value: 20, price: ascendant, src: "rank/Ascendant_3_Rank.png" },
    { name: "Imortal I", value: 21, price: ascendant, src: "rank/Immortal_1_Rank.png" },
    { name: "Imortal II", value: 22,price:  imortal, src: "rank/Immortal_2_Rank.png" },
    { name: "Imortal III", value: 23, price: imortal, src: "rank/Immortal_3_Rank.png" },
];

export const elosWish: Elo[] = [
    { name: "Ferro I", value: 0, price: 0,  src: "rank/Iron_1_Rank.png" },
    { name: "Ferro II", value: 1, price: ferro, src: "rank/Iron_2_Rank.png" },
    { name: "Ferro III", value: 2, price: ferro, src: "rank/Iron_3_Rank.png" },
    { name: "Bronze I", value: 3, price: ferro, src: "rank/Bronze_1_Rank.png" },
    { name: "Bronze II", value: 4, price: bronze, src: "rank/Bronze_2_Rank.png" },
    { name: "Bronze III", value: 5, price: bronze, src: "rank/Bronze_3_Rank.png" },
    { name: "Prata I", value: 6, price: bronze, src: "rank/Silver_1_Rank.png" },
    { name: "Prata II", value: 7, price: prata, src: "rank/Silver_2_Rank.png" },
    { name: "Prata III", value: 8, price: prata, src: "rank/Silver_3_Rank.png" },
    { name: "Ouro I", value: 9, price: prata, src: "rank/Gold_1_Rank.png" },
    { name: "Ouro II", value: 10, price: ouro, src: "rank/Gold_2_Rank.png" },
    { name: "Ouro III", value: 11, price: ouro, src: "rank/Gold_3_Rank.png" },
    { name: "Platina I", value: 12, price: ouro, src: "rank/Platinum_1_Rank.png" },
    { name: "Platina II", value: 13, price: platina, src: "rank/Platinum_2_Rank.png" },
    { name: "Platina III", value: 14, price: platina, src: "rank/Platinum_3_Rank.png" },
    { name: "Diamante I", value: 15, price: platina, src: "rank/Diamond_1_Rank.png" },
    { name: "Diamante II", value: 16, price: diamante, src: "rank/Diamond_2_Rank.png" },
    { name: "Diamante III", value: 17, price: diamante, src: "rank/Diamond_3_Rank.png" },
    { name: "Ascendente I", value: 18, price: diamante, src: "rank/Ascendant_1_Rank.png" },
    { name: "Ascendente II", value: 19, price: ascendant, src: "rank/Ascendant_2_Rank.png" },
    { name: "Ascendente III", value: 20, price: ascendant, src: "rank/Ascendant_3_Rank.png" },
    { name: "Imortal I", value: 21, price: ascendant, src: "rank/Immortal_1_Rank.png" },
    { name: "Imortal II", value: 22,price:  imortal, src: "rank/Immortal_2_Rank.png" },
    { name: "Imortal III", value: 23, price: imortal, src: "rank/Immortal_3_Rank.png" },
    { name: "Radiant", value: 24, price: 175, src: "rank/Radiant_Rank.png" },
];


