import React, {Component, createContext} from 'react';
export const ThemeContext=createContext()

class ThemeContextProvider extends Component {
    state={
        islightTheme:false,
        light:{syntax:'#555',ui:'#ddd',bg:'#eee'},
        dark: {syntax:'#eee',ui:'#333',bg:'#555'}

    }
    toggleTheme=()=>{
        this.setState({islightTheme:!this.state.islightTheme})
    }
    render() {
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme:this.toggleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;