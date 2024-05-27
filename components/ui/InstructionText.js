import { Text, StyleSheet } from "react-native"

import Colors from "../../constants/colors";

function InstructionText({children}) {
    return (
        <Text style={styles.insturctionText}>{children}</Text>
    )
}

export default InstructionText;

const styles = StyleSheet.create({
    insturctionText : {
        color: Colors.accent500,
        fontSize: 24
    }
})