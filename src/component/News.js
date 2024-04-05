import React, { Component } from 'react';
import NewsItems from './NewsItems';
import PropTypes from 'prop-types'
import Spinner from './Spinner';

export default class News extends Component{
  static defaultProps={
   country:"in",
   pageSize:30,
   category:"general"
  }
  static propTypes ={
      country:PropTypes.string.isRequired,
      PageTransitionEvent:PropTypes.number.isRequired,
      category:PropTypes.string.isRequired
  }
/*articles=[
 
        
               {
               "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Carly Page",
            "title": "MOVEit, Capita, CitrixBleed and more: The biggest data breaches of 2023 | TechCrunch",
            "description": "This past year saw multiple mass   hacks and data thefts involving the exploitation of security flaws in popular file   transfer tools and more.",
            "url": "https://techcrunch.com/2023/12/27/moveit   capita   citrixbleed   biggest   data   breaches   2023/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/12/firstcry.jpg?w=1200",
            "publishedAt": "2023   12   27T01:45:42Z",
            "content": "This year, 2023, was a hell of a year for data breaches, much like the year before it (and the year before that, etc.). Over the past 12 months, weve seen hackers ramp up their exploitation of bugs i… [+8324 chars]"
            },
               {
               "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "BotBuilt wants to lower the cost of homebuilding with robots | TechCrunch",
            "description": "BotBuilt, a Y Combinator   backed startup, is developing robotic systems to lower the cost of homebuilding        or at least house frame building.",
            "url": "https://techcrunch.com/2023/12/27/botbuilt   wants   to   lower   the   cost   of   homebuilding   with   robots/",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/10750/7460f32aa38f4120a95e5c81b1124157.jpg",
            "publishedAt": "2023   12   27T00:46:56Z",
            "content": "Homes aren’t getting cheaper — or necessarily easier to secure.\r\nThis year, the median household income for home buyers jumped to $107,000 from $88,000 last year, according to the National Associatio… [+5073 chars]"
            },
               {
               "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Brian Heater",
            "title": "Apple Vision Pro tipped for late Jan/early Feb release | TechCrunch",
            "description": "Apple oracle Ming   Chi Kuo offered an early holiday gift, narrowing down what he believes will be a “late   January/early   February” release.",
            "url": "https://techcrunch.com/2023/12/26/apple   vision   pro   tipped   for   late   jan   early   feb   release/",
            "urlToImage": "https://c.biztoc.com/p/65119c56f276c0e4/og.webp",
            "publishedAt": "2023   12   26T21:37:12Z",
            "content": "Weve known about the Vision Pro for more than half   a   year now (not to mention the years of rumors), but Apples first spatial computing device is one of consumer electronics biggest question marks hea… [+1530 chars]"
            },
               {
               "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Aisha Malik",
            "title": "Bluesky rolls out in   app video and music player and new 'hide post' feature | TechCrunch",
            "description": "Decentralized social network Bluesky is rolling out a new in   app video and music player for links, along with a new \"hide post\" feature.",
            "url": "https://techcrunch.com/2023/12/26/bluesky   rolls   out   in   app   video   and   music   player   for   links   and   a   new   hide   post   feature/",
            "urlToImage": "https://i-invdn-com.investing.com/news/LYNXNPEC0Q1B5_L.jpg",
            "publishedAt": "2023   12   26T21:22:13Z",
            "content": "Decentralized social network Bluesky is rolling out a new in   app video and music player for links, along with a new “hide post” feature. The new additions bring Bluesky’s user experience closer to X … [+1578 chars]"
            },
               {
               "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Zack Whittaker",
            "title": "CBS, Paramount owner National Amusements says it was hacked | TechCrunch",
            "description": "National Amusements, the cinema chain and corporate parent giant of media giants Paramount and CBS, has confirmed it experienced a data breach in which",
            "url": "https://techcrunch.com/2023/12/26/cbs   paramount   owner   national   amusements   hacked/",
            "urlToImage": "https://c.biztoc.com/p/b5d5a6d24a3f2001/s.webp",
            "publishedAt": "2023   12   26T15:50:50Z",
            "content": "National Amusements, the cinema chain and corporate parent giant of media giants Paramount and CBS, has confirmed it experienced a data breach in which hackers stole the personal information of tens … [+1961 chars]"
            },
               {
               "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Brian Heater",
            "title": "Apple Watch US ban upheld | TechCrunch",
            "description": "A recent ban on U.S. Apple Watch will remain in place, after the Biden administration declined to veto an earlier ruling by the ITC.",
            "url": "https://techcrunch.com/2023/12/26/apple   watch   us   ban   upheld/",
            "urlToImage": "https://www.investopedia.com/thmb/qZukaMslC4NWaMjlp5p2FqcPiKM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1863299151-549686e3a8de4b1396afe71e246fdc15.jpg",
            "publishedAt": "2023   12   26T15:39:24Z",
            "content": "A recent U.S. ban on Apple Watch imports will remain in place, after the Biden administration declined to veto an earlier ruling by the International Trade Commission. The ITC ruling goes into effect… [+2290 chars]"
            },
               {
               "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Alex Wilhelm",
            "title": "VCs are entering 2024 with 'healthy paranoia' | TechCrunch",
            "description": "Today on Equity, we're joined by Deepka Rana, a London   based Principal at Northzone focused on early   stage companies across consumer internet and B2B SaaS.",
            "url": "https://techcrunch.com/2023/12/26/vcs   are   entering   2024   with   healthy   paranoia/",
            "urlToImage": "https://images.mktw.net/im-810845/social",
            "publishedAt": "2023   12   26T14:46:29Z",
            "content": "Listen here or wherever you get your podcasts.\r\nHello and welcome back to Equity, a podcast about the business of startups, where we unpack the numbers and nuance behind the headlines.\r\nTo close out … [+1236 chars]"
            },
               {
               "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Amanda Silberling",
            "title": "The internet moments that defined 2023 | TechCrunch",
            "description": "Can you believe that it was only this summer when Baby Gronk rizzed up Livvy Dunne? Sometimes, the internet’s most viral memes may seem entirely",
            "url": "https://techcrunch.com/2023/12/26/the   internet   moments   that   defined   2023/",
            "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--orVTf1gy--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2023-12-28t122638z_1_lynxmpejbr09y_rtroptp_3_vietnam-autos-vinfast.jpg?itok=ZPMgd85M",
            "publishedAt": "2023   12   23T22:19:20Z",
            "content": "Can you believe that it was only this summer when Baby Gronk rizzed up Livvy Dunne? Sometimes, the internets most viral memes may seem entirely incomprehensible (like when Baby Gronk rizzed up Livvy … [+12379 chars]"
            },
               {
               "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Casber Wang",
            "title": "What VCs are looking for in the next wave of cybersecurity startups | TechCrunch",
            "description": "The next wave of successful startups will help companies harness GenAI to improve organizational productivity while preventing attacks.",
            "url": "https://techcrunch.com/2023/12/26/what   vcs   are   looking   for   in   the   next   wave   of   cybersecurity   startups/",
            "urlToImage": "https://www.marketscreener.com/images/reuters/2022-08/2022-08-05T141819Z_1_LYNXMPEI740OW_RTROPTP_3_VIETNAM-AUTOS-VINFAST.JPG",
            "publishedAt": "2023   12   22T22:23:54Z",
            "content": "In cybersecurity, AI often stands for already implemented. Security vendors have used AI   based technologies to use existing knowledge databases and address talent gaps. As an investor who focuses on … [+2476 chars]"
            },
               {
               "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
            },
            "author": "Tim De Chant",
            "title": "EV fast   charging networks face a challenging 2024 | TechCrunch",
            "description": "The EV world, from a charging perspective, was previously split in two. There was Tesla and then there was everyone else.",
            "url": "https://techcrunch.com/2023/12/26/ev   fast   charging   networks   2024/",
            "urlToImage": "https://cryptoslate.com/wp-content/uploads/2023/12/bitcoin-mining-stocks.jpg",
            "publishedAt": "2023   12   19T22:56:41Z",
            "content": "Sometime in 2024, maybe as early as February, half a dozen electric vehicle charging companies will face a reckoning.\r\nFor years, they had little competition except for each other, which is to say, n… [+1539 chars]"
        }
            
    ]*/
    articles=[]
    constructor(prop){
    super()
    console.log("i am constructor");
    this.state={
        articles: this.articles,
        loading:false,
        page:0,
        totalResults:0,
    };
   document.title=`Navee news-${prop.category}`
 }
  async componentDidMount(){
   this.props.setProgress(10)
  // console.log("iam mounted")
  //this.props.setProgress(10);
   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=99beb82d683c4cc1a2381c083bf3e0fe&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
   {
      this.setState({
         loading:true
      }) 
   }
   let data = await fetch(url);
   this.props.setProgress(30)
 //  console.log(data);
   let parsedData = await data.json();
   this.props.setProgress(50)
   console.log(parsedData);
   this.setState({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
   });
   this.props.setProgress(100)

  }
  
