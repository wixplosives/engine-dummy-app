import DummyApp, { MAIN } from './dummy.feature';

//import './style.css';

DummyApp.setup(MAIN, ({ run }) => {
    run(async () => {
        const mainArea = document.createElement('h1');
        mainArea.innerHTML = 'Hello world';
        document.body.appendChild(mainArea);
    });
});