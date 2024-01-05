import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

interface ModalContextProvider {
    children: ReactNode
}

type dataProject = {
    id: number,
    image: any,
    title: string,
    tecnologies: any[],
    linkProject?: string,
    linkGitHub: string,
    description: string,
    challenge: string[] | undefined
}

type ModalContextProps = {
    isModal: boolean
    setIsModal: Dispatch<SetStateAction<boolean>>
    dataProjeto: dataProject | undefined
    setdataProjeto: Dispatch<SetStateAction<dataProject | undefined>>
}

export const ModalContext = createContext<ModalContextProps | undefined>(undefined)

export const ModalContextProvider = ({ children }: ModalContextProvider) => {

    const [isModal, setIsModal] = useState(false);
    const [dataProjeto, setdataProjeto] = useState<dataProject | undefined>()

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