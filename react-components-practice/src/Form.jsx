import { useState } from "react";

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        alert(`Thank you, ${name}! Your message has been submitted.`);

        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>

            <label>Name</label>
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
                required
            />

            <label>Email</label>
            <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                required
            />

            <label>Message</label>
            <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Enter your message"
                rows="4"
                required
            ></textarea>

            <button type="submit">
                Submit
            </button>

        </form>
    );
}

export default Form;