import './styles.scss'
import image1 from '../../assets/images/rightside1.png'
import image2 from '../../assets/images/rightside2.png'
import image3 from '../../assets/images/rightside3.png'
import image4 from '../../assets/images/rightside4.png'
import image5 from '../../assets/images/rightside5.png'
import image6 from '../../assets/images/rightside6.png'
import { 
  MdRocketLaunch,
  MdPerson3,
  MdWork,
  MdPieChart,
  MdStackedBarChart,
  MdAvTimer
 } from "react-icons/md";
import { useState } from 'react'

const data = [
  {id: 1, icon: <MdRocketLaunch />, title: 'Awesome projects', image: image1},
  {id: 2, icon: <MdPerson3 />, title: 'Version from', image: image2},
  {id: 3, icon: <MdWork />, title: 'Publishing Pack', image: image3},
  {id: 4, icon: <MdPieChart />, title: 'Vivamus Turpis', image: image4},
  {id: 5, icon: <MdStackedBarChart />, title: 'Posuere Maximus', image: image5},
  {id: 6, icon: <MdAvTimer />, title: 'Consectetur adip', image: image6},
]


export default function OurBestService() {

  const [image, setImage] = useState(image1)

  return (
    <div className='best-services-container'>
      <div className='best-services-title'>
        <h2>Our Best Services</h2>
        <div className="title-bottom-bar" />
      </div>
      <div className="service-down">
        <div className='service-down-links'>
          <ul>
            {
              data.map(item => (
                <li key={item.id} onClick={() => setImage(item.image)} className={item.image === image ? 'is-active' : ''}>
                  <span>
                    {item.icon}
                  </span>
                  {item.title}
                </li>
              ))
            }
          </ul>
        </div>
        <div className='service-down-images'>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  )
}