import React from "react";

import { JsonBaseProps, JsonString } from "../contracts";

export interface StringViewProps extends JsonBaseProps<JsonString> {}

export const StringView = (props: StringViewProps) => {
    return <div />;
};
