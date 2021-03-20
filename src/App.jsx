import {useState} from 'react';
import './App.css';
import FromPage from './FromPage';
import RenderPage from './RenderPage';

const App=()=> {
  const [inputs, setInputs] = useState({ error: '', isLoading: false });
  const [data,setData]=useState([]);


  const getData=async (movie)=>{
    const movies_res=await fetch('/db/movies.json');
    const data= await movies_res.json();
    const theaterDetails= await fetch('/db/theater.json');
    const theater_res=await theaterDetails.json();
    const filteredData = data.data.find(({movie_name})=>{ 
      return movie_name.toLowerCase().includes(movie.toLowerCase());
    });
    const finalData= theater_res.data.find(({theater_code})=>{
      return theater_code===filteredData?.theater_code});
      return finalData;
    }
	const handleChange = (event) => {
		const { name, value } = event.target;
		event.persist();
		setInputs((inputs) => ({ ...inputs, [name]: value }));
	};
	const showError = (err) => {
		const error = err?.response?.data || err?.message;
		setInputs((inputs) => ({
			...inputs,
			['error']: error,
			['isLoading']: false,
		}));
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		const { movie, location } = inputs;
		setInputs((inputs) => ({ ...inputs, ['isLoading']: true }));
	getData(movie, location)
			.then((data) =>{ setData(data);
        setInputs((inputs) => ({ ...inputs, ['isLoading']: false }));})
			.catch((err) => {
				showError(err);
			});
	};
    return (
      <div className='main ui container'>
        <div className='ui row'>
          <FromPage
          disabled={!inputs.movie && !inputs.location} 
            handleChange= { handleChange }
            handleSubmit= { handleSubmit }
          />
        </div>
        {inputs.error && (
				<div className='login-form-error'>
					<em>{inputs.error}</em>
				</div>
			)}
        <div className='ui row'>
          {!!data ?  <RenderPage data={data} />:''}
          {data.length?<div className="ui negative message">
  <div className="header">
    We're sorry movie name not in the database, Please try with other name
  </div>
  </div>:''}
         
        </div>

      </div>
    );
  }

export default App;
