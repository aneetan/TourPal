import { Button, Card, Form, Input, Layout, Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router';
import { updateUser } from '../../utils/user.utils';
import { showSuccess } from '../../utils/toastify.utils';
import GuideSidebar from '../../components/guide/sidebar/GuideSidebar';
import UserEditForm from '../../components/user/UserEditForm';
import PasswordForm from '../../components/PasswordForm';
import PasswordUser from '../../components/user/PasswordUser';
import ChangePwUser from '../../components/user/ChangePwUser';

const {Content} = Layout;
const {TabPane} = Tabs;

const UserProfile = ({active = "profile"}) => {
    const [activeTab, setActiveTab] = useState(`${active}`);
    const location = useLocation();

    const tabItems = [
        {
            key: 'profile',
            label: <span className="w-full text-left px-2 md:px-4 py-2">My Profile</span>,
            children: (
                <Card className="md:ml-4">
                    <UserEditForm/>
                </Card>
            ),
        },
        {
            key: 'password',
            label: <span className="w-full text-left px-2 md:px-4 py-2">Change Password</span>,
            children: (
                <Card className="md:ml-4">
                    {location.pathname.startsWith('/user/changePw/') ? (
                        <ChangePwUser />
                    ) : (
                        <PasswordUser />
                    )}
                </Card>
            ),
        },
        {
            key: 'bookings',
            label: <span className="w-full text-left px-2 md:px-4 py-2">My Bookings</span>,
            children: (
                <Card className="md:ml-4">
                    Bookings
                </Card>
            ),
        }
    ];

  return (
    <>
        <div className="min-h-screen bg-background">
            <main className="container mx-auto pt-24 px-4 pb-12">
                <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">My Account</h1>
                
                <Tabs
                        activeKey={activeTab}
                        onChange={setActiveTab}
                        tabPosition="left"
                        className="flex flex-col md:flex-row gap-6"
                        items={tabItems}
                    /> 
                </div>
            </main>
        </div>   
    </>
  )
}

export default UserProfile
