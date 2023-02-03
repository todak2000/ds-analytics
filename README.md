# REACT-USER-ANALYTICS

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

This package was built to manage recurrent functionalities during development of interfaces. The idea is to allow a developer collect these user data and use as appropriately say built a dashboard to manage the data and subesequently make informed decisions. E.g. these data can be collected and sent to the server for analytics purposes. So, a developer can quickly :

, , , ,

- get a user Location (Country) by using the `useGetUserCountry` Hook.
- get a user Location (City) by using the `useGetUserCity` Hook.
- get the type of Device (mobile/desktop) a user is using to access the application by using the `useUserDevice` Hook.
- get a user current navigation page by using the `useUserNavigation` Hook.
- check if a is a unique visitor or otherwise by using the `useIsUserUnique` Hook.

## Quickstart

Install this library:

```
npm i @todak2000/react-user-analytics
# or
yarn add @todak2000/react-user-analytics
```

Then, import and use any of the functionalities you might require:

```
...
import {
  useGetUserCountry,
  useGetUserCity,
  useUserDevice,
  useIsUserUnique,
  useUserNavigation,
} from '@todak2000/react-user-analytics';

function SampleApp() {

  const city:string = useGetUserCity();
  const country:string = useGetUserCountry();
  const uniqueUser:boolean = useIsUserUnique();
  const nav: string = useUserNavigation();
  const device: string = useUserDevice();


  return (
    <div >

      <header >
        <p>You are currently in {city}, {country}</p>
        {JSON.stringify(uniqueUser) === "true" ?
          <p>You are new User</p>
          :
          <p>You are a regular user</p>
        }
        <p>You are currently on this page: {nav}</p>
        <p>Your Device is: {device}</p>
      </header>


    </div>
  );
}



export default SampleApp;
```

## Author

[Daniel Olagunju](https://github.com/todak2000)
