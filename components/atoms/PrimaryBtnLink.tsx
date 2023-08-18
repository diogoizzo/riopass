import Link from 'next/link';

interface PrimaryBtnLinkProps {
   text: string;
   href: string;
}

export default function PrimaryBtnLink({ text, href }: PrimaryBtnLinkProps) {
   return (
      <Link
         passHref
         href={href}
         className="inline-flex py-2 px-10  items-center text-center shadow-sm shadow-black/40 border-2 border-yinmn-blue-900 text-lg font-bold text-cool-gray-200 bg-yinmn-blue-500 hover:bg-yinmn-blue-200 transition duration-200 rounded-lg"
      >
         {text}
      </Link>
   );
}
