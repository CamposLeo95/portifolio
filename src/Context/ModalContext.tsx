import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"
import { ProjetosProps } from "../interfaces/interfaces"

interface ModalContextProvider {
    children: ReactNode
}

type ModalContextProps = {
    isModal: boolean
    setIsModal: Dispatch<SetStateAction<boolean>>
    dataProjeto: ProjetosProps | undefined
    setdataProjeto: Dispatch<SetStateAction<ProjetosProps | undefined>>
}

export const ModalContext = createContext<ModalContextProps | undefined>(undefined)

export const ModalContextProvider = ({ children }: ModalContextProvider) => {

    const [isModal, setIsModal] = useState(false);
    const [dataProjeto, setdataProjeto] = useState<ProjetosProps | undefined>()

    const contextValue: ModalContextProps = {
        isModal,
        setIsModal,
        dataProjeto,
        setdataProjeto
    };

    return (
        <ModalContext.Provider value={contextValue}>
            {children}
        </ModalContext.Provider>
    );
};