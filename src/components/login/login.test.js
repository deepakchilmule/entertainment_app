import { render, fireEvent, screen } from '../../test-utils'
import userEvent from '@testing-library/user-event'
import { BrowserRouter} from 'react-router-dom'
import Login from './Login'
import { createMemoryHistory } from 'history'



describe('Login Component test', ()=>{
    
    it('checking label - email', ()=>{
        const { getByTestId } = render(<BrowserRouter> <Login /> </BrowserRouter>)
        const labelEmail = getByTestId('label-email').textContent
        expect(labelEmail).toEqual('Email address')
    })
    it('checking label - password', ()=>{
        const { getByTestId } = render(<BrowserRouter> <Login /> </BrowserRouter>)
        const labelPassword = getByTestId('label-password').textContent
        expect(labelPassword).toEqual('Password')
    })
    it('checking login button', ()=>{
        const { getByTestId } = render(<BrowserRouter> <Login /> </BrowserRouter>)
        const loginButton = getByTestId('loginBtn').textContent
        expect(loginButton).toEqual('Login')
    })
    // it('login button clicked successfully or not', ()=>{
    //     const onClick = jest.fn()
    //     const { getByTestId, getByRole } = render(<BrowserRouter> <Login /> </BrowserRouter>)
    //     const loginButton = getByTestId('loginBtn')
    //     fireEvent.click(loginButton)
    //     expect(onClick).toHaveBeenCalled();
    // })
    it('email input should only accept email type', ()=>{
        render(<BrowserRouter> <Login /> </BrowserRouter>)
        const email = screen.getByPlaceholderText('Enter a valid email address')
        userEvent.type(email, 'deepak')
        expect(email.value).not.toMatch('deepak@gmail.com')
    })
    it('testing navigation path', ()=>{
        const history = createMemoryHistory();
       const { getByTestId } = render(<BrowserRouter> <Login /> </BrowserRouter>)
       const navBtn = getByTestId('loginBtn')
        fireEvent.click(navBtn) 
        expect(history.location.pathname).toBe('/')
    })

})

 
// const button = screen.getByRole('button')
// fireEvent.click(button)

// expect(onClick).toHaveBeenCalledTimes(1);