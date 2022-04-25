function SortForm({onSortChange, sortOption}) {

function handleButtonChange(value) {
onSortChange(value)
}

    return <div className='sort'>
        <form className="sort">
                <label htmlFor="order_priorities">Sort alphabetically</label>
                <input onChange={e => handleButtonChange(e.target.name)} type="radio" value='alphabetical' checked={sortOption === 'alphabetical'} name='alphabetical'/>
                <label htmlFor="priority">Sort by priority</label>
                <input type="radio" value='priority' checked={sortOption === 'priority'} onChange={e => handleButtonChange(e.target.name)} name='priority'/>
                <label htmlFor='time_created'>Sort by time created</label>
                <input type="radio" value='time_created' checked={sortOption === 'time_created'} onChange={e => handleButtonChange(e.target.name)} name='time_created'/>
            </form>
        </div>
}
export default SortForm