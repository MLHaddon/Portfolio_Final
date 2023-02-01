const ContactForm = ({inputs, handleChange, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input 
            type="text" 
            name="name"
            className="form-control" 
            id="name" 
            autoComplete="Name"
            onChange={handleChange}
            placeholder= {inputs.name}
          />
      </div>
      <div className="form-group">
        <label htmlFor="email">E-Mail</label>
        <input 
            type="email" 
            name="email"
            className="form-control" 
            id="email" 
            autoComplete="Email@Example.com"
            onChange={handleChange}
            placeholder= {inputs.email}
          />
        <span id="emailHelp" className="form-text text-muted" style={{display: "none"}}>Please enter a valid e-mail address.</span>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea 
          rows="10" 
          cols="100" 
          className="form-control" 
          id="message" 
          name="message" 
          aria-describedby="messageHelp" 
          placeholder={inputs.message} 
          onChange={handleChange}>
        </textarea>
        <span id="messageHelp" className="form-text text-muted" style={{display: "none"}}>Please enter a message.</span>
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;