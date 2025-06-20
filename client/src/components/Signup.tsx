import React, { useEffect, useState } from 'react'
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
import axios from 'axios'

const Signup = () => {

    const [userName, setUserName] = useState<string>('')
    const [userEmail, setUserEmail] = useState<string>('')
    const [userPassword, setUserPassword] = useState<string>('')


    const handleUser = () => {
        axios.post("http://localhost:4000/api/v1/registration",
            {
                name: userName,
                email: userEmail,
                password: userPassword
            })
            .then(e => console.log(e))
            .catch(e => console.log(e))
    }


    return (
        <div className='flex justify-center items-center h-[90vh] w-full' >
            <Card className="w-full !p-6 max-w-sm">
                <CardHeader>
                    <CardTitle>Create your account</CardTitle>
                    <CardDescription>
                        Enter your Detail to create your account
                    </CardDescription>
                    <CardAction>
                        <Button variant="link">Login</Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Full Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="enter your full name"
                                    required
                                    onChange={e => setUserName(e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    onChange={e => setUserEmail(e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>

                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    onChange={e => setUserPassword(e.target.value)}
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type='submit' onClick={handleUser} className="w-full">
                        Signup
                    </Button>
                </CardFooter>
            </Card>

        </div>
    )
}

export default Signup
