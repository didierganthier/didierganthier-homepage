import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <IconButton
            aria-label="Toggle dark mode"
            icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)}
            onClick={toggleColorMode}
            
            colorScheme={useColorModeValue("purple", "orange")}
        ></IconButton>
    )
}

export default ThemeToggleButton