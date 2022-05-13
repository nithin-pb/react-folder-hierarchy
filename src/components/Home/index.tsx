import { Link } from 'react-router-dom'
import './index.scss'

export default function Home() {
    return (
        <div className={'HomeComponent-Wrapper'}>
            <div>
                <h1>
                    Get started with <span style={{ color: 'var(--primary)' }}>React</span>
                </h1>
                <p>
                    Start reading from <code>src/index.tsx</code>
                </p>
                <div className={'content'}>
                    <p>
                        This react project created using create-react-app and updated by
                        &nbsp;<Link to={'https://github.com/nithinpachday'}>Nithin P B</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}