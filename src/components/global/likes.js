import { atom } from "recoil";
//step 2 atom


export const likes = atom({
    key: 'likes',
    default: 0
});

export const cart = atom({
    key: 'cart',
    default: 0
});