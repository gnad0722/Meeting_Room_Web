import React from "react";
function ScheduleItem(props){
    const time=props.time;
    const available=props.available;
    const border=(time*2) % 2 == 0 ? "full":"half";
    return <div className={"schedule-item" + (available ? "" : " not-available")} id={border}>
        {border=="full"&& (time < 10 ? "0" + time + ":00" : time + ":00")}
    </div>
}
export default ScheduleItem