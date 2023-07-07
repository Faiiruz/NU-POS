import Link from "next/link";
import { FiChevronRight, FiHome } from "react-icons/fi";

const Breadcrumbs = ({ crumbs }) => {
  return (
    <nav className="text-sm text-sky-800 mb-4">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link href="/">
            <FiHome />
          </Link>
          <span className="mx-2 text-gray-500">
            <FiChevronRight />
          </span>
        </li>
        {crumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {crumb.url ? (
              <Link href={crumb.url}>{crumb.label}</Link>
            ) : (
              <span>{crumb.label}</span>
            )}
            {index < crumbs.length - 1 && (
              <span className="mx-2 text-gray-500">
                <FiChevronRight />
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
