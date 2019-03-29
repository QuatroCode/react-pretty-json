import React from "react";

import { JsonBaseProps, JsonBoolean } from "../contracts";

export interface BooleanViewProps extends JsonBaseProps<JsonBoolean> {}

export const BooleanView = (props: BooleanViewProps) => {
    return <div />;
};
