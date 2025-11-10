import { Item } from "../interfaces/item.interface";

/**
 * Finds an specific item given a value. Case sensitive search.
 * 
 * @param value Value to be searched
 * @param itemArray The item list
 * @returns Returns the found element. Null if not found.
 */
export const findItem = (value: string, itemArray: Item[]) => {
    return itemArray.find(item => item.value === value);
}