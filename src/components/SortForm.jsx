function SortForm({onSortChange, sortOption}) {

function handleButtonChange(value) {
onSortChange(value)
}


    return <form className="sort-form">
        <label htmlFor="order_priorities">Sort alphabetically</label>
        <input onChange={e => handleButtonChange(e.target.name)} type="radio" value='alphabetical' checked={sortOption === 'alphabetical'} name='alphabetical'/>
        <label htmlFor="priority">Sort by priority</label>
        <input type="radio" value='priority' checked={sortOption === 'priority'} onChange={e => handleButtonChange(e.target.name)} name='priority'/>
        </form>
}
export default SortForm