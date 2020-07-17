import React from "react";

/* eslint-disable-next-line */
export interface TeamCardProps {
  name: string;
  position: string;
  description: string;
  image: string;
}

export const TeamCard = (props: TeamCardProps) => {
  return (
    <div className="flex flex-col items-center h-full text-center sm:flex-row sm:justify-start sm:text-left">
      <img
        alt={props.name}
        className="flex-shrink-0 object-cover object-center w-40 h-40 rounded-full shadow-xs"
        src={props.image}
      ></img>
      <div className="flex flex-col sm:pl-8">
        <h2 className="text-lg font-medium text-gray-900">{props.name}</h2>
        <h3 className="text-gray-500">{props.position}</h3>
        <p className="max-w-xs mt-3 sm:max-w-none">{props.description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
