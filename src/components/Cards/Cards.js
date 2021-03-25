import React from 'react'
import './Cards.css'
import CardItem from '../CardItem/CardItem'

function Cards() {
  return (
    <div className='cards'>
      <h1>WHY CHOOSE US?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-12.jpg'
              text='Issuer / R&T agent can create, modify e-Voting event number (EVEN) along with registration of investors with EVEN.'
              label='INCREASED PARTICIPATION'
              path='/services'
            />
            <CardItem
              src='images/img-13.jpg'
              text='e-Voting is a facility which enables the scrutinizer to view / authorize EVEN results.'
              label='SECURE'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='e-Voting is a common Internet Infrastructure that enables the investors to vote electronically on resolution of companies.'
              label='ACCESSIBILITY'
              path='/services'
            />
            <CardItem
              src='images/img-17.jpg'
              text='e-Voting is a common internet infrastructure that enables the investors to vote electronically on resolution of company.'
              label='SUPPORT'
              path='/products'
            />
            <CardItem
              src='images/img-14.jpg'
              text='Self Administered or Fully Managed Elections Professional Electoral Services Custom Voting Technology'
              label='TRANSPARENCY'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
