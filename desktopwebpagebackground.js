import React from 'react'

import styles from './desktopwepagebackground.module.css'

const Desktopwepagebackground = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['desktopwepagebackground']}>
        <div className={styles['bottomlinks']}>
          <div className={styles['lookingtobuy']}>
            <span className={styles['text']}>
              <span>I’M LOOKING TO BUY</span>
            </span>
          </div>
          <div className={styles['scheduleconsultation']}>
            <span className={styles['text02']}>
              <span>SCHEDULE CONSULTATION</span>
            </span>
          </div>
          <div className={styles['lookingtosell']}>
            <span className={styles['text04']}>
              <span>I’M LOOKING TO SELL</span>
            </span>
          </div>
        </div>
        <span className={styles['text06']}>
          <span>TRANSFORMATIVE SERVICE &amp; CARE</span>
        </span>
        <div className={styles['bannerphoto']}>
          <img
            src="/bannerphoto173-2kd-600h.png"
            alt="bannerphoto173"
            className={styles['bannerphoto1']}
          />
        </div>
        <div className={styles['nav']}>
          <div className={styles['topleftmenuoptions']}>
            <div className={styles['searchhomes']}>
              <span className={styles['text08']}>
                <span>SEARCH HOMES</span>
              </span>
            </div>
            <div className={styles['buying']}>
              <span className={styles['text10']}>
                <span>BUYING</span>
              </span>
            </div>
            <div className={styles['selling']}>
              <span className={styles['text12']}>
                <span>SELLING</span>
              </span>
            </div>
          </div>
          <div className={styles['logo']}>
            <img
              src="/logolarge1143-ny9d-200w.png"
              alt="logolarge1143"
              className={styles['logolarge1']}
            />
          </div>
          <div className={styles['toprightmenuoptions']}>
            <div className={styles['about']}>
              <span className={styles['text14']}>
                <span>ABOUT</span>
              </span>
            </div>
            <div className={styles['contact']}>
              <span className={styles['text16']}>
                <span>CONTACT</span>
              </span>
            </div>
            <div className={styles['clienttestimony']}>
              <span className={styles['text18']}>
                <span>CLIENT TESTIMONY</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Desktopwepagebackground
