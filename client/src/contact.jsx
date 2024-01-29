import '/src/App.css'


export default function Contact() {
    return (
        <>
            <div className="contact-me">
                <h3>Please use this form to contact Me</h3>
                <form action="#">
                    <input type="text" name="nameIn" id="In-name" placeholder="Name"/>
                    <input type="text" name="lastNameIn" id="In-lname" placeholder="Last Name"/>
                    <input type="number" name="numIn" id="In-num" placeholder="Phone Number"/>
                    <input type="email" name="emailIn" id="In-email" placeholder="Email"/>
                    <input type="text" name="messageIn" id="In-message" placeholder="Message"/>
                    <button id="submitBtn">Submit</button>
                </form>
            </div>
        </>
    );
}
    