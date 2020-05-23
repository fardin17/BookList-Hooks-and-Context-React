import React, {Component, createContext} from 'react';
export const AuthContext=createContext()

class AuthContextProvider extends Component {
    state={
        isAuthinticated:false
    }
    toggleAuth=()=>{
        this.setState({isAuthinticated:!this.state.isAuthinticated})
    }
    render() {

        return (
            <AuthContext.Provider value={{...this.state, toggleAuth:this.toggleAuth}}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;