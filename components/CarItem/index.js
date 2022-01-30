import React,{useState} from "react";
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,ScrollView
} from "react-native";
import styles from "./styles";
import Menu from "../Menu";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCog,
  faToolbox,
  faFan,
  faKey,
  faLock,
  faUnlockAlt
} from "@fortawesome/free-solid-svg-icons";

const CarItem = () => {
  const [locked,setLock] = useState(false);
  const clickLock = () =>{
    if(locked){
      setLock(false)
    }
    else
    setLock(true)
  }

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.backgoundImage}
      />
      {/* header */}
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faCog} size={24} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>TeslaModel</Text>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faToolbox} size={24} style={styles.icon} />
          </TouchableOpacity>
        </View>
        {/* milage */}
        <View style={styles.batterySection}>
          <Image
            source={require("../../assets/battery.png")}
            style={styles.batteryImage}
          />
          <Text style={styles.batteryText}>150mi</Text>
        </View>
        {/* status */}
        <View style={styles.status}>
          <Text style={styles.statusText}>Parked</Text>
        </View>
        {/* Scroll icons */}
        <ScrollView>
        <View style={styles.controls}>
          <TouchableOpacity>
            <View style={styles.controlButtons}>
              <FontAwesomeIcon icon={faFan} style={styles.icon} size={24} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.controlButtons}>
              <FontAwesomeIcon icon={faKey} style={styles.icon} size={24} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickLock}>
            <View style={styles.controlButtons}>
              <FontAwesomeIcon icon={locked? faLock:faUnlockAlt} style={styles.icon} size={24} />
            </View>
          </TouchableOpacity>
        </View>
        <Menu/> 
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default CarItem;
