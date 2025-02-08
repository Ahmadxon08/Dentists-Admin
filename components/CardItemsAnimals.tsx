import React from "react";

const CardItemsAnimals = ({ anim }: { anim: any }) => {
  const { title, image, kasallik, davolash, profilaktika } = anim;
  return (
    <div className="flex bg-white gap-2 p-3 dark:bg-slate-800  border-gray-400 rounded-lg  flex-col">
      <h1 className="text-[22px]">{title}</h1>
      <img
        src={image}
        alt={title}
        className="w-[200px] rounded-md h-[200px] object-fill"
      />
      <div className="flex gap-1 flex-col">
        <div className="flex items-center">
          <h2>Kasalliklar:</h2>
          <span className="text-gray-400">- {kasallik}</span>
        </div>
        <div className="flex items-center">
          <h2>Davolash:</h2>
          <span className="text-gray-400">- {davolash}</span>
        </div>
        <div className="flex items-center">
          <h2>Profilaktika:</h2>
          <span className="text-gray-400">- {profilaktika}</span>
        </div>
      </div>
    </div>
  );
};

export default CardItemsAnimals;
