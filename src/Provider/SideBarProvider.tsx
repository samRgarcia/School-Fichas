import React, {useMemo, useState} from 'react';

interface SideBarContextValue {
    isOpen: boolean;
    toggle: () => void;
    setOpen: (isOpen: boolean) => void;
}

const SideBarContext = React.createContext<SideBarContextValue>({
    isOpen: false,
    toggle: () => {
    },
    setOpen: () => {
    }
});

export const SideBarProvider: React.FC = (props) => {
    const [open, setOpen] = useState(false);
    const isOpen = useMemo(() => {
        return open;
    }, [open]);

    const toggle = () => {
        setOpen(!open);
    }

    return (
        <SideBarContext.Provider value={{isOpen, toggle, setOpen}}>
            {props.children}
        </SideBarContext.Provider>
    )
}

export const useSideBarContext = () => {
    const context = React.useContext(SideBarContext);
    if (!context) {
        throw new Error(
            'useSideBarContext should be wrapped by SideBarProvider',
        );
    }
    return context;
}
