import React from "react"

function Categories() {

    console.log('Перерендер')

    const [activeIndex, setActiveIndex] = React.useState(0)

    const categories = [
      'Все', 'Мясные', 'Веган', 'Гриль', 'Острые', 'Закрытые'
    ]

    const onClickCategory = (id) => {
      setActiveIndex(id)
    }

    return (
      <div className="categories">
        <ul>
          {
            categories.map((value, index) => <li onClick={() => onClickCategory(index)} className={activeIndex === index ? 'active' : ''}>{value}</li>)
          }  
        </ul>
      </div>
    )
  }

  export default Categories