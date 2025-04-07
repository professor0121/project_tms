import React from "react";
import SummaryCard from "./summeryCard";

const SummaryCards = () => {
  const cards = [
    { title: "Total Sales", value: "$12,345" },
    { title: "Total Orders", value: "432" },
    { title: "Pending Orders", value: "35" },
  ];

  return (
    <div className="flex flex-wrap gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="w-full  flex-grow"
        >
          <SummaryCard title={card.title} value={card.value} />
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
