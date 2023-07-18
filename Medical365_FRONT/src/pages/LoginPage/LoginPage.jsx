import React from 'react'
import './LoginPage.css'
import { FormLoginComponent } from '../../components/FormLoginComponent/FormLoginComponent'

export default function LoginPage() {
  return (
    <div className='login'>
      <img src="./images/doctor-form.jpg" alt="doctor form image" />
      <FormLoginComponent />
    </div>
  )
}
