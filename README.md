# Example for an integration of cartographie nationale in a React project

The purpose of this project is to provide a exemple of a React project with an integration of cartographie nationale as web component.  
This project is also a good sandbox to try cartographie nationale as web components integration during development phase.

## Try cartographie nationale as web components integration during development phase

Build you web components form Cartographie nationale project with configuration for development dans map files :

Cartographie:
```sh
yarn build cartographie --optimization=false --source-map=true
```

Orientation:
```sh
yarn build orientation --optimization=false --source-map=true
```

Coordinateurs:
```sh
yarn build coordinateurs --optimization=false --source-map=true
```

Copy generated `dist` folder content in React project `node_modules/@gouvfr-anct/`

Use generated files instead of files from published dependency

Cartographie:
```js
class Cartographie extends Component {
    render() {
        // require('@gouvfr-anct/cartographie-nationale/cartographie');
        require('@gouvfr-anct/cartographie/main.xxxx');
        require('@gouvfr-anct/cartographie/polyfills.xxxx');
        require('@gouvfr-anct/cartographie/runtime.xxxx');
        return (
            <div className="vh-100">
                <fr-mediation-numerique-cartographie />
            </div>
        );
    }
}
```

Orientation:
```js
class Orientation extends Component {
    render() {
        // require('@gouvfr-anct/cartographie-nationale/orientation');
        require('@gouvfr-anct/orientation/main.xxxx');
        require('@gouvfr-anct/orientation/polyfills.xxxx');
        require('@gouvfr-anct/orientation/runtime.xxxx');
        return (
            <div className="vh-100">
                <fr-mediation-numerique-orientation />
            </div>
        );
    }
}
```

Coordinateurs:
```js
class Coordinateurs extends Component {
    render() {
        // require('@gouvfr-anct/cartographie-nationale/coordinateurs');
        require('@gouvfr-anct/coordinateurs/main.xxxx');
        require('@gouvfr-anct/coordinateurs/polyfills.xxxx');
        require('@gouvfr-anct/coordinateurs/runtime.xxxx');
        return (
            <div className="vh-100">
                <fr-mediation-numerique-coordinateurs />
            </div>
        );
    }
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Licence

See [LICENSE](./LICENSE.md) file from repository.
