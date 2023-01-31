# DS-Analytics

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

This package was built to manage recurrent functionalities during development of interfaces. So, a developer can quickly :

- get a user Location by using the `getUserCountry` function.
- get the type of Device (mobile/desktop) a user is using to access the application by using the `getUserDevice` function.
- get a user current navigation page by using the `getUserNavigation` function.
- check if a is a unique visitor or otherwise by using the `getUserVisitation` function.

## Quickstart

Install this library:

```
npm i ds-analytics
# or
yarn add ds-analytics
```

Then, import and use any of the functionalities you might require:

```
...
import {
  getUserCountry,
  getUserDevice,
  getUserNavigation,
  getUserVisitation
} from 'ds-analytics';

function SampleApp() {

  const [country, setCountry] = useState("")

 useEffect(() => {
  # getUserCountry is an async function as such use a promise like below

  getUserCountry().then(res=>setCountry(res))

 }, [])


  return (
    <div >

      <header >

        <p>You are currently in {country}</p>
        {getUserVisitation() === "true" ? <p>You are new User</p>:<p>You are a regular user</p>}
        <p>You are currently on this page: {JSON.stringify(getUserNavigation())}</p>
        <p>Your Device is: {getUserDevice()}</p>
      </header>


    </div>
  );
}



export default SampleApp;
```

## Author

[Daniel Olagunju](https://github.com/todak2000)
