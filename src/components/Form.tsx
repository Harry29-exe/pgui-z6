import React, {Ref} from "react";
import {DataSet, StationDTO} from "../data/Data";
import {Station} from "./Station";
import "../App.css"

export class Form extends React.Component {
    //gdyby nie to ze stosujemy kontroler zarządzający to powinno być w stanie komponentu
    private currentStation?: StationDTO = undefined;

    //kontroller zarządzający
    onStationChange = (newStationId: number) => {
        let station = DataSet.stations.find(s => s.id === newStationId);
        if(!station) throw new Error();


        this.currentStation = station;
        this.forceUpdate();
    }

    render() {

        return (
            <div className="container">
                <h1>Pokaz kontroli stanu</h1>
                <div className="row">
                    <div className="col-4">
                        <select
                            className="stations"
                            name="stations"
                            multiple
                        >

                            {DataSet.stations.map(s => (
                                <option key={s.id} value={s.id}
                                        onClick={() => this.onStationChange(s.id)}
                                >
                                    {s.name}
                                </option>
                            ))}

                        </select>
                    </div>


                    <div className="col-4">
                        {this.currentStation ?
                            <Station station={this.currentStation}/>
                            :
                            <div>Wybierz stację...</div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

//