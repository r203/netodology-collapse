import { useState } from 'react';

const Collapse = ({
  collapsedLabel ='Развернуть', 
  expandedLabel='Свернуть'
}) => {

  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapse = () => {setCollapsed(!collapsed)}

  return (
    <div className='collapse'>
      <div className={`collapse__content ${collapsed ? 'hidden' : ''}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur ducimus ea debitis deserunt maiores, blanditiis explicabo? Quia est natus aperiam accusantium expedita placeat debitis maxime, voluptate commodi modi vero?
      </div>
      <button 
        onClick={toggleCollapse}
        className="collapse__btn">
          {collapsed ? collapsedLabel : expandedLabel}
      </button>
    </div>
  )
}

export default Collapse;