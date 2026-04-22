type ButtonProps = {
    label: string;
    disabled?: boolean;
    onClick: () => void;
};

export const Button = ({ label, disabled = false, onClick }: ButtonProps) => {
    return (
        <button disabled={disabled} onClick={onClick}>
            {label}
        </button>
    ); // Disabled param -> greyed out inactive button
};
