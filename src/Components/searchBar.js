import React from "react";
import {View, TextInput, Text, FlatList, TouchableOpacity} from "react-native";

import data from "./plaka.json";

// const  data = [
//               {"plaka":"01", "name":"ADANA"},
//               {"plaka":"02", "name":"ADIYAMAN"},
//              {"plaka":"03", "name":"AFYONKARAHİSAR"},
//              {"plaka":"04", "name":"AĞRI"},
//              {"plaka":"05", "name":"AMASYA"},
//              {"plaka":"06", "name":"ANKARA"},
//              {"plaka":"07", "name":"ANTALYA"},
//              {"plaka":"08", "name":"ARTVİN"},
//              {"plaka":"09", "name":"AYDIN"},
//              {"plaka":"10", "name":"BALIKESİR"},
//              {"plaka":"11", "name":"BİLECİK"},
//              {"plaka":"12", "name":"BİNGÖL"},
//              {"plaka":"13", "name":"BİTLİS"},
//              {"plaka":"14", "name":"BOLU"},
//              {"plaka":"15", "name":"BURDUR"},
//              {"plaka":"16", "name":"BURSA"},
//              {"plaka":"17", "name":"ÇANAKKALE"},
//              {"plaka":"18", "name":"ÇANKIRI"},
//              {"plaka":"19", "name":"ÇORUM"},
//              {"plaka":"20", "name":"DENİZLİ"},
//              {"plaka":"21", "name":"DİYARBAKIR"},
//              {"plaka":"22", "name":"EDİRNE"},
//              {"plaka":"23", "name":"ELAZIĞ"},
//              {"plaka":"24", "name":"ERZİNCAN"},
//              {"plaka":"25", "name":"ERZURUM"},
//              {"plaka":"26", "name":"ESKİŞEHİR"},
//              {"plaka":"27", "name":"GAZİANTEP"},
//              {"plaka":"28", "name":"GİRESUN"},
//              {"plaka":"29", "name":"GÜMÜŞHANE"},
//              {"plaka":"30", "name":"HAKKARİ"},
//              {"plaka":"31", "name":"HATAY"},
//              {"plaka":"32", "name":"ISPARTA"},
//              {"plaka":"33", "name":"MERSİN"},
//              {"plaka":"34", "name":"İSTANBUL"},
//              {"plaka":"35", "name":"İZMİR"},
//              {"plaka":"36", "name":"KARS"},
//              {"plaka":"37", "name":"KASTAMONU"},
//              {"plaka":"38", "name":"KAYSERİ"},
//              {"plaka":"39", "name":"KIRKLARELİ"},
//              {"plaka":"40", "name":"KIRŞEHİR"},
//              {"plaka":"41", "name":"KOCAELİ"},
//              {"plaka":"42", "name":"KONYA"},
//              {"plaka":"43", "name":"KÜTAHYA"},
//              {"plaka":"44", "name":"MALATYA"},
//              {"plaka":"45", "name":"MANİSA"},
//              {"plaka":"46", "name":"KAHRAMANMARAŞ"},
//              {"plaka":"47", "name":"MARDİN"},
//              {"plaka":"48", "name":"MUĞLA"},
//              {"plaka":"49", "name":"MUŞ"},
//              {"plaka":"50", "name":"NEVŞEHİR"},
//              {"plaka":"51", "name":"NİĞDE"},
//              {"plaka":"52", "name":"ORDU"},
//              {"plaka":"53", "name":"RİZE"},
//              {"plaka":"54", "name":"SAKARYA"},
//              {"plaka":"55", "name":"SAMSUN"},
//              {"plaka":"56", "name":"SİİRT"},
//              {"plaka":"57", "name":"SİNOP"},
//              {"plaka":"58", "name":"SİVAS"},
//              {"plaka":"59", "name":"TEKİRDAĞ"},
//              {"plaka":"60", "name":"TOKAT"},
//              {"plaka":"61", "name":"TRABZON"},
//              {"plaka":"62", "name":"TUNCELİ"},
//              {"plaka":"63", "name":"ŞANLIURFA"},
//              {"plaka":"64", "name":"UŞAK"},
//              {"plaka":"65", "name":"VAN"},
//              {"plaka":"66", "name":"YOZGAT"},
//              {"plaka":"67", "name":"ZONGULDAK"},
//              {"plaka":"68", "name":"AKSARAY"},
//              {"plaka":"69", "name":"BAYBURT"},
//              {"plaka":"70", "name":"KARAMAN"},
//              {"plaka":"71", "name":"KIRKKALE"},
//              {"plaka":"72", "name":"BATMAN"},
//              {"plaka":"73", "name":"ŞIRNAK"},
//              {"plaka":"74", "name":"BARTIN"},
//              {"plaka":"75", "name":"ARDAHAN"},
//              {"plaka":"76", "name":"IĞDIR"},
//              {"plaka":"77", "name":"YALOVA"},
//              {"plaka":"78", "name":"KARABÜK"},
//              {"plaka":"79", "name":"KİLİS"},
//              {"plaka":"80", "name":"OSMANİYE"},
//              {"plaka":"81", "name":"DÜZCE"},
//             ]
//             ;


const SearchBar = (props) =>{
    
    return(
        <View>
          <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={data}
          renderItem={({item}) => (
         <TouchableOpacity onPress={props.onSelect}><Text>{item.plaka}{item.name}</Text></TouchableOpacity>
          )}
          />
            
        </View>
    )
}

export {SearchBar};