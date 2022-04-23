import LabelFilter from './LabelFilter'

function FilterList({labels, onCheck}) {

    return <div className='filter'>
            <form className='filter' >
                {labels.map(label => (
                <LabelFilter key={label.label_name} label={label} onCheck={onCheck}/>
                ))}
            </form>
            </div>
}

export default FilterList