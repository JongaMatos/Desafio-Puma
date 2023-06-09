import React, { createContext, ReactNode, useState, useContext, useEffect } from 'react';
import { challengeApi } from '../services/challengeApi';
import fetchUser from '../services/githubApi';
import { User } from '../interface';

interface AppContextData {
    userList: User[] | false;
    addUser: (username: string) => Promise<void>;
    toggle_star: (username: string) => Promise<void>;
    removeUser: (username: string) => Promise<void>;
    modalStatus: boolean;
    modalMessage: string;
    resetModal: () => void;

}
interface AppProviderProps {
    children: ReactNode;
}
export const AppContext = createContext({} as AppContextData);


export function AppProvider({ children }: AppProviderProps) {


    useEffect(() => {
        if (!userList) {
            getUsers();
        }
        return () => {

        }
    }, [])


    const [userList, setUserList] = useState<User[] | false>(false)

    const [modalStatus, setModalStatus] = useState(false);
    const [modalMessage, setModalMessage] = useState("");


    const resetModal = () => {
        setModalStatus(false);
        setModalMessage('');
    }

    const inList = (newUser: string) => {
        if (!userList)
            return false;
        if (userList.findIndex(user => user.username == newUser) < 0)
            return false;

        return true;
    }

    const fullList = () => {
        if (!userList)
            return false;
        if (userList.length < 5)
            return false;

        return true;
    }
    const addUser = async (username: string) => {
        if (inList(username)) {
            setModalMessage("Usuário ja se encontra na lista.");
            setModalStatus(true);
            return;
        }
        if (fullList()) {
            setModalMessage("A lista já se encontra cheia.");
            setModalStatus(true);
            return;
        }
        const response = await fetchUser(username);
        if (response.username === '-1') {
            setModalMessage("Nome de usuário inexistente.");
            setModalStatus(true);
            return;
        }
        postUser(response);
        console.log(response)
    }

    const postUser = async (user: User) => {
        try {

            const response = await challengeApi.post('', user);
            console.log(response.data.users)
            setUserList(response.data.users);
        } catch (error) {
            console.log(error)
        }

    }

    const getUsers = async () => {
        try {

            const response = await challengeApi.get('');
            console.log(response.data.users)
            setUserList(response.data.users);
        } catch (error) {
            console.log(error)
        }

    }

    const toggle_star = async (username: string) => {
        try {

            const response = await challengeApi.patch(username + "/toggle-star");
            console.log(response.data.users)
            setUserList(response.data.users);
        } catch (error) {
            console.log(error)
        }
    }

    const removeUser = async (username: string) => {
        try {

            const response = await challengeApi.delete(username);
            console.log(response.data.users)
            setUserList(response.data.users);
        } catch (error) {
            console.log(error)
        }
    }





    return (
        <AppContext.Provider value={{
            userList,
            addUser,
            toggle_star,
            removeUser,
            modalStatus,
            modalMessage,
            resetModal
        }}>{children}</AppContext.Provider>
    );


}
