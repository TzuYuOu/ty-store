import React from 'react';
import {Link} from 'react-router-dom';

const History = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-3">
          <Link to='/' className="col-1"><i className="bi bi-arrow-left"></i></Link>
          <span className="col-11 text-center">歷史訂單</span>
        </div>
      
        
        <div className="my-5 shadow-sm full-width">
          <section className="d-flex flex-column justify-content-center align-items-center"> 
            <h3 className="text-center mb-5 px-4">拉亞后里大圳店</h3>
            <span className="bg-warning text-white rounded p-2">自取</span>
            <div className="py-1 px-5 full-width">
              <div className="d-flex justify-content-between">
                <span>取單號</span>
                <span>68</span>
              </div>
              <hr/>
              <div className="d-flex justify-content-between">
                <span>取餐時間</span>
                <span>2021/07/26 10:30</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>訂單編號</span>
                <span>093</span>
              </div>
            </div>
          </section>
          <hr/>
          <section className="px-5">
            <div className="row">
              <div className="col-6 d-flex ">
                <span>1</span>
                <label>玉米蛋餅</label>
              </div>
              <span className="col text-end">$35</span>
            </div>
            <div className="row">
              <div className="d-flex col-6 ">
                <span >1</span>
                <label >玉米蛋餅</label>
              </div>
              <span className="col text-end">$35</span>
            </div>
          </section>
          <hr/>
          <section className="px-5">
            <div className="row">
              <div className="col col-6">總價</div>
              <div className="col col-6 text-end">$185</div>
            </div>
          </section>
          
          <div className="px-5 mt-5 full-width">
            <div className="row">
              <button className="rounded bg-warning text-white">再訂一次</button>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default History
