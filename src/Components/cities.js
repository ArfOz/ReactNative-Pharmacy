import React from "react";
import {TouchableOpacity} from "react-native";

const cities = (props) =>{
    return(
        <TouchableOpacity>
            <Text>{props}</Text>
        </TouchableOpacity>
    )
}

export {cities};