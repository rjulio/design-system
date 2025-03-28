import React from "react";

export function handleBlur(e: React.FocusEvent<HTMLButtonElement>) {
   e.currentTarget.blur();
}