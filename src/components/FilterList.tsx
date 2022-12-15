import LabelFilter from './LabelFilter'

type Label = {
    labelName: string,
    id?: string
  }

function FilterList(labels: Label[], onCheck: (checkedLabel: Label, isChecked: boolean) => null) {

    return <div className='filter'>
            <form className='filter' >
                {labels.map(currentLabel => (
                <LabelFilter key={currentLabel.labelName} label_name={currentLabel.labelName} onCheck={onCheck}/>
                ))}
            </form>
            </div>
}

export default FilterList