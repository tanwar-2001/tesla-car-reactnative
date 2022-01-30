import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import items from './items';
const Menu = () => {
  return (
    <View style={styles.menuItems}>
        {items.map(item => (
            <TouchableOpacity key={item.id}>
            <View style={styles.menuRow}>
              <FontAwesomeIcon icon={item.icon} style={styles.icon} size={24} />
              <View style={styles.menuTextbox}>
                <Text style={styles.menuText}>{item.title}</Text>
                {
                    item.subTitle && (<Text style={styles.subTitle}>{item.subTitle}</Text>)
                }
              </View>
              <FontAwesomeIcon
                icon={faChevronRight}
                size={24}
                style={styles.arrowIcon}
              />
            </View>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default Menu;
