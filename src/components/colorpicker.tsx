import * as React from "react";
import { Color } from "../model/color";

interface PropsColorSlider {
    value: number;
    onValueUpdated: (newValue: number) => void;
}

const ColorSliderComponent = (props: PropsColorSlider) => {
    return (
        <div>
            <input type="range" min="0" max="255" value={props.value} onChange={event => props.onValueUpdated(+event.target.value)} />
            {props.value}
        </div>

    );
};

interface Props {
    color: Color,
    onColorUpdated: (color: Color) => void;
}

export const ColorPicker = (props: Props) => {
    return <div>
        <ColorSliderComponent value={props.color.red} onValueUpdated={(value) => props.onColorUpdated({ red: value, green: props.color.green, blue: props.color.blue })} />
        <br />
        <ColorSliderComponent value={props.color.green} onValueUpdated={(value) => props.onColorUpdated({ red: props.color.red, green: value, blue: props.color.blue })} />
        <br />
        <ColorSliderComponent value={props.color.blue} onValueUpdated={(value) => props.onColorUpdated({ red: props.color.red, green: props.color.green, blue: value })} />
    </div>
};