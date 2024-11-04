
import { useFormik } from "formik";
import { Link } from "react-router-dom";

import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";


const Schema = z.object({
    username: z.string(),
    password: z.string()
        .min(8,{message: "8 символов минимум"}),
});

export default function LoginComponent() {

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: toFormikValidationSchema(Schema),
        onSubmit: (values) => {
            try {
                console.log(values);
                
            } catch (error) {
                console.error(error);
                alert("Произошла ошибка... \n попробуйте позже")
            }
        },
    });

    console.log(formik.values, formik.errors);

    return(
        <form 
            className="w-968 mx-auto py-122 px-94 flex flex-col gap-88 border-3 border-pink rounded-20"
            onSubmit={formik.handleSubmit}
        >
            <div className="flex flex-col gap-27">
                    <h2 className="flex mx-auto font-mons text-kisses font-bold text-60">Войти</h2>
                    <div className="flex flex-col">
                        <p className="font-mons text-32 text-plum20 font-semibold">Логин</p>
                        <input 
                            type="text" 
                            className="text-32 px-18 w-full h-129 !border-3 !border-plum20 rounded-20" 
                            name="username"
                            id="username"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}    
                        />
                    </div>
                    <div className="flex flex-col">
                        <p className="font-mons text-32 text-plum20 font-semibold">Пароль</p>
                        <input 
                            type="password" 
                            className="text-32 px-18 w-full h-129 !border-3 !border-plum20 rounded-20" 
                            name="password"
                            id="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-33">
                    <Link to={'/'}>
                        <button className="w-full h-120 font-mons text-white text-44 bg-rose rounded-20 font-bold">Войти</button>
                    </Link>
                    <Link to={'/signup'}>
                        <button className="w-full h-120 font-mons text-rose text-44 bg-white rounded-20 border-3 border-rose font-bold">Создать аккаунт</button>
                    </Link>
                </div>
        </form>
    )
}