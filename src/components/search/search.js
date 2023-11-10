import {useState} from 'react';
import {useNavigate} from 'react-router'
import './search.css';

function Search() {

    const [search, setSearch] = useState('')
    const handleChange = (e) => {
        search = e.target.value
    }
    const handleSubmit = (e) => {
        const form = e.target
        const formData = new FormData(form)
        console.log(formData)
        console.log(formData.get('search'));
        navigate(`/List/${formData.get('search')}`)
    }
    const navigate = useNavigate()
    return (
        <div className='search'>
            <h2>{search}</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor='idSearch'>Votre recherche</label>
                    <input id='idSearch' name='search' type='text' />
                </fieldset>
                <input type='submit' value={search} onChange = {handleChange} />
            </form>
        </div>
    );
}

export default Search;
