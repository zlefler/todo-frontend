import {useState} from 'react'

function Filter(currentLabel: {label_name: string, id: number}, onCheck: (checkedLabel: {id: number}, isChecked: boolean) => null) {
const [isChecked, setIsChecked] = useState(true)

function handleCheck() {
    onCheck(currentLabel, !isChecked)
    setIsChecked(isChecked => !isChecked)
}

    return <div className='filter-item' key={'div' + currentLabel.label_name} >
    <label htmlFor={currentLabel.label_name}>{currentLabel.label_name}</label>
<input onChange={() => handleCheck()} type="checkbox" checked={isChecked} name={currentLabel.label_name} value={currentLabel.label_name}/>
</div>
}

export default Filter