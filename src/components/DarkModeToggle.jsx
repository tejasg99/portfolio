import { useEffect, useState } from "react";
import { MdSunny, MdDarkMode } from "react-icons/md";


const DarkModeToggle = () => {
    const [dark, setDark] = useState(
        () => localStorage.getItem('theme') === 'dark' || (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('theme'))
    );

    useEffect(() => {
        if(dark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [dark]);

    return (
        <button
        onClick={() => setDark(!dark)}
        className=" p-2 rounded-full bg-gray dark:bg-gray-800 text-lg text-neutral-700 dark:text-neutral-300"
        >
            {dark ? <MdSunny /> : <MdDarkMode />}
        </button>
    )
}

export default DarkModeToggle;