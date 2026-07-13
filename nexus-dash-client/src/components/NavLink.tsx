import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  onClick?: () => void;
}


const NavLink = ({ children, href, className, onClick }: NavLinkProps) => {
  const pathName = usePathname();

  const isActive = href == pathName;

  return (
    <Link
      href={href}
      className={`${isActive ? "text-[#6f4ff2]" : "text-white"}  transition-colors cursor-pointer font-bold`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;