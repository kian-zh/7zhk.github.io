import React from 'react'
import style from './index.module.less'

class Resource extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {
  }

  render() { 
    return (
      <div className={style.container}>
          Hello
          <div className={style.card}></div>
          <div className={style.card}></div>
          <div className={style.card}></div>
          <div className={style.card}></div>
          <div className={style.card}></div>
          <div className={style.card}></div>
          <div className={style.card}></div>
      </div>
    );
  }
}

export default Resource;