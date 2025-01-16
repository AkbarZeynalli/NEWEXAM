import React from 'react'
import HeroImg from "../../assets/images/hero.png"
import "./Hero.scss"

const Hero = () => {
  return (
    <section className='hero-section'>
        <div className='hero'>
            <div className="row">
                <div className="col-6">
                    <img src={HeroImg} alt="" />
                </div>
                <div className="col-6">
                    <div className="content">
                        <p>Flat 75%Off</p>
                        <h1>It’s Happening
                        this Season!</h1>
                        <button>Purchase Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero