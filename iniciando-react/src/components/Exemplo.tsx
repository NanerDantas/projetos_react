type ExemploProps = {
    text: string;
}

export function Exemplo(props: ExemploProps) {
    return (
        <p>{props.text}</p>
    );
}