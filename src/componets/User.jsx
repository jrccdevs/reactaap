import React from 'react';
import Select from 'react-select';


const suppliers = [
    { label: 'Facebook', value: 'Facebook' },
    { label: 'Instagram', value: 'Instagram' },
    { label: 'YouTube', value: 'YouTube' },
]

function User() {

    const handleSelectChange = ( event ) => {
        console.log(event);
    }

    return (
        <div className = " Suppliers-container " style={{margin:'3px', width:'50%', height:'5px'}}>
            <Select
             styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? 'grey' : 'red',
                height:'8px',
                fontSize:'13px'
              }),
              option:(baseStyles )=> ({
                ...baseStyles,
                color:'blue',
                fontSize:'13px',
              })
            }}
                 defaultValue = {{ label: 'opcion a select', value: 'forma faramceutica'} }
                options = { suppliers }
                onChange = { handleSelectChange }
            />
        </div>
    )
}

export default User