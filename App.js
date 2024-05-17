import AppNavigation from "./AppNavigation";
import {QueryClient, QueryClientProvider} from "react-query";
import {SettingProvider} from "./src/context/SettingContext";


export default function App() {

    const query = new QueryClient();

    return (
        <QueryClientProvider client={query}>
            <SettingProvider>
                <AppNavigation/>
            </SettingProvider>
        </QueryClientProvider>

    );
}

