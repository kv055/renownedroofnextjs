"use client"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iQXDnHFKoJH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { useState } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
    const [emailChecked, setEmailChecked] = useState(false);
    const [phoneChecked, setPhoneChecked] = useState(false);

    const handleEmailChange = () => {
        setEmailChecked(!emailChecked);
    }

    const handlePhoneChange = () => {
        setPhoneChecked(!phoneChecked);
    }
    return (
        <div className="max-w-md mx-auto space-y-8">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold">Get a free quote</h2>
            </div>
            <div className="space-y-4">
                <div className="flex space-x-4">
                    <Label className="w-1/3" htmlFor="firstName">
                        First Name
                    </Label>
                    <Input className="w-2/3" id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="flex space-x-4">
                    <Label className="w-1/3" htmlFor="lastName">
                        Last Name
                    </Label>
                    <Input className="w-2/3" id="lastName" placeholder="Enter your last name" />
                </div>
                <div className="flex space-x-4">
                    <Label className="w-1/3" htmlFor="email">
                        Email
                    </Label>
                    <Input className="w-2/3" id="email" placeholder="Enter your email" type="email" />
                </div>
                <div className="flex space-x-4">
                    <Label className="w-1/3" htmlFor="phone">
                        Phone Number
                    </Label>
                    <Input className="w-2/3" id="phone" placeholder="Enter your phone number" type="tel" />
                </div>
                <div className="flex space-x-4">
                    <Label className="w-1/3" htmlFor="message">
                        Message
                    </Label>
                    <Textarea className="min-h-[100px] w-2/3" id="message" placeholder="Enter your message" />
                </div>
                <div className="flex space-x-4">
                    <Label className="w-1/3" htmlFor="contactPreference">
                        Preferred Contact Method
                    </Label>
                    <div className="flex items-center space-x-2 w-2/3">
                        {/* <input className="form-checkbox h-5 w-5 text-gray-600" id="emailCheckbox" type="checkbox" /> */}
                        <input
                            type="checkbox"
                            id="emailCheckbox"
                            checked={emailChecked}
                            onChange={handleEmailChange}
                        />
                        <label className="text-gray-700" htmlFor="emailCheckbox">
                            Email
                        </label>
                        {/* <input className="form-checkbox h-5 w-5 text-gray-600" id="phoneCheckbox" type="checkbox" /> */}
                        <input
                            type="checkbox"
                            id="phoneCheckbox"
                            checked={phoneChecked}
                            onChange={handlePhoneChange}
                        />
                        <label className="text-gray-700" htmlFor="phoneCheckbox">
                            Phone
                        </label>
                    </div>
                </div>
                <Button className="opacity-50 cursor-not-allowed w-full" disabled={!emailChecked && !phoneChecked}>
                    Submit
                </Button>
            </div>
        </div>
    )
}


// Based on the code snippet provided, here is how you can disable the submit button only when neither checkbox is selected: [1]

// Add an event handler to call a function on change of each checkbox:
// jsx

// Insert at cursor

// Copy
// <input 
//   className="form-checkbox h-5 w-5 text-gray-600"
//   id="emailCheckbox" 
//   type="checkbox"
//   onChange={handleChange}
// />

// <input
//   className="form-checkbox h-5 w-5 text-gray-600" 
//   id="phoneCheckbox"
//   type="checkbox"
//   onChange={handleChange} 
// />
// Define the handler function:
// js

// Insert at cursor

// Copy
// const handleChange = () => {
//   // logic to enable/disable button
// }
// Get references to the checkboxes and button:
// js

// Insert at cursor

// Copy
// const emailCheckbox = document.getElementById('emailCheckbox');
// const phoneCheckbox = document.getElementById('phoneCheckbox'); 
// const submitButton = document.getElementById('submitButton');
// Add logic to enable/disable button based on checkbox values: [2]
// js

// Insert at cursor

// Copy
// if(emailCheckbox.checked || phoneCheckbox.checked) {
//   submitButton.disabled = false;
// } else {
//   submitButton.disabled = true;
// }
// Call the handler on initial load to set initial state
// Let me know if any part needs more explanation!