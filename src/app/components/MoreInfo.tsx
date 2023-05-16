import Link, { LinkProps } from "next/link";

export const MoreInfo:React.FC<LinkProps> = ({ href, ...props }) => {
  return (
    <Link href={href} target="_blank" className={`font-bold uppercase text-sm px-6 py-3 rounded-full transition-all duration-700 text-white bg-secondary hover:brightness-75`} {...props}>
     Saiba Mais
    </Link>
  );
};
