import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/launch">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="launch" element={<Launch />}>
          <Route path="/" element={<LaunchIndex />} />
          <Route path=":slug" element={<LaunchShoe />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}


function Home() {
  return (
    <div>
      <h1>Wellcome To My Store</h1>
      <div>
        <p className="text"> <h3>Reasons To Buy</h3><br />
        <ul>
           <li>Some people claimed that the underfoot cushioning system was comfortable and responsive to movements.</li>
           <li>The upper unit was praised for hugging the foot securely without limiting movement.</li>
           <li>The fabrics of the façade were lauded for being smooth and free of irritants like unnecessary seams.</li>
           <li>Several runners complimented the lightweight structure of the Nike Air Zoom Pegasus 36, stating that the whole product didn’t drag their feet down.</li>
           <li>According to a tester, the lacing system and the heel collar were able to hold the foot in place and prevent in-shoe quivering.</li>
           <li>The gripping ability of the outsole was praised by those who have worn this shoe.</li>
           </ul>
           </p>
        <div className="imag">
        <img src="https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt={img} />
        </div>
        <div className="imge">
        <img src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt={img} />
        </div>
      </div>
    </div>
  )
}

function Launch() {
  return (
    <div>
      <h1>Range of Products</h1>

      <Outlet />
    </div>
  )
}

function LaunchIndex() {
  return (
    <ul>
      {Object.entries(shoes).map(([slug, { name, img }]) =>
        <li key={slug}>
          <Link to={`/launch/${slug}`}>
            <h2>{name}</h2>
            <img src={img} alt={name} />
          </Link>
        </li>)}
    </ul>
  )
}

function LaunchShoe() {
  const { slug } = useParams();
  const shoe = shoes[slug];

  if (!shoe) {
    return <h2>Shoes Not Found</h2>
  }

  const { name, img } = shoe;

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
    </div>
  )
}

function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}

export default App;


const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  }
};

const img = {
  img: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
}
