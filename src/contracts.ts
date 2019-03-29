import { JsonComponents } from "./json-components";

export interface JsonBaseProps<TValue = JsonType> {
    value: TValue;
    jsonComponents: JsonComponents;
}

export interface JsonObject {
    [key: string]: JsonType;
}
export interface JsonArray extends Array<JsonType> {}
export type JsonNull = null;
export type JsonNumber = number;
export type JsonString = string;
export type JsonBoolean = boolean;

export type JsonType = JsonObject | JsonArray | JsonNull | JsonNumber | JsonString | JsonBoolean;
