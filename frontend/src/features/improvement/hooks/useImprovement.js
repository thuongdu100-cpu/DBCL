// features/improvement/hooks/useImprovement.js

import { useMemo, useState } from "react";

import { mockImprovement }
from "../data/mockImprovement";

import groupByStatus
from "../services/groupByStatus";

export default function useImprovement() {

  const [items, setItems] =
    useState(mockImprovement);

  const grouped =
    useMemo(() => {
      return groupByStatus(items);
    }, [items]);

  return {
    items,
    grouped,
    setItems,
  };
}