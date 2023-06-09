import React, { createContext, ReactNode, useState, useEffect, SetStateAction, Dispatch } from 'react';
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
    alfabeticalOrder: boolean;
    setAlfabeticalOrder: Dispatch<SetStateAction<boolean>>;
    selectList: () => User[] | false;



}
interface AppProviderProps {
    children: ReactNode;
}
export const AppContext = createContext({} as AppContextData);


export function AppProvider({ children }: AppProviderProps) {


    useEffect(() => {
        if (!userList)
            getUsers();
        return () => {

        }
    })

    const [userList, setUserList] = useState<User[] | false>(false)

    const [alfabeticalOrder, setAlfabeticalOrder] = useState(false);
    const [alfabeticalUserList, setAlfabeticalUserList] = useState<User[] | false>(false)

    // Cria copia ordenada alfabeticamente de um lista.
    const order = (users: User[]) => {
        let aux = users.slice()
        setAlfabeticalUserList(aux.sort((a, b) =>
            a.nome.localeCompare(b.nome)))
    }
    // Retorna a lista ordenada alfabeticamente ou por ordem de inclusão.
    const selectList = () => {
        if (alfabeticalOrder)
            return alfabeticalUserList;
        return userList;
    }

    const [modalStatus, setModalStatus] = useState(false);
    const [modalMessage, setModalMessage] = useState("");


    const resetModal = () => {
        setModalStatus(false);
        setModalMessage('');
    }

    // Verifica se ja existe, na lista, algum usuário com este username.
    const inList = (newUser: string) => {
        if (!userList)
            return false;
        if (userList.findIndex(user => user.username === newUser) < 0)
            return false;

        return true;
    }

    // Verifica se se a lista ja alcançou seu tamanho maximo (5).
    const fullList = () => {
        if (!userList)
            return false;
        if (userList.length < 5)
            return false;

        return true;
    }

    // Adiciona na lista, o usuario com o username fornecido, se o mesmo atender os requisitos.
    const addUser = async (username: string) => {

        // Caso ja exista este username na lista, abre se o modal, e encerra a função.
        if (inList(username)) {
            setModalMessage("Usuário ja se encontra na lista.");
            setModalStatus(true);
            return;
        }
        // Caso a lista esteja cheia, abre-se o modal e encerra a função.
        if (fullList()) {
            setModalMessage("A lista já se encontra cheia.");
            setModalStatus(true);
            return;
        }
        const response = await fetchUser(username);

        // Caso o o username fornecido não esteja associado a uma conta do github, abre-se o modal e encerra a função.
        if (response.username === '-1') {
            setModalMessage("Nome de usuário inexistente.");
            setModalStatus(true);
            return;
        }
        // Caso se atenda todos os requisitos anteriores, envia-se os dados deste usuário para o backend.
        postUser(response);
    }

    // Envia os dados de um usuário para o backend, para que os mesmos sejam armazenados.
    const postUser = async (user: User) => {
        try {

            const response = await challengeApi.post('', user);
            if (Object.keys(response.data.users).length !== 0) {
                order(response.data.users);
                setUserList(response.data.users);
            }
        } catch (error) {
            console.log(error)
        }

    }

    // Solicita todos os usuarios cadastrados.
    const getUsers = async () => {
        try {

            const response = await challengeApi.get('');
            if (Object.keys(response.data.users).length !== 0) {
                order(response.data.users);
                setUserList(response.data.users);
            }
        } catch (error) {
            console.log(error)
        }

    }

    // Atualiza o estado da estrela.
    const toggle_star = async (username: string) => {
        try {

            const response = await challengeApi.patch(username + "/toggle-star");
            if (Object.keys(response.data.users).length !== 0) {
                order(response.data.users);
                setUserList(response.data.users);
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Remove um usuario da lista.
    const removeUser = async (username: string) => {
        try {

            const response = await challengeApi.delete(username);
            if (Object.keys(response.data.users).length !== 0) {
                order(response.data.users);
                setUserList(response.data.users);
            }
            else {
                setAlfabeticalUserList(false);
                setUserList(false);
            }
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
            resetModal,
            alfabeticalOrder,
            setAlfabeticalOrder,
            selectList
        }}>{children}</AppContext.Provider>
    );


}
