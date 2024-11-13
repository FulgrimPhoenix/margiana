import React from "react"
import { Outlet } from "react-router-dom"

interface ILogRegForm {
    children: JSX.Element[];
    isFormActive: boolean
}

export const LogRegForm = ({children}: ILogRegForm): React.ReactElement => {
    return (
        <form className="log-reg-form">
            {children}
            <button className="log-reg-form__submit">Сохранить</button>
        </form>
    )
}