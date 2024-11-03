import { Link } from "react-router-dom";

function SignUpComponent() {
    return (
        <>
            <div className="flex items-center justify-center">
                <form className="w-968 py-122 px-94 flex flex-col gap-88 border-3 border-pink rounded-20">
                    <div className="flex flex-col gap-27">
                        <h2 className="flex mx-auto font-mons text-kisses font-bold text-60">Создать аккаунт</h2>
                        <div className="flex flex-col">
                            <p className="font-mons text-32 text-plum20 font-semibold">Логин</p>
                            <input type="text" className="text-32 px-18 w-full h-129 !border-3 !border-plum20 rounded-20" />
                        </div>
                        <div className="flex flex-col">
                            <p className="font-mons text-32 text-plum20 font-semibold">Пароль</p>
                            <input type="text" className="text-32 px-18 w-full h-129 !border-3 !border-plum20 rounded-20" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-33">
                        <Link to={'/'}>
                            <button className="w-full h-120 font-mons text-white text-44 bg-rose rounded-20 font-bold">Создать аккаунт</button>
                        </Link>
                        <Link to={'/login'}>
                            <button className="w-full h-120 font-mons text-rose text-44 bg-white rounded-20 border-3 border-rose font-bold">Войти в уже существующий</button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SignUpComponent;