import { ArrayViewProps, ArrayView } from "./json/array";
import { BooleanViewProps, BooleanView } from "./json/boolean";
import { NumberViewProps, NumberView } from "./json/number";
import { ObjectViewProps, ObjectView } from "./json/object";
import { StringViewProps, StringView } from "./json/string";

export interface JsonComponents {
    Array: React.ComponentType<ArrayViewProps>;
    Boolean: React.ComponentType<BooleanViewProps>;
    Number: React.ComponentType<NumberViewProps>;
    Object: React.ComponentType<ObjectViewProps>;
    String: React.ComponentType<StringViewProps>;
}

export const DEFAULT_JSON_COMPONENTS: JsonComponents = {
    Array: ArrayView,
    Boolean: BooleanView,
    Number: NumberView,
    Object: ObjectView,
    String: StringView
};
