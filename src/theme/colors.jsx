const colors = {
    peach: (opacity = 1) => `rgba(243, 140, 121, ${opacity})`,
    cream: (opacity = 1) => `rgba(255, 193, 180, ${opacity})`,
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    green: (opacity = 1) => `rgba(0, 112, 116, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    lightGray: (opacity = 1) => `rgba(242, 242, 242, ${opacity})`,
    darkGray: (opacity = 1) => `rgba(51, 51, 51, ${opacity})`,
    gray: (opacity = 1) => `rgba(153, 153, 153, ${opacity})`,
    red: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
    gold: (opacity = 1) => `rgba(255, 215, 0, ${opacity})`,
    darkModeBlack: (opacity = 1) => `rgba(27, 27, 27, ${opacity})`,
    darkModeBlue: (opacity = 1) => `rgba(146, 156, 241, ${opacity})`,
};

export default colors;