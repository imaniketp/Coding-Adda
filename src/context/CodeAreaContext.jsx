import { createContext, useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';

export const CodeAreaContext = createContext();

export const languageMap = {
    "cpp": {
        id: 54,
        defaultCode: 
        "#include <iostream>\n"
        + "using namespace std;\n\n"
        + "int main() {\n"
        + "\tcout << 'Hello World!';\n"
        + "\treturn 0;\n"
        + "}",
    },
    "java": {
        id: 62,
        defaultCode: `public class Main {
            public static void main(String[] args) {
                System.out.println("Hello World!");
            }
    }`,
    },
    "python": {
        id: 71,
        defaultCode: `print("Hello World!")`,
    },
    "javascript": {
        id: 63,
        defaultCode: `console.log("Hello World!");`,
    }
}

const CodeAreaProvider = ({children}) => {

    const initialItems = {
        [uuid()]: {
            title: "DSA",
            codeareas: {
                [uuid()]: {
                    title: "Stack Implementation",
                    language: "cpp",
                    code: languageMap["cpp"].defaultCode,
                },
                [uuid()]: {
                    name: "Array",
                    language: "javascript",
                    code: languageMap["javascript"].defaultCode,
                },
            }
        },
    }

    
    const [folders, setFolders] = useState(() => {
        let localData = localStorage.getItem('codeareas-data');
        if (localData === null || localData === undefined) {
            return initialItems;
        }
    
        return JSON.parse(localData);

    })

    useEffect(() => {
        localStorage.setItem('codeareas-data', JSON.stringify(folders));
    }, [folders])

    const deleteCard = (folderId, cardId) => {
        setFolders((oldState) => {
            const newState = { ...oldState };
            delete newState[folderId].codeareas[cardId];
            return newState;
        });
    }

    const deleteFolder = (folderId) => {
        setFolders((oldState) => {
            const newState = { ...oldState };
            delete newState[folderId];
            return newState;
        });
    }

    const addFolder = (folderName) => {
        setFolders((oldState) => {
            const newState = { ...oldState };

            newState[uuid()] = {
                title: folderName,
                codeareas: {}
            }

            return newState;
        })
    }

    const addCodearea = (folderId, codeareaName, language) => {
        setFolders((oldState) => {
            const newState = { ...oldState };

            newState[folderId].codeareas[uuid()] = {
                title: codeareaName,
                language: language
            }

            return newState;
        })
    }

    const addCodeareaAndFolder = (folderName, codeareaName, cardLanguage) => {
        setFolders((oldState) => {
            const newState = { ...oldState }

            newState[uuid()] = {
                title: folderName,
                codeareas: {
                    [uuid()]: {
                        title: codeareaName,
                        language: cardLanguage,
                        code: languageMap[cardLanguage].defaultCode,
                    }
                }
            }

            return newState;
        })
    }

    const editFolderTitle = (folderId, folderName) => {
        setFolders((oldState) => {
            const newState = { ...oldState }
            newState[folderId].title = folderName;
            return newState;
        })
    }

    const editCodeareaTitle = (folderId, cardId, CodeareaTitle) => {
        setFolders((oldState) => {
            const newState = { ...oldState }
            newState[folderId].codeareas[cardId].title = CodeareaTitle;
            return newState;
        })
    }

    const saveCodearea = (folderId, cardId, newCode, newLanguage) => {
        setFolders((oldState) => {
            const newState = { ...oldState };
            newState[folderId].codeareas[cardId].code = newCode;
            newState[folderId].codeareas[cardId].language = newLanguage;
            return newState;
        })
    }

    const CodeAreaFeatures = {
        folders: folders,
        deleteCard: deleteCard,
        deleteFolder: deleteFolder,
        addFolder: addFolder,
        addCodearea: addCodearea,
        addCodeareaAndFolder: addCodeareaAndFolder,
        editFolderTitle: editFolderTitle,
        editCodeareaTitle: editCodeareaTitle,
        saveCodearea: saveCodearea,
    }

    return (
        <CodeAreaContext.Provider value={CodeAreaFeatures}>
            {children}
        </CodeAreaContext.Provider>
    )
}

export default CodeAreaProvider;