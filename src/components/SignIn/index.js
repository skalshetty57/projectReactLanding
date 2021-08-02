import React from "react"
import {
	Container,
	FormWrap,
    Icon,
    FormContent,
    Form,
	FormH1,
    FormLabel,
    FormInput,
    FormButoon,   
    Text
} from "./SignInElements"

const SignIn = () => {
	return (
		<>
			<Container>
				<FormWrap>
					<Icon to="/">Wrench King</Icon>
					<FormContent>
						<Form action="#">
							<FormH1>Sign In to Account</FormH1>
							<FormLabel htmlFor="for">Email</FormLabel>
							<FormInput type="email" required />
							<FormLabel htmlFor="for">Password</FormLabel>
							<FormInput type="password" required />
							<FormButoon type="submit">Continue</FormButoon>
							<Text> Forgot password</Text>
						</Form>
					</FormContent>
				</FormWrap>
			</Container>
		</>
	)
}

export default SignIn
