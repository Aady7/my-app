import React from "react";

const Button = ({ label, onClick, disabled, outline }) => {
    const buttonStyles = {
        backgroundColor: outline ? "white" : "blue",
        color: "white",
        fontWeight: "bold",
        padding: "8px 16px",
        borderRadius: "4px",
        border: outline ? "1px solid black" : "none",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        marginRight: "10px"
    };

    return (
        <button
            style={buttonStyles}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;
