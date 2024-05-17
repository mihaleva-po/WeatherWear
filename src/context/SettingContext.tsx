import React, { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { getData } from "../asyncStorage/asyncStorage";

interface PropsFace {
    gender: string;
    age: string;
    unit: string;
}

interface PropsSetting {
    currentSetting: PropsFace;
    changeSetting: (newSetting: Partial<PropsFace>) => void;
}

const SettingContext = createContext<PropsSetting | undefined>(undefined);

export const useSetting = () => {
    const context = useContext(SettingContext);
    if (!context) {
        throw new Error('context error');
    }
    return context;
};

interface SettingProviderProps {
    children: ReactNode;
}

export const SettingProvider = ({ children }: SettingProviderProps) => {
    const [currentSetting, setSetting] = useState<PropsFace>({
        gender: 'Мужской',
        age: '18-35',
        unit: 'Метрическая (цельсий)'
    });

    useEffect(() => {
        (async () => {
            const gender = (await getData('gender'))?.toString() ?? 'Мужской';
            const age = (await getData('age'))?.toString() ?? '18-35';
            const unit = (await getData('unit'))?.toString() ?? 'Метрическая (цельсий)';
            setSetting({ gender, age, unit });
        })();
    }, []);

    const changeSetting = (newSetting: Partial<PropsFace>) => {
        setSetting(prevSetting => ({ ...prevSetting, ...newSetting }));
    };

    return (
        <SettingContext.Provider value={{ currentSetting, changeSetting }}>
            {children}
        </SettingContext.Provider>
    );
};
