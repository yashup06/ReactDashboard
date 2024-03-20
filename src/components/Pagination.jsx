import { useState } from "react";

const Pagination = ({ totalposts, postsperpage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalposts / postsperpage); i++) {
    pageNumbers.push(i);
  }

  const [activePage, setActivePage] = useState(1);

  const handlepageclick = (number) => {
    setActivePage(number);
  };

  return (
    <div>
      <nav aria-label="...">
        <ul className="pagination pagination-sm">
          {pageNumbers.map((number) => (
            <li
              className={`page-item ${activePage === number && "active"}`}
              aria-current="page"
            >
              <span
                className="page-link"
                onClick={() => {
                  handlepageclick(number);
                  paginate(number);
                }}
              >
                {number}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
