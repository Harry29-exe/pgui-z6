import React, {ChangeEvent} from "react";
import {StationDTO} from "../data/Data";
import {Field} from "./Field";
import "../App.css"

export interface StationProps {
    station: StationDTO
}

type StationState = {
    difference: number,
    color: string
}

export class Station extends React.Component<StationProps, StationState> {

    constructor(props: StationProps) {
        super(props);

        let diff = this.calcDiff(props.station)


        //model
        this.state = {
            difference: diff,
            color: this.getColor(diff)
        }
    }

    //kontroler
    onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        let v = e.target.value;
        let station = this.props.station;
        station.value = parseInt(v)

        this.updateState(station);
    }

    componentDidUpdate(prevProps: Readonly<StationProps>) {
        if(prevProps.station.id !== this.props.station.id) {
            this.updateState(this.props.station);
        }
    }

    updateState = (station: StationDTO) => {
        let diff = this.calcDiff(station)
        this.setState({
            difference: diff,
            color: this.getColor(diff)
        });
    }

    calcDiff = (station: StationDTO) => station.expected - station.value

    getColor = (difference: number) => difference >= 0? "black": "red"

    //view
    render() {
        let station = this.props.station;
        let state = this.state;
        return (
            <div className="details">
                <form>
                    <ul>
                        <Field label="Identyfikator" value={station.name}/>
                        <Field label="Data pomiaru" value={station.date}/>
                        <Field label="Oczekiwana" value={station.expected}/>
                        <Field
                            label="Zmierzona"
                            value={station.value}
                            editable
                            onChange={this.onValueChange}
                        />
                        <Field
                            id="input-expected"
                            label="Różnica"
                            value={this.state.difference === 0? "-": state.difference}
                            style={{color: state.color}}
                        />
                    </ul>
                </form>
            </div>
        );
    }
}