  handleNext =async()=>{
   this.props.setProgress(10)
   {
      this.setState({
         loading:true
      })
   }
   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=99beb82d683c4cc1a2381c083bf3e0fe&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
     let data=await fetch(url);
     this.props.setProgress(30)
     let parsedData =await data.json();
     this.props.setProgress(50)
     this.setState({
      page:this.state.page+1,
      articles:parsedData.articles,
      loading:false

     })
     this.props.setProgress(100)
}
handlePrev =async()=>{
   this.props.setProgress(10)
   {
      this.setState({
         loading:true
      })
   }
   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=99beb82d683c4cc1a2381c083bf3e0fe&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
     let data=await fetch(url);
     this.props.setProgress(30)
     let parsedData =await data.json();
     this.props.setProgress(50)
     this.setState({
      page:this.state.page-1,
      loading:false,

      articles:parsedData.articles
     })
     this.props.setProgress(100)
}
    render(){
  return (
   <>
   <h1 className='text-center text-danger'>Live now</h1>
   {this.state.loading && <Spinner />}
   <div className="container mt-3">
    <div className="row">
         {this.state.articles.map((element)=>{
            return(
                <div className='col-md-4' key={element.url}> 
                <NewsItems
                title={element.title}
                description={element.description}
                url={element.urlToImage}
                LinkUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
                />
                </div>
            )
         }
         )}
    </div>
   <div className='conatainer d-flex justify-content-between'>
  <button className='btn btn-success' 
  disabled={this.state.page<=1}
  type='button'
  onClick={this.handlePrev}
  
  >
  &laquo;Prev

  </button>
  <button className='btn btn-success'
   type='button'
   onClick={this.handleNext}
   disabled={this.state.page>=Math.ceil(this.state.totalResults/this.props.pageSize)}

   >
  Next &raquo;
  </button>
   </div>
   </div>
   <br/>
   <br/>
   </>
  )
 }
}
