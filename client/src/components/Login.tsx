import React, { useState } from 'react'
import axios from 'axios'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"

const Login = () => {
    const [email, setmail] = useState<string>('')
    const [pass, setpass] = useState<string>('')

    const handleLogin = () => {
        axios.post("http://localhost:4000/api/v1/login", {
            email: email,
            password: pass
        }).then(e => { console.log(e) }).catch(e => console.log(e))
    }



    return (
        <div className='flex justify-center items-center h-[90vh] w-full' >
            <Card className="w-full !p-6 max-w-sm">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                    <CardAction>
                        <Button variant="link">Sign Up</Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    onChange={e => setmail(e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                                <Input id="password" type="password" required onChange={e => setpass(e.target.value)}
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button onClick={handleLogin} className="w-full">
                        Login
                    </Button>
                </CardFooter>
            </Card>

        </div>
    )
}

export default Login
