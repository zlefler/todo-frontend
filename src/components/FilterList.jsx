import LabelFilter from './LabelFilter'

function FilterList({labels, onCheck}) {

    return <form>
        {labels.map(label => (
            <LabelFilter key={label.label_name} label={label} onCheck={onCheck}/>
        ))}
    </form>
}

export default FilterList