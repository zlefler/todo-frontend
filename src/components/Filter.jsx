import {useState} from 'react'

function Filter({label, onCheck}) {
const [isChecked, setIsChecked] = useState(true)

function handleCheck() {
    onCheck(label, !isChecked)
    setIsChecked(isChecked => !isChecked)
    
}

    return <div key={'div' + label.label_name} >
    <label htmlFor={label.label_name}>{label.label_name}</label>
<input onChange={() => handleCheck(label)} type="checkbox" checked={isChecked} name={label.label_name} value={label.label_name}/>
</div>
}

export default Filter