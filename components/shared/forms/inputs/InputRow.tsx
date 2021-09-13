interface Props {
    children: React.ReactNode
}

export function InputRow(props : Props) {
    return (
        <div className="mb-4">
            {props.children}
        </div>
    )
}