import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div id="header">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h1 id="logo">company name</h1>
                </div>
                <div class="col-md-8">
                    <ul id="menu" class="float-md-right">
                        <li><a href="">HOME</a></li>
                        <li><a href="">ABOUT US</a></li>
                        <li><a href="">GALLERY</a></li>
                        <li><a href="">PRODUCTS</a></li>
                        <li><a href="">CONTACT US</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div id="banner" class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-lg-6">
                    <div class="banner-title">
                        <h1 class="title">some heading goes here</h1>
                        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quis, architecto quasi. Iste excepturi veniam ea maxime libero officia, nesciunt.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

<div class="container section">
    <div class="row">
        <div class="col-md-12">
            <h2 class="section-head">some heading goes here</h2>
        </div>
        <div class="col-sm-6 col-md-4">
            <div class="service-box">
            <i class="fa fa-anchor"></i>
            <h3>Some Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, provident.</p>
            </div>
        </div>
        <div class="col-sm-6 col-md-4">
            <div class="service-box">
                <i class="fa fa-bar-chart"></i>
                <h3>Some Heading</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, provident.</p>
            </div>
        </div>
        <div class="col-sm-6 col-md-4">
            <div class="service-box">
                <i class="fa fa-diamond"></i>
                <h3>Some Heading</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, provident.</p>
            </div>
        </div>
    </div>
</div>

<div id="testimonials" class="section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2 class="section-head text-white">Testmonials</h2>
            </div>
            <div class="col-md-6">
                <div class="testimonials">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae reprehenderit autem inventore, nemo, maxime tempore.</p>
                    <img src="images/bill-gates.jpg" alt=""/>
                    <div class="author">Bill Gates</div>
                    <div class="author-company">microsoft</div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="testimonials">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae reprehenderit autem inventore, nemo, maxime tempore.</p>
                    <img src="images/steve-jobs.jpg" alt=""/>
                    <div class="author">Steve Jobs</div>
                    <div class="author-company">Apple</div>
                </div>
            </div>
        </div>
    </div>
</div>


<div id="news" class="container section">
    <div class="row">
        <div class="col-md-12">
            <h2 class="section-head">Recent News</h2>
        </div>
        <div class="col-md-6 col-lg-3">
            <div class="news-post">
                <img src="images/post-1.jpg" alt=""/>
                <h3><a href="">News Heading Here</a></h3>
                <div class="post-date">April 30, 2020</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, magni!</p>
                <a href="" class="readmore">Read More</a>
            </div>
        </div>
        <div class="col-md-6 col-lg-3">
            <div class="news-post">
                <img src="images/post-2.jpg" alt=""/>
                <h3><a href="">News Heading Here</a></h3>
                <div class="post-date">April 30, 2020</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, magni!</p>
                <a href="" class="readmore">Read More</a>
            </div>
        </div>
        <div class="col-md-6  col-lg-3">
            <div class="news-post">
                <img src="images/post-3.jpg" alt=""/>
                <h3><a href="">News Heading Here</a></h3>
                <div class="post-date">April 30, 2020</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, magni!</p>
                <a href="" class="readmore">Read More</a>
            </div>
        </div>
        <div class="col-md-6 col-lg-3">
            <div class="news-post">
                <img src="images/post-4.jpg" alt=""/>
                <h3><a href="">News Heading Here</a></h3>
                <div class="post-date">April 30, 2020</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, magni!</p>
                <a href="" class="readmore">Read More</a>
            </div>
        </div>
    </div>
</div>

<div id="footer-sidebar">
    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-md-4">
                <div class="footer-widget">
                    <h4>About Company</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro praesentium, doloremque, aperiam recusandae rem aliquam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, molestias.</p>
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="footer-widget">
                    <h4>Latest News</h4>
                    <ul class="latest-news">
                        <li><a href="">Lorem ipsum dolor sit amet, consectetur.</a></li>
                        <li><a href="">Lorem ipsum dolor sit amet, consectetur.</a></li>
                        <li><a href="">Lorem ipsum dolor sit amet, consectetur.</a></li>
                        <li><a href="">Lorem ipsum dolor sit amet, consectetur.</a></li>
                        <li><a href="">Lorem ipsum dolor sit amet, consectetur.</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="footer-widget">
                    <h4>Company Address</h4>
                    
                        <b>Yahoo Baba, Inc.</b><br/>
                        455 Hill Road, Ambala Cantt<br/>
                        HARYANA, INDIA 133001<br/>
                        P : (123) 456-7890
                    

                </div>
            </div>
        </div>
    </div>
</div>

<div id="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-6">copyright@2020 company name.</div>
            <div class="col-md-6">
                <ul id="social-icons" class="float-md-right">
                    <li><a href="" class="fa fa-facebook-square"></a></li>
                    <li><a href="" class="fa fa-twitter-square"></a></li>
                    <li><a href="" class="fa fa-linkedin-square"></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>

    </div>
  );
}

export default App;
