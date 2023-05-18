
interface Props {
    children: string;
    onClick: () => void;
    color: string;
}

export default function Button ({ children, onClick }: Props) {
    return (
        <button type="button" className="btn btn-primary" onClick={onClick}>{children}</button>
    )
}
