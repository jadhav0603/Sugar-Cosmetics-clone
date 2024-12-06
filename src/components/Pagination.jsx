import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const generatePageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <div style={styles.paginationContainer}>
            {/* Previous Button */}
            <button
                style={styles.button}
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                Previous
            </button>

            {/* Page Numbers */}
            {generatePageNumbers().map((page) => (
                <button
                    key={page}
                    style={{
                        ...styles.pageButton,
                        ...(currentPage === page ? styles.activePage : {}),
                    }}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}

            {/* Next Button */}
            <button
                style={styles.button}
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
};

const styles = {
    paginationContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 0",
    },
    button: {
        padding: "8px 12px",
        margin: "0 5px",
        backgroundColor: "#f0f0f0",
        border: "1px solid #ccc",
        cursor: "pointer",
        fontSize: "14px",
    },
    pageButton: {
        padding: "8px 12px",
        margin: "0 5px",
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        cursor: "pointer",
        fontSize: "14px",
    },
    activePage: {
        backgroundColor: "#007bff",
        color: "#fff",
        borderColor: "#007bff",
    },
};

export default Pagination;
