import { useState } from "react";
import Languages from "./languages/Languages";
import Sources from "./sources/Sources";
import './AppContent.css'

function AppContent() {

    const [language, setLanguage] = useState();

    return <div className="MainContent">
        <Languages />
    </div>
}

export default AppContent