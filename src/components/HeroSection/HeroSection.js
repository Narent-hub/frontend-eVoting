import React from 'react'
import { Button } from '../Button/Button'
import './HeroSection.css'
import '../../App.scss'
import video from '../../assets/videos/video-4.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted />
      <h1>E-voting</h1>
      <p>Online Election Perfection</p>

      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Choose Role
        </Button>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          How it works
          <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
