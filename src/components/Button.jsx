import React from 'react'

const Button = ({ btnVal, id, icon, href }) => {
    return (
        <a id={id} href={href} className='flex items-center justify-center transition ease px-2 font-[Basement] hover:bg-white hover:text-black'>
            {btnVal}
            <i className={icon}></i>
        </a>


    )
}

export default Button