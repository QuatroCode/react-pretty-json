import React from "react";

import { JsonBaseProps, JsonArray } from "../contracts";

export interface ArrayViewProps extends JsonBaseProps<JsonArray> {}

export const ArrayView = (props: ArrayViewProps) => {
    return <div />;
};
