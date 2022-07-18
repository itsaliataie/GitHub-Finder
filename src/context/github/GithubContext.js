import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

export const GithubProvider = ({children}) => {
  const initialState = {
    users: [],
    user: {},
    repos:[],
    loading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  // Clear users from state
  // const clearUsers = () => dispatch({type: 'CLEAR_USERS'})

  return <GithubContext.Provider value={{
    // users: state.users,
    // loading: state.loading,
    // user: state.user,
    // repos: state.repos,
    // Instead of putting them all separetly, you can use spread operator
    ...state,
    dispatch,
    // clearUsers,
  }}>
    {children}
  </GithubContext.Provider>
}

export default GithubContext