import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="flex h-171 items-center justify-center">
                <div className="w-1556 h-89 flex items-center justify-between border-pink border-3 rounded-60 pl-52 pr-23">
                    <div className="flex items-center gap-6">
                        <svg className="w-86 h-38" width="86" height="37" viewBox="0 0 86 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 36.5V0.5H14.5973V4.08734H3.63863V11.3042H10.9587V14.8916H3.63863V36.5H0Z" fill="url(#paint0_linear_56_1170)"/>
                            <path d="M17.1658 36.5V0.5H20.8044V36.5H17.1658Z" fill="url(#paint1_linear_56_1170)"/>
                            <path d="M48.3295 18.5C47.8158 17.0088 46.9454 15.6653 45.7183 14.4695C43.5779 12.3593 40.9952 11.3042 37.9701 11.3042C34.9451 11.3042 32.3624 12.3593 30.222 14.4695C29.0091 15.6653 28.1387 17.0088 27.6108 18.5H48.3295ZM37.9701 36.5C33.9462 36.5 30.5074 35.0932 27.6536 32.2796C24.7997 29.466 23.3728 26.0756 23.3728 22.1084C23.3728 18.1272 24.7997 14.7298 27.6536 11.9162C30.5074 9.10258 33.9462 7.69578 37.9701 7.69578C42.0083 7.69578 45.4543 9.10258 48.3081 11.9162C51.1619 14.7298 52.5889 18.1272 52.5889 22.1084H27.0114C27.0114 25.0909 28.0816 27.6372 30.222 29.7474C32.3624 31.8576 34.9451 32.9127 37.9701 32.9127C39.4684 32.9127 40.8953 32.6313 42.2509 32.0686C43.5636 31.5199 44.7194 30.7462 45.7183 29.7474L48.3081 32.2796C46.9668 33.6161 45.4186 34.6501 43.6635 35.3816C41.8513 36.1272 39.9535 36.5 37.9701 36.5Z" fill="url(#paint2_linear_56_1170)"/>
                            <path d="M61.5356 36.5C59.5236 36.5 57.8042 35.7966 56.3773 34.3898C54.9504 32.983 54.2369 31.2878 54.2369 29.3042V7.69578H57.8756V29.3042C57.8756 30.303 58.2323 31.1542 58.9457 31.8576C59.6592 32.561 60.5225 32.9127 61.5356 32.9127C62.5344 32.9127 63.3906 32.561 64.104 31.8576C64.8318 31.1542 65.1956 30.303 65.1956 29.3042V7.69578H68.8342V36.5H65.1956V35.5715C64.0969 36.1905 62.8769 36.5 61.5356 36.5Z" fill="url(#paint3_linear_56_1170)"/>
                            <path d="M71.4027 36.5V7.69578H75.0413V12.5703C75.2411 12.3453 75.4551 12.1272 75.6834 11.9162C78.5373 9.10258 81.9761 7.69578 86 7.69578V11.3042C82.9749 11.3042 80.3922 12.3593 78.2519 14.4695C76.1115 16.5797 75.0413 19.126 75.0413 22.1084V36.5H71.4027Z" fill="url(#paint4_linear_56_1170)"/>
                            <defs>
                            <linearGradient id="paint0_linear_56_1170" x1="43" y1="0.5" x2="43" y2="36.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#A24C61"/>
                            <stop offset="1" stop-color="#710C21"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_56_1170" x1="43" y1="0.5" x2="43" y2="36.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#A24C61"/>
                            <stop offset="1" stop-color="#710C21"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_56_1170" x1="43" y1="0.5" x2="43" y2="36.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#A24C61"/>
                            <stop offset="1" stop-color="#710C21"/>
                            </linearGradient>
                            <linearGradient id="paint3_linear_56_1170" x1="43" y1="0.5" x2="43" y2="36.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#A24C61"/>
                            <stop offset="1" stop-color="#710C21"/>
                            </linearGradient>
                            <linearGradient id="paint4_linear_56_1170" x1="43" y1="0.5" x2="43" y2="36.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#A24C61"/>
                            <stop offset="1" stop-color="#710C21"/>
                            </linearGradient>
                            </defs>
                        </svg>
                        <svg className="w-47 h-47" width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.4928 14.6875L23.5 44.0625" stroke="url(#paint0_linear_56_1171)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M23.5 44.0625C29.3709 44.0277 42.1042 40.1458 44.0625 22.5208C38.1875 22.5208 23.5 27.4167 23.5 42.1042" stroke="url(#paint1_linear_56_1171)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M23.5 44.0625C17.6291 44.0277 4.89583 40.1458 2.9375 22.5208C8.8125 22.5208 23.5 27.4167 23.5 42.1042" stroke="url(#paint2_linear_56_1171)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M23.5 14.6875C23.4991 5.875 12.7292 6.85417 12.7292 6.85417C13.6439 8.2272 14.1313 12.1673 14.3911 15.9748C14.7178 20.7632 18.6933 24.4792 23.4928 24.4792H23.5072C28.3067 24.4792 32.2822 20.7632 32.6089 15.9748C32.8687 12.1673 33.3561 8.2272 34.2708 6.85417C34.2708 6.85417 23.4991 5.875 23.5 14.6875Z" stroke="url(#paint3_linear_56_1171)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18.1878 7.4908L23.5 2.9375L28.9721 7.43886" stroke="#A24C61" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                            <linearGradient id="paint0_linear_56_1171" x1="23.4964" y1="14.6875" x2="23.4964" y2="44.0625" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#A24C61"/>
                            <stop offset="1" stop-color="#710C21"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_56_1171" x1="33.7812" y1="22.5208" x2="33.7812" y2="44.0625" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#A24C61"/>
                            <stop offset="1" stop-color="#710C21"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_56_1171" x1="13.2188" y1="22.5208" x2="13.2188" y2="44.0625" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#A24C61"/>
                            <stop offset="1" stop-color="#710C21"/>
                            </linearGradient>
                            <linearGradient id="paint3_linear_56_1171" x1="23.5" y1="6.8218" x2="23.5" y2="24.4792" gradientUnits="userSpaceOnUse">
                            <stop offset="0.164" stop-color="#A24C61"/>
                            <stop offset="1" stop-color="#710C21"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative overflow-hidden w-360 h-56 rounded-30">
                            <input placeholder="Поиск" type="text" className="pl-24 w-full h-full bg-zov font-mons"/>
                            <svg className="w-40 h-40 absolute top-1 right-4" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33.3333 33.3333L26.5833 26.5833M26.5833 26.5833C27.6667 25.4999 28.5261 24.2137 29.1124 22.7982C29.6988 21.3827 30.0005 19.8655 30.0005 18.3333C30.0005 16.8012 29.6988 15.284 29.1124 13.8685C28.5261 12.4529 27.6667 11.1667 26.5833 10.0833C25.4999 8.99993 24.2137 8.14052 22.7981 7.55419C21.3826 6.96785 19.8654 6.66607 18.3333 6.66607C16.8011 6.66607 15.2839 6.96785 13.8684 7.55419C12.4529 8.14052 11.1667 8.99993 10.0833 10.0833C7.89524 12.2714 6.66602 15.239 6.66602 18.3333C6.66602 21.4277 7.89524 24.3953 10.0833 26.5833C12.2713 28.7714 15.2389 30.0006 18.3333 30.0006C21.4276 30.0006 24.3952 28.7714 26.5833 26.5833Z" stroke="url(#paint0_linear_56_1181)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                <linearGradient id="paint0_linear_56_1181" x1="19.9996" y1="6.66607" x2="19.9996" y2="33.3333" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#A24C61"/>
                                <stop offset="1" stop-color="#710C21"/>
                                </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link to={'/office'}>
                                <svg className="w-44 h-45" width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 24.3333C27.0627 24.3333 31.1667 20.2293 31.1667 15.1667C31.1667 10.1041 27.0627 6 22 6C16.9374 6 12.8334 10.1041 12.8334 15.1667C12.8334 20.2293 16.9374 24.3333 22 24.3333Z" stroke="url(#paint0_linear_56_1185)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M36.6667 39C36.6667 35.1102 35.1215 31.3796 32.3709 28.6291C29.6204 25.8786 25.8899 24.3333 22 24.3333C18.1102 24.3333 14.3797 25.8786 11.6291 28.6291C8.87861 31.3796 7.33337 35.1102 7.33337 39" stroke="url(#paint1_linear_56_1185)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_56_1185" x1="22" y1="6" x2="22" y2="24.3333" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#A24C61"/>
                                    <stop offset="1" stop-color="#710C21"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_56_1185" x1="22" y1="24.3333" x2="22" y2="39" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#A24C61"/>
                                    <stop offset="1" stop-color="#710C21"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                            </Link>
                            <Link to={'/wishList'}>
                                <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.1667 7.83334C25.3 7.83334 22 12.7228 22 15.1667C22 12.7228 18.7 7.83334 12.8333 7.83334C6.96667 7.83334 5.5 12.7228 5.5 15.1667C5.5 28 22 37.1667 22 37.1667C22 37.1667 38.5 28 38.5 15.1667C38.5 12.7228 37.0333 7.83334 31.1667 7.83334Z" stroke="url(#paint0_linear_56_1194)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_56_1194" x1="22" y1="7.83334" x2="22" y2="37.1667" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#A24C61"/>
                                    <stop offset="1" stop-color="#710C21"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                            </Link>
                            <Link to={'/baskets_flowers'}>
                                <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 6H9.16667L10.0833 11.5M10.0833 11.5L12.8333 28H33L38.5 11.5H10.0833Z" stroke="url(#paint0_linear_56_1189)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.6667 39C15.6792 39 16.5 38.1792 16.5 37.1667C16.5 36.1541 15.6792 35.3333 14.6667 35.3333C13.6542 35.3333 12.8334 36.1541 12.8334 37.1667C12.8334 38.1792 13.6542 39 14.6667 39Z" stroke="url(#paint1_linear_56_1189)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M31.1667 39C32.1792 39 33 38.1792 33 37.1667C33 36.1541 32.1792 35.3333 31.1667 35.3333C30.1542 35.3333 29.3334 36.1541 29.3334 37.1667C29.3334 38.1792 30.1542 39 31.1667 39Z" stroke="url(#paint2_linear_56_1189)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_56_1189" x1="22" y1="6" x2="22" y2="28" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#A24C61"/>
                                    <stop offset="1" stop-color="#710C21"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_56_1189" x1="14.6667" y1="35.3333" x2="14.6667" y2="39" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#A24C61"/>
                                    <stop offset="1" stop-color="#710C21"/>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_56_1189" x1="31.1667" y1="35.3333" x2="31.1667" y2="39" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#A24C61"/>
                                    <stop offset="1" stop-color="#710C21"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;