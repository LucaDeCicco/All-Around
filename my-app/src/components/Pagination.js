import React from 'react';

const Pagination = ({ currentPage, totalPages }) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <ul className="pagination">
            {pages.map(page => (
                <li key={page} className={page === currentPage ? 'active' : null}>
                    <a href="#">{page}</a>
                </li>
            ))}
        </ul>
    );
}

export default Pagination;