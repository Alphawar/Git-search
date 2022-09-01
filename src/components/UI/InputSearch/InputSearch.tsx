import React from 'react';
import classes from './InputSearch.module.scss';

interface IInputSearchProps {
    text: string
    setText: (value: string) => void
    label: string
}

const InputSearch: React.FC<IInputSearchProps> = ({ text, setText, label }) => {

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => setText(e.currentTarget.value)

    return (
        <div className={classes.inputSearch}>
            <input 
                id="input"
                type="text"
                placeholder=" "
                className={classes.inputSearch__input}
                value={text}
                onChange={handleChange}
                style={label === "Search for User's Repos" ? 
                { backgroundColor: 'lightgray', color: 'black'} : {backgroundColor: '#1b1b28', color: 'white'}}
            />
            <label 
                htmlFor="input" 
                className={classes.inputSearch__label}
                style={label === "Search for User's Repos" ?
                { backgroundColor: 'lightgray', color: 'black'} 
                : { backgroundColor: '#1b1b28', color: 'white'}
                }
            >
               {label}
            </label>
        </div>
    );
};

export default InputSearch;