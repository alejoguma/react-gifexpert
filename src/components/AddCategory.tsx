import { useState } from 'react';

interface onNewCategoryProps {
    onNewCategory: (newCategory: string) => void;
}

export const AddCategory = ({onNewCategory}:onNewCategoryProps) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(target.value);
    }
    
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(inputValue.trim().length <=1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }
    


    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifts"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}
