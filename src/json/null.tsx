import React from "react";

import { JsonBaseProps, JsonNull } from "../contracts";

export interface NullViewProps extends JsonBaseProps<JsonNull> {}

export const NullView = (props: NullViewProps) => {
    return <div />;
};

