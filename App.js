import AppNavigation from "./AppNavigation";
import {QueryClient, QueryClientProvider} from "react-query";


export default function App() {

    const query = new QueryClient();

    return (
        <QueryClientProvider client={query}>
            <AppNavigation/>
        </QueryClientProvider>

    );
}

