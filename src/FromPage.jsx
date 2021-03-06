const FormPage = ( {handleChange,handleSubmit, disabled} ) => {
    return (
      <>
        <form className="ui form" onSubmit={ handleSubmit }>
          <div className="two fields">
              <div className="field">
                <label>Movie Name</label>
                <input type="text" name="movie" placeholder="Movie Name" onChange={ handleChange } required />
              </div>
              <div className="field">
                <label>Location</label>
                <input type="text" name="location" placeholder="Theater Name"  onChange={ handleChange } required/>
              </div>
          </div>
          <button className="ui button" type="submit" disabled={disabled}>Submit</button>
        </form>
      </>
    );
}

export default FormPage;
