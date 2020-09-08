import React, {Component} from 'react'
import SmartSlider from "react-smart-slider" //https://www.npmjs.com/package/react-smart-slider
// https://www.npmjs.com/package/swiper

class Slide extends Component {
render() {

const slidesArray = [
{
url: "/static/b20200709.jpg"
},
{
url: "/static/20200629.png"
},
{
url: "/static/banner_memechat.jpg"
},
{
url: "/static/20200619/1.png"
},
{
url: "/static/20200618/1.gif"
},
{
url: "/static/20200618/2.gif"
},
{
url: "/static/20200611/1.png"
},
{
url: "/static/20200611/2.png"
}
]
return (

                <SmartSlider slides={slidesArray} buttonShape="square" autoSlide={true} height="100px" minHeight="100px" />
   
)
}
}

export default Slide