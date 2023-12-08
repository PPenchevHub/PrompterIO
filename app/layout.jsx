import "@/styles/globals.css";

import Nav from  "@/components/Nav";
import Provider from "@/components/Provider"

export const metadata = {
    title: "Prompter", 
    description: "ai prompt generator"
}

const Rootlayout = ({children}) => {
  return (
        <html lang="en">
            <body>
                <div className="main">
                    <div className="gradient"/>
                </div>
                <div className="content">
                    <main className="app">
                        <Nav/>
                        {children}
                    </main>
                </div>

            </body>
        </html>
    )
}

export default Rootlayout