import { render, screen } from '../test-utils'
import { BrowserRouter} from 'react-router-dom'
import Movies from '../components/movies/Movies'
import { fetchMovies } from '../features/movies/moviesSlice'
import axios from 'axios'
import mockAxios from 'axios'



jest.mock(axios)
mockAxios.get.mockImplementation(()=>{
    Promise.resolve({data:{name : 'deepak' }})
})

describe('Movies Component test', ()=>{
    render( <BrowserRouter> <Movies /> </BrowserRouter>  )
    it('api calls mock', async ()=>{
     const result = await fetchMovies();
     console.log(result)
    expect(result).toBe('deepak')

    })

})