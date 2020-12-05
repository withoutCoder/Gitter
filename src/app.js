import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import { set as setGlobalData } from './utils/global_data'

import Index from './pages/index'

import configStore from './store'

import './app.less'
import './assets/ionicons/css/ionicons.min.css'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/index/favoriteLanguages',
      'pages/account/index',
      'pages/git/git',
      'pages/git/tutorials',
      'pages/activity/index',
      'pages/search/index',
      'pages/search/searchResult',
      'pages/account/follow',
      'pages/account/about',
      'pages/account/developerInfo',
      'pages/repo/contentList',
      'pages/repo/issues',
      'pages/repo/issueDetail',
      'pages/repo/addIssue',
      'pages/repo/addComment',
      'pages/repo/repoList',
      'pages/repo/repo',
      'pages/repo/contributors',
      'pages/repo/starredRepo',
      'pages/repo/file',
      'pages/repo/repoEvents',
      'pages/login/login'
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'Gitter',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: 'pages/index/index',
        text: '激励列表',
        iconPath: './assets/images/tab_trend.png',
        selectedIconPath: './assets/images/tab_trend_s.png'
      },
      {
        pagePath: 'pages/account/index',
        text: '我的',
        iconPath: './assets/images/tab_me.png',
        selectedIconPath: './assets/images/tab_me_s.png'
      }],
      color: '#8a8a8a',
      selectedColor: '#2d8cf0',
      backgroundColor: '#ffffff',
      borderStyle: 'white'
    },
    navigateToMiniProgramAppIdList: [
      'wx8abaf00ee8c3202e'
    ]
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentCatchError() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      // <Provider store={store}>
        <Index />
      // </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
