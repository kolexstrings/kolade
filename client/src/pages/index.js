import React from 'react';
import WelcomePage from '@/components/WelcomePage';
import UserRegistration from '@/components/UserRegistration';
import UserProfile from '@/components/UserProfile';

const HomePage = () => {

    return (
        <>
            <WelcomePage />
            <UserRegistration />
            <UserProfile />
        </>
        
    )
}

export default HomePage