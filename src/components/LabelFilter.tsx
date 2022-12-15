import {useState} from 'react'

function Filter(label: {label_name: string, id: number}, onCheck: (checkedLabel: {id: number}, isChecked: boolean) => null) {
const [isChecked, setIsChecked] = useState(true)

function handleCheck() {
    onCheck(label, !isChecked)
    setIsChecked(isChecked => !isChecked)
}

    return <div className='filter-item' key={'div' + label.label_name} >
    <label htmlFor={label.label_name}>{label.label_name}</label>
<input onChange={() => handleCheck()} type="checkbox" checked={isChecked} name={label.label_name} value={label.label_name}/>
</div>
}

export default Filter