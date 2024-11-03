function OfficeComponent() {
    return (
        <>
            <div className="px-86 flex justify-between">
                <div className="w-540 h-fit flex flex-col gap-80 border-3 border-pink rounded-30 px-35 py-44">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                            <svg className="w-40 h-40" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 21.6667C24.6024 21.6667 28.3333 17.9357 28.3333 13.3333C28.3333 8.73096 24.6024 5 20 5C15.3976 5 11.6667 8.73096 11.6667 13.3333C11.6667 17.9357 15.3976 21.6667 20 21.6667Z" fill="#411528" stroke="#411528" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M33.3333 34.9993C33.3333 31.4631 31.9286 28.0717 29.4281 25.5713C26.9276 23.0708 23.5362 21.666 20 21.666C16.4638 21.666 13.0724 23.0708 10.5719 25.5713C8.07143 28.0717 6.66667 31.4631 6.66667 34.9993" stroke="#411528" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20 21.666C16.4638 21.666 13.0724 23.0708 10.5719 25.5713C8.07143 28.0717 6.66667 31.4631 6.66667 34.9993H33.3333C33.3333 31.4631 31.9286 28.0717 29.4281 25.5713C26.9276 23.0708 23.5362 21.666 20 21.666Z" fill="#411528" stroke="#411528" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className="font-mons text-kisses text-36 font-bold">Ксения</p>
                        </div>
                        <svg className="w-35 h-36" width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 9.43923L23.4395 5.99973C23.7208 5.71852 24.1023 5.56055 24.5 5.56055C24.8977 5.56055 25.2792 5.71852 25.5605 5.99973L29.4395 9.87873C29.7207 10.16 29.8787 10.5415 29.8787 10.9392C29.8787 11.337 29.7207 11.7184 29.4395 11.9997L26 15.4392M20 9.43923L5.4395 23.9997C5.15818 24.281 5.00008 24.6624 5 25.0602V28.9392C5 29.3371 5.15804 29.7186 5.43934 29.9999C5.72064 30.2812 6.10218 30.4392 6.5 30.4392H10.379C10.7768 30.4391 11.1583 30.2811 11.4395 29.9997L26 15.4392M20 9.43923L26 15.4392" stroke="#411528" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-kisses text-24 font-medium font-mons">Номер телефона</p>
                        <p className="text-rose text-24 font-medium font-mons">+7 777 777-77-77</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-kisses text-24 font-medium font-mons">Пол</p>
                        <p className="text-rose text-24 font-medium font-mons">Женский</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-kisses text-24 font-medium font-mons">Способы оплаты</p>
                        <p className="text-rose text-24 font-medium font-mons">Mastercard </p>
                    </div>
                </div>
                <div className="w-958 flex flex-col gap-55 border-3 border-pink rounded-30 px-60 py-57">
                    <h1 className="font-bold text-kisses text-36 font-mons">История покупок</h1>
                    <div className="grid grid-cols-3 gap-x-70 gap-y-55">
                        <div className="mx-auto flex w-233 flex-col items-center justify-center border-1 border-rose rounded-20">
                            <img className="pt-2 w-137 h-155" src="/public/img/weekFlowers/weekFlower.png" alt="" />
                            <h2 className="pt-14 font-mons font-bold text-kisses text-12">Букет “Тепло любви”</h2>
                            <p className="pt-1 font-mons text-8 text-plum">4 800 ₽ </p>
                            <p className="pt-1 font-semibold font-mons text-rose text-8">Доставлен 25.05.24</p>
                            <button className="mt-7 mb-4 w-194 h-26 rounded-10 bg-plum text-white text-12 font-mons font-bold">Добавить в корзину</button>
                        </div>
                        <div className="mx-auto flex w-233 flex-col items-center justify-center border-1 border-rose rounded-20">
                            <img className="pt-2 w-137 h-155" src="/public/img/weekFlowers/weekFlower.png" alt="" />
                            <h2 className="pt-14 font-mons font-bold text-kisses text-12">Букет “Тепло любви”</h2>
                            <p className="pt-1 font-mons text-8 text-plum">4 800 ₽ </p>
                            <p className="pt-1 font-semibold font-mons text-rose text-8">Доставлен 25.05.24</p>
                            <button className="mt-7 mb-4 w-194 h-26 rounded-10 bg-plum text-white text-12 font-mons font-bold">Добавить в корзину</button>
                        </div>
                        <div className="mx-auto flex w-233 flex-col items-center justify-center border-1 border-rose rounded-20">
                            <img className="pt-2 w-137 h-155" src="/public/img/weekFlowers/weekFlower.png" alt="" />
                            <h2 className="pt-14 font-mons font-bold text-kisses text-12">Букет “Тепло любви”</h2>
                            <p className="pt-1 font-mons text-8 text-plum">4 800 ₽ </p>
                            <p className="pt-1 font-semibold font-mons text-rose text-8">Доставлен 25.05.24</p>
                            <button className="mt-7 mb-4 w-194 h-26 rounded-10 bg-plum text-white text-12 font-mons font-bold">Добавить в корзину</button>
                        </div>
                        <div className="mx-auto flex w-233 flex-col items-center justify-center border-1 border-rose rounded-20">
                            <img className="pt-2 w-137 h-155" src="/public/img/weekFlowers/weekFlower.png" alt="" />
                            <h2 className="pt-14 font-mons font-bold text-kisses text-12">Букет “Тепло любви”</h2>
                            <p className="pt-1 font-mons text-8 text-plum">4 800 ₽ </p>
                            <p className="pt-1 font-semibold font-mons text-rose text-8">Доставлен 25.05.24</p>
                            <button className="mt-7 mb-4 w-194 h-26 rounded-10 bg-plum text-white text-12 font-mons font-bold">Добавить в корзину</button>
                        </div>
                        <div className="mx-auto flex w-233 flex-col items-center justify-center border-1 border-rose rounded-20">
                            <img className="pt-2 w-137 h-155" src="/public/img/weekFlowers/weekFlower.png" alt="" />
                            <h2 className="pt-14 font-mons font-bold text-kisses text-12">Букет “Тепло любви”</h2>
                            <p className="pt-1 font-mons text-8 text-plum">4 800 ₽ </p>
                            <p className="pt-1 font-semibold font-mons text-rose text-8">Доставлен 25.05.24</p>
                            <button className="mt-7 mb-4 w-194 h-26 rounded-10 bg-plum text-white text-12 font-mons font-bold">Добавить в корзину</button>
                        </div>
                        <div className="mx-auto flex w-233 flex-col items-center justify-center border-1 border-rose rounded-20">
                            <img className="pt-2 w-137 h-155" src="/public/img/weekFlowers/weekFlower.png" alt="" />
                            <h2 className="pt-14 font-mons font-bold text-kisses text-12">Букет “Тепло любви”</h2>
                            <p className="pt-1 font-mons text-8 text-plum">4 800 ₽ </p>
                            <p className="pt-1 font-semibold font-mons text-rose text-8">Доставлен 25.05.24</p>
                            <button className="mt-7 mb-4 w-194 h-26 rounded-10 bg-plum text-white text-12 font-mons font-bold">Добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OfficeComponent;