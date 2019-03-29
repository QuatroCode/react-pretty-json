import React from "react";

import { JsonBaseProps, JsonArray, JsonObject } from "./contracts";

export interface JsonViewProps extends JsonBaseProps<JsonArray | JsonObject> {}

export const JsonView = (props: JsonViewProps) => {
    return (
        <pre>
            <code />
        </pre>
    );
};
