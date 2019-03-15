import React, {Component} from 'react';
import './App.css';
import Main from './component/Main.js';
import ErrorBoundary from './component/ErrorBoundary';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <ErrorBoundary>
                        <Main> </Main>
                    </ErrorBoundary>
                </header>
            </div>
        );
    }
}

export default App;
