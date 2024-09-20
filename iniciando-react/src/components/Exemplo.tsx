type ExemploProps = {
    text: string;
}

export function Exemplo(props: ExemploProps) {
    return (
        <p>{props.text}</p>                         //sempre usar {} quando for usar js no html
    );
}