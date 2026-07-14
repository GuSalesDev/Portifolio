import { useEffect, useState } from "react";


export function useTypedLines(lines) {
  return { rendered: lines, done: true };
}