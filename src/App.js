import React from 'react';

import Auth from '@aws-amplify/auth';
import awsconfig from './aws-exports';

// retrieve temporary AWS credentials and sign requests
Auth.configure(awsconfig);

function App() {
    return(
        <h1>hello world</h1>
    )
}

export default App;