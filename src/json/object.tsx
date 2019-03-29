import React from "react";

import { JsonBaseProps, JsonObject } from "../contracts";

export interface ObjectViewProps extends JsonBaseProps<JsonObject> {}

export const ObjectView = (props: ObjectViewProps) => {
    return <div />;
};
