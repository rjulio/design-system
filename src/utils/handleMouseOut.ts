import React from "react";

export function handleMouseOut(e: React.MouseEvent<HTMLButtonElement>) {
   e.currentTarget.blur();
}