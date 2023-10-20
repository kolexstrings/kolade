import React from 'react';
import WelcomePage from '@/components/WelcomePage';
import UserRegistration from '@/components/UserRegistration';
import UserProfile from '@/components/UserProfile';
import UsersPage from '@/components/UsersPage';

const HomePage = () => {

    return (
        <>
            <WelcomePage />
            <UserRegistration />
            <UserProfile />
            <UsersPage />
        </>
        
    )
}

export default HomePage