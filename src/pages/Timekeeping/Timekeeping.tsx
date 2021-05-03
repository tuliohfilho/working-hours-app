import React from "react";


import { FormatDateToHours } from "../../utils";
import { CardBox, CalendarInfo, If, PointEntryIcon } from "../../components";
import { DayCardContainer, DayCardTitle, DayCardBody, DayCard, DayButton } from "./styles";

const Timekeeping: React.FC = () => {

return  (
        <CardBox 
            size={12} 
            title='Timekeeping'>
                <CalendarInfo align='center' />
                <DayCardContainer>
                    <DayCard bordered striped>
                        <thead>
                            <tr>
                                {["Arriving",
                                "Lunch (Start)",
                                "Lunch (Stop)",
                                "Exiting",
                                "Extra (Start)",
                                "Extra (Stop)", 
                                "Amount"].map((item) => {
                                    return (
                                    <DayCardTitle>{item}</DayCardTitle>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            {[
                            {active: false, value: "2021-04-21T08:00:00"},
                            {active: false, value: "2021-04-21T12:00:00"},
                            {active: false, value: "2021-04-21T13:00:00"},
                            {active: true, value: null},
                            {active: false, value: null},
                            {active: false, value: null},
                            {active: false, value: "2021-04-21T04:00:00"}].map((item) => {
                                return (
                                    <DayCardBody>
                                        <If conditional={item.active}>
                                            <DayButton>
                                                <PointEntryIcon />
                                            </DayButton>
                                        </If>
                                        {FormatDateToHours(item.value)}
                                    </DayCardBody>
                                )
                            })}
                        </tr>
                    </tbody>
                    </DayCard>
                </DayCardContainer>
        </CardBox>
    )
}

export default Timekeeping;