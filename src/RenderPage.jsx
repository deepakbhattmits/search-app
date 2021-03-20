
const RenderPage = ( {data:{theater_name,theater_address,theater_ratings}} ) => {
   const renderData = ( ) => {
      return (
          <tr>
            <td>{theater_name}</td>
            <td>{theater_address }</td>
            <td>{theater_ratings }</td>
          </tr>
          );
    }
    
    return (
      
      <div>
        <table className="ui single line table">
            <thead>
                  <tr>
                    <th>Theater Name</th>
                    <th>Theater Address</th>
                    <th>Theater Ratings</th>
                  </tr>
            </thead>
            <tbody>
                {renderData() }
            </tbody>
          </table>
      </div>
    );
}

export default RenderPage;
