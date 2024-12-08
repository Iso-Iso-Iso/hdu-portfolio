"use client";
import React, { FC } from "react";

type CareerItemProps = {
  number: number;
  companyName: string;
  timeOfWork: string;
  description: string;
};

const CareerItem: FC<CareerItemProps> = ({
  number,
  timeOfWork,
  companyName,
  description,
}) => {
  return (
    <div className="mb-2">
      <div className="flex gap-4 mb-2">
        <span className="w-10 h-10 flex items-center justify-center border-primary rounded-full border-2">
          {number}
        </span>
        <h3 className="pt-2 text-xl font-semibold text-font-primary-active mb-1">
          {companyName}
        </h3>
      </div>
      <div className="flex gap-4">
        <div className="w-10 flex flex-col items-center flex-shrink-0">
          <hr className="border-0 border-l-2 border-primary flex-1" />
        </div>
        <div>
          <h4 className="font-thin mb-4">{timeOfWork}</h4>
          <p className="font-thin">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CareerItem;
