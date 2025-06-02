type Props = {
    factionName: string;
    classNames: string[];
};

export const FactionSelection = (props: Props) => {
    return (
        <div className={props.classNames.join(" ")}>{props.factionName}</div>
    );
};
