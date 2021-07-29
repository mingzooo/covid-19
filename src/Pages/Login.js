
import KaKaoLogin from 'react-kakao-login';

const Login = () => {

    return (
        <div>
            <KaKaoLogin
                token='1b13ca3abaace2c101d583eaea25b3c8'
                onSuccess={console.log}
                onFail={console.error}
                onLogout={console.info}
            />
        </div>
    );
}

export default Login;