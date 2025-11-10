import { Item } from "./item.interface";

export interface FilterItem extends Item {
    helperTextCallback?: ((data?: any) => string) | (() => string),
}