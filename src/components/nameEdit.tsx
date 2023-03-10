import * as React from "react";

interface Props {
    initialUserName: string;
    editingName: string;
    onNameUpdated: () => any;
    onEditingNameUpdated: (newEditingName: string) => any;
    disabled: boolean;
}

export const NameEditComponent = (props: Props) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onEditingNameUpdated(e.target.value);
    }

    const onNameSubmit = (event: any): any => {
        props.onNameUpdated();
    }

    return (
        <>
            <label>Update name:</label>
            <input type="text" value={props.editingName} onChange={onChange} />
            <button onClick={onNameSubmit} disabled={props.disabled}>Change</button>
        </>
    )
}