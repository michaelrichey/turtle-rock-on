import React from "react";
import "./App.css";

function IntroText() {
  return (
    <React.Fragment>
      <h2>Submit An Email to Papa Roach</h2>

      <p>
        hi! We at Papa Roach the Band LLC take your comments about our music
        seriously. Please submit a detailed message and one of our customer
        service team members will respond within two business days.
      </p>

      <p>
        If you are contacting us about a defective compact disc of our album{" "}
        <em>Lovehatetragedy</em> please include the phrase "My CD is broke," in
        the body of your message.
      </p>

      <p>
        If you are emailing to request a bottle or case of Pepsi Blue, please
        send inquiries of this type to PepsiCo.
      </p>
    </React.Fragment>
  );
}

function Form() {
  return (
    <React.Fragment>
      <EmailField />
      <br />
      <br />
      <MessageField />
      <br />
      <br />
      <SubmitButton />
    </React.Fragment>
  );
}

function EmailField() {
  return (
    <React.Fragment>
      <label for="email">Email: </label>
      <br />
      <input id="email" type="text" />
    </React.Fragment>
  );
}

function MessageField() {
  return (
    <React.Fragment>
      <label for="message">Message: </label>
      <br />
      <textarea id="message" rows="10" cols="70" />
    </React.Fragment>
  );
}

function SubmitButton() {
  return (
    <React.Fragment>
      <input type="submit" value="SUBMIT MESSAGE TO PAPA ROACH" />
    </React.Fragment>
  );
}

function App() {
  return (
    <div className="App">
      <IntroText />
      <Form />
    </div>
  );
}

export default App;
