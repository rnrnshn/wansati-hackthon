import Link, { LinkProps } from "next/link";

export const MoreInfo:React.FC<LinkProps> = ({ href, ...props }) => {
  return (
    <Link href={href} target="_blank" className={`w-40 font-bold text-sm text-center uppercase text-white bg-primary py-4 rounded-full hover:brightness-75 max-md:px-16 max-md:py-4 transition-all `} {...props}>
     Saiba Mais
    </Link>
  );
};
