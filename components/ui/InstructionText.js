import { Text, StyleSheet } from "react-native"

import Colors from "../../constants/colors";

function InstructionText({children, style}) {
    return (
        <Text style={[styles.insturctionText, style]}>{children}</Text>
    )
}

export default InstructionText;

const styles = StyleSheet.create({
    insturctionText : {
        color: Colors.accent500,
        fontSize: 24,
        fontFamily: 'open-sans'
    }
})