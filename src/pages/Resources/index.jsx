import React from 'react'
import style from './index.module.less'

class Resource extends React.Component {
  constructor() {
    super();
    this.state = {
      contentList: [
        {name: 'WASM Installation', url: './data/wasmInstall.rar'},
      ],
      listDom: []
    };
      this.container = React.createRef();
  }

  componentDidMount() {
        /*
    
        //判断浏览器
        let isIE = navigator.userAgent.match(/MSIE (\d)/i);
        isIE = isIE ? isIE[1] : undefined;
        let isFF = /FireFox/i.test(navigator.userAgent);
        const container = this.container.current
        if (isIE < 9) //传统浏览器使用MouseWheel事件
            container.attachEvent("onmousewheel", function (e) {
                //计算鼠标滚轮滚动的距离
                //一格3行，每行40像素
                let v = e.wheelDelta / 2;
                container.scrollLeft += v;
                //阻止浏览器默认方法
                return false;
            });
        else if (!isFF) //除火狐外的现代浏览器也使用MouseWheel事件
            container.addEventListener("mousewheel", function (e) {
                //计算鼠标滚轮滚动的距离
                let v = -e.wheelDelta / 2;
                container.scrollLeft += v;
                //阻止浏览器默认方法
                e.preventDefault();
            }, false);
        else //火狐使用DOMMouseScroll事件
            container.addEventListener("DOMMouseScroll", function (e) {
                //计算鼠标滚轮滚动的距离
                //一格是3行，但是要注意，这里和像素不同的是它是负值
                container.scrollLeft += e.detail * 80;
                //阻止浏览器默认方法
                e.preventDefault();
            }, false);

            */
  }

  listDom() {
    const list = this.state.contentList.map((item)=>
      <div onClick={()=>{window.location=item.url}} key={item.name} className={style.card}>
        {item.name}
      </div>
    )
    return list
  }
  
  yWheel(e) {
    if(e.deltaY < 0){e.currentTarget.scrollLeft -= 100;}
    if(e.deltaY > 0){e.currentTarget.scrollLeft += 100;}
  }

  render() {
    return (
      <div className={style.background}>
        <span className={style.title} >Downloads</span>
        <div ref={this.container} className={style.container} onWheel={this.yWheel}>
            {this.listDom()}
        </div>
      </div>
    );
  }
}

export default Resource;