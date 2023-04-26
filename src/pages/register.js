import React from 'react';
import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { Dropdown } from "@nextui-org/react";
import { useAuth } from '@/hooks/auth'
import { useState, useMemo } from 'react'

const Register = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [birth_date, setBirthDate] = useState('')
    const [birth_country, setBirthCountry] = useState('')
    const [birth_place, setBirthPlace] = useState('')
    const [jmbg, setjmbg] = useState('')
    const [home_country, setHomeCountry] = useState('')
    const [home_place, setHomePlace] = useState('')
    const [home_address, setHomeAddress] = useState('')
    const [phone, setPhoneNumber] = useState('')
    const [seniority, setSeniority] = useState('')
    const [team_lead_id, setTeamLead] = useState('')
    const [selected, setSelected] = useState(new Set(["text"]));
    const [profile_picture, setProfilePicture] = useState('')
    const [errors, setErrors] = useState([])

    
    const submitForm = event => {
        event.preventDefault()
        
        register({
            first_name,
            last_name,
            email,
            password,
            password_confirmation: password_confirmation,
            birth_date,
            birth_country,
            birth_place,
            home_country,
            home_place,
            jmbg,
            phone,
            profile_picture,
            setErrors,
        })
    }
    
    const teamLeaders = [
        { id: 1, first_name: "Marko", last_name: "Miric" },
        { id: 2, first_name: "Bojan", last_name: "Vojvodic" },
        { id: 3, first_name: "Filip", last_name: "Peskanov" },
        { id: 4, first_name: "Milan", last_name: "Milanovic" },
      ];

    const selectedValue = useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );

    return (
        <GuestLayout>
            <AuthCard
                logo={
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                    </Link>
                }>
                <form onSubmit={submitForm}>
                    {/* First Name */}
                    <div className="mt-4">
                        <Label htmlFor="first_name">First Name</Label>

                        <Input
                            id="first_name"
                            type="text"
                            value={first_name}
                            className="block mt-1 w-full"
                            onChange={event => setFirstName(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.first_name} className="mt-2" />
                    </div>

                    {/* Last Name */}
                    <div className="mt-4">
                        <Label htmlFor="last_name">Last Name</Label>

                        <Input
                            id="last_name"
                            type="text"
                            value={last_name}
                            className="block mt-1 w-full"
                            onChange={event => setLastName(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.last_name} className="mt-2" />
                    </div>

                    {/* Email Address */}
                    <div className="mt-4">
                        <Label htmlFor="email">Email</Label>

                        <Input
                            id="email"
                            type="email"
                            value={email}
                            className="block mt-1 w-full"
                            onChange={event => setEmail(event.target.value)}
                            required
                        />

                        <InputError messages={errors.email} className="mt-2" />
                    </div>

                    {/* Password */}
                    <div className="mt-4">
                        <Label htmlFor="password">Password</Label>

                        <Input
                            id="password"
                            type="password"
                            value={password}
                            className="block mt-1 w-full"
                            onChange={event => setPassword(event.target.value)}
                            required
                            autoComplete="new-password"
                        />

                        <InputError
                            messages={errors.password}
                            className="mt-2"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mt-4">
                        <Label htmlFor="password_confirmation">
                            Confirm Password
                        </Label>

                        <Input
                            id="password_confirmation"
                            type="password"
                            value={password_confirmation}
                            className="block mt-1 w-full"
                            onChange={event =>
                                setPasswordConfirmation(event.target.value)
                            }
                            required
                        />

                        <InputError
                            messages={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    {/* Birth Date */}
                    <div className="mt-4">
                        <Label htmlFor="birth_date">Birth Date</Label>

                        <Input
                            id="birth_date"
                            type="date"
                            value={birth_date}
                            className="block mt-1 w-full"
                            onChange={event => setBirthDate(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.birth_date} className="mt-2" />
                    </div>

                    {/* Birth Country */}
                    <div className="mt-4">
                        <Label htmlFor="birth_country">Birth Country</Label>

                        <Input
                            id="birth_country"
                            type="text"
                            value={birth_country}
                            className="block mt-1 w-full"
                            onChange={event => setBirthCountry(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.birth_country} className="mt-2" />
                    </div>

                    {/* Birth Place */}
                    <div className="mt-4">
                        <Label htmlFor="birth_place">Birth Place</Label>

                        <Input
                            id="birth_place"
                            type="text"
                            value={birth_place}
                            className="block mt-1 w-full"
                            onChange={event => setBirthPlace(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.birth_place} className="mt-2" />
                    </div>

                    {/* Home Country */}
                    <div className="mt-4">
                        <Label htmlFor="home_country">Home Country</Label>

                        <Input
                            id="home_country"
                            type="text"
                            value={home_country}
                            className="block mt-1 w-full"
                            onChange={event => setHomeCountry(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.home_country} className="mt-2" />
                    </div>

                    {/* Home Place */}
                    <div className="mt-4">
                        <Label htmlFor="home_place">Home Place</Label>

                        <Input
                            id="home_place"
                            type="text"
                            value={home_place}
                            className="block mt-1 w-full"
                            onChange={event => setHomePlace(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.home_place} className="mt-2" />
                    </div>

                    {/* Home Address */}
                    <div className="mt-4">
                        <Label htmlFor="home_address">Home Address</Label>

                        <Input
                            id="home_address"
                            type="text"
                            value={home_address}
                            className="block mt-1 w-full"
                            onChange={event => setHomeAddress(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.home_address} className="mt-2" />
                    </div>

                    {/* JMBG */}
                    <div className="mt-4">
                        <Label htmlFor="jmbg">Social Security Number / JMBG</Label>

                        <Input
                            id="jmbg"
                            type="text"
                            value={jmbg}
                            className="block mt-1 w-full"
                            onChange={event => setjmbg(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.jmbg} className="mt-2" />
                    </div>

                    {/* Phone Number */}
                    <div className="mt-4">
                        <Label htmlFor="phone">Phone Number</Label>

                        <Input
                            id="phone"
                            type="text"
                            value={phone}
                            className="block mt-1 w-full"
                            onChange={event => setPhoneNumber(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.phone} className="mt-2" />
                    </div>
                    
                    {/* Ovo je stara verzija V V V */}
                    {/* Team Leader
                    <div className="mt-4">
                        <Dropdown>
                            <Dropdown.Button shadow>Choose your team leader</Dropdown.Button>
                            <Dropdown.Menu aria-label="Dynamic Actions" items={teamLeaders}>
                                {(teamLead) => (
                                <Dropdown.Item
                                    key={teamLead.id}
                                    value={team_lead_id}
                                    onChange={event => setTeamLead(event.target.value)}
                                >
                                    {teamLead.first_name} {teamLead.last_name}
                                </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div> */}

                    {/* Team Leader */}
                    <div className="mt-4">
                        <Label htmlFor="team_lead_id">Choose your team leader</Label>

                        <Dropdown>
                            <Dropdown.Button solid color="warning" css={{ tt: "capitalize" }}>
                                {selected}
                            </Dropdown.Button>
                            <Dropdown.Menu
                                aria-label="Single selection actions"
                                color="secondary"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={selected}
                                onSelectionChange={setSelected}
                                items={teamLeaders}
                                >
                            {(teamLead) => (
                                <Dropdown.Item
                                    key={teamLead.id} 
                                    value={team_lead_id}
                                    onChange={event => setTeamLead(event.target.value)}
                                >
                                    {teamLead.first_name} {teamLead.last_name}
                                </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>


                    {/* Seniority */}
                    <div className="mt-4">
                        <Label htmlFor="seniority">Seniority</Label>

                        <Input
                            id="seniority"
                            type="number"
                            value={seniority}
                            className="block mt-1 w-full"
                            onChange={event => setSeniority(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.seniority} className="mt-2" />
                    </div>

                    {/* Profile Picture */}
                    <div className="mt-4">
                        <Label htmlFor="profile_picture">Profile Picture</Label>

                        <Input
                            id="profile_picture"
                            type="file"
                            value={profile_picture}
                            className="block mt-1 w-full"
                            onChange={event => setProfilePicture(event.target.value)}
                            accept="image/*"
                            autoFocus
                        />

                        <InputError messages={errors.profile_picture} className="mt-2" />
                    </div>


                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href="/login"
                            className="underline text-sm text-gray-600 hover:text-gray-900">
                            Already registered?
                        </Link>

                        <Button className="ml-4">Register</Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default Register
