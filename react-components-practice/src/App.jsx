import { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Button from "./Button";
import Form from "./Form";

import "./App.css";

function App() {

    // State for the counter
    const [count, setCount] = useState(0);

    // Data for cards
    const projects = [
        {
            title: "Pandas Data Cleaning",
            description:
                "A Python and Pandas project for inspecting and cleaning a dataset.",
            technology: "Python | Pandas"
        },
        {
            title: "Personal Portfolio",
            description:
                "A responsive portfolio website created using HTML and CSS.",
            technology: "HTML | CSS"
        },
        {
            title: "React Blog",
            description:
                "A React blog interface with reusable components, search and filtering.",
            technology: "React | JavaScript | JSON"
        }
    ];

    return (
        <div className="app">

            <Header />

            <main>

                {/* Introduction */}
                <section className="welcome-section">

                    <h2>
                        Welcome, Ankita! 👋
                    </h2>

                    <p>
                        This project demonstrates reusable React
                        components, props, state, and dynamic rendering.
                    </p>

                </section>


                {/* Dynamic Cards */}
                <section id="components" className="components-section">

                    <h2>
                        My Projects
                    </h2>

                    <div className="cards-container">

                        {projects.map((project, index) => (
                            <Card
                                key={index}
                                title={project.title}
                                description={project.description}
                                technology={project.technology}
                            />
                        ))}

                    </div>

                </section>


                {/* State Demonstration */}
                <section className="counter-section">

                    <h2>
                        State Demonstration
                    </h2>

                    <p>
                        Button clicked: <strong>{count}</strong> times
                    </p>

                    <Button
                        text="Click Me"
                        onClick={() => setCount(count + 1)}
                    />

                </section>


                {/* Form */}
                <section id="contact" className="form-section">

                    <h2>
                        Contact Form
                    </h2>

                    <Form />

                </section>

            </main>

            <Footer />

        </div>
    );
}

export default App;