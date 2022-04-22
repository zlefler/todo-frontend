import Filter from './Filter'

function FilterList({labels, onCheck}) {

    return <form>
        {labels.map(label => (
            <Filter key={label.label_name} label={label} onCheck={onCheck}/>
        ))}
    </form>
}

export default FilterList