import { FileOutlined, GroupOutlined, LoginOutlined, ProfileOutlined } from '@ant-design/icons'
import { Steps } from 'antd'
import React, { useState } from 'react'
import PersonalDetails from '../../components/guide/PersonalDetails'
import ProfessionalInfo from '../../components/guide/ProfessionalInfo'
import DocumentsForm from '../../components/guide/DocumentsForm'
import axios from 'axios'
import { useNavigate } from 'react-router'

const RegisterGuides = () => {
    const navigate = useNavigate()
    const [currentStep, setCurrentStep] = useState(0)
    const [personalDetails, setPersonalDetails] = useState(null)
    const [professionalInfo, setProfessionalInfo] = useState(null)
    const [documents, setDocuments] = useState(null)

    const submitPersonalDetails= (values) => {
        setPersonalDetails(values)
        setCurrentStep(1)
    }

    const submitProfessionalInfo= (values) => {
        setProfessionalInfo(values)
        setCurrentStep(2)
    }

    const data ={
        personalDetails,
        professionalInfo
    }

    const submitDocuments= () => {
        const formValue = {
            ...data,
            status: "pending"
        }
        axios.post("http://localhost:3000/guides", formValue)
        .then(function (response) {
            navigate('/login')
        })
        .catch(function (error) {
            console.log(error);
        })   
    }

    const forms = [
        <PersonalDetails onFinish={submitPersonalDetails} initialValues={personalDetails}/>,
        <ProfessionalInfo onFinish={submitProfessionalInfo} initialValues={professionalInfo}/>,
        <DocumentsForm onFinish={submitDocuments} initialValues={documents}/>
    ]

    const isStepDisabled = (step) => {
        if(step === 0){
            return
        }

        if(step === 1){
            return personalDetails === null
        }

        if(step === 2){
            return personalDetails === null || professionalInfo === null
        }

    }

    return (
        <>
            <div className="min-h-screen py-12 w-[100%] bg-[#FEF0C9]">
                <div className="container">
                    <div className="lg:flex-row p-4 w-8/12 lg:w-8/12 bg-white items-center rounded-xl mx-auto shadow-lg overflow-hidden">
                        <div className='p-6'>
                            <Steps onChange={setCurrentStep} current={currentStep}>
                                <Steps.Step title='Personal Details' icon={<ProfileOutlined/>} disabled={isStepDisabled(0)} />
                                <Steps.Step title='Professional Info' icon={<GroupOutlined/>} disabled={isStepDisabled(1)} />
                                <Steps.Step title='Documents' icon={<FileOutlined/>} disabled={isStepDisabled(2)} />
                            </Steps>
                        </div>
                        <div className='w-[100%]'>
                            {forms[currentStep]}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterGuides
