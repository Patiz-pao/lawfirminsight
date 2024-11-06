import { useState } from "react";

export function useActiveTab(initialTab: string) {
  const [activeTab, setActiveTab] = useState(initialTab);

  const changeTab = (tab: string) => {
    setActiveTab(tab);
  };

  return { activeTab, changeTab };
}