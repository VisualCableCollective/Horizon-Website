import { InputRow } from "../InputRow";

interface Props {
    title: String
}

export function FormTitle(props: Props) {
    return (
        <InputRow>
            <h1 className="text-xl font-bold mb-3">{props.title}</h1>
        </InputRow>
    )
}