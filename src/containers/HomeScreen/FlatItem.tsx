import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

type obj = {
    id: number,
    title: string
}

type Props = {
    index: number,
    item: obj,
}

const FlatItem: React.FC<Props> = ({ index, item }) => {

    return (
        <View style={styles.viewItem}>
            <Text style={styles.textItem}>{item.title}</Text>
        </View>
    )
}

export default FlatItem