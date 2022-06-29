import {render, screen} from '../../test-utils'
import SignUp from './SignUp'
import { BrowserRouter } from 'react-router-dom'



describe( 'sign up test' , ()=>{
    it( 'sign up text', ()=>{
        const { getByTestId } = render(<BrowserRouter> <SignUp /> </BrowserRouter> )
        const signupText = getByTestId('signup-text').innerHTML
        expect(signupText).toEqual('Sign up')  
    })

    it('checking label - name', ()=>{
        const { getByTestId } = render(<BrowserRouter> <SignUp /> </BrowserRouter> )
        const labelName = getByTestId('label-name').innerHTML
        expect(labelName).toEqual('Your Name')
    })

    it('checking label - email', ()=>{
        const { getByTestId } = render(<BrowserRouter> <SignUp /> </BrowserRouter> )
        const labelEmail = getByTestId('label-email').innerHTML
        expect(labelEmail).toEqual('Your Email')
    })

    it('checking label - password', ()=>{
        const { getByTestId } = render(<BrowserRouter> <SignUp /> </BrowserRouter> )
        const labelPassword = getByTestId('label-password').innerHTML
        expect(labelPassword).toEqual('Password')
    })
    it('checking register button', ()=>{
        const { getByTestId } = render(<BrowserRouter> <SignUp /> </BrowserRouter> )
        const registerButton = getByTestId('register').innerHTML
        expect(registerButton).toEqual('Register')
    })
})