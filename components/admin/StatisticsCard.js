import React from "react";

const StatisticsCard = (props) =>
{
    return (
        <div className="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
          <div className={`h-11 ${props.bgColor} flex items-center justify-between`}>
            <p className="mr-0 text-white text-lg pl-3">{props.title}</p>
          </div>
          <p className="py-1 text-2xl ml-5">{props.count}</p>
        </div>
    );
}

export default StatisticsCard;
