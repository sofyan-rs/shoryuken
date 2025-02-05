import classNames from "classnames";
import { FC } from "react";

type Props = {
  title: string;
  description: string;
  isActive?: boolean;
  onClick?: () => void;
};

const CoreInfo: FC<Props> = ({ title, description, isActive, onClick }) => {
  return (
    <button
      className={classNames("w-full p-4 border-l-8 rounded flex flex-col", {
        "bg-white": isActive,
        "shadow-lg": isActive,
        "border-blue-400": isActive,
        "border-transparent": !isActive,
      })}
      type="button"
      onClick={onClick}
    >
      <h3 className="text-left text-base font-bold text-slate-700 mb-2">
        {title}
      </h3>
      <p className="text-sm text-left text-slate-700 leading-normal">
        {description}
      </p>
    </button>
  );
};

export default CoreInfo;
