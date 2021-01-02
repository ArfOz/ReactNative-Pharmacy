import React,{useEffect, useState} from "react";
import {SafeAreaView,Text, FlatList, Modal,View, TouchableOpacity} from "react-native";
import axios from "axios";

import {cities} from "./Components";
import data from "./Components/plaka.json";

const Main = () =>{
    const [all, setAll] =useState([]);
    const [city, setCity] = useState([]);
    const [modalFlag, setModalFlag] = useState(false);
    const [pharmacy, setPharmacy]= useState([]);

    const fetchCities = async (plaka) =>{
        const {data} = await axios.get("http://api.kodlama.net/eczane/il/"+plaka);
        console.log(data);
        setPharmacy(data);
    };

    return(
        <SafeAreaView>
                <Text>
                    Şehir Seçiniz
                </Text>
          
            <View>
            <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={data}
          renderItem={({item}) => (
         <TouchableOpacity onPress={()=>fetchCities(item.plaka)}><Text>{item.name}</Text></TouchableOpacity>
          )}  />
            </View>
            <View>
                <Text></Text>
            </View>

            


        </SafeAreaView>
    )
}

export default Main;