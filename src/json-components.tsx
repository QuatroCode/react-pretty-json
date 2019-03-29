import React from "react";

import { ArrayViewProps, ArrayView } from "./json/array";
import { BooleanViewProps, BooleanView } from "./json/boolean";
import { NullViewProps, NullView } from "./json/null";
import { NumberViewProps, NumberView } from "./json/number";
import { ObjectViewProps, ObjectView } from "./json/object";
import { StringViewProps, StringView } from "./json/string";
import { JsonType } from "./contracts";

export interface JsonComponents {
    ArrayView: React.ComponentType<ArrayViewProps>;
    BooleanView: React.ComponentType<BooleanViewProps>;
    NullView: React.ComponentType<NullViewProps>;
    NumberView: React.ComponentType<NumberViewProps>;
    ObjectView: React.ComponentType<ObjectViewProps>;
    StringView: React.ComponentType<StringViewProps>;
}

export const DEFAULT_JSON_COMPONENTS: JsonComponents = {
    ArrayView: ArrayView,
    BooleanView: BooleanView,
    NullView: NullView,
    NumberView: NumberView,
    ObjectView: ObjectView,
    StringView: StringView
};

export function resolveJsonComponent(components: JsonComponents, value: JsonType): JSX.Element | null {
    const { ArrayView, BooleanView, NumberView, ObjectView, NullView, StringView } = components;

    if (Array.isArray(value)) {
        return <ArrayView jsonComponents={components} value={value} />;
    }

    switch (typeof value) {
        case "boolean": {
            return <BooleanView jsonComponents={components} value={value} />;
        }
        case "bigint":
        case "number": {
            return <NumberView jsonComponents={components} value={value} />;
        }
        case "object": {
            if (value != null) {
                return <ObjectView jsonComponents={components} value={value} />;
            } else {
                return <NullView jsonComponents={components} value={value} />;
            }
        }
        case "string": {
            return <StringView jsonComponents={components} value={value} />;
        }
    }

    return null;
}
