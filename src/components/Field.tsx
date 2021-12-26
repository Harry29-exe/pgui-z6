import {ChangeEvent, useState} from "react";
import "../App.css"

export interface FieldProps {
    label: string,
    value: string | number,
    editable?: boolean,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => any,
    id?: string,
    style?: any
}

export const Field = (props: FieldProps) => (
    <li>
        <span>{props.label}:</span>
        <span>
            <input
                type="text"
                readOnly={!props.editable}
                value={props.value}
                onChange={props.onChange}
                id={props.id}
                style={props.style? props.style: {}}
            />
        </span>
    </li>
);