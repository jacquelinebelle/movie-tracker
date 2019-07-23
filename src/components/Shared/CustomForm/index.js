import React from 'react';
import { Redirect } from 'react-router'; 
import './CustomForm.scss';

export const CustomForm = ({ title, formFields, onSubmit, isLoggedIn, error }) => {
    

    const fields = formFields.map(field => {
        return(
            <>
                <label className={`${field.type}-input`}>{field.type}</label>
                <input type="text" placeholder={field.type}
                    name={field.type}
                    value={field.value}
                    onChange={field.onChange} />
            </>
        )
    }) 

    return( 
        <>
            <h2>{title}</h2>
            <form>
                {fields}
                <button onClick={onSubmit}>Submit</button>
                {isLoggedIn && <Redirect to="/" />}
            </form>
            {error.isError && <h2>{error.message}</h2>}
        </>
    )
}

export default CustomForm;