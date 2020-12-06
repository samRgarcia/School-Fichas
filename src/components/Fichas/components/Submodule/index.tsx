import React from "react";
import EditSub from "./EditInformationSub";

export const SubModule =(main:number)=>{
    switch (main) {
        case 1:
            return <EditSub/>
        break;
        case 2:
            return <h1>case2</h1>
        break;
        case 3:
            return <h1>case3</h1>
        case 4:
            return <h1>case 4</h1>
        break;
        default:
            return null;
            break;
    }
}
