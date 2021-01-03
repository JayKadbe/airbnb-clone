import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult';


function SearchPage() {
    return (
        <div className='searchPage'>
          <div className='searchPage__info' >
            <p>62 stays . 26 august to 30 august . 2 guest</p>
            <h1>Stays Nearby</h1>
            <Button
            variant='outlined'
            > Cancellation Flexibility
            </Button>
            <Button variant='outlined' > 
                Type of place
            </Button>
            <Button variant='outlined'>
                Price
            </Button>
            <Button variant='outlined' >
                Rooms and beds
            </Button>
            <Button variant='outlined' >
              More
            </Button>
          </div>
          <SearchResult
            img='https://i.pinimg.com/236x/8c/c7/ad/8cc7adbb387c52af3eb75a155defe973.jpg'
            location= 'Private room in center of London'
            title='Stay at this specious Edwardian House'
            description= "1 guest . 1 bedroom . 1 bed . 1.5 shared . bthrooms . Wifi . Kitchen . Free parking . Washing Machine"
            star = {4.73}
            price = "$30 / night"
            total = "$117 total"
          />
              <SearchResult
            img='https://i.pinimg.com/236x/8c/c7/ad/8cc7adbb387c52af3eb75a155defe973.jpg'
            location= 'Private room in center of London'
            title='Stay at this specious Edwardian House'
            description= "1 guest . 1 bedroom . 1 bed . 1.5 shared . bthrooms . Wifi . Kitchen . Free parking . Washing Machine"
            star = {4.73}
            price = "$30 / night"
            total = "$117 total"
          />
              <SearchResult
            img='https://i.pinimg.com/236x/8c/c7/ad/8cc7adbb387c52af3eb75a155defe973.jpg'
            location= 'Private room in center of London'
            title='Stay at this specious Edwardian House'
            description= "1 guest . 1 bedroom . 1 bed . 1.5 shared . bthrooms . Wifi . Kitchen . Free parking . Washing Machine"
            star = {4.73}
            price = "$30 / night"
            total = "$117 total"
          />
        </div>
    )

}

export default SearchPage
