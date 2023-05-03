import type { CustomizableCardType } from "../data";

const CustomizableCard = ({ title, description, children }: CustomizableCardType) => {
  return (
    <div className="max-w-[345px] flex flex-col w-full gap-4 p-6 border border-gray-400 rounded">
      <div className="flex items-center gap-2 text-sm">
        { children && children }
      </div>
      <div>
        <h4 className="font-bold text-2xl mb-4">{ title }</h4>
        <p className="text-justify">{ description }</p>
      </div>
    </div>
  )
}

export default CustomizableCard;
