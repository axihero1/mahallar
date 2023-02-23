import React from 'react'
import "./migrant.css" 
import { data } from '../data';

function Migrant() {
  return (
    <div>
      <div className="yoshlar-container">
        <div className="yoshlar-item1">
          {data.map((item, index) => {
            return (
              <div className="yoshlar-box flex">
                <div className="yoshlar-start flex">
                  <strong className="id">{item.id}</strong>
                  <div className="tayoq tayoqs"></div>
                  <p className="margin-left">{item.familiya} </p>
                  <p>{item.name1} </p>
                  <p>{item.ochistva} </p>
                </div>
                <div className="yoshlar-finish flex">
                  <div className="tayoq"></div>
                  <p>{item.mahalla} </p>
                  <p>{item.qishloq} </p>
                  <p>{item.uynomer} </p>
                </div>
                <div className="none"></div>
                <div></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Migrant
